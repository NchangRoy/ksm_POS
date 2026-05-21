# CreateCashRegisterPostingRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**registerReference** | **string** |  | [default to undefined]
**registerId** | **string** |  | [optional] [default to undefined]
**registerAccountId** | **string** |  | [optional] [default to undefined]
**registerAccountNumber** | **string** |  | [optional] [default to undefined]
**amount** | **number** |  | [default to undefined]
**currency** | **string** |  | [default to undefined]
**postingType** | **string** |  | [default to undefined]
**sessionId** | **string** |  | [optional] [default to undefined]
**movementId** | **string** |  | [optional] [default to undefined]
**counterpartyAccountNumber** | **string** |  | [optional] [default to undefined]
**note** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CreateCashRegisterPostingRequest } from './api';

const instance: CreateCashRegisterPostingRequest = {
    registerReference,
    registerId,
    registerAccountId,
    registerAccountNumber,
    amount,
    currency,
    postingType,
    sessionId,
    movementId,
    counterpartyAccountNumber,
    note,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
