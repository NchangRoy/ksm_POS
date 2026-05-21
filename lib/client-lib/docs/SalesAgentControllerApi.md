# SalesAgentControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**activate1**](#activate1) | **PATCH** /api/sales-agents/{thirdPartyId}/activate | |
|[**addBankAccount1**](#addbankaccount1) | **POST** /api/sales-agents/{thirdPartyId}/bank-accounts | |
|[**completeFollowUp2**](#completefollowup2) | **PATCH** /api/sales-agents/{thirdPartyId}/follow-up/complete | |
|[**create12**](#create12) | **POST** /api/sales-agents | |
|[**deactivate1**](#deactivate1) | **PATCH** /api/sales-agents/{thirdPartyId}/deactivate | |
|[**defineAccountingAccount1**](#defineaccountingaccount1) | **PATCH** /api/sales-agents/{thirdPartyId}/accounting-account | |
|[**defineBankAccount1**](#definebankaccount1) | **PATCH** /api/sales-agents/{thirdPartyId}/bank-account | |
|[**delete7**](#delete7) | **DELETE** /api/sales-agents/{thirdPartyId} | |
|[**deleteBankAccount1**](#deletebankaccount1) | **DELETE** /api/sales-agents/{thirdPartyId}/bank-accounts/{bankAccountId} | |
|[**findByAccountingAccount1**](#findbyaccountingaccount1) | **GET** /api/sales-agents/by-accounting-account/{accountingAccount} | |
|[**findByBankAccount1**](#findbybankaccount1) | **GET** /api/sales-agents/by-bank-account/{bankAccountNumber} | |
|[**getById2**](#getbyid2) | **GET** /api/sales-agents/{thirdPartyId} | |
|[**listBankAccounts2**](#listbankaccounts2) | **GET** /api/sales-agents/{thirdPartyId}/bank-accounts | |
|[**listByOrganization3**](#listbyorganization3) | **GET** /api/sales-agents | |
|[**qualify1**](#qualify1) | **PATCH** /api/sales-agents/{thirdPartyId}/qualification | |
|[**recomputeScore1**](#recomputescore1) | **POST** /api/sales-agents/{thirdPartyId}/score/recompute | |
|[**scheduleFollowUp2**](#schedulefollowup2) | **PATCH** /api/sales-agents/{thirdPartyId}/follow-up/schedule | |
|[**searchByOrganization1**](#searchbyorganization1) | **GET** /api/sales-agents/search | |
|[**setPrimaryBankAccount1**](#setprimarybankaccount1) | **PATCH** /api/sales-agents/{thirdPartyId}/bank-accounts/{bankAccountId}/set-primary | |
|[**statistics1**](#statistics1) | **GET** /api/sales-agents/statistics | |
|[**update9**](#update9) | **PATCH** /api/sales-agents/{thirdPartyId} | |

# **activate1**
> ApiResponseThirdPartyResponse activate1()


### Example

```typescript
import {
    SalesAgentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SalesAgentControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.activate1(
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

# **addBankAccount1**
> ApiResponseThirdPartyBankAccountResponse addBankAccount1(thirdPartyBankAccountRequest)


### Example

```typescript
import {
    SalesAgentControllerApi,
    Configuration,
    ThirdPartyBankAccountRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SalesAgentControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let thirdPartyBankAccountRequest: ThirdPartyBankAccountRequest; //

const { status, data } = await apiInstance.addBankAccount1(
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

# **completeFollowUp2**
> ApiResponseThirdPartyResponse completeFollowUp2(thirdPartyFollowUpRequest)


### Example

```typescript
import {
    SalesAgentControllerApi,
    Configuration,
    ThirdPartyFollowUpRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SalesAgentControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let thirdPartyFollowUpRequest: ThirdPartyFollowUpRequest; //

const { status, data } = await apiInstance.completeFollowUp2(
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

# **create12**
> ApiResponseThirdPartyResponse create12(createCommercialThirdPartyRequest)


### Example

```typescript
import {
    SalesAgentControllerApi,
    Configuration,
    CreateCommercialThirdPartyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SalesAgentControllerApi(configuration);

let createCommercialThirdPartyRequest: CreateCommercialThirdPartyRequest; //

const { status, data } = await apiInstance.create12(
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

# **deactivate1**
> ApiResponseThirdPartyResponse deactivate1()


### Example

```typescript
import {
    SalesAgentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SalesAgentControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.deactivate1(
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

# **defineAccountingAccount1**
> ApiResponseThirdPartyResponse defineAccountingAccount1(body)


### Example

```typescript
import {
    SalesAgentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SalesAgentControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let body: string; //

const { status, data } = await apiInstance.defineAccountingAccount1(
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

# **defineBankAccount1**
> ApiResponseThirdPartyResponse defineBankAccount1(body)


### Example

```typescript
import {
    SalesAgentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SalesAgentControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let body: string; //

const { status, data } = await apiInstance.defineBankAccount1(
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

# **delete7**
> ApiResponseVoid delete7()


### Example

```typescript
import {
    SalesAgentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SalesAgentControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.delete7(
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

# **deleteBankAccount1**
> ApiResponseVoid deleteBankAccount1()


### Example

```typescript
import {
    SalesAgentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SalesAgentControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let bankAccountId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteBankAccount1(
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

# **findByAccountingAccount1**
> ApiResponseThirdPartyResponse findByAccountingAccount1()


### Example

```typescript
import {
    SalesAgentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SalesAgentControllerApi(configuration);

let organizationId: string; // (default to undefined)
let accountingAccount: string; // (default to undefined)

const { status, data } = await apiInstance.findByAccountingAccount1(
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

# **findByBankAccount1**
> ApiResponseThirdPartyResponse findByBankAccount1()


### Example

```typescript
import {
    SalesAgentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SalesAgentControllerApi(configuration);

let organizationId: string; // (default to undefined)
let bankAccountNumber: string; // (default to undefined)

const { status, data } = await apiInstance.findByBankAccount1(
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

# **getById2**
> ApiResponseThirdPartyResponse getById2()


### Example

```typescript
import {
    SalesAgentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SalesAgentControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.getById2(
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

# **listBankAccounts2**
> ApiResponseListThirdPartyBankAccountResponse listBankAccounts2()


### Example

```typescript
import {
    SalesAgentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SalesAgentControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.listBankAccounts2(
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

# **listByOrganization3**
> ApiResponseListThirdPartyResponse listByOrganization3()


### Example

```typescript
import {
    SalesAgentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SalesAgentControllerApi(configuration);

let organizationId: string; // (default to undefined)
let prospect: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.listByOrganization3(
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

# **qualify1**
> ApiResponseThirdPartyResponse qualify1(thirdPartyQualificationRequest)


### Example

```typescript
import {
    SalesAgentControllerApi,
    Configuration,
    ThirdPartyQualificationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SalesAgentControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let thirdPartyQualificationRequest: ThirdPartyQualificationRequest; //

const { status, data } = await apiInstance.qualify1(
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

# **recomputeScore1**
> ApiResponseThirdPartyResponse recomputeScore1()


### Example

```typescript
import {
    SalesAgentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SalesAgentControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.recomputeScore1(
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

# **scheduleFollowUp2**
> ApiResponseThirdPartyResponse scheduleFollowUp2(thirdPartyFollowUpRequest)


### Example

```typescript
import {
    SalesAgentControllerApi,
    Configuration,
    ThirdPartyFollowUpRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SalesAgentControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let thirdPartyFollowUpRequest: ThirdPartyFollowUpRequest; //

const { status, data } = await apiInstance.scheduleFollowUp2(
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

# **searchByOrganization1**
> ApiResponseListThirdPartySearchResponse searchByOrganization1()


### Example

```typescript
import {
    SalesAgentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SalesAgentControllerApi(configuration);

let organizationId: string; // (default to undefined)
let q: string; // (default to undefined)
let segment: string; // (optional) (default to undefined)
let minimumQualificationScore: number; // (optional) (default to undefined)
let active: boolean; // (optional) (default to undefined)
let followUpStatus: string; // (optional) (default to undefined)
let page: number; // (optional) (default to 0)
let size: number; // (optional) (default to 20)

const { status, data } = await apiInstance.searchByOrganization1(
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

# **setPrimaryBankAccount1**
> ApiResponseVoid setPrimaryBankAccount1()


### Example

```typescript
import {
    SalesAgentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SalesAgentControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let bankAccountId: string; // (default to undefined)

const { status, data } = await apiInstance.setPrimaryBankAccount1(
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

# **statistics1**
> ApiResponseThirdPartyStatisticsResponse statistics1()


### Example

```typescript
import {
    SalesAgentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SalesAgentControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.statistics1(
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

# **update9**
> ApiResponseThirdPartyResponse update9(updateThirdPartyRequest)


### Example

```typescript
import {
    SalesAgentControllerApi,
    Configuration,
    UpdateThirdPartyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SalesAgentControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let updateThirdPartyRequest: UpdateThirdPartyRequest; //

const { status, data } = await apiInstance.update9(
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

