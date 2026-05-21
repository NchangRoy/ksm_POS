# JwkSetControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**jwks**](#jwks) | **GET** /.well-known/jwks.json | |

# **jwks**
> { [key: string]: any; } jwks()


### Example

```typescript
import {
    JwkSetControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new JwkSetControllerApi(configuration);

const { status, data } = await apiInstance.jwks();
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

