# CreatePaymentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billingDocumentId** | **string** |  | [optional] [default to undefined]
**invoiceId** | **string** |  | [optional] [default to undefined]
**supplierInvoiceId** | **string** |  | [optional] [default to undefined]
**counterpartyThirdPartyId** | **string** |  | [optional] [default to undefined]
**reference** | **string** |  | [default to undefined]
**amount** | **number** |  | [default to undefined]
**currency** | **string** |  | [default to undefined]
**paidAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CreatePaymentRequest } from './api';

const instance: CreatePaymentRequest = {
    billingDocumentId,
    invoiceId,
    supplierInvoiceId,
    counterpartyThirdPartyId,
    reference,
    amount,
    currency,
    paidAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
