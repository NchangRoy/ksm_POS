# OrganizationServicesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organizationId** | **string** |  | [optional] [default to undefined]
**subscribedServices** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**effectiveServices** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**serviceQuotas** | [**Array&lt;OrganizationServiceQuotaResponse&gt;**](OrganizationServiceQuotaResponse.md) |  | [optional] [default to undefined]
**dependencyIssues** | [**Array&lt;OrganizationServiceDependencyIssueResponse&gt;**](OrganizationServiceDependencyIssueResponse.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OrganizationServicesResponse } from './api';

const instance: OrganizationServicesResponse = {
    organizationId,
    subscribedServices,
    effectiveServices,
    serviceQuotas,
    dependencyIssues,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
