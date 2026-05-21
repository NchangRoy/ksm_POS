# PublicSignUpRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenantId** | **string** |  | [optional] [default to undefined]
**signUpSelectionToken** | **string** |  | [optional] [default to undefined]
**contextId** | **string** |  | [optional] [default to undefined]
**firstName** | **string** |  | [default to undefined]
**lastName** | **string** |  | [default to undefined]
**username** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [default to undefined]
**phoneNumber** | **string** |  | [optional] [default to undefined]
**password** | **string** |  | [optional] [default to undefined]
**socialProvider** | **string** |  | [optional] [default to undefined]
**externalSubject** | **string** |  | [optional] [default to undefined]
**captchaVerificationToken** | **string** |  | [optional] [default to undefined]
**accountType** | **string** |  | [optional] [default to undefined]
**businessType** | **string** |  | [optional] [default to undefined]
**onboardingData** | **{ [key: string]: any; }** |  | [optional] [default to undefined]

## Example

```typescript
import { PublicSignUpRequest } from './api';

const instance: PublicSignUpRequest = {
    tenantId,
    signUpSelectionToken,
    contextId,
    firstName,
    lastName,
    username,
    email,
    phoneNumber,
    password,
    socialProvider,
    externalSubject,
    captchaVerificationToken,
    accountType,
    businessType,
    onboardingData,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
