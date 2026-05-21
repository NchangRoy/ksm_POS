# OrganizationCommercialSubscriptionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organizationId** | **string** |  | [optional] [default to undefined]
**planCode** | **string** |  | [optional] [default to undefined]
**addOnCodes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**serviceCodes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**serviceQuotas** | [**Array&lt;CommercialServiceQuotaResponse&gt;**](CommercialServiceQuotaResponse.md) |  | [optional] [default to undefined]
**dependencyIssues** | [**Array&lt;OrganizationServiceDependencyIssueResponse&gt;**](OrganizationServiceDependencyIssueResponse.md) |  | [optional] [default to undefined]
**entitlements** | [**OrganizationServicesResponse**](OrganizationServicesResponse.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OrganizationCommercialSubscriptionResponse } from './api';

const instance: OrganizationCommercialSubscriptionResponse = {
    organizationId,
    planCode,
    addOnCodes,
    serviceCodes,
    serviceQuotas,
    dependencyIssues,
    entitlements,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
