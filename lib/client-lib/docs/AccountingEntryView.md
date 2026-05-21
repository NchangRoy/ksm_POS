# AccountingEntryView


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**organizationId** | **string** |  | [optional] [default to undefined]
**journalId** | **string** |  | [optional] [default to undefined]
**reference** | **string** |  | [optional] [default to undefined]
**entryDate** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**lines** | [**Array&lt;EntryLineView&gt;**](EntryLineView.md) |  | [optional] [default to undefined]
**totalDebit** | **number** |  | [optional] [default to undefined]
**totalCredit** | **number** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**validatedAt** | **string** |  | [optional] [default to undefined]
**cancelledAt** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AccountingEntryView } from './api';

const instance: AccountingEntryView = {
    id,
    organizationId,
    journalId,
    reference,
    entryDate,
    status,
    lines,
    totalDebit,
    totalCredit,
    createdAt,
    validatedAt,
    cancelledAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
