# RhKpiControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create9**](#create9) | **POST** /api/v1/hrm/kpi | |
|[**get7**](#get7) | **GET** /api/v1/hrm/kpi/{id} | |
|[**list9**](#list9) | **GET** /api/v1/hrm/kpi | |

# **create9**
> ApiResponseRhKpiSnapshotResponse create9(createRhKpiSnapshotRequest)


### Example

```typescript
import {
    RhKpiControllerApi,
    Configuration,
    CreateRhKpiSnapshotRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new RhKpiControllerApi(configuration);

let createRhKpiSnapshotRequest: CreateRhKpiSnapshotRequest; //

const { status, data } = await apiInstance.create9(
    createRhKpiSnapshotRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createRhKpiSnapshotRequest** | **CreateRhKpiSnapshotRequest**|  | |


### Return type

**ApiResponseRhKpiSnapshotResponse**

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

# **get7**
> ApiResponseRhKpiSnapshotResponse get7()


### Example

```typescript
import {
    RhKpiControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RhKpiControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.get7(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseRhKpiSnapshotResponse**

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

# **list9**
> ApiResponseListRhKpiSnapshotResponse list9()


### Example

```typescript
import {
    RhKpiControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RhKpiControllerApi(configuration);

let orgId: string; // (default to undefined)

const { status, data } = await apiInstance.list9(
    orgId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orgId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListRhKpiSnapshotResponse**

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

