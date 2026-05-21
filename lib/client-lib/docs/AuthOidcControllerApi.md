# AuthOidcControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**authorizationServerMetadata**](#authorizationservermetadata) | **GET** /.well-known/oauth-authorization-server | |
|[**introspect**](#introspect) | **POST** /oauth2/introspect | |
|[**openIdConfiguration**](#openidconfiguration) | **GET** /.well-known/openid-configuration | |
|[**token**](#token) | **POST** /oauth2/token | |
|[**userInfo**](#userinfo) | **GET** /oauth2/userinfo | |
|[**userInfo1**](#userinfo1) | **POST** /oauth2/userinfo | |

# **authorizationServerMetadata**
> { [key: string]: any; } authorizationServerMetadata()


### Example

```typescript
import {
    AuthOidcControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthOidcControllerApi(configuration);

const { status, data } = await apiInstance.authorizationServerMetadata();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**{ [key: string]: any; }**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **introspect**
> object introspect()


### Example

```typescript
import {
    AuthOidcControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthOidcControllerApi(configuration);

let authorization: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.introspect(
    authorization
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authorization** | [**string**] |  | (optional) defaults to undefined|


### Return type

**object**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **openIdConfiguration**
> { [key: string]: any; } openIdConfiguration()


### Example

```typescript
import {
    AuthOidcControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthOidcControllerApi(configuration);

const { status, data } = await apiInstance.openIdConfiguration();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**{ [key: string]: any; }**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **token**
> object token()


### Example

```typescript
import {
    AuthOidcControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthOidcControllerApi(configuration);

let authorization: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.token(
    authorization
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authorization** | [**string**] |  | (optional) defaults to undefined|


### Return type

**object**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userInfo**
> object userInfo()


### Example

```typescript
import {
    AuthOidcControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthOidcControllerApi(configuration);

let authorization: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.userInfo(
    authorization
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authorization** | [**string**] |  | (optional) defaults to undefined|


### Return type

**object**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userInfo1**
> object userInfo1()


### Example

```typescript
import {
    AuthOidcControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthOidcControllerApi(configuration);

let authorization: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.userInfo1(
    authorization
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authorization** | [**string**] |  | (optional) defaults to undefined|


### Return type

**object**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

