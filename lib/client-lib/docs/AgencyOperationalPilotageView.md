# AgencyOperationalPilotageView


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organizationId** | **string** |  | [optional] [default to undefined]
**agencyId** | **string** |  | [optional] [default to undefined]
**siteProfile** | [**OperationalSiteProfileView**](OperationalSiteProfileView.md) |  | [optional] [default to undefined]
**siteReadiness** | [**OperationalSiteReadinessSnapshot**](OperationalSiteReadinessSnapshot.md) |  | [optional] [default to undefined]
**operationalPolicyId** | **string** |  | [optional] [default to undefined]
**assetPortfolio** | [**AssetPortfolioSnapshot**](AssetPortfolioSnapshot.md) |  | [optional] [default to undefined]
**operationalSite** | [**OperationalSiteViewSnapshot**](OperationalSiteViewSnapshot.md) |  | [optional] [default to undefined]
**campaignSummary** | [**CampaignSummaryView**](CampaignSummaryView.md) |  | [optional] [default to undefined]
**agencyDocumentCount** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { AgencyOperationalPilotageView } from './api';

const instance: AgencyOperationalPilotageView = {
    organizationId,
    agencyId,
    siteProfile,
    siteReadiness,
    operationalPolicyId,
    assetPortfolio,
    operationalSite,
    campaignSummary,
    agencyDocumentCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
