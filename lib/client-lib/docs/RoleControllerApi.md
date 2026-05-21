# RoleControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**assignRole**](#assignrole) | **POST** /api/roles/assignments | |
|[**createRole**](#createrole) | **POST** /api/roles | |

# **assignRole**
> ApiResponseUserRoleAssignmentResponse assignRole(assignRoleToUserRequest)


### Example

```typescript
import {
    RoleControllerApi,
    Configuration,
    AssignRoleToUserRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new RoleControllerApi(configuration);

let assignRoleToUserRequest: AssignRoleToUserRequest; //

const { status, data } = await apiInstance.assignRole(
    assignRoleToUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assignRoleToUserRequest** | **AssignRoleToUserRequest**|  | |


### Return type

**ApiResponseUserRoleAssignmentResponse**

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

# **createRole**
> ApiResponseRoleResponse createRole(createRoleRequest)


### Example

```typescript
import {
    RoleControllerApi,
    Configuration,
    CreateRoleRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new RoleControllerApi(configuration);

let createRoleRequest: CreateRoleRequest; //

const { status, data } = await apiInstance.createRole(
    createRoleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createRoleRequest** | **CreateRoleRequest**|  | |


### Return type

**ApiResponseRoleResponse**

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

