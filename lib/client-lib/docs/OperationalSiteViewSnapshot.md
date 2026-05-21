# OperationalSiteViewSnapshot


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
**physicalLayout** | [**PhysicalLayoutSnapshot**](PhysicalLayoutSnapshot.md) |  | [optional] [default to undefined]
**assetPortfolio** | [**AssetPortfolioSnapshot**](AssetPortfolioSnapshot.md) |  | [optional] [default to undefined]
**documents** | [**SiteDocumentSnapshot**](SiteDocumentSnapshot.md) |  | [optional] [default to undefined]
**inventory** | [**GeneralizedInventoryViewSnapshot**](GeneralizedInventoryViewSnapshot.md) |  | [optional] [default to undefined]
**capabilities** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { OperationalSiteViewSnapshot } from './api';

const instance: OperationalSiteViewSnapshot = {
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
    physicalLayout,
    assetPortfolio,
    documents,
    inventory,
    capabilities,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
