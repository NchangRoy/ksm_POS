# OrganizationStructureControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createActivity**](#createactivity) | **POST** /api/organizations/{organizationId}/activities | |
|[**createAgencyAffiliation**](#createagencyaffiliation) | **POST** /api/agencies/{agencyId}/affiliations | |
|[**createCertification**](#createcertification) | **POST** /api/organizations/{organizationId}/certifications | |
|[**linkAgencyDomain**](#linkagencydomain) | **POST** /api/agencies/{agencyId}/domains | |
|[**linkOrganizationActor**](#linkorganizationactor) | **POST** /api/organizations/{organizationId}/actors | |
|[**linkOrganizationDomain**](#linkorganizationdomain) | **POST** /api/organizations/{organizationId}/domains | |
|[**listActivities**](#listactivities) | **GET** /api/organizations/{organizationId}/activities | |
|[**listAgencyAffiliations**](#listagencyaffiliations) | **GET** /api/agencies/{agencyId}/affiliations | |
|[**listAgencyDomains**](#listagencydomains) | **GET** /api/agencies/{agencyId}/domains | |
|[**listCertifications**](#listcertifications) | **GET** /api/organizations/{organizationId}/certifications | |
|[**listOrganizationActors**](#listorganizationactors) | **GET** /api/organizations/{organizationId}/actors | |
|[**listOrganizationDomains**](#listorganizationdomains) | **GET** /api/organizations/{organizationId}/domains | |

# **createActivity**
> ApiResponseProposedActivityResponse createActivity(createProposedActivityRequest)


### Example

```typescript
import {
    OrganizationStructureControllerApi,
    Configuration,
    CreateProposedActivityRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationStructureControllerApi(configuration);

let organizationId: string; // (default to undefined)
let createProposedActivityRequest: CreateProposedActivityRequest; //

const { status, data } = await apiInstance.createActivity(
    organizationId,
    createProposedActivityRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createProposedActivityRequest** | **CreateProposedActivityRequest**|  | |
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseProposedActivityResponse**

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

# **createAgencyAffiliation**
> ApiResponseAgencyAffiliationResponse createAgencyAffiliation(createAgencyAffiliationRequest)


### Example

```typescript
import {
    OrganizationStructureControllerApi,
    Configuration,
    CreateAgencyAffiliationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationStructureControllerApi(configuration);

let agencyId: string; // (default to undefined)
let createAgencyAffiliationRequest: CreateAgencyAffiliationRequest; //

const { status, data } = await apiInstance.createAgencyAffiliation(
    agencyId,
    createAgencyAffiliationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAgencyAffiliationRequest** | **CreateAgencyAffiliationRequest**|  | |
| **agencyId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseAgencyAffiliationResponse**

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

# **createCertification**
> ApiResponseCertificationResponse createCertification(createCertificationRequest)


### Example

```typescript
import {
    OrganizationStructureControllerApi,
    Configuration,
    CreateCertificationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationStructureControllerApi(configuration);

let organizationId: string; // (default to undefined)
let createCertificationRequest: CreateCertificationRequest; //

const { status, data } = await apiInstance.createCertification(
    organizationId,
    createCertificationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCertificationRequest** | **CreateCertificationRequest**|  | |
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseCertificationResponse**

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

# **linkAgencyDomain**
> ApiResponseAgencyDomainResponse linkAgencyDomain(linkAgencyDomainRequest)


### Example

```typescript
import {
    OrganizationStructureControllerApi,
    Configuration,
    LinkAgencyDomainRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationStructureControllerApi(configuration);

let agencyId: string; // (default to undefined)
let linkAgencyDomainRequest: LinkAgencyDomainRequest; //

const { status, data } = await apiInstance.linkAgencyDomain(
    agencyId,
    linkAgencyDomainRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **linkAgencyDomainRequest** | **LinkAgencyDomainRequest**|  | |
| **agencyId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseAgencyDomainResponse**

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

# **linkOrganizationActor**
> ApiResponseOrganizationActorResponse linkOrganizationActor(linkOrganizationActorRequest)


### Example

```typescript
import {
    OrganizationStructureControllerApi,
    Configuration,
    LinkOrganizationActorRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationStructureControllerApi(configuration);

let organizationId: string; // (default to undefined)
let linkOrganizationActorRequest: LinkOrganizationActorRequest; //

const { status, data } = await apiInstance.linkOrganizationActor(
    organizationId,
    linkOrganizationActorRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **linkOrganizationActorRequest** | **LinkOrganizationActorRequest**|  | |
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseOrganizationActorResponse**

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

# **linkOrganizationDomain**
> ApiResponseOrganizationDomainResponse linkOrganizationDomain(linkOrganizationDomainRequest)


### Example

```typescript
import {
    OrganizationStructureControllerApi,
    Configuration,
    LinkOrganizationDomainRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationStructureControllerApi(configuration);

let organizationId: string; // (default to undefined)
let linkOrganizationDomainRequest: LinkOrganizationDomainRequest; //

const { status, data } = await apiInstance.linkOrganizationDomain(
    organizationId,
    linkOrganizationDomainRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **linkOrganizationDomainRequest** | **LinkOrganizationDomainRequest**|  | |
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseOrganizationDomainResponse**

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

# **listActivities**
> ApiResponseListProposedActivityResponse listActivities()


### Example

```typescript
import {
    OrganizationStructureControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationStructureControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.listActivities(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListProposedActivityResponse**

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

# **listAgencyAffiliations**
> ApiResponseListAgencyAffiliationResponse listAgencyAffiliations()


### Example

```typescript
import {
    OrganizationStructureControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationStructureControllerApi(configuration);

let agencyId: string; // (default to undefined)

const { status, data } = await apiInstance.listAgencyAffiliations(
    agencyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **agencyId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListAgencyAffiliationResponse**

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

# **listAgencyDomains**
> ApiResponseListAgencyDomainResponse listAgencyDomains()


### Example

```typescript
import {
    OrganizationStructureControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationStructureControllerApi(configuration);

let agencyId: string; // (default to undefined)

const { status, data } = await apiInstance.listAgencyDomains(
    agencyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **agencyId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListAgencyDomainResponse**

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

# **listCertifications**
> ApiResponseListCertificationResponse listCertifications()


### Example

```typescript
import {
    OrganizationStructureControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationStructureControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.listCertifications(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListCertificationResponse**

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

# **listOrganizationActors**
> ApiResponseListOrganizationActorResponse listOrganizationActors()


### Example

```typescript
import {
    OrganizationStructureControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationStructureControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.listOrganizationActors(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListOrganizationActorResponse**

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

# **listOrganizationDomains**
> ApiResponseListOrganizationDomainResponse listOrganizationDomains()


### Example

```typescript
import {
    OrganizationStructureControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OrganizationStructureControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.listOrganizationDomains(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListOrganizationDomainResponse**

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

