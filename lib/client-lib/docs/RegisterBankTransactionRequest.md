# RegisterBankTransactionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organizationId** | **string** |  | [default to undefined]
**bankAccountId** | **string** |  | [default to undefined]
**referenceNumber** | **string** |  | [optional] [default to undefined]
**transactionType** | **string** |  | [default to undefined]
**transactionDate** | **string** |  | [default to undefined]
**amount** | **number** |  | [default to undefined]
**description** | **string** |  | [default to undefined]

## Example

```typescript
import { RegisterBankTransactionRequest } from './api';

const instance: RegisterBankTransactionRequest = {
    organizationId,
    bankAccountId,
    referenceNumber,
    transactionType,
    transactionDate,
    amount,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
