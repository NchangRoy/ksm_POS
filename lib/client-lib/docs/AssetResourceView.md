# AssetResourceView


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**organizationId** | **string** |  | [optional] [default to undefined]
**agencyId** | **string** |  | [optional] [default to undefined]
**resourceCode** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**category** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**ipAddress** | **string** |  | [optional] [default to undefined]
**macAddress** | **string** |  | [optional] [default to undefined]
**assignment** | [**TargetView**](TargetView.md) |  | [optional] [default to undefined]
**reservation** | [**TargetView**](TargetView.md) |  | [optional] [default to undefined]
**maintenanceCount** | **number** |  | [optional] [default to undefined]
**openMaintenanceCount** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { AssetResourceView } from './api';

const instance: AssetResourceView = {
    id,
    organizationId,
    agencyId,
    resourceCode,
    name,
    category,
    status,
    ipAddress,
    macAddress,
    assignment,
    reservation,
    maintenanceCount,
    openMaintenanceCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
