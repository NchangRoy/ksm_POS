# CreateSalesOrderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organizationId** | **string** |  | [optional] [default to undefined]
**agencyId** | **string** |  | [optional] [default to undefined]
**customerThirdPartyId** | **string** |  | [optional] [default to undefined]
**productId** | **string** |  | [optional] [default to undefined]
**orderNumber** | **string** |  | [optional] [default to undefined]
**quantity** | **number** |  | [optional] [default to undefined]
**unitPrice** | **number** |  | [optional] [default to undefined]
**currency** | **string** |  | [default to undefined]
**lines** | [**Array&lt;CreateSalesOrderLineRequest&gt;**](CreateSalesOrderLineRequest.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CreateSalesOrderRequest } from './api';

const instance: CreateSalesOrderRequest = {
    organizationId,
    agencyId,
    customerThirdPartyId,
    productId,
    orderNumber,
    quantity,
    unitPrice,
    currency,
    lines,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
