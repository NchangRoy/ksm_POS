# BalanceDesComptesDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalDebitOuverture** | **number** |  | [optional] [default to undefined]
**totalCreditOuverture** | **number** |  | [optional] [default to undefined]
**totalDebitMouvement** | **number** |  | [optional] [default to undefined]
**totalCreditMouvement** | **number** |  | [optional] [default to undefined]
**totalDebitCloture** | **number** |  | [optional] [default to undefined]
**totalCreditCloture** | **number** |  | [optional] [default to undefined]
**lignes** | [**Array&lt;LigneBalanceDto&gt;**](LigneBalanceDto.md) |  | [optional] [default to undefined]

## Example

```typescript
import { BalanceDesComptesDto } from './api';

const instance: BalanceDesComptesDto = {
    totalDebitOuverture,
    totalCreditOuverture,
    totalDebitMouvement,
    totalCreditMouvement,
    totalDebitCloture,
    totalCreditCloture,
    lignes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
