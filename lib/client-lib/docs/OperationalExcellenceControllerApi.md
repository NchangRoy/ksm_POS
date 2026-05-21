# OperationalExcellenceControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**agencyPilotage**](#agencypilotage) | **GET** /api/administration/operational-excellence/organizations/{organizationId}/agencies/{agencyId}/pilotage | |
|[**approveDocument**](#approvedocument) | **POST** /api/administration/operational-excellence/documents/{documentLinkId}/approve | |
|[**commissionAsset**](#commissionasset) | **POST** /api/administration/operational-excellence/resources/{resourceId}/commission | |
|[**commissionSite**](#commissionsite) | **POST** /api/administration/operational-excellence/organizations/{organizationId}/agencies/{agencyId}/commission-site | |
|[**compliance**](#compliance) | **GET** /api/administration/operational-excellence/organizations/{organizationId}/compliance | |
|[**organizationPilotage**](#organizationpilotage) | **GET** /api/administration/operational-excellence/organizations/{organizationId}/pilotage | |
|[**prepareInventoryCampaign**](#prepareinventorycampaign) | **POST** /api/administration/operational-excellence/organizations/{organizationId}/inventory-campaigns/prepare | |
|[**retireAsset1**](#retireasset1) | **POST** /api/administration/operational-excellence/resources/{resourceId}/retire | |
|[**timeline**](#timeline) | **GET** /api/administration/operational-excellence/organizations/{organizationId}/timeline | |

# **agencyPilotage**
> ApiResponseAgencyOperationalPilotageView agencyPilotage()


### Example

```typescript
import {
    OperationalExcellenceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationalExcellenceControllerApi(configuration);

let organizationId: string; // (default to undefined)
let agencyId: string; // (default to undefined)

const { status, data } = await apiInstance.agencyPilotage(
    organizationId,
    agencyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **agencyId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseAgencyOperationalPilotageView**

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

# **approveDocument**
> ApiResponseDocumentReviewResponse approveDocument(approveDocumentRequest)


### Example

```typescript
import {
    OperationalExcellenceControllerApi,
    Configuration,
    ApproveDocumentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationalExcellenceControllerApi(configuration);

let documentLinkId: string; // (default to undefined)
let approveDocumentRequest: ApproveDocumentRequest; //

const { status, data } = await apiInstance.approveDocument(
    documentLinkId,
    approveDocumentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **approveDocumentRequest** | **ApproveDocumentRequest**|  | |
| **documentLinkId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseDocumentReviewResponse**

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

# **commissionAsset**
> ApiResponseAssetProfileResponse commissionAsset(commissionAssetRequest)


### Example

```typescript
import {
    OperationalExcellenceControllerApi,
    Configuration,
    CommissionAssetRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationalExcellenceControllerApi(configuration);

let resourceId: string; // (default to undefined)
let commissionAssetRequest: CommissionAssetRequest; //

const { status, data } = await apiInstance.commissionAsset(
    resourceId,
    commissionAssetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **commissionAssetRequest** | **CommissionAssetRequest**|  | |
| **resourceId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseAssetProfileResponse**

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

# **commissionSite**
> ApiResponseAgencyOperationalPilotageView commissionSite(commissionSiteRequest)


### Example

```typescript
import {
    OperationalExcellenceControllerApi,
    Configuration,
    CommissionSiteRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationalExcellenceControllerApi(configuration);

let organizationId: string; // (default to undefined)
let agencyId: string; // (default to undefined)
let commissionSiteRequest: CommissionSiteRequest; //

const { status, data } = await apiInstance.commissionSite(
    organizationId,
    agencyId,
    commissionSiteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **commissionSiteRequest** | **CommissionSiteRequest**|  | |
| **organizationId** | [**string**] |  | defaults to undefined|
| **agencyId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseAgencyOperationalPilotageView**

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

# **compliance**
> ApiResponseOperationalComplianceOverview compliance()


### Example

```typescript
import {
    OperationalExcellenceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationalExcellenceControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.compliance(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseOperationalComplianceOverview**

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

# **organizationPilotage**
> ApiResponseOrganizationOperationalPilotageView organizationPilotage()


### Example

```typescript
import {
    OperationalExcellenceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationalExcellenceControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.organizationPilotage(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseOrganizationOperationalPilotageView**

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

# **prepareInventoryCampaign**
> ApiResponseGeneralizedInventoryCampaignResponse prepareInventoryCampaign(prepareInventoryCampaignRequest)


### Example

```typescript
import {
    OperationalExcellenceControllerApi,
    Configuration,
    PrepareInventoryCampaignRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationalExcellenceControllerApi(configuration);

let organizationId: string; // (default to undefined)
let prepareInventoryCampaignRequest: PrepareInventoryCampaignRequest; //

const { status, data } = await apiInstance.prepareInventoryCampaign(
    organizationId,
    prepareInventoryCampaignRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **prepareInventoryCampaignRequest** | **PrepareInventoryCampaignRequest**|  | |
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseGeneralizedInventoryCampaignResponse**

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

# **retireAsset1**
> ApiResponseAssetProfileResponse retireAsset1(retireAssetRequest)


### Example

```typescript
import {
    OperationalExcellenceControllerApi,
    Configuration,
    RetireAssetRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationalExcellenceControllerApi(configuration);

let resourceId: string; // (default to undefined)
let retireAssetRequest: RetireAssetRequest; //

const { status, data } = await apiInstance.retireAsset1(
    resourceId,
    retireAssetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **retireAssetRequest** | **RetireAssetRequest**|  | |
| **resourceId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseAssetProfileResponse**

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

# **timeline**
> ApiResponseListTimelineEntryView timeline()


### Example

```typescript
import {
    OperationalExcellenceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OperationalExcellenceControllerApi(configuration);

let organizationId: string; // (default to undefined)
let limit: number; // (optional) (default to 50)

const { status, data } = await apiInstance.timeline(
    organizationId,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to 50|


### Return type

**ApiResponseListTimelineEntryView**

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

