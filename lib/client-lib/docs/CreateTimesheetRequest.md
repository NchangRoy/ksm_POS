# CreateTimesheetRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**employeeId** | **string** |  | [optional] [default to undefined]
**periode** | **string** |  | [optional] [default to undefined]
**heuresNormales** | **number** |  | [optional] [default to undefined]
**heuresSupplementaires** | **number** |  | [optional] [default to undefined]
**heuresNuit** | **number** |  | [optional] [default to undefined]
**heuresWeekend** | **number** |  | [optional] [default to undefined]
**absencesNonJustifiees** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { CreateTimesheetRequest } from './api';

const instance: CreateTimesheetRequest = {
    employeeId,
    periode,
    heuresNormales,
    heuresSupplementaires,
    heuresNuit,
    heuresWeekend,
    absencesNonJustifiees,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
