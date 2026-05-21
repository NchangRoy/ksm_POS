# UserAccountResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**tenantId** | **string** |  | [optional] [default to undefined]
**actorId** | **string** |  | [optional] [default to undefined]
**username** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**phoneNumber** | **string** |  | [optional] [default to undefined]
**authProvider** | **string** |  | [optional] [default to undefined]
**externalSubject** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**plan** | **string** |  | [optional] [default to undefined]
**onboardingStatus** | **string** |  | [optional] [default to undefined]
**onboardingStep** | **number** |  | [optional] [default to undefined]
**accountType** | **string** |  | [optional] [default to undefined]
**businessType** | **string** |  | [optional] [default to undefined]
**onboardingPayload** | **string** |  | [optional] [default to undefined]
**emailVerified** | **boolean** |  | [optional] [default to undefined]
**emailVerifiedAt** | **string** |  | [optional] [default to undefined]
**phoneVerified** | **boolean** |  | [optional] [default to undefined]
**phoneVerifiedAt** | **string** |  | [optional] [default to undefined]
**mfaEnabled** | **boolean** |  | [optional] [default to undefined]
**mfaChannel** | **string** |  | [optional] [default to undefined]
**organizations** | [**Array&lt;UserOrganizationAccessResponse&gt;**](UserOrganizationAccessResponse.md) |  | [optional] [default to undefined]

## Example

```typescript
import { UserAccountResponse } from './api';

const instance: UserAccountResponse = {
    id,
    tenantId,
    actorId,
    username,
    email,
    phoneNumber,
    authProvider,
    externalSubject,
    status,
    plan,
    onboardingStatus,
    onboardingStep,
    accountType,
    businessType,
    onboardingPayload,
    emailVerified,
    emailVerifiedAt,
    phoneVerified,
    phoneVerifiedAt,
    mfaEnabled,
    mfaChannel,
    organizations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
