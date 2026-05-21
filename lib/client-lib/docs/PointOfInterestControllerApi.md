# PointOfInterestControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create17**](#create17) | **POST** /api/organizations/points-of-interest | |
|[**listByAgency**](#listbyagency) | **GET** /api/organizations/points-of-interest/{organizationId}/agencies/{agencyId} | |

# **create17**
> ApiResponsePointOfInterestResponse create17(createPointOfInterestRequest)


### Example

```typescript
import {
    PointOfInterestControllerApi,
    Configuration,
    CreatePointOfInterestRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PointOfInterestControllerApi(configuration);

let createPointOfInterestRequest: CreatePointOfInterestRequest; //

const { status, data } = await apiInstance.create17(
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

# **listByAgency**
> ApiResponseListPointOfInterestResponse listByAgency()


### Example

```typescript
import {
    PointOfInterestControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PointOfInterestControllerApi(configuration);

let organizationId: string; // (default to undefined)
let agencyId: string; // (default to undefined)

const { status, data } = await apiInstance.listByAgency(
    organizationId,
    agencyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **agencyId** | [**string**] |  | defaults to undefined|


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

