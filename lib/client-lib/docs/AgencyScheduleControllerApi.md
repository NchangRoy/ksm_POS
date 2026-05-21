# AgencyScheduleControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addException**](#addexception) | **POST** /api/agencies/{agencyId}/schedule/exceptions | |
|[**getSchedule**](#getschedule) | **GET** /api/agencies/{agencyId}/schedule | |
|[**getStatus**](#getstatus) | **GET** /api/agencies/{agencyId}/schedule/status | |
|[**removeException**](#removeexception) | **DELETE** /api/agencies/{agencyId}/schedule/exceptions/{exceptionId} | |
|[**replaceRegularSchedule**](#replaceregularschedule) | **PUT** /api/agencies/{agencyId}/schedule/regular | |

# **addException**
> ApiResponseOpeningHoursExceptionResponse addException(openingHoursExceptionRequest)


### Example

```typescript
import {
    AgencyScheduleControllerApi,
    Configuration,
    OpeningHoursExceptionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AgencyScheduleControllerApi(configuration);

let agencyId: string; // (default to undefined)
let organizationId: string; // (default to undefined)
let openingHoursExceptionRequest: OpeningHoursExceptionRequest; //

const { status, data } = await apiInstance.addException(
    agencyId,
    organizationId,
    openingHoursExceptionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **openingHoursExceptionRequest** | **OpeningHoursExceptionRequest**|  | |
| **agencyId** | [**string**] |  | defaults to undefined|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseOpeningHoursExceptionResponse**

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

# **getSchedule**
> ApiResponseAgencyScheduleResponse getSchedule()


### Example

```typescript
import {
    AgencyScheduleControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AgencyScheduleControllerApi(configuration);

let agencyId: string; // (default to undefined)
let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.getSchedule(
    agencyId,
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **agencyId** | [**string**] |  | defaults to undefined|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseAgencyScheduleResponse**

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

# **getStatus**
> ApiResponseAgencyOpenStatusResponse getStatus()


### Example

```typescript
import {
    AgencyScheduleControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AgencyScheduleControllerApi(configuration);

let agencyId: string; // (default to undefined)
let organizationId: string; // (default to undefined)
let at: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getStatus(
    agencyId,
    organizationId,
    at
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **agencyId** | [**string**] |  | defaults to undefined|
| **organizationId** | [**string**] |  | defaults to undefined|
| **at** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ApiResponseAgencyOpenStatusResponse**

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

# **removeException**
> ApiResponseVoid removeException()


### Example

```typescript
import {
    AgencyScheduleControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AgencyScheduleControllerApi(configuration);

let exceptionId: string; // (default to undefined)

const { status, data } = await apiInstance.removeException(
    exceptionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **exceptionId** | [**string**] |  | defaults to undefined|


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

# **replaceRegularSchedule**
> ApiResponseListOpeningHoursResponse replaceRegularSchedule(regularOpeningHoursRequest)


### Example

```typescript
import {
    AgencyScheduleControllerApi,
    Configuration,
    RegularOpeningHoursRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AgencyScheduleControllerApi(configuration);

let agencyId: string; // (default to undefined)
let organizationId: string; // (default to undefined)
let regularOpeningHoursRequest: RegularOpeningHoursRequest; //

const { status, data } = await apiInstance.replaceRegularSchedule(
    agencyId,
    organizationId,
    regularOpeningHoursRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **regularOpeningHoursRequest** | **RegularOpeningHoursRequest**|  | |
| **agencyId** | [**string**] |  | defaults to undefined|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListOpeningHoursResponse**

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

