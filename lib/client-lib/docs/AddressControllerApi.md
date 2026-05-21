# AddressControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createAddress2**](#createaddress2) | **POST** /api/addresses | |
|[**deleteAddress2**](#deleteaddress2) | **DELETE** /api/addresses/{addressId} | |
|[**listAddresses2**](#listaddresses2) | **GET** /api/addresses | |

# **createAddress2**
> ApiResponseAddressResponse createAddress2(createAddressRequest)


### Example

```typescript
import {
    AddressControllerApi,
    Configuration,
    CreateAddressRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AddressControllerApi(configuration);

let xTenantId: string; // (default to undefined)
let createAddressRequest: CreateAddressRequest; //

const { status, data } = await apiInstance.createAddress2(
    xTenantId,
    createAddressRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAddressRequest** | **CreateAddressRequest**|  | |
| **xTenantId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseAddressResponse**

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

# **deleteAddress2**
> ApiResponseVoid deleteAddress2()


### Example

```typescript
import {
    AddressControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AddressControllerApi(configuration);

let xTenantId: string; // (default to undefined)
let addressId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteAddress2(
    xTenantId,
    addressId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xTenantId** | [**string**] |  | defaults to undefined|
| **addressId** | [**string**] |  | defaults to undefined|


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

# **listAddresses2**
> ApiResponseListAddressResponse listAddresses2()


### Example

```typescript
import {
    AddressControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AddressControllerApi(configuration);

let xTenantId: string; // (default to undefined)
let addressableType: 'ACTOR' | 'ORGANIZATION' | 'AGENCY' | 'THIRD_PARTY' | 'RESOURCE'; // (default to undefined)
let addressableId: string; // (default to undefined)

const { status, data } = await apiInstance.listAddresses2(
    xTenantId,
    addressableType,
    addressableId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xTenantId** | [**string**] |  | defaults to undefined|
| **addressableType** | [**&#39;ACTOR&#39; | &#39;ORGANIZATION&#39; | &#39;AGENCY&#39; | &#39;THIRD_PARTY&#39; | &#39;RESOURCE&#39;**]**Array<&#39;ACTOR&#39; &#124; &#39;ORGANIZATION&#39; &#124; &#39;AGENCY&#39; &#124; &#39;THIRD_PARTY&#39; &#124; &#39;RESOURCE&#39;>** |  | defaults to undefined|
| **addressableId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListAddressResponse**

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

