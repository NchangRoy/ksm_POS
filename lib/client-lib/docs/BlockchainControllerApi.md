# BlockchainControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**anchorDocument**](#anchordocument) | **POST** /api/v1/blockchain/anchors | |
|[**createWallet**](#createwallet) | **POST** /api/v1/blockchain/wallets | |
|[**listBlockTransactions**](#listblocktransactions) | **GET** /api/v1/blockchain/blocks/{blockId}/transactions | |
|[**listBlocks**](#listblocks) | **GET** /api/v1/blockchain/blocks | |
|[**listTransactions**](#listtransactions) | **GET** /api/v1/blockchain/transactions | |
|[**listWallets**](#listwallets) | **GET** /api/v1/blockchain/wallets | |
|[**mine**](#mine) | **POST** /api/v1/blockchain/mine | |
|[**signPayload**](#signpayload) | **POST** /api/v1/blockchain/crypto/sign | |
|[**signingPayload**](#signingpayload) | **POST** /api/v1/blockchain/transactions/signing-payload | |
|[**submitTransaction**](#submittransaction) | **POST** /api/v1/blockchain/transactions | |
|[**validate3**](#validate3) | **GET** /api/v1/blockchain/validate | |

# **anchorDocument**
> ApiResponseTransactionResponse anchorDocument(anchorDocumentRequest)


### Example

```typescript
import {
    BlockchainControllerApi,
    Configuration,
    AnchorDocumentRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BlockchainControllerApi(configuration);

let anchorDocumentRequest: AnchorDocumentRequest; //

const { status, data } = await apiInstance.anchorDocument(
    anchorDocumentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **anchorDocumentRequest** | **AnchorDocumentRequest**|  | |


### Return type

**ApiResponseTransactionResponse**

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

# **createWallet**
> ApiResponseGeneratedWalletResponse createWallet(createWalletRequest)


### Example

```typescript
import {
    BlockchainControllerApi,
    Configuration,
    CreateWalletRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BlockchainControllerApi(configuration);

let createWalletRequest: CreateWalletRequest; //

const { status, data } = await apiInstance.createWallet(
    createWalletRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createWalletRequest** | **CreateWalletRequest**|  | |


### Return type

**ApiResponseGeneratedWalletResponse**

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

# **listBlockTransactions**
> ApiResponseListTransactionResponse listBlockTransactions()


### Example

```typescript
import {
    BlockchainControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BlockchainControllerApi(configuration);

let blockId: string; // (default to undefined)

const { status, data } = await apiInstance.listBlockTransactions(
    blockId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **blockId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListTransactionResponse**

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

# **listBlocks**
> ApiResponseListBlockResponse listBlocks()


### Example

```typescript
import {
    BlockchainControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BlockchainControllerApi(configuration);

let organizationId: string; // (default to undefined)
let chainCode: string; // (optional) (default to 'COMOPS_MAIN')

const { status, data } = await apiInstance.listBlocks(
    organizationId,
    chainCode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **chainCode** | [**string**] |  | (optional) defaults to 'COMOPS_MAIN'|


### Return type

**ApiResponseListBlockResponse**

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

# **listTransactions**
> ApiResponseListTransactionResponse listTransactions()


### Example

```typescript
import {
    BlockchainControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BlockchainControllerApi(configuration);

let organizationId: string; // (default to undefined)
let chainCode: string; // (optional) (default to 'COMOPS_MAIN')

const { status, data } = await apiInstance.listTransactions(
    organizationId,
    chainCode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **chainCode** | [**string**] |  | (optional) defaults to 'COMOPS_MAIN'|


### Return type

**ApiResponseListTransactionResponse**

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

# **listWallets**
> ApiResponseListWalletResponse listWallets()


### Example

```typescript
import {
    BlockchainControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BlockchainControllerApi(configuration);

let organizationId: string; // (default to undefined)

const { status, data } = await apiInstance.listWallets(
    organizationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|


### Return type

**ApiResponseListWalletResponse**

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

# **mine**
> ApiResponseBlockResponse mine(mineBlockRequest)


### Example

```typescript
import {
    BlockchainControllerApi,
    Configuration,
    MineBlockRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BlockchainControllerApi(configuration);

let mineBlockRequest: MineBlockRequest; //

const { status, data } = await apiInstance.mine(
    mineBlockRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mineBlockRequest** | **MineBlockRequest**|  | |


### Return type

**ApiResponseBlockResponse**

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

# **signPayload**
> ApiResponseSignatureResponse signPayload(signPayloadRequest)


### Example

```typescript
import {
    BlockchainControllerApi,
    Configuration,
    SignPayloadRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BlockchainControllerApi(configuration);

let signPayloadRequest: SignPayloadRequest; //

const { status, data } = await apiInstance.signPayload(
    signPayloadRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **signPayloadRequest** | **SignPayloadRequest**|  | |


### Return type

**ApiResponseSignatureResponse**

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

# **signingPayload**
> ApiResponseSigningPayloadResponse signingPayload(transactionRequest)


### Example

```typescript
import {
    BlockchainControllerApi,
    Configuration,
    TransactionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BlockchainControllerApi(configuration);

let transactionRequest: TransactionRequest; //

const { status, data } = await apiInstance.signingPayload(
    transactionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionRequest** | **TransactionRequest**|  | |


### Return type

**ApiResponseSigningPayloadResponse**

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

# **submitTransaction**
> ApiResponseTransactionResponse submitTransaction(transactionRequest)


### Example

```typescript
import {
    BlockchainControllerApi,
    Configuration,
    TransactionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new BlockchainControllerApi(configuration);

let transactionRequest: TransactionRequest; //

const { status, data } = await apiInstance.submitTransaction(
    transactionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionRequest** | **TransactionRequest**|  | |


### Return type

**ApiResponseTransactionResponse**

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

# **validate3**
> ApiResponseChainValidationReport validate3()


### Example

```typescript
import {
    BlockchainControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BlockchainControllerApi(configuration);

let organizationId: string; // (default to undefined)
let chainCode: string; // (optional) (default to 'COMOPS_MAIN')

const { status, data } = await apiInstance.validate3(
    organizationId,
    chainCode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organizationId** | [**string**] |  | defaults to undefined|
| **chainCode** | [**string**] |  | (optional) defaults to 'COMOPS_MAIN'|


### Return type

**ApiResponseChainValidationReport**

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

