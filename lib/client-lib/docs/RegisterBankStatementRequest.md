# RegisterBankStatementRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organizationId** | **string** |  | [default to undefined]
**bankAccountId** | **string** |  | [default to undefined]
**statementNumber** | **string** |  | [optional] [default to undefined]
**statementDate** | **string** |  | [default to undefined]
**openingBalance** | **number** |  | [default to undefined]
**closingBalance** | **number** |  | [default to undefined]

## Example

```typescript
import { RegisterBankStatementRequest } from './api';

const instance: RegisterBankStatementRequest = {
    organizationId,
    bankAccountId,
    statementNumber,
    statementDate,
    openingBalance,
    closingBalance,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
