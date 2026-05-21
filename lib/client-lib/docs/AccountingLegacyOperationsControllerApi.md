# AccountingLegacyOperationsControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**activeExercice**](#activeexercice) | **GET** /api/accounting-service/exercices/active | |
|[**activeExercice1**](#activeexercice1) | **GET** /api/accounting/exercices/active | |
|[**balance1**](#balance1) | **GET** /api/accounting-service/rapport/balance | |
|[**balancePdf2**](#balancepdf2) | **GET** /api/accounting-service/rapport/balance/export/pdf | |
|[**balancePdf3**](#balancepdf3) | **GET** /api/accounting-service/rapport/balance/pdf | |
|[**bilan1**](#bilan1) | **GET** /api/accounting-service/rapport/bilan | |
|[**bilanPdf2**](#bilanpdf2) | **GET** /api/accounting-service/rapport/bilan/export/pdf | |
|[**bilanPdf3**](#bilanpdf3) | **GET** /api/accounting-service/rapport/bilan/pdf | |
|[**cancelClosing**](#cancelclosing) | **POST** /api/comptable/cloture/annuler/{periodeId} | |
|[**clearRedis**](#clearredis) | **POST** /api/comptable/sync/redis/clear | |
|[**clearRedisKey**](#clearrediskey) | **DELETE** /api/debug/redis/clear/{key} | |
|[**closeExercice**](#closeexercice) | **POST** /api/accounting-service/exercices/{fiscalYearId}/close | |
|[**closeExercice1**](#closeexercice1) | **POST** /api/accounting/exercices/{fiscalYearId}/close | |
|[**closeMonthly**](#closemonthly) | **POST** /api/comptable/cloture/mensuelle/{periodeId} | |
|[**closePeriode**](#closeperiode) | **PUT** /api/accounting-service/periodes/{periodId}/close | |
|[**closePeriode1**](#closeperiode1) | **PUT** /api/accounting/periodes/{periodId}/close | |
|[**closingStatus**](#closingstatus) | **GET** /api/comptable/cloture/status/{periodeId} | |
|[**compteResultat1**](#compteresultat1) | **GET** /api/accounting-service/rapport/compte-resultat | |
|[**compteResultatPdf2**](#compteresultatpdf2) | **GET** /api/accounting-service/rapport/compte-resultat/export/pdf | |
|[**compteResultatPdf3**](#compteresultatpdf3) | **GET** /api/accounting-service/rapport/compte-resultat/pdf | |
|[**createExercice**](#createexercice) | **POST** /api/accounting-service/exercices | |
|[**createExercice1**](#createexercice1) | **POST** /api/accounting/exercices | |
|[**createImmobilisation**](#createimmobilisation) | **POST** /api/accounting-service/immobilisations | |
|[**createImmobilisation1**](#createimmobilisation1) | **POST** /api/accounting/immobilisations | |
|[**createPeriode**](#createperiode) | **POST** /api/accounting-service/periodes | |
|[**createPeriode1**](#createperiode1) | **POST** /api/accounting/periodes | |
|[**debugKafka**](#debugkafka) | **POST** /api/debug/kafka/test | |
|[**debugRedisGet**](#debugredisget) | **GET** /api/debug/redis/test | |
|[**debugRedisPost**](#debugredispost) | **POST** /api/debug/redis/test | |
|[**debugSync**](#debugsync) | **POST** /api/debug/sync/test | |
|[**deleteExercice**](#deleteexercice) | **DELETE** /api/accounting-service/exercices/{fiscalYearId} | |
|[**deleteExercice1**](#deleteexercice1) | **DELETE** /api/accounting/exercices/{fiscalYearId} | |
|[**deletePeriode**](#deleteperiode) | **DELETE** /api/accounting-service/periodes/{periodId} | |
|[**deletePeriode1**](#deleteperiode1) | **DELETE** /api/accounting/periodes/{periodId} | |
|[**deleteTaxDeclaration**](#deletetaxdeclaration) | **DELETE** /api/accounting-service/tax-declarations/{declarationId} | |
|[**deleteTaxDeclaration1**](#deletetaxdeclaration1) | **DELETE** /api/accounting/tax-declarations/{declarationId} | |
|[**downloadAttachment**](#downloadattachment) | **GET** /api/accounting-service/attachments/download/{fileName} | |
|[**downloadAttachment1**](#downloadattachment1) | **GET** /api/accounting/attachments/download/{fileName} | |
|[**fluxTresorerie1**](#fluxtresorerie1) | **GET** /api/accounting-service/rapport/flux-tresorerie | |
|[**fluxTresoreriePdf2**](#fluxtresoreriepdf2) | **GET** /api/accounting-service/rapport/flux-tresorerie/pdf | |
|[**generateDepreciationSchedule**](#generatedepreciationschedule) | **POST** /api/accounting-service/immobilisations/{fixedAssetId}/generate-schedule | |
|[**generateDepreciationSchedule1**](#generatedepreciationschedule1) | **POST** /api/accounting/immobilisations/{fixedAssetId}/generate-schedule | |
|[**generateTaxDeclaration**](#generatetaxdeclaration) | **POST** /api/accounting-service/tax-declarations/generate | |
|[**generateTaxDeclaration1**](#generatetaxdeclaration1) | **POST** /api/accounting/tax-declarations/generate | |
|[**getExercice**](#getexercice) | **GET** /api/accounting-service/exercices/{fiscalYearId} | |
|[**getExercice1**](#getexercice1) | **GET** /api/accounting/exercices/{fiscalYearId} | |
|[**getImmobilisation**](#getimmobilisation) | **GET** /api/accounting-service/immobilisations/{fixedAssetId} | |
|[**getImmobilisation1**](#getimmobilisation1) | **GET** /api/accounting/immobilisations/{fixedAssetId} | |
|[**getPeriode**](#getperiode) | **GET** /api/accounting-service/periodes/{periodId} | |
|[**getPeriode1**](#getperiode1) | **GET** /api/accounting/periodes/{periodId} | |
|[**getPeriodeByCode**](#getperiodebycode) | **GET** /api/accounting-service/periodes/code/{code} | |
|[**getPeriodeByCode1**](#getperiodebycode1) | **GET** /api/accounting/periodes/code/{code} | |
|[**getPeriodeByDate**](#getperiodebydate) | **GET** /api/accounting-service/periodes/by-date | |
|[**getPeriodeByDate1**](#getperiodebydate1) | **GET** /api/accounting/periodes/by-date | |
|[**getTaxDeclaration**](#gettaxdeclaration) | **GET** /api/accounting-service/tax-declarations/{declarationId} | |
|[**getTaxDeclaration1**](#gettaxdeclaration1) | **GET** /api/accounting/tax-declarations/{declarationId} | |
|[**grandLivre1**](#grandlivre1) | **GET** /api/accounting-service/rapport/grand-livre | |
|[**grandLivrePdf2**](#grandlivrepdf2) | **GET** /api/accounting-service/rapport/grand-livre/export/pdf | |
|[**grandLivrePdf3**](#grandlivrepdf3) | **GET** /api/accounting-service/rapport/grand-livre/pdf | |
|[**listExercicePeriodes**](#listexerciceperiodes) | **GET** /api/accounting-service/exercices/{fiscalYearId}/periodes | |
|[**listExercicePeriodes1**](#listexerciceperiodes1) | **GET** /api/accounting/exercices/{fiscalYearId}/periodes | |
|[**listExercices**](#listexercices) | **GET** /api/accounting-service/exercices | |
|[**listExercices1**](#listexercices1) | **GET** /api/accounting/exercices | |
|[**listImmobilisations**](#listimmobilisations) | **GET** /api/accounting-service/immobilisations | |
|[**listImmobilisations1**](#listimmobilisations1) | **GET** /api/accounting/immobilisations | |
|[**listPeriodes**](#listperiodes) | **GET** /api/accounting-service/periodes | |
|[**listPeriodes1**](#listperiodes1) | **GET** /api/accounting/periodes | |
|[**listTaxDeclarationsByType**](#listtaxdeclarationsbytype) | **GET** /api/accounting-service/tax-declarations/type/{type} | |
|[**listTaxDeclarationsByType1**](#listtaxdeclarationsbytype1) | **GET** /api/accounting/tax-declarations/type/{type} | |
|[**nonClosedPeriodes**](#nonclosedperiodes) | **GET** /api/accounting-service/periodes/non-closed | |
|[**nonClosedPeriodes1**](#nonclosedperiodes1) | **GET** /api/accounting/periodes/non-closed | |
|[**organizationInfo**](#organizationinfo) | **GET** /api/debug/organization/info | |
|[**periodesByRange**](#periodesbyrange) | **GET** /api/accounting-service/periodes/range | |
|[**periodesByRange1**](#periodesbyrange1) | **GET** /api/accounting/periodes/range | |
|[**postDepreciation**](#postdepreciation) | **POST** /api/accounting-service/immobilisations/post-depreciation | |
|[**postDepreciation1**](#postdepreciation1) | **POST** /api/accounting/immobilisations/post-depreciation | |
|[**readNotification**](#readnotification) | **POST** /api/accounting-service/notifications/{notificationId}/read | |
|[**readNotification1**](#readnotification1) | **POST** /api/accounting/notifications/{notificationId}/read | |
|[**resumeExecutif1**](#resumeexecutif1) | **GET** /api/accounting-service/rapport/resume-executif | |
|[**resumeExecutifPdf2**](#resumeexecutifpdf2) | **GET** /api/accounting-service/rapport/resume-executif/pdf | |
|[**searchTaxDeclarations**](#searchtaxdeclarations) | **GET** /api/accounting-service/tax-declarations/search | |
|[**searchTaxDeclarations1**](#searchtaxdeclarations1) | **GET** /api/accounting/tax-declarations/search | |
|[**syncElasticsearch**](#syncelasticsearch) | **POST** /api/comptable/sync/elasticsearch | |
|[**syncStatus**](#syncstatus) | **GET** /api/comptable/sync/status | |
|[**unreadNotifications**](#unreadnotifications) | **GET** /api/accounting-service/notifications/unread | |
|[**unreadNotifications1**](#unreadnotifications1) | **GET** /api/accounting/notifications/unread | |
|[**updateExercice**](#updateexercice) | **PUT** /api/accounting-service/exercices/{fiscalYearId} | |
|[**updateExercice1**](#updateexercice1) | **PUT** /api/accounting/exercices/{fiscalYearId} | |
|[**updatePeriode**](#updateperiode) | **PUT** /api/accounting-service/periodes/{periodId} | |
|[**updatePeriode1**](#updateperiode1) | **PUT** /api/accounting/periodes/{periodId} | |
|[**uploadAttachmentMultipart**](#uploadattachmentmultipart) | **POST** /api/accounting-service/attachments/upload | |
|[**uploadAttachmentMultipart1**](#uploadattachmentmultipart1) | **POST** /api/accounting/attachments/upload | |

# **activeExercice**
> FiscalYearView activeExercice()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

const { status, data } = await apiInstance.activeExercice();
```

### Parameters
This endpoint does not have any parameters.


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

# **activeExercice1**
> FiscalYearView activeExercice1()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

const { status, data } = await apiInstance.activeExercice1();
```

### Parameters
This endpoint does not have any parameters.


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

# **balance1**
> ReportExportView balance1()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let dateDebut: string; // (default to undefined)
let dateFin: string; // (default to undefined)

const { status, data } = await apiInstance.balance1(
    dateDebut,
    dateFin
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dateDebut** | [**string**] |  | defaults to undefined|
| **dateFin** | [**string**] |  | defaults to undefined|


### Return type

**ReportExportView**

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

# **balancePdf2**
> string balancePdf2()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let dateDebut: string; // (default to undefined)
let dateFin: string; // (default to undefined)

const { status, data } = await apiInstance.balancePdf2(
    dateDebut,
    dateFin
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dateDebut** | [**string**] |  | defaults to undefined|
| **dateFin** | [**string**] |  | defaults to undefined|


### Return type

**string**

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

# **balancePdf3**
> string balancePdf3()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let dateDebut: string; // (default to undefined)
let dateFin: string; // (default to undefined)

const { status, data } = await apiInstance.balancePdf3(
    dateDebut,
    dateFin
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dateDebut** | [**string**] |  | defaults to undefined|
| **dateFin** | [**string**] |  | defaults to undefined|


### Return type

**string**

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

# **bilan1**
> ReportExportView bilan1()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let dateDebut: string; // (default to undefined)
let dateFin: string; // (default to undefined)

const { status, data } = await apiInstance.bilan1(
    dateDebut,
    dateFin
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dateDebut** | [**string**] |  | defaults to undefined|
| **dateFin** | [**string**] |  | defaults to undefined|


### Return type

**ReportExportView**

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

# **bilanPdf2**
> string bilanPdf2()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let dateDebut: string; // (default to undefined)
let dateFin: string; // (default to undefined)

const { status, data } = await apiInstance.bilanPdf2(
    dateDebut,
    dateFin
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dateDebut** | [**string**] |  | defaults to undefined|
| **dateFin** | [**string**] |  | defaults to undefined|


### Return type

**string**

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

# **bilanPdf3**
> string bilanPdf3()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let dateDebut: string; // (default to undefined)
let dateFin: string; // (default to undefined)

const { status, data } = await apiInstance.bilanPdf3(
    dateDebut,
    dateFin
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dateDebut** | [**string**] |  | defaults to undefined|
| **dateFin** | [**string**] |  | defaults to undefined|


### Return type

**string**

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

# **cancelClosing**
> ClosingRunView cancelClosing()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let periodeId: string; // (default to undefined)

const { status, data } = await apiInstance.cancelClosing(
    periodeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **periodeId** | [**string**] |  | defaults to undefined|


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

# **clearRedis**
> { [key: string]: any; } clearRedis()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

const { status, data } = await apiInstance.clearRedis();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**{ [key: string]: any; }**

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

# **clearRedisKey**
> { [key: string]: any; } clearRedisKey()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let key: string; // (default to undefined)

const { status, data } = await apiInstance.clearRedisKey(
    key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **key** | [**string**] |  | defaults to undefined|


### Return type

**{ [key: string]: any; }**

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

# **closeExercice**
> FiscalYearView closeExercice()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let fiscalYearId: string; // (default to undefined)

const { status, data } = await apiInstance.closeExercice(
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

# **closeExercice1**
> FiscalYearView closeExercice1()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let fiscalYearId: string; // (default to undefined)

const { status, data } = await apiInstance.closeExercice1(
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

# **closeMonthly**
> ClosingRunView closeMonthly()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let periodeId: string; // (default to undefined)

const { status, data } = await apiInstance.closeMonthly(
    periodeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **periodeId** | [**string**] |  | defaults to undefined|


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

# **closePeriode**
> AccountingPeriodView closePeriode()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let periodId: string; // (default to undefined)

const { status, data } = await apiInstance.closePeriode(
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

# **closePeriode1**
> AccountingPeriodView closePeriode1()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let periodId: string; // (default to undefined)

const { status, data } = await apiInstance.closePeriode1(
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

# **closingStatus**
> { [key: string]: any; } closingStatus()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let periodeId: string; // (default to undefined)

const { status, data } = await apiInstance.closingStatus(
    periodeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **periodeId** | [**string**] |  | defaults to undefined|


### Return type

**{ [key: string]: any; }**

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

# **compteResultat1**
> ReportExportView compteResultat1()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let dateDebut: string; // (default to undefined)
let dateFin: string; // (default to undefined)

const { status, data } = await apiInstance.compteResultat1(
    dateDebut,
    dateFin
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dateDebut** | [**string**] |  | defaults to undefined|
| **dateFin** | [**string**] |  | defaults to undefined|


### Return type

**ReportExportView**

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

# **compteResultatPdf2**
> string compteResultatPdf2()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let dateDebut: string; // (default to undefined)
let dateFin: string; // (default to undefined)

const { status, data } = await apiInstance.compteResultatPdf2(
    dateDebut,
    dateFin
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dateDebut** | [**string**] |  | defaults to undefined|
| **dateFin** | [**string**] |  | defaults to undefined|


### Return type

**string**

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

# **compteResultatPdf3**
> string compteResultatPdf3()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let dateDebut: string; // (default to undefined)
let dateFin: string; // (default to undefined)

const { status, data } = await apiInstance.compteResultatPdf3(
    dateDebut,
    dateFin
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dateDebut** | [**string**] |  | defaults to undefined|
| **dateFin** | [**string**] |  | defaults to undefined|


### Return type

**string**

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

# **createExercice**
> FiscalYearView createExercice(createFiscalYearRequest)


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration,
    CreateFiscalYearRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let createFiscalYearRequest: CreateFiscalYearRequest; //

const { status, data } = await apiInstance.createExercice(
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

# **createExercice1**
> FiscalYearView createExercice1(createFiscalYearRequest)


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration,
    CreateFiscalYearRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let createFiscalYearRequest: CreateFiscalYearRequest; //

const { status, data } = await apiInstance.createExercice1(
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

# **createImmobilisation**
> FixedAssetView createImmobilisation(createFixedAssetRequest)


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration,
    CreateFixedAssetRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let createFixedAssetRequest: CreateFixedAssetRequest; //

const { status, data } = await apiInstance.createImmobilisation(
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

# **createImmobilisation1**
> FixedAssetView createImmobilisation1(createFixedAssetRequest)


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration,
    CreateFixedAssetRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let createFixedAssetRequest: CreateFixedAssetRequest; //

const { status, data } = await apiInstance.createImmobilisation1(
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

# **createPeriode**
> AccountingPeriodView createPeriode(createPeriodRequest)


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration,
    CreatePeriodRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let createPeriodRequest: CreatePeriodRequest; //

const { status, data } = await apiInstance.createPeriode(
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

# **createPeriode1**
> AccountingPeriodView createPeriode1(createPeriodRequest)


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration,
    CreatePeriodRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let createPeriodRequest: CreatePeriodRequest; //

const { status, data } = await apiInstance.createPeriode1(
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

# **debugKafka**
> { [key: string]: any; } debugKafka()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

const { status, data } = await apiInstance.debugKafka();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**{ [key: string]: any; }**

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

# **debugRedisGet**
> { [key: string]: any; } debugRedisGet()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

const { status, data } = await apiInstance.debugRedisGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**{ [key: string]: any; }**

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

# **debugRedisPost**
> { [key: string]: any; } debugRedisPost()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

const { status, data } = await apiInstance.debugRedisPost();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**{ [key: string]: any; }**

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

# **debugSync**
> SynchronizationJobView debugSync()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

const { status, data } = await apiInstance.debugSync();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SynchronizationJobView**

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

# **deleteExercice**
> deleteExercice()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let fiscalYearId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteExercice(
    fiscalYearId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fiscalYearId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteExercice1**
> deleteExercice1()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let fiscalYearId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteExercice1(
    fiscalYearId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fiscalYearId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deletePeriode**
> deletePeriode()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let periodId: string; // (default to undefined)

const { status, data } = await apiInstance.deletePeriode(
    periodId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **periodId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deletePeriode1**
> deletePeriode1()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let periodId: string; // (default to undefined)

const { status, data } = await apiInstance.deletePeriode1(
    periodId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **periodId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteTaxDeclaration**
> deleteTaxDeclaration()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let declarationId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteTaxDeclaration(
    declarationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **declarationId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteTaxDeclaration1**
> deleteTaxDeclaration1()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let declarationId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteTaxDeclaration1(
    declarationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **declarationId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloadAttachment**
> string downloadAttachment()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let fileName: string; // (default to undefined)

const { status, data } = await apiInstance.downloadAttachment(
    fileName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileName** | [**string**] |  | defaults to undefined|


### Return type

**string**

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

# **downloadAttachment1**
> string downloadAttachment1()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let fileName: string; // (default to undefined)

const { status, data } = await apiInstance.downloadAttachment1(
    fileName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileName** | [**string**] |  | defaults to undefined|


### Return type

**string**

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

# **fluxTresorerie1**
> ReportExportView fluxTresorerie1()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let dateDebut: string; // (default to undefined)
let dateFin: string; // (default to undefined)

const { status, data } = await apiInstance.fluxTresorerie1(
    dateDebut,
    dateFin
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dateDebut** | [**string**] |  | defaults to undefined|
| **dateFin** | [**string**] |  | defaults to undefined|


### Return type

**ReportExportView**

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

# **fluxTresoreriePdf2**
> string fluxTresoreriePdf2()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let dateDebut: string; // (default to undefined)
let dateFin: string; // (default to undefined)

const { status, data } = await apiInstance.fluxTresoreriePdf2(
    dateDebut,
    dateFin
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dateDebut** | [**string**] |  | defaults to undefined|
| **dateFin** | [**string**] |  | defaults to undefined|


### Return type

**string**

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

# **generateDepreciationSchedule**
> { [key: string]: any; } generateDepreciationSchedule()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let fixedAssetId: string; // (default to undefined)

const { status, data } = await apiInstance.generateDepreciationSchedule(
    fixedAssetId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fixedAssetId** | [**string**] |  | defaults to undefined|


### Return type

**{ [key: string]: any; }**

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

# **generateDepreciationSchedule1**
> { [key: string]: any; } generateDepreciationSchedule1()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let fixedAssetId: string; // (default to undefined)

const { status, data } = await apiInstance.generateDepreciationSchedule1(
    fixedAssetId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fixedAssetId** | [**string**] |  | defaults to undefined|


### Return type

**{ [key: string]: any; }**

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

# **generateTaxDeclaration**
> TaxDeclarationView generateTaxDeclaration(createTaxDeclarationRequest)


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration,
    CreateTaxDeclarationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let createTaxDeclarationRequest: CreateTaxDeclarationRequest; //

const { status, data } = await apiInstance.generateTaxDeclaration(
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

# **generateTaxDeclaration1**
> TaxDeclarationView generateTaxDeclaration1(createTaxDeclarationRequest)


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration,
    CreateTaxDeclarationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let createTaxDeclarationRequest: CreateTaxDeclarationRequest; //

const { status, data } = await apiInstance.generateTaxDeclaration1(
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

# **getExercice**
> FiscalYearView getExercice()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let fiscalYearId: string; // (default to undefined)

const { status, data } = await apiInstance.getExercice(
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

# **getExercice1**
> FiscalYearView getExercice1()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let fiscalYearId: string; // (default to undefined)

const { status, data } = await apiInstance.getExercice1(
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

# **getImmobilisation**
> FixedAssetView getImmobilisation()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let fixedAssetId: string; // (default to undefined)

const { status, data } = await apiInstance.getImmobilisation(
    fixedAssetId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fixedAssetId** | [**string**] |  | defaults to undefined|


### Return type

**FixedAssetView**

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

# **getImmobilisation1**
> FixedAssetView getImmobilisation1()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let fixedAssetId: string; // (default to undefined)

const { status, data } = await apiInstance.getImmobilisation1(
    fixedAssetId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fixedAssetId** | [**string**] |  | defaults to undefined|


### Return type

**FixedAssetView**

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

# **getPeriode**
> AccountingPeriodView getPeriode()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let periodId: string; // (default to undefined)

const { status, data } = await apiInstance.getPeriode(
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

# **getPeriode1**
> AccountingPeriodView getPeriode1()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let periodId: string; // (default to undefined)

const { status, data } = await apiInstance.getPeriode1(
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

# **getPeriodeByCode**
> AccountingPeriodView getPeriodeByCode()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let code: string; // (default to undefined)

const { status, data } = await apiInstance.getPeriodeByCode(
    code
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] |  | defaults to undefined|


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

# **getPeriodeByCode1**
> AccountingPeriodView getPeriodeByCode1()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let code: string; // (default to undefined)

const { status, data } = await apiInstance.getPeriodeByCode1(
    code
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] |  | defaults to undefined|


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

# **getPeriodeByDate**
> AccountingPeriodView getPeriodeByDate()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let date: string; // (default to undefined)

const { status, data } = await apiInstance.getPeriodeByDate(
    date
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **date** | [**string**] |  | defaults to undefined|


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

# **getPeriodeByDate1**
> AccountingPeriodView getPeriodeByDate1()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let date: string; // (default to undefined)

const { status, data } = await apiInstance.getPeriodeByDate1(
    date
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **date** | [**string**] |  | defaults to undefined|


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

# **getTaxDeclaration**
> TaxDeclarationView getTaxDeclaration()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let declarationId: string; // (default to undefined)

const { status, data } = await apiInstance.getTaxDeclaration(
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

# **getTaxDeclaration1**
> TaxDeclarationView getTaxDeclaration1()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let declarationId: string; // (default to undefined)

const { status, data } = await apiInstance.getTaxDeclaration1(
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

# **grandLivre1**
> ReportExportView grandLivre1()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let dateDebut: string; // (default to undefined)
let dateFin: string; // (default to undefined)

const { status, data } = await apiInstance.grandLivre1(
    dateDebut,
    dateFin
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dateDebut** | [**string**] |  | defaults to undefined|
| **dateFin** | [**string**] |  | defaults to undefined|


### Return type

**ReportExportView**

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

# **grandLivrePdf2**
> string grandLivrePdf2()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let dateDebut: string; // (default to undefined)
let dateFin: string; // (default to undefined)

const { status, data } = await apiInstance.grandLivrePdf2(
    dateDebut,
    dateFin
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dateDebut** | [**string**] |  | defaults to undefined|
| **dateFin** | [**string**] |  | defaults to undefined|


### Return type

**string**

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

# **grandLivrePdf3**
> string grandLivrePdf3()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let dateDebut: string; // (default to undefined)
let dateFin: string; // (default to undefined)

const { status, data } = await apiInstance.grandLivrePdf3(
    dateDebut,
    dateFin
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dateDebut** | [**string**] |  | defaults to undefined|
| **dateFin** | [**string**] |  | defaults to undefined|


### Return type

**string**

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

# **listExercicePeriodes**
> Array<AccountingPeriodView> listExercicePeriodes()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let fiscalYearId: string; // (default to undefined)

const { status, data } = await apiInstance.listExercicePeriodes(
    fiscalYearId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fiscalYearId** | [**string**] |  | defaults to undefined|


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

# **listExercicePeriodes1**
> Array<AccountingPeriodView> listExercicePeriodes1()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let fiscalYearId: string; // (default to undefined)

const { status, data } = await apiInstance.listExercicePeriodes1(
    fiscalYearId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fiscalYearId** | [**string**] |  | defaults to undefined|


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

# **listExercices**
> Array<FiscalYearView> listExercices()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

const { status, data } = await apiInstance.listExercices();
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

# **listExercices1**
> Array<FiscalYearView> listExercices1()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

const { status, data } = await apiInstance.listExercices1();
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

# **listImmobilisations**
> Array<FixedAssetView> listImmobilisations()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

const { status, data } = await apiInstance.listImmobilisations();
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

# **listImmobilisations1**
> Array<FixedAssetView> listImmobilisations1()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

const { status, data } = await apiInstance.listImmobilisations1();
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

# **listPeriodes**
> Array<AccountingPeriodView> listPeriodes()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

const { status, data } = await apiInstance.listPeriodes();
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

# **listPeriodes1**
> Array<AccountingPeriodView> listPeriodes1()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

const { status, data } = await apiInstance.listPeriodes1();
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

# **listTaxDeclarationsByType**
> Array<TaxDeclarationView> listTaxDeclarationsByType()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let type: string; // (default to undefined)

const { status, data } = await apiInstance.listTaxDeclarationsByType(
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**string**] |  | defaults to undefined|


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

# **listTaxDeclarationsByType1**
> Array<TaxDeclarationView> listTaxDeclarationsByType1()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let type: string; // (default to undefined)

const { status, data } = await apiInstance.listTaxDeclarationsByType1(
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**string**] |  | defaults to undefined|


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

# **nonClosedPeriodes**
> Array<AccountingPeriodView> nonClosedPeriodes()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

const { status, data } = await apiInstance.nonClosedPeriodes();
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

# **nonClosedPeriodes1**
> Array<AccountingPeriodView> nonClosedPeriodes1()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

const { status, data } = await apiInstance.nonClosedPeriodes1();
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

# **organizationInfo**
> { [key: string]: any; } organizationInfo()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

const { status, data } = await apiInstance.organizationInfo();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**{ [key: string]: any; }**

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

# **periodesByRange**
> Array<AccountingPeriodView> periodesByRange()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let startDate: string; // (default to undefined)
let endDate: string; // (default to undefined)

const { status, data } = await apiInstance.periodesByRange(
    startDate,
    endDate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **startDate** | [**string**] |  | defaults to undefined|
| **endDate** | [**string**] |  | defaults to undefined|


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

# **periodesByRange1**
> Array<AccountingPeriodView> periodesByRange1()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let startDate: string; // (default to undefined)
let endDate: string; // (default to undefined)

const { status, data } = await apiInstance.periodesByRange1(
    startDate,
    endDate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **startDate** | [**string**] |  | defaults to undefined|
| **endDate** | [**string**] |  | defaults to undefined|


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

# **postDepreciation**
> Array<FixedAssetView> postDepreciation()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

const { status, data } = await apiInstance.postDepreciation();
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

# **postDepreciation1**
> Array<FixedAssetView> postDepreciation1()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

const { status, data } = await apiInstance.postDepreciation1();
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

# **readNotification**
> NotificationView readNotification()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let notificationId: string; // (default to undefined)

const { status, data } = await apiInstance.readNotification(
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

# **readNotification1**
> NotificationView readNotification1()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let notificationId: string; // (default to undefined)

const { status, data } = await apiInstance.readNotification1(
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

# **resumeExecutif1**
> ReportExportView resumeExecutif1()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let dateDebut: string; // (default to undefined)
let dateFin: string; // (default to undefined)

const { status, data } = await apiInstance.resumeExecutif1(
    dateDebut,
    dateFin
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dateDebut** | [**string**] |  | defaults to undefined|
| **dateFin** | [**string**] |  | defaults to undefined|


### Return type

**ReportExportView**

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

# **resumeExecutifPdf2**
> string resumeExecutifPdf2()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let dateDebut: string; // (default to undefined)
let dateFin: string; // (default to undefined)

const { status, data } = await apiInstance.resumeExecutifPdf2(
    dateDebut,
    dateFin
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dateDebut** | [**string**] |  | defaults to undefined|
| **dateFin** | [**string**] |  | defaults to undefined|


### Return type

**string**

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

# **searchTaxDeclarations**
> Array<TaxDeclarationView> searchTaxDeclarations()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let query: string; // (default to undefined)

const { status, data } = await apiInstance.searchTaxDeclarations(
    query
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **query** | [**string**] |  | defaults to undefined|


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

# **searchTaxDeclarations1**
> Array<TaxDeclarationView> searchTaxDeclarations1()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let query: string; // (default to undefined)

const { status, data } = await apiInstance.searchTaxDeclarations1(
    query
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **query** | [**string**] |  | defaults to undefined|


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

# **syncElasticsearch**
> SynchronizationJobView syncElasticsearch()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

const { status, data } = await apiInstance.syncElasticsearch();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SynchronizationJobView**

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

# **syncStatus**
> { [key: string]: any; } syncStatus()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

const { status, data } = await apiInstance.syncStatus();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**{ [key: string]: any; }**

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

# **unreadNotifications**
> Array<NotificationView> unreadNotifications()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

const { status, data } = await apiInstance.unreadNotifications();
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

# **unreadNotifications1**
> Array<NotificationView> unreadNotifications1()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

const { status, data } = await apiInstance.unreadNotifications1();
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

# **updateExercice**
> FiscalYearView updateExercice(createFiscalYearRequest)


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration,
    CreateFiscalYearRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let fiscalYearId: string; // (default to undefined)
let createFiscalYearRequest: CreateFiscalYearRequest; //

const { status, data } = await apiInstance.updateExercice(
    fiscalYearId,
    createFiscalYearRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createFiscalYearRequest** | **CreateFiscalYearRequest**|  | |
| **fiscalYearId** | [**string**] |  | defaults to undefined|


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

# **updateExercice1**
> FiscalYearView updateExercice1(createFiscalYearRequest)


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration,
    CreateFiscalYearRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let fiscalYearId: string; // (default to undefined)
let createFiscalYearRequest: CreateFiscalYearRequest; //

const { status, data } = await apiInstance.updateExercice1(
    fiscalYearId,
    createFiscalYearRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createFiscalYearRequest** | **CreateFiscalYearRequest**|  | |
| **fiscalYearId** | [**string**] |  | defaults to undefined|


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

# **updatePeriode**
> AccountingPeriodView updatePeriode(createPeriodRequest)


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration,
    CreatePeriodRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let periodId: string; // (default to undefined)
let createPeriodRequest: CreatePeriodRequest; //

const { status, data } = await apiInstance.updatePeriode(
    periodId,
    createPeriodRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPeriodRequest** | **CreatePeriodRequest**|  | |
| **periodId** | [**string**] |  | defaults to undefined|


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

# **updatePeriode1**
> AccountingPeriodView updatePeriode1(createPeriodRequest)


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration,
    CreatePeriodRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let periodId: string; // (default to undefined)
let createPeriodRequest: CreatePeriodRequest; //

const { status, data } = await apiInstance.updatePeriode1(
    periodId,
    createPeriodRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPeriodRequest** | **CreatePeriodRequest**|  | |
| **periodId** | [**string**] |  | defaults to undefined|


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

# **uploadAttachmentMultipart**
> AttachmentView uploadAttachmentMultipart()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let file: File; // (default to undefined)
let targetType: string; // (optional) (default to undefined)
let targetId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.uploadAttachmentMultipart(
    file,
    targetType,
    targetId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] |  | defaults to undefined|
| **targetType** | [**string**] |  | (optional) defaults to undefined|
| **targetId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**AttachmentView**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadAttachmentMultipart1**
> AttachmentView uploadAttachmentMultipart1()


### Example

```typescript
import {
    AccountingLegacyOperationsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyOperationsControllerApi(configuration);

let file: File; // (default to undefined)
let targetType: string; // (optional) (default to undefined)
let targetId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.uploadAttachmentMultipart1(
    file,
    targetType,
    targetId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] |  | defaults to undefined|
| **targetType** | [**string**] |  | (optional) defaults to undefined|
| **targetId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**AttachmentView**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data, application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

