# AgencyControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**activateAgency**](#activateagency) | **POST** /api/organizations/{organizationId}/agencies/{agencyId}/activate | |
|[**closeAgency**](#closeagency) | **POST** /api/organizations/{organizationId}/agencies/{agencyId}/close | |
|[**createAgency**](#createagency) | **POST** /api/organizations/{organizationId}/agencies | |
|[**listAgencies**](#listagencies) | **GET** /api/organizations/{organizationId}/agencies | |
|[**suspendAgency**](#suspendagency) | **POST** /api/organizations/{organizationId}/agencies/{agencyId}/suspend | |
|[**updateAgency**](#updateagency) | **PATCH** /api/organizations/{organizationId}/agencies/{agencyId} | |

# **activateAgency**
> ApiResponseAgencyResponse activateAgency(governanceActionRequest)


### Example

```typescript
import {
    AgencyControllerApi,
    Configuration,
    GovernanceActionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AgencyControllerApi(configuration);

let organizationId: string; // (default to undefined)
let agencyId: string; // (default to undefined)
let governanceActionRequest: GovernanceActionRequest; //

const { status, data } = await apiInstance.activateAgency(
    organizationId,
    agencyId,
    governanceActionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **governanceActionRequest** | **GovernanceActionRequest**|  | |
| **organizationId** | [**string**] |  | defaults to undefined|
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

# **closeAgency**
> ApiResponseAgencyResponse closeAgency(governanceActionRequest)


### Example

```typescript
import {
    AgencyControllerApi,
    Configuration,
    GovernanceActionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AgencyControllerApi(configuration);

let organizationId: string; // (default to undefined)
let agencyId: string; // (default to undefined)
let governanceActionRequest: GovernanceActionRequest; //

const { status, data } = await apiInstance.closeAgency(
    organizationId,
    agencyId,
    governanceActionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **governanceActionRequest** | **GovernanceActionRequest**|  | |
| **organizationId** | [**string**] |  | defaults to undefined|
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

# **createAgency**
> ApiResponseAgencyResponse createAgency(createAgencyRequest)


### Example

```typescript
import {
    AgencyControllerApi,
    Configuration,
    CreateAgencyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AgencyControllerApi(configuration);

let organizationId: string; // (default to undefined)
let createAgencyRequest: CreateAgencyRequest; //

const { status, data } = await apiInstance.createAgency(
    organizationId,
    createAgencyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAgencyRequest** | **CreateAgencyRequest**|  | |
| **organizationId** | [**string**] |  | defaults to undefined|


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

# **listAgencies**
> ApiResponseListAgencyResponse listAgencies()


### Example

```typescript
import {
    AgencyControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AgencyControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.listAgencies(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


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

# **suspendAgency**
> ApiResponseAgencyResponse suspendAgency(governanceActionRequest)


### Example

```typescript
import {
    AgencyControllerApi,
    Configuration,
    GovernanceActionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AgencyControllerApi(configuration);

let organizationId: string; // (default to undefined)
let agencyId: string; // (default to undefined)
let governanceActionRequest: GovernanceActionRequest; //

const { status, data } = await apiInstance.suspendAgency(
    organizationId,
    agencyId,
    governanceActionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **governanceActionRequest** | **GovernanceActionRequest**|  | |
| **organizationId** | [**string**] |  | defaults to undefined|
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

# **updateAgency**
> ApiResponseAgencyResponse updateAgency(updateAgencyRequest)


### Example

```typescript
import {
    AgencyControllerApi,
    Configuration,
    UpdateAgencyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AgencyControllerApi(configuration);

let agencyId: string; // (default to undefined)
let updateAgencyRequest: UpdateAgencyRequest; //

const { status, data } = await apiInstance.updateAgency(
    agencyId,
    updateAgencyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateAgencyRequest** | **UpdateAgencyRequest**|  | |
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

