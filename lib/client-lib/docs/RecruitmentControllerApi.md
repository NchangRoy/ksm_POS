# RecruitmentControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**closeJobOffer**](#closejoboffer) | **PUT** /api/v1/hrm/job-offers/{id}/close | |
|[**completeInterview**](#completeinterview) | **PUT** /api/v1/hrm/interviews/{id}/complete | |
|[**completeOnboardingTask**](#completeonboardingtask) | **PUT** /api/v1/hrm/onboarding-tasks/{id}/complete | |
|[**createApplication**](#createapplication) | **POST** /api/v1/hrm/applications | |
|[**createJobOffer**](#createjoboffer) | **POST** /api/v1/hrm/job-offers | |
|[**createOnboardingTask**](#createonboardingtask) | **POST** /api/v1/hrm/onboarding-tasks | |
|[**getApplication**](#getapplication) | **GET** /api/v1/hrm/applications/{id} | |
|[**getJobOffer**](#getjoboffer) | **GET** /api/v1/hrm/job-offers/{id} | |
|[**hireApplication**](#hireapplication) | **PUT** /api/v1/hrm/applications/{id}/hire | |
|[**interviewApplication**](#interviewapplication) | **PUT** /api/v1/hrm/applications/{id}/interview | |
|[**listApplications**](#listapplications) | **GET** /api/v1/hrm/job-offers/{jobOfferId}/applications | |
|[**listInterviews**](#listinterviews) | **GET** /api/v1/hrm/applications/{applicationId}/interviews | |
|[**listJobOffers**](#listjoboffers) | **GET** /api/v1/hrm/job-offers | |
|[**listOnboardingTasks**](#listonboardingtasks) | **GET** /api/v1/hrm/onboarding-tasks/employee/{employeeId} | |
|[**offerApplication**](#offerapplication) | **PUT** /api/v1/hrm/applications/{id}/offer | |
|[**publishJobOffer**](#publishjoboffer) | **PUT** /api/v1/hrm/job-offers/{id}/publish | |
|[**rejectApplication**](#rejectapplication) | **PUT** /api/v1/hrm/applications/{id}/reject | |
|[**scheduleInterview**](#scheduleinterview) | **POST** /api/v1/hrm/interviews | |
|[**shortlistApplication**](#shortlistapplication) | **PUT** /api/v1/hrm/applications/{id}/shortlist | |
|[**startOnboardingTask**](#startonboardingtask) | **PUT** /api/v1/hrm/onboarding-tasks/{id}/start | |

# **closeJobOffer**
> ApiResponseJobOfferResponse closeJobOffer()


### Example

```typescript
import {
    RecruitmentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RecruitmentControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.closeJobOffer(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseJobOfferResponse**

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

# **completeInterview**
> ApiResponseInterviewResponse completeInterview(completeInterviewRequest)


### Example

```typescript
import {
    RecruitmentControllerApi,
    Configuration,
    CompleteInterviewRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new RecruitmentControllerApi(configuration);

let id: string; // (default to undefined)
let completeInterviewRequest: CompleteInterviewRequest; //

const { status, data } = await apiInstance.completeInterview(
    id,
    completeInterviewRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **completeInterviewRequest** | **CompleteInterviewRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseInterviewResponse**

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

# **completeOnboardingTask**
> ApiResponseOnboardingTaskResponse completeOnboardingTask()


### Example

```typescript
import {
    RecruitmentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RecruitmentControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.completeOnboardingTask(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseOnboardingTaskResponse**

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

# **createApplication**
> ApiResponseApplicationResponse createApplication(createApplicationRequest)


### Example

```typescript
import {
    RecruitmentControllerApi,
    Configuration,
    CreateApplicationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new RecruitmentControllerApi(configuration);

let createApplicationRequest: CreateApplicationRequest; //

const { status, data } = await apiInstance.createApplication(
    createApplicationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createApplicationRequest** | **CreateApplicationRequest**|  | |


### Return type

**ApiResponseApplicationResponse**

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

# **createJobOffer**
> ApiResponseJobOfferResponse createJobOffer(createJobOfferRequest)


### Example

```typescript
import {
    RecruitmentControllerApi,
    Configuration,
    CreateJobOfferRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new RecruitmentControllerApi(configuration);

let createJobOfferRequest: CreateJobOfferRequest; //

const { status, data } = await apiInstance.createJobOffer(
    createJobOfferRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createJobOfferRequest** | **CreateJobOfferRequest**|  | |


### Return type

**ApiResponseJobOfferResponse**

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

# **createOnboardingTask**
> ApiResponseOnboardingTaskResponse createOnboardingTask(createOnboardingTaskRequest)


### Example

```typescript
import {
    RecruitmentControllerApi,
    Configuration,
    CreateOnboardingTaskRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new RecruitmentControllerApi(configuration);

let createOnboardingTaskRequest: CreateOnboardingTaskRequest; //

const { status, data } = await apiInstance.createOnboardingTask(
    createOnboardingTaskRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createOnboardingTaskRequest** | **CreateOnboardingTaskRequest**|  | |


### Return type

**ApiResponseOnboardingTaskResponse**

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

# **getApplication**
> ApiResponseApplicationResponse getApplication()


### Example

```typescript
import {
    RecruitmentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RecruitmentControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getApplication(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseApplicationResponse**

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

# **getJobOffer**
> ApiResponseJobOfferResponse getJobOffer()


### Example

```typescript
import {
    RecruitmentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RecruitmentControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getJobOffer(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseJobOfferResponse**

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

# **hireApplication**
> ApiResponseApplicationResponse hireApplication()


### Example

```typescript
import {
    RecruitmentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RecruitmentControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.hireApplication(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseApplicationResponse**

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

# **interviewApplication**
> ApiResponseApplicationResponse interviewApplication()


### Example

```typescript
import {
    RecruitmentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RecruitmentControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.interviewApplication(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseApplicationResponse**

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

# **listApplications**
> ApiResponseListApplicationResponse listApplications()


### Example

```typescript
import {
    RecruitmentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RecruitmentControllerApi(configuration);

let jobOfferId: string; // (default to undefined)

const { status, data } = await apiInstance.listApplications(
    jobOfferId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **jobOfferId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListApplicationResponse**

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

# **listInterviews**
> ApiResponseListInterviewResponse listInterviews()


### Example

```typescript
import {
    RecruitmentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RecruitmentControllerApi(configuration);

let applicationId: string; // (default to undefined)

const { status, data } = await apiInstance.listInterviews(
    applicationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applicationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListInterviewResponse**

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

# **listJobOffers**
> ApiResponseListJobOfferResponse listJobOffers()


### Example

```typescript
import {
    RecruitmentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RecruitmentControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.listJobOffers(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListJobOfferResponse**

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

# **listOnboardingTasks**
> ApiResponseListOnboardingTaskResponse listOnboardingTasks()


### Example

```typescript
import {
    RecruitmentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RecruitmentControllerApi(configuration);

let employeeId: string; // (default to undefined)

const { status, data } = await apiInstance.listOnboardingTasks(
    employeeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **employeeId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListOnboardingTaskResponse**

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

# **offerApplication**
> ApiResponseApplicationResponse offerApplication()


### Example

```typescript
import {
    RecruitmentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RecruitmentControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.offerApplication(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseApplicationResponse**

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

# **publishJobOffer**
> ApiResponseJobOfferResponse publishJobOffer()


### Example

```typescript
import {
    RecruitmentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RecruitmentControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.publishJobOffer(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseJobOfferResponse**

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

# **rejectApplication**
> ApiResponseApplicationResponse rejectApplication()


### Example

```typescript
import {
    RecruitmentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RecruitmentControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.rejectApplication(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseApplicationResponse**

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

# **scheduleInterview**
> ApiResponseInterviewResponse scheduleInterview(scheduleInterviewRequest)


### Example

```typescript
import {
    RecruitmentControllerApi,
    Configuration,
    ScheduleInterviewRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new RecruitmentControllerApi(configuration);

let scheduleInterviewRequest: ScheduleInterviewRequest; //

const { status, data } = await apiInstance.scheduleInterview(
    scheduleInterviewRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **scheduleInterviewRequest** | **ScheduleInterviewRequest**|  | |


### Return type

**ApiResponseInterviewResponse**

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

# **shortlistApplication**
> ApiResponseApplicationResponse shortlistApplication()


### Example

```typescript
import {
    RecruitmentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RecruitmentControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.shortlistApplication(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseApplicationResponse**

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

# **startOnboardingTask**
> ApiResponseOnboardingTaskResponse startOnboardingTask()


### Example

```typescript
import {
    RecruitmentControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RecruitmentControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.startOnboardingTask(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseOnboardingTaskResponse**

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

