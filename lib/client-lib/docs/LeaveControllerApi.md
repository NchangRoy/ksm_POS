# LeaveControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**approveLeave**](#approveleave) | **PUT** /api/v1/hrm/leaves/{leaveRequestId}/approve | |
|[**cancelLeave**](#cancelleave) | **PUT** /api/v1/hrm/leaves/{leaveRequestId}/cancel | |
|[**getLeaveRequest**](#getleaverequest) | **GET** /api/v1/hrm/leaves/{leaveRequestId} | |
|[**listLeavesByEmployee**](#listleavesbyemployee) | **GET** /api/v1/hrm/leaves/employee/{employeeId} | |
|[**listPendingLeaves**](#listpendingleaves) | **GET** /api/v1/hrm/leaves/pending | |
|[**rejectLeave**](#rejectleave) | **PUT** /api/v1/hrm/leaves/{leaveRequestId}/reject | |
|[**submitLeave**](#submitleave) | **POST** /api/v1/hrm/leaves | |

# **approveLeave**
> ApiResponseLeaveResponse approveLeave()


### Example

```typescript
import {
    LeaveControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LeaveControllerApi(configuration);

let leaveRequestId: string; // (default to undefined)

const { status, data } = await apiInstance.approveLeave(
    leaveRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **leaveRequestId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseLeaveResponse**

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

# **cancelLeave**
> ApiResponseLeaveResponse cancelLeave()


### Example

```typescript
import {
    LeaveControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LeaveControllerApi(configuration);

let leaveRequestId: string; // (default to undefined)

const { status, data } = await apiInstance.cancelLeave(
    leaveRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **leaveRequestId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseLeaveResponse**

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

# **getLeaveRequest**
> ApiResponseLeaveResponse getLeaveRequest()


### Example

```typescript
import {
    LeaveControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LeaveControllerApi(configuration);

let leaveRequestId: string; // (default to undefined)

const { status, data } = await apiInstance.getLeaveRequest(
    leaveRequestId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **leaveRequestId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseLeaveResponse**

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

# **listLeavesByEmployee**
> ApiResponseListLeaveResponse listLeavesByEmployee()


### Example

```typescript
import {
    LeaveControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LeaveControllerApi(configuration);

let employeeId: string; // (default to undefined)

const { status, data } = await apiInstance.listLeavesByEmployee(
    employeeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **employeeId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListLeaveResponse**

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

# **listPendingLeaves**
> ApiResponseListLeaveResponse listPendingLeaves()


### Example

```typescript
import {
    LeaveControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LeaveControllerApi(configuration);

let organizationId: string; // (default to undefined)
let agencyId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listPendingLeaves(
    organizationId,
    agencyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **agencyId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ApiResponseListLeaveResponse**

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

# **rejectLeave**
> ApiResponseLeaveResponse rejectLeave(rejectLeaveRequest)


### Example

```typescript
import {
    LeaveControllerApi,
    Configuration,
    RejectLeaveRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LeaveControllerApi(configuration);

let leaveRequestId: string; // (default to undefined)
let rejectLeaveRequest: RejectLeaveRequest; //

const { status, data } = await apiInstance.rejectLeave(
    leaveRequestId,
    rejectLeaveRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rejectLeaveRequest** | **RejectLeaveRequest**|  | |
| **leaveRequestId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseLeaveResponse**

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

# **submitLeave**
> ApiResponseLeaveResponse submitLeave(submitLeaveRequest)


### Example

```typescript
import {
    LeaveControllerApi,
    Configuration,
    SubmitLeaveRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LeaveControllerApi(configuration);

let submitLeaveRequest: SubmitLeaveRequest; //

const { status, data } = await apiInstance.submitLeave(
    submitLeaveRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **submitLeaveRequest** | **SubmitLeaveRequest**|  | |


### Return type

**ApiResponseLeaveResponse**

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

