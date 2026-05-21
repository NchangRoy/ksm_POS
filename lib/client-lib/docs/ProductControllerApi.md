# ProductControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createProduct**](#createproduct) | **POST** /api/products | |
|[**deleteProduct**](#deleteproduct) | **DELETE** /api/products/{productId} | |
|[**getProduct**](#getproduct) | **GET** /api/products/{productId} | |
|[**listProducts**](#listproducts) | **GET** /api/products | |
|[**searchProducts**](#searchproducts) | **GET** /api/products/search | |
|[**updateProduct**](#updateproduct) | **PATCH** /api/products/{productId} | |

# **createProduct**
> ApiResponseProductResponse createProduct(createProductRequest)


### Example

```typescript
import {
    ProductControllerApi,
    Configuration,
    CreateProductRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductControllerApi(configuration);

let createProductRequest: CreateProductRequest; //

const { status, data } = await apiInstance.createProduct(
    createProductRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createProductRequest** | **CreateProductRequest**|  | |


### Return type

**ApiResponseProductResponse**

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

# **deleteProduct**
> ApiResponseVoid deleteProduct()


### Example

```typescript
import {
    ProductControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductControllerApi(configuration);

let productId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteProduct(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] |  | defaults to undefined|


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

# **getProduct**
> ApiResponseProductResponse getProduct()


### Example

```typescript
import {
    ProductControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductControllerApi(configuration);

let productId: string; // (default to undefined)

const { status, data } = await apiInstance.getProduct(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseProductResponse**

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

# **listProducts**
> ApiResponseListProductResponse listProducts()


### Example

```typescript
import {
    ProductControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductControllerApi(configuration);

let organizationId: string; // (default to undefined)
let familyCode: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listProducts(
    organizationId,
    familyCode,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **familyCode** | [**string**] |  | (optional) defaults to undefined|
| **status** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ApiResponseListProductResponse**

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

# **searchProducts**
> ApiResponseListProductSearchResponse searchProducts()


### Example

```typescript
import {
    ProductControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductControllerApi(configuration);

let organizationId: string; // (default to undefined)
let q: string; // (default to undefined)
let familyCode: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.searchProducts(
    organizationId,
    q,
    familyCode,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **q** | [**string**] |  | defaults to undefined|
| **familyCode** | [**string**] |  | (optional) defaults to undefined|
| **status** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ApiResponseListProductSearchResponse**

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

# **updateProduct**
> ApiResponseProductResponse updateProduct(updateProductRequest)


### Example

```typescript
import {
    ProductControllerApi,
    Configuration,
    UpdateProductRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ProductControllerApi(configuration);

let productId: string; // (default to undefined)
let updateProductRequest: UpdateProductRequest; //

const { status, data } = await apiInstance.updateProduct(
    productId,
    updateProductRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateProductRequest** | **UpdateProductRequest**|  | |
| **productId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseProductResponse**

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

