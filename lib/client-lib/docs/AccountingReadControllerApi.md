# AccountingReadControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**listOpenPayables**](#listopenpayables) | **GET** /api/accounting/open-items/payables | |
|[**listOpenReceivables**](#listopenreceivables) | **GET** /api/accounting/open-items/receivables | |

# **listOpenPayables**
> ApiResponseListOpenAccountingItemResponse listOpenPayables()


### Example

```typescript
import {
    AccountingReadControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingReadControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.listOpenPayables(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListOpenAccountingItemResponse**

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

# **listOpenReceivables**
> ApiResponseListOpenAccountingItemResponse listOpenReceivables()


### Example

```typescript
import {
    AccountingReadControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingReadControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.listOpenReceivables(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListOpenAccountingItemResponse**

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

