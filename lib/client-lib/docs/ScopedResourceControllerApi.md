# ScopedResourceControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**listAgencyResources**](#listagencyresources) | **GET** /api/organizations/{organizationId}/agencies/{agencyId}/resources | |
|[**listOrganizationResources**](#listorganizationresources) | **GET** /api/organizations/{organizationId}/resources | |
|[**listWarehouseResources**](#listwarehouseresources) | **GET** /api/warehouses/{warehouseId}/resources | |
|[**registerAgencyResource**](#registeragencyresource) | **POST** /api/organizations/{organizationId}/agencies/{agencyId}/resources | |
|[**registerOrganizationResource**](#registerorganizationresource) | **POST** /api/organizations/{organizationId}/resources | |
|[**registerWarehouseResource**](#registerwarehouseresource) | **POST** /api/warehouses/{warehouseId}/resources | |
|[**searchAgencyResources**](#searchagencyresources) | **GET** /api/organizations/{organizationId}/agencies/{agencyId}/resources/search | |
|[**searchOrganizationResources**](#searchorganizationresources) | **GET** /api/organizations/{organizationId}/resources/search | |
|[**searchWarehouseResources**](#searchwarehouseresources) | **GET** /api/warehouses/{warehouseId}/resources/search | |

# **listAgencyResources**
> ApiResponseListMaterialResourceResponse listAgencyResources()


### Example

```typescript
import {
    ScopedResourceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ScopedResourceControllerApi(configuration);

let organizationId: string; // (default to undefined)
let agencyId: string; // (default to undefined)
let category: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listAgencyResources(
    organizationId,
    agencyId,
    category,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **agencyId** | [**string**] |  | defaults to undefined|
| **category** | [**string**] |  | (optional) defaults to undefined|
| **status** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ApiResponseListMaterialResourceResponse**

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

# **listOrganizationResources**
> ApiResponseListMaterialResourceResponse listOrganizationResources()


### Example

```typescript
import {
    ScopedResourceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ScopedResourceControllerApi(configuration);

let organizationId: string; // (default to undefined)
let category: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listOrganizationResources(
    organizationId,
    category,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **category** | [**string**] |  | (optional) defaults to undefined|
| **status** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ApiResponseListMaterialResourceResponse**

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

# **listWarehouseResources**
> ApiResponseListMaterialResourceResponse listWarehouseResources()


### Example

```typescript
import {
    ScopedResourceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ScopedResourceControllerApi(configuration);

let warehouseId: string; // (default to undefined)
let category: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listWarehouseResources(
    warehouseId,
    category,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **warehouseId** | [**string**] |  | defaults to undefined|
| **category** | [**string**] |  | (optional) defaults to undefined|
| **status** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ApiResponseListMaterialResourceResponse**

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

# **registerAgencyResource**
> ApiResponseMaterialResourceResponse registerAgencyResource(agencyScopedResourceRequest)


### Example

```typescript
import {
    ScopedResourceControllerApi,
    Configuration,
    AgencyScopedResourceRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ScopedResourceControllerApi(configuration);

let organizationId: string; // (default to undefined)
let agencyId: string; // (default to undefined)
let agencyScopedResourceRequest: AgencyScopedResourceRequest; //

const { status, data } = await apiInstance.registerAgencyResource(
    organizationId,
    agencyId,
    agencyScopedResourceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **agencyScopedResourceRequest** | **AgencyScopedResourceRequest**|  | |
| **organizationId** | [**string**] |  | defaults to undefined|
| **agencyId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseMaterialResourceResponse**

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

# **registerOrganizationResource**
> ApiResponseMaterialResourceResponse registerOrganizationResource(organizationScopedResourceRequest)


### Example

```typescript
import {
    ScopedResourceControllerApi,
    Configuration,
    OrganizationScopedResourceRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ScopedResourceControllerApi(configuration);

let organizationId: string; // (default to undefined)
let organizationScopedResourceRequest: OrganizationScopedResourceRequest; //

const { status, data } = await apiInstance.registerOrganizationResource(
    organizationId,
    organizationScopedResourceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationScopedResourceRequest** | **OrganizationScopedResourceRequest**|  | |
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseMaterialResourceResponse**

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

# **registerWarehouseResource**
> ApiResponseMaterialResourceResponse registerWarehouseResource(warehouseScopedResourceRequest)


### Example

```typescript
import {
    ScopedResourceControllerApi,
    Configuration,
    WarehouseScopedResourceRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ScopedResourceControllerApi(configuration);

let warehouseId: string; // (default to undefined)
let warehouseScopedResourceRequest: WarehouseScopedResourceRequest; //

const { status, data } = await apiInstance.registerWarehouseResource(
    warehouseId,
    warehouseScopedResourceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **warehouseScopedResourceRequest** | **WarehouseScopedResourceRequest**|  | |
| **warehouseId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseMaterialResourceResponse**

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

# **searchAgencyResources**
> ApiResponseListMaterialResourceSearchResponse searchAgencyResources()


### Example

```typescript
import {
    ScopedResourceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ScopedResourceControllerApi(configuration);

let organizationId: string; // (default to undefined)
let agencyId: string; // (default to undefined)
let q: string; // (default to undefined)
let category: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.searchAgencyResources(
    organizationId,
    agencyId,
    q,
    category,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **agencyId** | [**string**] |  | defaults to undefined|
| **q** | [**string**] |  | defaults to undefined|
| **category** | [**string**] |  | (optional) defaults to undefined|
| **status** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ApiResponseListMaterialResourceSearchResponse**

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

# **searchOrganizationResources**
> ApiResponseListMaterialResourceSearchResponse searchOrganizationResources()


### Example

```typescript
import {
    ScopedResourceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ScopedResourceControllerApi(configuration);

let organizationId: string; // (default to undefined)
let q: string; // (default to undefined)
let category: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.searchOrganizationResources(
    organizationId,
    q,
    category,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **q** | [**string**] |  | defaults to undefined|
| **category** | [**string**] |  | (optional) defaults to undefined|
| **status** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ApiResponseListMaterialResourceSearchResponse**

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

# **searchWarehouseResources**
> ApiResponseListMaterialResourceSearchResponse searchWarehouseResources()


### Example

```typescript
import {
    ScopedResourceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ScopedResourceControllerApi(configuration);

let warehouseId: string; // (default to undefined)
let q: string; // (default to undefined)
let category: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.searchWarehouseResources(
    warehouseId,
    q,
    category,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **warehouseId** | [**string**] |  | defaults to undefined|
| **q** | [**string**] |  | defaults to undefined|
| **category** | [**string**] |  | (optional) defaults to undefined|
| **status** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ApiResponseListMaterialResourceSearchResponse**

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

