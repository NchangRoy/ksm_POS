# GeneralizedInventoryView


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
**requestedWarehouseTransferCount** | **number** |  | [optional] [default to undefined]
**completedWarehouseTransferCount** | **number** |  | [optional] [default to undefined]
**physicalSpaceCount** | **number** |  | [optional] [default to undefined]
**activePhysicalSpaceCount** | **number** |  | [optional] [default to undefined]
**resourceCount** | **number** |  | [optional] [default to undefined]
**assignedResourceCount** | **number** |  | [optional] [default to undefined]
**reservedResourceCount** | **number** |  | [optional] [default to undefined]
**openMaintenanceCount** | **number** |  | [optional] [default to undefined]
**documentCount** | **number** |  | [optional] [default to undefined]
**stockMovementsByType** | **{ [key: string]: number; }** |  | [optional] [default to undefined]
**productPositions** | [**Array&lt;ProductPositionView&gt;**](ProductPositionView.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GeneralizedInventoryView } from './api';

const instance: GeneralizedInventoryView = {
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
    requestedWarehouseTransferCount,
    completedWarehouseTransferCount,
    physicalSpaceCount,
    activePhysicalSpaceCount,
    resourceCount,
    assignedResourceCount,
    reservedResourceCount,
    openMaintenanceCount,
    documentCount,
    stockMovementsByType,
    productPositions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
