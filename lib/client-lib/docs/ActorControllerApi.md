# ActorControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createActor**](#createactor) | **POST** /api/actors | |
|[**getMyBusinessActorProfile**](#getmybusinessactorprofile) | **GET** /api/actors/me | |
|[**onboardBusinessActor**](#onboardbusinessactor) | **POST** /api/actors/onboarding | |
|[**reactivateMyBusinessActorProfile**](#reactivatemybusinessactorprofile) | **POST** /api/actors/me/reactivate | |
|[**updateMyBusinessActorProfile**](#updatemybusinessactorprofile) | **PUT** /api/actors/me | |

# **createActor**
> ApiResponseActorResponse createActor(createActorRequest)


### Example

```typescript
import {
    ActorControllerApi,
    Configuration,
    CreateActorRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ActorControllerApi(configuration);

let createActorRequest: CreateActorRequest; //

const { status, data } = await apiInstance.createActor(
    createActorRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createActorRequest** | **CreateActorRequest**|  | |


### Return type

**ApiResponseActorResponse**

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

# **getMyBusinessActorProfile**
> ApiResponseBusinessActorResponse getMyBusinessActorProfile()


### Example

```typescript
import {
    ActorControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ActorControllerApi(configuration);

const { status, data } = await apiInstance.getMyBusinessActorProfile();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseBusinessActorResponse**

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

# **onboardBusinessActor**
> ApiResponseBusinessActorResponse onboardBusinessActor(businessActorRequest)


### Example

```typescript
import {
    ActorControllerApi,
    Configuration,
    BusinessActorRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ActorControllerApi(configuration);

let businessActorRequest: BusinessActorRequest; //

const { status, data } = await apiInstance.onboardBusinessActor(
    businessActorRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **businessActorRequest** | **BusinessActorRequest**|  | |


### Return type

**ApiResponseBusinessActorResponse**

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

# **reactivateMyBusinessActorProfile**
> ApiResponseBusinessActorResponse reactivateMyBusinessActorProfile()


### Example

```typescript
import {
    ActorControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ActorControllerApi(configuration);

const { status, data } = await apiInstance.reactivateMyBusinessActorProfile();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseBusinessActorResponse**

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

# **updateMyBusinessActorProfile**
> ApiResponseBusinessActorResponse updateMyBusinessActorProfile(businessActorRequest)


### Example

```typescript
import {
    ActorControllerApi,
    Configuration,
    BusinessActorRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ActorControllerApi(configuration);

let businessActorRequest: BusinessActorRequest; //

const { status, data } = await apiInstance.updateMyBusinessActorProfile(
    businessActorRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **businessActorRequest** | **BusinessActorRequest**|  | |


### Return type

**ApiResponseBusinessActorResponse**

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

