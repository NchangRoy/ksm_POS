# AccountingReferenceControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**listMyOrganizations1**](#listmyorganizations1) | **GET** /api/accounting-service/reference-data/organizations/my | |
|[**loadReportingReferenceData**](#loadreportingreferencedata) | **GET** /api/accounting-service/reference-data/reporting | |

# **listMyOrganizations1**
> Array<OrganizationSummaryView> listMyOrganizations1()


### Example

```typescript
import {
    AccountingReferenceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingReferenceControllerApi(configuration);

const { status, data } = await apiInstance.listMyOrganizations1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<OrganizationSummaryView>**

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

# **loadReportingReferenceData**
> AccountingReferenceDataView loadReportingReferenceData()


### Example

```typescript
import {
    AccountingReferenceControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingReferenceControllerApi(configuration);

const { status, data } = await apiInstance.loadReportingReferenceData();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AccountingReferenceDataView**

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

