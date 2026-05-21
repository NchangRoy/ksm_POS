# ProductStructureControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addVariantAttribute**](#addvariantattribute) | **POST** /api/variants/{variantId}/attributes | |
|[**createBatch1**](#createbatch1) | **POST** /api/products/{productId}/batches | |
|[**createMediaAsset**](#createmediaasset) | **POST** /api/media-assets | |
|[**createVariant**](#createvariant) | **POST** /api/products/{productId}/variants | |
|[**defineVariantPrice**](#definevariantprice) | **POST** /api/variants/{variantId}/prices | |
|[**getProductSpec**](#getproductspec) | **GET** /api/products/{productId}/spec | |
|[**listBatches**](#listbatches) | **GET** /api/products/{productId}/batches | |
|[**listCategoryTranslations**](#listcategorytranslations) | **GET** /api/product-categories/{categoryId}/translations | |
|[**listMediaAssets**](#listmediaassets) | **GET** /api/media-assets | |
|[**listVariantAttributes**](#listvariantattributes) | **GET** /api/variants/{variantId}/attributes | |
|[**listVariantPrices**](#listvariantprices) | **GET** /api/variants/{variantId}/prices | |
|[**listVariants**](#listvariants) | **GET** /api/products/{productId}/variants | |
|[**resolveEffectiveVariantPrice**](#resolveeffectivevariantprice) | **GET** /api/variants/{variantId}/prices/effective | |
|[**upsertCategoryTranslation**](#upsertcategorytranslation) | **POST** /api/product-categories/{categoryId}/translations | |
|[**upsertProductSpec**](#upsertproductspec) | **PUT** /api/products/{productId}/spec | |

# **addVariantAttribute**
> ApiResponseVariantAttributeResponse addVariantAttribute(addVariantAttributeRequest)


### Example

```typescript
import {
    ProductStructureControllerApi,
    Configuration,
    AddVariantAttributeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductStructureControllerApi(configuration);

let variantId: string; // (default to undefined)
let addVariantAttributeRequest: AddVariantAttributeRequest; //

const { status, data } = await apiInstance.addVariantAttribute(
    variantId,
    addVariantAttributeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addVariantAttributeRequest** | **AddVariantAttributeRequest**|  | |
| **variantId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseVariantAttributeResponse**

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

# **createBatch1**
> ApiResponseBatchResponse createBatch1(createBatchRequest)


### Example

```typescript
import {
    ProductStructureControllerApi,
    Configuration,
    CreateBatchRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductStructureControllerApi(configuration);

let productId: string; // (default to undefined)
let createBatchRequest: CreateBatchRequest; //

const { status, data } = await apiInstance.createBatch1(
    productId,
    createBatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createBatchRequest** | **CreateBatchRequest**|  | |
| **productId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseBatchResponse**

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

# **createMediaAsset**
> ApiResponseMediaAssetResponse createMediaAsset(createMediaAssetRequest)


### Example

```typescript
import {
    ProductStructureControllerApi,
    Configuration,
    CreateMediaAssetRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductStructureControllerApi(configuration);

let createMediaAssetRequest: CreateMediaAssetRequest; //

const { status, data } = await apiInstance.createMediaAsset(
    createMediaAssetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createMediaAssetRequest** | **CreateMediaAssetRequest**|  | |


### Return type

**ApiResponseMediaAssetResponse**

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

# **createVariant**
> ApiResponseVariantResponse createVariant(createVariantRequest)


### Example

```typescript
import {
    ProductStructureControllerApi,
    Configuration,
    CreateVariantRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductStructureControllerApi(configuration);

let productId: string; // (default to undefined)
let createVariantRequest: CreateVariantRequest; //

const { status, data } = await apiInstance.createVariant(
    productId,
    createVariantRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createVariantRequest** | **CreateVariantRequest**|  | |
| **productId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseVariantResponse**

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

# **defineVariantPrice**
> ApiResponseVariantPriceResponse defineVariantPrice(defineVariantPriceRequest)


### Example

```typescript
import {
    ProductStructureControllerApi,
    Configuration,
    DefineVariantPriceRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductStructureControllerApi(configuration);

let variantId: string; // (default to undefined)
let defineVariantPriceRequest: DefineVariantPriceRequest; //

const { status, data } = await apiInstance.defineVariantPrice(
    variantId,
    defineVariantPriceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **defineVariantPriceRequest** | **DefineVariantPriceRequest**|  | |
| **variantId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseVariantPriceResponse**

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

# **getProductSpec**
> ApiResponseProductSpecResponse getProductSpec()


### Example

```typescript
import {
    ProductStructureControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductStructureControllerApi(configuration);

let productId: string; // (default to undefined)

const { status, data } = await apiInstance.getProductSpec(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseProductSpecResponse**

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

# **listBatches**
> ApiResponseListBatchResponse listBatches()


### Example

```typescript
import {
    ProductStructureControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductStructureControllerApi(configuration);

let productId: string; // (default to undefined)

const { status, data } = await apiInstance.listBatches(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListBatchResponse**

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

# **listCategoryTranslations**
> ApiResponseListCategoryI18nResponse listCategoryTranslations()


### Example

```typescript
import {
    ProductStructureControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductStructureControllerApi(configuration);

let categoryId: string; // (default to undefined)

const { status, data } = await apiInstance.listCategoryTranslations(
    categoryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **categoryId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListCategoryI18nResponse**

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

# **listMediaAssets**
> ApiResponseListMediaAssetResponse listMediaAssets()


### Example

```typescript
import {
    ProductStructureControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductStructureControllerApi(configuration);

let targetType: string; // (default to undefined)
let targetId: string; // (default to undefined)

const { status, data } = await apiInstance.listMediaAssets(
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

**ApiResponseListMediaAssetResponse**

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

# **listVariantAttributes**
> ApiResponseListVariantAttributeResponse listVariantAttributes()


### Example

```typescript
import {
    ProductStructureControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductStructureControllerApi(configuration);

let variantId: string; // (default to undefined)

const { status, data } = await apiInstance.listVariantAttributes(
    variantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **variantId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListVariantAttributeResponse**

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

# **listVariantPrices**
> ApiResponseListVariantPriceResponse listVariantPrices()


### Example

```typescript
import {
    ProductStructureControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductStructureControllerApi(configuration);

let variantId: string; // (default to undefined)

const { status, data } = await apiInstance.listVariantPrices(
    variantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **variantId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListVariantPriceResponse**

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

# **listVariants**
> ApiResponseListVariantResponse listVariants()


### Example

```typescript
import {
    ProductStructureControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductStructureControllerApi(configuration);

let productId: string; // (default to undefined)

const { status, data } = await apiInstance.listVariants(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListVariantResponse**

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

# **resolveEffectiveVariantPrice**
> ApiResponseVariantPriceResponse resolveEffectiveVariantPrice()


### Example

```typescript
import {
    ProductStructureControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductStructureControllerApi(configuration);

let variantId: string; // (default to undefined)
let priceType: string; // (default to undefined)
let at: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.resolveEffectiveVariantPrice(
    variantId,
    priceType,
    at
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **variantId** | [**string**] |  | defaults to undefined|
| **priceType** | [**string**] |  | defaults to undefined|
| **at** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ApiResponseVariantPriceResponse**

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

# **upsertCategoryTranslation**
> ApiResponseCategoryI18nResponse upsertCategoryTranslation(upsertCategoryTranslationRequest)


### Example

```typescript
import {
    ProductStructureControllerApi,
    Configuration,
    UpsertCategoryTranslationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductStructureControllerApi(configuration);

let categoryId: string; // (default to undefined)
let upsertCategoryTranslationRequest: UpsertCategoryTranslationRequest; //

const { status, data } = await apiInstance.upsertCategoryTranslation(
    categoryId,
    upsertCategoryTranslationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **upsertCategoryTranslationRequest** | **UpsertCategoryTranslationRequest**|  | |
| **categoryId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseCategoryI18nResponse**

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

# **upsertProductSpec**
> ApiResponseProductSpecResponse upsertProductSpec(upsertProductSpecRequest)


### Example

```typescript
import {
    ProductStructureControllerApi,
    Configuration,
    UpsertProductSpecRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductStructureControllerApi(configuration);

let productId: string; // (default to undefined)
let upsertProductSpecRequest: UpsertProductSpecRequest; //

const { status, data } = await apiInstance.upsertProductSpec(
    productId,
    upsertProductSpecRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **upsertProductSpecRequest** | **UpsertProductSpecRequest**|  | |
| **productId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseProductSpecResponse**

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

