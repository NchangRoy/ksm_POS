# GeneralOptionsControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAgencyOptions**](#getagencyoptions) | **GET** /api/general-options/api/settings/agency/{agencyId} | |
|[**getAgencyOptions1**](#getagencyoptions1) | **GET** /api/generalOptions/api/settings/agency/{agencyId} | |
|[**getGlobalOptions**](#getglobaloptions) | **GET** /api/general-options/api/settings/global | |
|[**getGlobalOptions1**](#getglobaloptions1) | **GET** /api/generalOptions/api/settings/global | |
|[**getOptions**](#getoptions) | **GET** /api/general-options | |
|[**getOptions1**](#getoptions1) | **GET** /api/generalOptions | |
|[**updateAgencyOptions**](#updateagencyoptions) | **PUT** /api/general-options/api/settings/agency/{agencyId} | |
|[**updateAgencyOptions1**](#updateagencyoptions1) | **PUT** /api/generalOptions/api/settings/agency/{agencyId} | |
|[**updateGlobalOptions**](#updateglobaloptions) | **PUT** /api/general-options/api/settings/global | |
|[**updateGlobalOptions1**](#updateglobaloptions1) | **PUT** /api/generalOptions/api/settings/global | |
|[**updateOptions**](#updateoptions) | **PUT** /api/general-options | |
|[**updateOptions1**](#updateoptions1) | **PUT** /api/generalOptions | |

# **getAgencyOptions**
> ApiResponseAppBusinessSettingsResponse getAgencyOptions()


### Example

```typescript
import {
    GeneralOptionsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GeneralOptionsControllerApi(configuration);

let agencyId: string; // (default to undefined)

const { status, data } = await apiInstance.getAgencyOptions(
    agencyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **agencyId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseAppBusinessSettingsResponse**

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

# **getAgencyOptions1**
> ApiResponseAppBusinessSettingsResponse getAgencyOptions1()


### Example

```typescript
import {
    GeneralOptionsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GeneralOptionsControllerApi(configuration);

let agencyId: string; // (default to undefined)

const { status, data } = await apiInstance.getAgencyOptions1(
    agencyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **agencyId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseAppBusinessSettingsResponse**

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

# **getGlobalOptions**
> ApiResponseAppBusinessSettingsResponse getGlobalOptions()


### Example

```typescript
import {
    GeneralOptionsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GeneralOptionsControllerApi(configuration);

const { status, data } = await apiInstance.getGlobalOptions();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseAppBusinessSettingsResponse**

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

# **getGlobalOptions1**
> ApiResponseAppBusinessSettingsResponse getGlobalOptions1()


### Example

```typescript
import {
    GeneralOptionsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GeneralOptionsControllerApi(configuration);

const { status, data } = await apiInstance.getGlobalOptions1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseAppBusinessSettingsResponse**

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

# **getOptions**
> ApiResponseAppBusinessSettingsResponse getOptions()


### Example

```typescript
import {
    GeneralOptionsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GeneralOptionsControllerApi(configuration);

const { status, data } = await apiInstance.getOptions();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseAppBusinessSettingsResponse**

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

# **getOptions1**
> ApiResponseAppBusinessSettingsResponse getOptions1()


### Example

```typescript
import {
    GeneralOptionsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GeneralOptionsControllerApi(configuration);

const { status, data } = await apiInstance.getOptions1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseAppBusinessSettingsResponse**

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

# **updateAgencyOptions**
> ApiResponseAppBusinessSettingsResponse updateAgencyOptions(updateAppBusinessSettingsRequest)


### Example

```typescript
import {
    GeneralOptionsControllerApi,
    Configuration,
    UpdateAppBusinessSettingsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GeneralOptionsControllerApi(configuration);

let agencyId: string; // (default to undefined)
let updateAppBusinessSettingsRequest: UpdateAppBusinessSettingsRequest; //

const { status, data } = await apiInstance.updateAgencyOptions(
    agencyId,
    updateAppBusinessSettingsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateAppBusinessSettingsRequest** | **UpdateAppBusinessSettingsRequest**|  | |
| **agencyId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseAppBusinessSettingsResponse**

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

# **updateAgencyOptions1**
> ApiResponseAppBusinessSettingsResponse updateAgencyOptions1(updateAppBusinessSettingsRequest)


### Example

```typescript
import {
    GeneralOptionsControllerApi,
    Configuration,
    UpdateAppBusinessSettingsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GeneralOptionsControllerApi(configuration);

let agencyId: string; // (default to undefined)
let updateAppBusinessSettingsRequest: UpdateAppBusinessSettingsRequest; //

const { status, data } = await apiInstance.updateAgencyOptions1(
    agencyId,
    updateAppBusinessSettingsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateAppBusinessSettingsRequest** | **UpdateAppBusinessSettingsRequest**|  | |
| **agencyId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseAppBusinessSettingsResponse**

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

# **updateGlobalOptions**
> ApiResponseAppBusinessSettingsResponse updateGlobalOptions(updateAppBusinessSettingsRequest)


### Example

```typescript
import {
    GeneralOptionsControllerApi,
    Configuration,
    UpdateAppBusinessSettingsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GeneralOptionsControllerApi(configuration);

let updateAppBusinessSettingsRequest: UpdateAppBusinessSettingsRequest; //

const { status, data } = await apiInstance.updateGlobalOptions(
    updateAppBusinessSettingsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateAppBusinessSettingsRequest** | **UpdateAppBusinessSettingsRequest**|  | |


### Return type

**ApiResponseAppBusinessSettingsResponse**

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

# **updateGlobalOptions1**
> ApiResponseAppBusinessSettingsResponse updateGlobalOptions1(updateAppBusinessSettingsRequest)


### Example

```typescript
import {
    GeneralOptionsControllerApi,
    Configuration,
    UpdateAppBusinessSettingsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GeneralOptionsControllerApi(configuration);

let updateAppBusinessSettingsRequest: UpdateAppBusinessSettingsRequest; //

const { status, data } = await apiInstance.updateGlobalOptions1(
    updateAppBusinessSettingsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateAppBusinessSettingsRequest** | **UpdateAppBusinessSettingsRequest**|  | |


### Return type

**ApiResponseAppBusinessSettingsResponse**

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

# **updateOptions**
> ApiResponseAppBusinessSettingsResponse updateOptions(updateAppBusinessSettingsRequest)


### Example

```typescript
import {
    GeneralOptionsControllerApi,
    Configuration,
    UpdateAppBusinessSettingsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GeneralOptionsControllerApi(configuration);

let updateAppBusinessSettingsRequest: UpdateAppBusinessSettingsRequest; //

const { status, data } = await apiInstance.updateOptions(
    updateAppBusinessSettingsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateAppBusinessSettingsRequest** | **UpdateAppBusinessSettingsRequest**|  | |


### Return type

**ApiResponseAppBusinessSettingsResponse**

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

# **updateOptions1**
> ApiResponseAppBusinessSettingsResponse updateOptions1(updateAppBusinessSettingsRequest)


### Example

```typescript
import {
    GeneralOptionsControllerApi,
    Configuration,
    UpdateAppBusinessSettingsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new GeneralOptionsControllerApi(configuration);

let updateAppBusinessSettingsRequest: UpdateAppBusinessSettingsRequest; //

const { status, data } = await apiInstance.updateOptions1(
    updateAppBusinessSettingsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateAppBusinessSettingsRequest** | **UpdateAppBusinessSettingsRequest**|  | |


### Return type

**ApiResponseAppBusinessSettingsResponse**

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

