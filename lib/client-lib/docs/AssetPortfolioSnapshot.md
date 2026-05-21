# AssetPortfolioSnapshot


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scopeType** | **string** |  | [optional] [default to undefined]
**scopeId** | **string** |  | [optional] [default to undefined]
**organizationId** | **string** |  | [optional] [default to undefined]
**agencyId** | **string** |  | [optional] [default to undefined]
**totalResources** | **number** |  | [optional] [default to undefined]
**assignedResources** | **number** |  | [optional] [default to undefined]
**reservedResources** | **number** |  | [optional] [default to undefined]
**openMaintenanceCount** | **number** |  | [optional] [default to undefined]
**countsByStatus** | **{ [key: string]: number; }** |  | [optional] [default to undefined]
**countsByCategory** | **{ [key: string]: number; }** |  | [optional] [default to undefined]

## Example

```typescript
import { AssetPortfolioSnapshot } from './api';

const instance: AssetPortfolioSnapshot = {
    scopeType,
    scopeId,
    organizationId,
    agencyId,
    totalResources,
    assignedResources,
    reservedResources,
    openMaintenanceCount,
    countsByStatus,
    countsByCategory,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
