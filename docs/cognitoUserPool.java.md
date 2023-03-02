# `cognitoUserPool` Submodule <a name="`cognitoUserPool` Submodule" id="@cdktf/provider-aws.cognitoUserPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPool <a name="CognitoUserPool" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool aws_cognito_user_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPool;

CognitoUserPool.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .accountRecoverySetting(CognitoUserPoolAccountRecoverySetting)
//  .adminCreateUserConfig(CognitoUserPoolAdminCreateUserConfig)
//  .aliasAttributes(java.util.List<java.lang.String>)
//  .autoVerifiedAttributes(java.util.List<java.lang.String>)
//  .deletionProtection(java.lang.String)
//  .deviceConfiguration(CognitoUserPoolDeviceConfiguration)
//  .emailConfiguration(CognitoUserPoolEmailConfiguration)
//  .emailVerificationMessage(java.lang.String)
//  .emailVerificationSubject(java.lang.String)
//  .id(java.lang.String)
//  .lambdaConfig(CognitoUserPoolLambdaConfig)
//  .mfaConfiguration(java.lang.String)
//  .passwordPolicy(CognitoUserPoolPasswordPolicy)
//  .schema(IResolvable)
//  .schema(java.util.List<CognitoUserPoolSchema>)
//  .smsAuthenticationMessage(java.lang.String)
//  .smsConfiguration(CognitoUserPoolSmsConfiguration)
//  .smsVerificationMessage(java.lang.String)
//  .softwareTokenMfaConfiguration(CognitoUserPoolSoftwareTokenMfaConfiguration)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .userAttributeUpdateSettings(CognitoUserPoolUserAttributeUpdateSettings)
//  .usernameAttributes(java.util.List<java.lang.String>)
//  .usernameConfiguration(CognitoUserPoolUsernameConfiguration)
//  .userPoolAddOns(CognitoUserPoolUserPoolAddOns)
//  .verificationMessageTemplate(CognitoUserPoolVerificationMessageTemplate)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.accountRecoverySetting">accountRecoverySetting</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a></code> | account_recovery_setting block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.adminCreateUserConfig">adminCreateUserConfig</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a></code> | admin_create_user_config block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.aliasAttributes">aliasAttributes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#alias_attributes CognitoUserPool#alias_attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.autoVerifiedAttributes">autoVerifiedAttributes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#auto_verified_attributes CognitoUserPool#auto_verified_attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#deletion_protection CognitoUserPool#deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.deviceConfiguration">deviceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a></code> | device_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.emailConfiguration">emailConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a></code> | email_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.emailVerificationMessage">emailVerificationMessage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_verification_message CognitoUserPool#email_verification_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.emailVerificationSubject">emailVerificationSubject</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_verification_subject CognitoUserPool#email_verification_subject}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#id CognitoUserPool#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.lambdaConfig">lambdaConfig</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a></code> | lambda_config block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.mfaConfiguration">mfaConfiguration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#mfa_configuration CognitoUserPool#mfa_configuration}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.passwordPolicy">passwordPolicy</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a></code> | password_policy block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.schema">schema</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema">CognitoUserPoolSchema</a>></code> | schema block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.smsAuthenticationMessage">smsAuthenticationMessage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_authentication_message CognitoUserPool#sms_authentication_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.smsConfiguration">smsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a></code> | sms_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.smsVerificationMessage">smsVerificationMessage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_verification_message CognitoUserPool#sms_verification_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.softwareTokenMfaConfiguration">softwareTokenMfaConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a></code> | software_token_mfa_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#tags CognitoUserPool#tags}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#tags_all CognitoUserPool#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.userAttributeUpdateSettings">userAttributeUpdateSettings</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a></code> | user_attribute_update_settings block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.usernameAttributes">usernameAttributes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#username_attributes CognitoUserPool#username_attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.usernameConfiguration">usernameConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a></code> | username_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.userPoolAddOns">userPoolAddOns</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a></code> | user_pool_add_ons block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.verificationMessageTemplate">verificationMessageTemplate</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a></code> | verification_message_template block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}.

---

##### `accountRecoverySetting`<sup>Optional</sup> <a name="accountRecoverySetting" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.accountRecoverySetting"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a>

account_recovery_setting block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#account_recovery_setting CognitoUserPool#account_recovery_setting}

---

##### `adminCreateUserConfig`<sup>Optional</sup> <a name="adminCreateUserConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.adminCreateUserConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a>

admin_create_user_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#admin_create_user_config CognitoUserPool#admin_create_user_config}

---

##### `aliasAttributes`<sup>Optional</sup> <a name="aliasAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.aliasAttributes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#alias_attributes CognitoUserPool#alias_attributes}.

---

##### `autoVerifiedAttributes`<sup>Optional</sup> <a name="autoVerifiedAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.autoVerifiedAttributes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#auto_verified_attributes CognitoUserPool#auto_verified_attributes}.

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#deletion_protection CognitoUserPool#deletion_protection}.

---

##### `deviceConfiguration`<sup>Optional</sup> <a name="deviceConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.deviceConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a>

device_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#device_configuration CognitoUserPool#device_configuration}

---

##### `emailConfiguration`<sup>Optional</sup> <a name="emailConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.emailConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a>

email_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_configuration CognitoUserPool#email_configuration}

---

##### `emailVerificationMessage`<sup>Optional</sup> <a name="emailVerificationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.emailVerificationMessage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_verification_message CognitoUserPool#email_verification_message}.

---

##### `emailVerificationSubject`<sup>Optional</sup> <a name="emailVerificationSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.emailVerificationSubject"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_verification_subject CognitoUserPool#email_verification_subject}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#id CognitoUserPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lambdaConfig`<sup>Optional</sup> <a name="lambdaConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.lambdaConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a>

lambda_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_config CognitoUserPool#lambda_config}

---

##### `mfaConfiguration`<sup>Optional</sup> <a name="mfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.mfaConfiguration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#mfa_configuration CognitoUserPool#mfa_configuration}.

---

##### `passwordPolicy`<sup>Optional</sup> <a name="passwordPolicy" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.passwordPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a>

password_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#password_policy CognitoUserPool#password_policy}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.schema"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema">CognitoUserPoolSchema</a>>

schema block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#schema CognitoUserPool#schema}

---

##### `smsAuthenticationMessage`<sup>Optional</sup> <a name="smsAuthenticationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.smsAuthenticationMessage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_authentication_message CognitoUserPool#sms_authentication_message}.

---

##### `smsConfiguration`<sup>Optional</sup> <a name="smsConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.smsConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a>

sms_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_configuration CognitoUserPool#sms_configuration}

---

##### `smsVerificationMessage`<sup>Optional</sup> <a name="smsVerificationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.smsVerificationMessage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_verification_message CognitoUserPool#sms_verification_message}.

---

##### `softwareTokenMfaConfiguration`<sup>Optional</sup> <a name="softwareTokenMfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.softwareTokenMfaConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a>

software_token_mfa_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#software_token_mfa_configuration CognitoUserPool#software_token_mfa_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#tags CognitoUserPool#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#tags_all CognitoUserPool#tags_all}.

---

##### `userAttributeUpdateSettings`<sup>Optional</sup> <a name="userAttributeUpdateSettings" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.userAttributeUpdateSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a>

user_attribute_update_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#user_attribute_update_settings CognitoUserPool#user_attribute_update_settings}

---

##### `usernameAttributes`<sup>Optional</sup> <a name="usernameAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.usernameAttributes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#username_attributes CognitoUserPool#username_attributes}.

---

##### `usernameConfiguration`<sup>Optional</sup> <a name="usernameConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.usernameConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a>

username_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#username_configuration CognitoUserPool#username_configuration}

---

##### `userPoolAddOns`<sup>Optional</sup> <a name="userPoolAddOns" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.userPoolAddOns"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a>

user_pool_add_ons block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#user_pool_add_ons CognitoUserPool#user_pool_add_ons}

---

##### `verificationMessageTemplate`<sup>Optional</sup> <a name="verificationMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.verificationMessageTemplate"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a>

verification_message_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#verification_message_template CognitoUserPool#verification_message_template}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putAccountRecoverySetting">putAccountRecoverySetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putAdminCreateUserConfig">putAdminCreateUserConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putDeviceConfiguration">putDeviceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putEmailConfiguration">putEmailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putLambdaConfig">putLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putPasswordPolicy">putPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSchema">putSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSmsConfiguration">putSmsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSoftwareTokenMfaConfiguration">putSoftwareTokenMfaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUserAttributeUpdateSettings">putUserAttributeUpdateSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUsernameConfiguration">putUsernameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUserPoolAddOns">putUserPoolAddOns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putVerificationMessageTemplate">putVerificationMessageTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetAccountRecoverySetting">resetAccountRecoverySetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetAdminCreateUserConfig">resetAdminCreateUserConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetAliasAttributes">resetAliasAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetAutoVerifiedAttributes">resetAutoVerifiedAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetDeviceConfiguration">resetDeviceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetEmailConfiguration">resetEmailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetEmailVerificationMessage">resetEmailVerificationMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetEmailVerificationSubject">resetEmailVerificationSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetLambdaConfig">resetLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetMfaConfiguration">resetMfaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetPasswordPolicy">resetPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSchema">resetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSmsAuthenticationMessage">resetSmsAuthenticationMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSmsConfiguration">resetSmsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSmsVerificationMessage">resetSmsVerificationMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSoftwareTokenMfaConfiguration">resetSoftwareTokenMfaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetUserAttributeUpdateSettings">resetUserAttributeUpdateSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetUsernameAttributes">resetUsernameAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetUsernameConfiguration">resetUsernameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetUserPoolAddOns">resetUserPoolAddOns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetVerificationMessageTemplate">resetVerificationMessageTemplate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAccountRecoverySetting` <a name="putAccountRecoverySetting" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putAccountRecoverySetting"></a>

