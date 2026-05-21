# CreateInvoiceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organizationId** | **string** |  | [default to undefined]
**customerThirdPartyId** | **string** |  | [default to undefined]
**orderId** | **string** |  | [optional] [default to undefined]
**productId** | **string** |  | [optional] [default to undefined]
**invoiceNumber** | **string** |  | [optional] [default to undefined]
**quantity** | **number** |  | [optional] [default to undefined]
**unitPrice** | **number** |  | [optional] [default to undefined]
**lines** | [**Array&lt;CreateInvoiceLineRequest&gt;**](CreateInvoiceLineRequest.md) |  | [optional] [default to undefined]
**currency** | **string** |  | [default to undefined]

## Example

```typescript
import { CreateInvoiceRequest } from './api';

const instance: CreateInvoiceRequest = {
    organizationId,
    customerThirdPartyId,
    orderId,
    productId,
    invoiceNumber,
    quantity,
    unitPrice,
    lines,
    currency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
