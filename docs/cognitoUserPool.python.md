# `cognitoUserPool` Submodule <a name="`cognitoUserPool` Submodule" id="@cdktf/provider-aws.cognitoUserPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPool <a name="CognitoUserPool" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool aws_cognito_user_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  account_recovery_setting: CognitoUserPoolAccountRecoverySetting = None,
  admin_create_user_config: CognitoUserPoolAdminCreateUserConfig = None,
  alias_attributes: typing.List[str] = None,
  auto_verified_attributes: typing.List[str] = None,
  deletion_protection: str = None,
  device_configuration: CognitoUserPoolDeviceConfiguration = None,
  email_configuration: CognitoUserPoolEmailConfiguration = None,
  email_verification_message: str = None,
  email_verification_subject: str = None,
  id: str = None,
  lambda_config: CognitoUserPoolLambdaConfig = None,
  mfa_configuration: str = None,
  password_policy: CognitoUserPoolPasswordPolicy = None,
  schema: typing.Union[IResolvable, typing.List[CognitoUserPoolSchema]] = None,
  sms_authentication_message: str = None,
  sms_configuration: CognitoUserPoolSmsConfiguration = None,
  sms_verification_message: str = None,
  software_token_mfa_configuration: CognitoUserPoolSoftwareTokenMfaConfiguration = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  user_attribute_update_settings: CognitoUserPoolUserAttributeUpdateSettings = None,
  username_attributes: typing.List[str] = None,
  username_configuration: CognitoUserPoolUsernameConfiguration = None,
  user_pool_add_ons: CognitoUserPoolUserPoolAddOns = None,
  verification_message_template: CognitoUserPoolVerificationMessageTemplate = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.accountRecoverySetting">account_recovery_setting</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a></code> | account_recovery_setting block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.adminCreateUserConfig">admin_create_user_config</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a></code> | admin_create_user_config block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.aliasAttributes">alias_attributes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#alias_attributes CognitoUserPool#alias_attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.autoVerifiedAttributes">auto_verified_attributes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#auto_verified_attributes CognitoUserPool#auto_verified_attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.deletionProtection">deletion_protection</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#deletion_protection CognitoUserPool#deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.deviceConfiguration">device_configuration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a></code> | device_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.emailConfiguration">email_configuration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a></code> | email_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.emailVerificationMessage">email_verification_message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_verification_message CognitoUserPool#email_verification_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.emailVerificationSubject">email_verification_subject</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_verification_subject CognitoUserPool#email_verification_subject}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#id CognitoUserPool#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.lambdaConfig">lambda_config</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a></code> | lambda_config block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.mfaConfiguration">mfa_configuration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#mfa_configuration CognitoUserPool#mfa_configuration}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.passwordPolicy">password_policy</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a></code> | password_policy block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.schema">schema</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema">CognitoUserPoolSchema</a>]]</code> | schema block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.smsAuthenticationMessage">sms_authentication_message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_authentication_message CognitoUserPool#sms_authentication_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.smsConfiguration">sms_configuration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a></code> | sms_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.smsVerificationMessage">sms_verification_message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_verification_message CognitoUserPool#sms_verification_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.softwareTokenMfaConfiguration">software_token_mfa_configuration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a></code> | software_token_mfa_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#tags CognitoUserPool#tags}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#tags_all CognitoUserPool#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.userAttributeUpdateSettings">user_attribute_update_settings</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a></code> | user_attribute_update_settings block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.usernameAttributes">username_attributes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#username_attributes CognitoUserPool#username_attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.usernameConfiguration">username_configuration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a></code> | username_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.userPoolAddOns">user_pool_add_ons</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a></code> | user_pool_add_ons block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.verificationMessageTemplate">verification_message_template</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a></code> | verification_message_template block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}.

---

##### `account_recovery_setting`<sup>Optional</sup> <a name="account_recovery_setting" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.accountRecoverySetting"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a>

account_recovery_setting block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#account_recovery_setting CognitoUserPool#account_recovery_setting}

---

##### `admin_create_user_config`<sup>Optional</sup> <a name="admin_create_user_config" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.adminCreateUserConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a>

admin_create_user_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#admin_create_user_config CognitoUserPool#admin_create_user_config}

---

##### `alias_attributes`<sup>Optional</sup> <a name="alias_attributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.aliasAttributes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#alias_attributes CognitoUserPool#alias_attributes}.

---

##### `auto_verified_attributes`<sup>Optional</sup> <a name="auto_verified_attributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.autoVerifiedAttributes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#auto_verified_attributes CognitoUserPool#auto_verified_attributes}.

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.deletionProtection"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#deletion_protection CognitoUserPool#deletion_protection}.

---

##### `device_configuration`<sup>Optional</sup> <a name="device_configuration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.deviceConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a>

device_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#device_configuration CognitoUserPool#device_configuration}

---

##### `email_configuration`<sup>Optional</sup> <a name="email_configuration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.emailConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a>

email_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_configuration CognitoUserPool#email_configuration}

---

##### `email_verification_message`<sup>Optional</sup> <a name="email_verification_message" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.emailVerificationMessage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_verification_message CognitoUserPool#email_verification_message}.

---

##### `email_verification_subject`<sup>Optional</sup> <a name="email_verification_subject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.emailVerificationSubject"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_verification_subject CognitoUserPool#email_verification_subject}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#id CognitoUserPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lambda_config`<sup>Optional</sup> <a name="lambda_config" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.lambdaConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a>

lambda_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_config CognitoUserPool#lambda_config}

---

##### `mfa_configuration`<sup>Optional</sup> <a name="mfa_configuration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.mfaConfiguration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#mfa_configuration CognitoUserPool#mfa_configuration}.

---

##### `password_policy`<sup>Optional</sup> <a name="password_policy" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.passwordPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a>

password_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#password_policy CognitoUserPool#password_policy}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.schema"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema">CognitoUserPoolSchema</a>]]

schema block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#schema CognitoUserPool#schema}

---

##### `sms_authentication_message`<sup>Optional</sup> <a name="sms_authentication_message" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.smsAuthenticationMessage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_authentication_message CognitoUserPool#sms_authentication_message}.

---

##### `sms_configuration`<sup>Optional</sup> <a name="sms_configuration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.smsConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a>

sms_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_configuration CognitoUserPool#sms_configuration}

---

##### `sms_verification_message`<sup>Optional</sup> <a name="sms_verification_message" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.smsVerificationMessage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_verification_message CognitoUserPool#sms_verification_message}.

---

##### `software_token_mfa_configuration`<sup>Optional</sup> <a name="software_token_mfa_configuration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.softwareTokenMfaConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a>

software_token_mfa_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#software_token_mfa_configuration CognitoUserPool#software_token_mfa_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#tags CognitoUserPool#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#tags_all CognitoUserPool#tags_all}.

---

##### `user_attribute_update_settings`<sup>Optional</sup> <a name="user_attribute_update_settings" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.userAttributeUpdateSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a>

user_attribute_update_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#user_attribute_update_settings CognitoUserPool#user_attribute_update_settings}

---

##### `username_attributes`<sup>Optional</sup> <a name="username_attributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.usernameAttributes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#username_attributes CognitoUserPool#username_attributes}.

---

##### `username_configuration`<sup>Optional</sup> <a name="username_configuration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.usernameConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a>

username_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#username_configuration CognitoUserPool#username_configuration}

---

##### `user_pool_add_ons`<sup>Optional</sup> <a name="user_pool_add_ons" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.userPoolAddOns"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a>

user_pool_add_ons block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#user_pool_add_ons CognitoUserPool#user_pool_add_ons}

---

##### `verification_message_template`<sup>Optional</sup> <a name="verification_message_template" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.verificationMessageTemplate"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a>

verification_message_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#verification_message_template CognitoUserPool#verification_message_template}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putAccountRecoverySetting">put_account_recovery_setting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putAdminCreateUserConfig">put_admin_create_user_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putDeviceConfiguration">put_device_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putEmailConfiguration">put_email_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putLambdaConfig">put_lambda_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putPasswordPolicy">put_password_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSchema">put_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSmsConfiguration">put_sms_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSoftwareTokenMfaConfiguration">put_software_token_mfa_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUserAttributeUpdateSettings">put_user_attribute_update_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUsernameConfiguration">put_username_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUserPoolAddOns">put_user_pool_add_ons</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putVerificationMessageTemplate">put_verification_message_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetAccountRecoverySetting">reset_account_recovery_setting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetAdminCreateUserConfig">reset_admin_create_user_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetAliasAttributes">reset_alias_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetAutoVerifiedAttributes">reset_auto_verified_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetDeletionProtection">reset_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetDeviceConfiguration">reset_device_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetEmailConfiguration">reset_email_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetEmailVerificationMessage">reset_email_verification_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetEmailVerificationSubject">reset_email_verification_subject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetLambdaConfig">reset_lambda_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetMfaConfiguration">reset_mfa_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetPasswordPolicy">reset_password_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSchema">reset_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSmsAuthenticationMessage">reset_sms_authentication_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSmsConfiguration">reset_sms_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSmsVerificationMessage">reset_sms_verification_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSoftwareTokenMfaConfiguration">reset_software_token_mfa_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetUserAttributeUpdateSettings">reset_user_attribute_update_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetUsernameAttributes">reset_username_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetUsernameConfiguration">reset_username_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetUserPoolAddOns">reset_user_pool_add_ons</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetVerificationMessageTemplate">reset_verification_message_template</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_account_recovery_setting` <a name="put_account_recovery_setting" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putAccountRecoverySetting"></a>

```python
def put_account_recovery_setting(
  recovery_mechanism: typing.Union[IResolvable, typing.List[CognitoUserPoolAccountRecoverySettingRecoveryMechanism]]
) -> None
```

###### `recovery_mechanism`<sup>Required</sup> <a name="recovery_mechanism" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putAccountRecoverySetting.parameter.recoveryMechanism"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism">CognitoUserPoolAccountRecoverySettingRecoveryMechanism</a>]]

recovery_mechanism block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#recovery_mechanism CognitoUserPool#recovery_mechanism}

---

##### `put_admin_create_user_config` <a name="put_admin_create_user_config" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putAdminCreateUserConfig"></a>

```python
def put_admin_create_user_config(
  allow_admin_create_user_only: typing.Union[bool, IResolvable] = None,
  invite_message_template: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate = None
) -> None
```

###### `allow_admin_create_user_only`<sup>Optional</sup> <a name="allow_admin_create_user_only" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putAdminCreateUserConfig.parameter.allowAdminCreateUserOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#allow_admin_create_user_only CognitoUserPool#allow_admin_create_user_only}.

---

###### `invite_message_template`<sup>Optional</sup> <a name="invite_message_template" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putAdminCreateUserConfig.parameter.inviteMessageTemplate"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a>

invite_message_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#invite_message_template CognitoUserPool#invite_message_template}

---

##### `put_device_configuration` <a name="put_device_configuration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putDeviceConfiguration"></a>

```python
def put_device_configuration(
  challenge_required_on_new_device: typing.Union[bool, IResolvable] = None,
  device_only_remembered_on_user_prompt: typing.Union[bool, IResolvable] = None
) -> None
```

###### `challenge_required_on_new_device`<sup>Optional</sup> <a name="challenge_required_on_new_device" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putDeviceConfiguration.parameter.challengeRequiredOnNewDevice"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#challenge_required_on_new_device CognitoUserPool#challenge_required_on_new_device}.

---

###### `device_only_remembered_on_user_prompt`<sup>Optional</sup> <a name="device_only_remembered_on_user_prompt" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putDeviceConfiguration.parameter.deviceOnlyRememberedOnUserPrompt"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#device_only_remembered_on_user_prompt CognitoUserPool#device_only_remembered_on_user_prompt}.

---

##### `put_email_configuration` <a name="put_email_configuration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putEmailConfiguration"></a>

```python
def put_email_configuration(
  configuration_set: str = None,
  email_sending_account: str = None,
  from_email_address: str = None,
  reply_to_email_address: str = None,
  source_arn: str = None
) -> None
```

###### `configuration_set`<sup>Optional</sup> <a name="configuration_set" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putEmailConfiguration.parameter.configurationSet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#configuration_set CognitoUserPool#configuration_set}.

---

###### `email_sending_account`<sup>Optional</sup> <a name="email_sending_account" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putEmailConfiguration.parameter.emailSendingAccount"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_sending_account CognitoUserPool#email_sending_account}.

---

###### `from_email_address`<sup>Optional</sup> <a name="from_email_address" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putEmailConfiguration.parameter.fromEmailAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#from_email_address CognitoUserPool#from_email_address}.

---

###### `reply_to_email_address`<sup>Optional</sup> <a name="reply_to_email_address" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putEmailConfiguration.parameter.replyToEmailAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#reply_to_email_address CognitoUserPool#reply_to_email_address}.

---

###### `source_arn`<sup>Optional</sup> <a name="source_arn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putEmailConfiguration.parameter.sourceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#source_arn CognitoUserPool#source_arn}.

---

##### `put_lambda_config` <a name="put_lambda_config" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putLambdaConfig"></a>

```python
def put_lambda_config(
  create_auth_challenge: str = None,
  custom_email_sender: CognitoUserPoolLambdaConfigCustomEmailSender = None,
  custom_message: str = None,
  custom_sms_sender: CognitoUserPoolLambdaConfigCustomSmsSender = None,
  define_auth_challenge: str = None,
  kms_key_id: str = None,
  post_authentication: str = None,
  post_confirmation: str = None,
  pre_authentication: str = None,
  pre_sign_up: str = None,
  pre_token_generation: str = None,
  user_migration: str = None,
  verify_auth_challenge_response: str = None
) -> None
```

