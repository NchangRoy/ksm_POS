# PhysicalSpaceControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create16**](#create16) | **POST** /api/organizations/{organizationId}/agencies/{agencyId}/physical-spaces | |
|[**list13**](#list13) | **GET** /api/organizations/{organizationId}/agencies/{agencyId}/physical-spaces | |
|[**tree**](#tree) | **GET** /api/organizations/{organizationId}/agencies/{agencyId}/physical-spaces/tree | |

# **create16**
> ApiResponsePhysicalSpaceResponse create16(createPhysicalSpaceRequest)


### Example

```typescript
import {
    PhysicalSpaceControllerApi,
    Configuration,
    CreatePhysicalSpaceRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PhysicalSpaceControllerApi(configuration);

let organizationId: string; // (default to undefined)
let agencyId: string; // (default to undefined)
let createPhysicalSpaceRequest: CreatePhysicalSpaceRequest; //

const { status, data } = await apiInstance.create16(
    organizationId,
    agencyId,
    createPhysicalSpaceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPhysicalSpaceRequest** | **CreatePhysicalSpaceRequest**|  | |
| **organizationId** | [**string**] |  | defaults to undefined|
| **agencyId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponsePhysicalSpaceResponse**

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

# **list13**
> ApiResponseListPhysicalSpaceResponse list13()


### Example

```typescript
import {
    PhysicalSpaceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PhysicalSpaceControllerApi(configuration);

let organizationId: string; // (default to undefined)
let agencyId: string; // (default to undefined)

const { status, data } = await apiInstance.list13(
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

**ApiResponseListPhysicalSpaceResponse**

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

# **tree**
> ApiResponseListPhysicalSpaceResponse tree()


### Example

```typescript
import {
    PhysicalSpaceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PhysicalSpaceControllerApi(configuration);

let organizationId: string; // (default to undefined)
let agencyId: string; // (default to undefined)

const { status, data } = await apiInstance.tree(
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

**ApiResponseListPhysicalSpaceResponse**

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

