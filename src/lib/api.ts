// Talks directly to the account app backend (the same one the main Billing
// Next.js frontend uses) — no mocks. Login issues a real seller session;
// products/clients are fetched for that seller's organization.

// Replaced at build time via webpack.web.config.ts's DefinePlugin (the plain
// web build) or left as the localhost default for the packaged Electron app,
// which always talks to a locally-run Billing backend during development.
const BASE_URL = process.env.API_BASE_URL || "http://localhost:8080";

export interface SellerSession {
    accessToken: string;
    id: string;
    username: string;
    role?: string;
    organizationId: string;
    organizationName?: string;
    organizationLogoUri?: string;
    agency?: string;
    agencyId?: string;
    agencyAddress?: string;
    agencyCity?: string;
    salePoint?: string;
    salesPointId?: string;
    taxNumber?: string;
    organizationEmail?: string;
    uiPermissions?: Record<string, unknown>;
    permittedSaleSizes?: string[];
    mustChangePassword?: boolean;
}

async function handle<T>(res: Response): Promise<T> {
    if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || `Request failed: ${res.status}`);
    }
    return res.json() as Promise<T>;
}

// The seller auth endpoints reply with a capitalized "Id" (and "Permissions")
// — an intentional, pre-existing contract the main Billing frontend already
// depends on (see the backend's SellerAuthResponse). Normalized here so the
// rest of this app can just use session.id like anywhere else.
function normalizeSellerSession(raw: any): SellerSession {
    return { ...raw, id: raw.id ?? raw.Id };
}

export async function loginSeller(username: string, password: string): Promise<SellerSession> {
    const res = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });
    return normalizeSellerSession(await handle<any>(res));
}

export interface KernelOrganizationSummary {
    id: string;
    displayName?: string;
    legalName?: string;
    shortName?: string;
    email?: string;
    taxNumber?: string;
    logoUri?: string;
    isActive?: boolean;
}

export type TryOutResult =
    | { requiresOrganizationSelection: true; availableOrganizations: KernelOrganizationSummary[] }
    | { requiresOrganizationSelection: false; session: SellerSession };

// "Try Out": authenticates directly against Kernel using an existing
// Kernel-registered account, auto-provisioning/reusing a local seller so the
// rest of the app behaves like a normal login. If the account belongs to more
// than one organization, the backend returns requiresOrganizationSelection
// with the org list instead of a session — resubmit with organizationId once
// the user picks one.
export async function tryOut(username: string, password: string, organizationId?: string): Promise<TryOutResult> {
    const res = await fetch(`${BASE_URL}/api/auth/try-out`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, ...(organizationId ? { organizationId } : {}) }),
    });
    const data = await handle<any>(res);
    if (data.requiresOrganizationSelection) {
        return { requiresOrganizationSelection: true, availableOrganizations: data.availableOrganizations ?? [] };
    }
    return { requiresOrganizationSelection: false, session: normalizeSellerSession(data) };
}

// Quick POS login: organization + 5-digit PIN, no password. The organizationId
// comes from whichever seller last did a full credentials login on this
// terminal (cached in localStorage) — a PIN alone isn't enough since PINs are
// only unique per-organization, not globally.
//
// Backend endpoint: POST /api/auth/login/by_pin
// Body: { organizationId: UUID, pin: string }
export async function loginByPin(organizationId: string, pin: string): Promise<SellerSession> {
    const res = await fetch(`${BASE_URL}/api/auth/login/by_pin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ organizationId, pin }),
    });
    return normalizeSellerSession(await handle<any>(res));
}

export async function getProducts(session: SellerSession): Promise<any[]> {
    const res = await fetch(`${BASE_URL}/api/products/organization/${session.organizationId}`, {
        headers: { Authorization: `Bearer ${session.accessToken}` },
    });
    return handle<any[]>(res);
}

const PRIVILEGED_ROLES = ["OWNER", "AGENCY_MANAGER"];

// POS_SELLER/SELLER only see customers assigned to them as account manager;
// OWNER/AGENCY_MANAGER see the full organization customer list.
export async function getClients(session: SellerSession): Promise<any[]> {
    if (session.role && !PRIVILEGED_ROLES.includes(session.role)) {
        const res = await fetch(
            `${BASE_URL}/api/customer-assignments/seller/${session.id}/customers?organizationId=${session.organizationId}`,
            {
                headers: {
                    Authorization: `Bearer ${session.accessToken}`,
                    "X-Organization-ID": session.organizationId,
                },
            }
        );
        return handle<any[]>(res);
    }

    const res = await fetch(`${BASE_URL}/api/tiers/clients`, {
        headers: {
            Authorization: `Bearer ${session.accessToken}`,
            "X-Organization-ID": session.organizationId,
        },
    });
    return handle<any[]>(res);
}

export interface PosSession {
    id: string;
    salesPointId: string;
    organizationId: string;
    agencyId?: string;
    sellerId: string;
    status: "PENDING" | "OPEN" | "SUSPENDED" | "CLOSED" | "CANCELLED" | "REOPENED";
    openingAmount?: number;
    closingAmount?: number;
    startTime?: string;
    endTime?: string;
    loginTime?: string;
    logoutTime?: string;
    locked?: boolean;
}

export function parseSessionDate(raw: string | undefined): Date | null {
    if (!raw) return null;
    if (raw.includes('Z') || raw.includes('+')) return new Date(raw);
    const d = new Date(raw + 'Z');
    return isNaN(d.getTime()) ? null : d;
}

export interface SalesPoint {
    id: string;
    salesPointName: string;
    organizationId: string;
    agencyId?: string;
    status?: string;
    currency?: string;
}

// Resolve a sales-point name from its ID — used by SessionGate to display a
// human-readable label instead of the raw UUID.
export async function getSalesPointById(session: SellerSession, salesPointId: string): Promise<SalesPoint | null> {
    try {
        const res = await fetch(
            `${BASE_URL}/api/sales-points?organizationId=${session.organizationId}`,
            { headers: { Authorization: `Bearer ${session.accessToken}` } }
        );
        const list = await handle<SalesPoint[]>(res);
        return list.find((sp) => sp.id === salesPointId) ?? null;
    } catch {
        return null;
    }
}

// Either a session already OPEN for this seller (e.g. they logged back in
// mid-shift without logging out) or the one PENDING session scheduled for
// them — the gate resumes straight into OPEN ones and only asks to "Start"
// a PENDING one. If neither exists, access is blocked entirely.
export async function getActiveOrPendingSession(session: SellerSession): Promise<{ session: PosSession; alreadyOpen: boolean } | null> {
    const res = await fetch(
        `${BASE_URL}/api/sessions?sellerId=${session.id}&organizationId=${session.organizationId}`,
        { headers: { Authorization: `Bearer ${session.accessToken}` } }
    );
    const sessions = await handle<PosSession[]>(res);
    const open = sessions.find((s) => s.status === "OPEN");
    if (open) return { session: open, alreadyOpen: true };
    const pending = sessions.find((s) => s.status === "PENDING");
    if (pending) return { session: pending, alreadyOpen: false };
    return null;
}

export async function startSession(session: SellerSession, sessionId: string, salesPointId?: string): Promise<PosSession> {
    const res = await fetch(`${BASE_URL}/api/sessions/${sessionId}/start`, {
        method: "POST",
        headers: { Authorization: `Bearer ${session.accessToken}` },
    });
    if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        if (res.status === 409 && salesPointId) {
            const openRes = await fetch(`${BASE_URL}/api/sessions`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${session.accessToken}`,
                    "X-Organization-ID": session.organizationId,
                },
                body: JSON.stringify({
                    type: "POS",
                    sellerId: session.id,
                    salesPointId: salesPointId,
                    organizationId: session.organizationId,
                    openingAmount: 0,
                }),
            });
            if (openRes.ok) {
                return handle<PosSession>(openRes);
            }
        }
        throw new Error(body.message || `Request failed: ${res.status}`);
    }
    return res.json() as Promise<PosSession>;
}

