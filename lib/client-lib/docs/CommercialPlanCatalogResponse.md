# CommercialPlanCatalogResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** |  | [optional] [default to undefined]
**displayName** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**packCodes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**serviceCodes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**compatibleAddOnCodes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**serviceQuotas** | [**Array&lt;CommercialServiceQuotaResponse&gt;**](CommercialServiceQuotaResponse.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CommercialPlanCatalogResponse } from './api';

const instance: CommercialPlanCatalogResponse = {
    code,
    displayName,
    description,
    packCodes,
    serviceCodes,
    compatibleAddOnCodes,
    serviceQuotas,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
