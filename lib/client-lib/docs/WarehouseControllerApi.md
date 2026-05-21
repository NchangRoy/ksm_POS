# WarehouseControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createWarehouse**](#createwarehouse) | **POST** /api/warehouses | |
|[**deleteWarehouse**](#deletewarehouse) | **DELETE** /api/warehouses/{warehouseId} | |
|[**listWarehouses**](#listwarehouses) | **GET** /api/warehouses | |
|[**updateWarehouse**](#updatewarehouse) | **PATCH** /api/warehouses/{warehouseId} | |

# **createWarehouse**
> ApiResponseAgencyResponse createWarehouse(createAgencyRequest)


### Example

```typescript
import {
    WarehouseControllerApi,
    Configuration,
    CreateAgencyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WarehouseControllerApi(configuration);

let createAgencyRequest: CreateAgencyRequest; //

const { status, data } = await apiInstance.createWarehouse(
    createAgencyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAgencyRequest** | **CreateAgencyRequest**|  | |


### Return type

**ApiResponseAgencyResponse**

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

# **deleteWarehouse**
> ApiResponseVoid deleteWarehouse()


### Example

```typescript
import {
    WarehouseControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WarehouseControllerApi(configuration);

let warehouseId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteWarehouse(
    warehouseId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **warehouseId** | [**string**] |  | defaults to undefined|


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

# **listWarehouses**
> ApiResponseListAgencyResponse listWarehouses()


### Example

```typescript
import {
    WarehouseControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WarehouseControllerApi(configuration);

const { status, data } = await apiInstance.listWarehouses();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseListAgencyResponse**

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

# **updateWarehouse**
> ApiResponseAgencyResponse updateWarehouse(updateWarehouseRequest)


### Example

```typescript
import {
    WarehouseControllerApi,
    Configuration,
    UpdateWarehouseRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new WarehouseControllerApi(configuration);

let warehouseId: string; // (default to undefined)
let updateWarehouseRequest: UpdateWarehouseRequest; //

const { status, data } = await apiInstance.updateWarehouse(
    warehouseId,
    updateWarehouseRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateWarehouseRequest** | **UpdateWarehouseRequest**|  | |
| **warehouseId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseAgencyResponse**

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

