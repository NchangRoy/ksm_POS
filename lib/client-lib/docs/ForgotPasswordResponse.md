# ForgotPasswordResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principal** | **string** |  | [optional] [default to undefined]
**matchingAccountCount** | **number** |  | [optional] [default to undefined]
**selectionToken** | **string** |  | [optional] [default to undefined]
**selectionTokenExpiresInSeconds** | **number** |  | [optional] [default to undefined]
**contexts** | [**Array&lt;PasswordResetContextResponse&gt;**](PasswordResetContextResponse.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ForgotPasswordResponse } from './api';

const instance: ForgotPasswordResponse = {
    principal,
    matchingAccountCount,
    selectionToken,
    selectionTokenExpiresInSeconds,
    contexts,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
