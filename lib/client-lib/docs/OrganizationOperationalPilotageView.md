# OrganizationOperationalPilotageView


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organizationId** | **string** |  | [optional] [default to undefined]
**operationalPolicyId** | **string** |  | [optional] [default to undefined]
**assetPortfolio** | [**AssetPortfolioSnapshot**](AssetPortfolioSnapshot.md) |  | [optional] [default to undefined]
**advancedAssetOverview** | [**AdvancedAssetOverviewSnapshot**](AdvancedAssetOverviewSnapshot.md) |  | [optional] [default to undefined]
**generalizedInventory** | [**GeneralizedInventoryViewSnapshot**](GeneralizedInventoryViewSnapshot.md) |  | [optional] [default to undefined]
**documentHubOverview** | [**DocumentHubOverviewSnapshot**](DocumentHubOverviewSnapshot.md) |  | [optional] [default to undefined]
**documentGovernanceOverview** | [**DocumentGovernanceOverviewSnapshot**](DocumentGovernanceOverviewSnapshot.md) |  | [optional] [default to undefined]
**campaignSummary** | [**CampaignSummaryView**](CampaignSummaryView.md) |  | [optional] [default to undefined]
**siteSnapshots** | [**Array&lt;OperationalSiteSnapshotView&gt;**](OperationalSiteSnapshotView.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OrganizationOperationalPilotageView } from './api';

const instance: OrganizationOperationalPilotageView = {
    organizationId,
    operationalPolicyId,
    assetPortfolio,
    advancedAssetOverview,
    generalizedInventory,
    documentHubOverview,
    documentGovernanceOverview,
    campaignSummary,
    siteSnapshots,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
