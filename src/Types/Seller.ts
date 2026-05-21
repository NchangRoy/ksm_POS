export interface EmployeeResponse {
    id?: string;
    organizationId?: string;
    agencyId?: string;
    actorId?: string;

    actorDisplayName?: string;

    matricule?: string;
    departmentCode?: string;

    status?: string;
    dateEmbauche?: string;

    permissions?: EmployeePermission[];

    // payroll info
    numCnps?: string;
    categorie?: number;
    echelon?: string;

    // payment info
    modePaiement?: string;
    compteBancaire?: string;
    numMobileMoney?: string;
    operateurMm?: string;
}

export enum EmployeePermission {
    NEGOTIATE_PRICE = 'NEGOTIATE_PRICE',
    GIVE_DISCOUNT = 'GIVE_DISCOUNT',
    ISSUE_REFUND = 'ISSUE_REFUND',
}

export const MOCK_EMPLOYEES: EmployeeResponse[] = [
    {
        "id": "emp-001",
        "organizationId": "org-001",
        "agencyId": "agency-yaounde",
        "actorId": "actor-001",
        "actorDisplayName": "alice_smith",
        "matricule": "EMP2026001",
        "departmentCode": "SALES",
        "status": "ACTIVE",
        "dateEmbauche": "2025-11-10",

        "permissions": [
            EmployeePermission.NEGOTIATE_PRICE,
            EmployeePermission.GIVE_DISCOUNT
        ],

        "modePaiement": "MOBILE_MONEY",
        "numMobileMoney": "670000001",
        "operateurMm": "MTN"
    },
    {
        "id": "emp-002",
        "organizationId": "org-001",
        "agencyId": "agency-yaounde",
        "actorId": "actor-002",
        "actorDisplayName": "fureh_mitoto",

        "matricule": "EMP2026002",
        "departmentCode": "SALES",
        "status": "ACTIVE",
        "dateEmbauche": "2026-01-15",

        "permissions": [],

        "modePaiement": "BANK_TRANSFER",
        "compteBancaire": "100200300400"
    }
]