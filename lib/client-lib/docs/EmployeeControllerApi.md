# EmployeeControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addContract**](#addcontract) | **POST** /api/v1/hrm/employees/{employeeId}/contracts | |
|[**addDependent**](#adddependent) | **POST** /api/v1/hrm/employees/{employeeId}/dependents | |
|[**createEmployee**](#createemployee) | **POST** /api/v1/hrm/employees | |
|[**getContracts**](#getcontracts) | **GET** /api/v1/hrm/employees/{employeeId}/contracts | |
|[**getDependents**](#getdependents) | **GET** /api/v1/hrm/employees/{employeeId}/dependents | |
|[**getEmployee**](#getemployee) | **GET** /api/v1/hrm/employees/{employeeId} | |
|[**getLeaveBalances**](#getleavebalances) | **GET** /api/v1/hrm/employees/{employeeId}/leave-balances | |
|[**inviteEmployee**](#inviteemployee) | **POST** /api/employees/invite | |
|[**listEmployees**](#listemployees) | **GET** /api/v1/hrm/employees | |
|[**listEmployees1**](#listemployees1) | **GET** /api/employees | |
|[**listRoles1**](#listroles1) | **GET** /api/employees/roles | |
|[**reactivateEmployee**](#reactivateemployee) | **PUT** /api/v1/hrm/employees/{employeeId}/reactivate | |
|[**removeEmployee**](#removeemployee) | **DELETE** /api/employees/{membershipId} | |
|[**suspendEmployee**](#suspendemployee) | **PUT** /api/v1/hrm/employees/{employeeId}/suspend | |
|[**terminateEmployee**](#terminateemployee) | **PUT** /api/v1/hrm/employees/{employeeId}/terminate | |
|[**updateEmployee**](#updateemployee) | **PUT** /api/v1/hrm/employees/{employeeId} | |

# **addContract**
> ApiResponseContractResponse addContract(addContractRequest)


### Example

```typescript
import {
    EmployeeControllerApi,
    Configuration,
    AddContractRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new EmployeeControllerApi(configuration);

let employeeId: string; // (default to undefined)
let addContractRequest: AddContractRequest; //

const { status, data } = await apiInstance.addContract(
    employeeId,
    addContractRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addContractRequest** | **AddContractRequest**|  | |
| **employeeId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseContractResponse**

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

# **addDependent**
> ApiResponseDependentResponse addDependent(addDependentRequest)


### Example

```typescript
import {
    EmployeeControllerApi,
    Configuration,
    AddDependentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new EmployeeControllerApi(configuration);

let employeeId: string; // (default to undefined)
let addDependentRequest: AddDependentRequest; //

const { status, data } = await apiInstance.addDependent(
    employeeId,
    addDependentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addDependentRequest** | **AddDependentRequest**|  | |
| **employeeId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseDependentResponse**

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

# **createEmployee**
> ApiResponseEmployeeResponse createEmployee(createEmployeeRequest)


### Example

```typescript
import {
    EmployeeControllerApi,
    Configuration,
    CreateEmployeeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new EmployeeControllerApi(configuration);

let createEmployeeRequest: CreateEmployeeRequest; //

const { status, data } = await apiInstance.createEmployee(
    createEmployeeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createEmployeeRequest** | **CreateEmployeeRequest**|  | |


### Return type

**ApiResponseEmployeeResponse**

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

# **getContracts**
> ApiResponseListContractResponse getContracts()


### Example

```typescript
import {
    EmployeeControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EmployeeControllerApi(configuration);

let employeeId: string; // (default to undefined)

const { status, data } = await apiInstance.getContracts(
    employeeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **employeeId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListContractResponse**

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

# **getDependents**
> ApiResponseListDependentResponse getDependents()


### Example

```typescript
import {
    EmployeeControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EmployeeControllerApi(configuration);

let employeeId: string; // (default to undefined)

const { status, data } = await apiInstance.getDependents(
    employeeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **employeeId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListDependentResponse**

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

# **getEmployee**
> ApiResponseEmployeeResponse getEmployee()


### Example

```typescript
import {
    EmployeeControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EmployeeControllerApi(configuration);

let employeeId: string; // (default to undefined)

const { status, data } = await apiInstance.getEmployee(
    employeeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **employeeId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseEmployeeResponse**

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

# **getLeaveBalances**
> ApiResponseListLeaveBalanceResponse getLeaveBalances()


### Example

```typescript
import {
    EmployeeControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EmployeeControllerApi(configuration);

let employeeId: string; // (default to undefined)
let annee: number; // (default to undefined)

const { status, data } = await apiInstance.getLeaveBalances(
    employeeId,
    annee
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **employeeId** | [**string**] |  | defaults to undefined|
| **annee** | [**number**] |  | defaults to undefined|


### Return type

**ApiResponseListLeaveBalanceResponse**

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

# **inviteEmployee**
> ApiResponseEmployeeMembershipResponse inviteEmployee(inviteEmployeeRequest)


### Example

```typescript
import {
    EmployeeControllerApi,
    Configuration,
    InviteEmployeeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new EmployeeControllerApi(configuration);

let organizationId: string; // (default to undefined)
let inviteEmployeeRequest: InviteEmployeeRequest; //

const { status, data } = await apiInstance.inviteEmployee(
    organizationId,
    inviteEmployeeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inviteEmployeeRequest** | **InviteEmployeeRequest**|  | |
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseEmployeeMembershipResponse**

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

# **listEmployees**
> ApiResponseListEmployeeResponse listEmployees()


### Example

```typescript
import {
    EmployeeControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EmployeeControllerApi(configuration);

let organizationId: string; // (default to undefined)
let agencyId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listEmployees(
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

**ApiResponseListEmployeeResponse**

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

# **listEmployees1**
> ApiResponseListEmployeeMembershipResponse listEmployees1()


### Example

```typescript
import {
    EmployeeControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EmployeeControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.listEmployees1(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListEmployeeMembershipResponse**

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

# **listRoles1**
> ApiResponseListOrganizationRoleResponse listRoles1()


### Example

```typescript
import {
    EmployeeControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EmployeeControllerApi(configuration);

const { status, data } = await apiInstance.listRoles1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseListOrganizationRoleResponse**

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

# **reactivateEmployee**
> ApiResponseEmployeeResponse reactivateEmployee()


### Example

```typescript
import {
    EmployeeControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EmployeeControllerApi(configuration);

let employeeId: string; // (default to undefined)

const { status, data } = await apiInstance.reactivateEmployee(
    employeeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **employeeId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseEmployeeResponse**

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

# **removeEmployee**
> ApiResponseVoid removeEmployee()


### Example

```typescript
import {
    EmployeeControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new EmployeeControllerApi(configuration);

let membershipId: string; // (default to undefined)

const { status, data } = await apiInstance.removeEmployee(
    membershipId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **membershipId** | [**string**] |  | defaults to undefined|


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

# **suspendEmployee**
> ApiResponseEmployeeResponse suspendEmployee(suspendRequest)


### Example

```typescript
import {
    EmployeeControllerApi,
    Configuration,
    SuspendRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new EmployeeControllerApi(configuration);

let employeeId: string; // (default to undefined)
let suspendRequest: SuspendRequest; //

const { status, data } = await apiInstance.suspendEmployee(
    employeeId,
    suspendRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **suspendRequest** | **SuspendRequest**|  | |
| **employeeId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseEmployeeResponse**

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

# **terminateEmployee**
> ApiResponseEmployeeResponse terminateEmployee(terminateEmployeeRequest)


### Example

```typescript
import {
    EmployeeControllerApi,
    Configuration,
    TerminateEmployeeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new EmployeeControllerApi(configuration);

let employeeId: string; // (default to undefined)
let terminateEmployeeRequest: TerminateEmployeeRequest; //

const { status, data } = await apiInstance.terminateEmployee(
    employeeId,
    terminateEmployeeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **terminateEmployeeRequest** | **TerminateEmployeeRequest**|  | |
| **employeeId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseEmployeeResponse**

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

# **updateEmployee**
> ApiResponseEmployeeResponse updateEmployee(updateEmployeeRequest)


### Example

```typescript
import {
    EmployeeControllerApi,
    Configuration,
    UpdateEmployeeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new EmployeeControllerApi(configuration);

let employeeId: string; // (default to undefined)
let updateEmployeeRequest: UpdateEmployeeRequest; //

const { status, data } = await apiInstance.updateEmployee(
    employeeId,
    updateEmployeeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateEmployeeRequest** | **UpdateEmployeeRequest**|  | |
| **employeeId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseEmployeeResponse**

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

