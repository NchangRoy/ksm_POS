# AccountingBookkeepingControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cancelEntry**](#cancelentry) | **PUT** /api/accounting-service/entries/{entryId}/cancel | |
|[**countJournalsByType**](#countjournalsbytype) | **GET** /api/accounting-service/journals/count/type/{type} | |
|[**createAccount1**](#createaccount1) | **POST** /api/accounting-service/accounts | |
|[**createBankReconciliation**](#createbankreconciliation) | **POST** /api/accounting-service/bank-reconciliations | |
|[**createBankStatementPosting**](#createbankstatementposting) | **POST** /api/accounting-service/bank-statement-postings | |
|[**createCashRegisterPosting**](#createcashregisterposting) | **POST** /api/accounting-service/cash-register-postings | |
|[**createDraftEntry**](#createdraftentry) | **POST** /api/accounting-service/draft-entries | |
|[**createEntry**](#createentry) | **POST** /api/accounting-service/entries | |
|[**createInvoiceAccounting**](#createinvoiceaccounting) | **POST** /api/accounting-service/invoice-accounting | |
|[**createInvoiceUpload**](#createinvoiceupload) | **POST** /api/accounting-service/invoice-uploads | |
|[**createLettering**](#createlettering) | **POST** /api/accounting-service/letterings | |
|[**createOperation**](#createoperation) | **POST** /api/accounting-service/operations | |
|[**createPlanAccount2**](#createplanaccount2) | **POST** /api/accounting-service/plan-accounts | |
|[**createPointing**](#createpointing) | **POST** /api/accounting-service/pointings | |
|[**createStockMovementPosting**](#createstockmovementposting) | **POST** /api/accounting-service/stock-movement-postings | |
|[**deactivateEntry**](#deactivateentry) | **PUT** /api/accounting-service/entries/{entryId}/deactivate | |
|[**deleteAccount**](#deleteaccount) | **DELETE** /api/accounting-service/accounts/{accountId} | |
|[**deleteEntry**](#deleteentry) | **DELETE** /api/accounting-service/entries/{entryId} | |
|[**generateAccount**](#generateaccount) | **POST** /api/accounting-service/accounts/generate | |
|[**generateEntry**](#generateentry) | **POST** /api/accounting-service/entries/generate | |
|[**getAccount**](#getaccount) | **GET** /api/accounting-service/accounts/{accountId} | |
|[**getEntry**](#getentry) | **GET** /api/accounting-service/entries/{entryId} | |
|[**initPlan**](#initplan) | **POST** /api/accounting-service/plan-accounts/init-ohada | |
|[**listAccounts1**](#listaccounts1) | **GET** /api/accounting-service/accounts | |
|[**listAccountsByType**](#listaccountsbytype) | **GET** /api/accounting-service/accounts/type/{accountType} | |
|[**listAudits2**](#listaudits2) | **GET** /api/accounting-service/journal-audits | |
|[**listBankReconciliations**](#listbankreconciliations) | **GET** /api/accounting-service/bank-reconciliations | |
|[**listBankStatementPostings**](#listbankstatementpostings) | **GET** /api/accounting-service/bank-statement-postings | |
|[**listCashRegisterPostings**](#listcashregisterpostings) | **GET** /api/accounting-service/cash-register-postings | |
|[**listDraftEntries**](#listdraftentries) | **GET** /api/accounting-service/draft-entries | |
|[**listEntries**](#listentries) | **GET** /api/accounting-service/entries | |
|[**listInvoiceAccounting**](#listinvoiceaccounting) | **GET** /api/accounting-service/invoice-accounting | |
|[**listInvoiceUploads**](#listinvoiceuploads) | **GET** /api/accounting-service/invoice-uploads | |
|[**listJournalsByType**](#listjournalsbytype) | **GET** /api/accounting-service/journals/type/{type} | |
|[**listLetterings**](#listletterings) | **GET** /api/accounting-service/letterings | |
|[**listNonValidatedEntries**](#listnonvalidatedentries) | **GET** /api/accounting-service/entries/non-validated | |
|[**listOperations**](#listoperations) | **GET** /api/accounting-service/operations | |
|[**listPlanAccounts2**](#listplanaccounts2) | **GET** /api/accounting-service/plan-accounts | |
|[**listPlanAccountsByClass2**](#listplanaccountsbyclass2) | **GET** /api/accounting-service/plan-accounts/class/{accountClass} | |
|[**listPointings**](#listpointings) | **GET** /api/accounting-service/pointings | |
|[**listStockMovementPostings**](#liststockmovementpostings) | **GET** /api/accounting-service/stock-movement-postings | |
|[**postDraftEntry**](#postdraftentry) | **POST** /api/accounting-service/draft-entries/{draftEntryId}/post | |
|[**searchAccounts**](#searchaccounts) | **GET** /api/accounting-service/accounts/search | |
|[**searchEntries**](#searchentries) | **GET** /api/accounting-service/entries/search | |
|[**searchJournals**](#searchjournals) | **GET** /api/accounting-service/journals/search | |
|[**updateAccount**](#updateaccount) | **PUT** /api/accounting-service/accounts/{accountId} | |
|[**updateEntry**](#updateentry) | **PUT** /api/accounting-service/entries/{entryId} | |
|[**upsertSetting**](#upsertsetting) | **POST** /api/accounting-service/settings | |
|[**validateEntry**](#validateentry) | **POST** /api/accounting-service/entries/{entryId}/validate | |

# **cancelEntry**
> AccountingEntryView cancelEntry()


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

let entryId: string; // (default to undefined)

const { status, data } = await apiInstance.cancelEntry(
    entryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entryId** | [**string**] |  | defaults to undefined|


### Return type

**AccountingEntryView**

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

# **countJournalsByType**
> number countJournalsByType()


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

let type: string; // (default to undefined)

const { status, data } = await apiInstance.countJournalsByType(
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**string**] |  | defaults to undefined|


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

# **createAccount1**
> AccountView createAccount1(createAccountRequest)


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration,
    CreateAccountRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

let createAccountRequest: CreateAccountRequest; //

const { status, data } = await apiInstance.createAccount1(
    createAccountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAccountRequest** | **CreateAccountRequest**|  | |


### Return type

**AccountView**

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

# **createBankReconciliation**
> BankReconciliationView createBankReconciliation(createBankReconciliationRequest)


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration,
    CreateBankReconciliationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

let createBankReconciliationRequest: CreateBankReconciliationRequest; //

const { status, data } = await apiInstance.createBankReconciliation(
    createBankReconciliationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createBankReconciliationRequest** | **CreateBankReconciliationRequest**|  | |


### Return type

**BankReconciliationView**

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

# **createBankStatementPosting**
> BankStatementPostingView createBankStatementPosting(createBankStatementPostingRequest)


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration,
    CreateBankStatementPostingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

let createBankStatementPostingRequest: CreateBankStatementPostingRequest; //

const { status, data } = await apiInstance.createBankStatementPosting(
    createBankStatementPostingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createBankStatementPostingRequest** | **CreateBankStatementPostingRequest**|  | |


### Return type

**BankStatementPostingView**

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

# **createCashRegisterPosting**
> CashRegisterPostingView createCashRegisterPosting(createCashRegisterPostingRequest)


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration,
    CreateCashRegisterPostingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

let createCashRegisterPostingRequest: CreateCashRegisterPostingRequest; //

const { status, data } = await apiInstance.createCashRegisterPosting(
    createCashRegisterPostingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCashRegisterPostingRequest** | **CreateCashRegisterPostingRequest**|  | |


### Return type

**CashRegisterPostingView**

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

# **createDraftEntry**
> DraftEntryView createDraftEntry(createDraftEntryRequest)


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration,
    CreateDraftEntryRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

let createDraftEntryRequest: CreateDraftEntryRequest; //

const { status, data } = await apiInstance.createDraftEntry(
    createDraftEntryRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createDraftEntryRequest** | **CreateDraftEntryRequest**|  | |


### Return type

**DraftEntryView**

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

# **createEntry**
> AccountingEntryView createEntry(createEntryRequest)


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration,
    CreateEntryRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

let createEntryRequest: CreateEntryRequest; //

const { status, data } = await apiInstance.createEntry(
    createEntryRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createEntryRequest** | **CreateEntryRequest**|  | |


### Return type

**AccountingEntryView**

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

# **createInvoiceAccounting**
> InvoiceAccountingView createInvoiceAccounting(createInvoiceAccountingRequest)


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration,
    CreateInvoiceAccountingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

let createInvoiceAccountingRequest: CreateInvoiceAccountingRequest; //

const { status, data } = await apiInstance.createInvoiceAccounting(
    createInvoiceAccountingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createInvoiceAccountingRequest** | **CreateInvoiceAccountingRequest**|  | |


### Return type

**InvoiceAccountingView**

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

# **createInvoiceUpload**
> InvoiceUploadView createInvoiceUpload(createInvoiceUploadRequest)


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration,
    CreateInvoiceUploadRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

let createInvoiceUploadRequest: CreateInvoiceUploadRequest; //

const { status, data } = await apiInstance.createInvoiceUpload(
    createInvoiceUploadRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createInvoiceUploadRequest** | **CreateInvoiceUploadRequest**|  | |


### Return type

**InvoiceUploadView**

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

# **createLettering**
> LetteringView createLettering(createLetteringRequest)


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration,
    CreateLetteringRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

let createLetteringRequest: CreateLetteringRequest; //

const { status, data } = await apiInstance.createLettering(
    createLetteringRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createLetteringRequest** | **CreateLetteringRequest**|  | |


### Return type

**LetteringView**

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

# **createOperation**
> AccountingOperationView createOperation(createOperationRequest)


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration,
    CreateOperationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

let createOperationRequest: CreateOperationRequest; //

const { status, data } = await apiInstance.createOperation(
    createOperationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createOperationRequest** | **CreateOperationRequest**|  | |


### Return type

**AccountingOperationView**

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

# **createPlanAccount2**
> PlanAccountView createPlanAccount2(createPlanAccountRequest)


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration,
    CreatePlanAccountRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

let createPlanAccountRequest: CreatePlanAccountRequest; //

const { status, data } = await apiInstance.createPlanAccount2(
    createPlanAccountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPlanAccountRequest** | **CreatePlanAccountRequest**|  | |


### Return type

**PlanAccountView**

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

# **createPointing**
> PointingView createPointing(createPointingRequest)


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration,
    CreatePointingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

let createPointingRequest: CreatePointingRequest; //

const { status, data } = await apiInstance.createPointing(
    createPointingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPointingRequest** | **CreatePointingRequest**|  | |


### Return type

**PointingView**

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

# **createStockMovementPosting**
> StockMovementPostingView createStockMovementPosting(createStockMovementPostingRequest)


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration,
    CreateStockMovementPostingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

let createStockMovementPostingRequest: CreateStockMovementPostingRequest; //

const { status, data } = await apiInstance.createStockMovementPosting(
    createStockMovementPostingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createStockMovementPostingRequest** | **CreateStockMovementPostingRequest**|  | |


### Return type

**StockMovementPostingView**

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

# **deactivateEntry**
> deactivateEntry()


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

let entryId: string; // (default to undefined)

const { status, data } = await apiInstance.deactivateEntry(
    entryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entryId** | [**string**] |  | defaults to undefined|


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

# **deleteAccount**
> deleteAccount()


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

let accountId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteAccount(
    accountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] |  | defaults to undefined|


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

# **deleteEntry**
> deleteEntry()


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

let entryId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteEntry(
    entryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entryId** | [**string**] |  | defaults to undefined|


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

# **generateAccount**
> AccountView generateAccount(generateAccountRequest)


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration,
    GenerateAccountRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

let generateAccountRequest: GenerateAccountRequest; //

const { status, data } = await apiInstance.generateAccount(
    generateAccountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateAccountRequest** | **GenerateAccountRequest**|  | |


### Return type

**AccountView**

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

# **generateEntry**
> AccountingEntryView generateEntry(createOperationRequest)


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration,
    CreateOperationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

let createOperationRequest: CreateOperationRequest; //

const { status, data } = await apiInstance.generateEntry(
    createOperationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createOperationRequest** | **CreateOperationRequest**|  | |


### Return type

**AccountingEntryView**

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

# **getAccount**
> AccountView getAccount()


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

let accountId: string; // (default to undefined)

const { status, data } = await apiInstance.getAccount(
    accountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] |  | defaults to undefined|


### Return type

**AccountView**

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

# **getEntry**
> AccountingEntryView getEntry()


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

let entryId: string; // (default to undefined)

const { status, data } = await apiInstance.getEntry(
    entryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entryId** | [**string**] |  | defaults to undefined|


### Return type

**AccountingEntryView**

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

# **initPlan**
> Array<PlanAccountView> initPlan()


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.initPlan();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<PlanAccountView>**

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

# **listAccounts1**
> Array<AccountView> listAccounts1()


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listAccounts1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<AccountView>**

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

# **listAccountsByType**
> Array<AccountView> listAccountsByType()


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

let accountType: string; // (default to undefined)

const { status, data } = await apiInstance.listAccountsByType(
    accountType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountType** | [**string**] |  | defaults to undefined|


### Return type

**Array<AccountView>**

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

# **listAudits2**
> Array<JournalAuditView> listAudits2()


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listAudits2();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<JournalAuditView>**

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

# **listBankReconciliations**
> Array<BankReconciliationView> listBankReconciliations()


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listBankReconciliations();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<BankReconciliationView>**

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

# **listBankStatementPostings**
> Array<BankStatementPostingView> listBankStatementPostings()


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listBankStatementPostings();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<BankStatementPostingView>**

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

# **listCashRegisterPostings**
> Array<CashRegisterPostingView> listCashRegisterPostings()


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listCashRegisterPostings();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CashRegisterPostingView>**

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

# **listDraftEntries**
> Array<DraftEntryView> listDraftEntries()


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listDraftEntries();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<DraftEntryView>**

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

# **listEntries**
> Array<AccountingEntryView> listEntries()


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listEntries();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<AccountingEntryView>**

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

# **listInvoiceAccounting**
> Array<InvoiceAccountingView> listInvoiceAccounting()


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listInvoiceAccounting();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<InvoiceAccountingView>**

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

# **listInvoiceUploads**
> Array<InvoiceUploadView> listInvoiceUploads()


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listInvoiceUploads();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<InvoiceUploadView>**

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

# **listJournalsByType**
> Array<JournalView> listJournalsByType()


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

let type: string; // (default to undefined)

const { status, data } = await apiInstance.listJournalsByType(
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**string**] |  | defaults to undefined|


### Return type

**Array<JournalView>**

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

# **listLetterings**
> Array<LetteringView> listLetterings()


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listLetterings();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<LetteringView>**

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

# **listNonValidatedEntries**
> Array<AccountingEntryView> listNonValidatedEntries()


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listNonValidatedEntries();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<AccountingEntryView>**

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

# **listOperations**
> Array<AccountingOperationView> listOperations()


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listOperations();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<AccountingOperationView>**

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

# **listPlanAccounts2**
> Array<PlanAccountView> listPlanAccounts2()


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listPlanAccounts2();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<PlanAccountView>**

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

# **listPlanAccountsByClass2**
> Array<PlanAccountView> listPlanAccountsByClass2()


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

let accountClass: string; // (default to undefined)

const { status, data } = await apiInstance.listPlanAccountsByClass2(
    accountClass
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountClass** | [**string**] |  | defaults to undefined|


### Return type

**Array<PlanAccountView>**

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

# **listPointings**
> Array<PointingView> listPointings()


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listPointings();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<PointingView>**

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

# **listStockMovementPostings**
> Array<StockMovementPostingView> listStockMovementPostings()


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listStockMovementPostings();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<StockMovementPostingView>**

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

# **postDraftEntry**
> AccountingEntryView postDraftEntry()


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

let draftEntryId: string; // (default to undefined)

const { status, data } = await apiInstance.postDraftEntry(
    draftEntryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **draftEntryId** | [**string**] |  | defaults to undefined|


### Return type

**AccountingEntryView**

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

# **searchAccounts**
> Array<AccountView> searchAccounts()


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

let query: string; // (default to undefined)

const { status, data } = await apiInstance.searchAccounts(
    query
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **query** | [**string**] |  | defaults to undefined|


### Return type

**Array<AccountView>**

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

# **searchEntries**
> Array<AccountingEntryView> searchEntries()


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

let journalId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.searchEntries(
    journalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **journalId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<AccountingEntryView>**

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

# **searchJournals**
> Array<JournalView> searchJournals()


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

let query: string; // (default to undefined)

const { status, data } = await apiInstance.searchJournals(
    query
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **query** | [**string**] |  | defaults to undefined|


### Return type

**Array<JournalView>**

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

# **updateAccount**
> AccountView updateAccount(updateAccountRequest)


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration,
    UpdateAccountRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

let accountId: string; // (default to undefined)
let updateAccountRequest: UpdateAccountRequest; //

const { status, data } = await apiInstance.updateAccount(
    accountId,
    updateAccountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateAccountRequest** | **UpdateAccountRequest**|  | |
| **accountId** | [**string**] |  | defaults to undefined|


### Return type

**AccountView**

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

# **updateEntry**
> AccountingEntryView updateEntry(updateEntryRequest)


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration,
    UpdateEntryRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

let entryId: string; // (default to undefined)
let updateEntryRequest: UpdateEntryRequest; //

const { status, data } = await apiInstance.updateEntry(
    entryId,
    updateEntryRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateEntryRequest** | **UpdateEntryRequest**|  | |
| **entryId** | [**string**] |  | defaults to undefined|


### Return type

**AccountingEntryView**

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

# **upsertSetting**
> AccountingSettingView upsertSetting(upsertSettingRequest)


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration,
    UpsertSettingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

let upsertSettingRequest: UpsertSettingRequest; //

const { status, data } = await apiInstance.upsertSetting(
    upsertSettingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **upsertSettingRequest** | **UpsertSettingRequest**|  | |


### Return type

**AccountingSettingView**

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

# **validateEntry**
> AccountingEntryView validateEntry()


### Example

```typescript
import {
    AccountingBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingBookkeepingControllerApi(configuration);

let entryId: string; // (default to undefined)

const { status, data } = await apiInstance.validateEntry(
    entryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entryId** | [**string**] |  | defaults to undefined|


### Return type

**AccountingEntryView**

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

