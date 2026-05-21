# AuthControllerApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**confirmEmailVerification**](#confirmemailverification) | **POST** /api/auth/email-verification/confirm | |
|[**confirmLoginMfa**](#confirmloginmfa) | **POST** /api/auth/login/mfa/confirm | |
|[**confirmMfa**](#confirmmfa) | **POST** /api/auth/mfa/confirm | |
|[**confirmPhoneVerification**](#confirmphoneverification) | **POST** /api/auth/phone-verification/confirm | |
|[**disableMfa**](#disablemfa) | **POST** /api/auth/mfa/disable | |
|[**discoverContexts**](#discovercontexts) | **POST** /api/auth/discover-contexts | |
|[**discoverSignUpContexts**](#discoversignupcontexts) | **POST** /api/auth/discover-sign-up-contexts | |
|[**enableMfa**](#enablemfa) | **POST** /api/auth/mfa/enable | |
|[**forgotPassword**](#forgotpassword) | **POST** /api/auth/forgot-password | |
|[**identify**](#identify) | **POST** /api/auth/identify | |
|[**issueCaptcha**](#issuecaptcha) | **POST** /api/auth/captcha | |
|[**issueOtp**](#issueotp) | **POST** /api/auth/otp | |
|[**issuePasswordReset**](#issuepasswordreset) | **POST** /api/auth/password-reset/issue | |
|[**login**](#login) | **POST** /api/auth/login | |
|[**register6**](#register6) | **POST** /api/auth/register | |
|[**requestEmailVerification**](#requestemailverification) | **POST** /api/auth/email-verification/request | |
|[**requestPhoneVerification**](#requestphoneverification) | **POST** /api/auth/phone-verification/request | |
|[**resetPassword**](#resetpassword) | **POST** /api/auth/reset-password | |
|[**selectContext**](#selectcontext) | **POST** /api/auth/select-context | |
|[**signUp**](#signup) | **POST** /api/auth/sign-up | |
|[**verifyCaptcha**](#verifycaptcha) | **POST** /api/auth/captcha/verify | |
|[**verifyOtp**](#verifyotp) | **POST** /api/auth/otp/verify | |

# **confirmEmailVerification**
> ApiResponseUserAccountResponse confirmEmailVerification(confirmEmailVerificationRequest)


### Example

```typescript
import {
    AuthControllerApi,
    Configuration,
    ConfirmEmailVerificationRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthControllerApi(configuration);

let confirmEmailVerificationRequest: ConfirmEmailVerificationRequest; //

const { status, data } = await apiInstance.confirmEmailVerification(
    confirmEmailVerificationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **confirmEmailVerificationRequest** | **ConfirmEmailVerificationRequest**|  | |


### Return type

**ApiResponseUserAccountResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **confirmLoginMfa**
> ApiResponseLoginResponse confirmLoginMfa(confirmMfaLoginRequest)


### Example

```typescript
import {
    AuthControllerApi,
    Configuration,
    ConfirmMfaLoginRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthControllerApi(configuration);

let confirmMfaLoginRequest: ConfirmMfaLoginRequest; //

const { status, data } = await apiInstance.confirmLoginMfa(
    confirmMfaLoginRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **confirmMfaLoginRequest** | **ConfirmMfaLoginRequest**|  | |


### Return type

**ApiResponseLoginResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **confirmMfa**
> ApiResponseUserAccountResponse confirmMfa(confirmMfaRequest)


### Example

```typescript
import {
    AuthControllerApi,
    Configuration,
    ConfirmMfaRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthControllerApi(configuration);

let confirmMfaRequest: ConfirmMfaRequest; //

const { status, data } = await apiInstance.confirmMfa(
    confirmMfaRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **confirmMfaRequest** | **ConfirmMfaRequest**|  | |


### Return type

**ApiResponseUserAccountResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **confirmPhoneVerification**
> ApiResponseUserAccountResponse confirmPhoneVerification(confirmMfaRequest)


### Example

```typescript
import {
    AuthControllerApi,
    Configuration,
    ConfirmMfaRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthControllerApi(configuration);

let confirmMfaRequest: ConfirmMfaRequest; //

const { status, data } = await apiInstance.confirmPhoneVerification(
    confirmMfaRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **confirmMfaRequest** | **ConfirmMfaRequest**|  | |


### Return type

**ApiResponseUserAccountResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disableMfa**
> ApiResponseUserAccountResponse disableMfa()


### Example

```typescript
import {
    AuthControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthControllerApi(configuration);

const { status, data } = await apiInstance.disableMfa();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseUserAccountResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **discoverContexts**
> ApiResponseDiscoverLoginContextsResponse discoverContexts(loginRequest)


### Example

```typescript
import {
    AuthControllerApi,
    Configuration,
    LoginRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthControllerApi(configuration);

let loginRequest: LoginRequest; //

const { status, data } = await apiInstance.discoverContexts(
    loginRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loginRequest** | **LoginRequest**|  | |


### Return type

**ApiResponseDiscoverLoginContextsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **discoverSignUpContexts**
> ApiResponseDiscoverSignUpContextsResponse discoverSignUpContexts(discoverSignUpContextsRequest)


### Example

```typescript
import {
    AuthControllerApi,
    Configuration,
    DiscoverSignUpContextsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthControllerApi(configuration);

let discoverSignUpContextsRequest: DiscoverSignUpContextsRequest; //

const { status, data } = await apiInstance.discoverSignUpContexts(
    discoverSignUpContextsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **discoverSignUpContextsRequest** | **DiscoverSignUpContextsRequest**|  | |


### Return type

**ApiResponseDiscoverSignUpContextsResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enableMfa**
> ApiResponseOtpChallengeResponse enableMfa(enableMfaRequest)


### Example

```typescript
import {
    AuthControllerApi,
    Configuration,
    EnableMfaRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthControllerApi(configuration);

let enableMfaRequest: EnableMfaRequest; //

const { status, data } = await apiInstance.enableMfa(
    enableMfaRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **enableMfaRequest** | **EnableMfaRequest**|  | |


### Return type

**ApiResponseOtpChallengeResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **forgotPassword**
> ApiResponseForgotPasswordResponse forgotPassword(forgotPasswordRequest)


### Example

```typescript
import {
    AuthControllerApi,
    Configuration,
    ForgotPasswordRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthControllerApi(configuration);

let forgotPasswordRequest: ForgotPasswordRequest; //

const { status, data } = await apiInstance.forgotPassword(
    forgotPasswordRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **forgotPasswordRequest** | **ForgotPasswordRequest**|  | |


### Return type

**ApiResponseForgotPasswordResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **identify**
> ApiResponseIdentifyAccountResponse identify(identifyAccountRequest)


### Example

```typescript
import {
    AuthControllerApi,
    Configuration,
    IdentifyAccountRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthControllerApi(configuration);

let identifyAccountRequest: IdentifyAccountRequest; //

const { status, data } = await apiInstance.identify(
    identifyAccountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **identifyAccountRequest** | **IdentifyAccountRequest**|  | |


### Return type

**ApiResponseIdentifyAccountResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **issueCaptcha**
> ApiResponseCaptchaChallengeResponse issueCaptcha()


### Example

```typescript
import {
    AuthControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthControllerApi(configuration);

const { status, data } = await apiInstance.issueCaptcha();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseCaptchaChallengeResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **issueOtp**
> ApiResponseOtpChallengeResponse issueOtp(issueOtpRequest)


### Example

```typescript
import {
    AuthControllerApi,
    Configuration,
    IssueOtpRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthControllerApi(configuration);

let issueOtpRequest: IssueOtpRequest; //

const { status, data } = await apiInstance.issueOtp(
    issueOtpRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **issueOtpRequest** | **IssueOtpRequest**|  | |


### Return type

**ApiResponseOtpChallengeResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **issuePasswordReset**
> ApiResponseIssuedAuthChallengeResponse issuePasswordReset(issuePasswordResetRequest)


### Example

```typescript
import {
    AuthControllerApi,
    Configuration,
    IssuePasswordResetRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthControllerApi(configuration);

let issuePasswordResetRequest: IssuePasswordResetRequest; //

const { status, data } = await apiInstance.issuePasswordReset(
    issuePasswordResetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **issuePasswordResetRequest** | **IssuePasswordResetRequest**|  | |


### Return type

**ApiResponseIssuedAuthChallengeResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **login**
> ApiResponseObject login(loginRequest)


### Example

```typescript
import {
    AuthControllerApi,
    Configuration,
    LoginRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthControllerApi(configuration);

let loginRequest: LoginRequest; //

const { status, data } = await apiInstance.login(
    loginRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loginRequest** | **LoginRequest**|  | |


### Return type

**ApiResponseObject**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **register6**
> ApiResponseUserAccountResponse register6(registerUserRequest)


### Example

```typescript
import {
    AuthControllerApi,
    Configuration,
    RegisterUserRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthControllerApi(configuration);

let registerUserRequest: RegisterUserRequest; //

const { status, data } = await apiInstance.register6(
    registerUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerUserRequest** | **RegisterUserRequest**|  | |


### Return type

**ApiResponseUserAccountResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **requestEmailVerification**
> ApiResponseIssuedAuthChallengeResponse requestEmailVerification()


### Example

```typescript
import {
    AuthControllerApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthControllerApi(configuration);

const { status, data } = await apiInstance.requestEmailVerification();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ApiResponseIssuedAuthChallengeResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **requestPhoneVerification**
> ApiResponseOtpChallengeResponse requestPhoneVerification(issueOtpRequest)


### Example

```typescript
import {
    AuthControllerApi,
    Configuration,
    IssueOtpRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthControllerApi(configuration);

let issueOtpRequest: IssueOtpRequest; //

const { status, data } = await apiInstance.requestPhoneVerification(
    issueOtpRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **issueOtpRequest** | **IssueOtpRequest**|  | |


### Return type

**ApiResponseOtpChallengeResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resetPassword**
> ApiResponseUserAccountResponse resetPassword(resetPasswordRequest)


### Example

```typescript
import {
    AuthControllerApi,
    Configuration,
    ResetPasswordRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthControllerApi(configuration);

let resetPasswordRequest: ResetPasswordRequest; //

const { status, data } = await apiInstance.resetPassword(
    resetPasswordRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resetPasswordRequest** | **ResetPasswordRequest**|  | |


### Return type

**ApiResponseUserAccountResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **selectContext**
> ApiResponseContextualLoginResponse selectContext(selectLoginContextRequest)


### Example

```typescript
import {
    AuthControllerApi,
    Configuration,
    SelectLoginContextRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthControllerApi(configuration);

let selectLoginContextRequest: SelectLoginContextRequest; //

const { status, data } = await apiInstance.selectContext(
    selectLoginContextRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **selectLoginContextRequest** | **SelectLoginContextRequest**|  | |


### Return type

**ApiResponseContextualLoginResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signUp**
> ApiResponseLoginResponse signUp(publicSignUpRequest)


### Example

```typescript
import {
    AuthControllerApi,
    Configuration,
    PublicSignUpRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthControllerApi(configuration);

let publicSignUpRequest: PublicSignUpRequest; //

const { status, data } = await apiInstance.signUp(
    publicSignUpRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **publicSignUpRequest** | **PublicSignUpRequest**|  | |


### Return type

**ApiResponseLoginResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verifyCaptcha**
> ApiResponseCaptchaVerificationResponse verifyCaptcha(verifyCaptchaRequest)


### Example

```typescript
import {
    AuthControllerApi,
    Configuration,
    VerifyCaptchaRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthControllerApi(configuration);

let verifyCaptchaRequest: VerifyCaptchaRequest; //

const { status, data } = await apiInstance.verifyCaptcha(
    verifyCaptchaRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **verifyCaptchaRequest** | **VerifyCaptchaRequest**|  | |


### Return type

**ApiResponseCaptchaVerificationResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verifyOtp**
> ApiResponseOtpVerificationResponse verifyOtp(verifyOtpRequest)


### Example

```typescript
import {
    AuthControllerApi,
    Configuration,
    VerifyOtpRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthControllerApi(configuration);

let verifyOtpRequest: VerifyOtpRequest; //

const { status, data } = await apiInstance.verifyOtp(
    verifyOtpRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **verifyOtpRequest** | **VerifyOtpRequest**|  | |


### Return type

**ApiResponseOtpVerificationResponse**

### Authorization

[ApiKey](../README.md#ApiKey), [ClientId](../README.md#ClientId), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

