# LegacyBankingCatalogControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**countAuditLogs**](#countauditlogs) | **GET** /api/audit-logs/count | |
|[**createBank**](#createbank) | **POST** /api/banks | |
|[**createBatch**](#createbatch) | **POST** /api/statement-lines/statement/{statementId}/batch | |
|[**createStatementLine**](#createstatementline) | **POST** /api/statement-lines | |
|[**createTransactionType**](#createtransactiontype) | **POST** /api/transaction-types | |
|[**deleteBank**](#deletebank) | **DELETE** /api/banks/{id} | |
|[**deleteStatementLine**](#deletestatementline) | **DELETE** /api/statement-lines/{id} | |
|[**deleteTransactionType**](#deletetransactiontype) | **DELETE** /api/transaction-types/{id} | |
|[**getAuditLog**](#getauditlog) | **GET** /api/audit-logs/{id} | |
|[**getBank**](#getbank) | **GET** /api/banks/{id} | |
|[**getBankByCode**](#getbankbycode) | **GET** /api/banks/code/{code} | |
|[**getStatementLine**](#getstatementline) | **GET** /api/statement-lines/{id} | |
|[**getTransactionType**](#gettransactiontype) | **GET** /api/transaction-types/{id} | |
|[**ignoreStatementLine**](#ignorestatementline) | **POST** /api/statement-lines/{id}/ignore | |
|[**listActions**](#listactions) | **GET** /api/audit-logs/actions | |
|[**listAuditLogs**](#listauditlogs) | **GET** /api/audit-logs | |
|[**listBanks**](#listbanks) | **GET** /api/banks | |
|[**listByEntity**](#listbyentity) | **GET** /api/audit-logs/entity/{entityId} | |
|[**listMatchedStatementLines**](#listmatchedstatementlines) | **GET** /api/statement-lines/statement/{statementId}/matched | |
|[**listModules**](#listmodules) | **GET** /api/audit-logs/modules | |
|[**listStatementLines**](#liststatementlines) | **GET** /api/statement-lines/statement/{statementId} | |
|[**listToday**](#listtoday) | **GET** /api/audit-logs/today | |
|[**listTransactionTypes**](#listtransactiontypes) | **GET** /api/transaction-types | |
|[**listTransactionTypesByCategory**](#listtransactiontypesbycategory) | **GET** /api/transaction-types/category/{category} | |
|[**listUnmatchedStatementLines**](#listunmatchedstatementlines) | **GET** /api/statement-lines/statement/{statementId}/unmatched | |
|[**resetStatementLine**](#resetstatementline) | **POST** /api/statement-lines/{id}/reset | |
|[**updateBank**](#updatebank) | **PUT** /api/banks/{id} | |
|[**updateTransactionType**](#updatetransactiontype) | **PUT** /api/transaction-types/{id} | |

# **countAuditLogs**
> number countAuditLogs()


### Example

```typescript
import {
    LegacyBankingCatalogControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyBankingCatalogControllerApi(configuration);

const { status, data } = await apiInstance.countAuditLogs();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**number**

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

# **createBank**
> BankView createBank(createBankRequest)


### Example

```typescript
import {
    LegacyBankingCatalogControllerApi,
    Configuration,
    CreateBankRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyBankingCatalogControllerApi(configuration);

let createBankRequest: CreateBankRequest; //

const { status, data } = await apiInstance.createBank(
    createBankRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createBankRequest** | **CreateBankRequest**|  | |


### Return type

**BankView**

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

# **createBatch**
> Array<StatementLineView> createBatch(batchStatementLinesRequest)


### Example

```typescript
import {
    LegacyBankingCatalogControllerApi,
    Configuration,
    BatchStatementLinesRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyBankingCatalogControllerApi(configuration);

let statementId: string; // (default to undefined)
let batchStatementLinesRequest: BatchStatementLinesRequest; //

const { status, data } = await apiInstance.createBatch(
    statementId,
    batchStatementLinesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **batchStatementLinesRequest** | **BatchStatementLinesRequest**|  | |
| **statementId** | [**string**] |  | defaults to undefined|


### Return type

**Array<StatementLineView>**

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

# **createStatementLine**
> StatementLineView createStatementLine(createStatementLineRequest)


### Example

```typescript
import {
    LegacyBankingCatalogControllerApi,
    Configuration,
    CreateStatementLineRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyBankingCatalogControllerApi(configuration);

let createStatementLineRequest: CreateStatementLineRequest; //

const { status, data } = await apiInstance.createStatementLine(
    createStatementLineRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createStatementLineRequest** | **CreateStatementLineRequest**|  | |


### Return type

**StatementLineView**

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

# **createTransactionType**
> TransactionTypeView createTransactionType(createTransactionTypeRequest)


### Example

```typescript
import {
    LegacyBankingCatalogControllerApi,
    Configuration,
    CreateTransactionTypeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyBankingCatalogControllerApi(configuration);

let createTransactionTypeRequest: CreateTransactionTypeRequest; //

const { status, data } = await apiInstance.createTransactionType(
    createTransactionTypeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTransactionTypeRequest** | **CreateTransactionTypeRequest**|  | |


### Return type

**TransactionTypeView**

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

# **deleteBank**
> deleteBank()


### Example

```typescript
import {
    LegacyBankingCatalogControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyBankingCatalogControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteBank(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteStatementLine**
> deleteStatementLine()


### Example

```typescript
import {
    LegacyBankingCatalogControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyBankingCatalogControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteStatementLine(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteTransactionType**
> deleteTransactionType()


### Example

```typescript
import {
    LegacyBankingCatalogControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyBankingCatalogControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteTransactionType(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAuditLog**
> AuditLogView getAuditLog()


### Example

```typescript
import {
    LegacyBankingCatalogControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyBankingCatalogControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getAuditLog(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**AuditLogView**

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

# **getBank**
> BankView getBank()


### Example

```typescript
import {
    LegacyBankingCatalogControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyBankingCatalogControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getBank(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**BankView**

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

# **getBankByCode**
> BankView getBankByCode()


### Example

```typescript
import {
    LegacyBankingCatalogControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyBankingCatalogControllerApi(configuration);

let code: string; // (default to undefined)

const { status, data } = await apiInstance.getBankByCode(
    code
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] |  | defaults to undefined|


### Return type

**BankView**

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

# **getStatementLine**
> StatementLineView getStatementLine()


### Example

```typescript
import {
    LegacyBankingCatalogControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyBankingCatalogControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getStatementLine(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**StatementLineView**

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

# **getTransactionType**
> TransactionTypeView getTransactionType()


### Example

```typescript
import {
    LegacyBankingCatalogControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyBankingCatalogControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getTransactionType(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**TransactionTypeView**

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

# **ignoreStatementLine**
> StatementLineView ignoreStatementLine()


### Example

```typescript
import {
    LegacyBankingCatalogControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyBankingCatalogControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.ignoreStatementLine(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**StatementLineView**

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

# **listActions**
> Set<string> listActions()


### Example

```typescript
import {
    LegacyBankingCatalogControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyBankingCatalogControllerApi(configuration);

const { status, data } = await apiInstance.listActions();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Set<string>**

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

# **listAuditLogs**
> Array<AuditLogView> listAuditLogs()


### Example

```typescript
import {
    LegacyBankingCatalogControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyBankingCatalogControllerApi(configuration);

const { status, data } = await apiInstance.listAuditLogs();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<AuditLogView>**

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

# **listBanks**
> Array<BankView> listBanks()


### Example

```typescript
import {
    LegacyBankingCatalogControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyBankingCatalogControllerApi(configuration);

const { status, data } = await apiInstance.listBanks();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<BankView>**

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

# **listByEntity**
> Array<AuditLogView> listByEntity()


### Example

```typescript
import {
    LegacyBankingCatalogControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyBankingCatalogControllerApi(configuration);

let entityId: string; // (default to undefined)

const { status, data } = await apiInstance.listByEntity(
    entityId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityId** | [**string**] |  | defaults to undefined|


### Return type

**Array<AuditLogView>**

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

# **listMatchedStatementLines**
> Array<StatementLineView> listMatchedStatementLines()


### Example

```typescript
import {
    LegacyBankingCatalogControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyBankingCatalogControllerApi(configuration);

let statementId: string; // (default to undefined)

const { status, data } = await apiInstance.listMatchedStatementLines(
    statementId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **statementId** | [**string**] |  | defaults to undefined|


### Return type

**Array<StatementLineView>**

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

# **listModules**
> Set<string> listModules()


### Example

```typescript
import {
    LegacyBankingCatalogControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyBankingCatalogControllerApi(configuration);

const { status, data } = await apiInstance.listModules();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Set<string>**

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

# **listStatementLines**
> Array<StatementLineView> listStatementLines()


### Example

```typescript
import {
    LegacyBankingCatalogControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyBankingCatalogControllerApi(configuration);

let statementId: string; // (default to undefined)

const { status, data } = await apiInstance.listStatementLines(
    statementId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **statementId** | [**string**] |  | defaults to undefined|


### Return type

**Array<StatementLineView>**

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

# **listToday**
> Array<AuditLogView> listToday()


### Example

```typescript
import {
    LegacyBankingCatalogControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyBankingCatalogControllerApi(configuration);

const { status, data } = await apiInstance.listToday();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<AuditLogView>**

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

# **listTransactionTypes**
> Array<TransactionTypeView> listTransactionTypes()


### Example

```typescript
import {
    LegacyBankingCatalogControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyBankingCatalogControllerApi(configuration);

const { status, data } = await apiInstance.listTransactionTypes();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<TransactionTypeView>**

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

# **listTransactionTypesByCategory**
> Array<TransactionTypeView> listTransactionTypesByCategory()


### Example

```typescript
import {
    LegacyBankingCatalogControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyBankingCatalogControllerApi(configuration);

let category: string; // (default to undefined)

const { status, data } = await apiInstance.listTransactionTypesByCategory(
    category
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **category** | [**string**] |  | defaults to undefined|


### Return type

**Array<TransactionTypeView>**

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

# **listUnmatchedStatementLines**
> Array<StatementLineView> listUnmatchedStatementLines()


### Example

```typescript
import {
    LegacyBankingCatalogControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyBankingCatalogControllerApi(configuration);

let statementId: string; // (default to undefined)

const { status, data } = await apiInstance.listUnmatchedStatementLines(
    statementId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **statementId** | [**string**] |  | defaults to undefined|


### Return type

**Array<StatementLineView>**

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

# **resetStatementLine**
> StatementLineView resetStatementLine()


### Example

```typescript
import {
    LegacyBankingCatalogControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyBankingCatalogControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.resetStatementLine(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**StatementLineView**

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

# **updateBank**
> BankView updateBank(updateBankRequest)


### Example

```typescript
import {
    LegacyBankingCatalogControllerApi,
    Configuration,
    UpdateBankRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyBankingCatalogControllerApi(configuration);

let id: string; // (default to undefined)
let updateBankRequest: UpdateBankRequest; //

const { status, data } = await apiInstance.updateBank(
    id,
    updateBankRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateBankRequest** | **UpdateBankRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**BankView**

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

# **updateTransactionType**
> TransactionTypeView updateTransactionType(updateTransactionTypeRequest)


### Example

```typescript
import {
    LegacyBankingCatalogControllerApi,
    Configuration,
    UpdateTransactionTypeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyBankingCatalogControllerApi(configuration);

let id: string; // (default to undefined)
let updateTransactionTypeRequest: UpdateTransactionTypeRequest; //

const { status, data } = await apiInstance.updateTransactionType(
    id,
    updateTransactionTypeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateTransactionTypeRequest** | **UpdateTransactionTypeRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**TransactionTypeView**

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

