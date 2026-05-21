# FileControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**downloadFile**](#downloadfile) | **GET** /api/files/{fileId} | |
|[**uploadFile**](#uploadfile) | **POST** /api/files | |

# **downloadFile**
> File downloadFile()


### Example

```typescript
import {
    FileControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FileControllerApi(configuration);

let fileId: string; // (default to undefined)

const { status, data } = await apiInstance.downloadFile(
    fileId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileId** | [**string**] |  | defaults to undefined|


### Return type

**File**

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

# **uploadFile**
> ApiResponseStoredFileResponse uploadFile()


### Example

```typescript
import {
    FileControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FileControllerApi(configuration);

let file: File; // (default to undefined)

const { status, data } = await apiInstance.uploadFile(
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] |  | defaults to undefined|


### Return type

**ApiResponseStoredFileResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