###### `create_auth_challenge`<sup>Optional</sup> <a name="create_auth_challenge" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putLambdaConfig.parameter.createAuthChallenge"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#create_auth_challenge CognitoUserPool#create_auth_challenge}.

---

###### `custom_email_sender`<sup>Optional</sup> <a name="custom_email_sender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putLambdaConfig.parameter.customEmailSender"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a>

custom_email_sender block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#custom_email_sender CognitoUserPool#custom_email_sender}

---

###### `custom_message`<sup>Optional</sup> <a name="custom_message" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putLambdaConfig.parameter.customMessage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#custom_message CognitoUserPool#custom_message}.

---

###### `custom_sms_sender`<sup>Optional</sup> <a name="custom_sms_sender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putLambdaConfig.parameter.customSmsSender"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a>

custom_sms_sender block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#custom_sms_sender CognitoUserPool#custom_sms_sender}

---

###### `define_auth_challenge`<sup>Optional</sup> <a name="define_auth_challenge" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putLambdaConfig.parameter.defineAuthChallenge"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#define_auth_challenge CognitoUserPool#define_auth_challenge}.

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putLambdaConfig.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#kms_key_id CognitoUserPool#kms_key_id}.

---

###### `post_authentication`<sup>Optional</sup> <a name="post_authentication" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putLambdaConfig.parameter.postAuthentication"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#post_authentication CognitoUserPool#post_authentication}.

---

###### `post_confirmation`<sup>Optional</sup> <a name="post_confirmation" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putLambdaConfig.parameter.postConfirmation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#post_confirmation CognitoUserPool#post_confirmation}.

---

###### `pre_authentication`<sup>Optional</sup> <a name="pre_authentication" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putLambdaConfig.parameter.preAuthentication"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_authentication CognitoUserPool#pre_authentication}.

---

###### `pre_sign_up`<sup>Optional</sup> <a name="pre_sign_up" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putLambdaConfig.parameter.preSignUp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_sign_up CognitoUserPool#pre_sign_up}.

---

###### `pre_token_generation`<sup>Optional</sup> <a name="pre_token_generation" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putLambdaConfig.parameter.preTokenGeneration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_token_generation CognitoUserPool#pre_token_generation}.

---

###### `user_migration`<sup>Optional</sup> <a name="user_migration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putLambdaConfig.parameter.userMigration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#user_migration CognitoUserPool#user_migration}.

---

###### `verify_auth_challenge_response`<sup>Optional</sup> <a name="verify_auth_challenge_response" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putLambdaConfig.parameter.verifyAuthChallengeResponse"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#verify_auth_challenge_response CognitoUserPool#verify_auth_challenge_response}.

---

##### `put_password_policy` <a name="put_password_policy" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putPasswordPolicy"></a>

```python
def put_password_policy(
  minimum_length: typing.Union[int, float] = None,
  require_lowercase: typing.Union[bool, IResolvable] = None,
  require_numbers: typing.Union[bool, IResolvable] = None,
  require_symbols: typing.Union[bool, IResolvable] = None,
  require_uppercase: typing.Union[bool, IResolvable] = None,
  temporary_password_validity_days: typing.Union[int, float] = None
) -> None
```

###### `minimum_length`<sup>Optional</sup> <a name="minimum_length" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putPasswordPolicy.parameter.minimumLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#minimum_length CognitoUserPool#minimum_length}.

---

###### `require_lowercase`<sup>Optional</sup> <a name="require_lowercase" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putPasswordPolicy.parameter.requireLowercase"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_lowercase CognitoUserPool#require_lowercase}.

---

###### `require_numbers`<sup>Optional</sup> <a name="require_numbers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putPasswordPolicy.parameter.requireNumbers"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_numbers CognitoUserPool#require_numbers}.

---

###### `require_symbols`<sup>Optional</sup> <a name="require_symbols" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putPasswordPolicy.parameter.requireSymbols"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_symbols CognitoUserPool#require_symbols}.

---

###### `require_uppercase`<sup>Optional</sup> <a name="require_uppercase" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putPasswordPolicy.parameter.requireUppercase"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_uppercase CognitoUserPool#require_uppercase}.

---

###### `temporary_password_validity_days`<sup>Optional</sup> <a name="temporary_password_validity_days" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putPasswordPolicy.parameter.temporaryPasswordValidityDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#temporary_password_validity_days CognitoUserPool#temporary_password_validity_days}.

---

##### `put_schema` <a name="put_schema" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSchema"></a>

