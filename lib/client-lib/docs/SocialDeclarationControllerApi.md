# SocialDeclarationControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**acknowledge**](#acknowledge) | **PUT** /api/v1/hrm/declarations/{id}/acknowledge | |
|[**create10**](#create10) | **POST** /api/v1/hrm/declarations | |
|[**generate**](#generate) | **PUT** /api/v1/hrm/declarations/{id}/generate | |
|[**get8**](#get8) | **GET** /api/v1/hrm/declarations/{id} | |
|[**list10**](#list10) | **GET** /api/v1/hrm/declarations | |
|[**submit**](#submit) | **PUT** /api/v1/hrm/declarations/{id}/submit | |

# **acknowledge**
> ApiResponseSocialDeclarationResponse acknowledge()


### Example

```typescript
import {
    SocialDeclarationControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SocialDeclarationControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.acknowledge(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseSocialDeclarationResponse**

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

# **create10**
> ApiResponseSocialDeclarationResponse create10(createSocialDeclarationRequest)


### Example

```typescript
import {
    SocialDeclarationControllerApi,
    Configuration,
    CreateSocialDeclarationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SocialDeclarationControllerApi(configuration);

let createSocialDeclarationRequest: CreateSocialDeclarationRequest; //

const { status, data } = await apiInstance.create10(
    createSocialDeclarationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createSocialDeclarationRequest** | **CreateSocialDeclarationRequest**|  | |


### Return type

**ApiResponseSocialDeclarationResponse**

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

# **generate**
> ApiResponseSocialDeclarationResponse generate(generateRequest)


### Example

```typescript
import {
    SocialDeclarationControllerApi,
    Configuration,
    GenerateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SocialDeclarationControllerApi(configuration);

let id: string; // (default to undefined)
let generateRequest: GenerateRequest; //

const { status, data } = await apiInstance.generate(
    id,
    generateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateRequest** | **GenerateRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseSocialDeclarationResponse**

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

# **get8**
> ApiResponseSocialDeclarationResponse get8()


### Example

```typescript
import {
    SocialDeclarationControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SocialDeclarationControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.get8(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseSocialDeclarationResponse**

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

# **list10**
> ApiResponseListSocialDeclarationResponse list10()


### Example

```typescript
import {
    SocialDeclarationControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SocialDeclarationControllerApi(configuration);

let orgId: string; // (default to undefined)

const { status, data } = await apiInstance.list10(
    orgId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListSocialDeclarationResponse**

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

# **submit**
> ApiResponseSocialDeclarationResponse submit()


### Example

```typescript
import {
    SocialDeclarationControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SocialDeclarationControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.submit(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseSocialDeclarationResponse**

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

