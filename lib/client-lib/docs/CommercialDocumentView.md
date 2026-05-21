# CommercialDocumentView


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**organizationId** | **string** |  | [optional] [default to undefined]
**documentNumber** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**linkedAccountingInvoiceId** | **string** |  | [optional] [default to undefined]
**linkedCashierBillId** | **string** |  | [optional] [default to undefined]
**counterparty** | [**CounterpartySummaryView**](CounterpartySummaryView.md) |  | [optional] [default to undefined]
**currency** | **string** |  | [optional] [default to undefined]
**lines** | [**Array&lt;CommercialDocumentLineView&gt;**](CommercialDocumentLineView.md) |  | [optional] [default to undefined]
**totalQuantity** | **number** |  | [optional] [default to undefined]
**totalAmount** | **number** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CommercialDocumentView } from './api';

const instance: CommercialDocumentView = {
    id,
    type,
    organizationId,
    documentNumber,
    status,
    linkedAccountingInvoiceId,
    linkedCashierBillId,
    counterparty,
    currency,
    lines,
    totalQuantity,
    totalAmount,
    createdAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
