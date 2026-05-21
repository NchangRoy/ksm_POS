# ProductCatalogControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCategory**](#createcategory) | **POST** /api/product-categories | |
|[**definePrice**](#defineprice) | **POST** /api/products/{productId}/prices | |
|[**listCategories**](#listcategories) | **GET** /api/product-categories | |
|[**listPrices**](#listprices) | **GET** /api/products/{productId}/prices | |
|[**resolveEffectivePrice**](#resolveeffectiveprice) | **GET** /api/products/{productId}/prices/effective | |

# **createCategory**
> ApiResponseProductCategoryResponse createCategory(createProductCategoryRequest)


### Example

```typescript
import {
    ProductCatalogControllerApi,
    Configuration,
    CreateProductCategoryRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductCatalogControllerApi(configuration);

let createProductCategoryRequest: CreateProductCategoryRequest; //

const { status, data } = await apiInstance.createCategory(
    createProductCategoryRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createProductCategoryRequest** | **CreateProductCategoryRequest**|  | |


### Return type

**ApiResponseProductCategoryResponse**

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

# **definePrice**
> ApiResponseProductPriceResponse definePrice(defineProductPriceRequest)


### Example

```typescript
import {
    ProductCatalogControllerApi,
    Configuration,
    DefineProductPriceRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductCatalogControllerApi(configuration);

let productId: string; // (default to undefined)
let defineProductPriceRequest: DefineProductPriceRequest; //

const { status, data } = await apiInstance.definePrice(
    productId,
    defineProductPriceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **defineProductPriceRequest** | **DefineProductPriceRequest**|  | |
| **productId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseProductPriceResponse**

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

# **listCategories**
> ApiResponseListProductCategoryResponse listCategories()


### Example

```typescript
import {
    ProductCatalogControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductCatalogControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.listCategories(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListProductCategoryResponse**

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

# **listPrices**
> ApiResponseListProductPriceResponse listPrices()


### Example

```typescript
import {
    ProductCatalogControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductCatalogControllerApi(configuration);

let productId: string; // (default to undefined)

const { status, data } = await apiInstance.listPrices(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListProductPriceResponse**

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

# **resolveEffectivePrice**
> ApiResponseProductPriceResponse resolveEffectivePrice()


### Example

```typescript
import {
    ProductCatalogControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductCatalogControllerApi(configuration);

let productId: string; // (default to undefined)
let priceType: string; // (default to undefined)
let at: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.resolveEffectivePrice(
    productId,
    priceType,
    at
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] |  | defaults to undefined|
| **priceType** | [**string**] |  | defaults to undefined|
| **at** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ApiResponseProductPriceResponse**

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

