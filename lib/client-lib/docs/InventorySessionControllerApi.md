# InventorySessionControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create7**](#create7) | **POST** /api/inventory/sessions | |
|[**create8**](#create8) | **POST** /api/inventories | |
|[**list7**](#list7) | **GET** /api/inventory/sessions | |
|[**list8**](#list8) | **GET** /api/inventories | |
|[**validate**](#validate) | **POST** /api/inventory/sessions/{inventoryId}/validate | |
|[**validate1**](#validate1) | **POST** /api/inventories/{inventoryId}/validate | |

# **create7**
> ApiResponseInventorySessionResponse create7(createInventorySessionRequest)


### Example

```typescript
import {
    InventorySessionControllerApi,
    Configuration,
    CreateInventorySessionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new InventorySessionControllerApi(configuration);

let createInventorySessionRequest: CreateInventorySessionRequest; //

const { status, data } = await apiInstance.create7(
    createInventorySessionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createInventorySessionRequest** | **CreateInventorySessionRequest**|  | |


### Return type

**ApiResponseInventorySessionResponse**

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

# **create8**
> ApiResponseInventorySessionResponse create8(createInventorySessionRequest)


### Example

```typescript
import {
    InventorySessionControllerApi,
    Configuration,
    CreateInventorySessionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new InventorySessionControllerApi(configuration);

let createInventorySessionRequest: CreateInventorySessionRequest; //

const { status, data } = await apiInstance.create8(
    createInventorySessionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createInventorySessionRequest** | **CreateInventorySessionRequest**|  | |


### Return type

**ApiResponseInventorySessionResponse**

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

# **list7**
> ApiResponseListInventorySessionResponse list7()


### Example

```typescript
import {
    InventorySessionControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InventorySessionControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.list7(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListInventorySessionResponse**

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

# **list8**
> ApiResponseListInventorySessionResponse list8()


### Example

```typescript
import {
    InventorySessionControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InventorySessionControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.list8(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListInventorySessionResponse**

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

# **validate**
> ApiResponseInventorySessionResponse validate()


### Example

```typescript
import {
    InventorySessionControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InventorySessionControllerApi(configuration);

let inventoryId: string; // (default to undefined)

const { status, data } = await apiInstance.validate(
    inventoryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inventoryId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseInventorySessionResponse**

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

# **validate1**
> ApiResponseInventorySessionResponse validate1()


### Example

```typescript
import {
    InventorySessionControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new InventorySessionControllerApi(configuration);

let inventoryId: string; // (default to undefined)

const { status, data } = await apiInstance.validate1(
    inventoryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inventoryId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseInventorySessionResponse**

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

