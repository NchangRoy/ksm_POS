# TrainingBudgetControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createBudget**](#createbudget) | **POST** /api/v1/hrm/training-budgets | |
|[**engageBudget**](#engagebudget) | **PUT** /api/v1/hrm/training-budgets/{id}/engage | |
|[**getBudget**](#getbudget) | **GET** /api/v1/hrm/training-budgets/{id} | |
|[**listBudgets**](#listbudgets) | **GET** /api/v1/hrm/training-budgets | |
|[**realiseBudget**](#realisebudget) | **PUT** /api/v1/hrm/training-budgets/{id}/realiser | |

# **createBudget**
> ApiResponseTrainingBudgetResponse createBudget(createTrainingBudgetRequest)


### Example

```typescript
import {
    TrainingBudgetControllerApi,
    Configuration,
    CreateTrainingBudgetRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TrainingBudgetControllerApi(configuration);

let createTrainingBudgetRequest: CreateTrainingBudgetRequest; //

const { status, data } = await apiInstance.createBudget(
    createTrainingBudgetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTrainingBudgetRequest** | **CreateTrainingBudgetRequest**|  | |


### Return type

**ApiResponseTrainingBudgetResponse**

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

# **engageBudget**
> ApiResponseTrainingBudgetResponse engageBudget(montantRequest)


### Example

```typescript
import {
    TrainingBudgetControllerApi,
    Configuration,
    MontantRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TrainingBudgetControllerApi(configuration);

let id: string; // (default to undefined)
let montantRequest: MontantRequest; //

const { status, data } = await apiInstance.engageBudget(
    id,
    montantRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **montantRequest** | **MontantRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseTrainingBudgetResponse**

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

# **getBudget**
> ApiResponseTrainingBudgetResponse getBudget()


### Example

```typescript
import {
    TrainingBudgetControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TrainingBudgetControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getBudget(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseTrainingBudgetResponse**

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

# **listBudgets**
> ApiResponseListTrainingBudgetResponse listBudgets()


### Example

```typescript
import {
    TrainingBudgetControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TrainingBudgetControllerApi(configuration);

let organizationId: string; // (default to undefined)
let annee: number; // (default to undefined)

const { status, data } = await apiInstance.listBudgets(
    organizationId,
    annee
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **annee** | [**number**] |  | defaults to undefined|


### Return type

**ApiResponseListTrainingBudgetResponse**

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

# **realiseBudget**
> ApiResponseTrainingBudgetResponse realiseBudget(montantRequest)


### Example

```typescript
import {
    TrainingBudgetControllerApi,
    Configuration,
    MontantRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TrainingBudgetControllerApi(configuration);

let id: string; // (default to undefined)
let montantRequest: MontantRequest; //

const { status, data } = await apiInstance.realiseBudget(
    id,
    montantRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **montantRequest** | **MontantRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseTrainingBudgetResponse**

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

