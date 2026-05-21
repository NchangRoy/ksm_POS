# AccountingLegacyBookkeepingControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**autoLettering**](#autolettering) | **POST** /api/comptable/lettrage/auto | |
|[**bankStatementCandidates**](#bankstatementcandidates) | **GET** /api/accounting-service/bank-statements/{statementId}/candidates | |
|[**bankStatementCandidates1**](#bankstatementcandidates1) | **GET** /api/accounting/bank-statements/{statementId}/candidates | |
|[**createCashMovement**](#createcashmovement) | **POST** /api/v1/accounting/cash-movements | |
|[**createCompte**](#createcompte) | **POST** /api/accounting-service/comptes | |
|[**createCompte1**](#createcompte1) | **POST** /api/accounting/comptes | |
|[**createCurrency**](#createcurrency) | **POST** /api/accounting-service/currencies | |
|[**createCurrency1**](#createcurrency1) | **POST** /api/accounting/currencies | |
|[**createEcriture**](#createecriture) | **POST** /api/accounting-service/ecritures | |
|[**createEcriture1**](#createecriture1) | **POST** /api/accounting/ecritures | |
|[**createExchangeRate**](#createexchangerate) | **POST** /api/accounting-service/exchange-rates | |
|[**createExchangeRate1**](#createexchangerate1) | **POST** /api/accounting/exchange-rates | |
|[**createJournal**](#createjournal) | **POST** /api/accounting-service/journals | |
|[**createJournal1**](#createjournal1) | **POST** /api/accounting/journals | |
|[**createPlanAccount**](#createplanaccount) | **POST** /api/accounting-service/plan-comptable | |
|[**createPlanAccount1**](#createplanaccount1) | **POST** /api/accounting/plan-comptable | |
|[**createPurchaseInvoiceAccounting**](#createpurchaseinvoiceaccounting) | **POST** /api/accounting-service/invoices/purchase | |
|[**createPurchaseInvoiceAccounting1**](#createpurchaseinvoiceaccounting1) | **POST** /api/accounting/invoices/purchase | |
|[**createSaleInvoiceAccounting**](#createsaleinvoiceaccounting) | **POST** /api/accounting-service/invoices/sale | |
|[**createSaleInvoiceAccounting1**](#createsaleinvoiceaccounting1) | **POST** /api/accounting/invoices/sale | |
|[**createStockMovement**](#createstockmovement) | **POST** /api/comptable/stock/mouvement | |
|[**createTax**](#createtax) | **POST** /api/accounting-service/taxes | |
|[**createTax1**](#createtax1) | **POST** /api/accounting/taxes | |
|[**deleteBrouillard1**](#deletebrouillard1) | **DELETE** /api/accounting-service/brouillards/{draftEntryId} | |
|[**deleteCompte**](#deletecompte) | **DELETE** /api/accounting-service/comptes/{accountId} | |
|[**deleteCompte1**](#deletecompte1) | **DELETE** /api/accounting/comptes/{accountId} | |
|[**deleteCurrency**](#deletecurrency) | **DELETE** /api/accounting-service/currencies/{currencyId} | |
|[**deleteCurrency1**](#deletecurrency1) | **DELETE** /api/accounting/currencies/{currencyId} | |
|[**deleteEcriture**](#deleteecriture) | **DELETE** /api/accounting-service/ecritures/{entryId} | |
|[**deleteEcriture1**](#deleteecriture1) | **DELETE** /api/accounting/ecritures/{entryId} | |
|[**deleteExchangeRate**](#deleteexchangerate) | **DELETE** /api/accounting-service/exchange-rates/{exchangeRateId} | |
|[**deleteExchangeRate1**](#deleteexchangerate1) | **DELETE** /api/accounting/exchange-rates/{exchangeRateId} | |
|[**deleteJournal**](#deletejournal) | **DELETE** /api/accounting-service/journals/{journalId} | |
|[**deleteJournal1**](#deletejournal1) | **DELETE** /api/accounting/journals/{journalId} | |
|[**deleteOperation**](#deleteoperation) | **DELETE** /api/accounting-service/operations/{operationId} | |
|[**deleteOperation1**](#deleteoperation1) | **DELETE** /api/accounting/operations/{operationId} | |
|[**deletePlanAccount**](#deleteplanaccount) | **DELETE** /api/accounting-service/plan-comptable/{planAccountId} | |
|[**deletePlanAccount1**](#deleteplanaccount1) | **DELETE** /api/accounting/plan-comptable/{planAccountId} | |
|[**deleteTax**](#deletetax) | **DELETE** /api/accounting-service/taxes/{taxId} | |
|[**deleteTax1**](#deletetax1) | **DELETE** /api/accounting/taxes/{taxId} | |
|[**generateEcriture**](#generateecriture) | **POST** /api/accounting-service/ecritures/generate | |
|[**generateEcriture1**](#generateecriture1) | **POST** /api/accounting/ecritures/generate | |
|[**getBrouillard1**](#getbrouillard1) | **GET** /api/accounting-service/brouillards/{draftEntryId} | |
|[**getCompte**](#getcompte) | **GET** /api/accounting-service/comptes/{accountId} | |
|[**getCompte1**](#getcompte1) | **GET** /api/accounting/comptes/{accountId} | |
|[**getCurrency**](#getcurrency) | **GET** /api/accounting-service/currencies/{currencyId} | |
|[**getCurrency1**](#getcurrency1) | **GET** /api/accounting/currencies/{currencyId} | |
|[**getEcriture**](#getecriture) | **GET** /api/accounting-service/ecritures/{entryId} | |
|[**getEcriture1**](#getecriture1) | **GET** /api/accounting/ecritures/{entryId} | |
|[**getJournal**](#getjournal) | **GET** /api/accounting-service/journals/{journalId} | |
|[**getJournal1**](#getjournal1) | **GET** /api/accounting/journals/{journalId} | |
|[**getOperation**](#getoperation) | **GET** /api/accounting-service/operations/{operationId} | |
|[**getOperation1**](#getoperation1) | **GET** /api/accounting/operations/{operationId} | |
|[**getPlanAccount**](#getplanaccount) | **GET** /api/accounting-service/plan-comptable/{planAccountId} | |
|[**getPlanAccount1**](#getplanaccount1) | **GET** /api/accounting/plan-comptable/{planAccountId} | |
|[**getSetting**](#getsetting) | **GET** /api/accounting-service/settings/{type} | |
|[**getSetting1**](#getsetting1) | **GET** /api/accounting/settings/{type} | |
|[**getTax**](#gettax) | **GET** /api/accounting-service/taxes/{taxId} | |
|[**getTax1**](#gettax1) | **GET** /api/accounting/taxes/{taxId} | |
|[**importPlanAccounts**](#importplanaccounts) | **POST** /api/accounting-service/plan-comptable/import | |
|[**importPlanAccounts1**](#importplanaccounts1) | **POST** /api/accounting/plan-comptable/import | |
|[**importPointing**](#importpointing) | **POST** /api/accounting-service/pointage/import | |
|[**importPointing1**](#importpointing1) | **POST** /api/accounting/pointage/import | |
|[**importReleve**](#importreleve) | **POST** /api/comptable/releve/import/{releveId} | |
|[**initOhadaPlan**](#initohadaplan) | **POST** /api/accounting-service/plan-comptable/admin/init-ohada | |
|[**initOhadaPlan1**](#initohadaplan1) | **POST** /api/accounting/plan-comptable/admin/init-ohada | |
|[**latestExchangeRate**](#latestexchangerate) | **GET** /api/accounting-service/exchange-rates/latest | |
|[**latestExchangeRate1**](#latestexchangerate1) | **GET** /api/accounting/exchange-rates/latest | |
|[**letteringStatus**](#letteringstatus) | **GET** /api/comptable/lettrage/status | |
|[**listActiveJournals**](#listactivejournals) | **GET** /api/accounting-service/journals/active | |
|[**listActiveJournals1**](#listactivejournals1) | **GET** /api/accounting/journals/active | |
|[**listActivePlanAccounts**](#listactiveplanaccounts) | **GET** /api/accounting-service/plan-comptable/actifs | |
|[**listActivePlanAccounts1**](#listactiveplanaccounts1) | **GET** /api/accounting/plan-comptable/actifs | |
|[**listAudits**](#listaudits) | **GET** /api/accounting-service/audit | |
|[**listAudits1**](#listaudits1) | **GET** /api/accounting/audit | |
|[**listAuditsByAction**](#listauditsbyaction) | **GET** /api/accounting-service/audit/action/{action} | |
|[**listAuditsByAction1**](#listauditsbyaction1) | **GET** /api/accounting/audit/action/{action} | |
|[**listAuditsByEntry**](#listauditsbyentry) | **GET** /api/accounting-service/audit/entry/{entryId} | |
|[**listAuditsByEntry1**](#listauditsbyentry1) | **GET** /api/accounting/audit/entry/{entryId} | |
|[**listAuditsByOrganization**](#listauditsbyorganization) | **GET** /api/accounting-service/audit/organization/{organizationId} | |
|[**listAuditsByOrganization1**](#listauditsbyorganization1) | **GET** /api/accounting/audit/organization/{organizationId} | |
|[**listAuditsByPeriod**](#listauditsbyperiod) | **GET** /api/accounting-service/audit/period/{periodId} | |
|[**listAuditsByPeriod1**](#listauditsbyperiod1) | **GET** /api/accounting/audit/period/{periodId} | |
|[**listAuditsByUser**](#listauditsbyuser) | **GET** /api/accounting-service/audit/user/{userId} | |
|[**listAuditsByUser1**](#listauditsbyuser1) | **GET** /api/accounting/audit/user/{userId} | |
|[**listBrouillards1**](#listbrouillards1) | **GET** /api/accounting-service/brouillards | |
|[**listComptes**](#listcomptes) | **GET** /api/accounting-service/comptes | |
|[**listComptes1**](#listcomptes1) | **GET** /api/accounting/comptes | |
|[**listComptesByType**](#listcomptesbytype) | **GET** /api/accounting-service/comptes/type/{accountType} | |
|[**listComptesByType1**](#listcomptesbytype1) | **GET** /api/accounting/comptes/type/{accountType} | |
|[**listCurrencies**](#listcurrencies) | **GET** /api/accounting-service/currencies | |
|[**listCurrencies1**](#listcurrencies1) | **GET** /api/accounting/currencies | |
|[**listEcritures**](#listecritures) | **GET** /api/accounting-service/ecritures | |
|[**listEcritures1**](#listecritures1) | **GET** /api/accounting/ecritures | |
|[**listExchangeRates**](#listexchangerates) | **GET** /api/accounting-service/exchange-rates | |
|[**listExchangeRates1**](#listexchangerates1) | **GET** /api/accounting/exchange-rates | |
|[**listJournalAccounts**](#listjournalaccounts) | **GET** /api/accounting-service/journals/{journalId}/comptes | |
|[**listJournalAccounts1**](#listjournalaccounts1) | **GET** /api/accounting/journals/{journalId}/comptes | |
|[**listJournals**](#listjournals) | **GET** /api/accounting-service/journals | |
|[**listJournals1**](#listjournals1) | **GET** /api/accounting/journals | |
|[**listNonValidatedEcritures**](#listnonvalidatedecritures) | **GET** /api/accounting-service/ecritures/non-validated | |
|[**listNonValidatedEcritures1**](#listnonvalidatedecritures1) | **GET** /api/accounting/ecritures/non-validated | |
|[**listOperationsByAccountNumber**](#listoperationsbyaccountnumber) | **GET** /api/accounting-service/operations/by-no-compte | |
|[**listOperationsByAccountNumber1**](#listoperationsbyaccountnumber1) | **GET** /api/accounting/operations/by-no-compte | |
|[**listPlanAccounts**](#listplanaccounts) | **GET** /api/accounting-service/plan-comptable | |
|[**listPlanAccounts1**](#listplanaccounts1) | **GET** /api/accounting/plan-comptable | |
|[**listPlanAccountsByClass**](#listplanaccountsbyclass) | **GET** /api/accounting-service/plan-comptable/classe/{classe} | |
|[**listPlanAccountsByClass1**](#listplanaccountsbyclass1) | **GET** /api/accounting/plan-comptable/classe/{classe} | |
|[**listPlanAccountsByPrefix**](#listplanaccountsbyprefix) | **GET** /api/accounting-service/plan-comptable/prefix/{prefix} | |
|[**listPlanAccountsByPrefix1**](#listplanaccountsbyprefix1) | **GET** /api/accounting/plan-comptable/prefix/{prefix} | |
|[**listReleves**](#listreleves) | **GET** /api/comptable/releve/list | |
|[**listSettings**](#listsettings) | **GET** /api/accounting-service/settings | |
|[**listSettings1**](#listsettings1) | **GET** /api/accounting/settings | |
|[**listStockMovements**](#liststockmovements) | **GET** /api/comptable/stock/mouvements | |
|[**listTaxes**](#listtaxes) | **GET** /api/accounting-service/taxes | |
|[**listTaxes1**](#listtaxes1) | **GET** /api/accounting/taxes | |
|[**reconcileBankStatement**](#reconcilebankstatement) | **POST** /api/accounting-service/bank-statements/{statementId}/reconcile/{detailId} | |
|[**reconcileBankStatement1**](#reconcilebankstatement1) | **POST** /api/accounting/bank-statements/{statementId}/reconcile/{detailId} | |
|[**rejectBrouillard1**](#rejectbrouillard1) | **POST** /api/accounting-service/brouillards/{draftEntryId}/reject | |
|[**searchAudits**](#searchaudits) | **GET** /api/accounting-service/audit/search | |
|[**searchAudits1**](#searchaudits1) | **GET** /api/accounting/audit/search | |
|[**searchComptes**](#searchcomptes) | **GET** /api/accounting-service/comptes/search | |
|[**searchComptes1**](#searchcomptes1) | **GET** /api/accounting/comptes/search | |
|[**searchEcritures**](#searchecritures) | **GET** /api/accounting-service/ecritures/search | |
|[**searchEcritures1**](#searchecritures1) | **GET** /api/accounting/ecritures/search | |
|[**searchOperations**](#searchoperations) | **GET** /api/accounting-service/operations/search | |
|[**searchOperations1**](#searchoperations1) | **GET** /api/accounting/operations/search | |
|[**stockImpact**](#stockimpact) | **GET** /api/comptable/stock/impact-comptable/{movementId} | |
|[**updateCompte**](#updatecompte) | **PUT** /api/accounting-service/comptes/{accountId} | |
|[**updateCompte1**](#updatecompte1) | **PUT** /api/accounting/comptes/{accountId} | |
|[**updateCurrency**](#updatecurrency) | **PUT** /api/accounting-service/currencies/{currencyId} | |
|[**updateCurrency1**](#updatecurrency1) | **PUT** /api/accounting/currencies/{currencyId} | |
|[**updateEcriture**](#updateecriture) | **PUT** /api/accounting-service/ecritures/{entryId} | |
|[**updateEcriture1**](#updateecriture1) | **PUT** /api/accounting/ecritures/{entryId} | |
|[**updateJournal**](#updatejournal) | **PUT** /api/accounting-service/journals/{journalId} | |
|[**updateJournal1**](#updatejournal1) | **PUT** /api/accounting/journals/{journalId} | |
|[**updateOperation**](#updateoperation) | **PUT** /api/accounting-service/operations/{operationId} | |
|[**updateOperation1**](#updateoperation1) | **PUT** /api/accounting/operations/{operationId} | |
|[**updatePlanAccount**](#updateplanaccount) | **PUT** /api/accounting-service/plan-comptable/{planAccountId} | |
|[**updatePlanAccount1**](#updateplanaccount1) | **PUT** /api/accounting/plan-comptable/{planAccountId} | |
|[**updateSetting**](#updatesetting) | **PUT** /api/accounting-service/settings | |
|[**updateSetting1**](#updatesetting1) | **PUT** /api/accounting/settings | |
|[**updateTax**](#updatetax) | **PUT** /api/accounting-service/taxes/{taxId} | |
|[**updateTax1**](#updatetax1) | **PUT** /api/accounting/taxes/{taxId} | |
|[**uploadBrouillard1**](#uploadbrouillard1) | **POST** /api/accounting-service/brouillards/upload | |
|[**uploadInvoice**](#uploadinvoice) | **POST** /api/accounting-service/invoices/upload | |
|[**uploadInvoice1**](#uploadinvoice1) | **POST** /api/accounting/invoices/upload | |
|[**uploadReleveCsv**](#uploadrelevecsv) | **POST** /api/comptable/releve/upload | |
|[**validateBrouillard1**](#validatebrouillard1) | **POST** /api/accounting-service/brouillards/{draftEntryId}/validate | |
|[**validateEcriture**](#validateecriture) | **POST** /api/accounting-service/ecritures/{entryId}/validate | |
|[**validateEcriture1**](#validateecriture1) | **POST** /api/accounting/ecritures/{entryId}/validate | |

# **autoLettering**
> LetteringView autoLettering()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.autoLettering();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**LetteringView**

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

# **bankStatementCandidates**
> Array<AccountingEntryView> bankStatementCandidates()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let statementId: string; // (default to undefined)

const { status, data } = await apiInstance.bankStatementCandidates(
    statementId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **statementId** | [**string**] |  | defaults to undefined|


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

# **bankStatementCandidates1**
> Array<AccountingEntryView> bankStatementCandidates1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let statementId: string; // (default to undefined)

const { status, data } = await apiInstance.bankStatementCandidates1(
    statementId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **statementId** | [**string**] |  | defaults to undefined|


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

# **createCashMovement**
> CashRegisterPostingView createCashMovement(createCashRegisterPostingRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreateCashRegisterPostingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let createCashRegisterPostingRequest: CreateCashRegisterPostingRequest; //

const { status, data } = await apiInstance.createCashMovement(
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

# **createCompte**
> AccountView createCompte(createAccountRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreateAccountRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let createAccountRequest: CreateAccountRequest; //

const { status, data } = await apiInstance.createCompte(
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

# **createCompte1**
> AccountView createCompte1(createAccountRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreateAccountRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let createAccountRequest: CreateAccountRequest; //

const { status, data } = await apiInstance.createCompte1(
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

# **createCurrency**
> CurrencyView createCurrency(createCurrencyRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreateCurrencyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let createCurrencyRequest: CreateCurrencyRequest; //

const { status, data } = await apiInstance.createCurrency(
    createCurrencyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCurrencyRequest** | **CreateCurrencyRequest**|  | |


### Return type

**CurrencyView**

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

# **createCurrency1**
> CurrencyView createCurrency1(createCurrencyRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreateCurrencyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let createCurrencyRequest: CreateCurrencyRequest; //

const { status, data } = await apiInstance.createCurrency1(
    createCurrencyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCurrencyRequest** | **CreateCurrencyRequest**|  | |


### Return type

**CurrencyView**

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

# **createEcriture**
> AccountingEntryView createEcriture(createEntryRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreateEntryRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let createEntryRequest: CreateEntryRequest; //

const { status, data } = await apiInstance.createEcriture(
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

# **createEcriture1**
> AccountingEntryView createEcriture1(createEntryRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreateEntryRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let createEntryRequest: CreateEntryRequest; //

const { status, data } = await apiInstance.createEcriture1(
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

# **createExchangeRate**
> ExchangeRateView createExchangeRate(createExchangeRateRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreateExchangeRateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let createExchangeRateRequest: CreateExchangeRateRequest; //

const { status, data } = await apiInstance.createExchangeRate(
    createExchangeRateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createExchangeRateRequest** | **CreateExchangeRateRequest**|  | |


### Return type

**ExchangeRateView**

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

# **createExchangeRate1**
> ExchangeRateView createExchangeRate1(createExchangeRateRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreateExchangeRateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let createExchangeRateRequest: CreateExchangeRateRequest; //

const { status, data } = await apiInstance.createExchangeRate1(
    createExchangeRateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createExchangeRateRequest** | **CreateExchangeRateRequest**|  | |


### Return type

**ExchangeRateView**

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

# **createJournal**
> JournalView createJournal(createJournalRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreateJournalRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let createJournalRequest: CreateJournalRequest; //

const { status, data } = await apiInstance.createJournal(
    createJournalRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createJournalRequest** | **CreateJournalRequest**|  | |


### Return type

**JournalView**

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

# **createJournal1**
> JournalView createJournal1(createJournalRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreateJournalRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let createJournalRequest: CreateJournalRequest; //

const { status, data } = await apiInstance.createJournal1(
    createJournalRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createJournalRequest** | **CreateJournalRequest**|  | |


### Return type

**JournalView**

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

# **createPlanAccount**
> PlanAccountView createPlanAccount(createPlanAccountRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreatePlanAccountRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let createPlanAccountRequest: CreatePlanAccountRequest; //

const { status, data } = await apiInstance.createPlanAccount(
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

# **createPlanAccount1**
> PlanAccountView createPlanAccount1(createPlanAccountRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreatePlanAccountRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let createPlanAccountRequest: CreatePlanAccountRequest; //

const { status, data } = await apiInstance.createPlanAccount1(
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

# **createPurchaseInvoiceAccounting**
> InvoiceAccountingView createPurchaseInvoiceAccounting(createInvoiceAccountingRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreateInvoiceAccountingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let createInvoiceAccountingRequest: CreateInvoiceAccountingRequest; //

const { status, data } = await apiInstance.createPurchaseInvoiceAccounting(
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

# **createPurchaseInvoiceAccounting1**
> InvoiceAccountingView createPurchaseInvoiceAccounting1(createInvoiceAccountingRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreateInvoiceAccountingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let createInvoiceAccountingRequest: CreateInvoiceAccountingRequest; //

const { status, data } = await apiInstance.createPurchaseInvoiceAccounting1(
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

# **createSaleInvoiceAccounting**
> InvoiceAccountingView createSaleInvoiceAccounting(createInvoiceAccountingRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreateInvoiceAccountingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let createInvoiceAccountingRequest: CreateInvoiceAccountingRequest; //

const { status, data } = await apiInstance.createSaleInvoiceAccounting(
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

# **createSaleInvoiceAccounting1**
> InvoiceAccountingView createSaleInvoiceAccounting1(createInvoiceAccountingRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreateInvoiceAccountingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let createInvoiceAccountingRequest: CreateInvoiceAccountingRequest; //

const { status, data } = await apiInstance.createSaleInvoiceAccounting1(
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

# **createStockMovement**
> StockMovementPostingView createStockMovement(createStockMovementPostingRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreateStockMovementPostingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let createStockMovementPostingRequest: CreateStockMovementPostingRequest; //

const { status, data } = await apiInstance.createStockMovement(
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

# **createTax**
> TaxDefinitionView createTax(createTaxDefinitionRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreateTaxDefinitionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let createTaxDefinitionRequest: CreateTaxDefinitionRequest; //

const { status, data } = await apiInstance.createTax(
    createTaxDefinitionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTaxDefinitionRequest** | **CreateTaxDefinitionRequest**|  | |


### Return type

**TaxDefinitionView**

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

# **createTax1**
> TaxDefinitionView createTax1(createTaxDefinitionRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreateTaxDefinitionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let createTaxDefinitionRequest: CreateTaxDefinitionRequest; //

const { status, data } = await apiInstance.createTax1(
    createTaxDefinitionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTaxDefinitionRequest** | **CreateTaxDefinitionRequest**|  | |


### Return type

**TaxDefinitionView**

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

# **deleteBrouillard1**
> deleteBrouillard1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let draftEntryId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteBrouillard1(
    draftEntryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **draftEntryId** | [**string**] |  | defaults to undefined|


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

# **deleteCompte**
> deleteCompte()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let accountId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteCompte(
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

# **deleteCompte1**
> deleteCompte1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let accountId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteCompte1(
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

# **deleteCurrency**
> deleteCurrency()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let currencyId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteCurrency(
    currencyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **currencyId** | [**string**] |  | defaults to undefined|


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

# **deleteCurrency1**
> deleteCurrency1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let currencyId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteCurrency1(
    currencyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **currencyId** | [**string**] |  | defaults to undefined|


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

# **deleteEcriture**
> deleteEcriture()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let entryId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteEcriture(
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

# **deleteEcriture1**
> deleteEcriture1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let entryId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteEcriture1(
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

# **deleteExchangeRate**
> deleteExchangeRate()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let exchangeRateId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteExchangeRate(
    exchangeRateId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **exchangeRateId** | [**string**] |  | defaults to undefined|


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

# **deleteExchangeRate1**
> deleteExchangeRate1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let exchangeRateId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteExchangeRate1(
    exchangeRateId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **exchangeRateId** | [**string**] |  | defaults to undefined|


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

# **deleteJournal**
> deleteJournal()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let journalId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteJournal(
    journalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **journalId** | [**string**] |  | defaults to undefined|


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

# **deleteJournal1**
> deleteJournal1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let journalId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteJournal1(
    journalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **journalId** | [**string**] |  | defaults to undefined|


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

# **deleteOperation**
> deleteOperation()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let operationId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteOperation(
    operationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **operationId** | [**string**] |  | defaults to undefined|


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

# **deleteOperation1**
> deleteOperation1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let operationId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteOperation1(
    operationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **operationId** | [**string**] |  | defaults to undefined|


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

# **deletePlanAccount**
> deletePlanAccount()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let planAccountId: string; // (default to undefined)

const { status, data } = await apiInstance.deletePlanAccount(
    planAccountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **planAccountId** | [**string**] |  | defaults to undefined|


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

# **deletePlanAccount1**
> deletePlanAccount1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let planAccountId: string; // (default to undefined)

const { status, data } = await apiInstance.deletePlanAccount1(
    planAccountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **planAccountId** | [**string**] |  | defaults to undefined|


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

# **deleteTax**
> deleteTax()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let taxId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteTax(
    taxId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **taxId** | [**string**] |  | defaults to undefined|


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

# **deleteTax1**
> deleteTax1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let taxId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteTax1(
    taxId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **taxId** | [**string**] |  | defaults to undefined|


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

# **generateEcriture**
> AccountingEntryView generateEcriture(createOperationRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreateOperationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let createOperationRequest: CreateOperationRequest; //

const { status, data } = await apiInstance.generateEcriture(
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

# **generateEcriture1**
> AccountingEntryView generateEcriture1(createOperationRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreateOperationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let createOperationRequest: CreateOperationRequest; //

const { status, data } = await apiInstance.generateEcriture1(
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

# **getBrouillard1**
> DraftEntryView getBrouillard1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let draftEntryId: string; // (default to undefined)

const { status, data } = await apiInstance.getBrouillard1(
    draftEntryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **draftEntryId** | [**string**] |  | defaults to undefined|


### Return type

**DraftEntryView**

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

# **getCompte**
> AccountView getCompte()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let accountId: string; // (default to undefined)

const { status, data } = await apiInstance.getCompte(
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

# **getCompte1**
> AccountView getCompte1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let accountId: string; // (default to undefined)

const { status, data } = await apiInstance.getCompte1(
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

# **getCurrency**
> CurrencyView getCurrency()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let currencyId: string; // (default to undefined)

const { status, data } = await apiInstance.getCurrency(
    currencyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **currencyId** | [**string**] |  | defaults to undefined|


### Return type

**CurrencyView**

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

# **getCurrency1**
> CurrencyView getCurrency1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let currencyId: string; // (default to undefined)

const { status, data } = await apiInstance.getCurrency1(
    currencyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **currencyId** | [**string**] |  | defaults to undefined|


### Return type

**CurrencyView**

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

# **getEcriture**
> AccountingEntryView getEcriture()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let entryId: string; // (default to undefined)

const { status, data } = await apiInstance.getEcriture(
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

# **getEcriture1**
> AccountingEntryView getEcriture1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let entryId: string; // (default to undefined)

const { status, data } = await apiInstance.getEcriture1(
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

# **getJournal**
> JournalView getJournal()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let journalId: string; // (default to undefined)

const { status, data } = await apiInstance.getJournal(
    journalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **journalId** | [**string**] |  | defaults to undefined|


### Return type

**JournalView**

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

# **getJournal1**
> JournalView getJournal1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let journalId: string; // (default to undefined)

const { status, data } = await apiInstance.getJournal1(
    journalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **journalId** | [**string**] |  | defaults to undefined|


### Return type

**JournalView**

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

# **getOperation**
> AccountingOperationView getOperation()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let operationId: string; // (default to undefined)

const { status, data } = await apiInstance.getOperation(
    operationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **operationId** | [**string**] |  | defaults to undefined|


### Return type

**AccountingOperationView**

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

# **getOperation1**
> AccountingOperationView getOperation1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let operationId: string; // (default to undefined)

const { status, data } = await apiInstance.getOperation1(
    operationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **operationId** | [**string**] |  | defaults to undefined|


### Return type

**AccountingOperationView**

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

# **getPlanAccount**
> PlanAccountView getPlanAccount()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let planAccountId: string; // (default to undefined)

const { status, data } = await apiInstance.getPlanAccount(
    planAccountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **planAccountId** | [**string**] |  | defaults to undefined|


### Return type

**PlanAccountView**

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

# **getPlanAccount1**
> PlanAccountView getPlanAccount1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let planAccountId: string; // (default to undefined)

const { status, data } = await apiInstance.getPlanAccount1(
    planAccountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **planAccountId** | [**string**] |  | defaults to undefined|


### Return type

**PlanAccountView**

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

# **getSetting**
> AccountingSettingView getSetting()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let type: string; // (default to undefined)

const { status, data } = await apiInstance.getSetting(
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**string**] |  | defaults to undefined|


### Return type

**AccountingSettingView**

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

# **getSetting1**
> AccountingSettingView getSetting1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let type: string; // (default to undefined)

const { status, data } = await apiInstance.getSetting1(
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**string**] |  | defaults to undefined|


### Return type

**AccountingSettingView**

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

# **getTax**
> TaxDefinitionView getTax()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let taxId: string; // (default to undefined)

const { status, data } = await apiInstance.getTax(
    taxId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **taxId** | [**string**] |  | defaults to undefined|


### Return type

**TaxDefinitionView**

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

# **getTax1**
> TaxDefinitionView getTax1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let taxId: string; // (default to undefined)

const { status, data } = await apiInstance.getTax1(
    taxId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **taxId** | [**string**] |  | defaults to undefined|


### Return type

**TaxDefinitionView**

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

# **importPlanAccounts**
> Array<PlanAccountView> importPlanAccounts(createPlanAccountRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let createPlanAccountRequest: Array<CreatePlanAccountRequest>; //

const { status, data } = await apiInstance.importPlanAccounts(
    createPlanAccountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPlanAccountRequest** | **Array<CreatePlanAccountRequest>**|  | |


### Return type

**Array<PlanAccountView>**

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

# **importPlanAccounts1**
> Array<PlanAccountView> importPlanAccounts1(createPlanAccountRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let createPlanAccountRequest: Array<CreatePlanAccountRequest>; //

const { status, data } = await apiInstance.importPlanAccounts1(
    createPlanAccountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPlanAccountRequest** | **Array<CreatePlanAccountRequest>**|  | |


### Return type

**Array<PlanAccountView>**

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

# **importPointing**
> PointingView importPointing(createPointingRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreatePointingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let createPointingRequest: CreatePointingRequest; //

const { status, data } = await apiInstance.importPointing(
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

# **importPointing1**
> PointingView importPointing1(createPointingRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreatePointingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let createPointingRequest: CreatePointingRequest; //

const { status, data } = await apiInstance.importPointing1(
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

# **importReleve**
> { [key: string]: any; } importReleve()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let releveId: string; // (default to undefined)

const { status, data } = await apiInstance.importReleve(
    releveId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **releveId** | [**string**] |  | defaults to undefined|


### Return type

**{ [key: string]: any; }**

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

# **initOhadaPlan**
> Array<PlanAccountView> initOhadaPlan()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.initOhadaPlan();
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

# **initOhadaPlan1**
> Array<PlanAccountView> initOhadaPlan1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.initOhadaPlan1();
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

# **latestExchangeRate**
> ExchangeRateView latestExchangeRate()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.latestExchangeRate();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ExchangeRateView**

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

# **latestExchangeRate1**
> ExchangeRateView latestExchangeRate1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.latestExchangeRate1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ExchangeRateView**

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

# **letteringStatus**
> { [key: string]: any; } letteringStatus()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.letteringStatus();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**{ [key: string]: any; }**

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

# **listActiveJournals**
> Array<JournalView> listActiveJournals()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listActiveJournals();
```

### Parameters
This endpoint does not have any parameters.


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

# **listActiveJournals1**
> Array<JournalView> listActiveJournals1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listActiveJournals1();
```

### Parameters
This endpoint does not have any parameters.


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

# **listActivePlanAccounts**
> Array<PlanAccountView> listActivePlanAccounts()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listActivePlanAccounts();
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

# **listActivePlanAccounts1**
> Array<PlanAccountView> listActivePlanAccounts1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listActivePlanAccounts1();
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

# **listAudits**
> Array<JournalAuditView> listAudits()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let action: string; // (optional) (default to undefined)
let entryId: string; // (optional) (default to undefined)
let query: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listAudits(
    action,
    entryId,
    query
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **action** | [**string**] |  | (optional) defaults to undefined|
| **entryId** | [**string**] |  | (optional) defaults to undefined|
| **query** | [**string**] |  | (optional) defaults to undefined|


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

# **listAudits1**
> Array<JournalAuditView> listAudits1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let action: string; // (optional) (default to undefined)
let entryId: string; // (optional) (default to undefined)
let query: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listAudits1(
    action,
    entryId,
    query
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **action** | [**string**] |  | (optional) defaults to undefined|
| **entryId** | [**string**] |  | (optional) defaults to undefined|
| **query** | [**string**] |  | (optional) defaults to undefined|


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

# **listAuditsByAction**
> Array<JournalAuditView> listAuditsByAction()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let action: string; // (default to undefined)

const { status, data } = await apiInstance.listAuditsByAction(
    action
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **action** | [**string**] |  | defaults to undefined|


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

# **listAuditsByAction1**
> Array<JournalAuditView> listAuditsByAction1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let action: string; // (default to undefined)

const { status, data } = await apiInstance.listAuditsByAction1(
    action
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **action** | [**string**] |  | defaults to undefined|


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

# **listAuditsByEntry**
> Array<JournalAuditView> listAuditsByEntry()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let entryId: string; // (default to undefined)

const { status, data } = await apiInstance.listAuditsByEntry(
    entryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entryId** | [**string**] |  | defaults to undefined|


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

# **listAuditsByEntry1**
> Array<JournalAuditView> listAuditsByEntry1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let entryId: string; // (default to undefined)

const { status, data } = await apiInstance.listAuditsByEntry1(
    entryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entryId** | [**string**] |  | defaults to undefined|


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

# **listAuditsByOrganization**
> Array<JournalAuditView> listAuditsByOrganization()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.listAuditsByOrganization(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


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

# **listAuditsByOrganization1**
> Array<JournalAuditView> listAuditsByOrganization1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.listAuditsByOrganization1(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


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

# **listAuditsByPeriod**
> Array<JournalAuditView> listAuditsByPeriod()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let periodId: string; // (default to undefined)

const { status, data } = await apiInstance.listAuditsByPeriod(
    periodId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **periodId** | [**string**] |  | defaults to undefined|


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

# **listAuditsByPeriod1**
> Array<JournalAuditView> listAuditsByPeriod1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let periodId: string; // (default to undefined)

const { status, data } = await apiInstance.listAuditsByPeriod1(
    periodId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **periodId** | [**string**] |  | defaults to undefined|


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

# **listAuditsByUser**
> Array<JournalAuditView> listAuditsByUser()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let userId: string; // (default to undefined)

const { status, data } = await apiInstance.listAuditsByUser(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|


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

# **listAuditsByUser1**
> Array<JournalAuditView> listAuditsByUser1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let userId: string; // (default to undefined)

const { status, data } = await apiInstance.listAuditsByUser1(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|


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

# **listBrouillards1**
> Array<DraftEntryView> listBrouillards1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listBrouillards1();
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

# **listComptes**
> Array<AccountView> listComptes()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listComptes();
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

# **listComptes1**
> Array<AccountView> listComptes1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listComptes1();
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

# **listComptesByType**
> Array<AccountView> listComptesByType()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let accountType: string; // (default to undefined)

const { status, data } = await apiInstance.listComptesByType(
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

# **listComptesByType1**
> Array<AccountView> listComptesByType1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let accountType: string; // (default to undefined)

const { status, data } = await apiInstance.listComptesByType1(
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

# **listCurrencies**
> Array<CurrencyView> listCurrencies()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listCurrencies();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CurrencyView>**

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

# **listCurrencies1**
> Array<CurrencyView> listCurrencies1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listCurrencies1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CurrencyView>**

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

# **listEcritures**
> Array<AccountingEntryView> listEcritures()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listEcritures();
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

# **listEcritures1**
> Array<AccountingEntryView> listEcritures1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listEcritures1();
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

# **listExchangeRates**
> Array<ExchangeRateView> listExchangeRates()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listExchangeRates();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ExchangeRateView>**

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

# **listExchangeRates1**
> Array<ExchangeRateView> listExchangeRates1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listExchangeRates1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ExchangeRateView>**

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

# **listJournalAccounts**
> Array<AccountView> listJournalAccounts()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let journalId: string; // (default to undefined)

const { status, data } = await apiInstance.listJournalAccounts(
    journalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **journalId** | [**string**] |  | defaults to undefined|


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

# **listJournalAccounts1**
> Array<AccountView> listJournalAccounts1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let journalId: string; // (default to undefined)

const { status, data } = await apiInstance.listJournalAccounts1(
    journalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **journalId** | [**string**] |  | defaults to undefined|


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

# **listJournals**
> Array<JournalView> listJournals()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listJournals();
```

### Parameters
This endpoint does not have any parameters.


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

# **listJournals1**
> ListJournals1200Response listJournals1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.listJournals1(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ListJournals1200Response**

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

# **listNonValidatedEcritures**
> Array<AccountingEntryView> listNonValidatedEcritures()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listNonValidatedEcritures();
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

# **listNonValidatedEcritures1**
> Array<AccountingEntryView> listNonValidatedEcritures1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listNonValidatedEcritures1();
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

# **listOperationsByAccountNumber**
> Array<AccountingOperationView> listOperationsByAccountNumber()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let accountNo: string; // (default to undefined)

const { status, data } = await apiInstance.listOperationsByAccountNumber(
    accountNo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountNo** | [**string**] |  | defaults to undefined|


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

# **listOperationsByAccountNumber1**
> Array<AccountingOperationView> listOperationsByAccountNumber1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let accountNo: string; // (default to undefined)

const { status, data } = await apiInstance.listOperationsByAccountNumber1(
    accountNo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountNo** | [**string**] |  | defaults to undefined|


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

# **listPlanAccounts**
> Array<PlanAccountView> listPlanAccounts()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listPlanAccounts();
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

# **listPlanAccounts1**
> Array<PlanAccountView> listPlanAccounts1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listPlanAccounts1();
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

# **listPlanAccountsByClass**
> Array<PlanAccountView> listPlanAccountsByClass()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let classe: string; // (default to undefined)

const { status, data } = await apiInstance.listPlanAccountsByClass(
    classe
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **classe** | [**string**] |  | defaults to undefined|


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

# **listPlanAccountsByClass1**
> Array<PlanAccountView> listPlanAccountsByClass1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let classe: string; // (default to undefined)

const { status, data } = await apiInstance.listPlanAccountsByClass1(
    classe
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **classe** | [**string**] |  | defaults to undefined|


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

# **listPlanAccountsByPrefix**
> Array<PlanAccountView> listPlanAccountsByPrefix()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let prefix: string; // (default to undefined)

const { status, data } = await apiInstance.listPlanAccountsByPrefix(
    prefix
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **prefix** | [**string**] |  | defaults to undefined|


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

# **listPlanAccountsByPrefix1**
> Array<PlanAccountView> listPlanAccountsByPrefix1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let prefix: string; // (default to undefined)

const { status, data } = await apiInstance.listPlanAccountsByPrefix1(
    prefix
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **prefix** | [**string**] |  | defaults to undefined|


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

# **listReleves**
> Array<BankStatementPostingView> listReleves()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listReleves();
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

# **listSettings**
> Array<AccountingSettingView> listSettings()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listSettings();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<AccountingSettingView>**

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

# **listSettings1**
> Array<AccountingSettingView> listSettings1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listSettings1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<AccountingSettingView>**

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

# **listStockMovements**
> Array<StockMovementPostingView> listStockMovements()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listStockMovements();
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

# **listTaxes**
> Array<TaxDefinitionView> listTaxes()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listTaxes();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<TaxDefinitionView>**

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

# **listTaxes1**
> Array<TaxDefinitionView> listTaxes1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

const { status, data } = await apiInstance.listTaxes1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<TaxDefinitionView>**

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

# **reconcileBankStatement**
> BankReconciliationView reconcileBankStatement()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let statementId: string; // (default to undefined)
let detailId: string; // (default to undefined)

const { status, data } = await apiInstance.reconcileBankStatement(
    statementId,
    detailId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **statementId** | [**string**] |  | defaults to undefined|
| **detailId** | [**string**] |  | defaults to undefined|


### Return type

**BankReconciliationView**

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

# **reconcileBankStatement1**
> BankReconciliationView reconcileBankStatement1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let statementId: string; // (default to undefined)
let detailId: string; // (default to undefined)

const { status, data } = await apiInstance.reconcileBankStatement1(
    statementId,
    detailId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **statementId** | [**string**] |  | defaults to undefined|
| **detailId** | [**string**] |  | defaults to undefined|


### Return type

**BankReconciliationView**

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

# **rejectBrouillard1**
> rejectBrouillard1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let draftEntryId: string; // (default to undefined)

const { status, data } = await apiInstance.rejectBrouillard1(
    draftEntryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **draftEntryId** | [**string**] |  | defaults to undefined|


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

# **searchAudits**
> Array<JournalAuditView> searchAudits()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let query: string; // (default to undefined)

const { status, data } = await apiInstance.searchAudits(
    query
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **query** | [**string**] |  | defaults to undefined|


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

# **searchAudits1**
> Array<JournalAuditView> searchAudits1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let query: string; // (default to undefined)

const { status, data } = await apiInstance.searchAudits1(
    query
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **query** | [**string**] |  | defaults to undefined|


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

# **searchComptes**
> Array<AccountView> searchComptes()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let query: string; // (default to undefined)

const { status, data } = await apiInstance.searchComptes(
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

# **searchComptes1**
> Array<AccountView> searchComptes1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let query: string; // (default to undefined)

const { status, data } = await apiInstance.searchComptes1(
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

# **searchEcritures**
> Array<AccountingEntryView> searchEcritures()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let query: string; // (optional) (default to undefined)
let journalId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.searchEcritures(
    query,
    journalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **query** | [**string**] |  | (optional) defaults to undefined|
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

# **searchEcritures1**
> Array<AccountingEntryView> searchEcritures1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let query: string; // (optional) (default to undefined)
let journalId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.searchEcritures1(
    query,
    journalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **query** | [**string**] |  | (optional) defaults to undefined|
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

# **searchOperations**
> Array<AccountingOperationView> searchOperations()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let query: string; // (default to undefined)

const { status, data } = await apiInstance.searchOperations(
    query
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **query** | [**string**] |  | defaults to undefined|


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

# **searchOperations1**
> Array<AccountingOperationView> searchOperations1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let query: string; // (default to undefined)

const { status, data } = await apiInstance.searchOperations1(
    query
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **query** | [**string**] |  | defaults to undefined|


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

# **stockImpact**
> StockMovementPostingView stockImpact()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let movementId: string; // (default to undefined)

const { status, data } = await apiInstance.stockImpact(
    movementId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **movementId** | [**string**] |  | defaults to undefined|


### Return type

**StockMovementPostingView**

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

# **updateCompte**
> AccountView updateCompte(updateAccountRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    UpdateAccountRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let accountId: string; // (default to undefined)
let updateAccountRequest: UpdateAccountRequest; //

const { status, data } = await apiInstance.updateCompte(
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

# **updateCompte1**
> AccountView updateCompte1(updateAccountRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    UpdateAccountRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let accountId: string; // (default to undefined)
let updateAccountRequest: UpdateAccountRequest; //

const { status, data } = await apiInstance.updateCompte1(
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

# **updateCurrency**
> CurrencyView updateCurrency(createCurrencyRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreateCurrencyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let currencyId: string; // (default to undefined)
let createCurrencyRequest: CreateCurrencyRequest; //

const { status, data } = await apiInstance.updateCurrency(
    currencyId,
    createCurrencyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCurrencyRequest** | **CreateCurrencyRequest**|  | |
| **currencyId** | [**string**] |  | defaults to undefined|


### Return type

**CurrencyView**

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

# **updateCurrency1**
> CurrencyView updateCurrency1(createCurrencyRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreateCurrencyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let currencyId: string; // (default to undefined)
let createCurrencyRequest: CreateCurrencyRequest; //

const { status, data } = await apiInstance.updateCurrency1(
    currencyId,
    createCurrencyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCurrencyRequest** | **CreateCurrencyRequest**|  | |
| **currencyId** | [**string**] |  | defaults to undefined|


### Return type

**CurrencyView**

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

# **updateEcriture**
> AccountingEntryView updateEcriture(updateEntryRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    UpdateEntryRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let entryId: string; // (default to undefined)
let updateEntryRequest: UpdateEntryRequest; //

const { status, data } = await apiInstance.updateEcriture(
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

# **updateEcriture1**
> AccountingEntryView updateEcriture1(updateEntryRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    UpdateEntryRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let entryId: string; // (default to undefined)
let updateEntryRequest: UpdateEntryRequest; //

const { status, data } = await apiInstance.updateEcriture1(
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

# **updateJournal**
> JournalView updateJournal(updateJournalRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    UpdateJournalRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let journalId: string; // (default to undefined)
let updateJournalRequest: UpdateJournalRequest; //

const { status, data } = await apiInstance.updateJournal(
    journalId,
    updateJournalRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateJournalRequest** | **UpdateJournalRequest**|  | |
| **journalId** | [**string**] |  | defaults to undefined|


### Return type

**JournalView**

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

# **updateJournal1**
> JournalView updateJournal1(updateJournalRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    UpdateJournalRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let journalId: string; // (default to undefined)
let updateJournalRequest: UpdateJournalRequest; //

const { status, data } = await apiInstance.updateJournal1(
    journalId,
    updateJournalRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateJournalRequest** | **UpdateJournalRequest**|  | |
| **journalId** | [**string**] |  | defaults to undefined|


### Return type

**JournalView**

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

# **updateOperation**
> AccountingOperationView updateOperation(createOperationRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreateOperationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let operationId: string; // (default to undefined)
let createOperationRequest: CreateOperationRequest; //

const { status, data } = await apiInstance.updateOperation(
    operationId,
    createOperationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createOperationRequest** | **CreateOperationRequest**|  | |
| **operationId** | [**string**] |  | defaults to undefined|


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

# **updateOperation1**
> AccountingOperationView updateOperation1(createOperationRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreateOperationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let operationId: string; // (default to undefined)
let createOperationRequest: CreateOperationRequest; //

const { status, data } = await apiInstance.updateOperation1(
    operationId,
    createOperationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createOperationRequest** | **CreateOperationRequest**|  | |
| **operationId** | [**string**] |  | defaults to undefined|


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

# **updatePlanAccount**
> PlanAccountView updatePlanAccount(createPlanAccountRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreatePlanAccountRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let planAccountId: string; // (default to undefined)
let createPlanAccountRequest: CreatePlanAccountRequest; //

const { status, data } = await apiInstance.updatePlanAccount(
    planAccountId,
    createPlanAccountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPlanAccountRequest** | **CreatePlanAccountRequest**|  | |
| **planAccountId** | [**string**] |  | defaults to undefined|


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

# **updatePlanAccount1**
> PlanAccountView updatePlanAccount1(createPlanAccountRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreatePlanAccountRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let planAccountId: string; // (default to undefined)
let createPlanAccountRequest: CreatePlanAccountRequest; //

const { status, data } = await apiInstance.updatePlanAccount1(
    planAccountId,
    createPlanAccountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPlanAccountRequest** | **CreatePlanAccountRequest**|  | |
| **planAccountId** | [**string**] |  | defaults to undefined|


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

# **updateSetting**
> AccountingSettingView updateSetting(upsertSettingRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    UpsertSettingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let upsertSettingRequest: UpsertSettingRequest; //

const { status, data } = await apiInstance.updateSetting(
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

# **updateSetting1**
> AccountingSettingView updateSetting1(upsertSettingRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    UpsertSettingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let upsertSettingRequest: UpsertSettingRequest; //

const { status, data } = await apiInstance.updateSetting1(
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

# **updateTax**
> TaxDefinitionView updateTax(createTaxDefinitionRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreateTaxDefinitionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let taxId: string; // (default to undefined)
let createTaxDefinitionRequest: CreateTaxDefinitionRequest; //

const { status, data } = await apiInstance.updateTax(
    taxId,
    createTaxDefinitionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTaxDefinitionRequest** | **CreateTaxDefinitionRequest**|  | |
| **taxId** | [**string**] |  | defaults to undefined|


### Return type

**TaxDefinitionView**

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

# **updateTax1**
> TaxDefinitionView updateTax1(createTaxDefinitionRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreateTaxDefinitionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let taxId: string; // (default to undefined)
let createTaxDefinitionRequest: CreateTaxDefinitionRequest; //

const { status, data } = await apiInstance.updateTax1(
    taxId,
    createTaxDefinitionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTaxDefinitionRequest** | **CreateTaxDefinitionRequest**|  | |
| **taxId** | [**string**] |  | defaults to undefined|


### Return type

**TaxDefinitionView**

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

# **uploadBrouillard1**
> DraftEntryView uploadBrouillard1(createDraftEntryRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreateDraftEntryRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let createDraftEntryRequest: CreateDraftEntryRequest; //

const { status, data } = await apiInstance.uploadBrouillard1(
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

# **uploadInvoice**
> InvoiceUploadView uploadInvoice(createInvoiceUploadRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreateInvoiceUploadRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let createInvoiceUploadRequest: CreateInvoiceUploadRequest; //

const { status, data } = await apiInstance.uploadInvoice(
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

# **uploadInvoice1**
> InvoiceUploadView uploadInvoice1(createInvoiceUploadRequest)


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration,
    CreateInvoiceUploadRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let createInvoiceUploadRequest: CreateInvoiceUploadRequest; //

const { status, data } = await apiInstance.uploadInvoice1(
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

# **uploadReleveCsv**
> UploadReleveCsv200Response uploadReleveCsv()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let compteBancaire: string; // (default to undefined)
let file: File; // (default to undefined)

const { status, data } = await apiInstance.uploadReleveCsv(
    compteBancaire,
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **compteBancaire** | [**string**] |  | defaults to undefined|
| **file** | [**File**] |  | defaults to undefined|


### Return type

**UploadReleveCsv200Response**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validateBrouillard1**
> AccountingEntryView validateBrouillard1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let draftEntryId: string; // (default to undefined)

const { status, data } = await apiInstance.validateBrouillard1(
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

# **validateEcriture**
> AccountingEntryView validateEcriture()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let entryId: string; // (default to undefined)

const { status, data } = await apiInstance.validateEcriture(
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

# **validateEcriture1**
> AccountingEntryView validateEcriture1()


### Example

```typescript
import {
    AccountingLegacyBookkeepingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBookkeepingControllerApi(configuration);

let entryId: string; // (default to undefined)

const { status, data } = await apiInstance.validateEcriture1(
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

