# PayrollControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getPayrollEntries**](#getpayrollentries) | **GET** /api/v1/hrm/payroll/runs/{payrollRunId}/entries | |
|[**getPayrollRun**](#getpayrollrun) | **GET** /api/v1/hrm/payroll/runs/{payrollRunId} | |
|[**getPayslipLines**](#getpaysliplines) | **GET** /api/v1/hrm/payroll/entries/{payrollEntryId}/payslip | |
|[**listPayrollRuns**](#listpayrollruns) | **GET** /api/v1/hrm/payroll/runs | |
|[**runPayroll**](#runpayroll) | **POST** /api/v1/hrm/payroll/run | |
|[**validatePayroll**](#validatepayroll) | **PUT** /api/v1/hrm/payroll/runs/{payrollRunId}/validate | |

# **getPayrollEntries**
> ApiResponseListPayrollEntryResponse getPayrollEntries()


### Example

```typescript
import {
    PayrollControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PayrollControllerApi(configuration);

let payrollRunId: string; // (default to undefined)

const { status, data } = await apiInstance.getPayrollEntries(
    payrollRunId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **payrollRunId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListPayrollEntryResponse**

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

# **getPayrollRun**
> ApiResponsePayrollRunResponse getPayrollRun()


### Example

```typescript
import {
    PayrollControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PayrollControllerApi(configuration);

let payrollRunId: string; // (default to undefined)

const { status, data } = await apiInstance.getPayrollRun(
    payrollRunId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **payrollRunId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponsePayrollRunResponse**

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

# **getPayslipLines**
> ApiResponseListPayslipLineResponse getPayslipLines()


### Example

```typescript
import {
    PayrollControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PayrollControllerApi(configuration);

let payrollEntryId: string; // (default to undefined)

const { status, data } = await apiInstance.getPayslipLines(
    payrollEntryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **payrollEntryId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListPayslipLineResponse**

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

# **listPayrollRuns**
> ApiResponseListPayrollRunResponse listPayrollRuns()


### Example

```typescript
import {
    PayrollControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PayrollControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.listPayrollRuns(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListPayrollRunResponse**

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

# **runPayroll**
> ApiResponsePayrollRunResponse runPayroll(runPayrollRequest)


### Example

```typescript
import {
    PayrollControllerApi,
    Configuration,
    RunPayrollRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PayrollControllerApi(configuration);

let runPayrollRequest: RunPayrollRequest; //

const { status, data } = await apiInstance.runPayroll(
    runPayrollRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **runPayrollRequest** | **RunPayrollRequest**|  | |


### Return type

**ApiResponsePayrollRunResponse**

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

# **validatePayroll**
> ApiResponsePayrollRunResponse validatePayroll()


### Example

```typescript
import {
    PayrollControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PayrollControllerApi(configuration);

let payrollRunId: string; // (default to undefined)

const { status, data } = await apiInstance.validatePayroll(
    payrollRunId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **payrollRunId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponsePayrollRunResponse**

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

