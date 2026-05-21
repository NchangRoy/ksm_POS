# AccountingClosingPreviewView


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organization** | [**OrganizationSummaryView**](OrganizationSummaryView.md) |  | [optional] [default to undefined]
**journalCount** | **number** |  | [optional] [default to undefined]
**invoiceCount** | **number** |  | [optional] [default to undefined]
**draftInvoiceCount** | **number** |  | [optional] [default to undefined]
**postedInvoiceCount** | **number** |  | [optional] [default to undefined]
**totalReceivables** | **number** |  | [optional] [default to undefined]
**totalPayables** | **number** |  | [optional] [default to undefined]
**ready** | **boolean** |  | [optional] [default to undefined]
**blockingIssues** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { AccountingClosingPreviewView } from './api';

const instance: AccountingClosingPreviewView = {
    organization,
    journalCount,
    invoiceCount,
    draftInvoiceCount,
    postedInvoiceCount,
    totalReceivables,
    totalPayables,
    ready,
    blockingIssues,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
