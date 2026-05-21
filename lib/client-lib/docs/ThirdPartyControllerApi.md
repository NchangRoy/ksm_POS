# ThirdPartyControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**completeFollowUp**](#completefollowup) | **PATCH** /api/third-parties/{thirdPartyId}/follow-up/complete | |
|[**createThirdParty**](#createthirdparty) | **POST** /api/third-parties | |
|[**deleteThirdParty**](#deletethirdparty) | **DELETE** /api/third-parties/{thirdPartyId} | |
|[**getThirdParty**](#getthirdparty) | **GET** /api/third-parties/{thirdPartyId} | |
|[**listThirdParties**](#listthirdparties) | **GET** /api/third-parties | |
|[**qualifyThirdParty**](#qualifythirdparty) | **PATCH** /api/third-parties/{thirdPartyId}/qualification | |
|[**recomputeQualificationScore**](#recomputequalificationscore) | **POST** /api/third-parties/{thirdPartyId}/score/recompute | |
|[**scheduleFollowUp**](#schedulefollowup) | **PATCH** /api/third-parties/{thirdPartyId}/follow-up/schedule | |
|[**searchThirdParties**](#searchthirdparties) | **GET** /api/third-parties/search | |
|[**updateThirdParty**](#updatethirdparty) | **PATCH** /api/third-parties/{thirdPartyId} | |

# **completeFollowUp**
> ApiResponseThirdPartyResponse completeFollowUp(thirdPartyFollowUpRequest)


### Example

```typescript
import {
    ThirdPartyControllerApi,
    Configuration,
    ThirdPartyFollowUpRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ThirdPartyControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let thirdPartyFollowUpRequest: ThirdPartyFollowUpRequest; //

const { status, data } = await apiInstance.completeFollowUp(
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

# **createThirdParty**
> ApiResponseThirdPartyResponse createThirdParty(createThirdPartyRequest)


### Example

```typescript
import {
    ThirdPartyControllerApi,
    Configuration,
    CreateThirdPartyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ThirdPartyControllerApi(configuration);

let createThirdPartyRequest: CreateThirdPartyRequest; //

const { status, data } = await apiInstance.createThirdParty(
    createThirdPartyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createThirdPartyRequest** | **CreateThirdPartyRequest**|  | |


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

# **deleteThirdParty**
> ApiResponseVoid deleteThirdParty()


### Example

```typescript
import {
    ThirdPartyControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ThirdPartyControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteThirdParty(
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

# **getThirdParty**
> ApiResponseThirdPartyResponse getThirdParty()


### Example

```typescript
import {
    ThirdPartyControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ThirdPartyControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.getThirdParty(
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

# **listThirdParties**
> ApiResponseListThirdPartyResponse listThirdParties()


### Example

```typescript
import {
    ThirdPartyControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ThirdPartyControllerApi(configuration);

let organizationId: string; // (default to undefined)
let role: string; // (optional) (default to undefined)
let prospect: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.listThirdParties(
    organizationId,
    role,
    prospect
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **role** | [**string**] |  | (optional) defaults to undefined|
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

# **qualifyThirdParty**
> ApiResponseThirdPartyResponse qualifyThirdParty(thirdPartyQualificationRequest)


### Example

```typescript
import {
    ThirdPartyControllerApi,
    Configuration,
    ThirdPartyQualificationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ThirdPartyControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let thirdPartyQualificationRequest: ThirdPartyQualificationRequest; //

const { status, data } = await apiInstance.qualifyThirdParty(
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

# **recomputeQualificationScore**
> ApiResponseThirdPartyResponse recomputeQualificationScore()


### Example

```typescript
import {
    ThirdPartyControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ThirdPartyControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.recomputeQualificationScore(
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

# **scheduleFollowUp**
> ApiResponseThirdPartyResponse scheduleFollowUp(thirdPartyFollowUpRequest)


### Example

```typescript
import {
    ThirdPartyControllerApi,
    Configuration,
    ThirdPartyFollowUpRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ThirdPartyControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let thirdPartyFollowUpRequest: ThirdPartyFollowUpRequest; //

const { status, data } = await apiInstance.scheduleFollowUp(
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

# **searchThirdParties**
> ApiResponseListThirdPartySearchResponse searchThirdParties()


### Example

```typescript
import {
    ThirdPartyControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ThirdPartyControllerApi(configuration);

let organizationId: string; // (default to undefined)
let q: string; // (default to undefined)
let role: string; // (optional) (default to undefined)
let prospect: boolean; // (optional) (default to undefined)
let segment: string; // (optional) (default to undefined)
let minimumQualificationScore: number; // (optional) (default to undefined)
let active: boolean; // (optional) (default to undefined)
let followUpStatus: string; // (optional) (default to undefined)
let page: number; // (optional) (default to 0)
let size: number; // (optional) (default to 20)

const { status, data } = await apiInstance.searchThirdParties(
    organizationId,
    q,
    role,
    prospect,
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
| **role** | [**string**] |  | (optional) defaults to undefined|
| **prospect** | [**boolean**] |  | (optional) defaults to undefined|
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

# **updateThirdParty**
> ApiResponseThirdPartyResponse updateThirdParty(updateThirdPartyRequest)


### Example

```typescript
import {
    ThirdPartyControllerApi,
    Configuration,
    UpdateThirdPartyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ThirdPartyControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let updateThirdPartyRequest: UpdateThirdPartyRequest; //

const { status, data } = await apiInstance.updateThirdParty(
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

