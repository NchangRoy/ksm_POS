# SkillControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createEmployeeSkill**](#createemployeeskill) | **POST** /api/v1/hrm/skills/employee-skills | |
|[**createSkill**](#createskill) | **POST** /api/v1/hrm/skills | |
|[**getSkill**](#getskill) | **GET** /api/v1/hrm/skills/{id} | |
|[**listByEmployee1**](#listbyemployee1) | **GET** /api/v1/hrm/skills/employees/{employeeId}/skills | |
|[**listSkills**](#listskills) | **GET** /api/v1/hrm/skills | |

# **createEmployeeSkill**
> ApiResponseEmployeeSkillResponse createEmployeeSkill(createEmployeeSkillRequest)


### Example

```typescript
import {
    SkillControllerApi,
    Configuration,
    CreateEmployeeSkillRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SkillControllerApi(configuration);

let createEmployeeSkillRequest: CreateEmployeeSkillRequest; //

const { status, data } = await apiInstance.createEmployeeSkill(
    createEmployeeSkillRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createEmployeeSkillRequest** | **CreateEmployeeSkillRequest**|  | |


### Return type

**ApiResponseEmployeeSkillResponse**

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

# **createSkill**
> ApiResponseSkillResponse createSkill(createSkillRequest)


### Example

```typescript
import {
    SkillControllerApi,
    Configuration,
    CreateSkillRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SkillControllerApi(configuration);

let createSkillRequest: CreateSkillRequest; //

const { status, data } = await apiInstance.createSkill(
    createSkillRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createSkillRequest** | **CreateSkillRequest**|  | |


### Return type

**ApiResponseSkillResponse**

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

# **getSkill**
> ApiResponseSkillResponse getSkill()


### Example

```typescript
import {
    SkillControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SkillControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getSkill(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseSkillResponse**

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

# **listByEmployee1**
> ApiResponseListEmployeeSkillResponse listByEmployee1()


### Example

```typescript
import {
    SkillControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SkillControllerApi(configuration);

let employeeId: string; // (default to undefined)

const { status, data } = await apiInstance.listByEmployee1(
    employeeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **employeeId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListEmployeeSkillResponse**

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

# **listSkills**
> ApiResponseListSkillResponse listSkills()


### Example

```typescript
import {
    SkillControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SkillControllerApi(configuration);

const { status, data } = await apiInstance.listSkills();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseListSkillResponse**

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