```python
def put_schema(
  value: typing.Union[IResolvable, typing.List[CognitoUserPoolSchema]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSchema.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema">CognitoUserPoolSchema</a>]]

---

##### `put_sms_configuration` <a name="put_sms_configuration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSmsConfiguration"></a>

```python
def put_sms_configuration(
  external_id: str,
  sns_caller_arn: str,
  sns_region: str = None
) -> None
```

###### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSmsConfiguration.parameter.externalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#external_id CognitoUserPool#external_id}.

---

###### `sns_caller_arn`<sup>Required</sup> <a name="sns_caller_arn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSmsConfiguration.parameter.snsCallerArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sns_caller_arn CognitoUserPool#sns_caller_arn}.

---

###### `sns_region`<sup>Optional</sup> <a name="sns_region" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSmsConfiguration.parameter.snsRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sns_region CognitoUserPool#sns_region}.

---

##### `put_software_token_mfa_configuration` <a name="put_software_token_mfa_configuration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSoftwareTokenMfaConfiguration"></a>

```python
def put_software_token_mfa_configuration(
  enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSoftwareTokenMfaConfiguration.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#enabled CognitoUserPool#enabled}.

---

##### `put_user_attribute_update_settings` <a name="put_user_attribute_update_settings" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUserAttributeUpdateSettings"></a>

```python
def put_user_attribute_update_settings(
  attributes_require_verification_before_update: typing.List[str]
) -> None
```

###### `attributes_require_verification_before_update`<sup>Required</sup> <a name="attributes_require_verification_before_update" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUserAttributeUpdateSettings.parameter.attributesRequireVerificationBeforeUpdate"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#attributes_require_verification_before_update CognitoUserPool#attributes_require_verification_before_update}.

---

##### `put_username_configuration` <a name="put_username_configuration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUsernameConfiguration"></a>

```python
def put_username_configuration(
  case_sensitive: typing.Union[bool, IResolvable]
) -> None
```

###### `case_sensitive`<sup>Required</sup> <a name="case_sensitive" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUsernameConfiguration.parameter.caseSensitive"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#case_sensitive CognitoUserPool#case_sensitive}.

---

##### `put_user_pool_add_ons` <a name="put_user_pool_add_ons" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUserPoolAddOns"></a>

```python
def put_user_pool_add_ons(
  advanced_security_mode: str
) -> None
```

###### `advanced_security_mode`<sup>Required</sup> <a name="advanced_security_mode" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUserPoolAddOns.parameter.advancedSecurityMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#advanced_security_mode CognitoUserPool#advanced_security_mode}.

---

##### `put_verification_message_template` <a name="put_verification_message_template" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putVerificationMessageTemplate"></a>

```python
def put_verification_message_template(
  default_email_option: str = None,
  email_message: str = None,
  email_message_by_link: str = None,
  email_subject: str = None,
  email_subject_by_link: str = None,
  sms_message: str = None
) -> None
```

###### `default_email_option`<sup>Optional</sup> <a name="default_email_option" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putVerificationMessageTemplate.parameter.defaultEmailOption"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#default_email_option CognitoUserPool#default_email_option}.

---

###### `email_message`<sup>Optional</sup> <a name="email_message" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putVerificationMessageTemplate.parameter.emailMessage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message CognitoUserPool#email_message}.

---

###### `email_message_by_link`<sup>Optional</sup> <a name="email_message_by_link" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putVerificationMessageTemplate.parameter.emailMessageByLink"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message_by_link CognitoUserPool#email_message_by_link}.

---

###### `email_subject`<sup>Optional</sup> <a name="email_subject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putVerificationMessageTemplate.parameter.emailSubject"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject CognitoUserPool#email_subject}.

---

###### `email_subject_by_link`<sup>Optional</sup> <a name="email_subject_by_link" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putVerificationMessageTemplate.parameter.emailSubjectByLink"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject_by_link CognitoUserPool#email_subject_by_link}.

---

###### `sms_message`<sup>Optional</sup> <a name="sms_message" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putVerificationMessageTemplate.parameter.smsMessage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_message CognitoUserPool#sms_message}.

---

##### `reset_account_recovery_setting` <a name="reset_account_recovery_setting" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetAccountRecoverySetting"></a>

```python
def reset_account_recovery_setting() -> None
```

##### `reset_admin_create_user_config` <a name="reset_admin_create_user_config" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetAdminCreateUserConfig"></a>

```python
def reset_admin_create_user_config() -> None
```

##### `reset_alias_attributes` <a name="reset_alias_attributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetAliasAttributes"></a>

```python
def reset_alias_attributes() -> None
```

##### `reset_auto_verified_attributes` <a name="reset_auto_verified_attributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetAutoVerifiedAttributes"></a>

```python
def reset_auto_verified_attributes() -> None
```

##### `reset_deletion_protection` <a name="reset_deletion_protection" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetDeletionProtection"></a>

```python
def reset_deletion_protection() -> None
```

##### `reset_device_configuration` <a name="reset_device_configuration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetDeviceConfiguration"></a>

```python
def reset_device_configuration() -> None
```

##### `reset_email_configuration` <a name="reset_email_configuration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetEmailConfiguration"></a>

```python
def reset_email_configuration() -> None
```

##### `reset_email_verification_message` <a name="reset_email_verification_message" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetEmailVerificationMessage"></a>

```python
def reset_email_verification_message() -> None
```

##### `reset_email_verification_subject` <a name="reset_email_verification_subject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetEmailVerificationSubject"></a>

```python
def reset_email_verification_subject() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_lambda_config` <a name="reset_lambda_config" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetLambdaConfig"></a>

```python
def reset_lambda_config() -> None
```

##### `reset_mfa_configuration` <a name="reset_mfa_configuration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetMfaConfiguration"></a>

```python
def reset_mfa_configuration() -> None
```

##### `reset_password_policy` <a name="reset_password_policy" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetPasswordPolicy"></a>

```python
def reset_password_policy() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSchema"></a>

```python
def reset_schema() -> None
```

##### `reset_sms_authentication_message` <a name="reset_sms_authentication_message" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSmsAuthenticationMessage"></a>

```python
def reset_sms_authentication_message() -> None
```

##### `reset_sms_configuration` <a name="reset_sms_configuration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSmsConfiguration"></a>

```python
def reset_sms_configuration() -> None
```

##### `reset_sms_verification_message` <a name="reset_sms_verification_message" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSmsVerificationMessage"></a>

```python
def reset_sms_verification_message() -> None
```

##### `reset_software_token_mfa_configuration` <a name="reset_software_token_mfa_configuration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSoftwareTokenMfaConfiguration"></a>

```python
def reset_software_token_mfa_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_user_attribute_update_settings` <a name="reset_user_attribute_update_settings" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetUserAttributeUpdateSettings"></a>

```python
def reset_user_attribute_update_settings() -> None
```

##### `reset_username_attributes` <a name="reset_username_attributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetUsernameAttributes"></a>

```python
def reset_username_attributes() -> None
```

##### `reset_username_configuration` <a name="reset_username_configuration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetUsernameConfiguration"></a>

```python
def reset_username_configuration() -> None
```

##### `reset_user_pool_add_ons` <a name="reset_user_pool_add_ons" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetUserPoolAddOns"></a>

```python
def reset_user_pool_add_ons() -> None
```

##### `reset_verification_message_template` <a name="reset_verification_message_template" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetVerificationMessageTemplate"></a>

```python
def reset_verification_message_template() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPool.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.accountRecoverySetting">account_recovery_setting</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference">CognitoUserPoolAccountRecoverySettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.adminCreateUserConfig">admin_create_user_config</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference">CognitoUserPoolAdminCreateUserConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.creationDate">creation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.customDomain">custom_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deviceConfiguration">device_configuration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference">CognitoUserPoolDeviceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailConfiguration">email_configuration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference">CognitoUserPoolEmailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.estimatedNumberOfUsers">estimated_number_of_users</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lambdaConfig">lambda_config</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference">CognitoUserPoolLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lastModifiedDate">last_modified_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.passwordPolicy">password_policy</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference">CognitoUserPoolPasswordPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.schema">schema</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList">CognitoUserPoolSchemaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsConfiguration">sms_configuration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference">CognitoUserPoolSmsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.softwareTokenMfaConfiguration">software_token_mfa_configuration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference">CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userAttributeUpdateSettings">user_attribute_update_settings</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference">CognitoUserPoolUserAttributeUpdateSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameConfiguration">username_configuration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference">CognitoUserPoolUsernameConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userPoolAddOns">user_pool_add_ons</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference">CognitoUserPoolUserPoolAddOnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.verificationMessageTemplate">verification_message_template</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference">CognitoUserPoolVerificationMessageTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.accountRecoverySettingInput">account_recovery_setting_input</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.adminCreateUserConfigInput">admin_create_user_config_input</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.aliasAttributesInput">alias_attributes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.autoVerifiedAttributesInput">auto_verified_attributes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deletionProtectionInput">deletion_protection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deviceConfigurationInput">device_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailConfigurationInput">email_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationMessageInput">email_verification_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationSubjectInput">email_verification_subject_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lambdaConfigInput">lambda_config_input</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.mfaConfigurationInput">mfa_configuration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.passwordPolicyInput">password_policy_input</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.schemaInput">schema_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema">CognitoUserPoolSchema</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsAuthenticationMessageInput">sms_authentication_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsConfigurationInput">sms_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsVerificationMessageInput">sms_verification_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.softwareTokenMfaConfigurationInput">software_token_mfa_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userAttributeUpdateSettingsInput">user_attribute_update_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameAttributesInput">username_attributes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameConfigurationInput">username_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userPoolAddOnsInput">user_pool_add_ons_input</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.verificationMessageTemplateInput">verification_message_template_input</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.aliasAttributes">alias_attributes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.autoVerifiedAttributes">auto_verified_attributes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deletionProtection">deletion_protection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationMessage">email_verification_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationSubject">email_verification_subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.mfaConfiguration">mfa_configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsAuthenticationMessage">sms_authentication_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsVerificationMessage">sms_verification_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameAttributes">username_attributes</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_recovery_setting`<sup>Required</sup> <a name="account_recovery_setting" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.accountRecoverySetting"></a>

```python
account_recovery_setting: CognitoUserPoolAccountRecoverySettingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference">CognitoUserPoolAccountRecoverySettingOutputReference</a>

---

##### `admin_create_user_config`<sup>Required</sup> <a name="admin_create_user_config" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.adminCreateUserConfig"></a>

```python
admin_create_user_config: CognitoUserPoolAdminCreateUserConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference">CognitoUserPoolAdminCreateUserConfigOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_date`<sup>Required</sup> <a name="creation_date" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.creationDate"></a>

```python
creation_date: str
```

- *Type:* str

---

##### `custom_domain`<sup>Required</sup> <a name="custom_domain" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.customDomain"></a>

```python
custom_domain: str
```

- *Type:* str

---

##### `device_configuration`<sup>Required</sup> <a name="device_configuration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deviceConfiguration"></a>

```python
device_configuration: CognitoUserPoolDeviceConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference">CognitoUserPoolDeviceConfigurationOutputReference</a>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `email_configuration`<sup>Required</sup> <a name="email_configuration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailConfiguration"></a>

```python
email_configuration: CognitoUserPoolEmailConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference">CognitoUserPoolEmailConfigurationOutputReference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `estimated_number_of_users`<sup>Required</sup> <a name="estimated_number_of_users" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.estimatedNumberOfUsers"></a>

```python
estimated_number_of_users: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lambda_config`<sup>Required</sup> <a name="lambda_config" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lambdaConfig"></a>

```python
lambda_config: CognitoUserPoolLambdaConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference">CognitoUserPoolLambdaConfigOutputReference</a>

---

##### `last_modified_date`<sup>Required</sup> <a name="last_modified_date" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lastModifiedDate"></a>

```python
last_modified_date: str
```

- *Type:* str

---

##### `password_policy`<sup>Required</sup> <a name="password_policy" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.passwordPolicy"></a>

```python
password_policy: CognitoUserPoolPasswordPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference">CognitoUserPoolPasswordPolicyOutputReference</a>

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.schema"></a>

```python
schema: CognitoUserPoolSchemaList
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList">CognitoUserPoolSchemaList</a>

---

##### `sms_configuration`<sup>Required</sup> <a name="sms_configuration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsConfiguration"></a>

```python
sms_configuration: CognitoUserPoolSmsConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference">CognitoUserPoolSmsConfigurationOutputReference</a>

---

##### `software_token_mfa_configuration`<sup>Required</sup> <a name="software_token_mfa_configuration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.softwareTokenMfaConfiguration"></a>

```python
software_token_mfa_configuration: CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference">CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference</a>

---

##### `user_attribute_update_settings`<sup>Required</sup> <a name="user_attribute_update_settings" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userAttributeUpdateSettings"></a>

```python
user_attribute_update_settings: CognitoUserPoolUserAttributeUpdateSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference">CognitoUserPoolUserAttributeUpdateSettingsOutputReference</a>

---

##### `username_configuration`<sup>Required</sup> <a name="username_configuration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameConfiguration"></a>

```python
username_configuration: CognitoUserPoolUsernameConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference">CognitoUserPoolUsernameConfigurationOutputReference</a>

---

##### `user_pool_add_ons`<sup>Required</sup> <a name="user_pool_add_ons" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userPoolAddOns"></a>

```python
user_pool_add_ons: CognitoUserPoolUserPoolAddOnsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference">CognitoUserPoolUserPoolAddOnsOutputReference</a>

---

##### `verification_message_template`<sup>Required</sup> <a name="verification_message_template" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.verificationMessageTemplate"></a>

```python
verification_message_template: CognitoUserPoolVerificationMessageTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference">CognitoUserPoolVerificationMessageTemplateOutputReference</a>

---

##### `account_recovery_setting_input`<sup>Optional</sup> <a name="account_recovery_setting_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.accountRecoverySettingInput"></a>

```python
account_recovery_setting_input: CognitoUserPoolAccountRecoverySetting
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a>

---

##### `admin_create_user_config_input`<sup>Optional</sup> <a name="admin_create_user_config_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.adminCreateUserConfigInput"></a>

```python
admin_create_user_config_input: CognitoUserPoolAdminCreateUserConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a>

---

##### `alias_attributes_input`<sup>Optional</sup> <a name="alias_attributes_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.aliasAttributesInput"></a>

```python
alias_attributes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `auto_verified_attributes_input`<sup>Optional</sup> <a name="auto_verified_attributes_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.autoVerifiedAttributesInput"></a>

```python
auto_verified_attributes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deletion_protection_input`<sup>Optional</sup> <a name="deletion_protection_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deletionProtectionInput"></a>

```python
deletion_protection_input: str
```

- *Type:* str

---

##### `device_configuration_input`<sup>Optional</sup> <a name="device_configuration_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deviceConfigurationInput"></a>

```python
device_configuration_input: CognitoUserPoolDeviceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a>

---

##### `email_configuration_input`<sup>Optional</sup> <a name="email_configuration_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailConfigurationInput"></a>

```python
email_configuration_input: CognitoUserPoolEmailConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a>

---

##### `email_verification_message_input`<sup>Optional</sup> <a name="email_verification_message_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationMessageInput"></a>

```python
email_verification_message_input: str
```

- *Type:* str

---

##### `email_verification_subject_input`<sup>Optional</sup> <a name="email_verification_subject_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationSubjectInput"></a>

```python
email_verification_subject_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lambda_config_input`<sup>Optional</sup> <a name="lambda_config_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lambdaConfigInput"></a>

```python
lambda_config_input: CognitoUserPoolLambdaConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a>

---

##### `mfa_configuration_input`<sup>Optional</sup> <a name="mfa_configuration_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.mfaConfigurationInput"></a>

```python
mfa_configuration_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `password_policy_input`<sup>Optional</sup> <a name="password_policy_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.passwordPolicyInput"></a>

```python
password_policy_input: CognitoUserPoolPasswordPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a>

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.schemaInput"></a>

```python
schema_input: typing.Union[IResolvable, typing.List[CognitoUserPoolSchema]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema">CognitoUserPoolSchema</a>]]

---

##### `sms_authentication_message_input`<sup>Optional</sup> <a name="sms_authentication_message_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsAuthenticationMessageInput"></a>

```python
sms_authentication_message_input: str
```

- *Type:* str

---

##### `sms_configuration_input`<sup>Optional</sup> <a name="sms_configuration_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsConfigurationInput"></a>

```python
sms_configuration_input: CognitoUserPoolSmsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a>

---

##### `sms_verification_message_input`<sup>Optional</sup> <a name="sms_verification_message_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsVerificationMessageInput"></a>

```python
sms_verification_message_input: str
```

- *Type:* str

---

##### `software_token_mfa_configuration_input`<sup>Optional</sup> <a name="software_token_mfa_configuration_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.softwareTokenMfaConfigurationInput"></a>

```python
software_token_mfa_configuration_input: CognitoUserPoolSoftwareTokenMfaConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `user_attribute_update_settings_input`<sup>Optional</sup> <a name="user_attribute_update_settings_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userAttributeUpdateSettingsInput"></a>

```python
user_attribute_update_settings_input: CognitoUserPoolUserAttributeUpdateSettings
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a>

---

##### `username_attributes_input`<sup>Optional</sup> <a name="username_attributes_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameAttributesInput"></a>

```python
username_attributes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `username_configuration_input`<sup>Optional</sup> <a name="username_configuration_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameConfigurationInput"></a>

```python
username_configuration_input: CognitoUserPoolUsernameConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a>

---

##### `user_pool_add_ons_input`<sup>Optional</sup> <a name="user_pool_add_ons_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userPoolAddOnsInput"></a>

```python
user_pool_add_ons_input: CognitoUserPoolUserPoolAddOns
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a>

---

##### `verification_message_template_input`<sup>Optional</sup> <a name="verification_message_template_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.verificationMessageTemplateInput"></a>

```python
verification_message_template_input: CognitoUserPoolVerificationMessageTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a>

---

##### `alias_attributes`<sup>Required</sup> <a name="alias_attributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.aliasAttributes"></a>

```python
alias_attributes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `auto_verified_attributes`<sup>Required</sup> <a name="auto_verified_attributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.autoVerifiedAttributes"></a>

```python
auto_verified_attributes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deletionProtection"></a>

```python
deletion_protection: str
```

- *Type:* str

---

##### `email_verification_message`<sup>Required</sup> <a name="email_verification_message" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationMessage"></a>

```python
email_verification_message: str
```

- *Type:* str

---

##### `email_verification_subject`<sup>Required</sup> <a name="email_verification_subject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationSubject"></a>

```python
email_verification_subject: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mfa_configuration`<sup>Required</sup> <a name="mfa_configuration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.mfaConfiguration"></a>

```python
mfa_configuration: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sms_authentication_message`<sup>Required</sup> <a name="sms_authentication_message" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsAuthenticationMessage"></a>

```python
sms_authentication_message: str
```

- *Type:* str

---

##### `sms_verification_message`<sup>Required</sup> <a name="sms_verification_message" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsVerificationMessage"></a>

```python
sms_verification_message: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `username_attributes`<sup>Required</sup> <a name="username_attributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameAttributes"></a>

```python
username_attributes: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolAccountRecoverySetting <a name="CognitoUserPoolAccountRecoverySetting" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolAccountRecoverySetting(
  recovery_mechanism: typing.Union[IResolvable, typing.List[CognitoUserPoolAccountRecoverySettingRecoveryMechanism]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting.property.recoveryMechanism">recovery_mechanism</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism">CognitoUserPoolAccountRecoverySettingRecoveryMechanism</a>]]</code> | recovery_mechanism block. |

---

##### `recovery_mechanism`<sup>Required</sup> <a name="recovery_mechanism" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting.property.recoveryMechanism"></a>

```python
recovery_mechanism: typing.Union[IResolvable, typing.List[CognitoUserPoolAccountRecoverySettingRecoveryMechanism]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism">CognitoUserPoolAccountRecoverySettingRecoveryMechanism</a>]]

recovery_mechanism block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#recovery_mechanism CognitoUserPool#recovery_mechanism}

---

### CognitoUserPoolAccountRecoverySettingRecoveryMechanism <a name="CognitoUserPoolAccountRecoverySettingRecoveryMechanism" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism(
  name: str,
  priority: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#priority CognitoUserPool#priority}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#priority CognitoUserPool#priority}.

---

### CognitoUserPoolAdminCreateUserConfig <a name="CognitoUserPoolAdminCreateUserConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolAdminCreateUserConfig(
  allow_admin_create_user_only: typing.Union[bool, IResolvable] = None,
  invite_message_template: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig.property.allowAdminCreateUserOnly">allow_admin_create_user_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#allow_admin_create_user_only CognitoUserPool#allow_admin_create_user_only}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig.property.inviteMessageTemplate">invite_message_template</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a></code> | invite_message_template block. |

---

##### `allow_admin_create_user_only`<sup>Optional</sup> <a name="allow_admin_create_user_only" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig.property.allowAdminCreateUserOnly"></a>

```python
allow_admin_create_user_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#allow_admin_create_user_only CognitoUserPool#allow_admin_create_user_only}.

---

##### `invite_message_template`<sup>Optional</sup> <a name="invite_message_template" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig.property.inviteMessageTemplate"></a>

```python
invite_message_template: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a>

invite_message_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#invite_message_template CognitoUserPool#invite_message_template}

---

### CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate <a name="CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate(
  email_message: str = None,
  email_subject: str = None,
  sms_message: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.property.emailMessage">email_message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message CognitoUserPool#email_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.property.emailSubject">email_subject</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject CognitoUserPool#email_subject}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.property.smsMessage">sms_message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_message CognitoUserPool#sms_message}. |

---

##### `email_message`<sup>Optional</sup> <a name="email_message" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.property.emailMessage"></a>

```python
email_message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message CognitoUserPool#email_message}.

---

##### `email_subject`<sup>Optional</sup> <a name="email_subject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.property.emailSubject"></a>

```python
email_subject: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject CognitoUserPool#email_subject}.

---

##### `sms_message`<sup>Optional</sup> <a name="sms_message" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.property.smsMessage"></a>

```python
sms_message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_message CognitoUserPool#sms_message}.

---

### CognitoUserPoolConfig <a name="CognitoUserPoolConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  account_recovery_setting: CognitoUserPoolAccountRecoverySetting = None,
  admin_create_user_config: CognitoUserPoolAdminCreateUserConfig = None,
  alias_attributes: typing.List[str] = None,
  auto_verified_attributes: typing.List[str] = None,
  deletion_protection: str = None,
  device_configuration: CognitoUserPoolDeviceConfiguration = None,
  email_configuration: CognitoUserPoolEmailConfiguration = None,
  email_verification_message: str = None,
  email_verification_subject: str = None,
  id: str = None,
  lambda_config: CognitoUserPoolLambdaConfig = None,
  mfa_configuration: str = None,
  password_policy: CognitoUserPoolPasswordPolicy = None,
  schema: typing.Union[IResolvable, typing.List[CognitoUserPoolSchema]] = None,
  sms_authentication_message: str = None,
  sms_configuration: CognitoUserPoolSmsConfiguration = None,
  sms_verification_message: str = None,
  software_token_mfa_configuration: CognitoUserPoolSoftwareTokenMfaConfiguration = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  user_attribute_update_settings: CognitoUserPoolUserAttributeUpdateSettings = None,
  username_attributes: typing.List[str] = None,
  username_configuration: CognitoUserPoolUsernameConfiguration = None,
  user_pool_add_ons: CognitoUserPoolUserPoolAddOns = None,
  verification_message_template: CognitoUserPoolVerificationMessageTemplate = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.accountRecoverySetting">account_recovery_setting</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a></code> | account_recovery_setting block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.adminCreateUserConfig">admin_create_user_config</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a></code> | admin_create_user_config block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.aliasAttributes">alias_attributes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#alias_attributes CognitoUserPool#alias_attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.autoVerifiedAttributes">auto_verified_attributes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#auto_verified_attributes CognitoUserPool#auto_verified_attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.deletionProtection">deletion_protection</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#deletion_protection CognitoUserPool#deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.deviceConfiguration">device_configuration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a></code> | device_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.emailConfiguration">email_configuration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a></code> | email_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.emailVerificationMessage">email_verification_message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_verification_message CognitoUserPool#email_verification_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.emailVerificationSubject">email_verification_subject</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_verification_subject CognitoUserPool#email_verification_subject}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#id CognitoUserPool#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.lambdaConfig">lambda_config</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a></code> | lambda_config block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.mfaConfiguration">mfa_configuration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#mfa_configuration CognitoUserPool#mfa_configuration}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.passwordPolicy">password_policy</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a></code> | password_policy block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.schema">schema</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema">CognitoUserPoolSchema</a>]]</code> | schema block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.smsAuthenticationMessage">sms_authentication_message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_authentication_message CognitoUserPool#sms_authentication_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.smsConfiguration">sms_configuration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a></code> | sms_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.smsVerificationMessage">sms_verification_message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_verification_message CognitoUserPool#sms_verification_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.softwareTokenMfaConfiguration">software_token_mfa_configuration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a></code> | software_token_mfa_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#tags CognitoUserPool#tags}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#tags_all CognitoUserPool#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.userAttributeUpdateSettings">user_attribute_update_settings</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a></code> | user_attribute_update_settings block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.usernameAttributes">username_attributes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#username_attributes CognitoUserPool#username_attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.usernameConfiguration">username_configuration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a></code> | username_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.userPoolAddOns">user_pool_add_ons</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a></code> | user_pool_add_ons block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.verificationMessageTemplate">verification_message_template</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a></code> | verification_message_template block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}.

---

##### `account_recovery_setting`<sup>Optional</sup> <a name="account_recovery_setting" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.accountRecoverySetting"></a>

```python
account_recovery_setting: CognitoUserPoolAccountRecoverySetting
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a>

account_recovery_setting block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#account_recovery_setting CognitoUserPool#account_recovery_setting}

---

##### `admin_create_user_config`<sup>Optional</sup> <a name="admin_create_user_config" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.adminCreateUserConfig"></a>

```python
admin_create_user_config: CognitoUserPoolAdminCreateUserConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a>

admin_create_user_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#admin_create_user_config CognitoUserPool#admin_create_user_config}

---

##### `alias_attributes`<sup>Optional</sup> <a name="alias_attributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.aliasAttributes"></a>

```python
alias_attributes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#alias_attributes CognitoUserPool#alias_attributes}.

---

##### `auto_verified_attributes`<sup>Optional</sup> <a name="auto_verified_attributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.autoVerifiedAttributes"></a>

```python
auto_verified_attributes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#auto_verified_attributes CognitoUserPool#auto_verified_attributes}.

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.deletionProtection"></a>

```python
deletion_protection: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#deletion_protection CognitoUserPool#deletion_protection}.

---

##### `device_configuration`<sup>Optional</sup> <a name="device_configuration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.deviceConfiguration"></a>

```python
device_configuration: CognitoUserPoolDeviceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a>

device_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#device_configuration CognitoUserPool#device_configuration}

---

##### `email_configuration`<sup>Optional</sup> <a name="email_configuration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.emailConfiguration"></a>

```python
email_configuration: CognitoUserPoolEmailConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a>

email_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_configuration CognitoUserPool#email_configuration}

---

##### `email_verification_message`<sup>Optional</sup> <a name="email_verification_message" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.emailVerificationMessage"></a>

```python
email_verification_message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_verification_message CognitoUserPool#email_verification_message}.

---

##### `email_verification_subject`<sup>Optional</sup> <a name="email_verification_subject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.emailVerificationSubject"></a>

```python
email_verification_subject: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_verification_subject CognitoUserPool#email_verification_subject}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#id CognitoUserPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lambda_config`<sup>Optional</sup> <a name="lambda_config" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.lambdaConfig"></a>

```python
lambda_config: CognitoUserPoolLambdaConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a>

lambda_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_config CognitoUserPool#lambda_config}

---

##### `mfa_configuration`<sup>Optional</sup> <a name="mfa_configuration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.mfaConfiguration"></a>

```python
mfa_configuration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#mfa_configuration CognitoUserPool#mfa_configuration}.

---

##### `password_policy`<sup>Optional</sup> <a name="password_policy" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.passwordPolicy"></a>

```python
password_policy: CognitoUserPoolPasswordPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a>

password_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#password_policy CognitoUserPool#password_policy}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.schema"></a>

```python
schema: typing.Union[IResolvable, typing.List[CognitoUserPoolSchema]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema">CognitoUserPoolSchema</a>]]

schema block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#schema CognitoUserPool#schema}

---

##### `sms_authentication_message`<sup>Optional</sup> <a name="sms_authentication_message" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.smsAuthenticationMessage"></a>

```python
sms_authentication_message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_authentication_message CognitoUserPool#sms_authentication_message}.

---

##### `sms_configuration`<sup>Optional</sup> <a name="sms_configuration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.smsConfiguration"></a>

```python
sms_configuration: CognitoUserPoolSmsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a>

sms_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_configuration CognitoUserPool#sms_configuration}

---

##### `sms_verification_message`<sup>Optional</sup> <a name="sms_verification_message" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.smsVerificationMessage"></a>

```python
sms_verification_message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_verification_message CognitoUserPool#sms_verification_message}.

---

##### `software_token_mfa_configuration`<sup>Optional</sup> <a name="software_token_mfa_configuration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.softwareTokenMfaConfiguration"></a>

```python
software_token_mfa_configuration: CognitoUserPoolSoftwareTokenMfaConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a>

software_token_mfa_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#software_token_mfa_configuration CognitoUserPool#software_token_mfa_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#tags CognitoUserPool#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#tags_all CognitoUserPool#tags_all}.

---

##### `user_attribute_update_settings`<sup>Optional</sup> <a name="user_attribute_update_settings" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.userAttributeUpdateSettings"></a>

```python
user_attribute_update_settings: CognitoUserPoolUserAttributeUpdateSettings
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a>

user_attribute_update_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#user_attribute_update_settings CognitoUserPool#user_attribute_update_settings}

---

##### `username_attributes`<sup>Optional</sup> <a name="username_attributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.usernameAttributes"></a>

```python
username_attributes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#username_attributes CognitoUserPool#username_attributes}.

---

##### `username_configuration`<sup>Optional</sup> <a name="username_configuration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.usernameConfiguration"></a>

```python
username_configuration: CognitoUserPoolUsernameConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a>

username_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#username_configuration CognitoUserPool#username_configuration}

---

##### `user_pool_add_ons`<sup>Optional</sup> <a name="user_pool_add_ons" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.userPoolAddOns"></a>

```python
user_pool_add_ons: CognitoUserPoolUserPoolAddOns
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a>

user_pool_add_ons block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#user_pool_add_ons CognitoUserPool#user_pool_add_ons}

---

##### `verification_message_template`<sup>Optional</sup> <a name="verification_message_template" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.verificationMessageTemplate"></a>

```python
verification_message_template: CognitoUserPoolVerificationMessageTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a>

verification_message_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#verification_message_template CognitoUserPool#verification_message_template}

---

### CognitoUserPoolDeviceConfiguration <a name="CognitoUserPoolDeviceConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolDeviceConfiguration(
  challenge_required_on_new_device: typing.Union[bool, IResolvable] = None,
  device_only_remembered_on_user_prompt: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration.property.challengeRequiredOnNewDevice">challenge_required_on_new_device</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#challenge_required_on_new_device CognitoUserPool#challenge_required_on_new_device}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration.property.deviceOnlyRememberedOnUserPrompt">device_only_remembered_on_user_prompt</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#device_only_remembered_on_user_prompt CognitoUserPool#device_only_remembered_on_user_prompt}. |

---

##### `challenge_required_on_new_device`<sup>Optional</sup> <a name="challenge_required_on_new_device" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration.property.challengeRequiredOnNewDevice"></a>

```python
challenge_required_on_new_device: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#challenge_required_on_new_device CognitoUserPool#challenge_required_on_new_device}.

---

##### `device_only_remembered_on_user_prompt`<sup>Optional</sup> <a name="device_only_remembered_on_user_prompt" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration.property.deviceOnlyRememberedOnUserPrompt"></a>

```python
device_only_remembered_on_user_prompt: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#device_only_remembered_on_user_prompt CognitoUserPool#device_only_remembered_on_user_prompt}.

---

### CognitoUserPoolEmailConfiguration <a name="CognitoUserPoolEmailConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolEmailConfiguration(
  configuration_set: str = None,
  email_sending_account: str = None,
  from_email_address: str = None,
  reply_to_email_address: str = None,
  source_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.configurationSet">configuration_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#configuration_set CognitoUserPool#configuration_set}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.emailSendingAccount">email_sending_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_sending_account CognitoUserPool#email_sending_account}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.fromEmailAddress">from_email_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#from_email_address CognitoUserPool#from_email_address}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.replyToEmailAddress">reply_to_email_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#reply_to_email_address CognitoUserPool#reply_to_email_address}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.sourceArn">source_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#source_arn CognitoUserPool#source_arn}. |

---

##### `configuration_set`<sup>Optional</sup> <a name="configuration_set" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.configurationSet"></a>

```python
configuration_set: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#configuration_set CognitoUserPool#configuration_set}.

---

##### `email_sending_account`<sup>Optional</sup> <a name="email_sending_account" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.emailSendingAccount"></a>

```python
email_sending_account: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_sending_account CognitoUserPool#email_sending_account}.

---

##### `from_email_address`<sup>Optional</sup> <a name="from_email_address" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.fromEmailAddress"></a>

```python
from_email_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#from_email_address CognitoUserPool#from_email_address}.

---

##### `reply_to_email_address`<sup>Optional</sup> <a name="reply_to_email_address" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.replyToEmailAddress"></a>

```python
reply_to_email_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#reply_to_email_address CognitoUserPool#reply_to_email_address}.

---

##### `source_arn`<sup>Optional</sup> <a name="source_arn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.sourceArn"></a>

```python
source_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#source_arn CognitoUserPool#source_arn}.

---

### CognitoUserPoolLambdaConfig <a name="CognitoUserPoolLambdaConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolLambdaConfig(
  create_auth_challenge: str = None,
  custom_email_sender: CognitoUserPoolLambdaConfigCustomEmailSender = None,
  custom_message: str = None,
  custom_sms_sender: CognitoUserPoolLambdaConfigCustomSmsSender = None,
  define_auth_challenge: str = None,
  kms_key_id: str = None,
  post_authentication: str = None,
  post_confirmation: str = None,
  pre_authentication: str = None,
  pre_sign_up: str = None,
  pre_token_generation: str = None,
  user_migration: str = None,
  verify_auth_challenge_response: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.createAuthChallenge">create_auth_challenge</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#create_auth_challenge CognitoUserPool#create_auth_challenge}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.customEmailSender">custom_email_sender</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a></code> | custom_email_sender block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.customMessage">custom_message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#custom_message CognitoUserPool#custom_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.customSmsSender">custom_sms_sender</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a></code> | custom_sms_sender block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.defineAuthChallenge">define_auth_challenge</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#define_auth_challenge CognitoUserPool#define_auth_challenge}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#kms_key_id CognitoUserPool#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.postAuthentication">post_authentication</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#post_authentication CognitoUserPool#post_authentication}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.postConfirmation">post_confirmation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#post_confirmation CognitoUserPool#post_confirmation}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.preAuthentication">pre_authentication</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_authentication CognitoUserPool#pre_authentication}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.preSignUp">pre_sign_up</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_sign_up CognitoUserPool#pre_sign_up}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.preTokenGeneration">pre_token_generation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_token_generation CognitoUserPool#pre_token_generation}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.userMigration">user_migration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#user_migration CognitoUserPool#user_migration}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.verifyAuthChallengeResponse">verify_auth_challenge_response</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#verify_auth_challenge_response CognitoUserPool#verify_auth_challenge_response}. |

---

##### `create_auth_challenge`<sup>Optional</sup> <a name="create_auth_challenge" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.createAuthChallenge"></a>

```python
create_auth_challenge: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#create_auth_challenge CognitoUserPool#create_auth_challenge}.

---

##### `custom_email_sender`<sup>Optional</sup> <a name="custom_email_sender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.customEmailSender"></a>

```python
custom_email_sender: CognitoUserPoolLambdaConfigCustomEmailSender
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a>

custom_email_sender block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#custom_email_sender CognitoUserPool#custom_email_sender}

---

##### `custom_message`<sup>Optional</sup> <a name="custom_message" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.customMessage"></a>

```python
custom_message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#custom_message CognitoUserPool#custom_message}.

---

##### `custom_sms_sender`<sup>Optional</sup> <a name="custom_sms_sender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.customSmsSender"></a>

```python
custom_sms_sender: CognitoUserPoolLambdaConfigCustomSmsSender
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a>

custom_sms_sender block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#custom_sms_sender CognitoUserPool#custom_sms_sender}

---

##### `define_auth_challenge`<sup>Optional</sup> <a name="define_auth_challenge" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.defineAuthChallenge"></a>

```python
define_auth_challenge: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#define_auth_challenge CognitoUserPool#define_auth_challenge}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#kms_key_id CognitoUserPool#kms_key_id}.

---

##### `post_authentication`<sup>Optional</sup> <a name="post_authentication" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.postAuthentication"></a>

```python
post_authentication: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#post_authentication CognitoUserPool#post_authentication}.

---

##### `post_confirmation`<sup>Optional</sup> <a name="post_confirmation" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.postConfirmation"></a>

```python
post_confirmation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#post_confirmation CognitoUserPool#post_confirmation}.

---

##### `pre_authentication`<sup>Optional</sup> <a name="pre_authentication" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.preAuthentication"></a>

```python
pre_authentication: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_authentication CognitoUserPool#pre_authentication}.

---

##### `pre_sign_up`<sup>Optional</sup> <a name="pre_sign_up" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.preSignUp"></a>

```python
pre_sign_up: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_sign_up CognitoUserPool#pre_sign_up}.

---

##### `pre_token_generation`<sup>Optional</sup> <a name="pre_token_generation" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.preTokenGeneration"></a>

```python
pre_token_generation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_token_generation CognitoUserPool#pre_token_generation}.

---

##### `user_migration`<sup>Optional</sup> <a name="user_migration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.userMigration"></a>

```python
user_migration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#user_migration CognitoUserPool#user_migration}.

---

##### `verify_auth_challenge_response`<sup>Optional</sup> <a name="verify_auth_challenge_response" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.verifyAuthChallengeResponse"></a>

```python
verify_auth_challenge_response: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#verify_auth_challenge_response CognitoUserPool#verify_auth_challenge_response}.

---

### CognitoUserPoolLambdaConfigCustomEmailSender <a name="CognitoUserPoolLambdaConfigCustomEmailSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender(
  lambda_arn: str,
  lambda_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_arn CognitoUserPool#lambda_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender.property.lambdaVersion">lambda_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_version CognitoUserPool#lambda_version}. |

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_arn CognitoUserPool#lambda_arn}.

---

##### `lambda_version`<sup>Required</sup> <a name="lambda_version" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender.property.lambdaVersion"></a>

```python
lambda_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_version CognitoUserPool#lambda_version}.

---

### CognitoUserPoolLambdaConfigCustomSmsSender <a name="CognitoUserPoolLambdaConfigCustomSmsSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender(
  lambda_arn: str,
  lambda_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_arn CognitoUserPool#lambda_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender.property.lambdaVersion">lambda_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_version CognitoUserPool#lambda_version}. |

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_arn CognitoUserPool#lambda_arn}.

---

##### `lambda_version`<sup>Required</sup> <a name="lambda_version" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender.property.lambdaVersion"></a>

```python
lambda_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_version CognitoUserPool#lambda_version}.

---

### CognitoUserPoolPasswordPolicy <a name="CognitoUserPoolPasswordPolicy" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolPasswordPolicy(
  minimum_length: typing.Union[int, float] = None,
  require_lowercase: typing.Union[bool, IResolvable] = None,
  require_numbers: typing.Union[bool, IResolvable] = None,
  require_symbols: typing.Union[bool, IResolvable] = None,
  require_uppercase: typing.Union[bool, IResolvable] = None,
  temporary_password_validity_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.minimumLength">minimum_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#minimum_length CognitoUserPool#minimum_length}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireLowercase">require_lowercase</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_lowercase CognitoUserPool#require_lowercase}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireNumbers">require_numbers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_numbers CognitoUserPool#require_numbers}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireSymbols">require_symbols</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_symbols CognitoUserPool#require_symbols}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireUppercase">require_uppercase</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_uppercase CognitoUserPool#require_uppercase}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.temporaryPasswordValidityDays">temporary_password_validity_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#temporary_password_validity_days CognitoUserPool#temporary_password_validity_days}. |

---

##### `minimum_length`<sup>Optional</sup> <a name="minimum_length" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.minimumLength"></a>

```python
minimum_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#minimum_length CognitoUserPool#minimum_length}.

---

##### `require_lowercase`<sup>Optional</sup> <a name="require_lowercase" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireLowercase"></a>

```python
require_lowercase: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_lowercase CognitoUserPool#require_lowercase}.

---

##### `require_numbers`<sup>Optional</sup> <a name="require_numbers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireNumbers"></a>

```python
require_numbers: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_numbers CognitoUserPool#require_numbers}.

---

##### `require_symbols`<sup>Optional</sup> <a name="require_symbols" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireSymbols"></a>

```python
require_symbols: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_symbols CognitoUserPool#require_symbols}.

---

##### `require_uppercase`<sup>Optional</sup> <a name="require_uppercase" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireUppercase"></a>

```python
require_uppercase: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_uppercase CognitoUserPool#require_uppercase}.

---

##### `temporary_password_validity_days`<sup>Optional</sup> <a name="temporary_password_validity_days" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.temporaryPasswordValidityDays"></a>

```python
temporary_password_validity_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#temporary_password_validity_days CognitoUserPool#temporary_password_validity_days}.

---

### CognitoUserPoolSchema <a name="CognitoUserPoolSchema" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolSchema(
  attribute_data_type: str,
  name: str,
  developer_only_attribute: typing.Union[bool, IResolvable] = None,
  mutable: typing.Union[bool, IResolvable] = None,
  number_attribute_constraints: CognitoUserPoolSchemaNumberAttributeConstraints = None,
  required: typing.Union[bool, IResolvable] = None,
  string_attribute_constraints: CognitoUserPoolSchemaStringAttributeConstraints = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.attributeDataType">attribute_data_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#attribute_data_type CognitoUserPool#attribute_data_type}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.developerOnlyAttribute">developer_only_attribute</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#developer_only_attribute CognitoUserPool#developer_only_attribute}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.mutable">mutable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#mutable CognitoUserPool#mutable}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.numberAttributeConstraints">number_attribute_constraints</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints">CognitoUserPoolSchemaNumberAttributeConstraints</a></code> | number_attribute_constraints block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#required CognitoUserPool#required}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.stringAttributeConstraints">string_attribute_constraints</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints">CognitoUserPoolSchemaStringAttributeConstraints</a></code> | string_attribute_constraints block. |

---

##### `attribute_data_type`<sup>Required</sup> <a name="attribute_data_type" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.attributeDataType"></a>

```python
attribute_data_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#attribute_data_type CognitoUserPool#attribute_data_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}.

---

##### `developer_only_attribute`<sup>Optional</sup> <a name="developer_only_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.developerOnlyAttribute"></a>

```python
developer_only_attribute: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#developer_only_attribute CognitoUserPool#developer_only_attribute}.

---

##### `mutable`<sup>Optional</sup> <a name="mutable" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.mutable"></a>

```python
mutable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#mutable CognitoUserPool#mutable}.

---

##### `number_attribute_constraints`<sup>Optional</sup> <a name="number_attribute_constraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.numberAttributeConstraints"></a>

```python
number_attribute_constraints: CognitoUserPoolSchemaNumberAttributeConstraints
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints">CognitoUserPoolSchemaNumberAttributeConstraints</a>

number_attribute_constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#number_attribute_constraints CognitoUserPool#number_attribute_constraints}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#required CognitoUserPool#required}.

---

##### `string_attribute_constraints`<sup>Optional</sup> <a name="string_attribute_constraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.stringAttributeConstraints"></a>

```python
string_attribute_constraints: CognitoUserPoolSchemaStringAttributeConstraints
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints">CognitoUserPoolSchemaStringAttributeConstraints</a>

string_attribute_constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#string_attribute_constraints CognitoUserPool#string_attribute_constraints}

---

### CognitoUserPoolSchemaNumberAttributeConstraints <a name="CognitoUserPoolSchemaNumberAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints(
  max_value: str = None,
  min_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints.property.maxValue">max_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#max_value CognitoUserPool#max_value}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints.property.minValue">min_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#min_value CognitoUserPool#min_value}. |

---

##### `max_value`<sup>Optional</sup> <a name="max_value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints.property.maxValue"></a>

```python
max_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#max_value CognitoUserPool#max_value}.

---

##### `min_value`<sup>Optional</sup> <a name="min_value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints.property.minValue"></a>

```python
min_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#min_value CognitoUserPool#min_value}.

---

### CognitoUserPoolSchemaStringAttributeConstraints <a name="CognitoUserPoolSchemaStringAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints(
  max_length: str = None,
  min_length: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints.property.maxLength">max_length</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#max_length CognitoUserPool#max_length}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints.property.minLength">min_length</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#min_length CognitoUserPool#min_length}. |

---

##### `max_length`<sup>Optional</sup> <a name="max_length" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints.property.maxLength"></a>

```python
max_length: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#max_length CognitoUserPool#max_length}.

---

##### `min_length`<sup>Optional</sup> <a name="min_length" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints.property.minLength"></a>

```python
min_length: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#min_length CognitoUserPool#min_length}.

---

### CognitoUserPoolSmsConfiguration <a name="CognitoUserPoolSmsConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolSmsConfiguration(
  external_id: str,
  sns_caller_arn: str,
  sns_region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.property.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#external_id CognitoUserPool#external_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.property.snsCallerArn">sns_caller_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sns_caller_arn CognitoUserPool#sns_caller_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.property.snsRegion">sns_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sns_region CognitoUserPool#sns_region}. |

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#external_id CognitoUserPool#external_id}.

---

##### `sns_caller_arn`<sup>Required</sup> <a name="sns_caller_arn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.property.snsCallerArn"></a>

```python
sns_caller_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sns_caller_arn CognitoUserPool#sns_caller_arn}.

---

##### `sns_region`<sup>Optional</sup> <a name="sns_region" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.property.snsRegion"></a>

```python
sns_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sns_region CognitoUserPool#sns_region}.

---

### CognitoUserPoolSoftwareTokenMfaConfiguration <a name="CognitoUserPoolSoftwareTokenMfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration(
  enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#enabled CognitoUserPool#enabled}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#enabled CognitoUserPool#enabled}.

---

### CognitoUserPoolUserAttributeUpdateSettings <a name="CognitoUserPoolUserAttributeUpdateSettings" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings(
  attributes_require_verification_before_update: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings.property.attributesRequireVerificationBeforeUpdate">attributes_require_verification_before_update</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#attributes_require_verification_before_update CognitoUserPool#attributes_require_verification_before_update}. |

---

##### `attributes_require_verification_before_update`<sup>Required</sup> <a name="attributes_require_verification_before_update" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings.property.attributesRequireVerificationBeforeUpdate"></a>

```python
attributes_require_verification_before_update: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#attributes_require_verification_before_update CognitoUserPool#attributes_require_verification_before_update}.

---

### CognitoUserPoolUsernameConfiguration <a name="CognitoUserPoolUsernameConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolUsernameConfiguration(
  case_sensitive: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration.property.caseSensitive">case_sensitive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#case_sensitive CognitoUserPool#case_sensitive}. |

---

##### `case_sensitive`<sup>Required</sup> <a name="case_sensitive" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration.property.caseSensitive"></a>

```python
case_sensitive: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#case_sensitive CognitoUserPool#case_sensitive}.

---

### CognitoUserPoolUserPoolAddOns <a name="CognitoUserPoolUserPoolAddOns" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolUserPoolAddOns(
  advanced_security_mode: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns.property.advancedSecurityMode">advanced_security_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#advanced_security_mode CognitoUserPool#advanced_security_mode}. |

---

##### `advanced_security_mode`<sup>Required</sup> <a name="advanced_security_mode" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns.property.advancedSecurityMode"></a>

```python
advanced_security_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#advanced_security_mode CognitoUserPool#advanced_security_mode}.

---

### CognitoUserPoolVerificationMessageTemplate <a name="CognitoUserPoolVerificationMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolVerificationMessageTemplate(
  default_email_option: str = None,
  email_message: str = None,
  email_message_by_link: str = None,
  email_subject: str = None,
  email_subject_by_link: str = None,
  sms_message: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.defaultEmailOption">default_email_option</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#default_email_option CognitoUserPool#default_email_option}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailMessage">email_message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message CognitoUserPool#email_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailMessageByLink">email_message_by_link</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message_by_link CognitoUserPool#email_message_by_link}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailSubject">email_subject</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject CognitoUserPool#email_subject}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailSubjectByLink">email_subject_by_link</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject_by_link CognitoUserPool#email_subject_by_link}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.smsMessage">sms_message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_message CognitoUserPool#sms_message}. |

---

##### `default_email_option`<sup>Optional</sup> <a name="default_email_option" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.defaultEmailOption"></a>

```python
default_email_option: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#default_email_option CognitoUserPool#default_email_option}.

---

##### `email_message`<sup>Optional</sup> <a name="email_message" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailMessage"></a>

```python
email_message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message CognitoUserPool#email_message}.

---

##### `email_message_by_link`<sup>Optional</sup> <a name="email_message_by_link" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailMessageByLink"></a>

```python
email_message_by_link: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message_by_link CognitoUserPool#email_message_by_link}.

---

##### `email_subject`<sup>Optional</sup> <a name="email_subject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailSubject"></a>

```python
email_subject: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject CognitoUserPool#email_subject}.

---

##### `email_subject_by_link`<sup>Optional</sup> <a name="email_subject_by_link" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailSubjectByLink"></a>

```python
email_subject_by_link: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject_by_link CognitoUserPool#email_subject_by_link}.

---

##### `sms_message`<sup>Optional</sup> <a name="sms_message" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.smsMessage"></a>

```python
sms_message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_message CognitoUserPool#sms_message}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoUserPoolAccountRecoverySettingOutputReference <a name="CognitoUserPoolAccountRecoverySettingOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.putRecoveryMechanism">put_recovery_mechanism</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_recovery_mechanism` <a name="put_recovery_mechanism" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.putRecoveryMechanism"></a>

```python
def put_recovery_mechanism(
  value: typing.Union[IResolvable, typing.List[CognitoUserPoolAccountRecoverySettingRecoveryMechanism]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.putRecoveryMechanism.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism">CognitoUserPoolAccountRecoverySettingRecoveryMechanism</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.recoveryMechanism">recovery_mechanism</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList">CognitoUserPoolAccountRecoverySettingRecoveryMechanismList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.recoveryMechanismInput">recovery_mechanism_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism">CognitoUserPoolAccountRecoverySettingRecoveryMechanism</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `recovery_mechanism`<sup>Required</sup> <a name="recovery_mechanism" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.recoveryMechanism"></a>

```python
recovery_mechanism: CognitoUserPoolAccountRecoverySettingRecoveryMechanismList
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList">CognitoUserPoolAccountRecoverySettingRecoveryMechanismList</a>

---

##### `recovery_mechanism_input`<sup>Optional</sup> <a name="recovery_mechanism_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.recoveryMechanismInput"></a>

```python
recovery_mechanism_input: typing.Union[IResolvable, typing.List[CognitoUserPoolAccountRecoverySettingRecoveryMechanism]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism">CognitoUserPoolAccountRecoverySettingRecoveryMechanism</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.internalValue"></a>

```python
internal_value: CognitoUserPoolAccountRecoverySetting
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a>

---


### CognitoUserPoolAccountRecoverySettingRecoveryMechanismList <a name="CognitoUserPoolAccountRecoverySettingRecoveryMechanismList" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism">CognitoUserPoolAccountRecoverySettingRecoveryMechanism</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CognitoUserPoolAccountRecoverySettingRecoveryMechanism]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism">CognitoUserPoolAccountRecoverySettingRecoveryMechanism</a>]]

---


### CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference <a name="CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism">CognitoUserPoolAccountRecoverySettingRecoveryMechanism</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CognitoUserPoolAccountRecoverySettingRecoveryMechanism, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism">CognitoUserPoolAccountRecoverySettingRecoveryMechanism</a>, cdktf.IResolvable]

---


### CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference <a name="CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resetEmailMessage">reset_email_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resetEmailSubject">reset_email_subject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resetSmsMessage">reset_sms_message</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email_message` <a name="reset_email_message" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resetEmailMessage"></a>

```python
def reset_email_message() -> None
```

##### `reset_email_subject` <a name="reset_email_subject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resetEmailSubject"></a>

```python
def reset_email_subject() -> None
```

##### `reset_sms_message` <a name="reset_sms_message" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resetSmsMessage"></a>

```python
def reset_sms_message() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailMessageInput">email_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailSubjectInput">email_subject_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.smsMessageInput">sms_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailMessage">email_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailSubject">email_subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.smsMessage">sms_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_message_input`<sup>Optional</sup> <a name="email_message_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailMessageInput"></a>

```python
email_message_input: str
```

- *Type:* str

---

##### `email_subject_input`<sup>Optional</sup> <a name="email_subject_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailSubjectInput"></a>

```python
email_subject_input: str
```

- *Type:* str

---

##### `sms_message_input`<sup>Optional</sup> <a name="sms_message_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.smsMessageInput"></a>

```python
sms_message_input: str
```

- *Type:* str

---

##### `email_message`<sup>Required</sup> <a name="email_message" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailMessage"></a>

```python
email_message: str
```

- *Type:* str

---

##### `email_subject`<sup>Required</sup> <a name="email_subject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailSubject"></a>

```python
email_subject: str
```

- *Type:* str

---

##### `sms_message`<sup>Required</sup> <a name="sms_message" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.smsMessage"></a>

```python
sms_message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.internalValue"></a>

```python
internal_value: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a>

---


### CognitoUserPoolAdminCreateUserConfigOutputReference <a name="CognitoUserPoolAdminCreateUserConfigOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.putInviteMessageTemplate">put_invite_message_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.resetAllowAdminCreateUserOnly">reset_allow_admin_create_user_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.resetInviteMessageTemplate">reset_invite_message_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_invite_message_template` <a name="put_invite_message_template" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.putInviteMessageTemplate"></a>

```python
def put_invite_message_template(
  email_message: str = None,
  email_subject: str = None,
  sms_message: str = None
) -> None
```

###### `email_message`<sup>Optional</sup> <a name="email_message" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.putInviteMessageTemplate.parameter.emailMessage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message CognitoUserPool#email_message}.

---

###### `email_subject`<sup>Optional</sup> <a name="email_subject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.putInviteMessageTemplate.parameter.emailSubject"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject CognitoUserPool#email_subject}.

---

###### `sms_message`<sup>Optional</sup> <a name="sms_message" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.putInviteMessageTemplate.parameter.smsMessage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_message CognitoUserPool#sms_message}.

---

##### `reset_allow_admin_create_user_only` <a name="reset_allow_admin_create_user_only" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.resetAllowAdminCreateUserOnly"></a>

```python
def reset_allow_admin_create_user_only() -> None
```

##### `reset_invite_message_template` <a name="reset_invite_message_template" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.resetInviteMessageTemplate"></a>

```python
def reset_invite_message_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.inviteMessageTemplate">invite_message_template</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.allowAdminCreateUserOnlyInput">allow_admin_create_user_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.inviteMessageTemplateInput">invite_message_template_input</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.allowAdminCreateUserOnly">allow_admin_create_user_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `invite_message_template`<sup>Required</sup> <a name="invite_message_template" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.inviteMessageTemplate"></a>

```python
invite_message_template: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference</a>

---

##### `allow_admin_create_user_only_input`<sup>Optional</sup> <a name="allow_admin_create_user_only_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.allowAdminCreateUserOnlyInput"></a>

```python
allow_admin_create_user_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `invite_message_template_input`<sup>Optional</sup> <a name="invite_message_template_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.inviteMessageTemplateInput"></a>

```python
invite_message_template_input: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a>

---

##### `allow_admin_create_user_only`<sup>Required</sup> <a name="allow_admin_create_user_only" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.allowAdminCreateUserOnly"></a>

```python
allow_admin_create_user_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.internalValue"></a>

```python
internal_value: CognitoUserPoolAdminCreateUserConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a>

---


### CognitoUserPoolDeviceConfigurationOutputReference <a name="CognitoUserPoolDeviceConfigurationOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.resetChallengeRequiredOnNewDevice">reset_challenge_required_on_new_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.resetDeviceOnlyRememberedOnUserPrompt">reset_device_only_remembered_on_user_prompt</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_challenge_required_on_new_device` <a name="reset_challenge_required_on_new_device" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.resetChallengeRequiredOnNewDevice"></a>

```python
def reset_challenge_required_on_new_device() -> None
```

##### `reset_device_only_remembered_on_user_prompt` <a name="reset_device_only_remembered_on_user_prompt" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.resetDeviceOnlyRememberedOnUserPrompt"></a>

```python
def reset_device_only_remembered_on_user_prompt() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.challengeRequiredOnNewDeviceInput">challenge_required_on_new_device_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.deviceOnlyRememberedOnUserPromptInput">device_only_remembered_on_user_prompt_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.challengeRequiredOnNewDevice">challenge_required_on_new_device</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.deviceOnlyRememberedOnUserPrompt">device_only_remembered_on_user_prompt</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `challenge_required_on_new_device_input`<sup>Optional</sup> <a name="challenge_required_on_new_device_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.challengeRequiredOnNewDeviceInput"></a>

```python
challenge_required_on_new_device_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `device_only_remembered_on_user_prompt_input`<sup>Optional</sup> <a name="device_only_remembered_on_user_prompt_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.deviceOnlyRememberedOnUserPromptInput"></a>

```python
device_only_remembered_on_user_prompt_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `challenge_required_on_new_device`<sup>Required</sup> <a name="challenge_required_on_new_device" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.challengeRequiredOnNewDevice"></a>

```python
challenge_required_on_new_device: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `device_only_remembered_on_user_prompt`<sup>Required</sup> <a name="device_only_remembered_on_user_prompt" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.deviceOnlyRememberedOnUserPrompt"></a>

```python
device_only_remembered_on_user_prompt: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: CognitoUserPoolDeviceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a>

---


### CognitoUserPoolEmailConfigurationOutputReference <a name="CognitoUserPoolEmailConfigurationOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetConfigurationSet">reset_configuration_set</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetEmailSendingAccount">reset_email_sending_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetFromEmailAddress">reset_from_email_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetReplyToEmailAddress">reset_reply_to_email_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetSourceArn">reset_source_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_configuration_set` <a name="reset_configuration_set" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetConfigurationSet"></a>

```python
def reset_configuration_set() -> None
```

##### `reset_email_sending_account` <a name="reset_email_sending_account" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetEmailSendingAccount"></a>

```python
def reset_email_sending_account() -> None
```

##### `reset_from_email_address` <a name="reset_from_email_address" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetFromEmailAddress"></a>

```python
def reset_from_email_address() -> None
```

##### `reset_reply_to_email_address` <a name="reset_reply_to_email_address" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetReplyToEmailAddress"></a>

```python
def reset_reply_to_email_address() -> None
```

##### `reset_source_arn` <a name="reset_source_arn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetSourceArn"></a>

```python
def reset_source_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.configurationSetInput">configuration_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.emailSendingAccountInput">email_sending_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.fromEmailAddressInput">from_email_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.replyToEmailAddressInput">reply_to_email_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.sourceArnInput">source_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.configurationSet">configuration_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.emailSendingAccount">email_sending_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.fromEmailAddress">from_email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.replyToEmailAddress">reply_to_email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.sourceArn">source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configuration_set_input`<sup>Optional</sup> <a name="configuration_set_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.configurationSetInput"></a>

```python
configuration_set_input: str
```

- *Type:* str

---

##### `email_sending_account_input`<sup>Optional</sup> <a name="email_sending_account_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.emailSendingAccountInput"></a>

```python
email_sending_account_input: str
```

- *Type:* str

---

##### `from_email_address_input`<sup>Optional</sup> <a name="from_email_address_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.fromEmailAddressInput"></a>

```python
from_email_address_input: str
```

- *Type:* str

---

##### `reply_to_email_address_input`<sup>Optional</sup> <a name="reply_to_email_address_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.replyToEmailAddressInput"></a>

```python
reply_to_email_address_input: str
```

- *Type:* str

---

##### `source_arn_input`<sup>Optional</sup> <a name="source_arn_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.sourceArnInput"></a>

```python
source_arn_input: str
```

- *Type:* str

---

##### `configuration_set`<sup>Required</sup> <a name="configuration_set" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.configurationSet"></a>

```python
configuration_set: str
```

- *Type:* str

---

##### `email_sending_account`<sup>Required</sup> <a name="email_sending_account" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.emailSendingAccount"></a>

```python
email_sending_account: str
```

- *Type:* str

---

##### `from_email_address`<sup>Required</sup> <a name="from_email_address" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.fromEmailAddress"></a>

```python
from_email_address: str
```

- *Type:* str

---

##### `reply_to_email_address`<sup>Required</sup> <a name="reply_to_email_address" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.replyToEmailAddress"></a>

```python
reply_to_email_address: str
```

- *Type:* str

---

##### `source_arn`<sup>Required</sup> <a name="source_arn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.sourceArn"></a>

```python
source_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: CognitoUserPoolEmailConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a>

---


### CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference <a name="CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaArnInput">lambda_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersionInput">lambda_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersion">lambda_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_arn_input`<sup>Optional</sup> <a name="lambda_arn_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaArnInput"></a>

```python
lambda_arn_input: str
```

- *Type:* str

---

##### `lambda_version_input`<sup>Optional</sup> <a name="lambda_version_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersionInput"></a>

```python
lambda_version_input: str
```

- *Type:* str

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

---

##### `lambda_version`<sup>Required</sup> <a name="lambda_version" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersion"></a>

```python
lambda_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.internalValue"></a>

```python
internal_value: CognitoUserPoolLambdaConfigCustomEmailSender
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a>

---


### CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference <a name="CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaArnInput">lambda_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersionInput">lambda_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersion">lambda_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_arn_input`<sup>Optional</sup> <a name="lambda_arn_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaArnInput"></a>

```python
lambda_arn_input: str
```

- *Type:* str

---

##### `lambda_version_input`<sup>Optional</sup> <a name="lambda_version_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersionInput"></a>

```python
lambda_version_input: str
```

- *Type:* str

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

---

##### `lambda_version`<sup>Required</sup> <a name="lambda_version" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersion"></a>

```python
lambda_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.internalValue"></a>

```python
internal_value: CognitoUserPoolLambdaConfigCustomSmsSender
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a>

---


### CognitoUserPoolLambdaConfigOutputReference <a name="CognitoUserPoolLambdaConfigOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.putCustomEmailSender">put_custom_email_sender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.putCustomSmsSender">put_custom_sms_sender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetCreateAuthChallenge">reset_create_auth_challenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetCustomEmailSender">reset_custom_email_sender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetCustomMessage">reset_custom_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetCustomSmsSender">reset_custom_sms_sender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetDefineAuthChallenge">reset_define_auth_challenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPostAuthentication">reset_post_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPostConfirmation">reset_post_confirmation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPreAuthentication">reset_pre_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPreSignUp">reset_pre_sign_up</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPreTokenGeneration">reset_pre_token_generation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetUserMigration">reset_user_migration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetVerifyAuthChallengeResponse">reset_verify_auth_challenge_response</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_email_sender` <a name="put_custom_email_sender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.putCustomEmailSender"></a>

```python
def put_custom_email_sender(
  lambda_arn: str,
  lambda_version: str
) -> None
```

###### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.putCustomEmailSender.parameter.lambdaArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_arn CognitoUserPool#lambda_arn}.

---

###### `lambda_version`<sup>Required</sup> <a name="lambda_version" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.putCustomEmailSender.parameter.lambdaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_version CognitoUserPool#lambda_version}.

---

##### `put_custom_sms_sender` <a name="put_custom_sms_sender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.putCustomSmsSender"></a>

```python
def put_custom_sms_sender(
  lambda_arn: str,
  lambda_version: str
) -> None
```

###### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.putCustomSmsSender.parameter.lambdaArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_arn CognitoUserPool#lambda_arn}.

---

###### `lambda_version`<sup>Required</sup> <a name="lambda_version" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.putCustomSmsSender.parameter.lambdaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_version CognitoUserPool#lambda_version}.

---

##### `reset_create_auth_challenge` <a name="reset_create_auth_challenge" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetCreateAuthChallenge"></a>

```python
def reset_create_auth_challenge() -> None
```

##### `reset_custom_email_sender` <a name="reset_custom_email_sender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetCustomEmailSender"></a>

```python
def reset_custom_email_sender() -> None
```

##### `reset_custom_message` <a name="reset_custom_message" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetCustomMessage"></a>

```python
def reset_custom_message() -> None
```

##### `reset_custom_sms_sender` <a name="reset_custom_sms_sender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetCustomSmsSender"></a>

```python
def reset_custom_sms_sender() -> None
```

##### `reset_define_auth_challenge` <a name="reset_define_auth_challenge" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetDefineAuthChallenge"></a>

```python
def reset_define_auth_challenge() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_post_authentication` <a name="reset_post_authentication" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPostAuthentication"></a>

```python
def reset_post_authentication() -> None
```

##### `reset_post_confirmation` <a name="reset_post_confirmation" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPostConfirmation"></a>

```python
def reset_post_confirmation() -> None
```

##### `reset_pre_authentication` <a name="reset_pre_authentication" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPreAuthentication"></a>

```python
def reset_pre_authentication() -> None
```

##### `reset_pre_sign_up` <a name="reset_pre_sign_up" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPreSignUp"></a>

```python
def reset_pre_sign_up() -> None
```

##### `reset_pre_token_generation` <a name="reset_pre_token_generation" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPreTokenGeneration"></a>

```python
def reset_pre_token_generation() -> None
```

##### `reset_user_migration` <a name="reset_user_migration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetUserMigration"></a>

```python
def reset_user_migration() -> None
```

##### `reset_verify_auth_challenge_response` <a name="reset_verify_auth_challenge_response" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetVerifyAuthChallengeResponse"></a>

```python
def reset_verify_auth_challenge_response() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customEmailSender">custom_email_sender</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference">CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customSmsSender">custom_sms_sender</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference">CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.createAuthChallengeInput">create_auth_challenge_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customEmailSenderInput">custom_email_sender_input</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customMessageInput">custom_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customSmsSenderInput">custom_sms_sender_input</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.defineAuthChallengeInput">define_auth_challenge_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postAuthenticationInput">post_authentication_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postConfirmationInput">post_confirmation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preAuthenticationInput">pre_authentication_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preSignUpInput">pre_sign_up_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preTokenGenerationInput">pre_token_generation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.userMigrationInput">user_migration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.verifyAuthChallengeResponseInput">verify_auth_challenge_response_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.createAuthChallenge">create_auth_challenge</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customMessage">custom_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.defineAuthChallenge">define_auth_challenge</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postAuthentication">post_authentication</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postConfirmation">post_confirmation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preAuthentication">pre_authentication</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preSignUp">pre_sign_up</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preTokenGeneration">pre_token_generation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.userMigration">user_migration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.verifyAuthChallengeResponse">verify_auth_challenge_response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_email_sender`<sup>Required</sup> <a name="custom_email_sender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customEmailSender"></a>

```python
custom_email_sender: CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference">CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference</a>

---

##### `custom_sms_sender`<sup>Required</sup> <a name="custom_sms_sender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customSmsSender"></a>

```python
custom_sms_sender: CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference">CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference</a>

---

##### `create_auth_challenge_input`<sup>Optional</sup> <a name="create_auth_challenge_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.createAuthChallengeInput"></a>

```python
create_auth_challenge_input: str
```

- *Type:* str

---

##### `custom_email_sender_input`<sup>Optional</sup> <a name="custom_email_sender_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customEmailSenderInput"></a>

```python
custom_email_sender_input: CognitoUserPoolLambdaConfigCustomEmailSender
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a>

---

##### `custom_message_input`<sup>Optional</sup> <a name="custom_message_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customMessageInput"></a>

```python
custom_message_input: str
```

- *Type:* str

---

##### `custom_sms_sender_input`<sup>Optional</sup> <a name="custom_sms_sender_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customSmsSenderInput"></a>

```python
custom_sms_sender_input: CognitoUserPoolLambdaConfigCustomSmsSender
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a>

---

##### `define_auth_challenge_input`<sup>Optional</sup> <a name="define_auth_challenge_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.defineAuthChallengeInput"></a>

```python
define_auth_challenge_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `post_authentication_input`<sup>Optional</sup> <a name="post_authentication_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postAuthenticationInput"></a>

```python
post_authentication_input: str
```

- *Type:* str

---

##### `post_confirmation_input`<sup>Optional</sup> <a name="post_confirmation_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postConfirmationInput"></a>

```python
post_confirmation_input: str
```

- *Type:* str

---

##### `pre_authentication_input`<sup>Optional</sup> <a name="pre_authentication_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preAuthenticationInput"></a>

```python
pre_authentication_input: str
```

- *Type:* str

---

##### `pre_sign_up_input`<sup>Optional</sup> <a name="pre_sign_up_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preSignUpInput"></a>

```python
pre_sign_up_input: str
```

- *Type:* str

---

##### `pre_token_generation_input`<sup>Optional</sup> <a name="pre_token_generation_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preTokenGenerationInput"></a>

```python
pre_token_generation_input: str
```

- *Type:* str

---

##### `user_migration_input`<sup>Optional</sup> <a name="user_migration_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.userMigrationInput"></a>

```python
user_migration_input: str
```

- *Type:* str

---

##### `verify_auth_challenge_response_input`<sup>Optional</sup> <a name="verify_auth_challenge_response_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.verifyAuthChallengeResponseInput"></a>

```python
verify_auth_challenge_response_input: str
```

- *Type:* str

---

##### `create_auth_challenge`<sup>Required</sup> <a name="create_auth_challenge" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.createAuthChallenge"></a>

```python
create_auth_challenge: str
```

- *Type:* str

---

##### `custom_message`<sup>Required</sup> <a name="custom_message" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customMessage"></a>

```python
custom_message: str
```

- *Type:* str

---

##### `define_auth_challenge`<sup>Required</sup> <a name="define_auth_challenge" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.defineAuthChallenge"></a>

```python
define_auth_challenge: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `post_authentication`<sup>Required</sup> <a name="post_authentication" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postAuthentication"></a>

```python
post_authentication: str
```

- *Type:* str

---

##### `post_confirmation`<sup>Required</sup> <a name="post_confirmation" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postConfirmation"></a>

```python
post_confirmation: str
```

- *Type:* str

---

##### `pre_authentication`<sup>Required</sup> <a name="pre_authentication" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preAuthentication"></a>

```python
pre_authentication: str
```

- *Type:* str

---

##### `pre_sign_up`<sup>Required</sup> <a name="pre_sign_up" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preSignUp"></a>

```python
pre_sign_up: str
```

- *Type:* str

---

##### `pre_token_generation`<sup>Required</sup> <a name="pre_token_generation" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preTokenGeneration"></a>

```python
pre_token_generation: str
```

- *Type:* str

---

##### `user_migration`<sup>Required</sup> <a name="user_migration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.userMigration"></a>

```python
user_migration: str
```

- *Type:* str

---

##### `verify_auth_challenge_response`<sup>Required</sup> <a name="verify_auth_challenge_response" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.verifyAuthChallengeResponse"></a>

```python
verify_auth_challenge_response: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.internalValue"></a>

```python
internal_value: CognitoUserPoolLambdaConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a>

---


### CognitoUserPoolPasswordPolicyOutputReference <a name="CognitoUserPoolPasswordPolicyOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetMinimumLength">reset_minimum_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetRequireLowercase">reset_require_lowercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetRequireNumbers">reset_require_numbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetRequireSymbols">reset_require_symbols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetRequireUppercase">reset_require_uppercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetTemporaryPasswordValidityDays">reset_temporary_password_validity_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_minimum_length` <a name="reset_minimum_length" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetMinimumLength"></a>

```python
def reset_minimum_length() -> None
```

##### `reset_require_lowercase` <a name="reset_require_lowercase" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetRequireLowercase"></a>

```python
def reset_require_lowercase() -> None
```

##### `reset_require_numbers` <a name="reset_require_numbers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetRequireNumbers"></a>

```python
def reset_require_numbers() -> None
```

##### `reset_require_symbols` <a name="reset_require_symbols" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetRequireSymbols"></a>

```python
def reset_require_symbols() -> None
```

##### `reset_require_uppercase` <a name="reset_require_uppercase" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetRequireUppercase"></a>

```python
def reset_require_uppercase() -> None
```

##### `reset_temporary_password_validity_days` <a name="reset_temporary_password_validity_days" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetTemporaryPasswordValidityDays"></a>

```python
def reset_temporary_password_validity_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.minimumLengthInput">minimum_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireLowercaseInput">require_lowercase_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireNumbersInput">require_numbers_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireSymbolsInput">require_symbols_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireUppercaseInput">require_uppercase_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.temporaryPasswordValidityDaysInput">temporary_password_validity_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.minimumLength">minimum_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireLowercase">require_lowercase</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireNumbers">require_numbers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireSymbols">require_symbols</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireUppercase">require_uppercase</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.temporaryPasswordValidityDays">temporary_password_validity_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `minimum_length_input`<sup>Optional</sup> <a name="minimum_length_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.minimumLengthInput"></a>

```python
minimum_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `require_lowercase_input`<sup>Optional</sup> <a name="require_lowercase_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireLowercaseInput"></a>

```python
require_lowercase_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_numbers_input`<sup>Optional</sup> <a name="require_numbers_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireNumbersInput"></a>

```python
require_numbers_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_symbols_input`<sup>Optional</sup> <a name="require_symbols_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireSymbolsInput"></a>

```python
require_symbols_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_uppercase_input`<sup>Optional</sup> <a name="require_uppercase_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireUppercaseInput"></a>

```python
require_uppercase_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `temporary_password_validity_days_input`<sup>Optional</sup> <a name="temporary_password_validity_days_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.temporaryPasswordValidityDaysInput"></a>

```python
temporary_password_validity_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_length`<sup>Required</sup> <a name="minimum_length" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.minimumLength"></a>

```python
minimum_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `require_lowercase`<sup>Required</sup> <a name="require_lowercase" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireLowercase"></a>

```python
require_lowercase: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_numbers`<sup>Required</sup> <a name="require_numbers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireNumbers"></a>

```python
require_numbers: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_symbols`<sup>Required</sup> <a name="require_symbols" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireSymbols"></a>

```python
require_symbols: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_uppercase`<sup>Required</sup> <a name="require_uppercase" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireUppercase"></a>

```python
require_uppercase: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `temporary_password_validity_days`<sup>Required</sup> <a name="temporary_password_validity_days" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.temporaryPasswordValidityDays"></a>

```python
temporary_password_validity_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.internalValue"></a>

```python
internal_value: CognitoUserPoolPasswordPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a>

---


### CognitoUserPoolSchemaList <a name="CognitoUserPoolSchemaList" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolSchemaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CognitoUserPoolSchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema">CognitoUserPoolSchema</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CognitoUserPoolSchema]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema">CognitoUserPoolSchema</a>]]

---


### CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference <a name="CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.resetMaxValue">reset_max_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.resetMinValue">reset_min_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_value` <a name="reset_max_value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.resetMaxValue"></a>

```python
def reset_max_value() -> None
```

##### `reset_min_value` <a name="reset_min_value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.resetMinValue"></a>

```python
def reset_min_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.maxValueInput">max_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.minValueInput">min_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.maxValue">max_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.minValue">min_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints">CognitoUserPoolSchemaNumberAttributeConstraints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_value_input`<sup>Optional</sup> <a name="max_value_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.maxValueInput"></a>

```python
max_value_input: str
```

- *Type:* str

---

##### `min_value_input`<sup>Optional</sup> <a name="min_value_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.minValueInput"></a>

```python
min_value_input: str
```

- *Type:* str

---

##### `max_value`<sup>Required</sup> <a name="max_value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.maxValue"></a>

```python
max_value: str
```

- *Type:* str

---

##### `min_value`<sup>Required</sup> <a name="min_value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.minValue"></a>

```python
min_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.internalValue"></a>

```python
internal_value: CognitoUserPoolSchemaNumberAttributeConstraints
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints">CognitoUserPoolSchemaNumberAttributeConstraints</a>

---


### CognitoUserPoolSchemaOutputReference <a name="CognitoUserPoolSchemaOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.putNumberAttributeConstraints">put_number_attribute_constraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.putStringAttributeConstraints">put_string_attribute_constraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetDeveloperOnlyAttribute">reset_developer_only_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetMutable">reset_mutable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetNumberAttributeConstraints">reset_number_attribute_constraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetRequired">reset_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetStringAttributeConstraints">reset_string_attribute_constraints</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_number_attribute_constraints` <a name="put_number_attribute_constraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.putNumberAttributeConstraints"></a>

```python
def put_number_attribute_constraints(
  max_value: str = None,
  min_value: str = None
) -> None
```

###### `max_value`<sup>Optional</sup> <a name="max_value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.putNumberAttributeConstraints.parameter.maxValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#max_value CognitoUserPool#max_value}.

---

###### `min_value`<sup>Optional</sup> <a name="min_value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.putNumberAttributeConstraints.parameter.minValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#min_value CognitoUserPool#min_value}.

---

##### `put_string_attribute_constraints` <a name="put_string_attribute_constraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.putStringAttributeConstraints"></a>

```python
def put_string_attribute_constraints(
  max_length: str = None,
  min_length: str = None
) -> None
```

###### `max_length`<sup>Optional</sup> <a name="max_length" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.putStringAttributeConstraints.parameter.maxLength"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#max_length CognitoUserPool#max_length}.

---

###### `min_length`<sup>Optional</sup> <a name="min_length" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.putStringAttributeConstraints.parameter.minLength"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#min_length CognitoUserPool#min_length}.

---

##### `reset_developer_only_attribute` <a name="reset_developer_only_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetDeveloperOnlyAttribute"></a>

```python
def reset_developer_only_attribute() -> None
```

##### `reset_mutable` <a name="reset_mutable" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetMutable"></a>

```python
def reset_mutable() -> None
```

##### `reset_number_attribute_constraints` <a name="reset_number_attribute_constraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetNumberAttributeConstraints"></a>

```python
def reset_number_attribute_constraints() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetRequired"></a>

```python
def reset_required() -> None
```

##### `reset_string_attribute_constraints` <a name="reset_string_attribute_constraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetStringAttributeConstraints"></a>

```python
def reset_string_attribute_constraints() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.numberAttributeConstraints">number_attribute_constraints</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference">CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.stringAttributeConstraints">string_attribute_constraints</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference">CognitoUserPoolSchemaStringAttributeConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.attributeDataTypeInput">attribute_data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.developerOnlyAttributeInput">developer_only_attribute_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.mutableInput">mutable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.numberAttributeConstraintsInput">number_attribute_constraints_input</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints">CognitoUserPoolSchemaNumberAttributeConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.requiredInput">required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.stringAttributeConstraintsInput">string_attribute_constraints_input</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints">CognitoUserPoolSchemaStringAttributeConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.attributeDataType">attribute_data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.developerOnlyAttribute">developer_only_attribute</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.mutable">mutable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema">CognitoUserPoolSchema</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `number_attribute_constraints`<sup>Required</sup> <a name="number_attribute_constraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.numberAttributeConstraints"></a>

```python
number_attribute_constraints: CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference">CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference</a>

---

##### `string_attribute_constraints`<sup>Required</sup> <a name="string_attribute_constraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.stringAttributeConstraints"></a>

```python
string_attribute_constraints: CognitoUserPoolSchemaStringAttributeConstraintsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference">CognitoUserPoolSchemaStringAttributeConstraintsOutputReference</a>

---

##### `attribute_data_type_input`<sup>Optional</sup> <a name="attribute_data_type_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.attributeDataTypeInput"></a>

```python
attribute_data_type_input: str
```

- *Type:* str

---

##### `developer_only_attribute_input`<sup>Optional</sup> <a name="developer_only_attribute_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.developerOnlyAttributeInput"></a>

```python
developer_only_attribute_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mutable_input`<sup>Optional</sup> <a name="mutable_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.mutableInput"></a>

```python
mutable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `number_attribute_constraints_input`<sup>Optional</sup> <a name="number_attribute_constraints_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.numberAttributeConstraintsInput"></a>

```python
number_attribute_constraints_input: CognitoUserPoolSchemaNumberAttributeConstraints
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints">CognitoUserPoolSchemaNumberAttributeConstraints</a>

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.requiredInput"></a>

```python
required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `string_attribute_constraints_input`<sup>Optional</sup> <a name="string_attribute_constraints_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.stringAttributeConstraintsInput"></a>

```python
string_attribute_constraints_input: CognitoUserPoolSchemaStringAttributeConstraints
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints">CognitoUserPoolSchemaStringAttributeConstraints</a>

---

##### `attribute_data_type`<sup>Required</sup> <a name="attribute_data_type" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.attributeDataType"></a>

```python
attribute_data_type: str
```

- *Type:* str

---

##### `developer_only_attribute`<sup>Required</sup> <a name="developer_only_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.developerOnlyAttribute"></a>

```python
developer_only_attribute: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mutable`<sup>Required</sup> <a name="mutable" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.mutable"></a>

```python
mutable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CognitoUserPoolSchema, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema">CognitoUserPoolSchema</a>, cdktf.IResolvable]

---


### CognitoUserPoolSchemaStringAttributeConstraintsOutputReference <a name="CognitoUserPoolSchemaStringAttributeConstraintsOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.resetMaxLength">reset_max_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.resetMinLength">reset_min_length</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_length` <a name="reset_max_length" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.resetMaxLength"></a>

```python
def reset_max_length() -> None
```

##### `reset_min_length` <a name="reset_min_length" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.resetMinLength"></a>

```python
def reset_min_length() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.maxLengthInput">max_length_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.minLengthInput">min_length_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.maxLength">max_length</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.minLength">min_length</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints">CognitoUserPoolSchemaStringAttributeConstraints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_length_input`<sup>Optional</sup> <a name="max_length_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.maxLengthInput"></a>

```python
max_length_input: str
```

- *Type:* str

---

##### `min_length_input`<sup>Optional</sup> <a name="min_length_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.minLengthInput"></a>

```python
min_length_input: str
```

- *Type:* str

---

##### `max_length`<sup>Required</sup> <a name="max_length" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.maxLength"></a>

```python
max_length: str
```

- *Type:* str

---

##### `min_length`<sup>Required</sup> <a name="min_length" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.minLength"></a>

```python
min_length: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.internalValue"></a>

```python
internal_value: CognitoUserPoolSchemaStringAttributeConstraints
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints">CognitoUserPoolSchemaStringAttributeConstraints</a>

---


### CognitoUserPoolSmsConfigurationOutputReference <a name="CognitoUserPoolSmsConfigurationOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.resetSnsRegion">reset_sns_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_sns_region` <a name="reset_sns_region" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.resetSnsRegion"></a>

```python
def reset_sns_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsCallerArnInput">sns_caller_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsRegionInput">sns_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsCallerArn">sns_caller_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsRegion">sns_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `sns_caller_arn_input`<sup>Optional</sup> <a name="sns_caller_arn_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsCallerArnInput"></a>

```python
sns_caller_arn_input: str
```

- *Type:* str

---

##### `sns_region_input`<sup>Optional</sup> <a name="sns_region_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsRegionInput"></a>

```python
sns_region_input: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `sns_caller_arn`<sup>Required</sup> <a name="sns_caller_arn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsCallerArn"></a>

```python
sns_caller_arn: str
```

- *Type:* str

---

##### `sns_region`<sup>Required</sup> <a name="sns_region" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsRegion"></a>

```python
sns_region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: CognitoUserPoolSmsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a>

---


### CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference <a name="CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: CognitoUserPoolSoftwareTokenMfaConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a>

---


### CognitoUserPoolUserAttributeUpdateSettingsOutputReference <a name="CognitoUserPoolUserAttributeUpdateSettingsOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.attributesRequireVerificationBeforeUpdateInput">attributes_require_verification_before_update_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.attributesRequireVerificationBeforeUpdate">attributes_require_verification_before_update</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes_require_verification_before_update_input`<sup>Optional</sup> <a name="attributes_require_verification_before_update_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.attributesRequireVerificationBeforeUpdateInput"></a>

```python
attributes_require_verification_before_update_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_require_verification_before_update`<sup>Required</sup> <a name="attributes_require_verification_before_update" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.attributesRequireVerificationBeforeUpdate"></a>

```python
attributes_require_verification_before_update: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.internalValue"></a>

```python
internal_value: CognitoUserPoolUserAttributeUpdateSettings
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a>

---


### CognitoUserPoolUsernameConfigurationOutputReference <a name="CognitoUserPoolUsernameConfigurationOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.caseSensitiveInput">case_sensitive_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.caseSensitive">case_sensitive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `case_sensitive_input`<sup>Optional</sup> <a name="case_sensitive_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.caseSensitiveInput"></a>

```python
case_sensitive_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `case_sensitive`<sup>Required</sup> <a name="case_sensitive" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.caseSensitive"></a>

```python
case_sensitive: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: CognitoUserPoolUsernameConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a>

---


### CognitoUserPoolUserPoolAddOnsOutputReference <a name="CognitoUserPoolUserPoolAddOnsOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.advancedSecurityModeInput">advanced_security_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.advancedSecurityMode">advanced_security_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `advanced_security_mode_input`<sup>Optional</sup> <a name="advanced_security_mode_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.advancedSecurityModeInput"></a>

```python
advanced_security_mode_input: str
```

- *Type:* str

---

##### `advanced_security_mode`<sup>Required</sup> <a name="advanced_security_mode" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.advancedSecurityMode"></a>

```python
advanced_security_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.internalValue"></a>

```python
internal_value: CognitoUserPoolUserPoolAddOns
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a>

---


### CognitoUserPoolVerificationMessageTemplateOutputReference <a name="CognitoUserPoolVerificationMessageTemplateOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cognito_user_pool

cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetDefaultEmailOption">reset_default_email_option</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetEmailMessage">reset_email_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetEmailMessageByLink">reset_email_message_by_link</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetEmailSubject">reset_email_subject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetEmailSubjectByLink">reset_email_subject_by_link</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetSmsMessage">reset_sms_message</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default_email_option` <a name="reset_default_email_option" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetDefaultEmailOption"></a>

```python
def reset_default_email_option() -> None
```

##### `reset_email_message` <a name="reset_email_message" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetEmailMessage"></a>

```python
def reset_email_message() -> None
```

##### `reset_email_message_by_link` <a name="reset_email_message_by_link" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetEmailMessageByLink"></a>

```python
def reset_email_message_by_link() -> None
```

##### `reset_email_subject` <a name="reset_email_subject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetEmailSubject"></a>

```python
def reset_email_subject() -> None
```

##### `reset_email_subject_by_link` <a name="reset_email_subject_by_link" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetEmailSubjectByLink"></a>

```python
def reset_email_subject_by_link() -> None
```

##### `reset_sms_message` <a name="reset_sms_message" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetSmsMessage"></a>

```python
def reset_sms_message() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.defaultEmailOptionInput">default_email_option_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessageByLinkInput">email_message_by_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessageInput">email_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubjectByLinkInput">email_subject_by_link_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubjectInput">email_subject_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.smsMessageInput">sms_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.defaultEmailOption">default_email_option</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessage">email_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessageByLink">email_message_by_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubject">email_subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubjectByLink">email_subject_by_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.smsMessage">sms_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_email_option_input`<sup>Optional</sup> <a name="default_email_option_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.defaultEmailOptionInput"></a>

```python
default_email_option_input: str
```

- *Type:* str

---

##### `email_message_by_link_input`<sup>Optional</sup> <a name="email_message_by_link_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessageByLinkInput"></a>

```python
email_message_by_link_input: str
```

- *Type:* str

---

##### `email_message_input`<sup>Optional</sup> <a name="email_message_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessageInput"></a>

```python
email_message_input: str
```

- *Type:* str

---

##### `email_subject_by_link_input`<sup>Optional</sup> <a name="email_subject_by_link_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubjectByLinkInput"></a>

```python
email_subject_by_link_input: str
```

- *Type:* str

---

##### `email_subject_input`<sup>Optional</sup> <a name="email_subject_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubjectInput"></a>

```python
email_subject_input: str
```

- *Type:* str

---

##### `sms_message_input`<sup>Optional</sup> <a name="sms_message_input" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.smsMessageInput"></a>

```python
sms_message_input: str
```

- *Type:* str

---

##### `default_email_option`<sup>Required</sup> <a name="default_email_option" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.defaultEmailOption"></a>

```python
default_email_option: str
```

- *Type:* str

---

##### `email_message`<sup>Required</sup> <a name="email_message" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessage"></a>

```python
email_message: str
```

- *Type:* str

---

##### `email_message_by_link`<sup>Required</sup> <a name="email_message_by_link" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessageByLink"></a>

```python
email_message_by_link: str
```

- *Type:* str

---

##### `email_subject`<sup>Required</sup> <a name="email_subject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubject"></a>

```python
email_subject: str
```

- *Type:* str

---

##### `email_subject_by_link`<sup>Required</sup> <a name="email_subject_by_link" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubjectByLink"></a>

```python
email_subject_by_link: str
```

- *Type:* str

---

##### `sms_message`<sup>Required</sup> <a name="sms_message" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.smsMessage"></a>

```python
sms_message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.internalValue"></a>

```python
internal_value: CognitoUserPoolVerificationMessageTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a>

---



