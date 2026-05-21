# AccountingReferenceDataView


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currentOrganization** | [**OrganizationSummaryView**](OrganizationSummaryView.md) |  | [optional] [default to undefined]
**accessibleOrganizations** | [**Array&lt;OrganizationSummaryView&gt;**](OrganizationSummaryView.md) |  | [optional] [default to undefined]
**journals** | [**Array&lt;JournalSummaryView&gt;**](JournalSummaryView.md) |  | [optional] [default to undefined]
**documentSequences** | [**Array&lt;DocumentSequenceSummaryView&gt;**](DocumentSequenceSummaryView.md) |  | [optional] [default to undefined]
**invoices** | [**Array&lt;InvoiceSummaryView&gt;**](InvoiceSummaryView.md) |  | [optional] [default to undefined]
**openReceivables** | [**Array&lt;OpenItemSummaryView&gt;**](OpenItemSummaryView.md) |  | [optional] [default to undefined]
**openPayables** | [**Array&lt;OpenItemSummaryView&gt;**](OpenItemSummaryView.md) |  | [optional] [default to undefined]
**customers** | [**Array&lt;ThirdPartySummaryView&gt;**](ThirdPartySummaryView.md) |  | [optional] [default to undefined]
**suppliers** | [**Array&lt;ThirdPartySummaryView&gt;**](ThirdPartySummaryView.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AccountingReferenceDataView } from './api';

const instance: AccountingReferenceDataView = {
    currentOrganization,
    accessibleOrganizations,
    journals,
    documentSequences,
    invoices,
    openReceivables,
    openPayables,
    customers,
    suppliers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
