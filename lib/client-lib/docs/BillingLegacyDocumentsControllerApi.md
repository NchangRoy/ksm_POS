# BillingLegacyDocumentsControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**_delete**](#_delete) | **DELETE** /api/v1/facturation/bon-receptions/{id} | |
|[**create**](#create) | **POST** /api/v1/facturation/bon-receptions | |
|[**create1**](#create1) | **POST** /api/v1/facturation/note-credits | |
|[**create2**](#create2) | **POST** /api/facture-fournisseurs | |
|[**create3**](#create3) | **POST** /api/factures-proforma | |
|[**create4**](#create4) | **POST** /api/bons-livraison | |
|[**create5**](#create5) | **POST** /api/bon-commande | |
|[**create6**](#create6) | **POST** /api/bons-achat | |
|[**delete1**](#delete1) | **DELETE** /api/v1/facturation/note-credits/{id} | |
|[**delete2**](#delete2) | **DELETE** /api/factures-proforma/{id} | |
|[**delete3**](#delete3) | **DELETE** /api/bons-livraison/{id} | |
|[**delete4**](#delete4) | **DELETE** /api/bons-achat/{id} | |
|[**get**](#get) | **GET** /api/v1/facturation/bon-receptions/{id} | |
|[**get1**](#get1) | **GET** /api/v1/facturation/note-credits/{id} | |
|[**get2**](#get2) | **GET** /api/facture-fournisseurs/{id} | |
|[**get3**](#get3) | **GET** /api/factures-proforma/{id} | |
|[**get4**](#get4) | **GET** /api/bons-livraison/{id} | |
|[**get5**](#get5) | **GET** /api/bon-commande/{id} | |
|[**get6**](#get6) | **GET** /api/bons-achat/{id} | |
|[**list**](#list) | **GET** /api/v1/facturation/bon-receptions | |
|[**list1**](#list1) | **GET** /api/v1/facturation/note-credits | |
|[**list2**](#list2) | **GET** /api/facture-fournisseurs | |
|[**list3**](#list3) | **GET** /api/factures-proforma | |
|[**list4**](#list4) | **GET** /api/bons-livraison | |
|[**list5**](#list5) | **GET** /api/bon-commande | |
|[**list6**](#list6) | **GET** /api/bons-achat | |
|[**listByClient**](#listbyclient) | **GET** /api/factures-proforma/client/{idClient} | |
|[**listByClient1**](#listbyclient1) | **GET** /api/bons-livraison/client/{idClient} | |
|[**payViaBank**](#payviabank) | **POST** /api/v1/facturation/bon-receptions/{id}/payments/bank | |
|[**payViaBank1**](#payviabank1) | **POST** /api/v1/facturation/note-credits/{id}/payments/bank | |
|[**payViaBank2**](#payviabank2) | **POST** /api/facture-fournisseurs/{id}/payments/bank | |
|[**payViaBank3**](#payviabank3) | **POST** /api/factures-proforma/{id}/payments/bank | |
|[**payViaBank4**](#payviabank4) | **POST** /api/bons-livraison/{id}/payments/bank | |
|[**payViaBank5**](#payviabank5) | **POST** /api/bon-commande/{id}/payments/bank | |
|[**payViaBank6**](#payviabank6) | **POST** /api/bons-achat/{id}/payments/bank | |
|[**payViaCashier**](#payviacashier) | **POST** /api/v1/facturation/bon-receptions/{id}/payments/cashier | |
|[**payViaCashier1**](#payviacashier1) | **POST** /api/v1/facturation/note-credits/{id}/payments/cashier | |
|[**payViaCashier2**](#payviacashier2) | **POST** /api/facture-fournisseurs/{id}/payments/cashier | |
|[**payViaCashier3**](#payviacashier3) | **POST** /api/factures-proforma/{id}/payments/cashier | |
|[**payViaCashier4**](#payviacashier4) | **POST** /api/bons-livraison/{id}/payments/cashier | |
|[**payViaCashier5**](#payviacashier5) | **POST** /api/bon-commande/{id}/payments/cashier | |
|[**payViaCashier6**](#payviacashier6) | **POST** /api/bons-achat/{id}/payments/cashier | |
|[**performDelivery**](#performdelivery) | **POST** /api/bons-livraison/{id}/effectuer | |
|[**syncToAccounting**](#synctoaccounting) | **POST** /api/v1/facturation/bon-receptions/{id}/sync/accounting-invoice | |
|[**syncToAccounting1**](#synctoaccounting1) | **POST** /api/v1/facturation/note-credits/{id}/sync/accounting-invoice | |
|[**syncToAccounting2**](#synctoaccounting2) | **POST** /api/facture-fournisseurs/{id}/sync/accounting-invoice | |
|[**syncToAccounting3**](#synctoaccounting3) | **POST** /api/factures-proforma/{id}/sync/accounting-invoice | |
|[**syncToAccounting4**](#synctoaccounting4) | **POST** /api/bons-livraison/{id}/sync/accounting-invoice | |
|[**syncToAccounting5**](#synctoaccounting5) | **POST** /api/bon-commande/{id}/sync/accounting-invoice | |
|[**syncToAccounting6**](#synctoaccounting6) | **POST** /api/bons-achat/{id}/sync/accounting-invoice | |
|[**syncToCashier**](#synctocashier) | **POST** /api/v1/facturation/bon-receptions/{id}/sync/cashier-bill | |
|[**syncToCashier1**](#synctocashier1) | **POST** /api/v1/facturation/note-credits/{id}/sync/cashier-bill | |
|[**syncToCashier2**](#synctocashier2) | **POST** /api/facture-fournisseurs/{id}/sync/cashier-bill | |
|[**syncToCashier3**](#synctocashier3) | **POST** /api/factures-proforma/{id}/sync/cashier-bill | |
|[**syncToCashier4**](#synctocashier4) | **POST** /api/bons-livraison/{id}/sync/cashier-bill | |
|[**syncToCashier5**](#synctocashier5) | **POST** /api/bon-commande/{id}/sync/cashier-bill | |
|[**syncToCashier6**](#synctocashier6) | **POST** /api/bons-achat/{id}/sync/cashier-bill | |
|[**update**](#update) | **PUT** /api/v1/facturation/bon-receptions/{id} | |
|[**update1**](#update1) | **PUT** /api/v1/facturation/note-credits/{id} | |
|[**update2**](#update2) | **PUT** /api/facture-fournisseurs/{id} | |
|[**update3**](#update3) | **PUT** /api/factures-proforma/{id} | |
|[**update4**](#update4) | **PUT** /api/bons-livraison/{id} | |
|[**update5**](#update5) | **PUT** /api/bon-commande/{id} | |
|[**update6**](#update6) | **PUT** /api/bons-achat/{id} | |

# **_delete**
> _delete()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance._delete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


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

# **create**
> CommercialDocumentView create(createCommercialDocumentRequest)


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    CreateCommercialDocumentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let createCommercialDocumentRequest: CreateCommercialDocumentRequest; //

const { status, data } = await apiInstance.create(
    createCommercialDocumentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCommercialDocumentRequest** | **CreateCommercialDocumentRequest**|  | |


### Return type

**CommercialDocumentView**

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

# **create1**
> CommercialDocumentView create1(createCommercialDocumentRequest)


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    CreateCommercialDocumentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let createCommercialDocumentRequest: CreateCommercialDocumentRequest; //

const { status, data } = await apiInstance.create1(
    createCommercialDocumentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCommercialDocumentRequest** | **CreateCommercialDocumentRequest**|  | |


### Return type

**CommercialDocumentView**

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

# **create2**
> CommercialDocumentView create2(createCommercialDocumentRequest)


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    CreateCommercialDocumentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let createCommercialDocumentRequest: CreateCommercialDocumentRequest; //

const { status, data } = await apiInstance.create2(
    createCommercialDocumentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCommercialDocumentRequest** | **CreateCommercialDocumentRequest**|  | |


### Return type

**CommercialDocumentView**

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

# **create3**
> CommercialDocumentView create3(createCommercialDocumentRequest)


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    CreateCommercialDocumentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let createCommercialDocumentRequest: CreateCommercialDocumentRequest; //

const { status, data } = await apiInstance.create3(
    createCommercialDocumentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCommercialDocumentRequest** | **CreateCommercialDocumentRequest**|  | |


### Return type

**CommercialDocumentView**

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

# **create4**
> CommercialDocumentView create4(createCommercialDocumentRequest)


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    CreateCommercialDocumentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let createCommercialDocumentRequest: CreateCommercialDocumentRequest; //

const { status, data } = await apiInstance.create4(
    createCommercialDocumentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCommercialDocumentRequest** | **CreateCommercialDocumentRequest**|  | |


### Return type

**CommercialDocumentView**

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

# **create5**
> CommercialDocumentView create5(createCommercialDocumentRequest)


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    CreateCommercialDocumentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let createCommercialDocumentRequest: CreateCommercialDocumentRequest; //

const { status, data } = await apiInstance.create5(
    createCommercialDocumentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCommercialDocumentRequest** | **CreateCommercialDocumentRequest**|  | |


### Return type

**CommercialDocumentView**

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

# **create6**
> CommercialDocumentView create6(createCommercialDocumentRequest)


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    CreateCommercialDocumentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let createCommercialDocumentRequest: CreateCommercialDocumentRequest; //

const { status, data } = await apiInstance.create6(
    createCommercialDocumentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCommercialDocumentRequest** | **CreateCommercialDocumentRequest**|  | |


### Return type

**CommercialDocumentView**

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

# **delete1**
> delete1()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.delete1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


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

# **delete2**
> delete2()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.delete2(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


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

# **delete3**
> delete3()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.delete3(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


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

# **delete4**
> delete4()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.delete4(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


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

# **get**
> CommercialDocumentView get()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.get(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CommercialDocumentView**

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

# **get1**
> CommercialDocumentView get1()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.get1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CommercialDocumentView**

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

# **get2**
> CommercialDocumentView get2()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.get2(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CommercialDocumentView**

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

# **get3**
> CommercialDocumentView get3()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.get3(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CommercialDocumentView**

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

# **get4**
> CommercialDocumentView get4()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.get4(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CommercialDocumentView**

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

# **get5**
> CommercialDocumentView get5()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.get5(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CommercialDocumentView**

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

# **get6**
> CommercialDocumentView get6()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.get6(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CommercialDocumentView**

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

# **list**
> Array<CommercialDocumentView> list()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

const { status, data } = await apiInstance.list();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CommercialDocumentView>**

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

# **list1**
> Array<CommercialDocumentView> list1()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

const { status, data } = await apiInstance.list1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CommercialDocumentView>**

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

# **list2**
> Array<CommercialDocumentView> list2()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

const { status, data } = await apiInstance.list2();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CommercialDocumentView>**

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

# **list3**
> Array<CommercialDocumentView> list3()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

const { status, data } = await apiInstance.list3();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CommercialDocumentView>**

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

# **list4**
> Array<CommercialDocumentView> list4()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

const { status, data } = await apiInstance.list4();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CommercialDocumentView>**

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

# **list5**
> Array<CommercialDocumentView> list5()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

const { status, data } = await apiInstance.list5();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CommercialDocumentView>**

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

# **list6**
> Array<CommercialDocumentView> list6()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

const { status, data } = await apiInstance.list6();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CommercialDocumentView>**

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

# **listByClient**
> Array<CommercialDocumentView> listByClient()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let idClient: string; // (default to undefined)

const { status, data } = await apiInstance.listByClient(
    idClient
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **idClient** | [**string**] |  | defaults to undefined|


### Return type

**Array<CommercialDocumentView>**

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

# **listByClient1**
> Array<CommercialDocumentView> listByClient1()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let idClient: string; // (default to undefined)

const { status, data } = await apiInstance.listByClient1(
    idClient
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **idClient** | [**string**] |  | defaults to undefined|


### Return type

**Array<CommercialDocumentView>**

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

# **payViaBank**
> PaymentView payViaBank(recordBankSettlementRequest)


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    RecordBankSettlementRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)
let recordBankSettlementRequest: RecordBankSettlementRequest; //

const { status, data } = await apiInstance.payViaBank(
    id,
    recordBankSettlementRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordBankSettlementRequest** | **RecordBankSettlementRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**PaymentView**

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

# **payViaBank1**
> PaymentView payViaBank1(recordBankSettlementRequest)


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    RecordBankSettlementRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)
let recordBankSettlementRequest: RecordBankSettlementRequest; //

const { status, data } = await apiInstance.payViaBank1(
    id,
    recordBankSettlementRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordBankSettlementRequest** | **RecordBankSettlementRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**PaymentView**

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

# **payViaBank2**
> PaymentView payViaBank2(recordBankSettlementRequest)


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    RecordBankSettlementRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)
let recordBankSettlementRequest: RecordBankSettlementRequest; //

const { status, data } = await apiInstance.payViaBank2(
    id,
    recordBankSettlementRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordBankSettlementRequest** | **RecordBankSettlementRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**PaymentView**

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

# **payViaBank3**
> PaymentView payViaBank3(recordBankSettlementRequest)


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    RecordBankSettlementRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)
let recordBankSettlementRequest: RecordBankSettlementRequest; //

const { status, data } = await apiInstance.payViaBank3(
    id,
    recordBankSettlementRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordBankSettlementRequest** | **RecordBankSettlementRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**PaymentView**

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

# **payViaBank4**
> PaymentView payViaBank4(recordBankSettlementRequest)


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    RecordBankSettlementRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)
let recordBankSettlementRequest: RecordBankSettlementRequest; //

const { status, data } = await apiInstance.payViaBank4(
    id,
    recordBankSettlementRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordBankSettlementRequest** | **RecordBankSettlementRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**PaymentView**

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

# **payViaBank5**
> PaymentView payViaBank5(recordBankSettlementRequest)


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    RecordBankSettlementRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)
let recordBankSettlementRequest: RecordBankSettlementRequest; //

const { status, data } = await apiInstance.payViaBank5(
    id,
    recordBankSettlementRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordBankSettlementRequest** | **RecordBankSettlementRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**PaymentView**

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

# **payViaBank6**
> PaymentView payViaBank6(recordBankSettlementRequest)


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    RecordBankSettlementRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)
let recordBankSettlementRequest: RecordBankSettlementRequest; //

const { status, data } = await apiInstance.payViaBank6(
    id,
    recordBankSettlementRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordBankSettlementRequest** | **RecordBankSettlementRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**PaymentView**

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

# **payViaCashier**
> PaymentView payViaCashier(recordCashierPaymentRequest)


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    RecordCashierPaymentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)
let recordCashierPaymentRequest: RecordCashierPaymentRequest; //

const { status, data } = await apiInstance.payViaCashier(
    id,
    recordCashierPaymentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordCashierPaymentRequest** | **RecordCashierPaymentRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**PaymentView**

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

# **payViaCashier1**
> PaymentView payViaCashier1(recordCashierPaymentRequest)


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    RecordCashierPaymentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)
let recordCashierPaymentRequest: RecordCashierPaymentRequest; //

const { status, data } = await apiInstance.payViaCashier1(
    id,
    recordCashierPaymentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordCashierPaymentRequest** | **RecordCashierPaymentRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**PaymentView**

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

# **payViaCashier2**
> PaymentView payViaCashier2(recordCashierPaymentRequest)


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    RecordCashierPaymentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)
let recordCashierPaymentRequest: RecordCashierPaymentRequest; //

const { status, data } = await apiInstance.payViaCashier2(
    id,
    recordCashierPaymentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordCashierPaymentRequest** | **RecordCashierPaymentRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**PaymentView**

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

# **payViaCashier3**
> PaymentView payViaCashier3(recordCashierPaymentRequest)


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    RecordCashierPaymentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)
let recordCashierPaymentRequest: RecordCashierPaymentRequest; //

const { status, data } = await apiInstance.payViaCashier3(
    id,
    recordCashierPaymentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordCashierPaymentRequest** | **RecordCashierPaymentRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**PaymentView**

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

# **payViaCashier4**
> PaymentView payViaCashier4(recordCashierPaymentRequest)


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    RecordCashierPaymentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)
let recordCashierPaymentRequest: RecordCashierPaymentRequest; //

const { status, data } = await apiInstance.payViaCashier4(
    id,
    recordCashierPaymentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordCashierPaymentRequest** | **RecordCashierPaymentRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**PaymentView**

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

# **payViaCashier5**
> PaymentView payViaCashier5(recordCashierPaymentRequest)


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    RecordCashierPaymentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)
let recordCashierPaymentRequest: RecordCashierPaymentRequest; //

const { status, data } = await apiInstance.payViaCashier5(
    id,
    recordCashierPaymentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordCashierPaymentRequest** | **RecordCashierPaymentRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**PaymentView**

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

# **payViaCashier6**
> PaymentView payViaCashier6(recordCashierPaymentRequest)


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    RecordCashierPaymentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)
let recordCashierPaymentRequest: RecordCashierPaymentRequest; //

const { status, data } = await apiInstance.payViaCashier6(
    id,
    recordCashierPaymentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordCashierPaymentRequest** | **RecordCashierPaymentRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**PaymentView**

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

# **performDelivery**
> CommercialDocumentView performDelivery()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.performDelivery(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CommercialDocumentView**

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

# **syncToAccounting**
> CommercialDocumentView syncToAccounting()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    SyncDocumentToAccountingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)
let syncDocumentToAccountingRequest: SyncDocumentToAccountingRequest; // (optional)

const { status, data } = await apiInstance.syncToAccounting(
    id,
    syncDocumentToAccountingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **syncDocumentToAccountingRequest** | **SyncDocumentToAccountingRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CommercialDocumentView**

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

# **syncToAccounting1**
> CommercialDocumentView syncToAccounting1()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    SyncDocumentToAccountingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)
let syncDocumentToAccountingRequest: SyncDocumentToAccountingRequest; // (optional)

const { status, data } = await apiInstance.syncToAccounting1(
    id,
    syncDocumentToAccountingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **syncDocumentToAccountingRequest** | **SyncDocumentToAccountingRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CommercialDocumentView**

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

# **syncToAccounting2**
> CommercialDocumentView syncToAccounting2()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    SyncDocumentToAccountingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)
let syncDocumentToAccountingRequest: SyncDocumentToAccountingRequest; // (optional)

const { status, data } = await apiInstance.syncToAccounting2(
    id,
    syncDocumentToAccountingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **syncDocumentToAccountingRequest** | **SyncDocumentToAccountingRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CommercialDocumentView**

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

# **syncToAccounting3**
> CommercialDocumentView syncToAccounting3()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    SyncDocumentToAccountingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)
let syncDocumentToAccountingRequest: SyncDocumentToAccountingRequest; // (optional)

const { status, data } = await apiInstance.syncToAccounting3(
    id,
    syncDocumentToAccountingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **syncDocumentToAccountingRequest** | **SyncDocumentToAccountingRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CommercialDocumentView**

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

# **syncToAccounting4**
> CommercialDocumentView syncToAccounting4()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    SyncDocumentToAccountingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)
let syncDocumentToAccountingRequest: SyncDocumentToAccountingRequest; // (optional)

const { status, data } = await apiInstance.syncToAccounting4(
    id,
    syncDocumentToAccountingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **syncDocumentToAccountingRequest** | **SyncDocumentToAccountingRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CommercialDocumentView**

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

# **syncToAccounting5**
> CommercialDocumentView syncToAccounting5()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    SyncDocumentToAccountingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)
let syncDocumentToAccountingRequest: SyncDocumentToAccountingRequest; // (optional)

const { status, data } = await apiInstance.syncToAccounting5(
    id,
    syncDocumentToAccountingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **syncDocumentToAccountingRequest** | **SyncDocumentToAccountingRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CommercialDocumentView**

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

# **syncToAccounting6**
> CommercialDocumentView syncToAccounting6()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    SyncDocumentToAccountingRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)
let syncDocumentToAccountingRequest: SyncDocumentToAccountingRequest; // (optional)

const { status, data } = await apiInstance.syncToAccounting6(
    id,
    syncDocumentToAccountingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **syncDocumentToAccountingRequest** | **SyncDocumentToAccountingRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CommercialDocumentView**

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

# **syncToCashier**
> CommercialDocumentView syncToCashier()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.syncToCashier(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CommercialDocumentView**

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

# **syncToCashier1**
> CommercialDocumentView syncToCashier1()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.syncToCashier1(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CommercialDocumentView**

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

# **syncToCashier2**
> CommercialDocumentView syncToCashier2()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.syncToCashier2(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CommercialDocumentView**

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

# **syncToCashier3**
> CommercialDocumentView syncToCashier3()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.syncToCashier3(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CommercialDocumentView**

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

# **syncToCashier4**
> CommercialDocumentView syncToCashier4()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.syncToCashier4(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CommercialDocumentView**

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

# **syncToCashier5**
> CommercialDocumentView syncToCashier5()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.syncToCashier5(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CommercialDocumentView**

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

# **syncToCashier6**
> CommercialDocumentView syncToCashier6()


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.syncToCashier6(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CommercialDocumentView**

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

# **update**
> CommercialDocumentView update(createCommercialDocumentRequest)


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    CreateCommercialDocumentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)
let createCommercialDocumentRequest: CreateCommercialDocumentRequest; //

const { status, data } = await apiInstance.update(
    id,
    createCommercialDocumentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCommercialDocumentRequest** | **CreateCommercialDocumentRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CommercialDocumentView**

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

# **update1**
> CommercialDocumentView update1(createCommercialDocumentRequest)


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    CreateCommercialDocumentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)
let createCommercialDocumentRequest: CreateCommercialDocumentRequest; //

const { status, data } = await apiInstance.update1(
    id,
    createCommercialDocumentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCommercialDocumentRequest** | **CreateCommercialDocumentRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CommercialDocumentView**

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

# **update2**
> CommercialDocumentView update2(createCommercialDocumentRequest)


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    CreateCommercialDocumentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)
let createCommercialDocumentRequest: CreateCommercialDocumentRequest; //

const { status, data } = await apiInstance.update2(
    id,
    createCommercialDocumentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCommercialDocumentRequest** | **CreateCommercialDocumentRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CommercialDocumentView**

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

# **update3**
> CommercialDocumentView update3(createCommercialDocumentRequest)


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    CreateCommercialDocumentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)
let createCommercialDocumentRequest: CreateCommercialDocumentRequest; //

const { status, data } = await apiInstance.update3(
    id,
    createCommercialDocumentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCommercialDocumentRequest** | **CreateCommercialDocumentRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CommercialDocumentView**

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

# **update4**
> CommercialDocumentView update4(createCommercialDocumentRequest)


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    CreateCommercialDocumentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)
let createCommercialDocumentRequest: CreateCommercialDocumentRequest; //

const { status, data } = await apiInstance.update4(
    id,
    createCommercialDocumentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCommercialDocumentRequest** | **CreateCommercialDocumentRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CommercialDocumentView**

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

# **update5**
> CommercialDocumentView update5(createCommercialDocumentRequest)


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    CreateCommercialDocumentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)
let createCommercialDocumentRequest: CreateCommercialDocumentRequest; //

const { status, data } = await apiInstance.update5(
    id,
    createCommercialDocumentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCommercialDocumentRequest** | **CreateCommercialDocumentRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CommercialDocumentView**

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

# **update6**
> CommercialDocumentView update6(createCommercialDocumentRequest)


### Example

```typescript
import {
    BillingLegacyDocumentsControllerApi,
    Configuration,
    CreateCommercialDocumentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyDocumentsControllerApi(configuration);

let id: string; // (default to undefined)
let createCommercialDocumentRequest: CreateCommercialDocumentRequest; //

const { status, data } = await apiInstance.update6(
    id,
    createCommercialDocumentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCommercialDocumentRequest** | **CreateCommercialDocumentRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CommercialDocumentView**

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

