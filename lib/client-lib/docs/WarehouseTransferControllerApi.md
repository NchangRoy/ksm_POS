# WarehouseTransferControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**complete**](#complete) | **POST** /api/inventory/transfers/{transferId}/complete | |
|[**create19**](#create19) | **POST** /api/inventory/transfers | |
|[**list15**](#list15) | **GET** /api/inventory/transfers | |

# **complete**
> ApiResponseWarehouseTransferResponse complete()


### Example

```typescript
import {
    WarehouseTransferControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WarehouseTransferControllerApi(configuration);

let transferId: string; // (default to undefined)

const { status, data } = await apiInstance.complete(
    transferId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transferId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseWarehouseTransferResponse**

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

# **create19**
> ApiResponseWarehouseTransferResponse create19(createWarehouseTransferRequest)


### Example

```typescript
import {
    WarehouseTransferControllerApi,
    Configuration,
    CreateWarehouseTransferRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WarehouseTransferControllerApi(configuration);

let createWarehouseTransferRequest: CreateWarehouseTransferRequest; //

const { status, data } = await apiInstance.create19(
    createWarehouseTransferRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createWarehouseTransferRequest** | **CreateWarehouseTransferRequest**|  | |


### Return type

**ApiResponseWarehouseTransferResponse**

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

# **list15**
> ApiResponseListWarehouseTransferResponse list15()


### Example

```typescript
import {
    WarehouseTransferControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WarehouseTransferControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.list15(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListWarehouseTransferResponse**

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

