# BusinessDomainControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createDomain**](#createdomain) | **POST** /api/business-domains | |
|[**listDomains**](#listdomains) | **GET** /api/business-domains | |

# **createDomain**
> ApiResponseBusinessDomainResponse createDomain(createBusinessDomainRequest)


### Example

```typescript
import {
    BusinessDomainControllerApi,
    Configuration,
    CreateBusinessDomainRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessDomainControllerApi(configuration);

let createBusinessDomainRequest: CreateBusinessDomainRequest; //

const { status, data } = await apiInstance.createDomain(
    createBusinessDomainRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createBusinessDomainRequest** | **CreateBusinessDomainRequest**|  | |


### Return type

**ApiResponseBusinessDomainResponse**

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

# **listDomains**
> ApiResponseListBusinessDomainResponse listDomains()


### Example

```typescript
import {
    BusinessDomainControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BusinessDomainControllerApi(configuration);

const { status, data } = await apiInstance.listDomains();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseListBusinessDomainResponse**

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

