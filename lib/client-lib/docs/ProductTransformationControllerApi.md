# ProductTransformationControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create18**](#create18) | **POST** /api/inventory/transformations | |
|[**list14**](#list14) | **GET** /api/inventory/transformations | |
|[**validate2**](#validate2) | **POST** /api/inventory/transformations/{transformationId}/validate | |

# **create18**
> ApiResponseProductTransformationResponse create18(recordTransformationRequest)


### Example

```typescript
import {
    ProductTransformationControllerApi,
    Configuration,
    RecordTransformationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductTransformationControllerApi(configuration);

let recordTransformationRequest: RecordTransformationRequest; //

const { status, data } = await apiInstance.create18(
    recordTransformationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordTransformationRequest** | **RecordTransformationRequest**|  | |


### Return type

**ApiResponseProductTransformationResponse**

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

# **list14**
> ApiResponseListProductTransformationResponse list14()


### Example

```typescript
import {
    ProductTransformationControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductTransformationControllerApi(configuration);

let organizationId: string; // (default to undefined)
let agencyId: string; // (default to undefined)

const { status, data } = await apiInstance.list14(
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

**ApiResponseListProductTransformationResponse**

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

# **validate2**
> ApiResponseProductTransformationResponse validate2()


### Example

```typescript
import {
    ProductTransformationControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductTransformationControllerApi(configuration);

let transformationId: string; // (default to undefined)

const { status, data } = await apiInstance.validate2(
    transformationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transformationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseProductTransformationResponse**

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

