# UpsertOpeningHoursRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organizationId** | **string** |  | [default to undefined]
**agencyId** | **string** |  | [default to undefined]
**dayOfWeek** | **string** |  | [default to undefined]
**opensAt** | **string** |  | [optional] [default to undefined]
**closesAt** | **string** |  | [optional] [default to undefined]
**closed** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { UpsertOpeningHoursRequest } from './api';

const instance: UpsertOpeningHoursRequest = {
    organizationId,
    agencyId,
    dayOfWeek,
    opensAt,
    closesAt,
    closed,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
