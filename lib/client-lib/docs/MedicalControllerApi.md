# MedicalControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCertificate**](#createcertificate) | **POST** /api/v1/hrm/medical/certificates | |
|[**createVisit**](#createvisit) | **POST** /api/v1/hrm/medical/visits | |
|[**getCertificate**](#getcertificate) | **GET** /api/v1/hrm/medical/certificates/{id} | |
|[**getVisit**](#getvisit) | **GET** /api/v1/hrm/medical/visits/{id} | |
|[**listCertificatesByEmployee**](#listcertificatesbyemployee) | **GET** /api/v1/hrm/medical/employees/{employeeId}/certificates | |
|[**listVisitsByEmployee**](#listvisitsbyemployee) | **GET** /api/v1/hrm/medical/employees/{employeeId}/visits | |

# **createCertificate**
> ApiResponseMedicalCertificateResponse createCertificate(createMedicalCertificateRequest)


### Example

```typescript
import {
    MedicalControllerApi,
    Configuration,
    CreateMedicalCertificateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new MedicalControllerApi(configuration);

let createMedicalCertificateRequest: CreateMedicalCertificateRequest; //

const { status, data } = await apiInstance.createCertificate(
    createMedicalCertificateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createMedicalCertificateRequest** | **CreateMedicalCertificateRequest**|  | |


### Return type

**ApiResponseMedicalCertificateResponse**

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

# **createVisit**
> ApiResponseMedicalVisitResponse createVisit(createMedicalVisitRequest)


### Example

```typescript
import {
    MedicalControllerApi,
    Configuration,
    CreateMedicalVisitRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new MedicalControllerApi(configuration);

let createMedicalVisitRequest: CreateMedicalVisitRequest; //

const { status, data } = await apiInstance.createVisit(
    createMedicalVisitRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createMedicalVisitRequest** | **CreateMedicalVisitRequest**|  | |


### Return type

**ApiResponseMedicalVisitResponse**

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

# **getCertificate**
> ApiResponseMedicalCertificateResponse getCertificate()


### Example

```typescript
import {
    MedicalControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MedicalControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getCertificate(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseMedicalCertificateResponse**

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

# **getVisit**
> ApiResponseMedicalVisitResponse getVisit()


### Example

```typescript
import {
    MedicalControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MedicalControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getVisit(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseMedicalVisitResponse**

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

# **listCertificatesByEmployee**
> ApiResponseListMedicalCertificateResponse listCertificatesByEmployee()


### Example

```typescript
import {
    MedicalControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MedicalControllerApi(configuration);

let employeeId: string; // (default to undefined)

const { status, data } = await apiInstance.listCertificatesByEmployee(
    employeeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **employeeId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListMedicalCertificateResponse**

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

# **listVisitsByEmployee**
> ApiResponseListMedicalVisitResponse listVisitsByEmployee()


### Example

```typescript
import {
    MedicalControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MedicalControllerApi(configuration);

let employeeId: string; // (default to undefined)

const { status, data } = await apiInstance.listVisitsByEmployee(
    employeeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **employeeId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListMedicalVisitResponse**

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

