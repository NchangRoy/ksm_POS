# ClientApplicationControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create22**](#create22) | **POST** /api/client-applications | |
|[**list16**](#list16) | **GET** /api/client-applications | |
|[**revoke**](#revoke) | **POST** /api/client-applications/{clientApplicationId}/revoke | |
|[**rotateSecret**](#rotatesecret) | **POST** /api/client-applications/{clientApplicationId}/rotate-secret | |
|[**update13**](#update13) | **PATCH** /api/client-applications/{clientApplicationId} | |

# **create22**
> ApiResponseProvisionedClientApplicationResponse create22(createClientApplicationRequest)


### Example

```typescript
import {
    ClientApplicationControllerApi,
    Configuration,
    CreateClientApplicationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientApplicationControllerApi(configuration);

let createClientApplicationRequest: CreateClientApplicationRequest; //

const { status, data } = await apiInstance.create22(
    createClientApplicationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createClientApplicationRequest** | **CreateClientApplicationRequest**|  | |


### Return type

**ApiResponseProvisionedClientApplicationResponse**

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

# **list16**
> ApiResponseListClientApplicationResponse list16()


### Example

```typescript
import {
    ClientApplicationControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientApplicationControllerApi(configuration);

const { status, data } = await apiInstance.list16();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseListClientApplicationResponse**

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

# **revoke**
> ApiResponseClientApplicationResponse revoke()


### Example

```typescript
import {
    ClientApplicationControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientApplicationControllerApi(configuration);

let clientApplicationId: string; // (default to undefined)

const { status, data } = await apiInstance.revoke(
    clientApplicationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientApplicationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseClientApplicationResponse**

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

# **rotateSecret**
> ApiResponseProvisionedClientApplicationResponse rotateSecret()


### Example

```typescript
import {
    ClientApplicationControllerApi,
    Configuration,
    RotateClientApplicationSecretRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientApplicationControllerApi(configuration);

let clientApplicationId: string; // (default to undefined)
let rotateClientApplicationSecretRequest: RotateClientApplicationSecretRequest; // (optional)

const { status, data } = await apiInstance.rotateSecret(
    clientApplicationId,
    rotateClientApplicationSecretRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rotateClientApplicationSecretRequest** | **RotateClientApplicationSecretRequest**|  | |
| **clientApplicationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseProvisionedClientApplicationResponse**

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

# **update13**
> ApiResponseClientApplicationResponse update13(updateClientApplicationRequest)


### Example

```typescript
import {
    ClientApplicationControllerApi,
    Configuration,
    UpdateClientApplicationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientApplicationControllerApi(configuration);

let clientApplicationId: string; // (default to undefined)
let updateClientApplicationRequest: UpdateClientApplicationRequest; //

const { status, data } = await apiInstance.update13(
    clientApplicationId,
    updateClientApplicationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateClientApplicationRequest** | **UpdateClientApplicationRequest**|  | |
| **clientApplicationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseClientApplicationResponse**

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

