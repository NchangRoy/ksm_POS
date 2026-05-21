# SystemAuditControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getMyActivity**](#getmyactivity) | **GET** /api/system-audits/me | |
|[**getOrganizationActivity**](#getorganizationactivity) | **GET** /api/system-audits/organization | |

# **getMyActivity**
> ApiResponseListSystemAuditResponse getMyActivity()


### Example

```typescript
import {
    SystemAuditControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SystemAuditControllerApi(configuration);

let limit: number; // (optional) (default to 50)

const { status, data } = await apiInstance.getMyActivity(
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] |  | (optional) defaults to 50|


### Return type

**ApiResponseListSystemAuditResponse**

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

# **getOrganizationActivity**
> ApiResponseListSystemAuditResponse getOrganizationActivity()


### Example

```typescript
import {
    SystemAuditControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SystemAuditControllerApi(configuration);

let limit: number; // (optional) (default to 50)

const { status, data } = await apiInstance.getOrganizationActivity(
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] |  | (optional) defaults to 50|


### Return type

**ApiResponseListSystemAuditResponse**

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

