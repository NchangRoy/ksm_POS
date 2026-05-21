# CustomerControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**activate3**](#activate3) | **PATCH** /api/customers/{thirdPartyId}/activate | |
|[**addBankAccount3**](#addbankaccount3) | **POST** /api/customers/{thirdPartyId}/bank-accounts | |
|[**completeFollowUp4**](#completefollowup4) | **PATCH** /api/customers/{thirdPartyId}/follow-up/complete | |
|[**create20**](#create20) | **POST** /api/customers | |
|[**deactivate3**](#deactivate3) | **PATCH** /api/customers/{thirdPartyId}/deactivate | |
|[**defineAccountingAccount3**](#defineaccountingaccount3) | **PATCH** /api/customers/{thirdPartyId}/accounting-account | |
|[**defineBankAccount3**](#definebankaccount3) | **PATCH** /api/customers/{thirdPartyId}/bank-account | |
|[**delete9**](#delete9) | **DELETE** /api/customers/{thirdPartyId} | |
|[**deleteBankAccount3**](#deletebankaccount3) | **DELETE** /api/customers/{thirdPartyId}/bank-accounts/{bankAccountId} | |
|[**findByAccountingAccount3**](#findbyaccountingaccount3) | **GET** /api/customers/by-accounting-account/{accountingAccount} | |
|[**findByBankAccount3**](#findbybankaccount3) | **GET** /api/customers/by-bank-account/{bankAccountNumber} | |
|[**getById4**](#getbyid4) | **GET** /api/customers/{thirdPartyId} | |
|[**listBankAccounts4**](#listbankaccounts4) | **GET** /api/customers/{thirdPartyId}/bank-accounts | |
|[**listByOrganization5**](#listbyorganization5) | **GET** /api/customers | |
|[**qualify3**](#qualify3) | **PATCH** /api/customers/{thirdPartyId}/qualification | |
|[**recomputeScore3**](#recomputescore3) | **POST** /api/customers/{thirdPartyId}/score/recompute | |
|[**scheduleFollowUp4**](#schedulefollowup4) | **PATCH** /api/customers/{thirdPartyId}/follow-up/schedule | |
|[**searchByOrganization3**](#searchbyorganization3) | **GET** /api/customers/search | |
|[**setPrimaryBankAccount3**](#setprimarybankaccount3) | **PATCH** /api/customers/{thirdPartyId}/bank-accounts/{bankAccountId}/set-primary | |
|[**statistics3**](#statistics3) | **GET** /api/customers/statistics | |
|[**update11**](#update11) | **PATCH** /api/customers/{thirdPartyId} | |

# **activate3**
> ApiResponseThirdPartyResponse activate3()


### Example

```typescript
import {
    CustomerControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomerControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.activate3(
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

# **addBankAccount3**
> ApiResponseThirdPartyBankAccountResponse addBankAccount3(thirdPartyBankAccountRequest)


### Example

```typescript
import {
    CustomerControllerApi,
    Configuration,
    ThirdPartyBankAccountRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomerControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let thirdPartyBankAccountRequest: ThirdPartyBankAccountRequest; //

const { status, data } = await apiInstance.addBankAccount3(
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

# **completeFollowUp4**
> ApiResponseThirdPartyResponse completeFollowUp4(thirdPartyFollowUpRequest)


### Example

```typescript
import {
    CustomerControllerApi,
    Configuration,
    ThirdPartyFollowUpRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomerControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let thirdPartyFollowUpRequest: ThirdPartyFollowUpRequest; //

const { status, data } = await apiInstance.completeFollowUp4(
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

# **create20**
> ApiResponseThirdPartyResponse create20(createCommercialThirdPartyRequest)


### Example

```typescript
import {
    CustomerControllerApi,
    Configuration,
    CreateCommercialThirdPartyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomerControllerApi(configuration);

let createCommercialThirdPartyRequest: CreateCommercialThirdPartyRequest; //

const { status, data } = await apiInstance.create20(
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

# **deactivate3**
> ApiResponseThirdPartyResponse deactivate3()


### Example

```typescript
import {
    CustomerControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomerControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.deactivate3(
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

# **defineAccountingAccount3**
> ApiResponseThirdPartyResponse defineAccountingAccount3(body)


### Example

```typescript
import {
    CustomerControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomerControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let body: string; //

const { status, data } = await apiInstance.defineAccountingAccount3(
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

# **defineBankAccount3**
> ApiResponseThirdPartyResponse defineBankAccount3(body)


### Example

```typescript
import {
    CustomerControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomerControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let body: string; //

const { status, data } = await apiInstance.defineBankAccount3(
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

# **delete9**
> ApiResponseVoid delete9()


### Example

```typescript
import {
    CustomerControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomerControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.delete9(
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

# **deleteBankAccount3**
> ApiResponseVoid deleteBankAccount3()


### Example

```typescript
import {
    CustomerControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomerControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let bankAccountId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteBankAccount3(
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

# **findByAccountingAccount3**
> ApiResponseThirdPartyResponse findByAccountingAccount3()


### Example

```typescript
import {
    CustomerControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomerControllerApi(configuration);

let organizationId: string; // (default to undefined)
let accountingAccount: string; // (default to undefined)

const { status, data } = await apiInstance.findByAccountingAccount3(
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

# **findByBankAccount3**
> ApiResponseThirdPartyResponse findByBankAccount3()


### Example

```typescript
import {
    CustomerControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomerControllerApi(configuration);

let organizationId: string; // (default to undefined)
let bankAccountNumber: string; // (default to undefined)

const { status, data } = await apiInstance.findByBankAccount3(
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

# **getById4**
> ApiResponseThirdPartyResponse getById4()


### Example

```typescript
import {
    CustomerControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomerControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.getById4(
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

# **listBankAccounts4**
> ApiResponseListThirdPartyBankAccountResponse listBankAccounts4()


### Example

```typescript
import {
    CustomerControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomerControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.listBankAccounts4(
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

# **listByOrganization5**
> ApiResponseListThirdPartyResponse listByOrganization5()


### Example

```typescript
import {
    CustomerControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomerControllerApi(configuration);

let organizationId: string; // (default to undefined)
let prospect: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.listByOrganization5(
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

# **qualify3**
> ApiResponseThirdPartyResponse qualify3(thirdPartyQualificationRequest)


### Example

```typescript
import {
    CustomerControllerApi,
    Configuration,
    ThirdPartyQualificationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomerControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let thirdPartyQualificationRequest: ThirdPartyQualificationRequest; //

const { status, data } = await apiInstance.qualify3(
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

# **recomputeScore3**
> ApiResponseThirdPartyResponse recomputeScore3()


### Example

```typescript
import {
    CustomerControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomerControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.recomputeScore3(
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

# **scheduleFollowUp4**
> ApiResponseThirdPartyResponse scheduleFollowUp4(thirdPartyFollowUpRequest)


### Example

```typescript
import {
    CustomerControllerApi,
    Configuration,
    ThirdPartyFollowUpRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomerControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let thirdPartyFollowUpRequest: ThirdPartyFollowUpRequest; //

const { status, data } = await apiInstance.scheduleFollowUp4(
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

# **searchByOrganization3**
> ApiResponseListThirdPartySearchResponse searchByOrganization3()


### Example

```typescript
import {
    CustomerControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomerControllerApi(configuration);

let organizationId: string; // (default to undefined)
let q: string; // (default to undefined)
let segment: string; // (optional) (default to undefined)
let minimumQualificationScore: number; // (optional) (default to undefined)
let active: boolean; // (optional) (default to undefined)
let followUpStatus: string; // (optional) (default to undefined)
let page: number; // (optional) (default to 0)
let size: number; // (optional) (default to 20)

const { status, data } = await apiInstance.searchByOrganization3(
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

# **setPrimaryBankAccount3**
> ApiResponseVoid setPrimaryBankAccount3()


### Example

```typescript
import {
    CustomerControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomerControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let bankAccountId: string; // (default to undefined)

const { status, data } = await apiInstance.setPrimaryBankAccount3(
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

# **statistics3**
> ApiResponseThirdPartyStatisticsResponse statistics3()


### Example

```typescript
import {
    CustomerControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomerControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.statistics3(
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

# **update11**
> ApiResponseThirdPartyResponse update11(updateThirdPartyRequest)


### Example

```typescript
import {
    CustomerControllerApi,
    Configuration,
    UpdateThirdPartyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CustomerControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let updateThirdPartyRequest: UpdateThirdPartyRequest; //

const { status, data } = await apiInstance.update11(
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

