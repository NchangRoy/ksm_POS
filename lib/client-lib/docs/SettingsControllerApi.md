# SettingsControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**listSequences**](#listsequences) | **GET** /api/settings/document-sequences | |
|[**upsertSequence**](#upsertsequence) | **POST** /api/settings/document-sequences | |

# **listSequences**
> ApiResponseListDocumentSequenceResponse listSequences()


### Example

```typescript
import {
    SettingsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SettingsControllerApi(configuration);

let organizationId: string; // (default to undefined)
let agencyId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listSequences(
    organizationId,
    agencyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **agencyId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ApiResponseListDocumentSequenceResponse**

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

# **upsertSequence**
> ApiResponseDocumentSequenceResponse upsertSequence(upsertDocumentSequenceRequest)


### Example

```typescript
import {
    SettingsControllerApi,
    Configuration,
    UpsertDocumentSequenceRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new SettingsControllerApi(configuration);

let upsertDocumentSequenceRequest: UpsertDocumentSequenceRequest; //

const { status, data } = await apiInstance.upsertSequence(
    upsertDocumentSequenceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **upsertDocumentSequenceRequest** | **UpsertDocumentSequenceRequest**|  | |


### Return type

**ApiResponseDocumentSequenceResponse**

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

