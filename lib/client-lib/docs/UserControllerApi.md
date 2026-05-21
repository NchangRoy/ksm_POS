# UserControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getMe**](#getme) | **GET** /api/users/me | |
|[**updateIdentityOnboarding**](#updateidentityonboarding) | **PUT** /api/users/me/identity-onboarding | |
|[**updateMyPlan**](#updatemyplan) | **PUT** /api/users/me/plan | |
|[**updateOnboarding**](#updateonboarding) | **PUT** /api/users/me/onboarding | |

# **getMe**
> ApiResponseUserAccountResponse getMe()


### Example

```typescript
import {
    UserControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserControllerApi(configuration);

const { status, data } = await apiInstance.getMe();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseUserAccountResponse**

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

# **updateIdentityOnboarding**
> ApiResponseUserAccountResponse updateIdentityOnboarding(updateIdentityOnboardingRequest)


### Example

```typescript
import {
    UserControllerApi,
    Configuration,
    UpdateIdentityOnboardingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UserControllerApi(configuration);

let updateIdentityOnboardingRequest: UpdateIdentityOnboardingRequest; //

const { status, data } = await apiInstance.updateIdentityOnboarding(
    updateIdentityOnboardingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateIdentityOnboardingRequest** | **UpdateIdentityOnboardingRequest**|  | |


### Return type

**ApiResponseUserAccountResponse**

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

# **updateMyPlan**
> ApiResponseUserAccountResponse updateMyPlan(updatePlanRequest)


### Example

```typescript
import {
    UserControllerApi,
    Configuration,
    UpdatePlanRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UserControllerApi(configuration);

let updatePlanRequest: UpdatePlanRequest; //

const { status, data } = await apiInstance.updateMyPlan(
    updatePlanRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePlanRequest** | **UpdatePlanRequest**|  | |


### Return type

**ApiResponseUserAccountResponse**

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

# **updateOnboarding**
> ApiResponseUserAccountResponse updateOnboarding(updateOnboardingRequest)


### Example

```typescript
import {
    UserControllerApi,
    Configuration,
    UpdateOnboardingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UserControllerApi(configuration);

let updateOnboardingRequest: UpdateOnboardingRequest; //

const { status, data } = await apiInstance.updateOnboarding(
    updateOnboardingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateOnboardingRequest** | **UpdateOnboardingRequest**|  | |


### Return type

**ApiResponseUserAccountResponse**

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

