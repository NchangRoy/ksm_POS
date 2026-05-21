# TrainingControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cancelEnrollment**](#cancelenrollment) | **PUT** /api/v1/hrm/trainings/enrollments/{enrollmentId}/cancel | |
|[**cancelTraining**](#canceltraining) | **PUT** /api/v1/hrm/trainings/{trainingId}/cancel | |
|[**completeEnrollment**](#completeenrollment) | **PUT** /api/v1/hrm/trainings/enrollments/{enrollmentId}/complete | |
|[**completeTraining**](#completetraining) | **PUT** /api/v1/hrm/trainings/{trainingId}/complete | |
|[**enrollEmployee**](#enrollemployee) | **POST** /api/v1/hrm/trainings/{trainingId}/enrollments | |
|[**getTraining**](#gettraining) | **GET** /api/v1/hrm/trainings/{trainingId} | |
|[**listByOrganization**](#listbyorganization) | **GET** /api/v1/hrm/trainings | |
|[**listEnrollmentsByEmployee**](#listenrollmentsbyemployee) | **GET** /api/v1/hrm/trainings/enrollments/employee/{employeeId} | |
|[**listEnrollmentsByTraining**](#listenrollmentsbytraining) | **GET** /api/v1/hrm/trainings/{trainingId}/enrollments | |
|[**planTraining**](#plantraining) | **POST** /api/v1/hrm/trainings | |
|[**startTraining**](#starttraining) | **PUT** /api/v1/hrm/trainings/{trainingId}/start | |

# **cancelEnrollment**
> ApiResponseEnrollmentResponse cancelEnrollment()


### Example

```typescript
import {
    TrainingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TrainingControllerApi(configuration);

let enrollmentId: string; // (default to undefined)

const { status, data } = await apiInstance.cancelEnrollment(
    enrollmentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **enrollmentId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseEnrollmentResponse**

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

# **cancelTraining**
> ApiResponseTrainingResponse cancelTraining()


### Example

```typescript
import {
    TrainingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TrainingControllerApi(configuration);

let trainingId: string; // (default to undefined)

const { status, data } = await apiInstance.cancelTraining(
    trainingId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **trainingId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseTrainingResponse**

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

# **completeEnrollment**
> ApiResponseEnrollmentResponse completeEnrollment(completeEnrollmentRequest)


### Example

```typescript
import {
    TrainingControllerApi,
    Configuration,
    CompleteEnrollmentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TrainingControllerApi(configuration);

let enrollmentId: string; // (default to undefined)
let completeEnrollmentRequest: CompleteEnrollmentRequest; //

const { status, data } = await apiInstance.completeEnrollment(
    enrollmentId,
    completeEnrollmentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **completeEnrollmentRequest** | **CompleteEnrollmentRequest**|  | |
| **enrollmentId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseEnrollmentResponse**

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

# **completeTraining**
> ApiResponseTrainingResponse completeTraining()


### Example

```typescript
import {
    TrainingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TrainingControllerApi(configuration);

let trainingId: string; // (default to undefined)

const { status, data } = await apiInstance.completeTraining(
    trainingId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **trainingId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseTrainingResponse**

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

# **enrollEmployee**
> ApiResponseEnrollmentResponse enrollEmployee(enrollRequest)


### Example

```typescript
import {
    TrainingControllerApi,
    Configuration,
    EnrollRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TrainingControllerApi(configuration);

let trainingId: string; // (default to undefined)
let enrollRequest: EnrollRequest; //

const { status, data } = await apiInstance.enrollEmployee(
    trainingId,
    enrollRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **enrollRequest** | **EnrollRequest**|  | |
| **trainingId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseEnrollmentResponse**

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

# **getTraining**
> ApiResponseTrainingResponse getTraining()


### Example

```typescript
import {
    TrainingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TrainingControllerApi(configuration);

let trainingId: string; // (default to undefined)

const { status, data } = await apiInstance.getTraining(
    trainingId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **trainingId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseTrainingResponse**

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

# **listByOrganization**
> ApiResponseListTrainingResponse listByOrganization()


### Example

```typescript
import {
    TrainingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TrainingControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.listByOrganization(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListTrainingResponse**

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

# **listEnrollmentsByEmployee**
> ApiResponseListEnrollmentResponse listEnrollmentsByEmployee()


### Example

```typescript
import {
    TrainingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TrainingControllerApi(configuration);

let employeeId: string; // (default to undefined)

const { status, data } = await apiInstance.listEnrollmentsByEmployee(
    employeeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **employeeId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListEnrollmentResponse**

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

# **listEnrollmentsByTraining**
> ApiResponseListEnrollmentResponse listEnrollmentsByTraining()


### Example

```typescript
import {
    TrainingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TrainingControllerApi(configuration);

let trainingId: string; // (default to undefined)

const { status, data } = await apiInstance.listEnrollmentsByTraining(
    trainingId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **trainingId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListEnrollmentResponse**

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

# **planTraining**
> ApiResponseTrainingResponse planTraining(planTrainingRequest)


### Example

```typescript
import {
    TrainingControllerApi,
    Configuration,
    PlanTrainingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TrainingControllerApi(configuration);

let planTrainingRequest: PlanTrainingRequest; //

const { status, data } = await apiInstance.planTraining(
    planTrainingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **planTrainingRequest** | **PlanTrainingRequest**|  | |


### Return type

**ApiResponseTrainingResponse**

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

# **startTraining**
> ApiResponseTrainingResponse startTraining()


### Example

```typescript
import {
    TrainingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TrainingControllerApi(configuration);

let trainingId: string; // (default to undefined)

const { status, data } = await apiInstance.startTraining(
    trainingId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **trainingId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseTrainingResponse**

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

