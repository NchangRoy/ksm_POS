# ReviewControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**acknowledgeReview**](#acknowledgereview) | **PUT** /api/v1/hrm/reviews/{reviewId}/acknowledge | |
|[**addObjective**](#addobjective) | **POST** /api/v1/hrm/reviews/{reviewId}/objectives | |
|[**createReview**](#createreview) | **POST** /api/v1/hrm/reviews | |
|[**evaluateObjective**](#evaluateobjective) | **PUT** /api/v1/hrm/reviews/objectives/{objectiveId}/evaluate | |
|[**finalizeReview**](#finalizereview) | **PUT** /api/v1/hrm/reviews/{reviewId}/finalize | |
|[**getReview**](#getreview) | **GET** /api/v1/hrm/reviews/{reviewId} | |
|[**listByEmployee2**](#listbyemployee2) | **GET** /api/v1/hrm/reviews/employee/{employeeId} | |
|[**listByOrganizationAndPeriode**](#listbyorganizationandperiode) | **GET** /api/v1/hrm/reviews | |
|[**listObjectives**](#listobjectives) | **GET** /api/v1/hrm/reviews/{reviewId}/objectives | |
|[**submitReview**](#submitreview) | **PUT** /api/v1/hrm/reviews/{reviewId}/submit | |

# **acknowledgeReview**
> ApiResponseReviewResponse acknowledgeReview()


### Example

```typescript
import {
    ReviewControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ReviewControllerApi(configuration);

let reviewId: string; // (default to undefined)

const { status, data } = await apiInstance.acknowledgeReview(
    reviewId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reviewId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseReviewResponse**

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

# **addObjective**
> ApiResponseObjectiveResponse addObjective(addObjectiveRequest)


### Example

```typescript
import {
    ReviewControllerApi,
    Configuration,
    AddObjectiveRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReviewControllerApi(configuration);

let reviewId: string; // (default to undefined)
let addObjectiveRequest: AddObjectiveRequest; //

const { status, data } = await apiInstance.addObjective(
    reviewId,
    addObjectiveRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addObjectiveRequest** | **AddObjectiveRequest**|  | |
| **reviewId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseObjectiveResponse**

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

# **createReview**
> ApiResponseReviewResponse createReview(createReviewRequest)


### Example

```typescript
import {
    ReviewControllerApi,
    Configuration,
    CreateReviewRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReviewControllerApi(configuration);

let createReviewRequest: CreateReviewRequest; //

const { status, data } = await apiInstance.createReview(
    createReviewRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createReviewRequest** | **CreateReviewRequest**|  | |


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

# **evaluateObjective**
> ApiResponseObjectiveResponse evaluateObjective(evaluateObjectiveRequest)


### Example

```typescript
import {
    ReviewControllerApi,
    Configuration,
    EvaluateObjectiveRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReviewControllerApi(configuration);

let objectiveId: string; // (default to undefined)
let evaluateObjectiveRequest: EvaluateObjectiveRequest; //

const { status, data } = await apiInstance.evaluateObjective(
    objectiveId,
    evaluateObjectiveRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **evaluateObjectiveRequest** | **EvaluateObjectiveRequest**|  | |
| **objectiveId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseObjectiveResponse**

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

# **finalizeReview**
> ApiResponseReviewResponse finalizeReview()


### Example

```typescript
import {
    ReviewControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ReviewControllerApi(configuration);

let reviewId: string; // (default to undefined)

const { status, data } = await apiInstance.finalizeReview(
    reviewId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reviewId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseReviewResponse**

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

# **getReview**
> ApiResponseReviewResponse getReview()


### Example

```typescript
import {
    ReviewControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ReviewControllerApi(configuration);

let reviewId: string; // (default to undefined)

const { status, data } = await apiInstance.getReview(
    reviewId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reviewId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseReviewResponse**

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

# **listByEmployee2**
> ApiResponseListReviewResponse listByEmployee2()


### Example

```typescript
import {
    ReviewControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ReviewControllerApi(configuration);

let employeeId: string; // (default to undefined)

const { status, data } = await apiInstance.listByEmployee2(
    employeeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **employeeId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListReviewResponse**

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

# **listByOrganizationAndPeriode**
> ApiResponseListReviewResponse listByOrganizationAndPeriode()


### Example

```typescript
import {
    ReviewControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ReviewControllerApi(configuration);

let organizationId: string; // (default to undefined)
let periode: string; // (default to undefined)

const { status, data } = await apiInstance.listByOrganizationAndPeriode(
    organizationId,
    periode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **periode** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListReviewResponse**

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

# **listObjectives**
> ApiResponseListObjectiveResponse listObjectives()


### Example

```typescript
import {
    ReviewControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ReviewControllerApi(configuration);

let reviewId: string; // (default to undefined)

const { status, data } = await apiInstance.listObjectives(
    reviewId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reviewId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListObjectiveResponse**

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

# **submitReview**
> ApiResponseReviewResponse submitReview(submitReviewRequest)


### Example

```typescript
import {
    ReviewControllerApi,
    Configuration,
    SubmitReviewRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ReviewControllerApi(configuration);

let reviewId: string; // (default to undefined)
let submitReviewRequest: SubmitReviewRequest; //

const { status, data } = await apiInstance.submitReview(
    reviewId,
    submitReviewRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **submitReviewRequest** | **SubmitReviewRequest**|  | |
| **reviewId** | [**string**] |  | defaults to undefined|


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

