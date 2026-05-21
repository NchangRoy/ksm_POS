# OperationalPolicyResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**organizationId** | **string** |  | [optional] [default to undefined]
**agencyId** | **string** |  | [optional] [default to undefined]
**assignmentRequiresApproval** | **boolean** |  | [optional] [default to undefined]
**allowCrossAgencyAssetAssignment** | **boolean** |  | [optional] [default to undefined]
**siteOpeningChecklistRequired** | **boolean** |  | [optional] [default to undefined]
**mandatoryDocumentApproval** | **boolean** |  | [optional] [default to undefined]
**inventoryVarianceTolerancePercent** | **number** |  | [optional] [default to undefined]
**maintenanceAlertThresholdDays** | **number** |  | [optional] [default to undefined]
**lowUtilizationThresholdPercent** | **number** |  | [optional] [default to undefined]
**maxOpenInventoryCampaigns** | **number** |  | [optional] [default to undefined]
**requireInventorySupervisorApproval** | **boolean** |  | [optional] [default to undefined]
**automaticLifecycleEvents** | **boolean** |  | [optional] [default to undefined]
**strictDocumentExpiry** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { OperationalPolicyResponse } from './api';

const instance: OperationalPolicyResponse = {
    id,
    organizationId,
    agencyId,
    assignmentRequiresApproval,
    allowCrossAgencyAssetAssignment,
    siteOpeningChecklistRequired,
    mandatoryDocumentApproval,
    inventoryVarianceTolerancePercent,
    maintenanceAlertThresholdDays,
    lowUtilizationThresholdPercent,
    maxOpenInventoryCampaigns,
    requireInventorySupervisorApproval,
    automaticLifecycleEvents,
    strictDocumentExpiry,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
