# ContactControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createContact2**](#createcontact2) | **POST** /api/contacts | |
|[**deleteContact2**](#deletecontact2) | **DELETE** /api/contacts/{contactId} | |
|[**listContacts2**](#listcontacts2) | **GET** /api/contacts | |

# **createContact2**
> ApiResponseContactResponse createContact2(createContactRequest)


### Example

```typescript
import {
    ContactControllerApi,
    Configuration,
    CreateContactRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactControllerApi(configuration);

let xTenantId: string; // (default to undefined)
let createContactRequest: CreateContactRequest; //

const { status, data } = await apiInstance.createContact2(
    xTenantId,
    createContactRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createContactRequest** | **CreateContactRequest**|  | |
| **xTenantId** | [**string**] |  | defaults to undefined|


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

# **deleteContact2**
> ApiResponseVoid deleteContact2()


### Example

```typescript
import {
    ContactControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactControllerApi(configuration);

let xTenantId: string; // (default to undefined)
let contactId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteContact2(
    xTenantId,
    contactId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xTenantId** | [**string**] |  | defaults to undefined|
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

# **listContacts2**
> ApiResponseListContactResponse listContacts2()


### Example

```typescript
import {
    ContactControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactControllerApi(configuration);

let xTenantId: string; // (default to undefined)
let contactableType: 'ACTOR' | 'ORGANIZATION' | 'AGENCY' | 'THIRD_PARTY' | 'RESOURCE'; // (default to undefined)
let contactableId: string; // (default to undefined)

const { status, data } = await apiInstance.listContacts2(
    xTenantId,
    contactableType,
    contactableId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **xTenantId** | [**string**] |  | defaults to undefined|
| **contactableType** | [**&#39;ACTOR&#39; | &#39;ORGANIZATION&#39; | &#39;AGENCY&#39; | &#39;THIRD_PARTY&#39; | &#39;RESOURCE&#39;**]**Array<&#39;ACTOR&#39; &#124; &#39;ORGANIZATION&#39; &#124; &#39;AGENCY&#39; &#124; &#39;THIRD_PARTY&#39; &#124; &#39;RESOURCE&#39;>** |  | defaults to undefined|
| **contactableId** | [**string**] |  | defaults to undefined|


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

