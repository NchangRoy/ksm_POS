# AccountingWorkflowControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**previewClosing**](#previewclosing) | **GET** /api/accounting-service/workflows/closing/preview | |

# **previewClosing**
> AccountingClosingPreviewView previewClosing()


### Example

```typescript
import {
    AccountingWorkflowControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingWorkflowControllerApi(configuration);

const { status, data } = await apiInstance.previewClosing();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AccountingClosingPreviewView**

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

