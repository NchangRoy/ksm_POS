# SalesOrderResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**tenantId** | **string** |  | [optional] [default to undefined]
**organizationId** | **string** |  | [optional] [default to undefined]
**agencyId** | **string** |  | [optional] [default to undefined]
**customerThirdPartyId** | **string** |  | [optional] [default to undefined]
**productId** | **string** |  | [optional] [default to undefined]
**orderNumber** | **string** |  | [optional] [default to undefined]
**quantity** | **number** |  | [optional] [default to undefined]
**unitPrice** | **number** |  | [optional] [default to undefined]
**totalQuantity** | **number** |  | [optional] [default to undefined]
**subtotalAmount** | **number** |  | [optional] [default to undefined]
**totalAmount** | **number** |  | [optional] [default to undefined]
**currency** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**lines** | [**Array&lt;SalesOrderLineResponse&gt;**](SalesOrderLineResponse.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SalesOrderResponse } from './api';

const instance: SalesOrderResponse = {
    id,
    tenantId,
    organizationId,
    agencyId,
    customerThirdPartyId,
    productId,
    orderNumber,
    quantity,
    unitPrice,
    totalQuantity,
    subtotalAmount,
    totalAmount,
    currency,
    status,
    lines,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
