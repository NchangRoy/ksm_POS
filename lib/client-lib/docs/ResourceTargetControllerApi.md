# ResourceTargetControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**listActorAssignments**](#listactorassignments) | **GET** /api/actors/{actorId}/resources/assignments | |
|[**listActorReservations**](#listactorreservations) | **GET** /api/actors/{actorId}/resources/reservations | |
|[**listAgencyAssignments**](#listagencyassignments) | **GET** /api/agencies/{agencyId}/resources/assignments | |
|[**listAgencyReservations**](#listagencyreservations) | **GET** /api/agencies/{agencyId}/resources/reservations | |
|[**listOrganizationAssignments**](#listorganizationassignments) | **GET** /api/organizations/{organizationId}/resources/assignments | |
|[**listOrganizationReservations**](#listorganizationreservations) | **GET** /api/organizations/{organizationId}/resources/reservations | |
|[**listPhysicalSpaceAssignments**](#listphysicalspaceassignments) | **GET** /api/physical-spaces/{spaceId}/resources/assignments | |
|[**listPhysicalSpaceReservations**](#listphysicalspacereservations) | **GET** /api/physical-spaces/{spaceId}/resources/reservations | |

# **listActorAssignments**
> ApiResponseListResourceAssignmentResponse listActorAssignments()


### Example

```typescript
import {
    ResourceTargetControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ResourceTargetControllerApi(configuration);

let actorId: string; // (default to undefined)

const { status, data } = await apiInstance.listActorAssignments(
    actorId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **actorId** | [**string**] |  | defaults to undefined|


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

# **listActorReservations**
> ApiResponseListResourceReservationResponse listActorReservations()


### Example

```typescript
import {
    ResourceTargetControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ResourceTargetControllerApi(configuration);

let actorId: string; // (default to undefined)

const { status, data } = await apiInstance.listActorReservations(
    actorId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **actorId** | [**string**] |  | defaults to undefined|


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

# **listAgencyAssignments**
> ApiResponseListResourceAssignmentResponse listAgencyAssignments()


### Example

```typescript
import {
    ResourceTargetControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ResourceTargetControllerApi(configuration);

let agencyId: string; // (default to undefined)

const { status, data } = await apiInstance.listAgencyAssignments(
    agencyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **agencyId** | [**string**] |  | defaults to undefined|


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

# **listAgencyReservations**
> ApiResponseListResourceReservationResponse listAgencyReservations()


### Example

```typescript
import {
    ResourceTargetControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ResourceTargetControllerApi(configuration);

let agencyId: string; // (default to undefined)

const { status, data } = await apiInstance.listAgencyReservations(
    agencyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **agencyId** | [**string**] |  | defaults to undefined|


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

# **listOrganizationAssignments**
> ApiResponseListResourceAssignmentResponse listOrganizationAssignments()


### Example

```typescript
import {
    ResourceTargetControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ResourceTargetControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.listOrganizationAssignments(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


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

# **listOrganizationReservations**
> ApiResponseListResourceReservationResponse listOrganizationReservations()


### Example

```typescript
import {
    ResourceTargetControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ResourceTargetControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.listOrganizationReservations(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


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

# **listPhysicalSpaceAssignments**
> ApiResponseListResourceAssignmentResponse listPhysicalSpaceAssignments()


### Example

```typescript
import {
    ResourceTargetControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ResourceTargetControllerApi(configuration);

let spaceId: string; // (default to undefined)

const { status, data } = await apiInstance.listPhysicalSpaceAssignments(
    spaceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **spaceId** | [**string**] |  | defaults to undefined|


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

# **listPhysicalSpaceReservations**
> ApiResponseListResourceReservationResponse listPhysicalSpaceReservations()


### Example

```typescript
import {
    ResourceTargetControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ResourceTargetControllerApi(configuration);

let spaceId: string; // (default to undefined)

const { status, data } = await apiInstance.listPhysicalSpaceReservations(
    spaceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **spaceId** | [**string**] |  | defaults to undefined|


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

