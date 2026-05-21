# AssetPortfolioControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**agencyPortfolio**](#agencyportfolio) | **GET** /api/organizations/{organizationId}/agencies/{agencyId}/asset-portfolio | |
|[**organizationPortfolio**](#organizationportfolio) | **GET** /api/organizations/{organizationId}/asset-portfolio | |
|[**warehousePortfolio**](#warehouseportfolio) | **GET** /api/warehouses/{warehouseId}/asset-portfolio | |

# **agencyPortfolio**
> ApiResponseAssetPortfolioView agencyPortfolio()


### Example

```typescript
import {
    AssetPortfolioControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AssetPortfolioControllerApi(configuration);

let organizationId: string; // (default to undefined)
let agencyId: string; // (default to undefined)

const { status, data } = await apiInstance.agencyPortfolio(
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

**ApiResponseAssetPortfolioView**

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

# **organizationPortfolio**
> ApiResponseAssetPortfolioView organizationPortfolio()


### Example

```typescript
import {
    AssetPortfolioControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AssetPortfolioControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.organizationPortfolio(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseAssetPortfolioView**

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

# **warehousePortfolio**
> ApiResponseAssetPortfolioView warehousePortfolio()


### Example

```typescript
import {
    AssetPortfolioControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AssetPortfolioControllerApi(configuration);

let warehouseId: string; // (default to undefined)

const { status, data } = await apiInstance.warehousePortfolio(
    warehouseId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **warehouseId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseAssetPortfolioView**

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

