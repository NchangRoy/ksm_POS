# OrganizationControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**approveOrganization**](#approveorganization) | **POST** /api/organizations/{organizationId}/approve | |
|[**closeOrganization**](#closeorganization) | **POST** /api/organizations/{organizationId}/close | |
|[**createOrganization**](#createorganization) | **POST** /api/organizations | |
|[**getOrganization**](#getorganization) | **GET** /api/organizations/{organizationId} | |
|[**listMyOrganizations**](#listmyorganizations) | **GET** /api/organizations/my | |
|[**listOrganizations**](#listorganizations) | **GET** /api/organizations | |
|[**rejectOrganization**](#rejectorganization) | **POST** /api/organizations/{organizationId}/reject | |
|[**reopenOrganization**](#reopenorganization) | **POST** /api/organizations/{organizationId}/reopen | |
|[**searchOrganizations**](#searchorganizations) | **GET** /api/organizations/search | |
|[**suspendOrganization**](#suspendorganization) | **POST** /api/organizations/{organizationId}/suspend | |
|[**transferOwnership**](#transferownership) | **POST** /api/organizations/{organizationId}/transfer/{newOwnerId} | |
|[**updateOrganization**](#updateorganization) | **PATCH** /api/organizations/{organizationId} | |

# **approveOrganization**
> ApiResponseOrganizationResponse approveOrganization(governanceActionRequest)


### Example

```typescript
import {
    OrganizationControllerApi,
    Configuration,
    GovernanceActionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationControllerApi(configuration);

let organizationId: string; // (default to undefined)
let governanceActionRequest: GovernanceActionRequest; //

const { status, data } = await apiInstance.approveOrganization(
    organizationId,
    governanceActionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **governanceActionRequest** | **GovernanceActionRequest**|  | |
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseOrganizationResponse**

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

# **closeOrganization**
> ApiResponseOrganizationResponse closeOrganization(governanceActionRequest)


### Example

```typescript
import {
    OrganizationControllerApi,
    Configuration,
    GovernanceActionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationControllerApi(configuration);

let organizationId: string; // (default to undefined)
let governanceActionRequest: GovernanceActionRequest; //

const { status, data } = await apiInstance.closeOrganization(
    organizationId,
    governanceActionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **governanceActionRequest** | **GovernanceActionRequest**|  | |
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseOrganizationResponse**

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

# **createOrganization**
> ApiResponseOrganizationResponse createOrganization(createOrganizationRequest)


### Example

```typescript
import {
    OrganizationControllerApi,
    Configuration,
    CreateOrganizationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationControllerApi(configuration);

let createOrganizationRequest: CreateOrganizationRequest; //

const { status, data } = await apiInstance.createOrganization(
    createOrganizationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createOrganizationRequest** | **CreateOrganizationRequest**|  | |


### Return type

**ApiResponseOrganizationResponse**

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

# **getOrganization**
> ApiResponseOrganizationResponse getOrganization()


### Example

```typescript
import {
    OrganizationControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.getOrganization(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseOrganizationResponse**

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

# **listMyOrganizations**
> ApiResponseListOrganizationResponse listMyOrganizations()


### Example

```typescript
import {
    OrganizationControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationControllerApi(configuration);

const { status, data } = await apiInstance.listMyOrganizations();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseListOrganizationResponse**

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

# **listOrganizations**
> ApiResponseListOrganizationResponse listOrganizations()


### Example

```typescript
import {
    OrganizationControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationControllerApi(configuration);

const { status, data } = await apiInstance.listOrganizations();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseListOrganizationResponse**

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

# **rejectOrganization**
> ApiResponseOrganizationResponse rejectOrganization(governanceActionRequest)


### Example

```typescript
import {
    OrganizationControllerApi,
    Configuration,
    GovernanceActionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationControllerApi(configuration);

let organizationId: string; // (default to undefined)
let governanceActionRequest: GovernanceActionRequest; //

const { status, data } = await apiInstance.rejectOrganization(
    organizationId,
    governanceActionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **governanceActionRequest** | **GovernanceActionRequest**|  | |
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseOrganizationResponse**

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

# **reopenOrganization**
> ApiResponseOrganizationResponse reopenOrganization(governanceActionRequest)


### Example

```typescript
import {
    OrganizationControllerApi,
    Configuration,
    GovernanceActionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationControllerApi(configuration);

let organizationId: string; // (default to undefined)
let governanceActionRequest: GovernanceActionRequest; //

const { status, data } = await apiInstance.reopenOrganization(
    organizationId,
    governanceActionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **governanceActionRequest** | **GovernanceActionRequest**|  | |
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseOrganizationResponse**

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

# **searchOrganizations**
> ApiResponseListOrganizationSearchResponse searchOrganizations()


### Example

```typescript
import {
    OrganizationControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationControllerApi(configuration);

let q: string; // (default to undefined)
let organizationType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.searchOrganizations(
    q,
    organizationType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **q** | [**string**] |  | defaults to undefined|
| **organizationType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ApiResponseListOrganizationSearchResponse**

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

# **suspendOrganization**
> ApiResponseOrganizationResponse suspendOrganization(governanceActionRequest)


### Example

```typescript
import {
    OrganizationControllerApi,
    Configuration,
    GovernanceActionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationControllerApi(configuration);

let organizationId: string; // (default to undefined)
let governanceActionRequest: GovernanceActionRequest; //

const { status, data } = await apiInstance.suspendOrganization(
    organizationId,
    governanceActionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **governanceActionRequest** | **GovernanceActionRequest**|  | |
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseOrganizationResponse**

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

# **transferOwnership**
> ApiResponseOrganizationResponse transferOwnership()


### Example

```typescript
import {
    OrganizationControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationControllerApi(configuration);

let organizationId: string; // (default to undefined)
let newOwnerId: string; // (default to undefined)

const { status, data } = await apiInstance.transferOwnership(
    organizationId,
    newOwnerId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **newOwnerId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseOrganizationResponse**

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

# **updateOrganization**
> ApiResponseOrganizationResponse updateOrganization(updateOrganizationRequest)


### Example

```typescript
import {
    OrganizationControllerApi,
    Configuration,
    UpdateOrganizationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationControllerApi(configuration);

let organizationId: string; // (default to undefined)
let updateOrganizationRequest: UpdateOrganizationRequest; //

const { status, data } = await apiInstance.updateOrganization(
    organizationId,
    updateOrganizationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateOrganizationRequest** | **UpdateOrganizationRequest**|  | |
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseOrganizationResponse**

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

