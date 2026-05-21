# ActorFinancialProfileControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**ensureFinancialProfile**](#ensurefinancialprofile) | **POST** /api/third-parties/actors/{actorId}/financial-profile | |

# **ensureFinancialProfile**
> ApiResponseThirdPartyResponse ensureFinancialProfile(ensureActorFinancialProfileRequest)


### Example

```typescript
import {
    ActorFinancialProfileControllerApi,
    Configuration,
    EnsureActorFinancialProfileRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ActorFinancialProfileControllerApi(configuration);

let actorId: string; // (default to undefined)
let ensureActorFinancialProfileRequest: EnsureActorFinancialProfileRequest; //

const { status, data } = await apiInstance.ensureFinancialProfile(
    actorId,
    ensureActorFinancialProfileRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ensureActorFinancialProfileRequest** | **EnsureActorFinancialProfileRequest**|  | |
| **actorId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseThirdPartyResponse**

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

