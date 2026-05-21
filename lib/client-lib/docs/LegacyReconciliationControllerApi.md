# LegacyReconciliationControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**autoReconcile1**](#autoreconcile1) | **POST** /api/banking/reconciliation/auto/{accountId} | |
|[**manualReconcile1**](#manualreconcile1) | **POST** /api/banking/reconciliation/manual | |

# **autoReconcile1**
> ApiResponseVoid autoReconcile1()


### Example

```typescript
import {
    LegacyReconciliationControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyReconciliationControllerApi(configuration);

let accountId: string; // (default to undefined)

const { status, data } = await apiInstance.autoReconcile1(
    accountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseVoid**

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

# **manualReconcile1**
> ApiResponseBankTransactionResponse manualReconcile1(manualReconcileBankTransactionRequest)


### Example

```typescript
import {
    LegacyReconciliationControllerApi,
    Configuration,
    ManualReconcileBankTransactionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyReconciliationControllerApi(configuration);

let manualReconcileBankTransactionRequest: ManualReconcileBankTransactionRequest; //

const { status, data } = await apiInstance.manualReconcile1(
    manualReconcileBankTransactionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **manualReconcileBankTransactionRequest** | **ManualReconcileBankTransactionRequest**|  | |


### Return type

**ApiResponseBankTransactionResponse**

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

