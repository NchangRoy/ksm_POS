# CashierOperationsControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**adminAccounts**](#adminaccounts) | **GET** /api/admin/accounts | |
|[**adminReconciliations**](#adminreconciliations) | **GET** /api/admin/reconciliations | |
|[**assignCashRegister**](#assigncashregister) | **POST** /api/cash-registers/{registerId}/assign | |
|[**attachMovementAccount**](#attachmovementaccount) | **POST** /api/movements/{movementId}/account | |
|[**audit**](#audit) | **GET** /api/audit | |
|[**availableCashiers**](#availablecashiers) | **GET** /api/cashiers/available | |
|[**bills**](#bills) | **GET** /api/bills | |
|[**cashRegister**](#cashregister) | **GET** /api/cash-registers/{registerId} | |
|[**cashRegisters**](#cashregisters) | **GET** /api/cash-registers | |
|[**cashierAccounts**](#cashieraccounts) | **GET** /api/cashier/accounts | |
|[**cashierBill**](#cashierbill) | **GET** /api/cashier/bills/{id} | |
|[**cashierBills**](#cashierbills) | **GET** /api/cashier/bills | |
|[**cashierReconciliations**](#cashierreconciliations) | **GET** /api/cashier/reconciliations | |
|[**cashierSessions**](#cashiersessions) | **GET** /api/cashier/sessions | |
|[**cashiers**](#cashiers) | **GET** /api/cashiers | |
|[**cashiersWithProfile**](#cashierswithprofile) | **GET** /api/cashiers/with-profile | |
|[**closeSession**](#closesession) | **POST** /api/sessions/{sessionId}/close | |
|[**createBill**](#createbill) | **POST** /api/bills | |
|[**createCashRegister**](#createcashregister) | **POST** /api/cash-registers | |
|[**createCashier**](#createcashier) | **POST** /api/cashiers | |
|[**createFundRequest**](#createfundrequest) | **POST** /api/cashier/fund-requests | |
|[**createSession**](#createsession) | **POST** /api/sessions | |
|[**dashboard**](#dashboard) | **GET** /api/dashboard/stats | |
|[**dashboard1**](#dashboard1) | **GET** /api/dashboard/stat | |
|[**deleteCashRegister**](#deletecashregister) | **DELETE** /api/cash-registers/{registerId} | |
|[**deleteCashier**](#deletecashier) | **DELETE** /api/cashiers/{cashierId} | |
|[**denominations**](#denominations) | **GET** /api/config/denominations | |
|[**documents**](#documents) | **GET** /api/admin/documents | |
|[**importAccountingInvoiceBill**](#importaccountinginvoicebill) | **POST** /api/cashier/bills/import/accounting-invoices/{invoiceId} | |
|[**importAccountingInvoiceBill1**](#importaccountinginvoicebill1) | **POST** /api/bills/import/accounting-invoices/{invoiceId} | |
|[**justify**](#justify) | **POST** /api/reconciliations/{reconciliationId}/justify | |
|[**lockSession**](#locksession) | **POST** /api/sessions/{sessionId}/lock | |
|[**manualAudit**](#manualaudit) | **POST** /api/audit | |
|[**movements**](#movements) | **GET** /api/cashier/movements | |
|[**notifications**](#notifications) | **GET** /api/notifications | |
|[**notifyUnauthorized**](#notifyunauthorized) | **POST** /api/notify-unauthorized | |
|[**payBill**](#paybill) | **POST** /api/bills/pay | |
|[**recentTransactions**](#recenttransactions) | **GET** /api/transactions/recent | |
|[**reportAudit**](#reportaudit) | **GET** /api/reports/audit | |
|[**reportRegister**](#reportregister) | **POST** /api/reports/register/{registerId} | |
|[**reportSession**](#reportsession) | **GET** /api/reports/session/{sessionId} | |
|[**reportTransactions**](#reporttransactions) | **GET** /api/reports/transactions | |
|[**review**](#review) | **POST** /api/reconciliations/{reconciliationId}/review | |
|[**selfProfile**](#selfprofile) | **GET** /api/cashiers/self-profile | |
|[**sessions**](#sessions) | **GET** /api/sessions | |
|[**syncLinkedBill**](#synclinkedbill) | **POST** /api/cashier/bills/{billId}/sync-linked-service | |
|[**syncLinkedBill1**](#synclinkedbill1) | **POST** /api/bills/{billId}/sync-linked-service | |
|[**testNotification**](#testnotification) | **POST** /api/notifications/test | |
|[**transactions**](#transactions) | **GET** /api/transactions | |
|[**transfer**](#transfer) | **POST** /api/accounts/transfer | |
|[**transferMovement**](#transfermovement) | **POST** /api/movements/transfer | |
|[**transferP2P**](#transferp2p) | **POST** /api/accounts/transfer-p2p | |
|[**unlockSession**](#unlocksession) | **DELETE** /api/sessions/{sessionId}/lock | |
|[**updateCashRegister**](#updatecashregister) | **PUT** /api/cash-registers/{registerId} | |
|[**updateCashier**](#updatecashier) | **PUT** /api/cashiers/{cashierId} | |
|[**updateSelfProfile**](#updateselfprofile) | **PUT** /api/cashiers/self-profile | |
|[**withdraw**](#withdraw) | **POST** /api/accounts/withdraw | |

# **adminAccounts**
> Array<WalletAccountView> adminAccounts()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

const { status, data } = await apiInstance.adminAccounts();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<WalletAccountView>**

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

# **adminReconciliations**
> Array<CashReconciliationView> adminReconciliations()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

const { status, data } = await apiInstance.adminReconciliations();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CashReconciliationView>**

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

# **assignCashRegister**
> CashRegisterView assignCashRegister(assignCashRegisterRequest)


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration,
    AssignCashRegisterRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

let registerId: string; // (default to undefined)
let assignCashRegisterRequest: AssignCashRegisterRequest; //

const { status, data } = await apiInstance.assignCashRegister(
    registerId,
    assignCashRegisterRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assignCashRegisterRequest** | **AssignCashRegisterRequest**|  | |
| **registerId** | [**string**] |  | defaults to undefined|


### Return type

**CashRegisterView**

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

# **attachMovementAccount**
> CashMovementView attachMovementAccount()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

let movementId: string; // (default to undefined)
let accountId: string; // (default to undefined)

const { status, data } = await apiInstance.attachMovementAccount(
    movementId,
    accountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **movementId** | [**string**] |  | defaults to undefined|
| **accountId** | [**string**] |  | defaults to undefined|


### Return type

**CashMovementView**

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

# **audit**
> Array<CashAuditEntryView> audit()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

const { status, data } = await apiInstance.audit();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CashAuditEntryView>**

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

# **availableCashiers**
> Array<CashierProfileView> availableCashiers()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

const { status, data } = await apiInstance.availableCashiers();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CashierProfileView>**

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

# **bills**
> Array<BillView> bills()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

const { status, data } = await apiInstance.bills();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<BillView>**

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

# **cashRegister**
> CashRegisterView cashRegister()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

let registerId: string; // (default to undefined)

const { status, data } = await apiInstance.cashRegister(
    registerId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerId** | [**string**] |  | defaults to undefined|


### Return type

**CashRegisterView**

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

# **cashRegisters**
> Array<CashRegisterView> cashRegisters()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

const { status, data } = await apiInstance.cashRegisters();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CashRegisterView>**

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

# **cashierAccounts**
> Array<WalletAccountView> cashierAccounts()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

const { status, data } = await apiInstance.cashierAccounts();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<WalletAccountView>**

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

# **cashierBill**
> BillView cashierBill()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.cashierBill(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**BillView**

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

# **cashierBills**
> Array<BillView> cashierBills()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

const { status, data } = await apiInstance.cashierBills();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<BillView>**

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

# **cashierReconciliations**
> Array<CashReconciliationView> cashierReconciliations()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

const { status, data } = await apiInstance.cashierReconciliations();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CashReconciliationView>**

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

# **cashierSessions**
> Array<CashierSessionView> cashierSessions()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

const { status, data } = await apiInstance.cashierSessions();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CashierSessionView>**

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

# **cashiers**
> Array<CashierProfileView> cashiers()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

const { status, data } = await apiInstance.cashiers();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CashierProfileView>**

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

# **cashiersWithProfile**
> Array<CashierProfileView> cashiersWithProfile()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

const { status, data } = await apiInstance.cashiersWithProfile();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CashierProfileView>**

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

# **closeSession**
> CashierSessionView closeSession(closeSessionRequest)


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration,
    CloseSessionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

let sessionId: string; // (default to undefined)
let closeSessionRequest: CloseSessionRequest; //

const { status, data } = await apiInstance.closeSession(
    sessionId,
    closeSessionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **closeSessionRequest** | **CloseSessionRequest**|  | |
| **sessionId** | [**string**] |  | defaults to undefined|


### Return type

**CashierSessionView**

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

# **createBill**
> BillView createBill(createBillRequest)


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration,
    CreateBillRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

let createBillRequest: CreateBillRequest; //

const { status, data } = await apiInstance.createBill(
    createBillRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createBillRequest** | **CreateBillRequest**|  | |


### Return type

**BillView**

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

# **createCashRegister**
> CashRegisterView createCashRegister(createCashRegisterRequest)


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration,
    CreateCashRegisterRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

let createCashRegisterRequest: CreateCashRegisterRequest; //

const { status, data } = await apiInstance.createCashRegister(
    createCashRegisterRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCashRegisterRequest** | **CreateCashRegisterRequest**|  | |


### Return type

**CashRegisterView**

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

# **createCashier**
> CashierProfileView createCashier(createCashierProfileRequest)


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration,
    CreateCashierProfileRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

let createCashierProfileRequest: CreateCashierProfileRequest; //

const { status, data } = await apiInstance.createCashier(
    createCashierProfileRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCashierProfileRequest** | **CreateCashierProfileRequest**|  | |


### Return type

**CashierProfileView**

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

# **createFundRequest**
> FundRequestView createFundRequest(createFundRequest)


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration,
    CreateFundRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

let createFundRequest: CreateFundRequest; //

const { status, data } = await apiInstance.createFundRequest(
    createFundRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createFundRequest** | **CreateFundRequest**|  | |


### Return type

**FundRequestView**

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

# **createSession**
> CashierSessionView createSession(createSessionRequest)


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration,
    CreateSessionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

let createSessionRequest: CreateSessionRequest; //

const { status, data } = await apiInstance.createSession(
    createSessionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createSessionRequest** | **CreateSessionRequest**|  | |


### Return type

**CashierSessionView**

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

# **dashboard**
> CashDashboardView dashboard()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

const { status, data } = await apiInstance.dashboard();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CashDashboardView**

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

# **dashboard1**
> CashDashboardView dashboard1()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

const { status, data } = await apiInstance.dashboard1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CashDashboardView**

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

# **deleteCashRegister**
> deleteCashRegister()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

let registerId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteCashRegister(
    registerId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerId** | [**string**] |  | defaults to undefined|


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

# **deleteCashier**
> deleteCashier()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

let cashierId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteCashier(
    cashierId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cashierId** | [**string**] |  | defaults to undefined|


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

# **denominations**
> Array<DenominationView> denominations()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

const { status, data } = await apiInstance.denominations();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<DenominationView>**

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

# **documents**
> Array<CashDocumentView> documents()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

const { status, data } = await apiInstance.documents();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CashDocumentView>**

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

# **importAccountingInvoiceBill**
> BillView importAccountingInvoiceBill()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

let invoiceId: string; // (default to undefined)

const { status, data } = await apiInstance.importAccountingInvoiceBill(
    invoiceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **invoiceId** | [**string**] |  | defaults to undefined|


### Return type

**BillView**

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

# **importAccountingInvoiceBill1**
> BillView importAccountingInvoiceBill1()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

let invoiceId: string; // (default to undefined)

const { status, data } = await apiInstance.importAccountingInvoiceBill1(
    invoiceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **invoiceId** | [**string**] |  | defaults to undefined|


### Return type

**BillView**

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

# **justify**
> CashReconciliationView justify(justifyReconciliationRequest)


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration,
    JustifyReconciliationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

let reconciliationId: string; // (default to undefined)
let justifyReconciliationRequest: JustifyReconciliationRequest; //

const { status, data } = await apiInstance.justify(
    reconciliationId,
    justifyReconciliationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **justifyReconciliationRequest** | **JustifyReconciliationRequest**|  | |
| **reconciliationId** | [**string**] |  | defaults to undefined|


### Return type

**CashReconciliationView**

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

# **lockSession**
> CashierSessionView lockSession()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

let sessionId: string; // (default to undefined)

const { status, data } = await apiInstance.lockSession(
    sessionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sessionId** | [**string**] |  | defaults to undefined|


### Return type

**CashierSessionView**

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

# **manualAudit**
> CashAuditEntryView manualAudit(createAuditEntryRequest)


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration,
    CreateAuditEntryRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

let createAuditEntryRequest: CreateAuditEntryRequest; //

const { status, data } = await apiInstance.manualAudit(
    createAuditEntryRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAuditEntryRequest** | **CreateAuditEntryRequest**|  | |


### Return type

**CashAuditEntryView**

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

# **movements**
> Array<CashMovementView> movements()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

const { status, data } = await apiInstance.movements();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CashMovementView>**

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

# **notifications**
> Array<CashNotificationView> notifications()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

const { status, data } = await apiInstance.notifications();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CashNotificationView>**

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

# **notifyUnauthorized**
> CashNotificationView notifyUnauthorized(notifyUnauthorizedRequest)


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration,
    NotifyUnauthorizedRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

let notifyUnauthorizedRequest: NotifyUnauthorizedRequest; //

const { status, data } = await apiInstance.notifyUnauthorized(
    notifyUnauthorizedRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **notifyUnauthorizedRequest** | **NotifyUnauthorizedRequest**|  | |


### Return type

**CashNotificationView**

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

# **payBill**
> BillView payBill(payBillRequest)


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration,
    PayBillRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

let billId: string; // (default to undefined)
let payBillRequest: PayBillRequest; //

const { status, data } = await apiInstance.payBill(
    billId,
    payBillRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **payBillRequest** | **PayBillRequest**|  | |
| **billId** | [**string**] |  | defaults to undefined|


### Return type

**BillView**

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

# **recentTransactions**
> Array<CashMovementView> recentTransactions()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

const { status, data } = await apiInstance.recentTransactions();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CashMovementView>**

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

# **reportAudit**
> CashReportView reportAudit()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

const { status, data } = await apiInstance.reportAudit();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CashReportView**

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

# **reportRegister**
> CashReportView reportRegister()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

let registerId: string; // (default to undefined)

const { status, data } = await apiInstance.reportRegister(
    registerId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerId** | [**string**] |  | defaults to undefined|


### Return type

**CashReportView**

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

# **reportSession**
> CashReportView reportSession()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

let sessionId: string; // (default to undefined)

const { status, data } = await apiInstance.reportSession(
    sessionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sessionId** | [**string**] |  | defaults to undefined|


### Return type

**CashReportView**

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

# **reportTransactions**
> CashReportView reportTransactions()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

const { status, data } = await apiInstance.reportTransactions();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CashReportView**

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

# **review**
> CashReconciliationView review(reviewReconciliationRequest)


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration,
    ReviewReconciliationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

let reconciliationId: string; // (default to undefined)
let reviewReconciliationRequest: ReviewReconciliationRequest; //

const { status, data } = await apiInstance.review(
    reconciliationId,
    reviewReconciliationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reviewReconciliationRequest** | **ReviewReconciliationRequest**|  | |
| **reconciliationId** | [**string**] |  | defaults to undefined|


### Return type

**CashReconciliationView**

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

# **selfProfile**
> CashierProfileView selfProfile()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

let principalEmail: string; // (default to undefined)

const { status, data } = await apiInstance.selfProfile(
    principalEmail
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **principalEmail** | [**string**] |  | defaults to undefined|


### Return type

**CashierProfileView**

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

# **sessions**
> Array<CashierSessionView> sessions()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

const { status, data } = await apiInstance.sessions();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CashierSessionView>**

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

# **syncLinkedBill**
> BillView syncLinkedBill()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

let billId: string; // (default to undefined)

const { status, data } = await apiInstance.syncLinkedBill(
    billId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **billId** | [**string**] |  | defaults to undefined|


### Return type

**BillView**

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

# **syncLinkedBill1**
> BillView syncLinkedBill1()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

let billId: string; // (default to undefined)

const { status, data } = await apiInstance.syncLinkedBill1(
    billId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **billId** | [**string**] |  | defaults to undefined|


### Return type

**BillView**

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

# **testNotification**
> CashNotificationView testNotification(createNotificationRequest)


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration,
    CreateNotificationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

let createNotificationRequest: CreateNotificationRequest; //

const { status, data } = await apiInstance.testNotification(
    createNotificationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createNotificationRequest** | **CreateNotificationRequest**|  | |


### Return type

**CashNotificationView**

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

# **transactions**
> Array<CashMovementView> transactions()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

const { status, data } = await apiInstance.transactions();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CashMovementView>**

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

# **transfer**
> WalletAccountView transfer(transferRequest)


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration,
    TransferRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

let transferRequest: TransferRequest; //

const { status, data } = await apiInstance.transfer(
    transferRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transferRequest** | **TransferRequest**|  | |


### Return type

**WalletAccountView**

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

# **transferMovement**
> CashMovementView transferMovement(createMovementRequest)


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration,
    CreateMovementRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

let createMovementRequest: CreateMovementRequest; //

const { status, data } = await apiInstance.transferMovement(
    createMovementRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createMovementRequest** | **CreateMovementRequest**|  | |


### Return type

**CashMovementView**

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

# **transferP2P**
> WalletAccountView transferP2P(p2PTransferRequest)


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration,
    P2PTransferRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

let p2PTransferRequest: P2PTransferRequest; //

const { status, data } = await apiInstance.transferP2P(
    p2PTransferRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **p2PTransferRequest** | **P2PTransferRequest**|  | |


### Return type

**WalletAccountView**

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

# **unlockSession**
> CashierSessionView unlockSession()


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

let sessionId: string; // (default to undefined)

const { status, data } = await apiInstance.unlockSession(
    sessionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sessionId** | [**string**] |  | defaults to undefined|


### Return type

**CashierSessionView**

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

# **updateCashRegister**
> CashRegisterView updateCashRegister(updateCashRegisterRequest)


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration,
    UpdateCashRegisterRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

let registerId: string; // (default to undefined)
let updateCashRegisterRequest: UpdateCashRegisterRequest; //

const { status, data } = await apiInstance.updateCashRegister(
    registerId,
    updateCashRegisterRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCashRegisterRequest** | **UpdateCashRegisterRequest**|  | |
| **registerId** | [**string**] |  | defaults to undefined|


### Return type

**CashRegisterView**

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

# **updateCashier**
> CashierProfileView updateCashier(updateCashierProfileRequest)


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration,
    UpdateCashierProfileRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

let cashierId: string; // (default to undefined)
let updateCashierProfileRequest: UpdateCashierProfileRequest; //

const { status, data } = await apiInstance.updateCashier(
    cashierId,
    updateCashierProfileRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCashierProfileRequest** | **UpdateCashierProfileRequest**|  | |
| **cashierId** | [**string**] |  | defaults to undefined|


### Return type

**CashierProfileView**

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

# **updateSelfProfile**
> CashierProfileView updateSelfProfile(updateMyProfileRequest)


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration,
    UpdateMyProfileRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

let principalEmail: string; // (default to undefined)
let updateMyProfileRequest: UpdateMyProfileRequest; //

const { status, data } = await apiInstance.updateSelfProfile(
    principalEmail,
    updateMyProfileRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateMyProfileRequest** | **UpdateMyProfileRequest**|  | |
| **principalEmail** | [**string**] |  | defaults to undefined|


### Return type

**CashierProfileView**

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

# **withdraw**
> WalletAccountView withdraw(withdrawRequest)


### Example

```typescript
import {
    CashierOperationsControllerApi,
    Configuration,
    WithdrawRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CashierOperationsControllerApi(configuration);

let withdrawRequest: WithdrawRequest; //

const { status, data } = await apiInstance.withdraw(
    withdrawRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **withdrawRequest** | **WithdrawRequest**|  | |


### Return type

**WalletAccountView**

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

