# OperationalPolicyControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**agencyPolicy**](#agencypolicy) | **GET** /api/settings/organizations/{organizationId}/agencies/{agencyId}/operational-policy | |
|[**organizationPolicy**](#organizationpolicy) | **GET** /api/settings/organizations/{organizationId}/operational-policy | |
|[**upsertAgencyPolicy**](#upsertagencypolicy) | **PUT** /api/settings/organizations/{organizationId}/agencies/{agencyId}/operational-policy | |
|[**upsertOrganizationPolicy**](#upsertorganizationpolicy) | **PUT** /api/settings/organizations/{organizationId}/operational-policy | |

# **agencyPolicy**
> ApiResponseOperationalPolicyResponse agencyPolicy()


### Example

```typescript
import {
    OperationalPolicyControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationalPolicyControllerApi(configuration);

let organizationId: string; // (default to undefined)
let agencyId: string; // (default to undefined)

const { status, data } = await apiInstance.agencyPolicy(
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

**ApiResponseOperationalPolicyResponse**

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

# **organizationPolicy**
> ApiResponseOperationalPolicyResponse organizationPolicy()


### Example

```typescript
import {
    OperationalPolicyControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationalPolicyControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.organizationPolicy(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseOperationalPolicyResponse**

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

# **upsertAgencyPolicy**
> ApiResponseOperationalPolicyResponse upsertAgencyPolicy(upsertOperationalPolicyRequest)


### Example

```typescript
import {
    OperationalPolicyControllerApi,
    Configuration,
    UpsertOperationalPolicyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationalPolicyControllerApi(configuration);

let organizationId: string; // (default to undefined)
let agencyId: string; // (default to undefined)
let upsertOperationalPolicyRequest: UpsertOperationalPolicyRequest; //

const { status, data } = await apiInstance.upsertAgencyPolicy(
    organizationId,
    agencyId,
    upsertOperationalPolicyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **upsertOperationalPolicyRequest** | **UpsertOperationalPolicyRequest**|  | |
| **organizationId** | [**string**] |  | defaults to undefined|
| **agencyId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseOperationalPolicyResponse**

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

# **upsertOrganizationPolicy**
> ApiResponseOperationalPolicyResponse upsertOrganizationPolicy(upsertOperationalPolicyRequest)


### Example

```typescript
import {
    OperationalPolicyControllerApi,
    Configuration,
    UpsertOperationalPolicyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationalPolicyControllerApi(configuration);

let organizationId: string; // (default to undefined)
let upsertOperationalPolicyRequest: UpsertOperationalPolicyRequest; //

const { status, data } = await apiInstance.upsertOrganizationPolicy(
    organizationId,
    upsertOperationalPolicyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **upsertOperationalPolicyRequest** | **UpsertOperationalPolicyRequest**|  | |
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseOperationalPolicyResponse**

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

