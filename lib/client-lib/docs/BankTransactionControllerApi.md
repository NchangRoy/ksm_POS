# BankTransactionControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**autoReconcile**](#autoreconcile) | **POST** /api/treasury/reconciliations/auto/{bankAccountId} | |
|[**listByBankAccount**](#listbybankaccount) | **GET** /api/treasury/bank-accounts/{bankAccountId}/transactions | |
|[**manualReconcile**](#manualreconcile) | **POST** /api/treasury/reconciliations/manual | |
|[**register4**](#register4) | **POST** /api/treasury/transactions | |

# **autoReconcile**
> ApiResponseReconciliationRunResult autoReconcile()


### Example

```typescript
import {
    BankTransactionControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BankTransactionControllerApi(configuration);

let bankAccountId: string; // (default to undefined)

const { status, data } = await apiInstance.autoReconcile(
    bankAccountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bankAccountId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseReconciliationRunResult**

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

# **listByBankAccount**
> ApiResponseListBankTransactionResponse listByBankAccount()


### Example

```typescript
import {
    BankTransactionControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BankTransactionControllerApi(configuration);

let bankAccountId: string; // (default to undefined)
let limit: number; // (optional) (default to 50)

const { status, data } = await apiInstance.listByBankAccount(
    bankAccountId,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bankAccountId** | [**string**] |  | defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to 50|


### Return type

**ApiResponseListBankTransactionResponse**

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

# **manualReconcile**
> ApiResponseBankTransactionResponse manualReconcile(manualReconcileBankTransactionRequest)


### Example

```typescript
import {
    BankTransactionControllerApi,
    Configuration,
    ManualReconcileBankTransactionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BankTransactionControllerApi(configuration);

let manualReconcileBankTransactionRequest: ManualReconcileBankTransactionRequest; //

const { status, data } = await apiInstance.manualReconcile(
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

# **register4**
> ApiResponseBankTransactionResponse register4(registerBankTransactionRequest)


### Example

```typescript
import {
    BankTransactionControllerApi,
    Configuration,
    RegisterBankTransactionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BankTransactionControllerApi(configuration);

let registerBankTransactionRequest: RegisterBankTransactionRequest; //

const { status, data } = await apiInstance.register4(
    registerBankTransactionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerBankTransactionRequest** | **RegisterBankTransactionRequest**|  | |


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

