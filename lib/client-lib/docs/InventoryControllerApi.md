# InventoryControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getBalance**](#getbalance) | **GET** /api/inventory/movements/balance | |
|[**getMovement**](#getmovement) | **GET** /api/inventory/movements/{movementId} | |
|[**listMovements**](#listmovements) | **GET** /api/inventory/movements | |
|[**recordMovement**](#recordmovement) | **POST** /api/inventory/movements | |
|[**validateMovement**](#validatemovement) | **POST** /api/inventory/movements/{movementId}/validate | |

# **getBalance**
> ApiResponseStockBalanceResponse getBalance()


### Example

```typescript
import {
    InventoryControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InventoryControllerApi(configuration);

let organizationId: string; // (default to undefined)
let agencyId: string; // (default to undefined)
let productId: string; // (default to undefined)

const { status, data } = await apiInstance.getBalance(
    organizationId,
    agencyId,
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **agencyId** | [**string**] |  | defaults to undefined|
| **productId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseStockBalanceResponse**

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

# **getMovement**
> ApiResponseStockMovementResponse getMovement()


### Example

```typescript
import {
    InventoryControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InventoryControllerApi(configuration);

let movementId: string; // (default to undefined)

const { status, data } = await apiInstance.getMovement(
    movementId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **movementId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseStockMovementResponse**

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

# **listMovements**
> ApiResponseListStockMovementResponse listMovements()


### Example

```typescript
import {
    InventoryControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InventoryControllerApi(configuration);

let organizationId: string; // (default to undefined)
let agencyId: string; // (default to undefined)
let productId: string; // (default to undefined)

const { status, data } = await apiInstance.listMovements(
    organizationId,
    agencyId,
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **agencyId** | [**string**] |  | defaults to undefined|
| **productId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListStockMovementResponse**

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

# **recordMovement**
> ApiResponseStockMovementResponse recordMovement(recordStockMovementRequest)


### Example

```typescript
import {
    InventoryControllerApi,
    Configuration,
    RecordStockMovementRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new InventoryControllerApi(configuration);

let recordStockMovementRequest: RecordStockMovementRequest; //

const { status, data } = await apiInstance.recordMovement(
    recordStockMovementRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordStockMovementRequest** | **RecordStockMovementRequest**|  | |


### Return type

**ApiResponseStockMovementResponse**

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

# **validateMovement**
> ApiResponseStockMovementResponse validateMovement()


### Example

```typescript
import {
    InventoryControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InventoryControllerApi(configuration);

let movementId: string; // (default to undefined)

const { status, data } = await apiInstance.validateMovement(
    movementId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **movementId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseStockMovementResponse**

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

