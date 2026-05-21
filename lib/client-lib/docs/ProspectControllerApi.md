# ProspectControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**activate2**](#activate2) | **PATCH** /api/prospects/{thirdPartyId}/activate | |
|[**addBankAccount2**](#addbankaccount2) | **POST** /api/prospects/{thirdPartyId}/bank-accounts | |
|[**completeFollowUp3**](#completefollowup3) | **PATCH** /api/prospects/{thirdPartyId}/follow-up/complete | |
|[**conversionCount**](#conversioncount) | **GET** /api/prospects/statistics/conversions | |
|[**convertToCustomer**](#converttocustomer) | **POST** /api/prospects/{thirdPartyId}/convert | |
|[**create13**](#create13) | **POST** /api/prospects | |
|[**deactivate2**](#deactivate2) | **PATCH** /api/prospects/{thirdPartyId}/deactivate | |
|[**defineAccountingAccount2**](#defineaccountingaccount2) | **PATCH** /api/prospects/{thirdPartyId}/accounting-account | |
|[**defineBankAccount2**](#definebankaccount2) | **PATCH** /api/prospects/{thirdPartyId}/bank-account | |
|[**delete8**](#delete8) | **DELETE** /api/prospects/{thirdPartyId} | |
|[**deleteBankAccount2**](#deletebankaccount2) | **DELETE** /api/prospects/{thirdPartyId}/bank-accounts/{bankAccountId} | |
|[**findByAccountingAccount2**](#findbyaccountingaccount2) | **GET** /api/prospects/by-accounting-account/{accountingAccount} | |
|[**findByBankAccount2**](#findbybankaccount2) | **GET** /api/prospects/by-bank-account/{bankAccountNumber} | |
|[**getById3**](#getbyid3) | **GET** /api/prospects/{thirdPartyId} | |
|[**listBankAccounts3**](#listbankaccounts3) | **GET** /api/prospects/{thirdPartyId}/bank-accounts | |
|[**listByOrganization4**](#listbyorganization4) | **GET** /api/prospects | |
|[**qualify2**](#qualify2) | **PATCH** /api/prospects/{thirdPartyId}/qualification | |
|[**recomputeScore2**](#recomputescore2) | **POST** /api/prospects/{thirdPartyId}/score/recompute | |
|[**scheduleFollowUp3**](#schedulefollowup3) | **PATCH** /api/prospects/{thirdPartyId}/follow-up/schedule | |
|[**searchByOrganization2**](#searchbyorganization2) | **GET** /api/prospects/search | |
|[**setPrimaryBankAccount2**](#setprimarybankaccount2) | **PATCH** /api/prospects/{thirdPartyId}/bank-accounts/{bankAccountId}/set-primary | |
|[**statistics2**](#statistics2) | **GET** /api/prospects/statistics | |
|[**update10**](#update10) | **PATCH** /api/prospects/{thirdPartyId} | |

# **activate2**
> ApiResponseThirdPartyResponse activate2()


### Example

```typescript
import {
    ProspectControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProspectControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.activate2(
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

# **addBankAccount2**
> ApiResponseThirdPartyBankAccountResponse addBankAccount2(thirdPartyBankAccountRequest)


### Example

```typescript
import {
    ProspectControllerApi,
    Configuration,
    ThirdPartyBankAccountRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProspectControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let thirdPartyBankAccountRequest: ThirdPartyBankAccountRequest; //

const { status, data } = await apiInstance.addBankAccount2(
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

# **completeFollowUp3**
> ApiResponseThirdPartyResponse completeFollowUp3(thirdPartyFollowUpRequest)


### Example

```typescript
import {
    ProspectControllerApi,
    Configuration,
    ThirdPartyFollowUpRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProspectControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let thirdPartyFollowUpRequest: ThirdPartyFollowUpRequest; //

const { status, data } = await apiInstance.completeFollowUp3(
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

# **conversionCount**
> ApiResponseLong conversionCount()


### Example

```typescript
import {
    ProspectControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProspectControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.conversionCount(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseLong**

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

# **convertToCustomer**
> ApiResponseThirdPartyResponse convertToCustomer()


### Example

```typescript
import {
    ProspectControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProspectControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.convertToCustomer(
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

# **create13**
> ApiResponseThirdPartyResponse create13(createCommercialThirdPartyRequest)


### Example

```typescript
import {
    ProspectControllerApi,
    Configuration,
    CreateCommercialThirdPartyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProspectControllerApi(configuration);

let createCommercialThirdPartyRequest: CreateCommercialThirdPartyRequest; //

const { status, data } = await apiInstance.create13(
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

# **deactivate2**
> ApiResponseThirdPartyResponse deactivate2()


### Example

```typescript
import {
    ProspectControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProspectControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.deactivate2(
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

# **defineAccountingAccount2**
> ApiResponseThirdPartyResponse defineAccountingAccount2(body)


### Example

```typescript
import {
    ProspectControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProspectControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let body: string; //

const { status, data } = await apiInstance.defineAccountingAccount2(
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

# **defineBankAccount2**
> ApiResponseThirdPartyResponse defineBankAccount2(body)


### Example

```typescript
import {
    ProspectControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProspectControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let body: string; //

const { status, data } = await apiInstance.defineBankAccount2(
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

# **delete8**
> ApiResponseVoid delete8()


### Example

```typescript
import {
    ProspectControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProspectControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.delete8(
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

# **deleteBankAccount2**
> ApiResponseVoid deleteBankAccount2()


### Example

```typescript
import {
    ProspectControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProspectControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let bankAccountId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteBankAccount2(
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

# **findByAccountingAccount2**
> ApiResponseThirdPartyResponse findByAccountingAccount2()


### Example

```typescript
import {
    ProspectControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProspectControllerApi(configuration);

let organizationId: string; // (default to undefined)
let accountingAccount: string; // (default to undefined)

const { status, data } = await apiInstance.findByAccountingAccount2(
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

# **findByBankAccount2**
> ApiResponseThirdPartyResponse findByBankAccount2()


### Example

```typescript
import {
    ProspectControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProspectControllerApi(configuration);

let organizationId: string; // (default to undefined)
let bankAccountNumber: string; // (default to undefined)

const { status, data } = await apiInstance.findByBankAccount2(
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

# **getById3**
> ApiResponseThirdPartyResponse getById3()


### Example

```typescript
import {
    ProspectControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProspectControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.getById3(
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

# **listBankAccounts3**
> ApiResponseListThirdPartyBankAccountResponse listBankAccounts3()


### Example

```typescript
import {
    ProspectControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProspectControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.listBankAccounts3(
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

# **listByOrganization4**
> ApiResponseListThirdPartyResponse listByOrganization4()


### Example

```typescript
import {
    ProspectControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProspectControllerApi(configuration);

let organizationId: string; // (default to undefined)
let prospect: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.listByOrganization4(
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

# **qualify2**
> ApiResponseThirdPartyResponse qualify2(thirdPartyQualificationRequest)


### Example

```typescript
import {
    ProspectControllerApi,
    Configuration,
    ThirdPartyQualificationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProspectControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let thirdPartyQualificationRequest: ThirdPartyQualificationRequest; //

const { status, data } = await apiInstance.qualify2(
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

# **recomputeScore2**
> ApiResponseThirdPartyResponse recomputeScore2()


### Example

```typescript
import {
    ProspectControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProspectControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.recomputeScore2(
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

# **scheduleFollowUp3**
> ApiResponseThirdPartyResponse scheduleFollowUp3(thirdPartyFollowUpRequest)


### Example

```typescript
import {
    ProspectControllerApi,
    Configuration,
    ThirdPartyFollowUpRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProspectControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let thirdPartyFollowUpRequest: ThirdPartyFollowUpRequest; //

const { status, data } = await apiInstance.scheduleFollowUp3(
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

# **searchByOrganization2**
> ApiResponseListThirdPartySearchResponse searchByOrganization2()


### Example

```typescript
import {
    ProspectControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProspectControllerApi(configuration);

let organizationId: string; // (default to undefined)
let q: string; // (default to undefined)
let segment: string; // (optional) (default to undefined)
let minimumQualificationScore: number; // (optional) (default to undefined)
let active: boolean; // (optional) (default to undefined)
let followUpStatus: string; // (optional) (default to undefined)
let page: number; // (optional) (default to 0)
let size: number; // (optional) (default to 20)

const { status, data } = await apiInstance.searchByOrganization2(
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

# **setPrimaryBankAccount2**
> ApiResponseVoid setPrimaryBankAccount2()


### Example

```typescript
import {
    ProspectControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProspectControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let bankAccountId: string; // (default to undefined)

const { status, data } = await apiInstance.setPrimaryBankAccount2(
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

# **statistics2**
> ApiResponseThirdPartyStatisticsResponse statistics2()


### Example

```typescript
import {
    ProspectControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProspectControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.statistics2(
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

# **update10**
> ApiResponseThirdPartyResponse update10(updateThirdPartyRequest)


### Example

```typescript
import {
    ProspectControllerApi,
    Configuration,
    UpdateThirdPartyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProspectControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let updateThirdPartyRequest: UpdateThirdPartyRequest; //

const { status, data } = await apiInstance.update10(
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

