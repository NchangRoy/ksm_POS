export interface Session {
    'id'?: string;
    'organizationId'?: string;
    'agencyId'?: string;
    'registerId'?: string;
    'cashierId'?: string;
    'status'?: string;
    'openingAmount'?: number;
    'closingAmount'?: number;
    'currency'?: string;
    'openedAt'?: string;
    'closedAt'?: string;
    'locked'?: boolean;
}