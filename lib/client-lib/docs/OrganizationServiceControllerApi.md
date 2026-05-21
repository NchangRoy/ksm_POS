# OrganizationServiceControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**applyCommercialSubscription**](#applycommercialsubscription) | **POST** /api/organizations/{organizationId}/commercial-subscriptions | |
|[**getOrganizationServices**](#getorganizationservices) | **GET** /api/organizations/{organizationId}/services | |
|[**listCatalog**](#listcatalog) | **GET** /api/organizations/services/catalog | |
|[**listCommercialSubscriptionCatalog**](#listcommercialsubscriptioncatalog) | **GET** /api/organizations/commercial-subscriptions/catalog | |
|[**listPacks**](#listpacks) | **GET** /api/organizations/services/packs | |
|[**subscribe**](#subscribe) | **POST** /api/organizations/{organizationId}/services | |
|[**unsubscribe**](#unsubscribe) | **DELETE** /api/organizations/{organizationId}/services/{serviceCode} | |
|[**updateQuota**](#updatequota) | **PATCH** /api/organizations/{organizationId}/services/{serviceCode}/quota | |

# **applyCommercialSubscription**
> ApiResponseOrganizationCommercialSubscriptionResponse applyCommercialSubscription(applyCommercialSubscriptionRequest)


### Example

```typescript
import {
    OrganizationServiceControllerApi,
    Configuration,
    ApplyCommercialSubscriptionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationServiceControllerApi(configuration);

let organizationId: string; // (default to undefined)
let applyCommercialSubscriptionRequest: ApplyCommercialSubscriptionRequest; //

const { status, data } = await apiInstance.applyCommercialSubscription(
    organizationId,
    applyCommercialSubscriptionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applyCommercialSubscriptionRequest** | **ApplyCommercialSubscriptionRequest**|  | |
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseOrganizationCommercialSubscriptionResponse**

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

# **getOrganizationServices**
> ApiResponseOrganizationServicesResponse getOrganizationServices()


### Example

```typescript
import {
    OrganizationServiceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationServiceControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.getOrganizationServices(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseOrganizationServicesResponse**

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

# **listCatalog**
> ApiResponseListOrganizationServiceCatalogResponse listCatalog()


### Example

```typescript
import {
    OrganizationServiceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationServiceControllerApi(configuration);

const { status, data } = await apiInstance.listCatalog();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseListOrganizationServiceCatalogResponse**

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

# **listCommercialSubscriptionCatalog**
> ApiResponseCommercialSubscriptionCatalogResponse listCommercialSubscriptionCatalog()


### Example

```typescript
import {
    OrganizationServiceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationServiceControllerApi(configuration);

const { status, data } = await apiInstance.listCommercialSubscriptionCatalog();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseCommercialSubscriptionCatalogResponse**

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

# **listPacks**
> ApiResponseListOrganizationServicePackResponse listPacks()


### Example

```typescript
import {
    OrganizationServiceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationServiceControllerApi(configuration);

const { status, data } = await apiInstance.listPacks();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseListOrganizationServicePackResponse**

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

# **subscribe**
> ApiResponseOrganizationServicesResponse subscribe(subscribeOrganizationServiceRequest)


### Example

```typescript
import {
    OrganizationServiceControllerApi,
    Configuration,
    SubscribeOrganizationServiceRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationServiceControllerApi(configuration);

let organizationId: string; // (default to undefined)
let subscribeOrganizationServiceRequest: SubscribeOrganizationServiceRequest; //

const { status, data } = await apiInstance.subscribe(
    organizationId,
    subscribeOrganizationServiceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **subscribeOrganizationServiceRequest** | **SubscribeOrganizationServiceRequest**|  | |
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseOrganizationServicesResponse**

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

# **unsubscribe**
> ApiResponseOrganizationServicesResponse unsubscribe()


### Example

```typescript
import {
    OrganizationServiceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationServiceControllerApi(configuration);

let organizationId: string; // (default to undefined)
let serviceCode: string; // (default to undefined)

const { status, data } = await apiInstance.unsubscribe(
    organizationId,
    serviceCode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **serviceCode** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseOrganizationServicesResponse**

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

# **updateQuota**
> ApiResponseOrganizationServicesResponse updateQuota(updateOrganizationServiceQuotaRequest)


### Example

```typescript
import {
    OrganizationServiceControllerApi,
    Configuration,
    UpdateOrganizationServiceQuotaRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationServiceControllerApi(configuration);

let organizationId: string; // (default to undefined)
let serviceCode: string; // (default to undefined)
let updateOrganizationServiceQuotaRequest: UpdateOrganizationServiceQuotaRequest; //

const { status, data } = await apiInstance.updateQuota(
    organizationId,
    serviceCode,
    updateOrganizationServiceQuotaRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateOrganizationServiceQuotaRequest** | **UpdateOrganizationServiceQuotaRequest**|  | |
| **organizationId** | [**string**] |  | defaults to undefined|
| **serviceCode** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseOrganizationServicesResponse**

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

