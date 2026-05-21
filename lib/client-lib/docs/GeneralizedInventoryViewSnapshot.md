# GeneralizedInventoryViewSnapshot


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scopeType** | **string** |  | [optional] [default to undefined]
**scopeId** | **string** |  | [optional] [default to undefined]
**organizationId** | **string** |  | [optional] [default to undefined]
**agencyId** | **string** |  | [optional] [default to undefined]
**catalogProductCount** | **number** |  | [optional] [default to undefined]
**activeCatalogProductCount** | **number** |  | [optional] [default to undefined]
**scopedProductCount** | **number** |  | [optional] [default to undefined]
**validatedStockMovementCount** | **number** |  | [optional] [default to undefined]
**draftStockMovementCount** | **number** |  | [optional] [default to undefined]
**netQuantity** | **number** |  | [optional] [default to undefined]
**inventorySessionCount** | **number** |  | [optional] [default to undefined]
**validatedInventorySessionCount** | **number** |  | [optional] [default to undefined]
**draftInventorySessionCount** | **number** |  | [optional] [default to undefined]
**transformationCount** | **number** |  | [optional] [default to undefined]
**validatedTransformationCount** | **number** |  | [optional] [default to undefined]
**draftTransformationCount** | **number** |  | [optional] [default to undefined]
**warehouseTransferCount** | **number** |  | [optional] [default to undefined]
**requestedTransferCount** | **number** |  | [optional] [default to undefined]
**completedTransferCount** | **number** |  | [optional] [default to undefined]
**physicalSpaceCount** | **number** |  | [optional] [default to undefined]
**activePhysicalSpaceCount** | **number** |  | [optional] [default to undefined]
**totalResources** | **number** |  | [optional] [default to undefined]
**assignedResources** | **number** |  | [optional] [default to undefined]
**reservedResources** | **number** |  | [optional] [default to undefined]
**openMaintenanceCount** | **number** |  | [optional] [default to undefined]
**documentCount** | **number** |  | [optional] [default to undefined]
**movementCountsByType** | **{ [key: string]: number; }** |  | [optional] [default to undefined]
**productPositions** | [**Array&lt;ProductPositionSnapshot&gt;**](ProductPositionSnapshot.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GeneralizedInventoryViewSnapshot } from './api';

const instance: GeneralizedInventoryViewSnapshot = {
    scopeType,
    scopeId,
    organizationId,
    agencyId,
    catalogProductCount,
    activeCatalogProductCount,
    scopedProductCount,
    validatedStockMovementCount,
    draftStockMovementCount,
    netQuantity,
    inventorySessionCount,
    validatedInventorySessionCount,
    draftInventorySessionCount,
    transformationCount,
    validatedTransformationCount,
    draftTransformationCount,
    warehouseTransferCount,
    requestedTransferCount,
    completedTransferCount,
    physicalSpaceCount,
    activePhysicalSpaceCount,
    totalResources,
    assignedResources,
    reservedResources,
    openMaintenanceCount,
    documentCount,
    movementCountsByType,
    productPositions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
