# LoanAdvanceControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**approveLoanAdvance**](#approveloanadvance) | **PUT** /api/v1/hrm/loan-advances/{loanAdvanceId}/approve | |
|[**getLoanAdvance**](#getloanadvance) | **GET** /api/v1/hrm/loan-advances/{loanAdvanceId} | |
|[**listByEmployee3**](#listbyemployee3) | **GET** /api/v1/hrm/loan-advances/employee/{employeeId} | |
|[**rejectLoanAdvance**](#rejectloanadvance) | **PUT** /api/v1/hrm/loan-advances/{loanAdvanceId}/reject | |
|[**requestLoanAdvance**](#requestloanadvance) | **POST** /api/v1/hrm/loan-advances | |

# **approveLoanAdvance**
> ApiResponseLoanAdvanceResponse approveLoanAdvance()


### Example

```typescript
import {
    LoanAdvanceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LoanAdvanceControllerApi(configuration);

let loanAdvanceId: string; // (default to undefined)

const { status, data } = await apiInstance.approveLoanAdvance(
    loanAdvanceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanAdvanceId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseLoanAdvanceResponse**

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

# **getLoanAdvance**
> ApiResponseLoanAdvanceResponse getLoanAdvance()


### Example

```typescript
import {
    LoanAdvanceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LoanAdvanceControllerApi(configuration);

let loanAdvanceId: string; // (default to undefined)

const { status, data } = await apiInstance.getLoanAdvance(
    loanAdvanceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanAdvanceId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseLoanAdvanceResponse**

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

# **listByEmployee3**
> ApiResponseListLoanAdvanceResponse listByEmployee3()


### Example

```typescript
import {
    LoanAdvanceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LoanAdvanceControllerApi(configuration);

let employeeId: string; // (default to undefined)

const { status, data } = await apiInstance.listByEmployee3(
    employeeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **employeeId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListLoanAdvanceResponse**

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

# **rejectLoanAdvance**
> ApiResponseLoanAdvanceResponse rejectLoanAdvance(rejectLoanRequest)


### Example

```typescript
import {
    LoanAdvanceControllerApi,
    Configuration,
    RejectLoanRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LoanAdvanceControllerApi(configuration);

let loanAdvanceId: string; // (default to undefined)
let rejectLoanRequest: RejectLoanRequest; //

const { status, data } = await apiInstance.rejectLoanAdvance(
    loanAdvanceId,
    rejectLoanRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rejectLoanRequest** | **RejectLoanRequest**|  | |
| **loanAdvanceId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseLoanAdvanceResponse**

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

# **requestLoanAdvance**
> ApiResponseLoanAdvanceResponse requestLoanAdvance(requestLoanAdvanceRequest)


### Example

```typescript
import {
    LoanAdvanceControllerApi,
    Configuration,
    RequestLoanAdvanceRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LoanAdvanceControllerApi(configuration);

let requestLoanAdvanceRequest: RequestLoanAdvanceRequest; //

const { status, data } = await apiInstance.requestLoanAdvance(
    requestLoanAdvanceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestLoanAdvanceRequest** | **RequestLoanAdvanceRequest**|  | |


### Return type

**ApiResponseLoanAdvanceResponse**

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

