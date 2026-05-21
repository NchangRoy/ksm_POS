# InvoiceResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**tenantId** | **string** |  | [optional] [default to undefined]
**organizationId** | **string** |  | [optional] [default to undefined]
**customerThirdPartyId** | **string** |  | [optional] [default to undefined]
**orderId** | **string** |  | [optional] [default to undefined]
**productId** | **string** |  | [optional] [default to undefined]
**invoiceNumber** | **string** |  | [optional] [default to undefined]
**quantity** | **number** |  | [optional] [default to undefined]
**unitPrice** | **number** |  | [optional] [default to undefined]
**totalQuantity** | **number** |  | [optional] [default to undefined]
**subtotalAmount** | **number** |  | [optional] [default to undefined]
**totalAmount** | **number** |  | [optional] [default to undefined]
**settledAmount** | **number** |  | [optional] [default to undefined]
**outstandingAmount** | **number** |  | [optional] [default to undefined]
**currency** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**paymentStatus** | **string** |  | [optional] [default to undefined]
**lines** | [**Array&lt;InvoiceLineResponse&gt;**](InvoiceLineResponse.md) |  | [optional] [default to undefined]

## Example

```typescript
import { InvoiceResponse } from './api';

const instance: InvoiceResponse = {
    id,
    tenantId,
    organizationId,
    customerThirdPartyId,
    orderId,
    productId,
    invoiceNumber,
    quantity,
    unitPrice,
    totalQuantity,
    subtotalAmount,
    totalAmount,
    settledAmount,
    outstandingAmount,
    currency,
    status,
    paymentStatus,
    lines,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
