# OperationalSiteView


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scopeType** | **string** |  | [optional] [default to undefined]
**scopeId** | **string** |  | [optional] [default to undefined]
**organizationId** | **string** |  | [optional] [default to undefined]
**agencyId** | **string** |  | [optional] [default to undefined]
**agencyType** | **string** |  | [optional] [default to undefined]
**code** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**city** | **string** |  | [optional] [default to undefined]
**country** | **string** |  | [optional] [default to undefined]
**location** | **string** |  | [optional] [default to undefined]
**active** | **boolean** |  | [optional] [default to undefined]
**warehouse** | **boolean** |  | [optional] [default to undefined]
**openingHours** | [**Array&lt;OpeningHoursView&gt;**](OpeningHoursView.md) |  | [optional] [default to undefined]
**upcomingExceptions** | [**Array&lt;OpeningHoursExceptionView&gt;**](OpeningHoursExceptionView.md) |  | [optional] [default to undefined]
**pointsOfInterest** | [**Array&lt;PointOfInterestView&gt;**](PointOfInterestView.md) |  | [optional] [default to undefined]
**physicalLayout** | [**PhysicalLayoutView**](PhysicalLayoutView.md) |  | [optional] [default to undefined]
**assetPortfolio** | [**AssetPortfolioSnapshot**](AssetPortfolioSnapshot.md) |  | [optional] [default to undefined]
**documents** | [**SiteDocumentView**](SiteDocumentView.md) |  | [optional] [default to undefined]
**inventory** | [**GeneralizedInventoryView**](GeneralizedInventoryView.md) |  | [optional] [default to undefined]
**capabilities** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { OperationalSiteView } from './api';

const instance: OperationalSiteView = {
    scopeType,
    scopeId,
    organizationId,
    agencyId,
    agencyType,
    code,
    name,
    city,
    country,
    location,
    active,
    warehouse,
    openingHours,
    upcomingExceptions,
    pointsOfInterest,
    physicalLayout,
    assetPortfolio,
    documents,
    inventory,
    capabilities,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
