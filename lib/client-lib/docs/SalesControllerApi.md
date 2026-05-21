# SalesControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cancelOrder**](#cancelorder) | **POST** /api/sales/orders/{orderId}/cancel | |
|[**confirmOrder**](#confirmorder) | **POST** /api/sales/orders/{orderId}/confirm | |
|[**createOrder**](#createorder) | **POST** /api/sales/orders | |
|[**deleteOrder**](#deleteorder) | **DELETE** /api/sales/orders/{orderId} | |
|[**getOrder**](#getorder) | **GET** /api/sales/orders/{orderId} | |
|[**listOrders**](#listorders) | **GET** /api/sales/orders | |
|[**updateOrder**](#updateorder) | **PATCH** /api/sales/orders/{orderId} | |

# **cancelOrder**
> ApiResponseSalesOrderResponse cancelOrder()


### Example

```typescript
import {
    SalesControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SalesControllerApi(configuration);

let orderId: string; // (default to undefined)

const { status, data } = await apiInstance.cancelOrder(
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseSalesOrderResponse**

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

# **confirmOrder**
> ApiResponseSalesOrderResponse confirmOrder()


### Example

```typescript
import {
    SalesControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SalesControllerApi(configuration);

let orderId: string; // (default to undefined)

const { status, data } = await apiInstance.confirmOrder(
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseSalesOrderResponse**

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

# **createOrder**
> ApiResponseSalesOrderResponse createOrder(createSalesOrderRequest)


### Example

```typescript
import {
    SalesControllerApi,
    Configuration,
    CreateSalesOrderRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SalesControllerApi(configuration);

let createSalesOrderRequest: CreateSalesOrderRequest; //

const { status, data } = await apiInstance.createOrder(
    createSalesOrderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createSalesOrderRequest** | **CreateSalesOrderRequest**|  | |


### Return type

**ApiResponseSalesOrderResponse**

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

# **deleteOrder**
> ApiResponseVoid deleteOrder()


### Example

```typescript
import {
    SalesControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SalesControllerApi(configuration);

let orderId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteOrder(
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderId** | [**string**] |  | defaults to undefined|


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

# **getOrder**
> ApiResponseSalesOrderResponse getOrder()


### Example

```typescript
import {
    SalesControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SalesControllerApi(configuration);

let orderId: string; // (default to undefined)

const { status, data } = await apiInstance.getOrder(
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseSalesOrderResponse**

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

# **listOrders**
> ApiResponseListSalesOrderResponse listOrders()


### Example

```typescript
import {
    SalesControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SalesControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.listOrders(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListSalesOrderResponse**

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

# **updateOrder**
> ApiResponseSalesOrderResponse updateOrder(createSalesOrderRequest)


### Example

```typescript
import {
    SalesControllerApi,
    Configuration,
    CreateSalesOrderRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SalesControllerApi(configuration);

let orderId: string; // (default to undefined)
let createSalesOrderRequest: CreateSalesOrderRequest; //

const { status, data } = await apiInstance.updateOrder(
    orderId,
    createSalesOrderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createSalesOrderRequest** | **CreateSalesOrderRequest**|  | |
| **orderId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseSalesOrderResponse**

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

