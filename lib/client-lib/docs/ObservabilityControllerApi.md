# ObservabilityControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**listOutboxEvents**](#listoutboxevents) | **GET** /api/observability/outbox/events | |
|[**listProjections**](#listprojections) | **GET** /api/observability/projections | |
|[**runtime**](#runtime) | **GET** /api/observability/runtime | |
|[**summarizeOutbox**](#summarizeoutbox) | **GET** /api/observability/outbox/summary | |
|[**summarizeProjections**](#summarizeprojections) | **GET** /api/observability/projections/summary | |

# **listOutboxEvents**
> ApiResponse listOutboxEvents()


### Example

```typescript
import {
    ObservabilityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ObservabilityControllerApi(configuration);

let tenantId: string; // (default to undefined)
let status: string; // (optional) (default to undefined)
let limit: number; // (optional) (default to 100)

const { status, data } = await apiInstance.listOutboxEvents(
    tenantId,
    status,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **status** | [**string**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to 100|


### Return type

**ApiResponse**

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

# **listProjections**
> ApiResponse listProjections()


### Example

```typescript
import {
    ObservabilityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ObservabilityControllerApi(configuration);

let tenantId: string; // (default to undefined)
let domainType: string; // (optional) (default to undefined)
let limit: number; // (optional) (default to 100)

const { status, data } = await apiInstance.listProjections(
    tenantId,
    domainType,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|
| **domainType** | [**string**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to 100|


### Return type

**ApiResponse**

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

# **runtime**
> ApiResponse runtime()


### Example

```typescript
import {
    ObservabilityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ObservabilityControllerApi(configuration);

const { status, data } = await apiInstance.runtime();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponse**

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

# **summarizeOutbox**
> ApiResponse summarizeOutbox()


### Example

```typescript
import {
    ObservabilityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ObservabilityControllerApi(configuration);

let tenantId: string; // (default to undefined)

const { status, data } = await apiInstance.summarizeOutbox(
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponse**

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

# **summarizeProjections**
> ApiResponse summarizeProjections()


### Example

```typescript
import {
    ObservabilityControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ObservabilityControllerApi(configuration);

let tenantId: string; // (default to undefined)

const { status, data } = await apiInstance.summarizeProjections(
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponse**

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