```java
public void putAccountRecoverySetting(CognitoUserPoolAccountRecoverySetting value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putAccountRecoverySetting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a>

---

##### `putAdminCreateUserConfig` <a name="putAdminCreateUserConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putAdminCreateUserConfig"></a>

```java
public void putAdminCreateUserConfig(CognitoUserPoolAdminCreateUserConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putAdminCreateUserConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a>

---

##### `putDeviceConfiguration` <a name="putDeviceConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putDeviceConfiguration"></a>

```java
public void putDeviceConfiguration(CognitoUserPoolDeviceConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putDeviceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a>

---

##### `putEmailConfiguration` <a name="putEmailConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putEmailConfiguration"></a>

```java
public void putEmailConfiguration(CognitoUserPoolEmailConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putEmailConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a>

---

##### `putLambdaConfig` <a name="putLambdaConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putLambdaConfig"></a>

```java
public void putLambdaConfig(CognitoUserPoolLambdaConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putLambdaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a>

---

##### `putPasswordPolicy` <a name="putPasswordPolicy" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putPasswordPolicy"></a>

```java
public void putPasswordPolicy(CognitoUserPoolPasswordPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putPasswordPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a>

---

##### `putSchema` <a name="putSchema" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSchema"></a>

```java
public void putSchema(IResolvable OR java.util.List<CognitoUserPoolSchema> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSchema.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema">CognitoUserPoolSchema</a>>

---

##### `putSmsConfiguration` <a name="putSmsConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSmsConfiguration"></a>

```java
public void putSmsConfiguration(CognitoUserPoolSmsConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSmsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a>

---

##### `putSoftwareTokenMfaConfiguration` <a name="putSoftwareTokenMfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSoftwareTokenMfaConfiguration"></a>

```java
public void putSoftwareTokenMfaConfiguration(CognitoUserPoolSoftwareTokenMfaConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSoftwareTokenMfaConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a>

---

##### `putUserAttributeUpdateSettings` <a name="putUserAttributeUpdateSettings" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUserAttributeUpdateSettings"></a>

```java
public void putUserAttributeUpdateSettings(CognitoUserPoolUserAttributeUpdateSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUserAttributeUpdateSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a>

---

##### `putUsernameConfiguration` <a name="putUsernameConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUsernameConfiguration"></a>

```java
public void putUsernameConfiguration(CognitoUserPoolUsernameConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUsernameConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a>

---

##### `putUserPoolAddOns` <a name="putUserPoolAddOns" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUserPoolAddOns"></a>

```java
public void putUserPoolAddOns(CognitoUserPoolUserPoolAddOns value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUserPoolAddOns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a>

---

##### `putVerificationMessageTemplate` <a name="putVerificationMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putVerificationMessageTemplate"></a>

```java
public void putVerificationMessageTemplate(CognitoUserPoolVerificationMessageTemplate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putVerificationMessageTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a>

---

##### `resetAccountRecoverySetting` <a name="resetAccountRecoverySetting" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetAccountRecoverySetting"></a>

```java
public void resetAccountRecoverySetting()
```

##### `resetAdminCreateUserConfig` <a name="resetAdminCreateUserConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetAdminCreateUserConfig"></a>

```java
public void resetAdminCreateUserConfig()
```

##### `resetAliasAttributes` <a name="resetAliasAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetAliasAttributes"></a>

```java
public void resetAliasAttributes()
```

##### `resetAutoVerifiedAttributes` <a name="resetAutoVerifiedAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetAutoVerifiedAttributes"></a>

```java
public void resetAutoVerifiedAttributes()
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetDeviceConfiguration` <a name="resetDeviceConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetDeviceConfiguration"></a>

```java
public void resetDeviceConfiguration()
```

##### `resetEmailConfiguration` <a name="resetEmailConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetEmailConfiguration"></a>

```java
public void resetEmailConfiguration()
```

##### `resetEmailVerificationMessage` <a name="resetEmailVerificationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetEmailVerificationMessage"></a>

```java
public void resetEmailVerificationMessage()
```

##### `resetEmailVerificationSubject` <a name="resetEmailVerificationSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetEmailVerificationSubject"></a>

```java
public void resetEmailVerificationSubject()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetId"></a>

```java
public void resetId()
```

##### `resetLambdaConfig` <a name="resetLambdaConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetLambdaConfig"></a>

```java
public void resetLambdaConfig()
```

##### `resetMfaConfiguration` <a name="resetMfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetMfaConfiguration"></a>

```java
public void resetMfaConfiguration()
```

##### `resetPasswordPolicy` <a name="resetPasswordPolicy" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetPasswordPolicy"></a>

```java
public void resetPasswordPolicy()
```

##### `resetSchema` <a name="resetSchema" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSchema"></a>

```java
public void resetSchema()
```

##### `resetSmsAuthenticationMessage` <a name="resetSmsAuthenticationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSmsAuthenticationMessage"></a>

```java
public void resetSmsAuthenticationMessage()
```

##### `resetSmsConfiguration` <a name="resetSmsConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSmsConfiguration"></a>

```java
public void resetSmsConfiguration()
```

##### `resetSmsVerificationMessage` <a name="resetSmsVerificationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSmsVerificationMessage"></a>

```java
public void resetSmsVerificationMessage()
```

##### `resetSoftwareTokenMfaConfiguration` <a name="resetSoftwareTokenMfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSoftwareTokenMfaConfiguration"></a>

```java
public void resetSoftwareTokenMfaConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetUserAttributeUpdateSettings` <a name="resetUserAttributeUpdateSettings" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetUserAttributeUpdateSettings"></a>

```java
public void resetUserAttributeUpdateSettings()
```

##### `resetUsernameAttributes` <a name="resetUsernameAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetUsernameAttributes"></a>

```java
public void resetUsernameAttributes()
```

##### `resetUsernameConfiguration` <a name="resetUsernameConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetUsernameConfiguration"></a>

```java
public void resetUsernameConfiguration()
```

##### `resetUserPoolAddOns` <a name="resetUserPoolAddOns" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetUserPoolAddOns"></a>

```java
public void resetUserPoolAddOns()
```

##### `resetVerificationMessageTemplate` <a name="resetVerificationMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetVerificationMessageTemplate"></a>

```java
public void resetVerificationMessageTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPool;

CognitoUserPool.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPool;

CognitoUserPool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPool;

CognitoUserPool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.accountRecoverySetting">accountRecoverySetting</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference">CognitoUserPoolAccountRecoverySettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.adminCreateUserConfig">adminCreateUserConfig</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference">CognitoUserPoolAdminCreateUserConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.creationDate">creationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.customDomain">customDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deviceConfiguration">deviceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference">CognitoUserPoolDeviceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailConfiguration">emailConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference">CognitoUserPoolEmailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.estimatedNumberOfUsers">estimatedNumberOfUsers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lambdaConfig">lambdaConfig</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference">CognitoUserPoolLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lastModifiedDate">lastModifiedDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.passwordPolicy">passwordPolicy</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference">CognitoUserPoolPasswordPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.schema">schema</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList">CognitoUserPoolSchemaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsConfiguration">smsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference">CognitoUserPoolSmsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.softwareTokenMfaConfiguration">softwareTokenMfaConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference">CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userAttributeUpdateSettings">userAttributeUpdateSettings</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference">CognitoUserPoolUserAttributeUpdateSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameConfiguration">usernameConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference">CognitoUserPoolUsernameConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userPoolAddOns">userPoolAddOns</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference">CognitoUserPoolUserPoolAddOnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.verificationMessageTemplate">verificationMessageTemplate</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference">CognitoUserPoolVerificationMessageTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.accountRecoverySettingInput">accountRecoverySettingInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.adminCreateUserConfigInput">adminCreateUserConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.aliasAttributesInput">aliasAttributesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.autoVerifiedAttributesInput">autoVerifiedAttributesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deviceConfigurationInput">deviceConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailConfigurationInput">emailConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationMessageInput">emailVerificationMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationSubjectInput">emailVerificationSubjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lambdaConfigInput">lambdaConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.mfaConfigurationInput">mfaConfigurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.passwordPolicyInput">passwordPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.schemaInput">schemaInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema">CognitoUserPoolSchema</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsAuthenticationMessageInput">smsAuthenticationMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsConfigurationInput">smsConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsVerificationMessageInput">smsVerificationMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.softwareTokenMfaConfigurationInput">softwareTokenMfaConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userAttributeUpdateSettingsInput">userAttributeUpdateSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameAttributesInput">usernameAttributesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameConfigurationInput">usernameConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userPoolAddOnsInput">userPoolAddOnsInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.verificationMessageTemplateInput">verificationMessageTemplateInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.aliasAttributes">aliasAttributes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.autoVerifiedAttributes">autoVerifiedAttributes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationMessage">emailVerificationMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationSubject">emailVerificationSubject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.mfaConfiguration">mfaConfiguration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsAuthenticationMessage">smsAuthenticationMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsVerificationMessage">smsVerificationMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameAttributes">usernameAttributes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountRecoverySetting`<sup>Required</sup> <a name="accountRecoverySetting" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.accountRecoverySetting"></a>

```java
public CognitoUserPoolAccountRecoverySettingOutputReference getAccountRecoverySetting();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference">CognitoUserPoolAccountRecoverySettingOutputReference</a>

---

##### `adminCreateUserConfig`<sup>Required</sup> <a name="adminCreateUserConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.adminCreateUserConfig"></a>

```java
public CognitoUserPoolAdminCreateUserConfigOutputReference getAdminCreateUserConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference">CognitoUserPoolAdminCreateUserConfigOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.creationDate"></a>

```java
public java.lang.String getCreationDate();
```

- *Type:* java.lang.String

---

##### `customDomain`<sup>Required</sup> <a name="customDomain" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.customDomain"></a>

```java
public java.lang.String getCustomDomain();
```

- *Type:* java.lang.String

---

##### `deviceConfiguration`<sup>Required</sup> <a name="deviceConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deviceConfiguration"></a>

```java
public CognitoUserPoolDeviceConfigurationOutputReference getDeviceConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference">CognitoUserPoolDeviceConfigurationOutputReference</a>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `emailConfiguration`<sup>Required</sup> <a name="emailConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailConfiguration"></a>

```java
public CognitoUserPoolEmailConfigurationOutputReference getEmailConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference">CognitoUserPoolEmailConfigurationOutputReference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `estimatedNumberOfUsers`<sup>Required</sup> <a name="estimatedNumberOfUsers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.estimatedNumberOfUsers"></a>

```java
public java.lang.Number getEstimatedNumberOfUsers();
```

- *Type:* java.lang.Number

---

##### `lambdaConfig`<sup>Required</sup> <a name="lambdaConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lambdaConfig"></a>

```java
public CognitoUserPoolLambdaConfigOutputReference getLambdaConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference">CognitoUserPoolLambdaConfigOutputReference</a>

---

##### `lastModifiedDate`<sup>Required</sup> <a name="lastModifiedDate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lastModifiedDate"></a>

```java
public java.lang.String getLastModifiedDate();
```

- *Type:* java.lang.String

---

##### `passwordPolicy`<sup>Required</sup> <a name="passwordPolicy" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.passwordPolicy"></a>

```java
public CognitoUserPoolPasswordPolicyOutputReference getPasswordPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference">CognitoUserPoolPasswordPolicyOutputReference</a>

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.schema"></a>

```java
public CognitoUserPoolSchemaList getSchema();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList">CognitoUserPoolSchemaList</a>

---

##### `smsConfiguration`<sup>Required</sup> <a name="smsConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsConfiguration"></a>

```java
public CognitoUserPoolSmsConfigurationOutputReference getSmsConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference">CognitoUserPoolSmsConfigurationOutputReference</a>

---

##### `softwareTokenMfaConfiguration`<sup>Required</sup> <a name="softwareTokenMfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.softwareTokenMfaConfiguration"></a>

```java
public CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference getSoftwareTokenMfaConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference">CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference</a>

---

##### `userAttributeUpdateSettings`<sup>Required</sup> <a name="userAttributeUpdateSettings" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userAttributeUpdateSettings"></a>

```java
public CognitoUserPoolUserAttributeUpdateSettingsOutputReference getUserAttributeUpdateSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference">CognitoUserPoolUserAttributeUpdateSettingsOutputReference</a>

---

##### `usernameConfiguration`<sup>Required</sup> <a name="usernameConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameConfiguration"></a>

```java
public CognitoUserPoolUsernameConfigurationOutputReference getUsernameConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference">CognitoUserPoolUsernameConfigurationOutputReference</a>

---

##### `userPoolAddOns`<sup>Required</sup> <a name="userPoolAddOns" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userPoolAddOns"></a>

```java
public CognitoUserPoolUserPoolAddOnsOutputReference getUserPoolAddOns();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference">CognitoUserPoolUserPoolAddOnsOutputReference</a>

---

##### `verificationMessageTemplate`<sup>Required</sup> <a name="verificationMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.verificationMessageTemplate"></a>

```java
public CognitoUserPoolVerificationMessageTemplateOutputReference getVerificationMessageTemplate();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference">CognitoUserPoolVerificationMessageTemplateOutputReference</a>

---

##### `accountRecoverySettingInput`<sup>Optional</sup> <a name="accountRecoverySettingInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.accountRecoverySettingInput"></a>

```java
public CognitoUserPoolAccountRecoverySetting getAccountRecoverySettingInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a>

---

##### `adminCreateUserConfigInput`<sup>Optional</sup> <a name="adminCreateUserConfigInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.adminCreateUserConfigInput"></a>

```java
public CognitoUserPoolAdminCreateUserConfig getAdminCreateUserConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a>

---

##### `aliasAttributesInput`<sup>Optional</sup> <a name="aliasAttributesInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.aliasAttributesInput"></a>

```java
public java.util.List<java.lang.String> getAliasAttributesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autoVerifiedAttributesInput`<sup>Optional</sup> <a name="autoVerifiedAttributesInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.autoVerifiedAttributesInput"></a>

```java
public java.util.List<java.lang.String> getAutoVerifiedAttributesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deletionProtectionInput"></a>

```java
public java.lang.String getDeletionProtectionInput();
```

- *Type:* java.lang.String

---

##### `deviceConfigurationInput`<sup>Optional</sup> <a name="deviceConfigurationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deviceConfigurationInput"></a>

```java
public CognitoUserPoolDeviceConfiguration getDeviceConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a>

---

##### `emailConfigurationInput`<sup>Optional</sup> <a name="emailConfigurationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailConfigurationInput"></a>

```java
public CognitoUserPoolEmailConfiguration getEmailConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a>

---

##### `emailVerificationMessageInput`<sup>Optional</sup> <a name="emailVerificationMessageInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationMessageInput"></a>

```java
public java.lang.String getEmailVerificationMessageInput();
```

- *Type:* java.lang.String

---

##### `emailVerificationSubjectInput`<sup>Optional</sup> <a name="emailVerificationSubjectInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationSubjectInput"></a>

```java
public java.lang.String getEmailVerificationSubjectInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `lambdaConfigInput`<sup>Optional</sup> <a name="lambdaConfigInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lambdaConfigInput"></a>

```java
public CognitoUserPoolLambdaConfig getLambdaConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a>

---

##### `mfaConfigurationInput`<sup>Optional</sup> <a name="mfaConfigurationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.mfaConfigurationInput"></a>

```java
public java.lang.String getMfaConfigurationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `passwordPolicyInput`<sup>Optional</sup> <a name="passwordPolicyInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.passwordPolicyInput"></a>

```java
public CognitoUserPoolPasswordPolicy getPasswordPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a>

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.schemaInput"></a>

```java
public java.lang.Object getSchemaInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema">CognitoUserPoolSchema</a>>

---

##### `smsAuthenticationMessageInput`<sup>Optional</sup> <a name="smsAuthenticationMessageInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsAuthenticationMessageInput"></a>

```java
public java.lang.String getSmsAuthenticationMessageInput();
```

- *Type:* java.lang.String

---

##### `smsConfigurationInput`<sup>Optional</sup> <a name="smsConfigurationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsConfigurationInput"></a>

```java
public CognitoUserPoolSmsConfiguration getSmsConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a>

---

##### `smsVerificationMessageInput`<sup>Optional</sup> <a name="smsVerificationMessageInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsVerificationMessageInput"></a>

```java
public java.lang.String getSmsVerificationMessageInput();
```

- *Type:* java.lang.String

---

##### `softwareTokenMfaConfigurationInput`<sup>Optional</sup> <a name="softwareTokenMfaConfigurationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.softwareTokenMfaConfigurationInput"></a>

```java
public CognitoUserPoolSoftwareTokenMfaConfiguration getSoftwareTokenMfaConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `userAttributeUpdateSettingsInput`<sup>Optional</sup> <a name="userAttributeUpdateSettingsInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userAttributeUpdateSettingsInput"></a>

```java
public CognitoUserPoolUserAttributeUpdateSettings getUserAttributeUpdateSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a>

---

##### `usernameAttributesInput`<sup>Optional</sup> <a name="usernameAttributesInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameAttributesInput"></a>

```java
public java.util.List<java.lang.String> getUsernameAttributesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `usernameConfigurationInput`<sup>Optional</sup> <a name="usernameConfigurationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameConfigurationInput"></a>

```java
public CognitoUserPoolUsernameConfiguration getUsernameConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a>

---

##### `userPoolAddOnsInput`<sup>Optional</sup> <a name="userPoolAddOnsInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userPoolAddOnsInput"></a>

```java
public CognitoUserPoolUserPoolAddOns getUserPoolAddOnsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a>

---

##### `verificationMessageTemplateInput`<sup>Optional</sup> <a name="verificationMessageTemplateInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.verificationMessageTemplateInput"></a>

```java
public CognitoUserPoolVerificationMessageTemplate getVerificationMessageTemplateInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a>

---

##### `aliasAttributes`<sup>Required</sup> <a name="aliasAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.aliasAttributes"></a>

```java
public java.util.List<java.lang.String> getAliasAttributes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autoVerifiedAttributes`<sup>Required</sup> <a name="autoVerifiedAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.autoVerifiedAttributes"></a>

```java
public java.util.List<java.lang.String> getAutoVerifiedAttributes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deletionProtection"></a>

```java
public java.lang.String getDeletionProtection();
```

- *Type:* java.lang.String

---

##### `emailVerificationMessage`<sup>Required</sup> <a name="emailVerificationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationMessage"></a>

```java
public java.lang.String getEmailVerificationMessage();
```

- *Type:* java.lang.String

---

##### `emailVerificationSubject`<sup>Required</sup> <a name="emailVerificationSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationSubject"></a>

```java
public java.lang.String getEmailVerificationSubject();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mfaConfiguration`<sup>Required</sup> <a name="mfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.mfaConfiguration"></a>

```java
public java.lang.String getMfaConfiguration();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `smsAuthenticationMessage`<sup>Required</sup> <a name="smsAuthenticationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsAuthenticationMessage"></a>

```java
public java.lang.String getSmsAuthenticationMessage();
```

- *Type:* java.lang.String

---

##### `smsVerificationMessage`<sup>Required</sup> <a name="smsVerificationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsVerificationMessage"></a>

```java
public java.lang.String getSmsVerificationMessage();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `usernameAttributes`<sup>Required</sup> <a name="usernameAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameAttributes"></a>

```java
public java.util.List<java.lang.String> getUsernameAttributes();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolAccountRecoverySetting <a name="CognitoUserPoolAccountRecoverySetting" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolAccountRecoverySetting;

CognitoUserPoolAccountRecoverySetting.builder()
    .recoveryMechanism(IResolvable)
    .recoveryMechanism(java.util.List<CognitoUserPoolAccountRecoverySettingRecoveryMechanism>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting.property.recoveryMechanism">recoveryMechanism</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism">CognitoUserPoolAccountRecoverySettingRecoveryMechanism</a>></code> | recovery_mechanism block. |

---

##### `recoveryMechanism`<sup>Required</sup> <a name="recoveryMechanism" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting.property.recoveryMechanism"></a>

```java
public java.lang.Object getRecoveryMechanism();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism">CognitoUserPoolAccountRecoverySettingRecoveryMechanism</a>>

recovery_mechanism block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#recovery_mechanism CognitoUserPool#recovery_mechanism}

---

### CognitoUserPoolAccountRecoverySettingRecoveryMechanism <a name="CognitoUserPoolAccountRecoverySettingRecoveryMechanism" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism;

CognitoUserPoolAccountRecoverySettingRecoveryMechanism.builder()
    .name(java.lang.String)
    .priority(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#priority CognitoUserPool#priority}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#priority CognitoUserPool#priority}.

---

### CognitoUserPoolAdminCreateUserConfig <a name="CognitoUserPoolAdminCreateUserConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolAdminCreateUserConfig;

CognitoUserPoolAdminCreateUserConfig.builder()
//  .allowAdminCreateUserOnly(java.lang.Boolean)
//  .allowAdminCreateUserOnly(IResolvable)
//  .inviteMessageTemplate(CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig.property.allowAdminCreateUserOnly">allowAdminCreateUserOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#allow_admin_create_user_only CognitoUserPool#allow_admin_create_user_only}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig.property.inviteMessageTemplate">inviteMessageTemplate</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a></code> | invite_message_template block. |

---

##### `allowAdminCreateUserOnly`<sup>Optional</sup> <a name="allowAdminCreateUserOnly" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig.property.allowAdminCreateUserOnly"></a>

```java
public java.lang.Object getAllowAdminCreateUserOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#allow_admin_create_user_only CognitoUserPool#allow_admin_create_user_only}.

---

##### `inviteMessageTemplate`<sup>Optional</sup> <a name="inviteMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig.property.inviteMessageTemplate"></a>

```java
public CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate getInviteMessageTemplate();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a>

invite_message_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#invite_message_template CognitoUserPool#invite_message_template}

---

### CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate <a name="CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate;

CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.builder()
//  .emailMessage(java.lang.String)
//  .emailSubject(java.lang.String)
//  .smsMessage(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.property.emailMessage">emailMessage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message CognitoUserPool#email_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.property.emailSubject">emailSubject</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject CognitoUserPool#email_subject}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.property.smsMessage">smsMessage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_message CognitoUserPool#sms_message}. |

---

##### `emailMessage`<sup>Optional</sup> <a name="emailMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.property.emailMessage"></a>

```java
public java.lang.String getEmailMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message CognitoUserPool#email_message}.

---

##### `emailSubject`<sup>Optional</sup> <a name="emailSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.property.emailSubject"></a>

```java
public java.lang.String getEmailSubject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject CognitoUserPool#email_subject}.

---

##### `smsMessage`<sup>Optional</sup> <a name="smsMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.property.smsMessage"></a>

```java
public java.lang.String getSmsMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_message CognitoUserPool#sms_message}.

---

### CognitoUserPoolConfig <a name="CognitoUserPoolConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolConfig;

CognitoUserPoolConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .accountRecoverySetting(CognitoUserPoolAccountRecoverySetting)
//  .adminCreateUserConfig(CognitoUserPoolAdminCreateUserConfig)
//  .aliasAttributes(java.util.List<java.lang.String>)
//  .autoVerifiedAttributes(java.util.List<java.lang.String>)
//  .deletionProtection(java.lang.String)
//  .deviceConfiguration(CognitoUserPoolDeviceConfiguration)
//  .emailConfiguration(CognitoUserPoolEmailConfiguration)
//  .emailVerificationMessage(java.lang.String)
//  .emailVerificationSubject(java.lang.String)
//  .id(java.lang.String)
//  .lambdaConfig(CognitoUserPoolLambdaConfig)
//  .mfaConfiguration(java.lang.String)
//  .passwordPolicy(CognitoUserPoolPasswordPolicy)
//  .schema(IResolvable)
//  .schema(java.util.List<CognitoUserPoolSchema>)
//  .smsAuthenticationMessage(java.lang.String)
//  .smsConfiguration(CognitoUserPoolSmsConfiguration)
//  .smsVerificationMessage(java.lang.String)
//  .softwareTokenMfaConfiguration(CognitoUserPoolSoftwareTokenMfaConfiguration)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .userAttributeUpdateSettings(CognitoUserPoolUserAttributeUpdateSettings)
//  .usernameAttributes(java.util.List<java.lang.String>)
//  .usernameConfiguration(CognitoUserPoolUsernameConfiguration)
//  .userPoolAddOns(CognitoUserPoolUserPoolAddOns)
//  .verificationMessageTemplate(CognitoUserPoolVerificationMessageTemplate)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.accountRecoverySetting">accountRecoverySetting</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a></code> | account_recovery_setting block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.adminCreateUserConfig">adminCreateUserConfig</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a></code> | admin_create_user_config block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.aliasAttributes">aliasAttributes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#alias_attributes CognitoUserPool#alias_attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.autoVerifiedAttributes">autoVerifiedAttributes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#auto_verified_attributes CognitoUserPool#auto_verified_attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#deletion_protection CognitoUserPool#deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.deviceConfiguration">deviceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a></code> | device_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.emailConfiguration">emailConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a></code> | email_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.emailVerificationMessage">emailVerificationMessage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_verification_message CognitoUserPool#email_verification_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.emailVerificationSubject">emailVerificationSubject</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_verification_subject CognitoUserPool#email_verification_subject}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#id CognitoUserPool#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.lambdaConfig">lambdaConfig</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a></code> | lambda_config block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.mfaConfiguration">mfaConfiguration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#mfa_configuration CognitoUserPool#mfa_configuration}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.passwordPolicy">passwordPolicy</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a></code> | password_policy block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.schema">schema</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema">CognitoUserPoolSchema</a>></code> | schema block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.smsAuthenticationMessage">smsAuthenticationMessage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_authentication_message CognitoUserPool#sms_authentication_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.smsConfiguration">smsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a></code> | sms_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.smsVerificationMessage">smsVerificationMessage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_verification_message CognitoUserPool#sms_verification_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.softwareTokenMfaConfiguration">softwareTokenMfaConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a></code> | software_token_mfa_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#tags CognitoUserPool#tags}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#tags_all CognitoUserPool#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.userAttributeUpdateSettings">userAttributeUpdateSettings</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a></code> | user_attribute_update_settings block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.usernameAttributes">usernameAttributes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#username_attributes CognitoUserPool#username_attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.usernameConfiguration">usernameConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a></code> | username_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.userPoolAddOns">userPoolAddOns</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a></code> | user_pool_add_ons block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.verificationMessageTemplate">verificationMessageTemplate</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a></code> | verification_message_template block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}.

---

##### `accountRecoverySetting`<sup>Optional</sup> <a name="accountRecoverySetting" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.accountRecoverySetting"></a>

```java
public CognitoUserPoolAccountRecoverySetting getAccountRecoverySetting();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a>

account_recovery_setting block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#account_recovery_setting CognitoUserPool#account_recovery_setting}

---

##### `adminCreateUserConfig`<sup>Optional</sup> <a name="adminCreateUserConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.adminCreateUserConfig"></a>

```java
public CognitoUserPoolAdminCreateUserConfig getAdminCreateUserConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a>

admin_create_user_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#admin_create_user_config CognitoUserPool#admin_create_user_config}

---

##### `aliasAttributes`<sup>Optional</sup> <a name="aliasAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.aliasAttributes"></a>

```java
public java.util.List<java.lang.String> getAliasAttributes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#alias_attributes CognitoUserPool#alias_attributes}.

---

##### `autoVerifiedAttributes`<sup>Optional</sup> <a name="autoVerifiedAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.autoVerifiedAttributes"></a>

```java
public java.util.List<java.lang.String> getAutoVerifiedAttributes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#auto_verified_attributes CognitoUserPool#auto_verified_attributes}.

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.deletionProtection"></a>

```java
public java.lang.String getDeletionProtection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#deletion_protection CognitoUserPool#deletion_protection}.

---

##### `deviceConfiguration`<sup>Optional</sup> <a name="deviceConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.deviceConfiguration"></a>

```java
public CognitoUserPoolDeviceConfiguration getDeviceConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a>

device_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#device_configuration CognitoUserPool#device_configuration}

---

##### `emailConfiguration`<sup>Optional</sup> <a name="emailConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.emailConfiguration"></a>

```java
public CognitoUserPoolEmailConfiguration getEmailConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a>

email_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_configuration CognitoUserPool#email_configuration}

---

##### `emailVerificationMessage`<sup>Optional</sup> <a name="emailVerificationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.emailVerificationMessage"></a>

```java
public java.lang.String getEmailVerificationMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_verification_message CognitoUserPool#email_verification_message}.

---

##### `emailVerificationSubject`<sup>Optional</sup> <a name="emailVerificationSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.emailVerificationSubject"></a>

```java
public java.lang.String getEmailVerificationSubject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_verification_subject CognitoUserPool#email_verification_subject}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#id CognitoUserPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lambdaConfig`<sup>Optional</sup> <a name="lambdaConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.lambdaConfig"></a>

```java
public CognitoUserPoolLambdaConfig getLambdaConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a>

lambda_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_config CognitoUserPool#lambda_config}

---

##### `mfaConfiguration`<sup>Optional</sup> <a name="mfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.mfaConfiguration"></a>

```java
public java.lang.String getMfaConfiguration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#mfa_configuration CognitoUserPool#mfa_configuration}.

---

##### `passwordPolicy`<sup>Optional</sup> <a name="passwordPolicy" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.passwordPolicy"></a>

```java
public CognitoUserPoolPasswordPolicy getPasswordPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a>

password_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#password_policy CognitoUserPool#password_policy}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.schema"></a>

```java
public java.lang.Object getSchema();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema">CognitoUserPoolSchema</a>>

schema block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#schema CognitoUserPool#schema}

---

##### `smsAuthenticationMessage`<sup>Optional</sup> <a name="smsAuthenticationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.smsAuthenticationMessage"></a>

```java
public java.lang.String getSmsAuthenticationMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_authentication_message CognitoUserPool#sms_authentication_message}.

---

##### `smsConfiguration`<sup>Optional</sup> <a name="smsConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.smsConfiguration"></a>

```java
public CognitoUserPoolSmsConfiguration getSmsConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a>

sms_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_configuration CognitoUserPool#sms_configuration}

---

##### `smsVerificationMessage`<sup>Optional</sup> <a name="smsVerificationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.smsVerificationMessage"></a>

```java
public java.lang.String getSmsVerificationMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_verification_message CognitoUserPool#sms_verification_message}.

---

##### `softwareTokenMfaConfiguration`<sup>Optional</sup> <a name="softwareTokenMfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.softwareTokenMfaConfiguration"></a>

```java
public CognitoUserPoolSoftwareTokenMfaConfiguration getSoftwareTokenMfaConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a>

software_token_mfa_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#software_token_mfa_configuration CognitoUserPool#software_token_mfa_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#tags CognitoUserPool#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#tags_all CognitoUserPool#tags_all}.

---

##### `userAttributeUpdateSettings`<sup>Optional</sup> <a name="userAttributeUpdateSettings" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.userAttributeUpdateSettings"></a>

```java
public CognitoUserPoolUserAttributeUpdateSettings getUserAttributeUpdateSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a>

user_attribute_update_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#user_attribute_update_settings CognitoUserPool#user_attribute_update_settings}

---

##### `usernameAttributes`<sup>Optional</sup> <a name="usernameAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.usernameAttributes"></a>

```java
public java.util.List<java.lang.String> getUsernameAttributes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#username_attributes CognitoUserPool#username_attributes}.

---

##### `usernameConfiguration`<sup>Optional</sup> <a name="usernameConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.usernameConfiguration"></a>

```java
public CognitoUserPoolUsernameConfiguration getUsernameConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a>

username_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#username_configuration CognitoUserPool#username_configuration}

---

##### `userPoolAddOns`<sup>Optional</sup> <a name="userPoolAddOns" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.userPoolAddOns"></a>

```java
public CognitoUserPoolUserPoolAddOns getUserPoolAddOns();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a>

user_pool_add_ons block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#user_pool_add_ons CognitoUserPool#user_pool_add_ons}

---

##### `verificationMessageTemplate`<sup>Optional</sup> <a name="verificationMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.verificationMessageTemplate"></a>

```java
public CognitoUserPoolVerificationMessageTemplate getVerificationMessageTemplate();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a>

verification_message_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#verification_message_template CognitoUserPool#verification_message_template}

---

### CognitoUserPoolDeviceConfiguration <a name="CognitoUserPoolDeviceConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolDeviceConfiguration;

CognitoUserPoolDeviceConfiguration.builder()
//  .challengeRequiredOnNewDevice(java.lang.Boolean)
//  .challengeRequiredOnNewDevice(IResolvable)
//  .deviceOnlyRememberedOnUserPrompt(java.lang.Boolean)
//  .deviceOnlyRememberedOnUserPrompt(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration.property.challengeRequiredOnNewDevice">challengeRequiredOnNewDevice</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#challenge_required_on_new_device CognitoUserPool#challenge_required_on_new_device}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration.property.deviceOnlyRememberedOnUserPrompt">deviceOnlyRememberedOnUserPrompt</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#device_only_remembered_on_user_prompt CognitoUserPool#device_only_remembered_on_user_prompt}. |

---

##### `challengeRequiredOnNewDevice`<sup>Optional</sup> <a name="challengeRequiredOnNewDevice" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration.property.challengeRequiredOnNewDevice"></a>

```java
public java.lang.Object getChallengeRequiredOnNewDevice();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#challenge_required_on_new_device CognitoUserPool#challenge_required_on_new_device}.

---

##### `deviceOnlyRememberedOnUserPrompt`<sup>Optional</sup> <a name="deviceOnlyRememberedOnUserPrompt" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration.property.deviceOnlyRememberedOnUserPrompt"></a>

```java
public java.lang.Object getDeviceOnlyRememberedOnUserPrompt();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#device_only_remembered_on_user_prompt CognitoUserPool#device_only_remembered_on_user_prompt}.

---

### CognitoUserPoolEmailConfiguration <a name="CognitoUserPoolEmailConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolEmailConfiguration;

CognitoUserPoolEmailConfiguration.builder()
//  .configurationSet(java.lang.String)
//  .emailSendingAccount(java.lang.String)
//  .fromEmailAddress(java.lang.String)
//  .replyToEmailAddress(java.lang.String)
//  .sourceArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.configurationSet">configurationSet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#configuration_set CognitoUserPool#configuration_set}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.emailSendingAccount">emailSendingAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_sending_account CognitoUserPool#email_sending_account}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.fromEmailAddress">fromEmailAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#from_email_address CognitoUserPool#from_email_address}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.replyToEmailAddress">replyToEmailAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#reply_to_email_address CognitoUserPool#reply_to_email_address}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.sourceArn">sourceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#source_arn CognitoUserPool#source_arn}. |

---

##### `configurationSet`<sup>Optional</sup> <a name="configurationSet" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.configurationSet"></a>

```java
public java.lang.String getConfigurationSet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#configuration_set CognitoUserPool#configuration_set}.

---

##### `emailSendingAccount`<sup>Optional</sup> <a name="emailSendingAccount" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.emailSendingAccount"></a>

```java
public java.lang.String getEmailSendingAccount();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_sending_account CognitoUserPool#email_sending_account}.

---

##### `fromEmailAddress`<sup>Optional</sup> <a name="fromEmailAddress" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.fromEmailAddress"></a>

```java
public java.lang.String getFromEmailAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#from_email_address CognitoUserPool#from_email_address}.

---

##### `replyToEmailAddress`<sup>Optional</sup> <a name="replyToEmailAddress" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.replyToEmailAddress"></a>

```java
public java.lang.String getReplyToEmailAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#reply_to_email_address CognitoUserPool#reply_to_email_address}.

---

##### `sourceArn`<sup>Optional</sup> <a name="sourceArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.sourceArn"></a>

```java
public java.lang.String getSourceArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#source_arn CognitoUserPool#source_arn}.

---

### CognitoUserPoolLambdaConfig <a name="CognitoUserPoolLambdaConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolLambdaConfig;

CognitoUserPoolLambdaConfig.builder()
//  .createAuthChallenge(java.lang.String)
//  .customEmailSender(CognitoUserPoolLambdaConfigCustomEmailSender)
//  .customMessage(java.lang.String)
//  .customSmsSender(CognitoUserPoolLambdaConfigCustomSmsSender)
//  .defineAuthChallenge(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .postAuthentication(java.lang.String)
//  .postConfirmation(java.lang.String)
//  .preAuthentication(java.lang.String)
//  .preSignUp(java.lang.String)
//  .preTokenGeneration(java.lang.String)
//  .userMigration(java.lang.String)
//  .verifyAuthChallengeResponse(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.createAuthChallenge">createAuthChallenge</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#create_auth_challenge CognitoUserPool#create_auth_challenge}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.customEmailSender">customEmailSender</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a></code> | custom_email_sender block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.customMessage">customMessage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#custom_message CognitoUserPool#custom_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.customSmsSender">customSmsSender</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a></code> | custom_sms_sender block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.defineAuthChallenge">defineAuthChallenge</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#define_auth_challenge CognitoUserPool#define_auth_challenge}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#kms_key_id CognitoUserPool#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.postAuthentication">postAuthentication</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#post_authentication CognitoUserPool#post_authentication}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.postConfirmation">postConfirmation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#post_confirmation CognitoUserPool#post_confirmation}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.preAuthentication">preAuthentication</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_authentication CognitoUserPool#pre_authentication}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.preSignUp">preSignUp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_sign_up CognitoUserPool#pre_sign_up}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.preTokenGeneration">preTokenGeneration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_token_generation CognitoUserPool#pre_token_generation}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.userMigration">userMigration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#user_migration CognitoUserPool#user_migration}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.verifyAuthChallengeResponse">verifyAuthChallengeResponse</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#verify_auth_challenge_response CognitoUserPool#verify_auth_challenge_response}. |

---

##### `createAuthChallenge`<sup>Optional</sup> <a name="createAuthChallenge" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.createAuthChallenge"></a>

```java
public java.lang.String getCreateAuthChallenge();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#create_auth_challenge CognitoUserPool#create_auth_challenge}.

---

##### `customEmailSender`<sup>Optional</sup> <a name="customEmailSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.customEmailSender"></a>

```java
public CognitoUserPoolLambdaConfigCustomEmailSender getCustomEmailSender();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a>

custom_email_sender block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#custom_email_sender CognitoUserPool#custom_email_sender}

---

##### `customMessage`<sup>Optional</sup> <a name="customMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.customMessage"></a>

```java
public java.lang.String getCustomMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#custom_message CognitoUserPool#custom_message}.

---

##### `customSmsSender`<sup>Optional</sup> <a name="customSmsSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.customSmsSender"></a>

```java
public CognitoUserPoolLambdaConfigCustomSmsSender getCustomSmsSender();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a>

custom_sms_sender block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#custom_sms_sender CognitoUserPool#custom_sms_sender}

---

##### `defineAuthChallenge`<sup>Optional</sup> <a name="defineAuthChallenge" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.defineAuthChallenge"></a>

```java
public java.lang.String getDefineAuthChallenge();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#define_auth_challenge CognitoUserPool#define_auth_challenge}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#kms_key_id CognitoUserPool#kms_key_id}.

---

##### `postAuthentication`<sup>Optional</sup> <a name="postAuthentication" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.postAuthentication"></a>

```java
public java.lang.String getPostAuthentication();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#post_authentication CognitoUserPool#post_authentication}.

---

##### `postConfirmation`<sup>Optional</sup> <a name="postConfirmation" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.postConfirmation"></a>

```java
public java.lang.String getPostConfirmation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#post_confirmation CognitoUserPool#post_confirmation}.

---

##### `preAuthentication`<sup>Optional</sup> <a name="preAuthentication" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.preAuthentication"></a>

```java
public java.lang.String getPreAuthentication();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_authentication CognitoUserPool#pre_authentication}.

---

##### `preSignUp`<sup>Optional</sup> <a name="preSignUp" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.preSignUp"></a>

```java
public java.lang.String getPreSignUp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_sign_up CognitoUserPool#pre_sign_up}.

---

##### `preTokenGeneration`<sup>Optional</sup> <a name="preTokenGeneration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.preTokenGeneration"></a>

```java
public java.lang.String getPreTokenGeneration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_token_generation CognitoUserPool#pre_token_generation}.

---

##### `userMigration`<sup>Optional</sup> <a name="userMigration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.userMigration"></a>

```java
public java.lang.String getUserMigration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#user_migration CognitoUserPool#user_migration}.

---

##### `verifyAuthChallengeResponse`<sup>Optional</sup> <a name="verifyAuthChallengeResponse" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.verifyAuthChallengeResponse"></a>

```java
public java.lang.String getVerifyAuthChallengeResponse();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#verify_auth_challenge_response CognitoUserPool#verify_auth_challenge_response}.

---

### CognitoUserPoolLambdaConfigCustomEmailSender <a name="CognitoUserPoolLambdaConfigCustomEmailSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolLambdaConfigCustomEmailSender;

CognitoUserPoolLambdaConfigCustomEmailSender.builder()
    .lambdaArn(java.lang.String)
    .lambdaVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender.property.lambdaArn">lambdaArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_arn CognitoUserPool#lambda_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender.property.lambdaVersion">lambdaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_version CognitoUserPool#lambda_version}. |

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender.property.lambdaArn"></a>

```java
public java.lang.String getLambdaArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_arn CognitoUserPool#lambda_arn}.

---

##### `lambdaVersion`<sup>Required</sup> <a name="lambdaVersion" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender.property.lambdaVersion"></a>

```java
public java.lang.String getLambdaVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_version CognitoUserPool#lambda_version}.

---

### CognitoUserPoolLambdaConfigCustomSmsSender <a name="CognitoUserPoolLambdaConfigCustomSmsSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolLambdaConfigCustomSmsSender;

CognitoUserPoolLambdaConfigCustomSmsSender.builder()
    .lambdaArn(java.lang.String)
    .lambdaVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender.property.lambdaArn">lambdaArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_arn CognitoUserPool#lambda_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender.property.lambdaVersion">lambdaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_version CognitoUserPool#lambda_version}. |

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender.property.lambdaArn"></a>

```java
public java.lang.String getLambdaArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_arn CognitoUserPool#lambda_arn}.

---

##### `lambdaVersion`<sup>Required</sup> <a name="lambdaVersion" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender.property.lambdaVersion"></a>

```java
public java.lang.String getLambdaVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_version CognitoUserPool#lambda_version}.

---

### CognitoUserPoolPasswordPolicy <a name="CognitoUserPoolPasswordPolicy" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolPasswordPolicy;

CognitoUserPoolPasswordPolicy.builder()
//  .minimumLength(java.lang.Number)
//  .requireLowercase(java.lang.Boolean)
//  .requireLowercase(IResolvable)
//  .requireNumbers(java.lang.Boolean)
//  .requireNumbers(IResolvable)
//  .requireSymbols(java.lang.Boolean)
//  .requireSymbols(IResolvable)
//  .requireUppercase(java.lang.Boolean)
//  .requireUppercase(IResolvable)
//  .temporaryPasswordValidityDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.minimumLength">minimumLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#minimum_length CognitoUserPool#minimum_length}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireLowercase">requireLowercase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_lowercase CognitoUserPool#require_lowercase}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireNumbers">requireNumbers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_numbers CognitoUserPool#require_numbers}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireSymbols">requireSymbols</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_symbols CognitoUserPool#require_symbols}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireUppercase">requireUppercase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_uppercase CognitoUserPool#require_uppercase}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.temporaryPasswordValidityDays">temporaryPasswordValidityDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#temporary_password_validity_days CognitoUserPool#temporary_password_validity_days}. |

---

##### `minimumLength`<sup>Optional</sup> <a name="minimumLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.minimumLength"></a>

```java
public java.lang.Number getMinimumLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#minimum_length CognitoUserPool#minimum_length}.

---

##### `requireLowercase`<sup>Optional</sup> <a name="requireLowercase" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireLowercase"></a>

```java
public java.lang.Object getRequireLowercase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_lowercase CognitoUserPool#require_lowercase}.

---

##### `requireNumbers`<sup>Optional</sup> <a name="requireNumbers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireNumbers"></a>

```java
public java.lang.Object getRequireNumbers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_numbers CognitoUserPool#require_numbers}.

---

##### `requireSymbols`<sup>Optional</sup> <a name="requireSymbols" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireSymbols"></a>

```java
public java.lang.Object getRequireSymbols();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_symbols CognitoUserPool#require_symbols}.

---

##### `requireUppercase`<sup>Optional</sup> <a name="requireUppercase" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireUppercase"></a>

```java
public java.lang.Object getRequireUppercase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_uppercase CognitoUserPool#require_uppercase}.

---

##### `temporaryPasswordValidityDays`<sup>Optional</sup> <a name="temporaryPasswordValidityDays" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.temporaryPasswordValidityDays"></a>

```java
public java.lang.Number getTemporaryPasswordValidityDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#temporary_password_validity_days CognitoUserPool#temporary_password_validity_days}.

---

### CognitoUserPoolSchema <a name="CognitoUserPoolSchema" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolSchema;

CognitoUserPoolSchema.builder()
    .attributeDataType(java.lang.String)
    .name(java.lang.String)
//  .developerOnlyAttribute(java.lang.Boolean)
//  .developerOnlyAttribute(IResolvable)
//  .mutable(java.lang.Boolean)
//  .mutable(IResolvable)
//  .numberAttributeConstraints(CognitoUserPoolSchemaNumberAttributeConstraints)
//  .required(java.lang.Boolean)
//  .required(IResolvable)
//  .stringAttributeConstraints(CognitoUserPoolSchemaStringAttributeConstraints)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.attributeDataType">attributeDataType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#attribute_data_type CognitoUserPool#attribute_data_type}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.developerOnlyAttribute">developerOnlyAttribute</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#developer_only_attribute CognitoUserPool#developer_only_attribute}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.mutable">mutable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#mutable CognitoUserPool#mutable}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.numberAttributeConstraints">numberAttributeConstraints</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints">CognitoUserPoolSchemaNumberAttributeConstraints</a></code> | number_attribute_constraints block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.required">required</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#required CognitoUserPool#required}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.stringAttributeConstraints">stringAttributeConstraints</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints">CognitoUserPoolSchemaStringAttributeConstraints</a></code> | string_attribute_constraints block. |

---

##### `attributeDataType`<sup>Required</sup> <a name="attributeDataType" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.attributeDataType"></a>

```java
public java.lang.String getAttributeDataType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#attribute_data_type CognitoUserPool#attribute_data_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}.

---

##### `developerOnlyAttribute`<sup>Optional</sup> <a name="developerOnlyAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.developerOnlyAttribute"></a>

```java
public java.lang.Object getDeveloperOnlyAttribute();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#developer_only_attribute CognitoUserPool#developer_only_attribute}.

---

##### `mutable`<sup>Optional</sup> <a name="mutable" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.mutable"></a>

```java
public java.lang.Object getMutable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#mutable CognitoUserPool#mutable}.

---

##### `numberAttributeConstraints`<sup>Optional</sup> <a name="numberAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.numberAttributeConstraints"></a>

```java
public CognitoUserPoolSchemaNumberAttributeConstraints getNumberAttributeConstraints();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints">CognitoUserPoolSchemaNumberAttributeConstraints</a>

number_attribute_constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#number_attribute_constraints CognitoUserPool#number_attribute_constraints}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.required"></a>

```java
public java.lang.Object getRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#required CognitoUserPool#required}.

---

##### `stringAttributeConstraints`<sup>Optional</sup> <a name="stringAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.stringAttributeConstraints"></a>

```java
public CognitoUserPoolSchemaStringAttributeConstraints getStringAttributeConstraints();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints">CognitoUserPoolSchemaStringAttributeConstraints</a>

string_attribute_constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#string_attribute_constraints CognitoUserPool#string_attribute_constraints}

---

### CognitoUserPoolSchemaNumberAttributeConstraints <a name="CognitoUserPoolSchemaNumberAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolSchemaNumberAttributeConstraints;

CognitoUserPoolSchemaNumberAttributeConstraints.builder()
//  .maxValue(java.lang.String)
//  .minValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints.property.maxValue">maxValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#max_value CognitoUserPool#max_value}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints.property.minValue">minValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#min_value CognitoUserPool#min_value}. |

---

##### `maxValue`<sup>Optional</sup> <a name="maxValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints.property.maxValue"></a>

```java
public java.lang.String getMaxValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#max_value CognitoUserPool#max_value}.

---

##### `minValue`<sup>Optional</sup> <a name="minValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints.property.minValue"></a>

```java
public java.lang.String getMinValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#min_value CognitoUserPool#min_value}.

---

### CognitoUserPoolSchemaStringAttributeConstraints <a name="CognitoUserPoolSchemaStringAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolSchemaStringAttributeConstraints;

CognitoUserPoolSchemaStringAttributeConstraints.builder()
//  .maxLength(java.lang.String)
//  .minLength(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints.property.maxLength">maxLength</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#max_length CognitoUserPool#max_length}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints.property.minLength">minLength</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#min_length CognitoUserPool#min_length}. |

---

##### `maxLength`<sup>Optional</sup> <a name="maxLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints.property.maxLength"></a>

```java
public java.lang.String getMaxLength();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#max_length CognitoUserPool#max_length}.

---

##### `minLength`<sup>Optional</sup> <a name="minLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints.property.minLength"></a>

```java
public java.lang.String getMinLength();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#min_length CognitoUserPool#min_length}.

---

### CognitoUserPoolSmsConfiguration <a name="CognitoUserPoolSmsConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolSmsConfiguration;

CognitoUserPoolSmsConfiguration.builder()
    .externalId(java.lang.String)
    .snsCallerArn(java.lang.String)
//  .snsRegion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.property.externalId">externalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#external_id CognitoUserPool#external_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.property.snsCallerArn">snsCallerArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sns_caller_arn CognitoUserPool#sns_caller_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.property.snsRegion">snsRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sns_region CognitoUserPool#sns_region}. |

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#external_id CognitoUserPool#external_id}.

---

##### `snsCallerArn`<sup>Required</sup> <a name="snsCallerArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.property.snsCallerArn"></a>

```java
public java.lang.String getSnsCallerArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sns_caller_arn CognitoUserPool#sns_caller_arn}.

---

##### `snsRegion`<sup>Optional</sup> <a name="snsRegion" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.property.snsRegion"></a>

```java
public java.lang.String getSnsRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sns_region CognitoUserPool#sns_region}.

---

### CognitoUserPoolSoftwareTokenMfaConfiguration <a name="CognitoUserPoolSoftwareTokenMfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolSoftwareTokenMfaConfiguration;

CognitoUserPoolSoftwareTokenMfaConfiguration.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#enabled CognitoUserPool#enabled}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#enabled CognitoUserPool#enabled}.

---

### CognitoUserPoolUserAttributeUpdateSettings <a name="CognitoUserPoolUserAttributeUpdateSettings" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolUserAttributeUpdateSettings;

CognitoUserPoolUserAttributeUpdateSettings.builder()
    .attributesRequireVerificationBeforeUpdate(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings.property.attributesRequireVerificationBeforeUpdate">attributesRequireVerificationBeforeUpdate</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#attributes_require_verification_before_update CognitoUserPool#attributes_require_verification_before_update}. |

---

##### `attributesRequireVerificationBeforeUpdate`<sup>Required</sup> <a name="attributesRequireVerificationBeforeUpdate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings.property.attributesRequireVerificationBeforeUpdate"></a>

```java
public java.util.List<java.lang.String> getAttributesRequireVerificationBeforeUpdate();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#attributes_require_verification_before_update CognitoUserPool#attributes_require_verification_before_update}.

---

### CognitoUserPoolUsernameConfiguration <a name="CognitoUserPoolUsernameConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolUsernameConfiguration;

CognitoUserPoolUsernameConfiguration.builder()
    .caseSensitive(java.lang.Boolean)
    .caseSensitive(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration.property.caseSensitive">caseSensitive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#case_sensitive CognitoUserPool#case_sensitive}. |

---

##### `caseSensitive`<sup>Required</sup> <a name="caseSensitive" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration.property.caseSensitive"></a>

```java
public java.lang.Object getCaseSensitive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#case_sensitive CognitoUserPool#case_sensitive}.

---

### CognitoUserPoolUserPoolAddOns <a name="CognitoUserPoolUserPoolAddOns" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolUserPoolAddOns;

CognitoUserPoolUserPoolAddOns.builder()
    .advancedSecurityMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns.property.advancedSecurityMode">advancedSecurityMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#advanced_security_mode CognitoUserPool#advanced_security_mode}. |

---

##### `advancedSecurityMode`<sup>Required</sup> <a name="advancedSecurityMode" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns.property.advancedSecurityMode"></a>

```java
public java.lang.String getAdvancedSecurityMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#advanced_security_mode CognitoUserPool#advanced_security_mode}.

---

### CognitoUserPoolVerificationMessageTemplate <a name="CognitoUserPoolVerificationMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolVerificationMessageTemplate;

CognitoUserPoolVerificationMessageTemplate.builder()
//  .defaultEmailOption(java.lang.String)
//  .emailMessage(java.lang.String)
//  .emailMessageByLink(java.lang.String)
//  .emailSubject(java.lang.String)
//  .emailSubjectByLink(java.lang.String)
//  .smsMessage(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.defaultEmailOption">defaultEmailOption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#default_email_option CognitoUserPool#default_email_option}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailMessage">emailMessage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message CognitoUserPool#email_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailMessageByLink">emailMessageByLink</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message_by_link CognitoUserPool#email_message_by_link}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailSubject">emailSubject</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject CognitoUserPool#email_subject}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailSubjectByLink">emailSubjectByLink</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject_by_link CognitoUserPool#email_subject_by_link}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.smsMessage">smsMessage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_message CognitoUserPool#sms_message}. |

---

##### `defaultEmailOption`<sup>Optional</sup> <a name="defaultEmailOption" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.defaultEmailOption"></a>

```java
public java.lang.String getDefaultEmailOption();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#default_email_option CognitoUserPool#default_email_option}.

---

##### `emailMessage`<sup>Optional</sup> <a name="emailMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailMessage"></a>

```java
public java.lang.String getEmailMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message CognitoUserPool#email_message}.

---

##### `emailMessageByLink`<sup>Optional</sup> <a name="emailMessageByLink" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailMessageByLink"></a>

```java
public java.lang.String getEmailMessageByLink();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message_by_link CognitoUserPool#email_message_by_link}.

---

##### `emailSubject`<sup>Optional</sup> <a name="emailSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailSubject"></a>

```java
public java.lang.String getEmailSubject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject CognitoUserPool#email_subject}.

---

##### `emailSubjectByLink`<sup>Optional</sup> <a name="emailSubjectByLink" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailSubjectByLink"></a>

```java
public java.lang.String getEmailSubjectByLink();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject_by_link CognitoUserPool#email_subject_by_link}.

---

##### `smsMessage`<sup>Optional</sup> <a name="smsMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.smsMessage"></a>

```java
public java.lang.String getSmsMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_message CognitoUserPool#sms_message}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoUserPoolAccountRecoverySettingOutputReference <a name="CognitoUserPoolAccountRecoverySettingOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolAccountRecoverySettingOutputReference;

new CognitoUserPoolAccountRecoverySettingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.putRecoveryMechanism">putRecoveryMechanism</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRecoveryMechanism` <a name="putRecoveryMechanism" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.putRecoveryMechanism"></a>

```java
public void putRecoveryMechanism(IResolvable OR java.util.List<CognitoUserPoolAccountRecoverySettingRecoveryMechanism> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.putRecoveryMechanism.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism">CognitoUserPoolAccountRecoverySettingRecoveryMechanism</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.recoveryMechanism">recoveryMechanism</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList">CognitoUserPoolAccountRecoverySettingRecoveryMechanismList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.recoveryMechanismInput">recoveryMechanismInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism">CognitoUserPoolAccountRecoverySettingRecoveryMechanism</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `recoveryMechanism`<sup>Required</sup> <a name="recoveryMechanism" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.recoveryMechanism"></a>

```java
public CognitoUserPoolAccountRecoverySettingRecoveryMechanismList getRecoveryMechanism();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList">CognitoUserPoolAccountRecoverySettingRecoveryMechanismList</a>

---

##### `recoveryMechanismInput`<sup>Optional</sup> <a name="recoveryMechanismInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.recoveryMechanismInput"></a>

```java
public java.lang.Object getRecoveryMechanismInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism">CognitoUserPoolAccountRecoverySettingRecoveryMechanism</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.internalValue"></a>

```java
public CognitoUserPoolAccountRecoverySetting getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a>

---


### CognitoUserPoolAccountRecoverySettingRecoveryMechanismList <a name="CognitoUserPoolAccountRecoverySettingRecoveryMechanismList" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList;

new CognitoUserPoolAccountRecoverySettingRecoveryMechanismList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.get"></a>

```java
public CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism">CognitoUserPoolAccountRecoverySettingRecoveryMechanism</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism">CognitoUserPoolAccountRecoverySettingRecoveryMechanism</a>>

---


### CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference <a name="CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference;

new CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism">CognitoUserPoolAccountRecoverySettingRecoveryMechanism</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism">CognitoUserPoolAccountRecoverySettingRecoveryMechanism</a> OR com.hashicorp.cdktf.IResolvable

---


### CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference <a name="CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference;

new CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resetEmailMessage">resetEmailMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resetEmailSubject">resetEmailSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resetSmsMessage">resetSmsMessage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmailMessage` <a name="resetEmailMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resetEmailMessage"></a>

```java
public void resetEmailMessage()
```

##### `resetEmailSubject` <a name="resetEmailSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resetEmailSubject"></a>

```java
public void resetEmailSubject()
```

##### `resetSmsMessage` <a name="resetSmsMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resetSmsMessage"></a>

```java
public void resetSmsMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailMessageInput">emailMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailSubjectInput">emailSubjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.smsMessageInput">smsMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailMessage">emailMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailSubject">emailSubject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.smsMessage">smsMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailMessageInput`<sup>Optional</sup> <a name="emailMessageInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailMessageInput"></a>

```java
public java.lang.String getEmailMessageInput();
```

- *Type:* java.lang.String

---

##### `emailSubjectInput`<sup>Optional</sup> <a name="emailSubjectInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailSubjectInput"></a>

```java
public java.lang.String getEmailSubjectInput();
```

- *Type:* java.lang.String

---

##### `smsMessageInput`<sup>Optional</sup> <a name="smsMessageInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.smsMessageInput"></a>

```java
public java.lang.String getSmsMessageInput();
```

- *Type:* java.lang.String

---

##### `emailMessage`<sup>Required</sup> <a name="emailMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailMessage"></a>

```java
public java.lang.String getEmailMessage();
```

- *Type:* java.lang.String

---

##### `emailSubject`<sup>Required</sup> <a name="emailSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailSubject"></a>

```java
public java.lang.String getEmailSubject();
```

- *Type:* java.lang.String

---

##### `smsMessage`<sup>Required</sup> <a name="smsMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.smsMessage"></a>

```java
public java.lang.String getSmsMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.internalValue"></a>

```java
public CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a>

---


### CognitoUserPoolAdminCreateUserConfigOutputReference <a name="CognitoUserPoolAdminCreateUserConfigOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolAdminCreateUserConfigOutputReference;

new CognitoUserPoolAdminCreateUserConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.putInviteMessageTemplate">putInviteMessageTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.resetAllowAdminCreateUserOnly">resetAllowAdminCreateUserOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.resetInviteMessageTemplate">resetInviteMessageTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInviteMessageTemplate` <a name="putInviteMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.putInviteMessageTemplate"></a>

```java
public void putInviteMessageTemplate(CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.putInviteMessageTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a>

---

##### `resetAllowAdminCreateUserOnly` <a name="resetAllowAdminCreateUserOnly" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.resetAllowAdminCreateUserOnly"></a>

```java
public void resetAllowAdminCreateUserOnly()
```

##### `resetInviteMessageTemplate` <a name="resetInviteMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.resetInviteMessageTemplate"></a>

```java
public void resetInviteMessageTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.inviteMessageTemplate">inviteMessageTemplate</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.allowAdminCreateUserOnlyInput">allowAdminCreateUserOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.inviteMessageTemplateInput">inviteMessageTemplateInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.allowAdminCreateUserOnly">allowAdminCreateUserOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inviteMessageTemplate`<sup>Required</sup> <a name="inviteMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.inviteMessageTemplate"></a>

```java
public CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference getInviteMessageTemplate();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference</a>

---

##### `allowAdminCreateUserOnlyInput`<sup>Optional</sup> <a name="allowAdminCreateUserOnlyInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.allowAdminCreateUserOnlyInput"></a>

```java
public java.lang.Object getAllowAdminCreateUserOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `inviteMessageTemplateInput`<sup>Optional</sup> <a name="inviteMessageTemplateInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.inviteMessageTemplateInput"></a>

```java
public CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate getInviteMessageTemplateInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a>

---

##### `allowAdminCreateUserOnly`<sup>Required</sup> <a name="allowAdminCreateUserOnly" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.allowAdminCreateUserOnly"></a>

```java
public java.lang.Object getAllowAdminCreateUserOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.internalValue"></a>

```java
public CognitoUserPoolAdminCreateUserConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a>

---


### CognitoUserPoolDeviceConfigurationOutputReference <a name="CognitoUserPoolDeviceConfigurationOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolDeviceConfigurationOutputReference;

new CognitoUserPoolDeviceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.resetChallengeRequiredOnNewDevice">resetChallengeRequiredOnNewDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.resetDeviceOnlyRememberedOnUserPrompt">resetDeviceOnlyRememberedOnUserPrompt</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChallengeRequiredOnNewDevice` <a name="resetChallengeRequiredOnNewDevice" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.resetChallengeRequiredOnNewDevice"></a>

```java
public void resetChallengeRequiredOnNewDevice()
```

##### `resetDeviceOnlyRememberedOnUserPrompt` <a name="resetDeviceOnlyRememberedOnUserPrompt" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.resetDeviceOnlyRememberedOnUserPrompt"></a>

```java
public void resetDeviceOnlyRememberedOnUserPrompt()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.challengeRequiredOnNewDeviceInput">challengeRequiredOnNewDeviceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.deviceOnlyRememberedOnUserPromptInput">deviceOnlyRememberedOnUserPromptInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.challengeRequiredOnNewDevice">challengeRequiredOnNewDevice</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.deviceOnlyRememberedOnUserPrompt">deviceOnlyRememberedOnUserPrompt</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `challengeRequiredOnNewDeviceInput`<sup>Optional</sup> <a name="challengeRequiredOnNewDeviceInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.challengeRequiredOnNewDeviceInput"></a>

```java
public java.lang.Object getChallengeRequiredOnNewDeviceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deviceOnlyRememberedOnUserPromptInput`<sup>Optional</sup> <a name="deviceOnlyRememberedOnUserPromptInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.deviceOnlyRememberedOnUserPromptInput"></a>

```java
public java.lang.Object getDeviceOnlyRememberedOnUserPromptInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `challengeRequiredOnNewDevice`<sup>Required</sup> <a name="challengeRequiredOnNewDevice" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.challengeRequiredOnNewDevice"></a>

```java
public java.lang.Object getChallengeRequiredOnNewDevice();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deviceOnlyRememberedOnUserPrompt`<sup>Required</sup> <a name="deviceOnlyRememberedOnUserPrompt" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.deviceOnlyRememberedOnUserPrompt"></a>

```java
public java.lang.Object getDeviceOnlyRememberedOnUserPrompt();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.internalValue"></a>

```java
public CognitoUserPoolDeviceConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a>

---


### CognitoUserPoolEmailConfigurationOutputReference <a name="CognitoUserPoolEmailConfigurationOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolEmailConfigurationOutputReference;

new CognitoUserPoolEmailConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetConfigurationSet">resetConfigurationSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetEmailSendingAccount">resetEmailSendingAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetFromEmailAddress">resetFromEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetReplyToEmailAddress">resetReplyToEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetSourceArn">resetSourceArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfigurationSet` <a name="resetConfigurationSet" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetConfigurationSet"></a>

```java
public void resetConfigurationSet()
```

##### `resetEmailSendingAccount` <a name="resetEmailSendingAccount" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetEmailSendingAccount"></a>

```java
public void resetEmailSendingAccount()
```

##### `resetFromEmailAddress` <a name="resetFromEmailAddress" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetFromEmailAddress"></a>

```java
public void resetFromEmailAddress()
```

##### `resetReplyToEmailAddress` <a name="resetReplyToEmailAddress" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetReplyToEmailAddress"></a>

```java
public void resetReplyToEmailAddress()
```

##### `resetSourceArn` <a name="resetSourceArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetSourceArn"></a>

```java
public void resetSourceArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.configurationSetInput">configurationSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.emailSendingAccountInput">emailSendingAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.fromEmailAddressInput">fromEmailAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.replyToEmailAddressInput">replyToEmailAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.sourceArnInput">sourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.configurationSet">configurationSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.emailSendingAccount">emailSendingAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.fromEmailAddress">fromEmailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.replyToEmailAddress">replyToEmailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.sourceArn">sourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configurationSetInput`<sup>Optional</sup> <a name="configurationSetInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.configurationSetInput"></a>

```java
public java.lang.String getConfigurationSetInput();
```

- *Type:* java.lang.String

---

##### `emailSendingAccountInput`<sup>Optional</sup> <a name="emailSendingAccountInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.emailSendingAccountInput"></a>

```java
public java.lang.String getEmailSendingAccountInput();
```

- *Type:* java.lang.String

---

##### `fromEmailAddressInput`<sup>Optional</sup> <a name="fromEmailAddressInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.fromEmailAddressInput"></a>

```java
public java.lang.String getFromEmailAddressInput();
```

- *Type:* java.lang.String

---

##### `replyToEmailAddressInput`<sup>Optional</sup> <a name="replyToEmailAddressInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.replyToEmailAddressInput"></a>

```java
public java.lang.String getReplyToEmailAddressInput();
```

- *Type:* java.lang.String

---

##### `sourceArnInput`<sup>Optional</sup> <a name="sourceArnInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.sourceArnInput"></a>

```java
public java.lang.String getSourceArnInput();
```

- *Type:* java.lang.String

---

##### `configurationSet`<sup>Required</sup> <a name="configurationSet" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.configurationSet"></a>

```java
public java.lang.String getConfigurationSet();
```

- *Type:* java.lang.String

---

##### `emailSendingAccount`<sup>Required</sup> <a name="emailSendingAccount" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.emailSendingAccount"></a>

```java
public java.lang.String getEmailSendingAccount();
```

- *Type:* java.lang.String

---

##### `fromEmailAddress`<sup>Required</sup> <a name="fromEmailAddress" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.fromEmailAddress"></a>

```java
public java.lang.String getFromEmailAddress();
```

- *Type:* java.lang.String

---

##### `replyToEmailAddress`<sup>Required</sup> <a name="replyToEmailAddress" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.replyToEmailAddress"></a>

```java
public java.lang.String getReplyToEmailAddress();
```

- *Type:* java.lang.String

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.sourceArn"></a>

```java
public java.lang.String getSourceArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.internalValue"></a>

```java
public CognitoUserPoolEmailConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a>

---


### CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference <a name="CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference;

new CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaArnInput">lambdaArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersionInput">lambdaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaArn">lambdaArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersion">lambdaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lambdaArnInput`<sup>Optional</sup> <a name="lambdaArnInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaArnInput"></a>

```java
public java.lang.String getLambdaArnInput();
```

- *Type:* java.lang.String

---

##### `lambdaVersionInput`<sup>Optional</sup> <a name="lambdaVersionInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersionInput"></a>

```java
public java.lang.String getLambdaVersionInput();
```

- *Type:* java.lang.String

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaArn"></a>

```java
public java.lang.String getLambdaArn();
```

- *Type:* java.lang.String

---

##### `lambdaVersion`<sup>Required</sup> <a name="lambdaVersion" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersion"></a>

```java
public java.lang.String getLambdaVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.internalValue"></a>

```java
public CognitoUserPoolLambdaConfigCustomEmailSender getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a>

---


### CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference <a name="CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference;

new CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaArnInput">lambdaArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersionInput">lambdaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaArn">lambdaArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersion">lambdaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lambdaArnInput`<sup>Optional</sup> <a name="lambdaArnInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaArnInput"></a>

```java
public java.lang.String getLambdaArnInput();
```

- *Type:* java.lang.String

---

##### `lambdaVersionInput`<sup>Optional</sup> <a name="lambdaVersionInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersionInput"></a>

```java
public java.lang.String getLambdaVersionInput();
```

- *Type:* java.lang.String

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaArn"></a>

```java
public java.lang.String getLambdaArn();
```

- *Type:* java.lang.String

---

##### `lambdaVersion`<sup>Required</sup> <a name="lambdaVersion" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersion"></a>

```java
public java.lang.String getLambdaVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.internalValue"></a>

```java
public CognitoUserPoolLambdaConfigCustomSmsSender getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a>

---


### CognitoUserPoolLambdaConfigOutputReference <a name="CognitoUserPoolLambdaConfigOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolLambdaConfigOutputReference;

new CognitoUserPoolLambdaConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.putCustomEmailSender">putCustomEmailSender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.putCustomSmsSender">putCustomSmsSender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetCreateAuthChallenge">resetCreateAuthChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetCustomEmailSender">resetCustomEmailSender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetCustomMessage">resetCustomMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetCustomSmsSender">resetCustomSmsSender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetDefineAuthChallenge">resetDefineAuthChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPostAuthentication">resetPostAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPostConfirmation">resetPostConfirmation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPreAuthentication">resetPreAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPreSignUp">resetPreSignUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPreTokenGeneration">resetPreTokenGeneration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetUserMigration">resetUserMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetVerifyAuthChallengeResponse">resetVerifyAuthChallengeResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomEmailSender` <a name="putCustomEmailSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.putCustomEmailSender"></a>

```java
public void putCustomEmailSender(CognitoUserPoolLambdaConfigCustomEmailSender value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.putCustomEmailSender.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a>

---

##### `putCustomSmsSender` <a name="putCustomSmsSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.putCustomSmsSender"></a>

```java
public void putCustomSmsSender(CognitoUserPoolLambdaConfigCustomSmsSender value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.putCustomSmsSender.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a>

---

##### `resetCreateAuthChallenge` <a name="resetCreateAuthChallenge" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetCreateAuthChallenge"></a>

```java
public void resetCreateAuthChallenge()
```

##### `resetCustomEmailSender` <a name="resetCustomEmailSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetCustomEmailSender"></a>

```java
public void resetCustomEmailSender()
```

##### `resetCustomMessage` <a name="resetCustomMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetCustomMessage"></a>

```java
public void resetCustomMessage()
```

##### `resetCustomSmsSender` <a name="resetCustomSmsSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetCustomSmsSender"></a>

```java
public void resetCustomSmsSender()
```

##### `resetDefineAuthChallenge` <a name="resetDefineAuthChallenge" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetDefineAuthChallenge"></a>

```java
public void resetDefineAuthChallenge()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetPostAuthentication` <a name="resetPostAuthentication" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPostAuthentication"></a>

```java
public void resetPostAuthentication()
```

##### `resetPostConfirmation` <a name="resetPostConfirmation" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPostConfirmation"></a>

```java
public void resetPostConfirmation()
```

##### `resetPreAuthentication` <a name="resetPreAuthentication" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPreAuthentication"></a>

```java
public void resetPreAuthentication()
```

##### `resetPreSignUp` <a name="resetPreSignUp" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPreSignUp"></a>

```java
public void resetPreSignUp()
```

##### `resetPreTokenGeneration` <a name="resetPreTokenGeneration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPreTokenGeneration"></a>

```java
public void resetPreTokenGeneration()
```

##### `resetUserMigration` <a name="resetUserMigration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetUserMigration"></a>

```java
public void resetUserMigration()
```

##### `resetVerifyAuthChallengeResponse` <a name="resetVerifyAuthChallengeResponse" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetVerifyAuthChallengeResponse"></a>

```java
public void resetVerifyAuthChallengeResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customEmailSender">customEmailSender</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference">CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customSmsSender">customSmsSender</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference">CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.createAuthChallengeInput">createAuthChallengeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customEmailSenderInput">customEmailSenderInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customMessageInput">customMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customSmsSenderInput">customSmsSenderInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.defineAuthChallengeInput">defineAuthChallengeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postAuthenticationInput">postAuthenticationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postConfirmationInput">postConfirmationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preAuthenticationInput">preAuthenticationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preSignUpInput">preSignUpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preTokenGenerationInput">preTokenGenerationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.userMigrationInput">userMigrationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.verifyAuthChallengeResponseInput">verifyAuthChallengeResponseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.createAuthChallenge">createAuthChallenge</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customMessage">customMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.defineAuthChallenge">defineAuthChallenge</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postAuthentication">postAuthentication</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postConfirmation">postConfirmation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preAuthentication">preAuthentication</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preSignUp">preSignUp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preTokenGeneration">preTokenGeneration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.userMigration">userMigration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.verifyAuthChallengeResponse">verifyAuthChallengeResponse</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customEmailSender`<sup>Required</sup> <a name="customEmailSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customEmailSender"></a>

```java
public CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference getCustomEmailSender();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference">CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference</a>

---

##### `customSmsSender`<sup>Required</sup> <a name="customSmsSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customSmsSender"></a>

```java
public CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference getCustomSmsSender();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference">CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference</a>

---

##### `createAuthChallengeInput`<sup>Optional</sup> <a name="createAuthChallengeInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.createAuthChallengeInput"></a>

```java
public java.lang.String getCreateAuthChallengeInput();
```

- *Type:* java.lang.String

---

##### `customEmailSenderInput`<sup>Optional</sup> <a name="customEmailSenderInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customEmailSenderInput"></a>

```java
public CognitoUserPoolLambdaConfigCustomEmailSender getCustomEmailSenderInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a>

---

##### `customMessageInput`<sup>Optional</sup> <a name="customMessageInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customMessageInput"></a>

```java
public java.lang.String getCustomMessageInput();
```

- *Type:* java.lang.String

---

##### `customSmsSenderInput`<sup>Optional</sup> <a name="customSmsSenderInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customSmsSenderInput"></a>

```java
public CognitoUserPoolLambdaConfigCustomSmsSender getCustomSmsSenderInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a>

---

##### `defineAuthChallengeInput`<sup>Optional</sup> <a name="defineAuthChallengeInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.defineAuthChallengeInput"></a>

```java
public java.lang.String getDefineAuthChallengeInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `postAuthenticationInput`<sup>Optional</sup> <a name="postAuthenticationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postAuthenticationInput"></a>

```java
public java.lang.String getPostAuthenticationInput();
```

- *Type:* java.lang.String

---

##### `postConfirmationInput`<sup>Optional</sup> <a name="postConfirmationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postConfirmationInput"></a>

```java
public java.lang.String getPostConfirmationInput();
```

- *Type:* java.lang.String

---

##### `preAuthenticationInput`<sup>Optional</sup> <a name="preAuthenticationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preAuthenticationInput"></a>

```java
public java.lang.String getPreAuthenticationInput();
```

- *Type:* java.lang.String

---

##### `preSignUpInput`<sup>Optional</sup> <a name="preSignUpInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preSignUpInput"></a>

```java
public java.lang.String getPreSignUpInput();
```

- *Type:* java.lang.String

---

##### `preTokenGenerationInput`<sup>Optional</sup> <a name="preTokenGenerationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preTokenGenerationInput"></a>

```java
public java.lang.String getPreTokenGenerationInput();
```

- *Type:* java.lang.String

---

##### `userMigrationInput`<sup>Optional</sup> <a name="userMigrationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.userMigrationInput"></a>

```java
public java.lang.String getUserMigrationInput();
```

- *Type:* java.lang.String

---

##### `verifyAuthChallengeResponseInput`<sup>Optional</sup> <a name="verifyAuthChallengeResponseInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.verifyAuthChallengeResponseInput"></a>

```java
public java.lang.String getVerifyAuthChallengeResponseInput();
```

- *Type:* java.lang.String

---

##### `createAuthChallenge`<sup>Required</sup> <a name="createAuthChallenge" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.createAuthChallenge"></a>

```java
public java.lang.String getCreateAuthChallenge();
```

- *Type:* java.lang.String

---

##### `customMessage`<sup>Required</sup> <a name="customMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customMessage"></a>

```java
public java.lang.String getCustomMessage();
```

- *Type:* java.lang.String

---

##### `defineAuthChallenge`<sup>Required</sup> <a name="defineAuthChallenge" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.defineAuthChallenge"></a>

```java
public java.lang.String getDefineAuthChallenge();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `postAuthentication`<sup>Required</sup> <a name="postAuthentication" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postAuthentication"></a>

```java
public java.lang.String getPostAuthentication();
```

- *Type:* java.lang.String

---

##### `postConfirmation`<sup>Required</sup> <a name="postConfirmation" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postConfirmation"></a>

```java
public java.lang.String getPostConfirmation();
```

- *Type:* java.lang.String

---

##### `preAuthentication`<sup>Required</sup> <a name="preAuthentication" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preAuthentication"></a>

```java
public java.lang.String getPreAuthentication();
```

- *Type:* java.lang.String

---

##### `preSignUp`<sup>Required</sup> <a name="preSignUp" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preSignUp"></a>

```java
public java.lang.String getPreSignUp();
```

- *Type:* java.lang.String

---

##### `preTokenGeneration`<sup>Required</sup> <a name="preTokenGeneration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preTokenGeneration"></a>

```java
public java.lang.String getPreTokenGeneration();
```

- *Type:* java.lang.String

---

##### `userMigration`<sup>Required</sup> <a name="userMigration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.userMigration"></a>

```java
public java.lang.String getUserMigration();
```

- *Type:* java.lang.String

---

##### `verifyAuthChallengeResponse`<sup>Required</sup> <a name="verifyAuthChallengeResponse" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.verifyAuthChallengeResponse"></a>

```java
public java.lang.String getVerifyAuthChallengeResponse();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.internalValue"></a>

```java
public CognitoUserPoolLambdaConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a>

---


### CognitoUserPoolPasswordPolicyOutputReference <a name="CognitoUserPoolPasswordPolicyOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolPasswordPolicyOutputReference;

new CognitoUserPoolPasswordPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetMinimumLength">resetMinimumLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetRequireLowercase">resetRequireLowercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetRequireNumbers">resetRequireNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetRequireSymbols">resetRequireSymbols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetRequireUppercase">resetRequireUppercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetTemporaryPasswordValidityDays">resetTemporaryPasswordValidityDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMinimumLength` <a name="resetMinimumLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetMinimumLength"></a>

```java
public void resetMinimumLength()
```

##### `resetRequireLowercase` <a name="resetRequireLowercase" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetRequireLowercase"></a>

```java
public void resetRequireLowercase()
```

##### `resetRequireNumbers` <a name="resetRequireNumbers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetRequireNumbers"></a>

```java
public void resetRequireNumbers()
```

##### `resetRequireSymbols` <a name="resetRequireSymbols" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetRequireSymbols"></a>

```java
public void resetRequireSymbols()
```

##### `resetRequireUppercase` <a name="resetRequireUppercase" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetRequireUppercase"></a>

```java
public void resetRequireUppercase()
```

##### `resetTemporaryPasswordValidityDays` <a name="resetTemporaryPasswordValidityDays" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetTemporaryPasswordValidityDays"></a>

```java
public void resetTemporaryPasswordValidityDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.minimumLengthInput">minimumLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireLowercaseInput">requireLowercaseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireNumbersInput">requireNumbersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireSymbolsInput">requireSymbolsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireUppercaseInput">requireUppercaseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.temporaryPasswordValidityDaysInput">temporaryPasswordValidityDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.minimumLength">minimumLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireLowercase">requireLowercase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireNumbers">requireNumbers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireSymbols">requireSymbols</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireUppercase">requireUppercase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.temporaryPasswordValidityDays">temporaryPasswordValidityDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `minimumLengthInput`<sup>Optional</sup> <a name="minimumLengthInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.minimumLengthInput"></a>

```java
public java.lang.Number getMinimumLengthInput();
```

- *Type:* java.lang.Number

---

##### `requireLowercaseInput`<sup>Optional</sup> <a name="requireLowercaseInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireLowercaseInput"></a>

```java
public java.lang.Object getRequireLowercaseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireNumbersInput`<sup>Optional</sup> <a name="requireNumbersInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireNumbersInput"></a>

```java
public java.lang.Object getRequireNumbersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireSymbolsInput`<sup>Optional</sup> <a name="requireSymbolsInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireSymbolsInput"></a>

```java
public java.lang.Object getRequireSymbolsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireUppercaseInput`<sup>Optional</sup> <a name="requireUppercaseInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireUppercaseInput"></a>

```java
public java.lang.Object getRequireUppercaseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `temporaryPasswordValidityDaysInput`<sup>Optional</sup> <a name="temporaryPasswordValidityDaysInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.temporaryPasswordValidityDaysInput"></a>

```java
public java.lang.Number getTemporaryPasswordValidityDaysInput();
```

- *Type:* java.lang.Number

---

##### `minimumLength`<sup>Required</sup> <a name="minimumLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.minimumLength"></a>

```java
public java.lang.Number getMinimumLength();
```

- *Type:* java.lang.Number

---

##### `requireLowercase`<sup>Required</sup> <a name="requireLowercase" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireLowercase"></a>

```java
public java.lang.Object getRequireLowercase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireNumbers`<sup>Required</sup> <a name="requireNumbers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireNumbers"></a>

```java
public java.lang.Object getRequireNumbers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireSymbols`<sup>Required</sup> <a name="requireSymbols" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireSymbols"></a>

```java
public java.lang.Object getRequireSymbols();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireUppercase`<sup>Required</sup> <a name="requireUppercase" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireUppercase"></a>

```java
public java.lang.Object getRequireUppercase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `temporaryPasswordValidityDays`<sup>Required</sup> <a name="temporaryPasswordValidityDays" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.temporaryPasswordValidityDays"></a>

```java
public java.lang.Number getTemporaryPasswordValidityDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.internalValue"></a>

```java
public CognitoUserPoolPasswordPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a>

---


### CognitoUserPoolSchemaList <a name="CognitoUserPoolSchemaList" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolSchemaList;

new CognitoUserPoolSchemaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.get"></a>

```java
public CognitoUserPoolSchemaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema">CognitoUserPoolSchema</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema">CognitoUserPoolSchema</a>>

---


### CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference <a name="CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference;

new CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.resetMaxValue">resetMaxValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.resetMinValue">resetMinValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxValue` <a name="resetMaxValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.resetMaxValue"></a>

```java
public void resetMaxValue()
```

##### `resetMinValue` <a name="resetMinValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.resetMinValue"></a>

```java
public void resetMinValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.maxValueInput">maxValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.minValueInput">minValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.maxValue">maxValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.minValue">minValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints">CognitoUserPoolSchemaNumberAttributeConstraints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxValueInput`<sup>Optional</sup> <a name="maxValueInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.maxValueInput"></a>

```java
public java.lang.String getMaxValueInput();
```

- *Type:* java.lang.String

---

##### `minValueInput`<sup>Optional</sup> <a name="minValueInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.minValueInput"></a>

```java
public java.lang.String getMinValueInput();
```

- *Type:* java.lang.String

---

##### `maxValue`<sup>Required</sup> <a name="maxValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.maxValue"></a>

```java
public java.lang.String getMaxValue();
```

- *Type:* java.lang.String

---

##### `minValue`<sup>Required</sup> <a name="minValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.minValue"></a>

```java
public java.lang.String getMinValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.internalValue"></a>

```java
public CognitoUserPoolSchemaNumberAttributeConstraints getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints">CognitoUserPoolSchemaNumberAttributeConstraints</a>

---


### CognitoUserPoolSchemaOutputReference <a name="CognitoUserPoolSchemaOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolSchemaOutputReference;

new CognitoUserPoolSchemaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.putNumberAttributeConstraints">putNumberAttributeConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.putStringAttributeConstraints">putStringAttributeConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetDeveloperOnlyAttribute">resetDeveloperOnlyAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetMutable">resetMutable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetNumberAttributeConstraints">resetNumberAttributeConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetStringAttributeConstraints">resetStringAttributeConstraints</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNumberAttributeConstraints` <a name="putNumberAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.putNumberAttributeConstraints"></a>

```java
public void putNumberAttributeConstraints(CognitoUserPoolSchemaNumberAttributeConstraints value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.putNumberAttributeConstraints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints">CognitoUserPoolSchemaNumberAttributeConstraints</a>

---

##### `putStringAttributeConstraints` <a name="putStringAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.putStringAttributeConstraints"></a>

```java
public void putStringAttributeConstraints(CognitoUserPoolSchemaStringAttributeConstraints value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.putStringAttributeConstraints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints">CognitoUserPoolSchemaStringAttributeConstraints</a>

---

##### `resetDeveloperOnlyAttribute` <a name="resetDeveloperOnlyAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetDeveloperOnlyAttribute"></a>

```java
public void resetDeveloperOnlyAttribute()
```

##### `resetMutable` <a name="resetMutable" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetMutable"></a>

```java
public void resetMutable()
```

##### `resetNumberAttributeConstraints` <a name="resetNumberAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetNumberAttributeConstraints"></a>

```java
public void resetNumberAttributeConstraints()
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetRequired"></a>

```java
public void resetRequired()
```

##### `resetStringAttributeConstraints` <a name="resetStringAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetStringAttributeConstraints"></a>

```java
public void resetStringAttributeConstraints()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.numberAttributeConstraints">numberAttributeConstraints</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference">CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.stringAttributeConstraints">stringAttributeConstraints</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference">CognitoUserPoolSchemaStringAttributeConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.attributeDataTypeInput">attributeDataTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.developerOnlyAttributeInput">developerOnlyAttributeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.mutableInput">mutableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.numberAttributeConstraintsInput">numberAttributeConstraintsInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints">CognitoUserPoolSchemaNumberAttributeConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.requiredInput">requiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.stringAttributeConstraintsInput">stringAttributeConstraintsInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints">CognitoUserPoolSchemaStringAttributeConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.attributeDataType">attributeDataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.developerOnlyAttribute">developerOnlyAttribute</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.mutable">mutable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.required">required</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema">CognitoUserPoolSchema</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `numberAttributeConstraints`<sup>Required</sup> <a name="numberAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.numberAttributeConstraints"></a>

```java
public CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference getNumberAttributeConstraints();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference">CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference</a>

---

##### `stringAttributeConstraints`<sup>Required</sup> <a name="stringAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.stringAttributeConstraints"></a>

```java
public CognitoUserPoolSchemaStringAttributeConstraintsOutputReference getStringAttributeConstraints();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference">CognitoUserPoolSchemaStringAttributeConstraintsOutputReference</a>

---

##### `attributeDataTypeInput`<sup>Optional</sup> <a name="attributeDataTypeInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.attributeDataTypeInput"></a>

```java
public java.lang.String getAttributeDataTypeInput();
```

- *Type:* java.lang.String

---

##### `developerOnlyAttributeInput`<sup>Optional</sup> <a name="developerOnlyAttributeInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.developerOnlyAttributeInput"></a>

```java
public java.lang.Object getDeveloperOnlyAttributeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mutableInput`<sup>Optional</sup> <a name="mutableInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.mutableInput"></a>

```java
public java.lang.Object getMutableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `numberAttributeConstraintsInput`<sup>Optional</sup> <a name="numberAttributeConstraintsInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.numberAttributeConstraintsInput"></a>

```java
public CognitoUserPoolSchemaNumberAttributeConstraints getNumberAttributeConstraintsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints">CognitoUserPoolSchemaNumberAttributeConstraints</a>

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.requiredInput"></a>

```java
public java.lang.Object getRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `stringAttributeConstraintsInput`<sup>Optional</sup> <a name="stringAttributeConstraintsInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.stringAttributeConstraintsInput"></a>

```java
public CognitoUserPoolSchemaStringAttributeConstraints getStringAttributeConstraintsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints">CognitoUserPoolSchemaStringAttributeConstraints</a>

---

##### `attributeDataType`<sup>Required</sup> <a name="attributeDataType" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.attributeDataType"></a>

```java
public java.lang.String getAttributeDataType();
```

- *Type:* java.lang.String

---

##### `developerOnlyAttribute`<sup>Required</sup> <a name="developerOnlyAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.developerOnlyAttribute"></a>

```java
public java.lang.Object getDeveloperOnlyAttribute();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mutable`<sup>Required</sup> <a name="mutable" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.mutable"></a>

```java
public java.lang.Object getMutable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.required"></a>

```java
public java.lang.Object getRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema">CognitoUserPoolSchema</a> OR com.hashicorp.cdktf.IResolvable

---


### CognitoUserPoolSchemaStringAttributeConstraintsOutputReference <a name="CognitoUserPoolSchemaStringAttributeConstraintsOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference;

new CognitoUserPoolSchemaStringAttributeConstraintsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.resetMaxLength">resetMaxLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.resetMinLength">resetMinLength</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxLength` <a name="resetMaxLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.resetMaxLength"></a>

```java
public void resetMaxLength()
```

##### `resetMinLength` <a name="resetMinLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.resetMinLength"></a>

```java
public void resetMinLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.maxLengthInput">maxLengthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.minLengthInput">minLengthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.maxLength">maxLength</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.minLength">minLength</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints">CognitoUserPoolSchemaStringAttributeConstraints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxLengthInput`<sup>Optional</sup> <a name="maxLengthInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.maxLengthInput"></a>

```java
public java.lang.String getMaxLengthInput();
```

- *Type:* java.lang.String

---

##### `minLengthInput`<sup>Optional</sup> <a name="minLengthInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.minLengthInput"></a>

```java
public java.lang.String getMinLengthInput();
```

- *Type:* java.lang.String

---

##### `maxLength`<sup>Required</sup> <a name="maxLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.maxLength"></a>

```java
public java.lang.String getMaxLength();
```

- *Type:* java.lang.String

---

##### `minLength`<sup>Required</sup> <a name="minLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.minLength"></a>

```java
public java.lang.String getMinLength();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.internalValue"></a>

```java
public CognitoUserPoolSchemaStringAttributeConstraints getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints">CognitoUserPoolSchemaStringAttributeConstraints</a>

---


### CognitoUserPoolSmsConfigurationOutputReference <a name="CognitoUserPoolSmsConfigurationOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolSmsConfigurationOutputReference;

new CognitoUserPoolSmsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.resetSnsRegion">resetSnsRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSnsRegion` <a name="resetSnsRegion" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.resetSnsRegion"></a>

```java
public void resetSnsRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsCallerArnInput">snsCallerArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsRegionInput">snsRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsCallerArn">snsCallerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsRegion">snsRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.externalIdInput"></a>

```java
public java.lang.String getExternalIdInput();
```

- *Type:* java.lang.String

---

##### `snsCallerArnInput`<sup>Optional</sup> <a name="snsCallerArnInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsCallerArnInput"></a>

```java
public java.lang.String getSnsCallerArnInput();
```

- *Type:* java.lang.String

---

##### `snsRegionInput`<sup>Optional</sup> <a name="snsRegionInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsRegionInput"></a>

```java
public java.lang.String getSnsRegionInput();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `snsCallerArn`<sup>Required</sup> <a name="snsCallerArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsCallerArn"></a>

```java
public java.lang.String getSnsCallerArn();
```

- *Type:* java.lang.String

---

##### `snsRegion`<sup>Required</sup> <a name="snsRegion" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsRegion"></a>

```java
public java.lang.String getSnsRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.internalValue"></a>

```java
public CognitoUserPoolSmsConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a>

---


### CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference <a name="CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference;

new CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.internalValue"></a>

```java
public CognitoUserPoolSoftwareTokenMfaConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a>

---


### CognitoUserPoolUserAttributeUpdateSettingsOutputReference <a name="CognitoUserPoolUserAttributeUpdateSettingsOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference;

new CognitoUserPoolUserAttributeUpdateSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.attributesRequireVerificationBeforeUpdateInput">attributesRequireVerificationBeforeUpdateInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.attributesRequireVerificationBeforeUpdate">attributesRequireVerificationBeforeUpdate</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributesRequireVerificationBeforeUpdateInput`<sup>Optional</sup> <a name="attributesRequireVerificationBeforeUpdateInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.attributesRequireVerificationBeforeUpdateInput"></a>

```java
public java.util.List<java.lang.String> getAttributesRequireVerificationBeforeUpdateInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `attributesRequireVerificationBeforeUpdate`<sup>Required</sup> <a name="attributesRequireVerificationBeforeUpdate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.attributesRequireVerificationBeforeUpdate"></a>

```java
public java.util.List<java.lang.String> getAttributesRequireVerificationBeforeUpdate();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.internalValue"></a>

```java
public CognitoUserPoolUserAttributeUpdateSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a>

---


### CognitoUserPoolUsernameConfigurationOutputReference <a name="CognitoUserPoolUsernameConfigurationOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolUsernameConfigurationOutputReference;

new CognitoUserPoolUsernameConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.caseSensitiveInput">caseSensitiveInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.caseSensitive">caseSensitive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caseSensitiveInput`<sup>Optional</sup> <a name="caseSensitiveInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.caseSensitiveInput"></a>

```java
public java.lang.Object getCaseSensitiveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `caseSensitive`<sup>Required</sup> <a name="caseSensitive" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.caseSensitive"></a>

```java
public java.lang.Object getCaseSensitive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.internalValue"></a>

```java
public CognitoUserPoolUsernameConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a>

---


### CognitoUserPoolUserPoolAddOnsOutputReference <a name="CognitoUserPoolUserPoolAddOnsOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolUserPoolAddOnsOutputReference;

new CognitoUserPoolUserPoolAddOnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.advancedSecurityModeInput">advancedSecurityModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.advancedSecurityMode">advancedSecurityMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `advancedSecurityModeInput`<sup>Optional</sup> <a name="advancedSecurityModeInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.advancedSecurityModeInput"></a>

```java
public java.lang.String getAdvancedSecurityModeInput();
```

- *Type:* java.lang.String

---

##### `advancedSecurityMode`<sup>Required</sup> <a name="advancedSecurityMode" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.advancedSecurityMode"></a>

```java
public java.lang.String getAdvancedSecurityMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.internalValue"></a>

```java
public CognitoUserPoolUserPoolAddOns getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a>

---


### CognitoUserPoolVerificationMessageTemplateOutputReference <a name="CognitoUserPoolVerificationMessageTemplateOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool.CognitoUserPoolVerificationMessageTemplateOutputReference;

new CognitoUserPoolVerificationMessageTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetDefaultEmailOption">resetDefaultEmailOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetEmailMessage">resetEmailMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetEmailMessageByLink">resetEmailMessageByLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetEmailSubject">resetEmailSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetEmailSubjectByLink">resetEmailSubjectByLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetSmsMessage">resetSmsMessage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultEmailOption` <a name="resetDefaultEmailOption" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetDefaultEmailOption"></a>

```java
public void resetDefaultEmailOption()
```

##### `resetEmailMessage` <a name="resetEmailMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetEmailMessage"></a>

```java
public void resetEmailMessage()
```

##### `resetEmailMessageByLink` <a name="resetEmailMessageByLink" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetEmailMessageByLink"></a>

```java
public void resetEmailMessageByLink()
```

##### `resetEmailSubject` <a name="resetEmailSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetEmailSubject"></a>

```java
public void resetEmailSubject()
```

##### `resetEmailSubjectByLink` <a name="resetEmailSubjectByLink" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetEmailSubjectByLink"></a>

```java
public void resetEmailSubjectByLink()
```

##### `resetSmsMessage` <a name="resetSmsMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetSmsMessage"></a>

```java
public void resetSmsMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.defaultEmailOptionInput">defaultEmailOptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessageByLinkInput">emailMessageByLinkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessageInput">emailMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubjectByLinkInput">emailSubjectByLinkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubjectInput">emailSubjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.smsMessageInput">smsMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.defaultEmailOption">defaultEmailOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessage">emailMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessageByLink">emailMessageByLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubject">emailSubject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubjectByLink">emailSubjectByLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.smsMessage">smsMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultEmailOptionInput`<sup>Optional</sup> <a name="defaultEmailOptionInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.defaultEmailOptionInput"></a>

```java
public java.lang.String getDefaultEmailOptionInput();
```

- *Type:* java.lang.String

---

##### `emailMessageByLinkInput`<sup>Optional</sup> <a name="emailMessageByLinkInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessageByLinkInput"></a>

```java
public java.lang.String getEmailMessageByLinkInput();
```

- *Type:* java.lang.String

---

##### `emailMessageInput`<sup>Optional</sup> <a name="emailMessageInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessageInput"></a>

```java
public java.lang.String getEmailMessageInput();
```

- *Type:* java.lang.String

---

##### `emailSubjectByLinkInput`<sup>Optional</sup> <a name="emailSubjectByLinkInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubjectByLinkInput"></a>

```java
public java.lang.String getEmailSubjectByLinkInput();
```

- *Type:* java.lang.String

---

##### `emailSubjectInput`<sup>Optional</sup> <a name="emailSubjectInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubjectInput"></a>

```java
public java.lang.String getEmailSubjectInput();
```

- *Type:* java.lang.String

---

##### `smsMessageInput`<sup>Optional</sup> <a name="smsMessageInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.smsMessageInput"></a>

```java
public java.lang.String getSmsMessageInput();
```

- *Type:* java.lang.String

---

##### `defaultEmailOption`<sup>Required</sup> <a name="defaultEmailOption" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.defaultEmailOption"></a>

```java
public java.lang.String getDefaultEmailOption();
```

- *Type:* java.lang.String

---

##### `emailMessage`<sup>Required</sup> <a name="emailMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessage"></a>

```java
public java.lang.String getEmailMessage();
```

- *Type:* java.lang.String

---

##### `emailMessageByLink`<sup>Required</sup> <a name="emailMessageByLink" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessageByLink"></a>

```java
public java.lang.String getEmailMessageByLink();
```

- *Type:* java.lang.String

---

##### `emailSubject`<sup>Required</sup> <a name="emailSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubject"></a>

```java
public java.lang.String getEmailSubject();
```

- *Type:* java.lang.String

---

##### `emailSubjectByLink`<sup>Required</sup> <a name="emailSubjectByLink" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubjectByLink"></a>

```java
public java.lang.String getEmailSubjectByLink();
```

- *Type:* java.lang.String

---

##### `smsMessage`<sup>Required</sup> <a name="smsMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.smsMessage"></a>

```java
public java.lang.String getSmsMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.internalValue"></a>

```java
public CognitoUserPoolVerificationMessageTemplate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a>

---



