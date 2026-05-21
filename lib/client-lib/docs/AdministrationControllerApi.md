# AdministrationControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**assignRole1**](#assignrole1) | **POST** /api/administration/users/{userId}/roles | |
|[**cloneRole**](#clonerole) | **POST** /api/administration/roles/{roleId}/clone | |
|[**createRole1**](#createrole1) | **POST** /api/administration/roles | |
|[**deleteRole**](#deleterole) | **DELETE** /api/administration/roles/{roleId} | |
|[**getGeneralOptions**](#getgeneraloptions) | **GET** /api/administration/settings/general-options | |
|[**getPlatformOptions**](#getplatformoptions) | **GET** /api/administration/settings/platform-options | |
|[**getRole**](#getrole) | **GET** /api/administration/roles/{roleId} | |
|[**governAgency**](#governagency) | **POST** /api/administration/governance/agencies/{agencyId} | |
|[**governBusinessActor**](#governbusinessactor) | **POST** /api/administration/governance/business-actors/{businessActorId} | |
|[**governOrganization**](#governorganization) | **POST** /api/administration/governance/organizations/{organizationId} | |
|[**listAudit**](#listaudit) | **GET** /api/administration/audit | |
|[**listBusinessActors**](#listbusinessactors) | **GET** /api/administration/governance/business-actors | |
|[**listGovernedAgencies**](#listgovernedagencies) | **GET** /api/administration/governance/agencies | |
|[**listGovernedOrganizations**](#listgovernedorganizations) | **GET** /api/administration/governance/organizations | |
|[**listPermissions**](#listpermissions) | **GET** /api/administration/permissions | |
|[**listRoleTemplates**](#listroletemplates) | **GET** /api/administration/role-templates | |
|[**listRoles**](#listroles) | **GET** /api/administration/roles | |
|[**listUserRoles**](#listuserroles) | **GET** /api/administration/users/{userId}/roles | |
|[**provisionDefaultRoles**](#provisiondefaultroles) | **POST** /api/administration/roles/defaults | |
|[**replaceRolePermissions**](#replacerolepermissions) | **PUT** /api/administration/roles/{roleId}/permissions | |
|[**revokeRole**](#revokerole) | **DELETE** /api/administration/users/{userId}/roles/{assignmentId} | |
|[**updateGeneralOptions**](#updategeneraloptions) | **PUT** /api/administration/settings/general-options | |
|[**updatePlatformOptions**](#updateplatformoptions) | **PUT** /api/administration/settings/platform-options | |
|[**updateRole**](#updaterole) | **PATCH** /api/administration/roles/{roleId} | |

# **assignRole1**
> ApiResponseAdministrationUserRoleAssignmentResponse assignRole1(assignAdministrativeRoleRequest)


### Example

```typescript
import {
    AdministrationControllerApi,
    Configuration,
    AssignAdministrativeRoleRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AdministrationControllerApi(configuration);

let userId: string; // (default to undefined)
let assignAdministrativeRoleRequest: AssignAdministrativeRoleRequest; //

const { status, data } = await apiInstance.assignRole1(
    userId,
    assignAdministrativeRoleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **assignAdministrativeRoleRequest** | **AssignAdministrativeRoleRequest**|  | |
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseAdministrationUserRoleAssignmentResponse**

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

# **cloneRole**
> ApiResponseAdministrationRoleResponse cloneRole(cloneAdministrativeRoleRequest)


### Example

```typescript
import {
    AdministrationControllerApi,
    Configuration,
    CloneAdministrativeRoleRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AdministrationControllerApi(configuration);

let roleId: string; // (default to undefined)
let cloneAdministrativeRoleRequest: CloneAdministrativeRoleRequest; //

const { status, data } = await apiInstance.cloneRole(
    roleId,
    cloneAdministrativeRoleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cloneAdministrativeRoleRequest** | **CloneAdministrativeRoleRequest**|  | |
| **roleId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseAdministrationRoleResponse**

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

# **createRole1**
> ApiResponseAdministrationRoleResponse createRole1(createAdministrativeRoleRequest)


### Example

```typescript
import {
    AdministrationControllerApi,
    Configuration,
    CreateAdministrativeRoleRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AdministrationControllerApi(configuration);

let createAdministrativeRoleRequest: CreateAdministrativeRoleRequest; //

const { status, data } = await apiInstance.createRole1(
    createAdministrativeRoleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAdministrativeRoleRequest** | **CreateAdministrativeRoleRequest**|  | |


### Return type

**ApiResponseAdministrationRoleResponse**

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

# **deleteRole**
> ApiResponseVoid deleteRole()


### Example

```typescript
import {
    AdministrationControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdministrationControllerApi(configuration);

let roleId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteRole(
    roleId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **roleId** | [**string**] |  | defaults to undefined|


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

# **getGeneralOptions**
> ApiResponseAdministrationGeneralOptionsResponse getGeneralOptions()


### Example

```typescript
import {
    AdministrationControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdministrationControllerApi(configuration);

const { status, data } = await apiInstance.getGeneralOptions();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseAdministrationGeneralOptionsResponse**

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

# **getPlatformOptions**
> ApiResponseAdministrativePlatformOptionsResponse getPlatformOptions()


### Example

```typescript
import {
    AdministrationControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdministrationControllerApi(configuration);

const { status, data } = await apiInstance.getPlatformOptions();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseAdministrativePlatformOptionsResponse**

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

# **getRole**
> ApiResponseAdministrationRoleResponse getRole()


### Example

```typescript
import {
    AdministrationControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdministrationControllerApi(configuration);

let roleId: string; // (default to undefined)

const { status, data } = await apiInstance.getRole(
    roleId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **roleId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseAdministrationRoleResponse**

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

# **governAgency**
> ApiResponseAgencyResponse governAgency(governanceActionRequest)


### Example

```typescript
import {
    AdministrationControllerApi,
    Configuration,
    GovernanceActionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AdministrationControllerApi(configuration);

let agencyId: string; // (default to undefined)
let governanceActionRequest: GovernanceActionRequest; //

const { status, data } = await apiInstance.governAgency(
    agencyId,
    governanceActionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **governanceActionRequest** | **GovernanceActionRequest**|  | |
| **agencyId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseAgencyResponse**

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

# **governBusinessActor**
> ApiResponseBusinessActorResponse governBusinessActor(governanceActionRequest)


### Example

```typescript
import {
    AdministrationControllerApi,
    Configuration,
    GovernanceActionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AdministrationControllerApi(configuration);

let businessActorId: string; // (default to undefined)
let governanceActionRequest: GovernanceActionRequest; //

const { status, data } = await apiInstance.governBusinessActor(
    businessActorId,
    governanceActionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **governanceActionRequest** | **GovernanceActionRequest**|  | |
| **businessActorId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseBusinessActorResponse**

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

# **governOrganization**
> ApiResponseOrganizationResponse governOrganization(governanceActionRequest)


### Example

```typescript
import {
    AdministrationControllerApi,
    Configuration,
    GovernanceActionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AdministrationControllerApi(configuration);

let organizationId: string; // (default to undefined)
let governanceActionRequest: GovernanceActionRequest; //

const { status, data } = await apiInstance.governOrganization(
    organizationId,
    governanceActionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **governanceActionRequest** | **GovernanceActionRequest**|  | |
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseOrganizationResponse**

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

# **listAudit**
> ApiResponseListAdministrationAuditResponse listAudit()


### Example

```typescript
import {
    AdministrationControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdministrationControllerApi(configuration);

let limit: number; // (optional) (default to 50)

const { status, data } = await apiInstance.listAudit(
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] |  | (optional) defaults to 50|


### Return type

**ApiResponseListAdministrationAuditResponse**

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

# **listBusinessActors**
> ApiResponseListBusinessActorResponse listBusinessActors()


### Example

```typescript
import {
    AdministrationControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdministrationControllerApi(configuration);

let status: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listBusinessActors(
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **status** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ApiResponseListBusinessActorResponse**

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

# **listGovernedAgencies**
> ApiResponseListAgencyResponse listGovernedAgencies()


### Example

```typescript
import {
    AdministrationControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdministrationControllerApi(configuration);

let organizationId: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listGovernedAgencies(
    organizationId,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | (optional) defaults to undefined|
| **status** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ApiResponseListAgencyResponse**

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

# **listGovernedOrganizations**
> ApiResponseListOrganizationResponse listGovernedOrganizations()


### Example

```typescript
import {
    AdministrationControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdministrationControllerApi(configuration);

let status: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listGovernedOrganizations(
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **status** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ApiResponseListOrganizationResponse**

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

# **listPermissions**
> ApiResponseListAdministrationPermissionResponse listPermissions()


### Example

```typescript
import {
    AdministrationControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdministrationControllerApi(configuration);

const { status, data } = await apiInstance.listPermissions();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseListAdministrationPermissionResponse**

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

# **listRoleTemplates**
> ApiResponseListAdministrativeRoleTemplateResponse listRoleTemplates()


### Example

```typescript
import {
    AdministrationControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdministrationControllerApi(configuration);

const { status, data } = await apiInstance.listRoleTemplates();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseListAdministrativeRoleTemplateResponse**

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

# **listRoles**
> ApiResponseListAdministrationRoleResponse listRoles()


### Example

```typescript
import {
    AdministrationControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdministrationControllerApi(configuration);

const { status, data } = await apiInstance.listRoles();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseListAdministrationRoleResponse**

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

# **listUserRoles**
> ApiResponseListAdministrationUserRoleAssignmentResponse listUserRoles()


### Example

```typescript
import {
    AdministrationControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdministrationControllerApi(configuration);

let userId: string; // (default to undefined)

const { status, data } = await apiInstance.listUserRoles(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListAdministrationUserRoleAssignmentResponse**

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

# **provisionDefaultRoles**
> ApiResponseListAdministrationRoleResponse provisionDefaultRoles()


### Example

```typescript
import {
    AdministrationControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdministrationControllerApi(configuration);

const { status, data } = await apiInstance.provisionDefaultRoles();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseListAdministrationRoleResponse**

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

# **replaceRolePermissions**
> ApiResponseAdministrationRoleResponse replaceRolePermissions(replaceRolePermissionsRequest)


### Example

```typescript
import {
    AdministrationControllerApi,
    Configuration,
    ReplaceRolePermissionsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AdministrationControllerApi(configuration);

let roleId: string; // (default to undefined)
let replaceRolePermissionsRequest: ReplaceRolePermissionsRequest; //

const { status, data } = await apiInstance.replaceRolePermissions(
    roleId,
    replaceRolePermissionsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **replaceRolePermissionsRequest** | **ReplaceRolePermissionsRequest**|  | |
| **roleId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseAdministrationRoleResponse**

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

# **revokeRole**
> ApiResponseVoid revokeRole()


### Example

```typescript
import {
    AdministrationControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AdministrationControllerApi(configuration);

let userId: string; // (default to undefined)
let assignmentId: string; // (default to undefined)

const { status, data } = await apiInstance.revokeRole(
    userId,
    assignmentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|
| **assignmentId** | [**string**] |  | defaults to undefined|


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

# **updateGeneralOptions**
> ApiResponseAdministrationGeneralOptionsResponse updateGeneralOptions(updateAdministrativeGeneralOptionsRequest)


### Example

```typescript
import {
    AdministrationControllerApi,
    Configuration,
    UpdateAdministrativeGeneralOptionsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AdministrationControllerApi(configuration);

let updateAdministrativeGeneralOptionsRequest: UpdateAdministrativeGeneralOptionsRequest; //

const { status, data } = await apiInstance.updateGeneralOptions(
    updateAdministrativeGeneralOptionsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateAdministrativeGeneralOptionsRequest** | **UpdateAdministrativeGeneralOptionsRequest**|  | |


### Return type

**ApiResponseAdministrationGeneralOptionsResponse**

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

# **updatePlatformOptions**
> ApiResponseAdministrativePlatformOptionsResponse updatePlatformOptions(updateAdministrativePlatformOptionsRequest)


### Example

```typescript
import {
    AdministrationControllerApi,
    Configuration,
    UpdateAdministrativePlatformOptionsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AdministrationControllerApi(configuration);

let updateAdministrativePlatformOptionsRequest: UpdateAdministrativePlatformOptionsRequest; //

const { status, data } = await apiInstance.updatePlatformOptions(
    updateAdministrativePlatformOptionsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateAdministrativePlatformOptionsRequest** | **UpdateAdministrativePlatformOptionsRequest**|  | |


### Return type

**ApiResponseAdministrativePlatformOptionsResponse**

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

# **updateRole**
> ApiResponseAdministrationRoleResponse updateRole(updateAdministrativeRoleRequest)


### Example

```typescript
import {
    AdministrationControllerApi,
    Configuration,
    UpdateAdministrativeRoleRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AdministrationControllerApi(configuration);

let roleId: string; // (default to undefined)
let updateAdministrativeRoleRequest: UpdateAdministrativeRoleRequest; //

const { status, data } = await apiInstance.updateRole(
    roleId,
    updateAdministrativeRoleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateAdministrativeRoleRequest** | **UpdateAdministrativeRoleRequest**|  | |
| **roleId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseAdministrationRoleResponse**

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

