# ExpenseControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addExpenseLine**](#addexpenseline) | **POST** /api/v1/hrm/expenses/{id}/lines | |
|[**approveExpenseReport**](#approveexpensereport) | **PUT** /api/v1/hrm/expenses/{id}/approve | |
|[**createExpenseReport**](#createexpensereport) | **POST** /api/v1/hrm/expenses | |
|[**getExpenseReport**](#getexpensereport) | **GET** /api/v1/hrm/expenses/{id} | |
|[**listExpenseLines**](#listexpenselines) | **GET** /api/v1/hrm/expenses/{id}/lines | |
|[**listExpenseReports**](#listexpensereports) | **GET** /api/v1/hrm/expenses | |
|[**reimburseExpenseReport**](#reimburseexpensereport) | **PUT** /api/v1/hrm/expenses/{id}/reimburse | |
|[**rejectExpenseReport**](#rejectexpensereport) | **PUT** /api/v1/hrm/expenses/{id}/reject | |
|[**submitExpenseReport**](#submitexpensereport) | **PUT** /api/v1/hrm/expenses/{id}/submit | |

# **addExpenseLine**
> ApiResponseExpenseLineResponse addExpenseLine(addExpenseLineRequest)


### Example

```typescript
import {
    ExpenseControllerApi,
    Configuration,
    AddExpenseLineRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ExpenseControllerApi(configuration);

let id: string; // (default to undefined)
let addExpenseLineRequest: AddExpenseLineRequest; //

const { status, data } = await apiInstance.addExpenseLine(
    id,
    addExpenseLineRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addExpenseLineRequest** | **AddExpenseLineRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseExpenseLineResponse**

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

# **approveExpenseReport**
> ApiResponseExpenseReportResponse approveExpenseReport()


### Example

```typescript
import {
    ExpenseControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExpenseControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.approveExpenseReport(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseExpenseReportResponse**

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

# **createExpenseReport**
> ApiResponseExpenseReportResponse createExpenseReport(createExpenseReportRequest)


### Example

```typescript
import {
    ExpenseControllerApi,
    Configuration,
    CreateExpenseReportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ExpenseControllerApi(configuration);

let createExpenseReportRequest: CreateExpenseReportRequest; //

const { status, data } = await apiInstance.createExpenseReport(
    createExpenseReportRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createExpenseReportRequest** | **CreateExpenseReportRequest**|  | |


### Return type

**ApiResponseExpenseReportResponse**

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

# **getExpenseReport**
> ApiResponseExpenseReportResponse getExpenseReport()


### Example

```typescript
import {
    ExpenseControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExpenseControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getExpenseReport(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseExpenseReportResponse**

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

# **listExpenseLines**
> ApiResponseListExpenseLineResponse listExpenseLines()


### Example

```typescript
import {
    ExpenseControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExpenseControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.listExpenseLines(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListExpenseLineResponse**

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

# **listExpenseReports**
> ApiResponseListExpenseReportResponse listExpenseReports()


### Example

```typescript
import {
    ExpenseControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExpenseControllerApi(configuration);

let employeeId: string; // (default to undefined)

const { status, data } = await apiInstance.listExpenseReports(
    employeeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **employeeId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListExpenseReportResponse**

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

# **reimburseExpenseReport**
> ApiResponseExpenseReportResponse reimburseExpenseReport()


### Example

```typescript
import {
    ExpenseControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExpenseControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.reimburseExpenseReport(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseExpenseReportResponse**

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

# **rejectExpenseReport**
> ApiResponseExpenseReportResponse rejectExpenseReport()


### Example

```typescript
import {
    ExpenseControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExpenseControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.rejectExpenseReport(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseExpenseReportResponse**

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

# **submitExpenseReport**
> ApiResponseExpenseReportResponse submitExpenseReport()


### Example

```typescript
import {
    ExpenseControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ExpenseControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.submitExpenseReport(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseExpenseReportResponse**

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

