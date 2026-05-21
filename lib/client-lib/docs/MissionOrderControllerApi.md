# MissionOrderControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**approveMissionOrder**](#approvemissionorder) | **PUT** /api/v1/hrm/mission-orders/{id}/approve | |
|[**cancelMissionOrder**](#cancelmissionorder) | **PUT** /api/v1/hrm/mission-orders/{id}/cancel | |
|[**completeMissionOrder**](#completemissionorder) | **PUT** /api/v1/hrm/mission-orders/{id}/complete | |
|[**createMissionOrder**](#createmissionorder) | **POST** /api/v1/hrm/mission-orders | |
|[**getMissionOrder**](#getmissionorder) | **GET** /api/v1/hrm/mission-orders/{id} | |
|[**listMissionOrders**](#listmissionorders) | **GET** /api/v1/hrm/mission-orders | |
|[**startMissionOrder**](#startmissionorder) | **PUT** /api/v1/hrm/mission-orders/{id}/start | |

# **approveMissionOrder**
> ApiResponseMissionOrderResponse approveMissionOrder()


### Example

```typescript
import {
    MissionOrderControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MissionOrderControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.approveMissionOrder(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseMissionOrderResponse**

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

# **cancelMissionOrder**
> ApiResponseMissionOrderResponse cancelMissionOrder()


### Example

```typescript
import {
    MissionOrderControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MissionOrderControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.cancelMissionOrder(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseMissionOrderResponse**

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

# **completeMissionOrder**
> ApiResponseMissionOrderResponse completeMissionOrder()


### Example

```typescript
import {
    MissionOrderControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MissionOrderControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.completeMissionOrder(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseMissionOrderResponse**

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

# **createMissionOrder**
> ApiResponseMissionOrderResponse createMissionOrder(createMissionOrderRequest)


### Example

```typescript
import {
    MissionOrderControllerApi,
    Configuration,
    CreateMissionOrderRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new MissionOrderControllerApi(configuration);

let createMissionOrderRequest: CreateMissionOrderRequest; //

const { status, data } = await apiInstance.createMissionOrder(
    createMissionOrderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createMissionOrderRequest** | **CreateMissionOrderRequest**|  | |


### Return type

**ApiResponseMissionOrderResponse**

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

# **getMissionOrder**
> ApiResponseMissionOrderResponse getMissionOrder()


### Example

```typescript
import {
    MissionOrderControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MissionOrderControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getMissionOrder(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseMissionOrderResponse**

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

# **listMissionOrders**
> ApiResponseListMissionOrderResponse listMissionOrders()


### Example

```typescript
import {
    MissionOrderControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MissionOrderControllerApi(configuration);

let employeeId: string; // (default to undefined)

const { status, data } = await apiInstance.listMissionOrders(
    employeeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **employeeId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListMissionOrderResponse**

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

# **startMissionOrder**
> ApiResponseMissionOrderResponse startMissionOrder()


### Example

```typescript
import {
    MissionOrderControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MissionOrderControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.startMissionOrder(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseMissionOrderResponse**

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

