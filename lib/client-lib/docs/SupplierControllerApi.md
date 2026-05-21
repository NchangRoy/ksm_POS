# SupplierControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**activate**](#activate) | **PATCH** /api/suppliers/{thirdPartyId}/activate | |
|[**addBankAccount**](#addbankaccount) | **POST** /api/suppliers/{thirdPartyId}/bank-accounts | |
|[**completeFollowUp1**](#completefollowup1) | **PATCH** /api/suppliers/{thirdPartyId}/follow-up/complete | |
|[**create11**](#create11) | **POST** /api/suppliers | |
|[**deactivate**](#deactivate) | **PATCH** /api/suppliers/{thirdPartyId}/deactivate | |
|[**defineAccountingAccount**](#defineaccountingaccount) | **PATCH** /api/suppliers/{thirdPartyId}/accounting-account | |
|[**defineBankAccount**](#definebankaccount) | **PATCH** /api/suppliers/{thirdPartyId}/bank-account | |
|[**delete6**](#delete6) | **DELETE** /api/suppliers/{thirdPartyId} | |
|[**deleteBankAccount**](#deletebankaccount) | **DELETE** /api/suppliers/{thirdPartyId}/bank-accounts/{bankAccountId} | |
|[**findByAccountingAccount**](#findbyaccountingaccount) | **GET** /api/suppliers/by-accounting-account/{accountingAccount} | |
|[**findByBankAccount**](#findbybankaccount) | **GET** /api/suppliers/by-bank-account/{bankAccountNumber} | |
|[**getById1**](#getbyid1) | **GET** /api/suppliers/{thirdPartyId} | |
|[**listBankAccounts1**](#listbankaccounts1) | **GET** /api/suppliers/{thirdPartyId}/bank-accounts | |
|[**listByOrganization2**](#listbyorganization2) | **GET** /api/suppliers | |
|[**qualify**](#qualify) | **PATCH** /api/suppliers/{thirdPartyId}/qualification | |
|[**recomputeScore**](#recomputescore) | **POST** /api/suppliers/{thirdPartyId}/score/recompute | |
|[**scheduleFollowUp1**](#schedulefollowup1) | **PATCH** /api/suppliers/{thirdPartyId}/follow-up/schedule | |
|[**searchByOrganization**](#searchbyorganization) | **GET** /api/suppliers/search | |
|[**setPrimaryBankAccount**](#setprimarybankaccount) | **PATCH** /api/suppliers/{thirdPartyId}/bank-accounts/{bankAccountId}/set-primary | |
|[**statistics**](#statistics) | **GET** /api/suppliers/statistics | |
|[**update8**](#update8) | **PATCH** /api/suppliers/{thirdPartyId} | |

# **activate**
> ApiResponseThirdPartyResponse activate()


### Example

```typescript
import {
    SupplierControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SupplierControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.activate(
    thirdPartyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **thirdPartyId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseThirdPartyResponse**

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

# **addBankAccount**
> ApiResponseThirdPartyBankAccountResponse addBankAccount(thirdPartyBankAccountRequest)


### Example

```typescript
import {
    SupplierControllerApi,
    Configuration,
    ThirdPartyBankAccountRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SupplierControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let thirdPartyBankAccountRequest: ThirdPartyBankAccountRequest; //

const { status, data } = await apiInstance.addBankAccount(
    thirdPartyId,
    thirdPartyBankAccountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **thirdPartyBankAccountRequest** | **ThirdPartyBankAccountRequest**|  | |
| **thirdPartyId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseThirdPartyBankAccountResponse**

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

# **completeFollowUp1**
> ApiResponseThirdPartyResponse completeFollowUp1(thirdPartyFollowUpRequest)


### Example

```typescript
import {
    SupplierControllerApi,
    Configuration,
    ThirdPartyFollowUpRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SupplierControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let thirdPartyFollowUpRequest: ThirdPartyFollowUpRequest; //

const { status, data } = await apiInstance.completeFollowUp1(
    thirdPartyId,
    thirdPartyFollowUpRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **thirdPartyFollowUpRequest** | **ThirdPartyFollowUpRequest**|  | |
| **thirdPartyId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseThirdPartyResponse**

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

# **create11**
> ApiResponseThirdPartyResponse create11(createCommercialThirdPartyRequest)


### Example

```typescript
import {
    SupplierControllerApi,
    Configuration,
    CreateCommercialThirdPartyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SupplierControllerApi(configuration);

let createCommercialThirdPartyRequest: CreateCommercialThirdPartyRequest; //

const { status, data } = await apiInstance.create11(
    createCommercialThirdPartyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCommercialThirdPartyRequest** | **CreateCommercialThirdPartyRequest**|  | |


### Return type

**ApiResponseThirdPartyResponse**

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

# **deactivate**
> ApiResponseThirdPartyResponse deactivate()


### Example

```typescript
import {
    SupplierControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SupplierControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.deactivate(
    thirdPartyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **thirdPartyId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseThirdPartyResponse**

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

# **defineAccountingAccount**
> ApiResponseThirdPartyResponse defineAccountingAccount(body)


### Example

```typescript
import {
    SupplierControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SupplierControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let body: string; //

const { status, data } = await apiInstance.defineAccountingAccount(
    thirdPartyId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **thirdPartyId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseThirdPartyResponse**

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

# **defineBankAccount**
> ApiResponseThirdPartyResponse defineBankAccount(body)


### Example

```typescript
import {
    SupplierControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SupplierControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let body: string; //

const { status, data } = await apiInstance.defineBankAccount(
    thirdPartyId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **thirdPartyId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseThirdPartyResponse**

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

# **delete6**
> ApiResponseVoid delete6()


### Example

```typescript
import {
    SupplierControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SupplierControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.delete6(
    thirdPartyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **thirdPartyId** | [**string**] |  | defaults to undefined|


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

# **deleteBankAccount**
> ApiResponseVoid deleteBankAccount()


### Example

```typescript
import {
    SupplierControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SupplierControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let bankAccountId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteBankAccount(
    thirdPartyId,
    bankAccountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **thirdPartyId** | [**string**] |  | defaults to undefined|
| **bankAccountId** | [**string**] |  | defaults to undefined|


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

# **findByAccountingAccount**
> ApiResponseThirdPartyResponse findByAccountingAccount()


### Example

```typescript
import {
    SupplierControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SupplierControllerApi(configuration);

let organizationId: string; // (default to undefined)
let accountingAccount: string; // (default to undefined)

const { status, data } = await apiInstance.findByAccountingAccount(
    organizationId,
    accountingAccount
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **accountingAccount** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseThirdPartyResponse**

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

# **findByBankAccount**
> ApiResponseThirdPartyResponse findByBankAccount()


### Example

```typescript
import {
    SupplierControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SupplierControllerApi(configuration);

let organizationId: string; // (default to undefined)
let bankAccountNumber: string; // (default to undefined)

const { status, data } = await apiInstance.findByBankAccount(
    organizationId,
    bankAccountNumber
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **bankAccountNumber** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseThirdPartyResponse**

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

# **getById1**
> ApiResponseThirdPartyResponse getById1()


### Example

```typescript
import {
    SupplierControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SupplierControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.getById1(
    thirdPartyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **thirdPartyId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseThirdPartyResponse**

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

# **listBankAccounts1**
> ApiResponseListThirdPartyBankAccountResponse listBankAccounts1()


### Example

```typescript
import {
    SupplierControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SupplierControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.listBankAccounts1(
    thirdPartyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **thirdPartyId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListThirdPartyBankAccountResponse**

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

# **listByOrganization2**
> ApiResponseListThirdPartyResponse listByOrganization2()


### Example

```typescript
import {
    SupplierControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SupplierControllerApi(configuration);

let organizationId: string; // (default to undefined)
let prospect: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.listByOrganization2(
    organizationId,
    prospect
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **prospect** | [**boolean**] |  | (optional) defaults to undefined|


### Return type

**ApiResponseListThirdPartyResponse**

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

# **qualify**
> ApiResponseThirdPartyResponse qualify(thirdPartyQualificationRequest)


### Example

```typescript
import {
    SupplierControllerApi,
    Configuration,
    ThirdPartyQualificationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SupplierControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let thirdPartyQualificationRequest: ThirdPartyQualificationRequest; //

const { status, data } = await apiInstance.qualify(
    thirdPartyId,
    thirdPartyQualificationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **thirdPartyQualificationRequest** | **ThirdPartyQualificationRequest**|  | |
| **thirdPartyId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseThirdPartyResponse**

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

# **recomputeScore**
> ApiResponseThirdPartyResponse recomputeScore()


### Example

```typescript
import {
    SupplierControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SupplierControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.recomputeScore(
    thirdPartyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **thirdPartyId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseThirdPartyResponse**

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

# **scheduleFollowUp1**
> ApiResponseThirdPartyResponse scheduleFollowUp1(thirdPartyFollowUpRequest)


### Example

```typescript
import {
    SupplierControllerApi,
    Configuration,
    ThirdPartyFollowUpRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SupplierControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let thirdPartyFollowUpRequest: ThirdPartyFollowUpRequest; //

const { status, data } = await apiInstance.scheduleFollowUp1(
    thirdPartyId,
    thirdPartyFollowUpRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **thirdPartyFollowUpRequest** | **ThirdPartyFollowUpRequest**|  | |
| **thirdPartyId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseThirdPartyResponse**

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

# **searchByOrganization**
> ApiResponseListThirdPartySearchResponse searchByOrganization()


### Example

```typescript
import {
    SupplierControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SupplierControllerApi(configuration);

let organizationId: string; // (default to undefined)
let q: string; // (default to undefined)
let segment: string; // (optional) (default to undefined)
let minimumQualificationScore: number; // (optional) (default to undefined)
let active: boolean; // (optional) (default to undefined)
let followUpStatus: string; // (optional) (default to undefined)
let page: number; // (optional) (default to 0)
let size: number; // (optional) (default to 20)

const { status, data } = await apiInstance.searchByOrganization(
    organizationId,
    q,
    segment,
    minimumQualificationScore,
    active,
    followUpStatus,
    page,
    size
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **q** | [**string**] |  | defaults to undefined|
| **segment** | [**string**] |  | (optional) defaults to undefined|
| **minimumQualificationScore** | [**number**] |  | (optional) defaults to undefined|
| **active** | [**boolean**] |  | (optional) defaults to undefined|
| **followUpStatus** | [**string**] |  | (optional) defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to 0|
| **size** | [**number**] |  | (optional) defaults to 20|


### Return type

**ApiResponseListThirdPartySearchResponse**

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

# **setPrimaryBankAccount**
> ApiResponseVoid setPrimaryBankAccount()


### Example

```typescript
import {
    SupplierControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SupplierControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let bankAccountId: string; // (default to undefined)

const { status, data } = await apiInstance.setPrimaryBankAccount(
    thirdPartyId,
    bankAccountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **thirdPartyId** | [**string**] |  | defaults to undefined|
| **bankAccountId** | [**string**] |  | defaults to undefined|


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

# **statistics**
> ApiResponseThirdPartyStatisticsResponse statistics()


### Example

```typescript
import {
    SupplierControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SupplierControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.statistics(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseThirdPartyStatisticsResponse**

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

# **update8**
> ApiResponseThirdPartyResponse update8(updateThirdPartyRequest)


### Example

```typescript
import {
    SupplierControllerApi,
    Configuration,
    UpdateThirdPartyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SupplierControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let updateThirdPartyRequest: UpdateThirdPartyRequest; //

const { status, data } = await apiInstance.update8(
    thirdPartyId,
    updateThirdPartyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateThirdPartyRequest** | **UpdateThirdPartyRequest**|  | |
| **thirdPartyId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseThirdPartyResponse**

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

