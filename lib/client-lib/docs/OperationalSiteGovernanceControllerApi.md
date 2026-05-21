# OperationalSiteGovernanceControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**assignResponsibility**](#assignresponsibility) | **POST** /api/organizations/{organizationId}/agencies/{agencyId}/operational-responsibilities | |
|[**getSiteProfile**](#getsiteprofile) | **GET** /api/organizations/{organizationId}/agencies/{agencyId}/operational-site-profile | |
|[**listResponsibilities**](#listresponsibilities) | **GET** /api/organizations/{organizationId}/agencies/{agencyId}/operational-responsibilities | |
|[**readiness**](#readiness) | **GET** /api/organizations/{organizationId}/agencies/{agencyId}/operational-site-readiness | |
|[**upsertSiteProfile**](#upsertsiteprofile) | **PUT** /api/organizations/{organizationId}/agencies/{agencyId}/operational-site-profile | |

# **assignResponsibility**
> ApiResponseOperationalResponsibilityResponse assignResponsibility(assignOperationalResponsibilityRequest)


### Example

```typescript
import {
    OperationalSiteGovernanceControllerApi,
    Configuration,
    AssignOperationalResponsibilityRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationalSiteGovernanceControllerApi(configuration);

let organizationId: string; // (default to undefined)
let agencyId: string; // (default to undefined)
let assignOperationalResponsibilityRequest: AssignOperationalResponsibilityRequest; //

const { status, data } = await apiInstance.assignResponsibility(
    organizationId,
    agencyId,
    assignOperationalResponsibilityRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assignOperationalResponsibilityRequest** | **AssignOperationalResponsibilityRequest**|  | |
| **organizationId** | [**string**] |  | defaults to undefined|
| **agencyId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseOperationalResponsibilityResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSiteProfile**
> ApiResponseOperationalSiteProfileResponse getSiteProfile()


### Example

```typescript
import {
    OperationalSiteGovernanceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationalSiteGovernanceControllerApi(configuration);

let organizationId: string; // (default to undefined)
let agencyId: string; // (default to undefined)

const { status, data } = await apiInstance.getSiteProfile(
    organizationId,
    agencyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **agencyId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseOperationalSiteProfileResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listResponsibilities**
> ApiResponseListOperationalResponsibilityResponse listResponsibilities()


### Example

```typescript
import {
    OperationalSiteGovernanceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationalSiteGovernanceControllerApi(configuration);

let organizationId: string; // (default to undefined)
let agencyId: string; // (default to undefined)
let physicalSpaceId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listResponsibilities(
    organizationId,
    agencyId,
    physicalSpaceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **agencyId** | [**string**] |  | defaults to undefined|
| **physicalSpaceId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ApiResponseListOperationalResponsibilityResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **readiness**
> ApiResponseOperationalSiteReadinessView readiness()


### Example

```typescript
import {
    OperationalSiteGovernanceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationalSiteGovernanceControllerApi(configuration);

let organizationId: string; // (default to undefined)
let agencyId: string; // (default to undefined)

const { status, data } = await apiInstance.readiness(
    organizationId,
    agencyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **agencyId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseOperationalSiteReadinessView**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upsertSiteProfile**
> ApiResponseOperationalSiteProfileResponse upsertSiteProfile(upsertOperationalSiteProfileRequest)


### Example

```typescript
import {
    OperationalSiteGovernanceControllerApi,
    Configuration,
    UpsertOperationalSiteProfileRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationalSiteGovernanceControllerApi(configuration);

let organizationId: string; // (default to undefined)
let agencyId: string; // (default to undefined)
let upsertOperationalSiteProfileRequest: UpsertOperationalSiteProfileRequest; //

const { status, data } = await apiInstance.upsertSiteProfile(
    organizationId,
    agencyId,
    upsertOperationalSiteProfileRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **upsertOperationalSiteProfileRequest** | **UpsertOperationalSiteProfileRequest**|  | |
| **organizationId** | [**string**] |  | defaults to undefined|
| **agencyId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseOperationalSiteProfileResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

