# AccountingControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createInvoice**](#createinvoice) | **POST** /api/accounting/invoices | |
|[**createInvoiceFromSalesOrder**](#createinvoicefromsalesorder) | **POST** /api/accounting/invoices/from-orders/{orderId} | |
|[**deleteInvoice**](#deleteinvoice) | **DELETE** /api/accounting/invoices/{invoiceId} | |
|[**getInvoice**](#getinvoice) | **GET** /api/accounting/invoices/{invoiceId} | |
|[**listInvoices**](#listinvoices) | **GET** /api/accounting/invoices | |
|[**postInvoice**](#postinvoice) | **POST** /api/accounting/invoices/{invoiceId}/validate | |
|[**postInvoice1**](#postinvoice1) | **POST** /api/accounting/invoices/{invoiceId}/post | |
|[**updateInvoice**](#updateinvoice) | **PATCH** /api/accounting/invoices/{invoiceId} | |

# **createInvoice**
> ApiResponseInvoiceResponse createInvoice(createInvoiceRequest)


### Example

```typescript
import {
    AccountingControllerApi,
    Configuration,
    CreateInvoiceRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingControllerApi(configuration);

let createInvoiceRequest: CreateInvoiceRequest; //

const { status, data } = await apiInstance.createInvoice(
    createInvoiceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createInvoiceRequest** | **CreateInvoiceRequest**|  | |


### Return type

**ApiResponseInvoiceResponse**

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

# **createInvoiceFromSalesOrder**
> ApiResponseInvoiceResponse createInvoiceFromSalesOrder()


### Example

```typescript
import {
    AccountingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingControllerApi(configuration);

let orderId: string; // (default to undefined)

const { status, data } = await apiInstance.createInvoiceFromSalesOrder(
    orderId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseInvoiceResponse**

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

# **deleteInvoice**
> ApiResponseVoid deleteInvoice()


### Example

```typescript
import {
    AccountingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingControllerApi(configuration);

let invoiceId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteInvoice(
    invoiceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **invoiceId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseVoid**

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

# **getInvoice**
> ApiResponseInvoiceResponse getInvoice()


### Example

```typescript
import {
    AccountingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingControllerApi(configuration);

let invoiceId: string; // (default to undefined)

const { status, data } = await apiInstance.getInvoice(
    invoiceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **invoiceId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseInvoiceResponse**

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

# **listInvoices**
> ApiResponseListInvoiceResponse listInvoices()


### Example

```typescript
import {
    AccountingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.listInvoices(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListInvoiceResponse**

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

# **postInvoice**
> ApiResponseInvoiceResponse postInvoice()


### Example

```typescript
import {
    AccountingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingControllerApi(configuration);

let invoiceId: string; // (default to undefined)

const { status, data } = await apiInstance.postInvoice(
    invoiceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **invoiceId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseInvoiceResponse**

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

# **postInvoice1**
> ApiResponseInvoiceResponse postInvoice1()


### Example

```typescript
import {
    AccountingControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingControllerApi(configuration);

let invoiceId: string; // (default to undefined)

const { status, data } = await apiInstance.postInvoice1(
    invoiceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **invoiceId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseInvoiceResponse**

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

# **updateInvoice**
> ApiResponseInvoiceResponse updateInvoice(createInvoiceRequest)


### Example

```typescript
import {
    AccountingControllerApi,
    Configuration,
    CreateInvoiceRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AccountingControllerApi(configuration);

let invoiceId: string; // (default to undefined)
let createInvoiceRequest: CreateInvoiceRequest; //

const { status, data } = await apiInstance.updateInvoice(
    invoiceId,
    createInvoiceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createInvoiceRequest** | **CreateInvoiceRequest**|  | |
| **invoiceId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseInvoiceResponse**

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

