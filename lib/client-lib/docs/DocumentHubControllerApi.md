# DocumentHubControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**attachDocument**](#attachdocument) | **POST** /api/document-hub/links | |
|[**listOrganizationDocuments**](#listorganizationdocuments) | **GET** /api/document-hub/organizations/{organizationId} | |
|[**listTargetDocuments**](#listtargetdocuments) | **GET** /api/document-hub/targets/{targetType}/{targetId} | |
|[**overview1**](#overview1) | **GET** /api/document-hub/organizations/{organizationId}/overview | |

# **attachDocument**
> ApiResponseDocumentLinkView attachDocument(attachDocumentRequest)


### Example

```typescript
import {
    DocumentHubControllerApi,
    Configuration,
    AttachDocumentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentHubControllerApi(configuration);

let attachDocumentRequest: AttachDocumentRequest; //

const { status, data } = await apiInstance.attachDocument(
    attachDocumentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachDocumentRequest** | **AttachDocumentRequest**|  | |


### Return type

**ApiResponseDocumentLinkView**

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

# **listOrganizationDocuments**
> ApiResponseListDocumentLinkView listOrganizationDocuments()


### Example

```typescript
import {
    DocumentHubControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentHubControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.listOrganizationDocuments(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListDocumentLinkView**

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

# **listTargetDocuments**
> ApiResponseListDocumentLinkView listTargetDocuments()


### Example

```typescript
import {
    DocumentHubControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentHubControllerApi(configuration);

let targetType: string; // (default to undefined)
let targetId: string; // (default to undefined)

const { status, data } = await apiInstance.listTargetDocuments(
    targetType,
    targetId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **targetType** | [**string**] |  | defaults to undefined|
| **targetId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListDocumentLinkView**

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

# **overview1**
> ApiResponseDocumentHubOverview overview1()


### Example

```typescript
import {
    DocumentHubControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentHubControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.overview1(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseDocumentHubOverview**

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

