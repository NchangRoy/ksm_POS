# UpdateAppBusinessSettingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agencyId** | **string** |  | [optional] [default to undefined]
**negotiateSellingPrice** | **boolean** |  | [optional] [default to undefined]
**sellingPriceIncludeVat** | **boolean** |  | [optional] [default to undefined]
**authorizeExceptionalDiscount** | **boolean** |  | [optional] [default to undefined]
**grantableDiscountRate** | **number** |  | [optional] [default to undefined]
**printLogo** | **boolean** |  | [optional] [default to undefined]
**paperFormat** | **string** |  | [default to undefined]
**lengthOfVatInvoiceNumber** | **number** |  | [optional] [default to undefined]
**prefixOfVatInvoiceNumber** | **string** |  | [default to undefined]
**lowStockAlert** | **boolean** |  | [optional] [default to undefined]
**preventiveMaintenanceAlert** | **boolean** |  | [optional] [default to undefined]
**defaultCurrency** | **string** |  | [optional] [default to undefined]
**legalIdentity** | **string** |  | [optional] [default to undefined]
**taxIdentifier** | **string** |  | [optional] [default to undefined]
**requireSalesOrderApproval** | **boolean** |  | [optional] [default to undefined]
**requireReturnApproval** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateAppBusinessSettingsRequest } from './api';

const instance: UpdateAppBusinessSettingsRequest = {
    agencyId,
    negotiateSellingPrice,
    sellingPriceIncludeVat,
    authorizeExceptionalDiscount,
    grantableDiscountRate,
    printLogo,
    paperFormat,
    lengthOfVatInvoiceNumber,
    prefixOfVatInvoiceNumber,
    lowStockAlert,
    preventiveMaintenanceAlert,
    defaultCurrency,
    legalIdentity,
    taxIdentifier,
    requireSalesOrderApproval,
    requireReturnApproval,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
