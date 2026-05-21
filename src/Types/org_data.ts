export interface OrganizationResponse {
    'id'?: string;
    'tenantId'?: string;
    'businessActorId'?: string;
    'governanceStatus'?: string;
    'governedByUserId'?: string;
    'governedAt'?: string;
    'governanceReason'?: string;
    'code'?: string;
    'service'?: string;
    'isIndividualBusiness'?: boolean;
    'email'?: string;
    'shortName'?: string;
    'longName'?: string;
    'description'?: string;
    'logoUri'?: string;
    'logoId'?: string;
    'websiteUrl'?: string;
    'socialNetwork'?: string;
    'businessRegistrationNumber'?: string;
    'taxNumber'?: string;
    'capitalShare'?: number;
    'ceoName'?: string;
    'yearFounded'?: number;
    'keywords'?: Set<string>;
    'numberOfEmployees'?: number;
    'legalForm'?: string;
    'isActive'?: boolean;
    'status'?: string;
    'deletedAt'?: string;
    'legalName'?: string;
    'displayName'?: string;
    'organizationType'?: string;
}


export interface AgencyResponse {
    id?: string;

    organizationId?: string;

    code?: string;

    shortName?: string;
    longName?: string;
    description?: string;

    email?: string;
    phoneNumber?: string;

    country?: string;
    city?: string;
    address?: string;



    isActive?: boolean;
    status?: string;

    createdAt?: string;
}

export interface SalesPointResponse {
    id?: string;

    organizationId?: string;
    agencyId?: string;

    code?: string;
    name?: string;
    description?: string;



    // optional device info
    terminalCode?: string;

    isActive?: boolean;
    status?: string;

    createdAt?: string;
}



export const MOCK_ORGANIZATION: OrganizationResponse = {
    "id": "org-001",
    "tenantId": "tenant-001",
    "businessActorId": "actor-001",

    "governanceStatus": "APPROVED",
    "governedByUserId": "admin-001",
    "governedAt": "2026-05-21T08:00:00Z",
    "governanceReason": "Business verified",

    "code": "FUREH-ORG",
    "service": "Retail Commerce",

    "isIndividualBusiness": false,

    "email": "contact@furehstore.com",

    "shortName": "Fureh Store",
    "longName": "Fureh Retail and Distribution Store",

    "description": "Retail company specialized in electronics and accessories.",

    "logoUri": "https://example.com/logo.png",
    "logoId": "logo-001",

    "websiteUrl": "https://furehstore.com",
    "socialNetwork": "@furehstore",

    "businessRegistrationNumber": "RC/YAO/2026/B/001",
    "taxNumber": "M021699999999A",

    "capitalShare": 5000000,

    "ceoName": "Fureh Nchang",
    "yearFounded": 2024,



    "numberOfEmployees": 12,

    "legalForm": "SARL",

    "isActive": true,
    "status": "ACTIVE",

    "deletedAt": null,

    "legalName": "Fureh Retail SARL",
    "displayName": "Fureh Store",

    "organizationType": "PRIVATE_COMPANY"
}


export const MOCK_AGENCIES: AgencyResponse[] = [{
    "id": "agency-001",

    "organizationId": "org-001",

    "code": "YAO-01",

    "shortName": "Yaounde Branch",
    "longName": "Yaounde Central Branch",

    "description": "Main branch located in Yaounde.",

    "email": "yaounde@furehstore.com",
    "phoneNumber": "+237670000001",

    "country": "Cameroon",
    "city": "Yaounde",
    "address": "Mfoundi Street",

    "isActive": true,
    "status": "ACTIVE",

    "createdAt": "2026-01-10T09:00:00Z"
},
{
    "id": "agency-002",

    "organizationId": "org-001",

    "code": "DLA-01",

    "shortName": "Douala Branch",
    "longName": "Douala Akwa Branch",

    "description": "Douala commercial branch.",

    "email": "douala@furehstore.com",
    "phoneNumber": "+237670000002",

    "country": "Cameroon",
    "city": "Douala",
    "address": "Akwa Boulevard",

    "isActive": true,
    "status": "ACTIVE",

    "createdAt": "2026-02-01T10:00:00Z"
}
]


export const MOCK_SALES_POINTS: SalesPointResponse[] = [{
    "id": "sp-001",

    "organizationId": "org-001",
    "agencyId": "agency-001",

    "code": "POS-YAO-01",
    "name": "Front Counter",

    "description": "Main front desk payment counter.",

    "terminalCode": "TERM-001",

    "isActive": true,
    "status": "OPEN",

    "createdAt": "2026-05-21T07:30:00Z"
},
{
    "id": "sp-002",

    "organizationId": "org-001",
    "agencyId": "agency-001",

    "code": "POS-YAO-02",
    "name": "Mobile POS",

    "description": "Portable sales terminal.",

    "terminalCode": "TERM-002",

    "isActive": true,
    "status": "OPEN",

    "createdAt": "2026-05-21T07:45:00Z"
},
{
    "id": "sp-003",

    "organizationId": "org-001",
    "agencyId": "agency-002",

    "code": "POS-DLA-01",
    "name": "Akwa Counter",

    "description": "Primary counter for Douala branch.",

    "terminalCode": "TERM-003",

    "isActive": true,
    "status": "OPEN",

    "createdAt": "2026-05-21T08:00:00Z"
}
]


