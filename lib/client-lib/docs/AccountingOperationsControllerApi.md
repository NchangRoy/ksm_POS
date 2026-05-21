# AccountingOperationsControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**acknowledgeNotification**](#acknowledgenotification) | **POST** /api/accounting-service/notifications/{notificationId}/acknowledge | |
|[**closeFiscalYear**](#closefiscalyear) | **POST** /api/accounting-service/fiscal-years/{fiscalYearId}/close | |
|[**closePeriod**](#closeperiod) | **POST** /api/accounting-service/periods/{periodId}/close | |
|[**completeClosingRun**](#completeclosingrun) | **POST** /api/accounting-service/closing-runs/{runId}/complete | |
|[**completeSynchronizationJob**](#completesynchronizationjob) | **POST** /api/accounting-service/synchronization-jobs/{jobId}/complete | |
|[**createAttachment**](#createattachment) | **POST** /api/accounting-service/attachments | |
|[**createFiscalYear**](#createfiscalyear) | **POST** /api/accounting-service/fiscal-years | |
|[**createFixedAsset**](#createfixedasset) | **POST** /api/accounting-service/fixed-assets | |
|[**createNotification**](#createnotification) | **POST** /api/accounting-service/notifications | |
|[**createPeriod**](#createperiod) | **POST** /api/accounting-service/periods | |
|[**createTaxDeclaration**](#createtaxdeclaration) | **POST** /api/accounting-service/tax-declarations | |
|[**dashboard2**](#dashboard2) | **GET** /api/accounting-service/dashboard | |
|[**depreciateFixedAsset**](#depreciatefixedasset) | **POST** /api/accounting-service/fixed-assets/{fixedAssetId}/depreciate | |
|[**generateReport**](#generatereport) | **POST** /api/accounting-service/report-exports | |
|[**listAttachments**](#listattachments) | **GET** /api/accounting-service/attachments | |
|[**listClosingRuns**](#listclosingruns) | **GET** /api/accounting-service/closing-runs | |
|[**listFiscalYears**](#listfiscalyears) | **GET** /api/accounting-service/fiscal-years | |
|[**listFixedAssets**](#listfixedassets) | **GET** /api/accounting-service/fixed-assets | |
|[**listNotifications**](#listnotifications) | **GET** /api/accounting-service/notifications | |
|[**listPeriods**](#listperiods) | **GET** /api/accounting-service/periods | |
|[**listReportExports**](#listreportexports) | **GET** /api/accounting-service/report-exports | |
|[**listSynchronizationJobs**](#listsynchronizationjobs) | **GET** /api/accounting-service/synchronization-jobs | |
|[**listTaxDeclarations**](#listtaxdeclarations) | **GET** /api/accounting-service/tax-declarations | |
|[**startClosingRun**](#startclosingrun) | **POST** /api/accounting-service/closing-runs | |
|[**startSynchronizationJob**](#startsynchronizationjob) | **POST** /api/accounting-service/synchronization-jobs | |
|[**submitTaxDeclaration**](#submittaxdeclaration) | **POST** /api/accounting-service/tax-declarations/{declarationId}/submit | |

# **acknowledgeNotification**
> NotificationView acknowledgeNotification()


### Example

```typescript
import {
    AccountingOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingOperationsControllerApi(configuration);

let notificationId: string; // (default to undefined)

const { status, data } = await apiInstance.acknowledgeNotification(
    notificationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **notificationId** | [**string**] |  | defaults to undefined|


### Return type

**NotificationView**

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

# **closeFiscalYear**
> FiscalYearView closeFiscalYear()


### Example

```typescript
import {
    AccountingOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingOperationsControllerApi(configuration);

let fiscalYearId: string; // (default to undefined)

const { status, data } = await apiInstance.closeFiscalYear(
    fiscalYearId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fiscalYearId** | [**string**] |  | defaults to undefined|


### Return type

**FiscalYearView**

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

# **closePeriod**
> AccountingPeriodView closePeriod()


### Example

```typescript
import {
    AccountingOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingOperationsControllerApi(configuration);

let periodId: string; // (default to undefined)

const { status, data } = await apiInstance.closePeriod(
    periodId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **periodId** | [**string**] |  | defaults to undefined|


### Return type

**AccountingPeriodView**

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

# **completeClosingRun**
> ClosingRunView completeClosingRun()


### Example

```typescript
import {
    AccountingOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingOperationsControllerApi(configuration);

let runId: string; // (default to undefined)

const { status, data } = await apiInstance.completeClosingRun(
    runId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **runId** | [**string**] |  | defaults to undefined|


### Return type

**ClosingRunView**

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

# **completeSynchronizationJob**
> SynchronizationJobView completeSynchronizationJob(completeSynchronizationJobRequest)


### Example

```typescript
import {
    AccountingOperationsControllerApi,
    Configuration,
    CompleteSynchronizationJobRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingOperationsControllerApi(configuration);

let jobId: string; // (default to undefined)
let completeSynchronizationJobRequest: CompleteSynchronizationJobRequest; //

const { status, data } = await apiInstance.completeSynchronizationJob(
    jobId,
    completeSynchronizationJobRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **completeSynchronizationJobRequest** | **CompleteSynchronizationJobRequest**|  | |
| **jobId** | [**string**] |  | defaults to undefined|


### Return type

**SynchronizationJobView**

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

# **createAttachment**
> AttachmentView createAttachment(createAttachmentRequest)


### Example

```typescript
import {
    AccountingOperationsControllerApi,
    Configuration,
    CreateAttachmentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingOperationsControllerApi(configuration);

let createAttachmentRequest: CreateAttachmentRequest; //

const { status, data } = await apiInstance.createAttachment(
    createAttachmentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAttachmentRequest** | **CreateAttachmentRequest**|  | |


### Return type

**AttachmentView**

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

# **createFiscalYear**
> FiscalYearView createFiscalYear(createFiscalYearRequest)


### Example

```typescript
import {
    AccountingOperationsControllerApi,
    Configuration,
    CreateFiscalYearRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingOperationsControllerApi(configuration);

let createFiscalYearRequest: CreateFiscalYearRequest; //

const { status, data } = await apiInstance.createFiscalYear(
    createFiscalYearRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createFiscalYearRequest** | **CreateFiscalYearRequest**|  | |


### Return type

**FiscalYearView**

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

# **createFixedAsset**
> FixedAssetView createFixedAsset(createFixedAssetRequest)


### Example

```typescript
import {
    AccountingOperationsControllerApi,
    Configuration,
    CreateFixedAssetRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingOperationsControllerApi(configuration);

let createFixedAssetRequest: CreateFixedAssetRequest; //

const { status, data } = await apiInstance.createFixedAsset(
    createFixedAssetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createFixedAssetRequest** | **CreateFixedAssetRequest**|  | |


### Return type

**FixedAssetView**

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

# **createNotification**
> NotificationView createNotification(createNotificationRequest)


### Example

```typescript
import {
    AccountingOperationsControllerApi,
    Configuration,
    CreateNotificationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingOperationsControllerApi(configuration);

let createNotificationRequest: CreateNotificationRequest; //

const { status, data } = await apiInstance.createNotification(
    createNotificationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createNotificationRequest** | **CreateNotificationRequest**|  | |


### Return type

**NotificationView**

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

# **createPeriod**
> AccountingPeriodView createPeriod(createPeriodRequest)


### Example

```typescript
import {
    AccountingOperationsControllerApi,
    Configuration,
    CreatePeriodRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingOperationsControllerApi(configuration);

let createPeriodRequest: CreatePeriodRequest; //

const { status, data } = await apiInstance.createPeriod(
    createPeriodRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPeriodRequest** | **CreatePeriodRequest**|  | |


### Return type

**AccountingPeriodView**

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

# **createTaxDeclaration**
> TaxDeclarationView createTaxDeclaration(createTaxDeclarationRequest)


### Example

```typescript
import {
    AccountingOperationsControllerApi,
    Configuration,
    CreateTaxDeclarationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingOperationsControllerApi(configuration);

let createTaxDeclarationRequest: CreateTaxDeclarationRequest; //

const { status, data } = await apiInstance.createTaxDeclaration(
    createTaxDeclarationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTaxDeclarationRequest** | **CreateTaxDeclarationRequest**|  | |


### Return type

**TaxDeclarationView**

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

# **dashboard2**
> AccountingDashboardView dashboard2()


### Example

```typescript
import {
    AccountingOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingOperationsControllerApi(configuration);

const { status, data } = await apiInstance.dashboard2();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AccountingDashboardView**

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

# **depreciateFixedAsset**
> FixedAssetView depreciateFixedAsset(depreciateFixedAssetRequest)


### Example

```typescript
import {
    AccountingOperationsControllerApi,
    Configuration,
    DepreciateFixedAssetRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingOperationsControllerApi(configuration);

let fixedAssetId: string; // (default to undefined)
let depreciateFixedAssetRequest: DepreciateFixedAssetRequest; //

const { status, data } = await apiInstance.depreciateFixedAsset(
    fixedAssetId,
    depreciateFixedAssetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **depreciateFixedAssetRequest** | **DepreciateFixedAssetRequest**|  | |
| **fixedAssetId** | [**string**] |  | defaults to undefined|


### Return type

**FixedAssetView**

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

# **generateReport**
> ReportExportView generateReport(generateReportExportRequest)


### Example

```typescript
import {
    AccountingOperationsControllerApi,
    Configuration,
    GenerateReportExportRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingOperationsControllerApi(configuration);

let generateReportExportRequest: GenerateReportExportRequest; //

const { status, data } = await apiInstance.generateReport(
    generateReportExportRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateReportExportRequest** | **GenerateReportExportRequest**|  | |


### Return type

**ReportExportView**

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

# **listAttachments**
> Array<AttachmentView> listAttachments()


### Example

```typescript
import {
    AccountingOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingOperationsControllerApi(configuration);

const { status, data } = await apiInstance.listAttachments();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<AttachmentView>**

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

# **listClosingRuns**
> Array<ClosingRunView> listClosingRuns()


### Example

```typescript
import {
    AccountingOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingOperationsControllerApi(configuration);

const { status, data } = await apiInstance.listClosingRuns();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ClosingRunView>**

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

# **listFiscalYears**
> Array<FiscalYearView> listFiscalYears()


### Example

```typescript
import {
    AccountingOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingOperationsControllerApi(configuration);

const { status, data } = await apiInstance.listFiscalYears();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<FiscalYearView>**

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

# **listFixedAssets**
> Array<FixedAssetView> listFixedAssets()


### Example

```typescript
import {
    AccountingOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingOperationsControllerApi(configuration);

const { status, data } = await apiInstance.listFixedAssets();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<FixedAssetView>**

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

# **listNotifications**
> Array<NotificationView> listNotifications()


### Example

```typescript
import {
    AccountingOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingOperationsControllerApi(configuration);

const { status, data } = await apiInstance.listNotifications();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<NotificationView>**

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

# **listPeriods**
> Array<AccountingPeriodView> listPeriods()


### Example

```typescript
import {
    AccountingOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingOperationsControllerApi(configuration);

const { status, data } = await apiInstance.listPeriods();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<AccountingPeriodView>**

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

# **listReportExports**
> Array<ReportExportView> listReportExports()


### Example

```typescript
import {
    AccountingOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingOperationsControllerApi(configuration);

const { status, data } = await apiInstance.listReportExports();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ReportExportView>**

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

# **listSynchronizationJobs**
> Array<SynchronizationJobView> listSynchronizationJobs()


### Example

```typescript
import {
    AccountingOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingOperationsControllerApi(configuration);

const { status, data } = await apiInstance.listSynchronizationJobs();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<SynchronizationJobView>**

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

# **listTaxDeclarations**
> Array<TaxDeclarationView> listTaxDeclarations()


### Example

```typescript
import {
    AccountingOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingOperationsControllerApi(configuration);

const { status, data } = await apiInstance.listTaxDeclarations();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<TaxDeclarationView>**

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

# **startClosingRun**
> ClosingRunView startClosingRun(startClosingRunRequest)


### Example

```typescript
import {
    AccountingOperationsControllerApi,
    Configuration,
    StartClosingRunRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingOperationsControllerApi(configuration);

let startClosingRunRequest: StartClosingRunRequest; //

const { status, data } = await apiInstance.startClosingRun(
    startClosingRunRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **startClosingRunRequest** | **StartClosingRunRequest**|  | |


### Return type

**ClosingRunView**

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

# **startSynchronizationJob**
> SynchronizationJobView startSynchronizationJob(startSynchronizationJobRequest)


### Example

```typescript
import {
    AccountingOperationsControllerApi,
    Configuration,
    StartSynchronizationJobRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingOperationsControllerApi(configuration);

let startSynchronizationJobRequest: StartSynchronizationJobRequest; //

const { status, data } = await apiInstance.startSynchronizationJob(
    startSynchronizationJobRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **startSynchronizationJobRequest** | **StartSynchronizationJobRequest**|  | |


### Return type

**SynchronizationJobView**

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

# **submitTaxDeclaration**
> TaxDeclarationView submitTaxDeclaration()


### Example

```typescript
import {
    AccountingOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingOperationsControllerApi(configuration);

let declarationId: string; // (default to undefined)

const { status, data } = await apiInstance.submitTaxDeclaration(
    declarationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **declarationId** | [**string**] |  | defaults to undefined|


### Return type

**TaxDeclarationView**

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

