# LegacyCheckControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deposit**](#deposit) | **POST** /api/banking/checks/{checkPaymentId}/deposit | |
|[**list17**](#list17) | **GET** /api/banking/checks | |
|[**register5**](#register5) | **POST** /api/banking/checks | |

# **deposit**
> ApiResponseCheckPaymentResponse deposit()


### Example

```typescript
import {
    LegacyCheckControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyCheckControllerApi(configuration);

let checkPaymentId: string; // (default to undefined)
let accountId: string; // (default to undefined)

const { status, data } = await apiInstance.deposit(
    checkPaymentId,
    accountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkPaymentId** | [**string**] |  | defaults to undefined|
| **accountId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseCheckPaymentResponse**

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

# **list17**
> ApiResponseListCheckPaymentResponse list17()


### Example

```typescript
import {
    LegacyCheckControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyCheckControllerApi(configuration);

let organizationId: string; // (default to undefined)
let status: string; // (optional) (default to undefined)
let bankAccountId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.list17(
    organizationId,
    status,
    bankAccountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **status** | [**string**] |  | (optional) defaults to undefined|
| **bankAccountId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ApiResponseListCheckPaymentResponse**

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

# **register5**
> ApiResponseCheckPaymentResponse register5(registerCheckPaymentRequest)


### Example

```typescript
import {
    LegacyCheckControllerApi,
    Configuration,
    RegisterCheckPaymentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new LegacyCheckControllerApi(configuration);

let registerCheckPaymentRequest: RegisterCheckPaymentRequest; //

const { status, data } = await apiInstance.register5(
    registerCheckPaymentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerCheckPaymentRequest** | **RegisterCheckPaymentRequest**|  | |


### Return type

**ApiResponseCheckPaymentResponse**

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

