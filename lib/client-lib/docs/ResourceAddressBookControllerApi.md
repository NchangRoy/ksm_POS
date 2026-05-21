# ResourceAddressBookControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createAddress1**](#createaddress1) | **POST** /api/resources/{resourceId}/addresses | |
|[**createContact1**](#createcontact1) | **POST** /api/resources/{resourceId}/contacts | |
|[**deleteAddress1**](#deleteaddress1) | **DELETE** /api/resources/{resourceId}/addresses/{addressId} | |
|[**deleteContact1**](#deletecontact1) | **DELETE** /api/resources/{resourceId}/contacts/{contactId} | |
|[**listAddresses1**](#listaddresses1) | **GET** /api/resources/{resourceId}/addresses | |
|[**listContacts1**](#listcontacts1) | **GET** /api/resources/{resourceId}/contacts | |

# **createAddress1**
> ApiResponseAddressResponse createAddress1(nestedAddressRequest)


### Example

```typescript
import {
    ResourceAddressBookControllerApi,
    Configuration,
    NestedAddressRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ResourceAddressBookControllerApi(configuration);

let resourceId: string; // (default to undefined)
let nestedAddressRequest: NestedAddressRequest; //

const { status, data } = await apiInstance.createAddress1(
    resourceId,
    nestedAddressRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **nestedAddressRequest** | **NestedAddressRequest**|  | |
| **resourceId** | [**string**] |  | defaults to undefined|


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

# **createContact1**
> ApiResponseContactResponse createContact1(nestedContactRequest)


### Example

```typescript
import {
    ResourceAddressBookControllerApi,
    Configuration,
    NestedContactRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ResourceAddressBookControllerApi(configuration);

let resourceId: string; // (default to undefined)
let nestedContactRequest: NestedContactRequest; //

const { status, data } = await apiInstance.createContact1(
    resourceId,
    nestedContactRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **nestedContactRequest** | **NestedContactRequest**|  | |
| **resourceId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseContactResponse**

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

# **deleteAddress1**
> ApiResponseVoid deleteAddress1()


### Example

```typescript
import {
    ResourceAddressBookControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ResourceAddressBookControllerApi(configuration);

let resourceId: string; // (default to undefined)
let addressId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteAddress1(
    resourceId,
    addressId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resourceId** | [**string**] |  | defaults to undefined|
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

# **deleteContact1**
> ApiResponseVoid deleteContact1()


### Example

```typescript
import {
    ResourceAddressBookControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ResourceAddressBookControllerApi(configuration);

let resourceId: string; // (default to undefined)
let contactId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteContact1(
    resourceId,
    contactId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resourceId** | [**string**] |  | defaults to undefined|
| **contactId** | [**string**] |  | defaults to undefined|


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

# **listAddresses1**
> ApiResponseListAddressResponse listAddresses1()


### Example

```typescript
import {
    ResourceAddressBookControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ResourceAddressBookControllerApi(configuration);

let resourceId: string; // (default to undefined)

const { status, data } = await apiInstance.listAddresses1(
    resourceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resourceId** | [**string**] |  | defaults to undefined|


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

# **listContacts1**
> ApiResponseListContactResponse listContacts1()


### Example

```typescript
import {
    ResourceAddressBookControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ResourceAddressBookControllerApi(configuration);

let resourceId: string; // (default to undefined)

const { status, data } = await apiInstance.listContacts1(
    resourceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resourceId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListContactResponse**

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

