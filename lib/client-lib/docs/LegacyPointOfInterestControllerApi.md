# LegacyPointOfInterestControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create14**](#create14) | **POST** /api/pois | |
|[**getAll**](#getall) | **GET** /api/pois | |
|[**link**](#link) | **POST** /api/pois/link | |
|[**unlink**](#unlink) | **DELETE** /api/pois/link | |

# **create14**
> ApiResponsePointOfInterestResponse create14(createPointOfInterestRequest)


### Example

```typescript
import {
    LegacyPointOfInterestControllerApi,
    Configuration,
    CreatePointOfInterestRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyPointOfInterestControllerApi(configuration);

let createPointOfInterestRequest: CreatePointOfInterestRequest; //

const { status, data } = await apiInstance.create14(
    createPointOfInterestRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPointOfInterestRequest** | **CreatePointOfInterestRequest**|  | |


### Return type

**ApiResponsePointOfInterestResponse**

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

# **getAll**
> ApiResponseListPointOfInterestResponse getAll()


### Example

```typescript
import {
    LegacyPointOfInterestControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyPointOfInterestControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.getAll(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListPointOfInterestResponse**

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

# **link**
> ApiResponseVoid link(linkPointOfInterestRequest)


### Example

```typescript
import {
    LegacyPointOfInterestControllerApi,
    Configuration,
    LinkPointOfInterestRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyPointOfInterestControllerApi(configuration);

let linkPointOfInterestRequest: LinkPointOfInterestRequest; //

const { status, data } = await apiInstance.link(
    linkPointOfInterestRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **linkPointOfInterestRequest** | **LinkPointOfInterestRequest**|  | |


### Return type

**ApiResponseVoid**

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

# **unlink**
> ApiResponseVoid unlink()


### Example

```typescript
import {
    LegacyPointOfInterestControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyPointOfInterestControllerApi(configuration);

let agencyId: string; // (default to undefined)
let poiId: string; // (default to undefined)

const { status, data } = await apiInstance.unlink(
    agencyId,
    poiId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **agencyId** | [**string**] |  | defaults to undefined|
| **poiId** | [**string**] |  | defaults to undefined|


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

