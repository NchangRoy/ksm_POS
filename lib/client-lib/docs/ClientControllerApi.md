# ClientControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**activate4**](#activate4) | **PATCH** /api/clients/{thirdPartyId}/activate | |
|[**addBankAccount4**](#addbankaccount4) | **POST** /api/clients/{thirdPartyId}/bank-accounts | |
|[**completeFollowUp5**](#completefollowup5) | **PATCH** /api/clients/{thirdPartyId}/follow-up/complete | |
|[**create21**](#create21) | **POST** /api/clients | |
|[**deactivate4**](#deactivate4) | **PATCH** /api/clients/{thirdPartyId}/deactivate | |
|[**defineAccountingAccount4**](#defineaccountingaccount4) | **PATCH** /api/clients/{thirdPartyId}/accounting-account | |
|[**defineBankAccount4**](#definebankaccount4) | **PATCH** /api/clients/{thirdPartyId}/bank-account | |
|[**delete10**](#delete10) | **DELETE** /api/clients/{thirdPartyId} | |
|[**deleteBankAccount4**](#deletebankaccount4) | **DELETE** /api/clients/{thirdPartyId}/bank-accounts/{bankAccountId} | |
|[**findByAccountingAccount4**](#findbyaccountingaccount4) | **GET** /api/clients/by-accounting-account/{accountingAccount} | |
|[**findByBankAccount4**](#findbybankaccount4) | **GET** /api/clients/by-bank-account/{bankAccountNumber} | |
|[**getById5**](#getbyid5) | **GET** /api/clients/{thirdPartyId} | |
|[**listBankAccounts5**](#listbankaccounts5) | **GET** /api/clients/{thirdPartyId}/bank-accounts | |
|[**listByOrganization6**](#listbyorganization6) | **GET** /api/clients | |
|[**qualify4**](#qualify4) | **PATCH** /api/clients/{thirdPartyId}/qualification | |
|[**recomputeScore4**](#recomputescore4) | **POST** /api/clients/{thirdPartyId}/score/recompute | |
|[**scheduleFollowUp5**](#schedulefollowup5) | **PATCH** /api/clients/{thirdPartyId}/follow-up/schedule | |
|[**searchByOrganization4**](#searchbyorganization4) | **GET** /api/clients/search | |
|[**setPrimaryBankAccount4**](#setprimarybankaccount4) | **PATCH** /api/clients/{thirdPartyId}/bank-accounts/{bankAccountId}/set-primary | |
|[**statistics4**](#statistics4) | **GET** /api/clients/statistics | |
|[**update12**](#update12) | **PATCH** /api/clients/{thirdPartyId} | |

# **activate4**
> ApiResponseThirdPartyResponse activate4()


### Example

```typescript
import {
    ClientControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.activate4(
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

# **addBankAccount4**
> ApiResponseThirdPartyBankAccountResponse addBankAccount4(thirdPartyBankAccountRequest)


### Example

```typescript
import {
    ClientControllerApi,
    Configuration,
    ThirdPartyBankAccountRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let thirdPartyBankAccountRequest: ThirdPartyBankAccountRequest; //

const { status, data } = await apiInstance.addBankAccount4(
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

# **completeFollowUp5**
> ApiResponseThirdPartyResponse completeFollowUp5(thirdPartyFollowUpRequest)


### Example

```typescript
import {
    ClientControllerApi,
    Configuration,
    ThirdPartyFollowUpRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let thirdPartyFollowUpRequest: ThirdPartyFollowUpRequest; //

const { status, data } = await apiInstance.completeFollowUp5(
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

# **create21**
> ApiResponseThirdPartyResponse create21(createCommercialThirdPartyRequest)


### Example

```typescript
import {
    ClientControllerApi,
    Configuration,
    CreateCommercialThirdPartyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientControllerApi(configuration);

let createCommercialThirdPartyRequest: CreateCommercialThirdPartyRequest; //

const { status, data } = await apiInstance.create21(
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

# **deactivate4**
> ApiResponseThirdPartyResponse deactivate4()


### Example

```typescript
import {
    ClientControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.deactivate4(
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

# **defineAccountingAccount4**
> ApiResponseThirdPartyResponse defineAccountingAccount4(body)


### Example

```typescript
import {
    ClientControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let body: string; //

const { status, data } = await apiInstance.defineAccountingAccount4(
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

# **defineBankAccount4**
> ApiResponseThirdPartyResponse defineBankAccount4(body)


### Example

```typescript
import {
    ClientControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let body: string; //

const { status, data } = await apiInstance.defineBankAccount4(
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

# **delete10**
> ApiResponseVoid delete10()


### Example

```typescript
import {
    ClientControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.delete10(
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

# **deleteBankAccount4**
> ApiResponseVoid deleteBankAccount4()


### Example

```typescript
import {
    ClientControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let bankAccountId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteBankAccount4(
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

# **findByAccountingAccount4**
> ApiResponseThirdPartyResponse findByAccountingAccount4()


### Example

```typescript
import {
    ClientControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientControllerApi(configuration);

let organizationId: string; // (default to undefined)
let accountingAccount: string; // (default to undefined)

const { status, data } = await apiInstance.findByAccountingAccount4(
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

# **findByBankAccount4**
> ApiResponseThirdPartyResponse findByBankAccount4()


### Example

```typescript
import {
    ClientControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientControllerApi(configuration);

let organizationId: string; // (default to undefined)
let bankAccountNumber: string; // (default to undefined)

const { status, data } = await apiInstance.findByBankAccount4(
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

# **getById5**
> ApiResponseThirdPartyResponse getById5()


### Example

```typescript
import {
    ClientControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.getById5(
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

# **listBankAccounts5**
> ApiResponseListThirdPartyBankAccountResponse listBankAccounts5()


### Example

```typescript
import {
    ClientControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.listBankAccounts5(
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

# **listByOrganization6**
> ApiResponseListThirdPartyResponse listByOrganization6()


### Example

```typescript
import {
    ClientControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientControllerApi(configuration);

let organizationId: string; // (default to undefined)
let prospect: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.listByOrganization6(
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

# **qualify4**
> ApiResponseThirdPartyResponse qualify4(thirdPartyQualificationRequest)


### Example

```typescript
import {
    ClientControllerApi,
    Configuration,
    ThirdPartyQualificationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let thirdPartyQualificationRequest: ThirdPartyQualificationRequest; //

const { status, data } = await apiInstance.qualify4(
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

# **recomputeScore4**
> ApiResponseThirdPartyResponse recomputeScore4()


### Example

```typescript
import {
    ClientControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.recomputeScore4(
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

# **scheduleFollowUp5**
> ApiResponseThirdPartyResponse scheduleFollowUp5(thirdPartyFollowUpRequest)


### Example

```typescript
import {
    ClientControllerApi,
    Configuration,
    ThirdPartyFollowUpRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let thirdPartyFollowUpRequest: ThirdPartyFollowUpRequest; //

const { status, data } = await apiInstance.scheduleFollowUp5(
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

# **searchByOrganization4**
> ApiResponseListThirdPartySearchResponse searchByOrganization4()


### Example

```typescript
import {
    ClientControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientControllerApi(configuration);

let organizationId: string; // (default to undefined)
let q: string; // (default to undefined)
let segment: string; // (optional) (default to undefined)
let minimumQualificationScore: number; // (optional) (default to undefined)
let active: boolean; // (optional) (default to undefined)
let followUpStatus: string; // (optional) (default to undefined)
let page: number; // (optional) (default to 0)
let size: number; // (optional) (default to 20)

const { status, data } = await apiInstance.searchByOrganization4(
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

# **setPrimaryBankAccount4**
> ApiResponseVoid setPrimaryBankAccount4()


### Example

```typescript
import {
    ClientControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let bankAccountId: string; // (default to undefined)

const { status, data } = await apiInstance.setPrimaryBankAccount4(
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

# **statistics4**
> ApiResponseThirdPartyStatisticsResponse statistics4()


### Example

```typescript
import {
    ClientControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.statistics4(
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

# **update12**
> ApiResponseThirdPartyResponse update12(updateThirdPartyRequest)


### Example

```typescript
import {
    ClientControllerApi,
    Configuration,
    UpdateThirdPartyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ClientControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let updateThirdPartyRequest: UpdateThirdPartyRequest; //

const { status, data } = await apiInstance.update12(
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

