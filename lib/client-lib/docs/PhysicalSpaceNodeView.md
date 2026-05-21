# PhysicalSpaceNodeView


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**parentSpaceId** | **string** |  | [optional] [default to undefined]
**code** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**spaceType** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**levelNumber** | **number** |  | [optional] [default to undefined]
**capacity** | **number** |  | [optional] [default to undefined]
**active** | **boolean** |  | [optional] [default to undefined]
**assignedResources** | **number** |  | [optional] [default to undefined]
**reservedResources** | **number** |  | [optional] [default to undefined]
**documentCount** | **number** |  | [optional] [default to undefined]
**children** | [**Array&lt;PhysicalSpaceNodeView&gt;**](PhysicalSpaceNodeView.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PhysicalSpaceNodeView } from './api';

const instance: PhysicalSpaceNodeView = {
    id,
    parentSpaceId,
    code,
    name,
    spaceType,
    description,
    levelNumber,
    capacity,
    active,
    assignedResources,
    reservedResources,
    documentCount,
    children,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
