# LegacyBankingControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createAccount**](#createaccount) | **POST** /api/banking/accounts | |
|[**getAccount1**](#getaccount1) | **GET** /api/banking/accounts/{bankAccountId} | |
|[**history**](#history) | **GET** /api/banking/accounts/{bankAccountId}/transactions | |
|[**listAccounts**](#listaccounts) | **GET** /api/banking/accounts | |
|[**recordTransaction**](#recordtransaction) | **POST** /api/banking/transactions | |

# **createAccount**
> ApiResponseBankAccountResponse createAccount(registerBankAccountRequest)


### Example

```typescript
import {
    LegacyBankingControllerApi,
    Configuration,
    RegisterBankAccountRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyBankingControllerApi(configuration);

let registerBankAccountRequest: RegisterBankAccountRequest; //

const { status, data } = await apiInstance.createAccount(
    registerBankAccountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerBankAccountRequest** | **RegisterBankAccountRequest**|  | |


### Return type

**ApiResponseBankAccountResponse**

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

# **getAccount1**
> ApiResponseBankAccountResponse getAccount1()


### Example

```typescript
import {
    LegacyBankingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyBankingControllerApi(configuration);

let bankAccountId: string; // (default to undefined)

const { status, data } = await apiInstance.getAccount1(
    bankAccountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bankAccountId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseBankAccountResponse**

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

# **history**
> ApiResponseListBankTransactionResponse history()


### Example

```typescript
import {
    LegacyBankingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyBankingControllerApi(configuration);

let bankAccountId: string; // (default to undefined)
let limit: number; // (optional) (default to 50)

const { status, data } = await apiInstance.history(
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

# **listAccounts**
> ApiResponseListBankAccountResponse listAccounts()


### Example

```typescript
import {
    LegacyBankingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyBankingControllerApi(configuration);

let organizationId: string; // (optional) (default to undefined)
let agencyId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listAccounts(
    organizationId,
    agencyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | (optional) defaults to undefined|
| **agencyId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ApiResponseListBankAccountResponse**

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

# **recordTransaction**
> ApiResponseBankTransactionResponse recordTransaction(registerBankTransactionRequest)


### Example

```typescript
import {
    LegacyBankingControllerApi,
    Configuration,
    RegisterBankTransactionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyBankingControllerApi(configuration);

let registerBankTransactionRequest: RegisterBankTransactionRequest; //

const { status, data } = await apiInstance.recordTransaction(
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

