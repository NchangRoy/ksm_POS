# GeneralizedInventoryCampaignControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**approve**](#approve) | **POST** /api/organizations/{organizationId}/generalized-inventory-campaigns/{campaignId}/approve | |
|[**list12**](#list12) | **GET** /api/organizations/{organizationId}/generalized-inventory-campaigns | |
|[**plan**](#plan) | **POST** /api/organizations/{organizationId}/generalized-inventory-campaigns | |
|[**start**](#start) | **POST** /api/organizations/{organizationId}/generalized-inventory-campaigns/{campaignId}/start | |
|[**submit1**](#submit1) | **POST** /api/organizations/{organizationId}/generalized-inventory-campaigns/{campaignId}/submit | |

# **approve**
> ApiResponseCampaignResponse approve()


### Example

```typescript
import {
    GeneralizedInventoryCampaignControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GeneralizedInventoryCampaignControllerApi(configuration);

let campaignId: string; // (default to undefined)

const { status, data } = await apiInstance.approve(
    campaignId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaignId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseCampaignResponse**

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

# **list12**
> ApiResponseListCampaignResponse list12()


### Example

```typescript
import {
    GeneralizedInventoryCampaignControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GeneralizedInventoryCampaignControllerApi(configuration);

let organizationId: string; // (default to undefined)
let agencyId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.list12(
    organizationId,
    agencyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **agencyId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ApiResponseListCampaignResponse**

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

# **plan**
> ApiResponseCampaignResponse plan(planCampaignRequest)


### Example

```typescript
import {
    GeneralizedInventoryCampaignControllerApi,
    Configuration,
    PlanCampaignRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GeneralizedInventoryCampaignControllerApi(configuration);

let organizationId: string; // (default to undefined)
let planCampaignRequest: PlanCampaignRequest; //

const { status, data } = await apiInstance.plan(
    organizationId,
    planCampaignRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **planCampaignRequest** | **PlanCampaignRequest**|  | |
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseCampaignResponse**

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

# **start**
> ApiResponseCampaignResponse start()


### Example

```typescript
import {
    GeneralizedInventoryCampaignControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GeneralizedInventoryCampaignControllerApi(configuration);

let campaignId: string; // (default to undefined)

const { status, data } = await apiInstance.start(
    campaignId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaignId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseCampaignResponse**

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

# **submit1**
> ApiResponseCampaignResponse submit1(submitCampaignRequest)


### Example

```typescript
import {
    GeneralizedInventoryCampaignControllerApi,
    Configuration,
    SubmitCampaignRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GeneralizedInventoryCampaignControllerApi(configuration);

let campaignId: string; // (default to undefined)
let submitCampaignRequest: SubmitCampaignRequest; //

const { status, data } = await apiInstance.submit1(
    campaignId,
    submitCampaignRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **submitCampaignRequest** | **SubmitCampaignRequest**|  | |
| **campaignId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseCampaignResponse**

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

