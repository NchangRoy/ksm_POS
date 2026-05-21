# AdvancedAssetManagementControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getProfile**](#getprofile) | **GET** /api/resources/{resourceId}/asset-profile | |
|[**organizationAssets**](#organizationassets) | **GET** /api/organizations/{organizationId}/advanced-assets | |
|[**overview**](#overview) | **GET** /api/organizations/{organizationId}/advanced-assets/overview | |
|[**retireAsset**](#retireasset) | **POST** /api/resources/{resourceId}/retire | |
|[**upsertProfile**](#upsertprofile) | **PUT** /api/resources/{resourceId}/asset-profile | |

# **getProfile**
> ApiResponseAssetProfileResponse getProfile()


### Example

```typescript
import {
    AdvancedAssetManagementControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdvancedAssetManagementControllerApi(configuration);

let resourceId: string; // (default to undefined)

const { status, data } = await apiInstance.getProfile(
    resourceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resourceId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseAssetProfileResponse**

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

# **organizationAssets**
> ApiResponseListAssetProfileResponse organizationAssets()


### Example

```typescript
import {
    AdvancedAssetManagementControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdvancedAssetManagementControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.organizationAssets(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListAssetProfileResponse**

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

# **overview**
> ApiResponseAdvancedAssetOverview overview()


### Example

```typescript
import {
    AdvancedAssetManagementControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdvancedAssetManagementControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.overview(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseAdvancedAssetOverview**

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

# **retireAsset**
> ApiResponseAssetProfileResponse retireAsset(retireAssetRequest)


### Example

```typescript
import {
    AdvancedAssetManagementControllerApi,
    Configuration,
    RetireAssetRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AdvancedAssetManagementControllerApi(configuration);

let resourceId: string; // (default to undefined)
let retireAssetRequest: RetireAssetRequest; //

const { status, data } = await apiInstance.retireAsset(
    resourceId,
    retireAssetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **retireAssetRequest** | **RetireAssetRequest**|  | |
| **resourceId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseAssetProfileResponse**

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

# **upsertProfile**
> ApiResponseAssetProfileResponse upsertProfile(upsertAssetProfileRequest)


### Example

```typescript
import {
    AdvancedAssetManagementControllerApi,
    Configuration,
    UpsertAssetProfileRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AdvancedAssetManagementControllerApi(configuration);

let resourceId: string; // (default to undefined)
let upsertAssetProfileRequest: UpsertAssetProfileRequest; //

const { status, data } = await apiInstance.upsertProfile(
    resourceId,
    upsertAssetProfileRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **upsertAssetProfileRequest** | **UpsertAssetProfileRequest**|  | |
| **resourceId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseAssetProfileResponse**

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

