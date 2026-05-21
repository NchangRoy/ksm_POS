# ServiceWorkspaceView


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspaceCode** | **string** |  | [optional] [default to undefined]
**displayName** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**organizationId** | **string** |  | [optional] [default to undefined]
**requiredServiceCodes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**subscribedServiceCodes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**missingServiceCodes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**activeAgencyCount** | **number** |  | [optional] [default to undefined]
**activeOperationalAgencyCount** | **number** |  | [optional] [default to undefined]
**activeWarehouseCount** | **number** |  | [optional] [default to undefined]
**assets** | [**WorkspaceAssetSummary**](WorkspaceAssetSummary.md) |  | [optional] [default to undefined]
**inventory** | [**WorkspaceInventorySummary**](WorkspaceInventorySummary.md) |  | [optional] [default to undefined]
**physicalLayout** | [**WorkspacePhysicalLayoutSummary**](WorkspacePhysicalLayoutSummary.md) |  | [optional] [default to undefined]
**documents** | [**WorkspaceDocumentSummary**](WorkspaceDocumentSummary.md) |  | [optional] [default to undefined]
**readiness** | [**WorkspaceReadiness**](WorkspaceReadiness.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ServiceWorkspaceView } from './api';

const instance: ServiceWorkspaceView = {
    workspaceCode,
    displayName,
    description,
    organizationId,
    requiredServiceCodes,
    subscribedServiceCodes,
    missingServiceCodes,
    activeAgencyCount,
    activeOperationalAgencyCount,
    activeWarehouseCount,
    assets,
    inventory,
    physicalLayout,
    documents,
    readiness,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
