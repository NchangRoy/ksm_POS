# ActorAddressBookControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createAddress3**](#createaddress3) | **POST** /api/actors/{actorId}/addresses | |
|[**createContact3**](#createcontact3) | **POST** /api/actors/{actorId}/contacts | |
|[**deleteAddress3**](#deleteaddress3) | **DELETE** /api/actors/{actorId}/addresses/{addressId} | |
|[**deleteContact3**](#deletecontact3) | **DELETE** /api/actors/{actorId}/contacts/{contactId} | |
|[**listAddresses3**](#listaddresses3) | **GET** /api/actors/{actorId}/addresses | |
|[**listContacts3**](#listcontacts3) | **GET** /api/actors/{actorId}/contacts | |

# **createAddress3**
> ApiResponseAddressResponse createAddress3(nestedAddressRequest)


### Example

```typescript
import {
    ActorAddressBookControllerApi,
    Configuration,
    NestedAddressRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ActorAddressBookControllerApi(configuration);

let actorId: string; // (default to undefined)
let nestedAddressRequest: NestedAddressRequest; //

const { status, data } = await apiInstance.createAddress3(
    actorId,
    nestedAddressRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **nestedAddressRequest** | **NestedAddressRequest**|  | |
| **actorId** | [**string**] |  | defaults to undefined|


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

# **createContact3**
> ApiResponseContactResponse createContact3(nestedContactRequest)


### Example

```typescript
import {
    ActorAddressBookControllerApi,
    Configuration,
    NestedContactRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ActorAddressBookControllerApi(configuration);

let actorId: string; // (default to undefined)
let nestedContactRequest: NestedContactRequest; //

const { status, data } = await apiInstance.createContact3(
    actorId,
    nestedContactRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **nestedContactRequest** | **NestedContactRequest**|  | |
| **actorId** | [**string**] |  | defaults to undefined|


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

# **deleteAddress3**
> ApiResponseVoid deleteAddress3()


### Example

```typescript
import {
    ActorAddressBookControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ActorAddressBookControllerApi(configuration);

let actorId: string; // (default to undefined)
let addressId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteAddress3(
    actorId,
    addressId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **actorId** | [**string**] |  | defaults to undefined|
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

# **deleteContact3**
> ApiResponseVoid deleteContact3()


### Example

```typescript
import {
    ActorAddressBookControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ActorAddressBookControllerApi(configuration);

let actorId: string; // (default to undefined)
let contactId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteContact3(
    actorId,
    contactId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **actorId** | [**string**] |  | defaults to undefined|
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

# **listAddresses3**
> ApiResponseListAddressResponse listAddresses3()


### Example

```typescript
import {
    ActorAddressBookControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ActorAddressBookControllerApi(configuration);

let actorId: string; // (default to undefined)

const { status, data } = await apiInstance.listAddresses3(
    actorId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **actorId** | [**string**] |  | defaults to undefined|


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

# **listContacts3**
> ApiResponseListContactResponse listContacts3()


### Example

```typescript
import {
    ActorAddressBookControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ActorAddressBookControllerApi(configuration);

let actorId: string; // (default to undefined)

const { status, data } = await apiInstance.listContacts3(
    actorId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **actorId** | [**string**] |  | defaults to undefined|


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

