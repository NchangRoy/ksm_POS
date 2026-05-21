# CreateMovementRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sessionId** | **string** |  | [optional] [default to undefined]
**registerId** | **string** |  | [optional] [default to undefined]
**accountId** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [default to undefined]
**amount** | **number** |  | [default to undefined]
**currency** | **string** |  | [default to undefined]
**reference** | **string** |  | [default to undefined]
**counterpartyActorId** | **string** |  | [optional] [default to undefined]
**counterpartyThirdPartyId** | **string** |  | [optional] [default to undefined]
**note** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CreateMovementRequest } from './api';

const instance: CreateMovementRequest = {
    sessionId,
    registerId,
    accountId,
    type,
    amount,
    currency,
    reference,
    counterpartyActorId,
    counterpartyThirdPartyId,
    note,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
