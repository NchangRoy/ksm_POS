# ThirdPartyAddressBookControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createAddress**](#createaddress) | **POST** /api/third-parties/{thirdPartyId}/addresses | |
|[**createContact**](#createcontact) | **POST** /api/third-parties/{thirdPartyId}/contacts | |
|[**deleteAddress**](#deleteaddress) | **DELETE** /api/third-parties/{thirdPartyId}/addresses/{addressId} | |
|[**deleteContact**](#deletecontact) | **DELETE** /api/third-parties/{thirdPartyId}/contacts/{contactId} | |
|[**listAddresses**](#listaddresses) | **GET** /api/third-parties/{thirdPartyId}/addresses | |
|[**listContacts**](#listcontacts) | **GET** /api/third-parties/{thirdPartyId}/contacts | |

# **createAddress**
> ApiResponseAddressResponse createAddress(nestedAddressRequest)


### Example

```typescript
import {
    ThirdPartyAddressBookControllerApi,
    Configuration,
    NestedAddressRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ThirdPartyAddressBookControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let nestedAddressRequest: NestedAddressRequest; //

const { status, data } = await apiInstance.createAddress(
    thirdPartyId,
    nestedAddressRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **nestedAddressRequest** | **NestedAddressRequest**|  | |
| **thirdPartyId** | [**string**] |  | defaults to undefined|


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

# **createContact**
> ApiResponseContactResponse createContact(nestedContactRequest)


### Example

```typescript
import {
    ThirdPartyAddressBookControllerApi,
    Configuration,
    NestedContactRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ThirdPartyAddressBookControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let nestedContactRequest: NestedContactRequest; //

const { status, data } = await apiInstance.createContact(
    thirdPartyId,
    nestedContactRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **nestedContactRequest** | **NestedContactRequest**|  | |
| **thirdPartyId** | [**string**] |  | defaults to undefined|


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

# **deleteAddress**
> ApiResponseVoid deleteAddress()


### Example

```typescript
import {
    ThirdPartyAddressBookControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ThirdPartyAddressBookControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let addressId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteAddress(
    thirdPartyId,
    addressId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **thirdPartyId** | [**string**] |  | defaults to undefined|
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

# **deleteContact**
> ApiResponseVoid deleteContact()


### Example

```typescript
import {
    ThirdPartyAddressBookControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ThirdPartyAddressBookControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)
let contactId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteContact(
    thirdPartyId,
    contactId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **thirdPartyId** | [**string**] |  | defaults to undefined|
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

# **listAddresses**
> ApiResponseListAddressResponse listAddresses()


### Example

```typescript
import {
    ThirdPartyAddressBookControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ThirdPartyAddressBookControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.listAddresses(
    thirdPartyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **thirdPartyId** | [**string**] |  | defaults to undefined|


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

# **listContacts**
> ApiResponseListContactResponse listContacts()


### Example

```typescript
import {
    ThirdPartyAddressBookControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ThirdPartyAddressBookControllerApi(configuration);

let thirdPartyId: string; // (default to undefined)

const { status, data } = await apiInstance.listContacts(
    thirdPartyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **thirdPartyId** | [**string**] |  | defaults to undefined|


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

