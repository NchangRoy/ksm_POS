# DocumentGovernanceControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**overview2**](#overview2) | **GET** /api/document-governance/organizations/{organizationId}/overview | |
|[**review1**](#review1) | **POST** /api/document-governance/documents/{documentLinkId}/reviews | |
|[**targetStatus**](#targetstatus) | **GET** /api/document-governance/targets/{targetType}/{targetId} | |
|[**upsertAgencyPolicy1**](#upsertagencypolicy1) | **PUT** /api/document-governance/organizations/{organizationId}/agencies/{agencyId}/policies/{targetType}/{documentCategory} | |
|[**upsertOrganizationPolicy1**](#upsertorganizationpolicy1) | **PUT** /api/document-governance/organizations/{organizationId}/policies/{targetType}/{documentCategory} | |

# **overview2**
> ApiResponseDocumentGovernanceOverview overview2()


### Example

```typescript
import {
    DocumentGovernanceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentGovernanceControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.overview2(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseDocumentGovernanceOverview**

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

# **review1**
> ApiResponseReviewResponse review1(reviewDocumentRequest)


### Example

```typescript
import {
    DocumentGovernanceControllerApi,
    Configuration,
    ReviewDocumentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentGovernanceControllerApi(configuration);

let documentLinkId: string; // (default to undefined)
let reviewDocumentRequest: ReviewDocumentRequest; //

const { status, data } = await apiInstance.review1(
    documentLinkId,
    reviewDocumentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reviewDocumentRequest** | **ReviewDocumentRequest**|  | |
| **documentLinkId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseReviewResponse**

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

# **targetStatus**
> ApiResponseListDocumentStatusView targetStatus()


### Example

```typescript
import {
    DocumentGovernanceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentGovernanceControllerApi(configuration);

let targetType: string; // (default to undefined)
let targetId: string; // (default to undefined)

const { status, data } = await apiInstance.targetStatus(
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

**ApiResponseListDocumentStatusView**

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

# **upsertAgencyPolicy1**
> ApiResponsePolicyResponse upsertAgencyPolicy1(upsertPolicyRequest)


### Example

```typescript
import {
    DocumentGovernanceControllerApi,
    Configuration,
    UpsertPolicyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentGovernanceControllerApi(configuration);

let organizationId: string; // (default to undefined)
let agencyId: string; // (default to undefined)
let targetType: string; // (default to undefined)
let documentCategory: string; // (default to undefined)
let upsertPolicyRequest: UpsertPolicyRequest; //

const { status, data } = await apiInstance.upsertAgencyPolicy1(
    organizationId,
    agencyId,
    targetType,
    documentCategory,
    upsertPolicyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **upsertPolicyRequest** | **UpsertPolicyRequest**|  | |
| **organizationId** | [**string**] |  | defaults to undefined|
| **agencyId** | [**string**] |  | defaults to undefined|
| **targetType** | [**string**] |  | defaults to undefined|
| **documentCategory** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponsePolicyResponse**

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

# **upsertOrganizationPolicy1**
> ApiResponsePolicyResponse upsertOrganizationPolicy1(upsertPolicyRequest)


### Example

```typescript
import {
    DocumentGovernanceControllerApi,
    Configuration,
    UpsertPolicyRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new DocumentGovernanceControllerApi(configuration);

let organizationId: string; // (default to undefined)
let targetType: string; // (default to undefined)
let documentCategory: string; // (default to undefined)
let upsertPolicyRequest: UpsertPolicyRequest; //

const { status, data } = await apiInstance.upsertOrganizationPolicy1(
    organizationId,
    targetType,
    documentCategory,
    upsertPolicyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **upsertPolicyRequest** | **UpsertPolicyRequest**|  | |
| **organizationId** | [**string**] |  | defaults to undefined|
| **targetType** | [**string**] |  | defaults to undefined|
| **documentCategory** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponsePolicyResponse**

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

