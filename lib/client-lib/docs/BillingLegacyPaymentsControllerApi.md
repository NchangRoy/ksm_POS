# BillingLegacyPaymentsControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create15**](#create15) | **POST** /api/paiement | |
|[**delete5**](#delete5) | **DELETE** /api/paiement/{id} | |
|[**getById**](#getbyid) | **GET** /api/paiement/{id} | |
|[**list11**](#list11) | **GET** /api/paiement | |
|[**listByClient2**](#listbyclient2) | **GET** /api/paiement/client/{clientId} | |
|[**listByInvoice**](#listbyinvoice) | **GET** /api/paiement/facture/{factureId} | |
|[**update7**](#update7) | **PUT** /api/paiement/{id} | |

# **create15**
> PaymentView create15(createPaymentRequest)


### Example

```typescript
import {
    BillingLegacyPaymentsControllerApi,
    Configuration,
    CreatePaymentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyPaymentsControllerApi(configuration);

let createPaymentRequest: CreatePaymentRequest; //

const { status, data } = await apiInstance.create15(
    createPaymentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPaymentRequest** | **CreatePaymentRequest**|  | |


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

# **delete5**
> delete5()


### Example

```typescript
import {
    BillingLegacyPaymentsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyPaymentsControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.delete5(
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

# **getById**
> PaymentView getById()


### Example

```typescript
import {
    BillingLegacyPaymentsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyPaymentsControllerApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.getById(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**PaymentView**

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

# **list11**
> Array<PaymentView> list11()


### Example

```typescript
import {
    BillingLegacyPaymentsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyPaymentsControllerApi(configuration);

const { status, data } = await apiInstance.list11();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<PaymentView>**

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

# **listByClient2**
> Array<PaymentView> listByClient2()


### Example

```typescript
import {
    BillingLegacyPaymentsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyPaymentsControllerApi(configuration);

let clientId: string; // (default to undefined)

const { status, data } = await apiInstance.listByClient2(
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**string**] |  | defaults to undefined|


### Return type

**Array<PaymentView>**

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

# **listByInvoice**
> Array<PaymentView> listByInvoice()


### Example

```typescript
import {
    BillingLegacyPaymentsControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyPaymentsControllerApi(configuration);

let factureId: string; // (default to undefined)

const { status, data } = await apiInstance.listByInvoice(
    factureId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **factureId** | [**string**] |  | defaults to undefined|


### Return type

**Array<PaymentView>**

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

# **update7**
> PaymentView update7(updatePaymentRequest)


### Example

```typescript
import {
    BillingLegacyPaymentsControllerApi,
    Configuration,
    UpdatePaymentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BillingLegacyPaymentsControllerApi(configuration);

let id: string; // (default to undefined)
let updatePaymentRequest: UpdatePaymentRequest; //

const { status, data } = await apiInstance.update7(
    id,
    updatePaymentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePaymentRequest** | **UpdatePaymentRequest**|  | |
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

