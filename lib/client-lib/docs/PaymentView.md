# PaymentView


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**organizationId** | **string** |  | [optional] [default to undefined]
**billingDocumentId** | **string** |  | [optional] [default to undefined]
**invoiceId** | **string** |  | [optional] [default to undefined]
**supplierInvoiceId** | **string** |  | [optional] [default to undefined]
**counterparty** | [**CounterpartySummaryView**](CounterpartySummaryView.md) |  | [optional] [default to undefined]
**reference** | **string** |  | [optional] [default to undefined]
**amount** | **number** |  | [optional] [default to undefined]
**currency** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**linkedServiceCode** | **string** |  | [optional] [default to undefined]
**linkedDocumentType** | **string** |  | [optional] [default to undefined]
**linkedDocumentId** | **string** |  | [optional] [default to undefined]
**paidAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { PaymentView } from './api';

const instance: PaymentView = {
    id,
    organizationId,
    billingDocumentId,
    invoiceId,
    supplierInvoiceId,
    counterparty,
    reference,
    amount,
    currency,
    status,
    linkedServiceCode,
    linkedDocumentType,
    linkedDocumentId,
    paidAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