// Persists a real invoice in the backend — called once a POS payment succeeds.
// Mirrors the account app's SettingService.composeNumber exactly (see
// SettingService.java) — generated here instead of relying on the backend to
// fill it in, since the backend's own Facture-creation path doesn't generate
// one at all (only Devis creation does, server-side).
export interface SequenceSetting {
    typeNumerotation?: string;
    includeOrgCode?: boolean;
    orgCode?: string;
    includeBranchCode?: boolean;
    branchCode?: string;
    includeTva?: boolean;
    includeDate?: boolean;
    randomSeq4?: boolean;
}

const DOC_TYPE_CODES: Record<string, string> = {
    DEVIS: "QUO",
    FACTURE: "INV",
};

// Exported so the offline layer can fetch-once and cache the whole array
// instead of hitting this endpoint on every single checkout.
export async function getNumberingSettings(session: SellerSession): Promise<SequenceSetting[]> {
    const res = await fetch(`${BASE_URL}/api/settings/organization/${session.organizationId}/numbering`, {
        headers: { Authorization: `Bearer ${session.accessToken}` },
    });
    return handle<SequenceSetting[]>(res);
}

async function getNumberingSetting(session: SellerSession, type: "DEVIS" | "FACTURE"): Promise<SequenceSetting | undefined> {
    const settings = await getNumberingSettings(session);
    return settings.find((s) => s.typeNumerotation === type);
}

export function composeDocumentNumber(setting: SequenceSetting | undefined, type: "DEVIS" | "FACTURE", hasTva: boolean): string {
    const segments: string[] = [];
    if (setting?.includeOrgCode && setting.orgCode) segments.push(setting.orgCode.toUpperCase());
    segments.push(DOC_TYPE_CODES[type] ?? "DOC");
    if (setting?.includeBranchCode && setting.branchCode) segments.push(setting.branchCode.toUpperCase());
    if (setting?.includeTva) segments.push(hasTva ? "T" : "NT");
    if (setting?.includeDate) {
        const d = new Date();
        const pad = (n: number) => String(n).padStart(2, "0");
        segments.push(`${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}`);
    }
    if (setting?.randomSeq4) segments.push(String(Math.floor(Math.random() * 10000)).padStart(4, "0"));
    return segments.join("-");
}

export async function generateDocumentNumber(session: SellerSession, type: "DEVIS" | "FACTURE", hasTva: boolean): Promise<string> {
    const setting = await getNumberingSetting(session, type);
    return composeDocumentNumber(setting, type, hasTva);
}

export async function createFacture(session: SellerSession, request: any): Promise<any> {
    const res = await fetch(`${BASE_URL}/api/factures`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.accessToken}`,
            "X-Organization-ID": session.organizationId,
        },
        body: JSON.stringify(request),
    });
    return handle<any>(res);
}

// Persists a real quotation in the backend — no payment involved.
export async function createDevis(session: SellerSession, request: any): Promise<any> {
    const res = await fetch(`${BASE_URL}/api/devis`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.accessToken}`,
            "X-Organization-ID": session.organizationId,
        },
        body: JSON.stringify(request),
    });
    return handle<any>(res);
}
