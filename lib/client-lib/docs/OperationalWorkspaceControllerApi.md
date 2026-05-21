# OperationalWorkspaceControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**agencyInventory**](#agencyinventory) | **GET** /api/organizations/{organizationId}/agencies/{agencyId}/generalized-inventory | |
|[**agencyOperationalSite**](#agencyoperationalsite) | **GET** /api/organizations/{organizationId}/agencies/{agencyId}/operational-site | |
|[**organizationInventory**](#organizationinventory) | **GET** /api/organizations/{organizationId}/generalized-inventory | |
|[**serviceWorkspace**](#serviceworkspace) | **GET** /api/organizations/{organizationId}/service-workspaces/{workspaceCode} | |
|[**warehouseInventory**](#warehouseinventory) | **GET** /api/warehouses/{warehouseId}/generalized-inventory | |
|[**warehouseOperationalSite**](#warehouseoperationalsite) | **GET** /api/warehouses/{warehouseId}/operational-site | |

# **agencyInventory**
> ApiResponseGeneralizedInventoryView agencyInventory()


### Example

```typescript
import {
    OperationalWorkspaceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationalWorkspaceControllerApi(configuration);

let organizationId: string; // (default to undefined)
let agencyId: string; // (default to undefined)

const { status, data } = await apiInstance.agencyInventory(
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

**ApiResponseGeneralizedInventoryView**

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

# **agencyOperationalSite**
> ApiResponseOperationalSiteView agencyOperationalSite()


### Example

```typescript
import {
    OperationalWorkspaceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationalWorkspaceControllerApi(configuration);

let organizationId: string; // (default to undefined)
let agencyId: string; // (default to undefined)

const { status, data } = await apiInstance.agencyOperationalSite(
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

**ApiResponseOperationalSiteView**

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

# **organizationInventory**
> ApiResponseGeneralizedInventoryView organizationInventory()


### Example

```typescript
import {
    OperationalWorkspaceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationalWorkspaceControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.organizationInventory(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseGeneralizedInventoryView**

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

# **serviceWorkspace**
> ApiResponseServiceWorkspaceView serviceWorkspace()


### Example

```typescript
import {
    OperationalWorkspaceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationalWorkspaceControllerApi(configuration);

let organizationId: string; // (default to undefined)
let workspaceCode: string; // (default to undefined)

const { status, data } = await apiInstance.serviceWorkspace(
    organizationId,
    workspaceCode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **workspaceCode** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseServiceWorkspaceView**

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

# **warehouseInventory**
> ApiResponseGeneralizedInventoryView warehouseInventory()


### Example

```typescript
import {
    OperationalWorkspaceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationalWorkspaceControllerApi(configuration);

let warehouseId: string; // (default to undefined)

const { status, data } = await apiInstance.warehouseInventory(
    warehouseId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **warehouseId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseGeneralizedInventoryView**

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

# **warehouseOperationalSite**
> ApiResponseOperationalSiteView warehouseOperationalSite()


### Example

```typescript
import {
    OperationalWorkspaceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationalWorkspaceControllerApi(configuration);

let warehouseId: string; // (default to undefined)

const { status, data } = await apiInstance.warehouseOperationalSite(
    warehouseId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **warehouseId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseOperationalSiteView**

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

