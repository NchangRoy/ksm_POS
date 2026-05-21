# AccountingLegacyBrouillardControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteBrouillard**](#deletebrouillard) | **DELETE** /api/accounting/brouillards/{id} | |
|[**getBrouillard**](#getbrouillard) | **GET** /api/accounting/brouillards/{id} | |
|[**listBrouillards**](#listbrouillards) | **GET** /api/accounting/brouillards | |
|[**rejectBrouillard**](#rejectbrouillard) | **POST** /api/accounting/brouillards/{id}/reject | |
|[**uploadBrouillard**](#uploadbrouillard) | **POST** /api/accounting/brouillards/upload | |
|[**validateBrouillard**](#validatebrouillard) | **POST** /api/accounting/brouillards/{id}/validate | |

# **deleteBrouillard**
> deleteBrouillard()


### Example

```typescript
import {
    AccountingLegacyBrouillardControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBrouillardControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.deleteBrouillard(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBrouillard**
> ApiResponseBrouillardComptableDto getBrouillard()


### Example

```typescript
import {
    AccountingLegacyBrouillardControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBrouillardControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getBrouillard(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseBrouillardComptableDto**

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

# **listBrouillards**
> ApiResponseListBrouillardComptableDto listBrouillards()


### Example

```typescript
import {
    AccountingLegacyBrouillardControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBrouillardControllerApi(configuration);

let statut: 'BROUILLON' | 'EN_ATTENTE_VALIDATION' | 'VALIDE' | 'REJETE'; // (optional) (default to undefined)
let type: 'FACTURE_CLIENT' | 'FACTURE_FOURNISSEUR' | 'MOUVEMENT_STOCK' | 'MOUVEMENT_CAISSE' | 'OPERATION_BANCAIRE' | 'AUTRE'; // (optional) (default to undefined)
let page: number; // (optional) (default to 0)
let size: number; // (optional) (default to 20)

const { status, data } = await apiInstance.listBrouillards(
    statut,
    type,
    page,
    size
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **statut** | [**&#39;BROUILLON&#39; | &#39;EN_ATTENTE_VALIDATION&#39; | &#39;VALIDE&#39; | &#39;REJETE&#39;**]**Array<&#39;BROUILLON&#39; &#124; &#39;EN_ATTENTE_VALIDATION&#39; &#124; &#39;VALIDE&#39; &#124; &#39;REJETE&#39;>** |  | (optional) defaults to undefined|
| **type** | [**&#39;FACTURE_CLIENT&#39; | &#39;FACTURE_FOURNISSEUR&#39; | &#39;MOUVEMENT_STOCK&#39; | &#39;MOUVEMENT_CAISSE&#39; | &#39;OPERATION_BANCAIRE&#39; | &#39;AUTRE&#39;**]**Array<&#39;FACTURE_CLIENT&#39; &#124; &#39;FACTURE_FOURNISSEUR&#39; &#124; &#39;MOUVEMENT_STOCK&#39; &#124; &#39;MOUVEMENT_CAISSE&#39; &#124; &#39;OPERATION_BANCAIRE&#39; &#124; &#39;AUTRE&#39;>** |  | (optional) defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to 0|
| **size** | [**number**] |  | (optional) defaults to 20|


### Return type

**ApiResponseListBrouillardComptableDto**

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

# **rejectBrouillard**
> ApiResponseBrouillardComptableDto rejectBrouillard(brouillardRejectionRequest)


### Example

```typescript
import {
    AccountingLegacyBrouillardControllerApi,
    Configuration,
    BrouillardRejectionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBrouillardControllerApi(configuration);

let id: string; // (default to undefined)
let brouillardRejectionRequest: BrouillardRejectionRequest; //

const { status, data } = await apiInstance.rejectBrouillard(
    id,
    brouillardRejectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **brouillardRejectionRequest** | **BrouillardRejectionRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseBrouillardComptableDto**

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

# **uploadBrouillard**
> ApiResponseBrouillardComptableDto uploadBrouillard()


### Example

```typescript
import {
    AccountingLegacyBrouillardControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBrouillardControllerApi(configuration);

let file: File; // (default to undefined)

const { status, data } = await apiInstance.uploadBrouillard(
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] |  | defaults to undefined|


### Return type

**ApiResponseBrouillardComptableDto**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validateBrouillard**
> ApiResponseBrouillardComptableDto validateBrouillard()


### Example

```typescript
import {
    AccountingLegacyBrouillardControllerApi,
    Configuration,
    BrouillardValidationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyBrouillardControllerApi(configuration);

let id: string; // (default to undefined)
let brouillardValidationRequest: BrouillardValidationRequest; // (optional)

const { status, data } = await apiInstance.validateBrouillard(
    id,
    brouillardValidationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **brouillardValidationRequest** | **BrouillardValidationRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseBrouillardComptableDto**

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

