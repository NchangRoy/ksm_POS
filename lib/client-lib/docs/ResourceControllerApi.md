# ResourceControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**assignResource**](#assignresource) | **POST** /api/resources/{resourceId}/assignments | |
|[**disposeResource**](#disposeresource) | **POST** /api/resources/{resourceId}/dispose | |
|[**getResource**](#getresource) | **GET** /api/resources/{resourceId} | |
|[**listAssignments**](#listassignments) | **GET** /api/resources/{resourceId}/assignments | |
|[**listLocationObservations**](#listlocationobservations) | **GET** /api/resources/{resourceId}/location-observations | |
|[**listMaintenance**](#listmaintenance) | **GET** /api/resources/{resourceId}/maintenance | |
|[**listNetworkObservations**](#listnetworkobservations) | **GET** /api/resources/{resourceId}/network-observations | |
|[**listReservations**](#listreservations) | **GET** /api/resources/{resourceId}/reservations | |
|[**listResources**](#listresources) | **GET** /api/resources | |
|[**recordLocationObservation**](#recordlocationobservation) | **POST** /api/resources/{resourceId}/location-observations | |
|[**recordMaintenance**](#recordmaintenance) | **POST** /api/resources/{resourceId}/maintenance | |
|[**recordNetworkObservation**](#recordnetworkobservation) | **POST** /api/resources/{resourceId}/network-observations | |
|[**registerResource**](#registerresource) | **POST** /api/resources | |
|[**releaseReservation**](#releasereservation) | **POST** /api/resources/{resourceId}/reservations/{reservationId}/release | |
|[**reserveResource**](#reserveresource) | **POST** /api/resources/{resourceId}/reservations | |
|[**searchResources**](#searchresources) | **GET** /api/resources/search | |
|[**unassignResource**](#unassignresource) | **POST** /api/resources/{resourceId}/unassign | |

# **assignResource**
> ApiResponseMaterialResourceResponse assignResource(assignMaterialResourceRequest)


### Example

```typescript
import {
    ResourceControllerApi,
    Configuration,
    AssignMaterialResourceRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ResourceControllerApi(configuration);

let resourceId: string; // (default to undefined)
let assignMaterialResourceRequest: AssignMaterialResourceRequest; //

const { status, data } = await apiInstance.assignResource(
    resourceId,
    assignMaterialResourceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assignMaterialResourceRequest** | **AssignMaterialResourceRequest**|  | |
| **resourceId** | [**string**] |  | defaults to undefined|


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

# **disposeResource**
> ApiResponseMaterialResourceResponse disposeResource()


### Example

```typescript
import {
    ResourceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ResourceControllerApi(configuration);

let resourceId: string; // (default to undefined)

const { status, data } = await apiInstance.disposeResource(
    resourceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resourceId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseMaterialResourceResponse**

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

# **getResource**
> ApiResponseMaterialResourceResponse getResource()


### Example

```typescript
import {
    ResourceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ResourceControllerApi(configuration);

let resourceId: string; // (default to undefined)

const { status, data } = await apiInstance.getResource(
    resourceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resourceId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseMaterialResourceResponse**

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

# **listAssignments**
> ApiResponseListResourceAssignmentResponse listAssignments()


### Example

```typescript
import {
    ResourceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ResourceControllerApi(configuration);

let resourceId: string; // (default to undefined)

const { status, data } = await apiInstance.listAssignments(
    resourceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resourceId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListResourceAssignmentResponse**

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

# **listLocationObservations**
> ApiResponseListResourceLocationObservationResponse listLocationObservations()


### Example

```typescript
import {
    ResourceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ResourceControllerApi(configuration);

let resourceId: string; // (default to undefined)

const { status, data } = await apiInstance.listLocationObservations(
    resourceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resourceId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListResourceLocationObservationResponse**

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

# **listMaintenance**
> ApiResponseListMaintenanceRecordResponse listMaintenance()


### Example

```typescript
import {
    ResourceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ResourceControllerApi(configuration);

let resourceId: string; // (default to undefined)

const { status, data } = await apiInstance.listMaintenance(
    resourceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resourceId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListMaintenanceRecordResponse**

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

# **listNetworkObservations**
> ApiResponseListResourceNetworkObservationResponse listNetworkObservations()


### Example

```typescript
import {
    ResourceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ResourceControllerApi(configuration);

let resourceId: string; // (default to undefined)

const { status, data } = await apiInstance.listNetworkObservations(
    resourceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resourceId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListResourceNetworkObservationResponse**

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

# **listReservations**
> ApiResponseListResourceReservationResponse listReservations()


### Example

```typescript
import {
    ResourceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ResourceControllerApi(configuration);

let resourceId: string; // (default to undefined)

const { status, data } = await apiInstance.listReservations(
    resourceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resourceId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListResourceReservationResponse**

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

# **listResources**
> ApiResponseListMaterialResourceResponse listResources()


### Example

```typescript
import {
    ResourceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ResourceControllerApi(configuration);

let organizationId: string; // (default to undefined)
let agencyId: string; // (optional) (default to undefined)
let category: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listResources(
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
| **agencyId** | [**string**] |  | (optional) defaults to undefined|
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

# **recordLocationObservation**
> ApiResponseResourceLocationObservationResponse recordLocationObservation(recordLocationObservationRequest)


### Example

```typescript
import {
    ResourceControllerApi,
    Configuration,
    RecordLocationObservationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ResourceControllerApi(configuration);

let resourceId: string; // (default to undefined)
let recordLocationObservationRequest: RecordLocationObservationRequest; //

const { status, data } = await apiInstance.recordLocationObservation(
    resourceId,
    recordLocationObservationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordLocationObservationRequest** | **RecordLocationObservationRequest**|  | |
| **resourceId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseResourceLocationObservationResponse**

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

# **recordMaintenance**
> ApiResponseMaterialResourceResponse recordMaintenance(recordMaintenanceRequest)


### Example

```typescript
import {
    ResourceControllerApi,
    Configuration,
    RecordMaintenanceRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ResourceControllerApi(configuration);

let resourceId: string; // (default to undefined)
let recordMaintenanceRequest: RecordMaintenanceRequest; //

const { status, data } = await apiInstance.recordMaintenance(
    resourceId,
    recordMaintenanceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordMaintenanceRequest** | **RecordMaintenanceRequest**|  | |
| **resourceId** | [**string**] |  | defaults to undefined|


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

# **recordNetworkObservation**
> ApiResponseResourceNetworkObservationResponse recordNetworkObservation(recordNetworkObservationRequest)


### Example

```typescript
import {
    ResourceControllerApi,
    Configuration,
    RecordNetworkObservationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ResourceControllerApi(configuration);

let resourceId: string; // (default to undefined)
let recordNetworkObservationRequest: RecordNetworkObservationRequest; //

const { status, data } = await apiInstance.recordNetworkObservation(
    resourceId,
    recordNetworkObservationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordNetworkObservationRequest** | **RecordNetworkObservationRequest**|  | |
| **resourceId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseResourceNetworkObservationResponse**

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

# **registerResource**
> ApiResponseMaterialResourceResponse registerResource(registerMaterialResourceRequest)


### Example

```typescript
import {
    ResourceControllerApi,
    Configuration,
    RegisterMaterialResourceRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ResourceControllerApi(configuration);

let registerMaterialResourceRequest: RegisterMaterialResourceRequest; //

const { status, data } = await apiInstance.registerResource(
    registerMaterialResourceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerMaterialResourceRequest** | **RegisterMaterialResourceRequest**|  | |


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

# **releaseReservation**
> ApiResponseMaterialResourceResponse releaseReservation()


### Example

```typescript
import {
    ResourceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ResourceControllerApi(configuration);

let resourceId: string; // (default to undefined)
let reservationId: string; // (default to undefined)

const { status, data } = await apiInstance.releaseReservation(
    resourceId,
    reservationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resourceId** | [**string**] |  | defaults to undefined|
| **reservationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseMaterialResourceResponse**

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

# **reserveResource**
> ApiResponseMaterialResourceResponse reserveResource(reserveMaterialResourceRequest)


### Example

```typescript
import {
    ResourceControllerApi,
    Configuration,
    ReserveMaterialResourceRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ResourceControllerApi(configuration);

let resourceId: string; // (default to undefined)
let reserveMaterialResourceRequest: ReserveMaterialResourceRequest; //

const { status, data } = await apiInstance.reserveResource(
    resourceId,
    reserveMaterialResourceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reserveMaterialResourceRequest** | **ReserveMaterialResourceRequest**|  | |
| **resourceId** | [**string**] |  | defaults to undefined|


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

# **searchResources**
> ApiResponseListMaterialResourceSearchResponse searchResources()


### Example

```typescript
import {
    ResourceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ResourceControllerApi(configuration);

let organizationId: string; // (default to undefined)
let q: string; // (default to undefined)
let agencyId: string; // (optional) (default to undefined)
let category: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.searchResources(
    organizationId,
    q,
    agencyId,
    category,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **q** | [**string**] |  | defaults to undefined|
| **agencyId** | [**string**] |  | (optional) defaults to undefined|
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

# **unassignResource**
> ApiResponseMaterialResourceResponse unassignResource()


### Example

```typescript
import {
    ResourceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ResourceControllerApi(configuration);

let resourceId: string; // (default to undefined)

const { status, data } = await apiInstance.unassignResource(
    resourceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resourceId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseMaterialResourceResponse**

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

