# CreateProductRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organizationId** | **string** |  | [default to undefined]
**sku** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**familyCode** | **string** |  | [default to undefined]
**categoryCode** | **string** |  | [optional] [default to undefined]
**variantLabel** | **string** |  | [default to undefined]
**barcode** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**unitPrice** | **number** |  | [default to undefined]
**currency** | **string** |  | [default to undefined]
**status** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CreateProductRequest } from './api';

const instance: CreateProductRequest = {
    organizationId,
    sku,
    name,
    familyCode,
    categoryCode,
    variantLabel,
    barcode,
    description,
    unitPrice,
    currency,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
