# TreasuryControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**clearCheck**](#clearcheck) | **POST** /api/treasury/bank-accounts/checks/{checkPaymentId}/clear | |
|[**closeReconciliation**](#closereconciliation) | **POST** /api/treasury/bank-accounts/reconciliations/{reconciliationId}/close | |
|[**getBankAccount**](#getbankaccount) | **GET** /api/treasury/bank-accounts/{bankAccountId} | |
|[**getCheckPayment**](#getcheckpayment) | **GET** /api/treasury/bank-accounts/checks/{checkPaymentId} | |
|[**getInvoiceSettlement**](#getinvoicesettlement) | **GET** /api/treasury/bank-accounts/invoice-settlements/{settlementId} | |
|[**getReconciliation**](#getreconciliation) | **GET** /api/treasury/bank-accounts/reconciliations/{reconciliationId} | |
|[**listBankAccounts**](#listbankaccounts) | **GET** /api/treasury/bank-accounts | |
|[**listChecks**](#listchecks) | **GET** /api/treasury/bank-accounts/checks | |
|[**listInvoiceSettlements**](#listinvoicesettlements) | **GET** /api/treasury/bank-accounts/invoice-settlements | |
|[**listReconciliations**](#listreconciliations) | **GET** /api/treasury/bank-accounts/reconciliations | |
|[**openReconciliation**](#openreconciliation) | **POST** /api/treasury/bank-accounts/reconciliations | |
|[**registerBankAccount**](#registerbankaccount) | **POST** /api/treasury/bank-accounts | |
|[**registerCheck**](#registercheck) | **POST** /api/treasury/bank-accounts/checks | |
|[**registerInvoiceSettlement**](#registerinvoicesettlement) | **POST** /api/treasury/bank-accounts/invoice-settlements | |

# **clearCheck**
> ApiResponseCheckPaymentResponse clearCheck()


### Example

```typescript
import {
    TreasuryControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TreasuryControllerApi(configuration);

let checkPaymentId: string; // (default to undefined)

const { status, data } = await apiInstance.clearCheck(
    checkPaymentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkPaymentId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseCheckPaymentResponse**

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

# **closeReconciliation**
> ApiResponseReconciliationResponse closeReconciliation()


### Example

```typescript
import {
    TreasuryControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TreasuryControllerApi(configuration);

let reconciliationId: string; // (default to undefined)

const { status, data } = await apiInstance.closeReconciliation(
    reconciliationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reconciliationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseReconciliationResponse**

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

# **getBankAccount**
> ApiResponseBankAccountResponse getBankAccount()


### Example

```typescript
import {
    TreasuryControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TreasuryControllerApi(configuration);

let bankAccountId: string; // (default to undefined)

const { status, data } = await apiInstance.getBankAccount(
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

# **getCheckPayment**
> ApiResponseCheckPaymentResponse getCheckPayment()


### Example

```typescript
import {
    TreasuryControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TreasuryControllerApi(configuration);

let checkPaymentId: string; // (default to undefined)

const { status, data } = await apiInstance.getCheckPayment(
    checkPaymentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkPaymentId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseCheckPaymentResponse**

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

# **getInvoiceSettlement**
> ApiResponseInvoiceSettlementResponse getInvoiceSettlement()


### Example

```typescript
import {
    TreasuryControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TreasuryControllerApi(configuration);

let settlementId: string; // (default to undefined)

const { status, data } = await apiInstance.getInvoiceSettlement(
    settlementId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **settlementId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseInvoiceSettlementResponse**

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

# **getReconciliation**
> ApiResponseReconciliationResponse getReconciliation()


### Example

```typescript
import {
    TreasuryControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TreasuryControllerApi(configuration);

let reconciliationId: string; // (default to undefined)

const { status, data } = await apiInstance.getReconciliation(
    reconciliationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reconciliationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseReconciliationResponse**

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

# **listBankAccounts**
> ApiResponseListBankAccountResponse listBankAccounts()


### Example

```typescript
import {
    TreasuryControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TreasuryControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.listBankAccounts(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


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

# **listChecks**
> ApiResponseListCheckPaymentResponse listChecks()


### Example

```typescript
import {
    TreasuryControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TreasuryControllerApi(configuration);

let organizationId: string; // (default to undefined)
let bankAccountId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listChecks(
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

**ApiResponseListCheckPaymentResponse**

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

# **listInvoiceSettlements**
> ApiResponseListInvoiceSettlementResponse listInvoiceSettlements()


### Example

```typescript
import {
    TreasuryControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TreasuryControllerApi(configuration);

let organizationId: string; // (default to undefined)
let invoiceId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listInvoiceSettlements(
    organizationId,
    invoiceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **invoiceId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ApiResponseListInvoiceSettlementResponse**

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

# **listReconciliations**
> ApiResponseListReconciliationResponse listReconciliations()


### Example

```typescript
import {
    TreasuryControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TreasuryControllerApi(configuration);

let organizationId: string; // (default to undefined)
let bankAccountId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listReconciliations(
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

**ApiResponseListReconciliationResponse**

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

# **openReconciliation**
> ApiResponseReconciliationResponse openReconciliation(openReconciliationRequest)


### Example

```typescript
import {
    TreasuryControllerApi,
    Configuration,
    OpenReconciliationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TreasuryControllerApi(configuration);

let openReconciliationRequest: OpenReconciliationRequest; //

const { status, data } = await apiInstance.openReconciliation(
    openReconciliationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **openReconciliationRequest** | **OpenReconciliationRequest**|  | |


### Return type

**ApiResponseReconciliationResponse**

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

# **registerBankAccount**
> ApiResponseBankAccountResponse registerBankAccount(registerBankAccountRequest)


### Example

```typescript
import {
    TreasuryControllerApi,
    Configuration,
    RegisterBankAccountRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TreasuryControllerApi(configuration);

let registerBankAccountRequest: RegisterBankAccountRequest; //

const { status, data } = await apiInstance.registerBankAccount(
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

# **registerCheck**
> ApiResponseCheckPaymentResponse registerCheck(registerCheckPaymentRequest)


### Example

```typescript
import {
    TreasuryControllerApi,
    Configuration,
    RegisterCheckPaymentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TreasuryControllerApi(configuration);

let registerCheckPaymentRequest: RegisterCheckPaymentRequest; //

const { status, data } = await apiInstance.registerCheck(
    registerCheckPaymentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerCheckPaymentRequest** | **RegisterCheckPaymentRequest**|  | |


### Return type

**ApiResponseCheckPaymentResponse**

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

# **registerInvoiceSettlement**
> ApiResponseInvoiceSettlementResponse registerInvoiceSettlement(registerInvoiceSettlementRequest)


### Example

```typescript
import {
    TreasuryControllerApi,
    Configuration,
    RegisterInvoiceSettlementRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TreasuryControllerApi(configuration);

let registerInvoiceSettlementRequest: RegisterInvoiceSettlementRequest; //

const { status, data } = await apiInstance.registerInvoiceSettlement(
    registerInvoiceSettlementRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerInvoiceSettlementRequest** | **RegisterInvoiceSettlementRequest**|  | |


### Return type

**ApiResponseInvoiceSettlementResponse**

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

