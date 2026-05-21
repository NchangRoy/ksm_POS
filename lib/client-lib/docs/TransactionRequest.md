# TransactionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organizationId** | **string** |  | [optional] [default to undefined]
**chainCode** | **string** |  | [optional] [default to undefined]
**transactionType** | **string** |  | [optional] [default to undefined]
**sourceService** | **string** |  | [optional] [default to undefined]
**sourceReference** | **string** |  | [optional] [default to undefined]
**payload** | **string** |  | [optional] [default to undefined]
**payloadHash** | **string** |  | [optional] [default to undefined]
**senderPublicKey** | **string** |  | [optional] [default to undefined]
**signature** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { TransactionRequest } from './api';

const instance: TransactionRequest = {
    organizationId,
    chainCode,
    transactionType,
    sourceService,
    sourceReference,
    payload,
    payloadHash,
    senderPublicKey,
    signature,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
