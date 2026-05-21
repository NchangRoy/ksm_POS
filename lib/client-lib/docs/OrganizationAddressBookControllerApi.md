# OrganizationAddressBookControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createAgencyAddress**](#createagencyaddress) | **POST** /api/agencies/{agencyId}/addresses | |
|[**createAgencyContact**](#createagencycontact) | **POST** /api/agencies/{agencyId}/contacts | |
|[**createOrganizationAddress**](#createorganizationaddress) | **POST** /api/organizations/{organizationId}/addresses | |
|[**createOrganizationContact**](#createorganizationcontact) | **POST** /api/organizations/{organizationId}/contacts | |
|[**deleteAgencyAddress**](#deleteagencyaddress) | **DELETE** /api/agencies/{agencyId}/addresses/{addressId} | |
|[**deleteAgencyContact**](#deleteagencycontact) | **DELETE** /api/agencies/{agencyId}/contacts/{contactId} | |
|[**deleteOrganizationAddress**](#deleteorganizationaddress) | **DELETE** /api/organizations/{organizationId}/addresses/{addressId} | |
|[**deleteOrganizationContact**](#deleteorganizationcontact) | **DELETE** /api/organizations/{organizationId}/contacts/{contactId} | |
|[**listAgencyAddresses**](#listagencyaddresses) | **GET** /api/agencies/{agencyId}/addresses | |
|[**listAgencyContacts**](#listagencycontacts) | **GET** /api/agencies/{agencyId}/contacts | |
|[**listOrganizationAddresses**](#listorganizationaddresses) | **GET** /api/organizations/{organizationId}/addresses | |
|[**listOrganizationContacts**](#listorganizationcontacts) | **GET** /api/organizations/{organizationId}/contacts | |

# **createAgencyAddress**
> ApiResponseAddressResponse createAgencyAddress(nestedAddressRequest)


### Example

```typescript
import {
    OrganizationAddressBookControllerApi,
    Configuration,
    NestedAddressRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationAddressBookControllerApi(configuration);

let agencyId: string; // (default to undefined)
let nestedAddressRequest: NestedAddressRequest; //

const { status, data } = await apiInstance.createAgencyAddress(
    agencyId,
    nestedAddressRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **nestedAddressRequest** | **NestedAddressRequest**|  | |
| **agencyId** | [**string**] |  | defaults to undefined|


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

# **createAgencyContact**
> ApiResponseContactResponse createAgencyContact(nestedContactRequest)


### Example

```typescript
import {
    OrganizationAddressBookControllerApi,
    Configuration,
    NestedContactRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationAddressBookControllerApi(configuration);

let agencyId: string; // (default to undefined)
let nestedContactRequest: NestedContactRequest; //

const { status, data } = await apiInstance.createAgencyContact(
    agencyId,
    nestedContactRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **nestedContactRequest** | **NestedContactRequest**|  | |
| **agencyId** | [**string**] |  | defaults to undefined|


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

# **createOrganizationAddress**
> ApiResponseAddressResponse createOrganizationAddress(nestedAddressRequest)


### Example

```typescript
import {
    OrganizationAddressBookControllerApi,
    Configuration,
    NestedAddressRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationAddressBookControllerApi(configuration);

let organizationId: string; // (default to undefined)
let nestedAddressRequest: NestedAddressRequest; //

const { status, data } = await apiInstance.createOrganizationAddress(
    organizationId,
    nestedAddressRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **nestedAddressRequest** | **NestedAddressRequest**|  | |
| **organizationId** | [**string**] |  | defaults to undefined|


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

# **createOrganizationContact**
> ApiResponseContactResponse createOrganizationContact(nestedContactRequest)


### Example

```typescript
import {
    OrganizationAddressBookControllerApi,
    Configuration,
    NestedContactRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationAddressBookControllerApi(configuration);

let organizationId: string; // (default to undefined)
let nestedContactRequest: NestedContactRequest; //

const { status, data } = await apiInstance.createOrganizationContact(
    organizationId,
    nestedContactRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **nestedContactRequest** | **NestedContactRequest**|  | |
| **organizationId** | [**string**] |  | defaults to undefined|


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

# **deleteAgencyAddress**
> ApiResponseVoid deleteAgencyAddress()


### Example

```typescript
import {
    OrganizationAddressBookControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationAddressBookControllerApi(configuration);

let agencyId: string; // (default to undefined)
let addressId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteAgencyAddress(
    agencyId,
    addressId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **agencyId** | [**string**] |  | defaults to undefined|
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

# **deleteAgencyContact**
> ApiResponseVoid deleteAgencyContact()


### Example

```typescript
import {
    OrganizationAddressBookControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationAddressBookControllerApi(configuration);

let agencyId: string; // (default to undefined)
let contactId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteAgencyContact(
    agencyId,
    contactId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **agencyId** | [**string**] |  | defaults to undefined|
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

# **deleteOrganizationAddress**
> ApiResponseVoid deleteOrganizationAddress()


### Example

```typescript
import {
    OrganizationAddressBookControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationAddressBookControllerApi(configuration);

let organizationId: string; // (default to undefined)
let addressId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteOrganizationAddress(
    organizationId,
    addressId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
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

# **deleteOrganizationContact**
> ApiResponseVoid deleteOrganizationContact()


### Example

```typescript
import {
    OrganizationAddressBookControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationAddressBookControllerApi(configuration);

let organizationId: string; // (default to undefined)
let contactId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteOrganizationContact(
    organizationId,
    contactId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
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

# **listAgencyAddresses**
> ApiResponseListAddressResponse listAgencyAddresses()


### Example

```typescript
import {
    OrganizationAddressBookControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationAddressBookControllerApi(configuration);

let agencyId: string; // (default to undefined)

const { status, data } = await apiInstance.listAgencyAddresses(
    agencyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **agencyId** | [**string**] |  | defaults to undefined|


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

# **listAgencyContacts**
> ApiResponseListContactResponse listAgencyContacts()


### Example

```typescript
import {
    OrganizationAddressBookControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationAddressBookControllerApi(configuration);

let agencyId: string; // (default to undefined)

const { status, data } = await apiInstance.listAgencyContacts(
    agencyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **agencyId** | [**string**] |  | defaults to undefined|


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

# **listOrganizationAddresses**
> ApiResponseListAddressResponse listOrganizationAddresses()


### Example

```typescript
import {
    OrganizationAddressBookControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationAddressBookControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.listOrganizationAddresses(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


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

# **listOrganizationContacts**
> ApiResponseListContactResponse listOrganizationContacts()


### Example

```typescript
import {
    OrganizationAddressBookControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationAddressBookControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.listOrganizationContacts(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


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

