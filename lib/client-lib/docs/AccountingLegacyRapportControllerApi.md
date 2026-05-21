# AccountingLegacyRapportControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**balance**](#balance) | **GET** /api/accounting/rapport/balance | |
|[**balancePdf**](#balancepdf) | **GET** /api/accounting/rapport/balance/export/pdf | |
|[**balancePdf1**](#balancepdf1) | **GET** /api/accounting/rapport/balance/pdf | |
|[**bilan**](#bilan) | **GET** /api/accounting/rapport/bilan | |
|[**bilanPdf**](#bilanpdf) | **GET** /api/accounting/rapport/bilan/export/pdf | |
|[**bilanPdf1**](#bilanpdf1) | **GET** /api/accounting/rapport/bilan/pdf | |
|[**compteResultat**](#compteresultat) | **GET** /api/accounting/rapport/compte-resultat | |
|[**compteResultatPdf**](#compteresultatpdf) | **GET** /api/accounting/rapport/compte-resultat/export/pdf | |
|[**compteResultatPdf1**](#compteresultatpdf1) | **GET** /api/accounting/rapport/compte-resultat/pdf | |
|[**fluxTresorerie**](#fluxtresorerie) | **GET** /api/accounting/rapport/flux-tresorerie | |
|[**fluxTresoreriePdf**](#fluxtresoreriepdf) | **GET** /api/accounting/rapport/flux-tresorerie/export/pdf | |
|[**fluxTresoreriePdf1**](#fluxtresoreriepdf1) | **GET** /api/accounting/rapport/flux-tresorerie/pdf | |
|[**grandLivre**](#grandlivre) | **GET** /api/accounting/rapport/grand-livre | |
|[**grandLivrePdf**](#grandlivrepdf) | **GET** /api/accounting/rapport/grand-livre/export/pdf | |
|[**grandLivrePdf1**](#grandlivrepdf1) | **GET** /api/accounting/rapport/grand-livre/pdf | |
|[**resumeExecutif**](#resumeexecutif) | **GET** /api/accounting/rapport/resume-executif | |
|[**resumeExecutifPdf**](#resumeexecutifpdf) | **GET** /api/accounting/rapport/resume-executif/export/pdf | |
|[**resumeExecutifPdf1**](#resumeexecutifpdf1) | **GET** /api/accounting/rapport/resume-executif/pdf | |

# **balance**
> ApiResponseBalanceDesComptesDto balance()


### Example

```typescript
import {
    AccountingLegacyRapportControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyRapportControllerApi(configuration);

let dateDebut: string; // (default to undefined)
let dateFin: string; // (default to undefined)

const { status, data } = await apiInstance.balance(
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

**ApiResponseBalanceDesComptesDto**

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

# **balancePdf**
> string balancePdf()


### Example

```typescript
import {
    AccountingLegacyRapportControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyRapportControllerApi(configuration);

let dateDebut: string; // (default to undefined)
let dateFin: string; // (default to undefined)

const { status, data } = await apiInstance.balancePdf(
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
 - **Accept**: application/pdf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **balancePdf1**
> string balancePdf1()


### Example

```typescript
import {
    AccountingLegacyRapportControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyRapportControllerApi(configuration);

let dateDebut: string; // (default to undefined)
let dateFin: string; // (default to undefined)

const { status, data } = await apiInstance.balancePdf1(
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
 - **Accept**: application/pdf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bilan**
> ApiResponseBilanDto bilan()


### Example

```typescript
import {
    AccountingLegacyRapportControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyRapportControllerApi(configuration);

let dateDebut: string; // (default to undefined)
let dateFin: string; // (default to undefined)

const { status, data } = await apiInstance.bilan(
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

**ApiResponseBilanDto**

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

# **bilanPdf**
> string bilanPdf()


### Example

```typescript
import {
    AccountingLegacyRapportControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyRapportControllerApi(configuration);

let dateDebut: string; // (default to undefined)
let dateFin: string; // (default to undefined)

const { status, data } = await apiInstance.bilanPdf(
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
 - **Accept**: application/pdf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bilanPdf1**
> string bilanPdf1()


### Example

```typescript
import {
    AccountingLegacyRapportControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyRapportControllerApi(configuration);

let dateDebut: string; // (default to undefined)
let dateFin: string; // (default to undefined)

const { status, data } = await apiInstance.bilanPdf1(
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
 - **Accept**: application/pdf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **compteResultat**
> ApiResponseCompteResultatDto compteResultat()


### Example

```typescript
import {
    AccountingLegacyRapportControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyRapportControllerApi(configuration);

let dateDebut: string; // (default to undefined)
let dateFin: string; // (default to undefined)

const { status, data } = await apiInstance.compteResultat(
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

**ApiResponseCompteResultatDto**

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

# **compteResultatPdf**
> string compteResultatPdf()


### Example

```typescript
import {
    AccountingLegacyRapportControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyRapportControllerApi(configuration);

let dateDebut: string; // (default to undefined)
let dateFin: string; // (default to undefined)

const { status, data } = await apiInstance.compteResultatPdf(
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
 - **Accept**: application/pdf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **compteResultatPdf1**
> string compteResultatPdf1()


### Example

```typescript
import {
    AccountingLegacyRapportControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyRapportControllerApi(configuration);

let dateDebut: string; // (default to undefined)
let dateFin: string; // (default to undefined)

const { status, data } = await apiInstance.compteResultatPdf1(
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
 - **Accept**: application/pdf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fluxTresorerie**
> ApiResponseCashFlowDto fluxTresorerie()


### Example

```typescript
import {
    AccountingLegacyRapportControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyRapportControllerApi(configuration);

let dateDebut: string; // (default to undefined)
let dateFin: string; // (default to undefined)

const { status, data } = await apiInstance.fluxTresorerie(
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

**ApiResponseCashFlowDto**

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

# **fluxTresoreriePdf**
> string fluxTresoreriePdf()


### Example

```typescript
import {
    AccountingLegacyRapportControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyRapportControllerApi(configuration);

let dateDebut: string; // (default to undefined)
let dateFin: string; // (default to undefined)

const { status, data } = await apiInstance.fluxTresoreriePdf(
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
 - **Accept**: application/pdf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fluxTresoreriePdf1**
> string fluxTresoreriePdf1()


### Example

```typescript
import {
    AccountingLegacyRapportControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyRapportControllerApi(configuration);

let dateDebut: string; // (default to undefined)
let dateFin: string; // (default to undefined)

const { status, data } = await apiInstance.fluxTresoreriePdf1(
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
 - **Accept**: application/pdf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **grandLivre**
> ApiResponseListGrandLivreDto grandLivre()


### Example

```typescript
import {
    AccountingLegacyRapportControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyRapportControllerApi(configuration);

let dateDebut: string; // (default to undefined)
let dateFin: string; // (default to undefined)

const { status, data } = await apiInstance.grandLivre(
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

**ApiResponseListGrandLivreDto**

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

# **grandLivrePdf**
> string grandLivrePdf()


### Example

```typescript
import {
    AccountingLegacyRapportControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyRapportControllerApi(configuration);

let dateDebut: string; // (default to undefined)
let dateFin: string; // (default to undefined)

const { status, data } = await apiInstance.grandLivrePdf(
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
 - **Accept**: application/pdf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **grandLivrePdf1**
> string grandLivrePdf1()


### Example

```typescript
import {
    AccountingLegacyRapportControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyRapportControllerApi(configuration);

let dateDebut: string; // (default to undefined)
let dateFin: string; // (default to undefined)

const { status, data } = await apiInstance.grandLivrePdf1(
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
 - **Accept**: application/pdf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resumeExecutif**
> ApiResponseExecutiveSummaryDto resumeExecutif()


### Example

```typescript
import {
    AccountingLegacyRapportControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyRapportControllerApi(configuration);

let dateDebut: string; // (default to undefined)
let dateFin: string; // (default to undefined)

const { status, data } = await apiInstance.resumeExecutif(
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

**ApiResponseExecutiveSummaryDto**

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

# **resumeExecutifPdf**
> string resumeExecutifPdf()


### Example

```typescript
import {
    AccountingLegacyRapportControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyRapportControllerApi(configuration);

let dateDebut: string; // (default to undefined)
let dateFin: string; // (default to undefined)

const { status, data } = await apiInstance.resumeExecutifPdf(
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
 - **Accept**: application/pdf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resumeExecutifPdf1**
> string resumeExecutifPdf1()


### Example

```typescript
import {
    AccountingLegacyRapportControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingLegacyRapportControllerApi(configuration);

let dateDebut: string; // (default to undefined)
let dateFin: string; // (default to undefined)

const { status, data } = await apiInstance.resumeExecutifPdf1(
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
 - **Accept**: application/pdf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

