# RegisterInvoiceSettlementRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organizationId** | **string** |  | [default to undefined]
**bankAccountId** | **string** |  | [default to undefined]
**invoiceId** | **string** |  | [default to undefined]
**settlementNumber** | **string** |  | [optional] [default to undefined]
**paymentMethod** | **string** |  | [default to undefined]
**amount** | **number** |  | [default to undefined]

## Example

```typescript
import { RegisterInvoiceSettlementRequest } from './api';

const instance: RegisterInvoiceSettlementRequest = {
    organizationId,
    bankAccountId,
    invoiceId,
    settlementNumber,
    paymentMethod,
    amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
