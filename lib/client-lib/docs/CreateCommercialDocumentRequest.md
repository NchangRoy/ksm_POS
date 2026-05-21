# CreateCommercialDocumentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**counterpartyThirdPartyId** | **string** |  | [default to undefined]
**documentNumber** | **string** |  | [optional] [default to undefined]
**currency** | **string** |  | [default to undefined]
**lines** | [**Array&lt;BillingInvoiceLineRequest&gt;**](BillingInvoiceLineRequest.md) |  | [default to undefined]

## Example

```typescript
import { CreateCommercialDocumentRequest } from './api';

const instance: CreateCommercialDocumentRequest = {
    counterpartyThirdPartyId,
    documentNumber,
    currency,
    lines,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
