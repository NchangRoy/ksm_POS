# BankStatementControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getStatement**](#getstatement) | **GET** /api/treasury/statements/{statementId} | |
|[**getStatement1**](#getstatement1) | **GET** /api/banking/statements/{statementId} | |
|[**listStatements**](#liststatements) | **GET** /api/treasury/statements | |
|[**listStatements1**](#liststatements1) | **GET** /api/banking/statements | |
|[**register**](#register) | **POST** /api/treasury/statements/import | |
|[**register1**](#register1) | **POST** /api/banking/statements/import | |
|[**register2**](#register2) | **POST** /api/treasury/statements | |
|[**register3**](#register3) | **POST** /api/banking/statements | |

# **getStatement**
> ApiResponseBankStatementResponse getStatement()


### Example

```typescript
import {
    BankStatementControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BankStatementControllerApi(configuration);

let statementId: string; // (default to undefined)

const { status, data } = await apiInstance.getStatement(
    statementId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **statementId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseBankStatementResponse**

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

# **getStatement1**
> ApiResponseBankStatementResponse getStatement1()


### Example

```typescript
import {
    BankStatementControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BankStatementControllerApi(configuration);

let statementId: string; // (default to undefined)

const { status, data } = await apiInstance.getStatement1(
    statementId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **statementId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseBankStatementResponse**

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

# **listStatements**
> ApiResponseListBankStatementResponse listStatements()


### Example

```typescript
import {
    BankStatementControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BankStatementControllerApi(configuration);

let organizationId: string; // (default to undefined)
let bankAccountId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listStatements(
    organizationId,
    bankAccountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **bankAccountId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ApiResponseListBankStatementResponse**

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

# **listStatements1**
> ApiResponseListBankStatementResponse listStatements1()


### Example

```typescript
import {
    BankStatementControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BankStatementControllerApi(configuration);

let organizationId: string; // (default to undefined)
let bankAccountId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listStatements1(
    organizationId,
    bankAccountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **bankAccountId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ApiResponseListBankStatementResponse**

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

# **register**
> ApiResponseBankStatementResponse register(registerBankStatementRequest)


### Example

```typescript
import {
    BankStatementControllerApi,
    Configuration,
    RegisterBankStatementRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BankStatementControllerApi(configuration);

let registerBankStatementRequest: RegisterBankStatementRequest; //

const { status, data } = await apiInstance.register(
    registerBankStatementRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerBankStatementRequest** | **RegisterBankStatementRequest**|  | |


### Return type

**ApiResponseBankStatementResponse**

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

# **register1**
> ApiResponseBankStatementResponse register1(registerBankStatementRequest)


### Example

```typescript
import {
    BankStatementControllerApi,
    Configuration,
    RegisterBankStatementRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BankStatementControllerApi(configuration);

let registerBankStatementRequest: RegisterBankStatementRequest; //

const { status, data } = await apiInstance.register1(
    registerBankStatementRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerBankStatementRequest** | **RegisterBankStatementRequest**|  | |


### Return type

**ApiResponseBankStatementResponse**

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

# **register2**
> ApiResponseBankStatementResponse register2(registerBankStatementRequest)


### Example

```typescript
import {
    BankStatementControllerApi,
    Configuration,
    RegisterBankStatementRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BankStatementControllerApi(configuration);

let registerBankStatementRequest: RegisterBankStatementRequest; //

const { status, data } = await apiInstance.register2(
    registerBankStatementRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerBankStatementRequest** | **RegisterBankStatementRequest**|  | |


### Return type

**ApiResponseBankStatementResponse**

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

# **register3**
> ApiResponseBankStatementResponse register3(registerBankStatementRequest)


### Example

```typescript
import {
    BankStatementControllerApi,
    Configuration,
    RegisterBankStatementRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BankStatementControllerApi(configuration);

let registerBankStatementRequest: RegisterBankStatementRequest; //

const { status, data } = await apiInstance.register3(
    registerBankStatementRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerBankStatementRequest** | **RegisterBankStatementRequest**|  | |


### Return type

**ApiResponseBankStatementResponse**

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

