# OpeningHoursControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**listByAgency1**](#listbyagency1) | **GET** /api/organizations/opening-hours/{organizationId}/agencies/{agencyId} | |
|[**upsert**](#upsert) | **POST** /api/organizations/opening-hours | |

# **listByAgency1**
> ApiResponseListOpeningHoursResponse listByAgency1()


### Example

```typescript
import {
    OpeningHoursControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OpeningHoursControllerApi(configuration);

let organizationId: string; // (default to undefined)
let agencyId: string; // (default to undefined)

const { status, data } = await apiInstance.listByAgency1(
    organizationId,
    agencyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **agencyId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListOpeningHoursResponse**

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

# **upsert**
> ApiResponseOpeningHoursResponse upsert(upsertOpeningHoursRequest)


### Example

```typescript
import {
    OpeningHoursControllerApi,
    Configuration,
    UpsertOpeningHoursRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OpeningHoursControllerApi(configuration);

let upsertOpeningHoursRequest: UpsertOpeningHoursRequest; //

const { status, data } = await apiInstance.upsert(
    upsertOpeningHoursRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **upsertOpeningHoursRequest** | **UpsertOpeningHoursRequest**|  | |


### Return type

**ApiResponseOpeningHoursResponse**

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

