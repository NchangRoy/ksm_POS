/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpdatedProductResponse = {
    idProduit?: string;
    nomProduit?: string;
    typeProduit?: string;
    prixVente?: number;
    cout?: number;
    categorie?: string;
    reference?: string;
    codeBarre?: string;
    photo?: string; // URL to the product image
    active?: boolean;
    createdAt?: string;
    updatedAt?: string;
    uom?: string; // Unit of Measure (e.g., 'Sack', 'Bottle', 'Unit')
    allowedSaleSizes?: ClientSaleSize[];
    availableQuantity?: number;
    reservedQuantity?: number; 
    organizationId?: string;
    activePromotions?: ClientResponse.SaleSizePromotion[];
    stockQuantity: number;
};

export type ClientSaleSize = {
    size: ClientSaleSize.size;
    unitPrice: number;
    unitPriceWithTax:number;
    minQuantity?: number;
    active?: boolean;
    isNegotiable?:boolean;
    minNegotiationPercentage?:number
};

export namespace ClientSaleSize {
    export enum size {
        DETAIL = 'DETAIL',
        DEMIS_GROS = 'DEMIS_GROS',
        GROS = 'GROS',
        SUPER_GROS = 'SUPER_GROS',
    }
}


export namespace ClientResponse {
    export enum typeClient {
        PARTICULIER = 'PARTICULIER',
        ENTREPRISE = 'ENTREPRISE',
        ADMINISTRATION = 'ADMINISTRATION',
    }

    export enum SaleSize {
        DETAIL = 'DETAIL',
        DEMIS_GROS = 'DEMIS_GROS',
        GROS = 'GROS',
        SUPER_GROS = 'SUPER_GROS',
    }

    export type SaleSizePromotion = {
        saleSize: SaleSize;
        startDate: string;
        endDate: string;
        promotionalPrice?: number;
        discountPercentage?: number;
        active?: boolean;
       
    };
}

/* generated using openapi-typescript-codegen -- do not edit */
/* generated using openapi-typescript-codegen -- do not edit */

export const produits: UpdatedProductResponse[] = [
  {
    idProduit: "p001",
    nomProduit: "Riz 25kg",
    typeProduit: "ALIMENTAIRE",
    prixVente: 18000,
    cout: 15000,
    categorie: "Céréales",
    reference: "RIZ-25KG",
    codeBarre: "1234567890123",
    photo: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400",
    uom: "Sac",
    active: true,
    createdAt: "2024-10-01T08:00:00Z",
    updatedAt: "2024-12-15T10:30:00Z",
    stockQuantity: 150,
    allowedSaleSizes: [
      { size: ClientSaleSize.size.DETAIL, unitPrice: 18000, unitPriceWithTax: 21465, isNegotiable: false, minNegotiationPercentage: 0 },
      { size: ClientSaleSize.size.DEMIS_GROS, unitPrice: 17000, unitPriceWithTax: 20272.5, minQuantity: 5, isNegotiable: true, minNegotiationPercentage: 2 },
      { size: ClientSaleSize.size.GROS, unitPrice: 16000, unitPriceWithTax: 19080, minQuantity: 20, isNegotiable: true, minNegotiationPercentage: 5 }
    ],
    activePromotions: [
      {
        saleSize: ClientResponse.SaleSize.GROS,
        startDate: "2026-01-01",
        endDate: "2026-03-31",
        discountPercentage: 10,
        active: true
      }
    ]
  },
  {
    idProduit: "p002",
    nomProduit: "Huile végétale 5L",
    typeProduit: "ALIMENTAIRE",
    prixVente: 7500,
    cout: 6200,
    categorie: "Huiles",
    reference: "HUILE-5L",
    codeBarre: "2234567890123",
    photo: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=400",
    uom: "Bidon",
    active: true,
    createdAt: "2024-09-20T09:15:00Z",
    updatedAt: "2024-11-02T14:45:00Z",
    stockQuantity: 85,
    allowedSaleSizes: [
      { size: ClientSaleSize.size.DETAIL, unitPrice: 7500, unitPriceWithTax: 8943.75, isNegotiable: false, minNegotiationPercentage: 0 },
      { size: ClientSaleSize.size.DEMIS_GROS, unitPrice: 7200, unitPriceWithTax: 8586, minQuantity: 6, isNegotiable: true, minNegotiationPercentage: 3 }
    ],
    activePromotions: [
      {
        saleSize: ClientResponse.SaleSize.DETAIL,
        startDate: "2026-01-01",
        endDate: "2026-02-15",
        promotionalPrice: 6900,
        active: true
      }
    ]
  },
  {
    idProduit: "p004",
    nomProduit: "Ciment 50kg",
    typeProduit: "MATERIAUX",
    prixVente: 5200,
    cout: 4800,
    categorie: "Construction",
    reference: "CIM-50KG",
    codeBarre: "4234567890123",
    photo: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=400",
    uom: "Sac",
    active: true,
    createdAt: "2024-07-05T06:45:00Z",
    updatedAt: "2024-12-18T09:20:00Z",
    stockQuantity: 10,
    allowedSaleSizes: [
      { size: ClientSaleSize.size.GROS, unitPrice: 5000, unitPriceWithTax: 5962.5, minQuantity: 20, isNegotiable: true, minNegotiationPercentage: 3 },
      { size: ClientSaleSize.size.SUPER_GROS, unitPrice: 4700, unitPriceWithTax: 5604.75, minQuantity: 100, isNegotiable: true, minNegotiationPercentage: 8 }
    ],
    activePromotions: [
      {
        saleSize: ClientResponse.SaleSize.SUPER_GROS,
        startDate: "2025-12-01",
        endDate: "2026-03-31",
        discountPercentage: 15,
        active: true
      }
    ]
  },
  {
    idProduit: "p006",
    nomProduit: "Boisson gazeuse 1.5L",
    typeProduit: "BOISSON",
    prixVente: 800,
    cout: 600,
    categorie: "Boissons",
    reference: "BOIS-15L",
    codeBarre: "6234567890123",
    photo: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400",
    uom: "Bouteille",
    active: true,
    createdAt: "2024-05-01T09:00:00Z",
    updatedAt: "2024-11-25T14:10:00Z",
    stockQuantity: 320,
    allowedSaleSizes: [
      { size: ClientSaleSize.size.DETAIL, unitPrice: 800, unitPriceWithTax: 954, isNegotiable: false, minNegotiationPercentage: 0 },
      { size: ClientSaleSize.size.DEMIS_GROS, unitPrice: 760, unitPriceWithTax: 906.3, minQuantity: 12, isNegotiable: true, minNegotiationPercentage: 2 },
      { size: ClientSaleSize.size.GROS, unitPrice: 720, unitPriceWithTax: 858.6, minQuantity: 48, isNegotiable: true, minNegotiationPercentage: 4 }
    ],
    activePromotions: [
      {
        saleSize: ClientResponse.SaleSize.DEMIS_GROS,
        startDate: "2026-01-01",
        endDate: "2026-05-15",
        promotionalPrice: 740,
        active: true
      }
    ]
  }
];