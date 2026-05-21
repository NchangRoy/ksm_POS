# TimesheetControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createTimesheet**](#createtimesheet) | **POST** /api/v1/hrm/timesheets | |
|[**getTimesheet**](#gettimesheet) | **GET** /api/v1/hrm/timesheets/{timesheetId} | |
|[**listByEmployee**](#listbyemployee) | **GET** /api/v1/hrm/timesheets/employee/{employeeId} | |
|[**listByOrganization1**](#listbyorganization1) | **GET** /api/v1/hrm/timesheets | |
|[**submitTimesheet**](#submittimesheet) | **PUT** /api/v1/hrm/timesheets/{timesheetId}/submit | |
|[**validateTimesheet**](#validatetimesheet) | **PUT** /api/v1/hrm/timesheets/{timesheetId}/validate | |

# **createTimesheet**
> ApiResponseTimesheetResponse createTimesheet(createTimesheetRequest)


### Example

```typescript
import {
    TimesheetControllerApi,
    Configuration,
    CreateTimesheetRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TimesheetControllerApi(configuration);

let createTimesheetRequest: CreateTimesheetRequest; //

const { status, data } = await apiInstance.createTimesheet(
    createTimesheetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTimesheetRequest** | **CreateTimesheetRequest**|  | |


### Return type

**ApiResponseTimesheetResponse**

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

# **getTimesheet**
> ApiResponseTimesheetResponse getTimesheet()


### Example

```typescript
import {
    TimesheetControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TimesheetControllerApi(configuration);

let timesheetId: string; // (default to undefined)

const { status, data } = await apiInstance.getTimesheet(
    timesheetId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **timesheetId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseTimesheetResponse**

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

# **listByEmployee**
> ApiResponseListTimesheetResponse listByEmployee()


### Example

```typescript
import {
    TimesheetControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TimesheetControllerApi(configuration);

let employeeId: string; // (default to undefined)
let periode: string; // (default to undefined)

const { status, data } = await apiInstance.listByEmployee(
    employeeId,
    periode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **employeeId** | [**string**] |  | defaults to undefined|
| **periode** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListTimesheetResponse**

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

# **listByOrganization1**
> ApiResponseListTimesheetResponse listByOrganization1()


### Example

```typescript
import {
    TimesheetControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TimesheetControllerApi(configuration);

let organizationId: string; // (default to undefined)
let periode: string; // (default to undefined)

const { status, data } = await apiInstance.listByOrganization1(
    organizationId,
    periode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **periode** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListTimesheetResponse**

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

# **submitTimesheet**
> ApiResponseTimesheetResponse submitTimesheet()


### Example

```typescript
import {
    TimesheetControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TimesheetControllerApi(configuration);

let timesheetId: string; // (default to undefined)

const { status, data } = await apiInstance.submitTimesheet(
    timesheetId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **timesheetId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseTimesheetResponse**

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

# **validateTimesheet**
> ApiResponseTimesheetResponse validateTimesheet()


### Example

```typescript
import {
    TimesheetControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TimesheetControllerApi(configuration);

let timesheetId: string; // (default to undefined)

const { status, data } = await apiInstance.validateTimesheet(
    timesheetId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **timesheetId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseTimesheetResponse**

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

