# `cognitoUserPool` Submodule <a name="`cognitoUserPool` Submodule" id="@cdktf/provider-aws.cognitoUserPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPool <a name="CognitoUserPool" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool aws_cognito_user_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

cognitouserpool.NewCognitoUserPool(scope Construct, id *string, config CognitoUserPoolConfig) CognitoUserPool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig">CognitoUserPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig">CognitoUserPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putAccountRecoverySetting">PutAccountRecoverySetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putAdminCreateUserConfig">PutAdminCreateUserConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putDeviceConfiguration">PutDeviceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putEmailConfiguration">PutEmailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putLambdaConfig">PutLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putPasswordPolicy">PutPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSchema">PutSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSmsConfiguration">PutSmsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSoftwareTokenMfaConfiguration">PutSoftwareTokenMfaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUserAttributeUpdateSettings">PutUserAttributeUpdateSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUsernameConfiguration">PutUsernameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUserPoolAddOns">PutUserPoolAddOns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putVerificationMessageTemplate">PutVerificationMessageTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetAccountRecoverySetting">ResetAccountRecoverySetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetAdminCreateUserConfig">ResetAdminCreateUserConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetAliasAttributes">ResetAliasAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetAutoVerifiedAttributes">ResetAutoVerifiedAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetDeviceConfiguration">ResetDeviceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetEmailConfiguration">ResetEmailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetEmailVerificationMessage">ResetEmailVerificationMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetEmailVerificationSubject">ResetEmailVerificationSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetLambdaConfig">ResetLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetMfaConfiguration">ResetMfaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetPasswordPolicy">ResetPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSmsAuthenticationMessage">ResetSmsAuthenticationMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSmsConfiguration">ResetSmsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSmsVerificationMessage">ResetSmsVerificationMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSoftwareTokenMfaConfiguration">ResetSoftwareTokenMfaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetUserAttributeUpdateSettings">ResetUserAttributeUpdateSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetUsernameAttributes">ResetUsernameAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetUsernameConfiguration">ResetUsernameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetUserPoolAddOns">ResetUserPoolAddOns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetVerificationMessageTemplate">ResetVerificationMessageTemplate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAccountRecoverySetting` <a name="PutAccountRecoverySetting" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putAccountRecoverySetting"></a>

```go
func PutAccountRecoverySetting(value CognitoUserPoolAccountRecoverySetting)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putAccountRecoverySetting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a>

---

##### `PutAdminCreateUserConfig` <a name="PutAdminCreateUserConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putAdminCreateUserConfig"></a>

```go
func PutAdminCreateUserConfig(value CognitoUserPoolAdminCreateUserConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putAdminCreateUserConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a>

---

##### `PutDeviceConfiguration` <a name="PutDeviceConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putDeviceConfiguration"></a>

```go
func PutDeviceConfiguration(value CognitoUserPoolDeviceConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putDeviceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a>

---

##### `PutEmailConfiguration` <a name="PutEmailConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putEmailConfiguration"></a>

```go
func PutEmailConfiguration(value CognitoUserPoolEmailConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putEmailConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a>

---

##### `PutLambdaConfig` <a name="PutLambdaConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putLambdaConfig"></a>

```go
func PutLambdaConfig(value CognitoUserPoolLambdaConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putLambdaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a>

---

##### `PutPasswordPolicy` <a name="PutPasswordPolicy" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putPasswordPolicy"></a>

```go
func PutPasswordPolicy(value CognitoUserPoolPasswordPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putPasswordPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a>

---

##### `PutSchema` <a name="PutSchema" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSchema"></a>

```go
func PutSchema(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSchema.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSmsConfiguration` <a name="PutSmsConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSmsConfiguration"></a>

```go
func PutSmsConfiguration(value CognitoUserPoolSmsConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSmsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a>

---

##### `PutSoftwareTokenMfaConfiguration` <a name="PutSoftwareTokenMfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSoftwareTokenMfaConfiguration"></a>

```go
func PutSoftwareTokenMfaConfiguration(value CognitoUserPoolSoftwareTokenMfaConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSoftwareTokenMfaConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a>

---

##### `PutUserAttributeUpdateSettings` <a name="PutUserAttributeUpdateSettings" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUserAttributeUpdateSettings"></a>

```go
func PutUserAttributeUpdateSettings(value CognitoUserPoolUserAttributeUpdateSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUserAttributeUpdateSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a>

---

##### `PutUsernameConfiguration` <a name="PutUsernameConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUsernameConfiguration"></a>

```go
func PutUsernameConfiguration(value CognitoUserPoolUsernameConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUsernameConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a>

---

##### `PutUserPoolAddOns` <a name="PutUserPoolAddOns" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUserPoolAddOns"></a>

```go
func PutUserPoolAddOns(value CognitoUserPoolUserPoolAddOns)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUserPoolAddOns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a>

---

##### `PutVerificationMessageTemplate` <a name="PutVerificationMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putVerificationMessageTemplate"></a>

```go
func PutVerificationMessageTemplate(value CognitoUserPoolVerificationMessageTemplate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putVerificationMessageTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a>

---

##### `ResetAccountRecoverySetting` <a name="ResetAccountRecoverySetting" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetAccountRecoverySetting"></a>

```go
func ResetAccountRecoverySetting()
```

##### `ResetAdminCreateUserConfig` <a name="ResetAdminCreateUserConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetAdminCreateUserConfig"></a>

```go
func ResetAdminCreateUserConfig()
```

##### `ResetAliasAttributes` <a name="ResetAliasAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetAliasAttributes"></a>

```go
func ResetAliasAttributes()
```

##### `ResetAutoVerifiedAttributes` <a name="ResetAutoVerifiedAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetAutoVerifiedAttributes"></a>

```go
func ResetAutoVerifiedAttributes()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetDeletionProtection"></a>

```go
func ResetDeletionProtection()
```

##### `ResetDeviceConfiguration` <a name="ResetDeviceConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetDeviceConfiguration"></a>

```go
func ResetDeviceConfiguration()
```

##### `ResetEmailConfiguration` <a name="ResetEmailConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetEmailConfiguration"></a>

```go
func ResetEmailConfiguration()
```

##### `ResetEmailVerificationMessage` <a name="ResetEmailVerificationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetEmailVerificationMessage"></a>

```go
func ResetEmailVerificationMessage()
```

##### `ResetEmailVerificationSubject` <a name="ResetEmailVerificationSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetEmailVerificationSubject"></a>

```go
func ResetEmailVerificationSubject()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetId"></a>

```go
func ResetId()
```

##### `ResetLambdaConfig` <a name="ResetLambdaConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetLambdaConfig"></a>

```go
func ResetLambdaConfig()
```

##### `ResetMfaConfiguration` <a name="ResetMfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetMfaConfiguration"></a>

```go
func ResetMfaConfiguration()
```

##### `ResetPasswordPolicy` <a name="ResetPasswordPolicy" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetPasswordPolicy"></a>

```go
func ResetPasswordPolicy()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSchema"></a>

```go
func ResetSchema()
```

##### `ResetSmsAuthenticationMessage` <a name="ResetSmsAuthenticationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSmsAuthenticationMessage"></a>

```go
func ResetSmsAuthenticationMessage()
```

##### `ResetSmsConfiguration` <a name="ResetSmsConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSmsConfiguration"></a>

```go
func ResetSmsConfiguration()
```

##### `ResetSmsVerificationMessage` <a name="ResetSmsVerificationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSmsVerificationMessage"></a>

```go
func ResetSmsVerificationMessage()
```

##### `ResetSoftwareTokenMfaConfiguration` <a name="ResetSoftwareTokenMfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSoftwareTokenMfaConfiguration"></a>

```go
func ResetSoftwareTokenMfaConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetUserAttributeUpdateSettings` <a name="ResetUserAttributeUpdateSettings" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetUserAttributeUpdateSettings"></a>

```go
func ResetUserAttributeUpdateSettings()
```

##### `ResetUsernameAttributes` <a name="ResetUsernameAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetUsernameAttributes"></a>

```go
func ResetUsernameAttributes()
```

##### `ResetUsernameConfiguration` <a name="ResetUsernameConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetUsernameConfiguration"></a>

```go
func ResetUsernameConfiguration()
```

##### `ResetUserPoolAddOns` <a name="ResetUserPoolAddOns" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetUserPoolAddOns"></a>

```go
func ResetUserPoolAddOns()
```

##### `ResetVerificationMessageTemplate` <a name="ResetVerificationMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetVerificationMessageTemplate"></a>

```go
func ResetVerificationMessageTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

cognitouserpool.CognitoUserPool_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

cognitouserpool.CognitoUserPool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

cognitouserpool.CognitoUserPool_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.accountRecoverySetting">AccountRecoverySetting</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference">CognitoUserPoolAccountRecoverySettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.adminCreateUserConfig">AdminCreateUserConfig</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference">CognitoUserPoolAdminCreateUserConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.creationDate">CreationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.customDomain">CustomDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deviceConfiguration">DeviceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference">CognitoUserPoolDeviceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailConfiguration">EmailConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference">CognitoUserPoolEmailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.estimatedNumberOfUsers">EstimatedNumberOfUsers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lambdaConfig">LambdaConfig</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference">CognitoUserPoolLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lastModifiedDate">LastModifiedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.passwordPolicy">PasswordPolicy</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference">CognitoUserPoolPasswordPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.schema">Schema</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList">CognitoUserPoolSchemaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsConfiguration">SmsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference">CognitoUserPoolSmsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.softwareTokenMfaConfiguration">SoftwareTokenMfaConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference">CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userAttributeUpdateSettings">UserAttributeUpdateSettings</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference">CognitoUserPoolUserAttributeUpdateSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameConfiguration">UsernameConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference">CognitoUserPoolUsernameConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userPoolAddOns">UserPoolAddOns</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference">CognitoUserPoolUserPoolAddOnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.verificationMessageTemplate">VerificationMessageTemplate</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference">CognitoUserPoolVerificationMessageTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.accountRecoverySettingInput">AccountRecoverySettingInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.adminCreateUserConfigInput">AdminCreateUserConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.aliasAttributesInput">AliasAttributesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.autoVerifiedAttributesInput">AutoVerifiedAttributesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deviceConfigurationInput">DeviceConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailConfigurationInput">EmailConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationMessageInput">EmailVerificationMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationSubjectInput">EmailVerificationSubjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lambdaConfigInput">LambdaConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.mfaConfigurationInput">MfaConfigurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.passwordPolicyInput">PasswordPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.schemaInput">SchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsAuthenticationMessageInput">SmsAuthenticationMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsConfigurationInput">SmsConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsVerificationMessageInput">SmsVerificationMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.softwareTokenMfaConfigurationInput">SoftwareTokenMfaConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userAttributeUpdateSettingsInput">UserAttributeUpdateSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameAttributesInput">UsernameAttributesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameConfigurationInput">UsernameConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userPoolAddOnsInput">UserPoolAddOnsInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.verificationMessageTemplateInput">VerificationMessageTemplateInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.aliasAttributes">AliasAttributes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.autoVerifiedAttributes">AutoVerifiedAttributes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deletionProtection">DeletionProtection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationMessage">EmailVerificationMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationSubject">EmailVerificationSubject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.mfaConfiguration">MfaConfiguration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsAuthenticationMessage">SmsAuthenticationMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsVerificationMessage">SmsVerificationMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameAttributes">UsernameAttributes</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountRecoverySetting`<sup>Required</sup> <a name="AccountRecoverySetting" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.accountRecoverySetting"></a>

```go
func AccountRecoverySetting() CognitoUserPoolAccountRecoverySettingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference">CognitoUserPoolAccountRecoverySettingOutputReference</a>

---

##### `AdminCreateUserConfig`<sup>Required</sup> <a name="AdminCreateUserConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.adminCreateUserConfig"></a>

```go
func AdminCreateUserConfig() CognitoUserPoolAdminCreateUserConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference">CognitoUserPoolAdminCreateUserConfigOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.creationDate"></a>

```go
func CreationDate() *string
```

- *Type:* *string

---

##### `CustomDomain`<sup>Required</sup> <a name="CustomDomain" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.customDomain"></a>

```go
func CustomDomain() *string
```

- *Type:* *string

---

##### `DeviceConfiguration`<sup>Required</sup> <a name="DeviceConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deviceConfiguration"></a>

```go
func DeviceConfiguration() CognitoUserPoolDeviceConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference">CognitoUserPoolDeviceConfigurationOutputReference</a>

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `EmailConfiguration`<sup>Required</sup> <a name="EmailConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailConfiguration"></a>

```go
func EmailConfiguration() CognitoUserPoolEmailConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference">CognitoUserPoolEmailConfigurationOutputReference</a>

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `EstimatedNumberOfUsers`<sup>Required</sup> <a name="EstimatedNumberOfUsers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.estimatedNumberOfUsers"></a>

```go
func EstimatedNumberOfUsers() *f64
```

- *Type:* *f64

---

##### `LambdaConfig`<sup>Required</sup> <a name="LambdaConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lambdaConfig"></a>

```go
func LambdaConfig() CognitoUserPoolLambdaConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference">CognitoUserPoolLambdaConfigOutputReference</a>

---

##### `LastModifiedDate`<sup>Required</sup> <a name="LastModifiedDate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lastModifiedDate"></a>

```go
func LastModifiedDate() *string
```

- *Type:* *string

---

##### `PasswordPolicy`<sup>Required</sup> <a name="PasswordPolicy" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.passwordPolicy"></a>

```go
func PasswordPolicy() CognitoUserPoolPasswordPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference">CognitoUserPoolPasswordPolicyOutputReference</a>

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.schema"></a>

```go
func Schema() CognitoUserPoolSchemaList
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList">CognitoUserPoolSchemaList</a>

---

##### `SmsConfiguration`<sup>Required</sup> <a name="SmsConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsConfiguration"></a>

```go
func SmsConfiguration() CognitoUserPoolSmsConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference">CognitoUserPoolSmsConfigurationOutputReference</a>

---

##### `SoftwareTokenMfaConfiguration`<sup>Required</sup> <a name="SoftwareTokenMfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.softwareTokenMfaConfiguration"></a>

```go
func SoftwareTokenMfaConfiguration() CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference">CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference</a>

---

##### `UserAttributeUpdateSettings`<sup>Required</sup> <a name="UserAttributeUpdateSettings" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userAttributeUpdateSettings"></a>

```go
func UserAttributeUpdateSettings() CognitoUserPoolUserAttributeUpdateSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference">CognitoUserPoolUserAttributeUpdateSettingsOutputReference</a>

---

##### `UsernameConfiguration`<sup>Required</sup> <a name="UsernameConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameConfiguration"></a>

```go
func UsernameConfiguration() CognitoUserPoolUsernameConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference">CognitoUserPoolUsernameConfigurationOutputReference</a>

---

##### `UserPoolAddOns`<sup>Required</sup> <a name="UserPoolAddOns" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userPoolAddOns"></a>

```go
func UserPoolAddOns() CognitoUserPoolUserPoolAddOnsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference">CognitoUserPoolUserPoolAddOnsOutputReference</a>

---

##### `VerificationMessageTemplate`<sup>Required</sup> <a name="VerificationMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.verificationMessageTemplate"></a>

```go
func VerificationMessageTemplate() CognitoUserPoolVerificationMessageTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference">CognitoUserPoolVerificationMessageTemplateOutputReference</a>

---

##### `AccountRecoverySettingInput`<sup>Optional</sup> <a name="AccountRecoverySettingInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.accountRecoverySettingInput"></a>

```go
func AccountRecoverySettingInput() CognitoUserPoolAccountRecoverySetting
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a>

---

##### `AdminCreateUserConfigInput`<sup>Optional</sup> <a name="AdminCreateUserConfigInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.adminCreateUserConfigInput"></a>

```go
func AdminCreateUserConfigInput() CognitoUserPoolAdminCreateUserConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a>

---

##### `AliasAttributesInput`<sup>Optional</sup> <a name="AliasAttributesInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.aliasAttributesInput"></a>

```go
func AliasAttributesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AutoVerifiedAttributesInput`<sup>Optional</sup> <a name="AutoVerifiedAttributesInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.autoVerifiedAttributesInput"></a>

```go
func AutoVerifiedAttributesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deletionProtectionInput"></a>

```go
func DeletionProtectionInput() *string
```

- *Type:* *string

---

##### `DeviceConfigurationInput`<sup>Optional</sup> <a name="DeviceConfigurationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deviceConfigurationInput"></a>

```go
func DeviceConfigurationInput() CognitoUserPoolDeviceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a>

---

##### `EmailConfigurationInput`<sup>Optional</sup> <a name="EmailConfigurationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailConfigurationInput"></a>

```go
func EmailConfigurationInput() CognitoUserPoolEmailConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a>

---

##### `EmailVerificationMessageInput`<sup>Optional</sup> <a name="EmailVerificationMessageInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationMessageInput"></a>

```go
func EmailVerificationMessageInput() *string
```

- *Type:* *string

---

##### `EmailVerificationSubjectInput`<sup>Optional</sup> <a name="EmailVerificationSubjectInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationSubjectInput"></a>

```go
func EmailVerificationSubjectInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LambdaConfigInput`<sup>Optional</sup> <a name="LambdaConfigInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lambdaConfigInput"></a>

```go
func LambdaConfigInput() CognitoUserPoolLambdaConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a>

---

##### `MfaConfigurationInput`<sup>Optional</sup> <a name="MfaConfigurationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.mfaConfigurationInput"></a>

```go
func MfaConfigurationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PasswordPolicyInput`<sup>Optional</sup> <a name="PasswordPolicyInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.passwordPolicyInput"></a>

```go
func PasswordPolicyInput() CognitoUserPoolPasswordPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a>

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.schemaInput"></a>

```go
func SchemaInput() interface{}
```

- *Type:* interface{}

---

##### `SmsAuthenticationMessageInput`<sup>Optional</sup> <a name="SmsAuthenticationMessageInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsAuthenticationMessageInput"></a>

```go
func SmsAuthenticationMessageInput() *string
```

- *Type:* *string

---

##### `SmsConfigurationInput`<sup>Optional</sup> <a name="SmsConfigurationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsConfigurationInput"></a>

```go
func SmsConfigurationInput() CognitoUserPoolSmsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a>

---

##### `SmsVerificationMessageInput`<sup>Optional</sup> <a name="SmsVerificationMessageInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsVerificationMessageInput"></a>

```go
func SmsVerificationMessageInput() *string
```

- *Type:* *string

---

##### `SoftwareTokenMfaConfigurationInput`<sup>Optional</sup> <a name="SoftwareTokenMfaConfigurationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.softwareTokenMfaConfigurationInput"></a>

```go
func SoftwareTokenMfaConfigurationInput() CognitoUserPoolSoftwareTokenMfaConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UserAttributeUpdateSettingsInput`<sup>Optional</sup> <a name="UserAttributeUpdateSettingsInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userAttributeUpdateSettingsInput"></a>

```go
func UserAttributeUpdateSettingsInput() CognitoUserPoolUserAttributeUpdateSettings
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a>

---

##### `UsernameAttributesInput`<sup>Optional</sup> <a name="UsernameAttributesInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameAttributesInput"></a>

```go
func UsernameAttributesInput() *[]*string
```

- *Type:* *[]*string

---

##### `UsernameConfigurationInput`<sup>Optional</sup> <a name="UsernameConfigurationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameConfigurationInput"></a>

```go
func UsernameConfigurationInput() CognitoUserPoolUsernameConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a>

---

##### `UserPoolAddOnsInput`<sup>Optional</sup> <a name="UserPoolAddOnsInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userPoolAddOnsInput"></a>

```go
func UserPoolAddOnsInput() CognitoUserPoolUserPoolAddOns
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a>

---

##### `VerificationMessageTemplateInput`<sup>Optional</sup> <a name="VerificationMessageTemplateInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.verificationMessageTemplateInput"></a>

```go
func VerificationMessageTemplateInput() CognitoUserPoolVerificationMessageTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a>

---

##### `AliasAttributes`<sup>Required</sup> <a name="AliasAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.aliasAttributes"></a>

```go
func AliasAttributes() *[]*string
```

- *Type:* *[]*string

---

##### `AutoVerifiedAttributes`<sup>Required</sup> <a name="AutoVerifiedAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.autoVerifiedAttributes"></a>

```go
func AutoVerifiedAttributes() *[]*string
```

- *Type:* *[]*string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deletionProtection"></a>

```go
func DeletionProtection() *string
```

- *Type:* *string

---

##### `EmailVerificationMessage`<sup>Required</sup> <a name="EmailVerificationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationMessage"></a>

```go
func EmailVerificationMessage() *string
```

- *Type:* *string

---

##### `EmailVerificationSubject`<sup>Required</sup> <a name="EmailVerificationSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationSubject"></a>

```go
func EmailVerificationSubject() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MfaConfiguration`<sup>Required</sup> <a name="MfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.mfaConfiguration"></a>

```go
func MfaConfiguration() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SmsAuthenticationMessage`<sup>Required</sup> <a name="SmsAuthenticationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsAuthenticationMessage"></a>

```go
func SmsAuthenticationMessage() *string
```

- *Type:* *string

---

##### `SmsVerificationMessage`<sup>Required</sup> <a name="SmsVerificationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsVerificationMessage"></a>

```go
func SmsVerificationMessage() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UsernameAttributes`<sup>Required</sup> <a name="UsernameAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameAttributes"></a>

```go
func UsernameAttributes() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolAccountRecoverySetting <a name="CognitoUserPoolAccountRecoverySetting" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

&cognitouserpool.CognitoUserPoolAccountRecoverySetting {
	RecoveryMechanism: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting.property.recoveryMechanism">RecoveryMechanism</a></code> | <code>interface{}</code> | recovery_mechanism block. |

---

##### `RecoveryMechanism`<sup>Optional</sup> <a name="RecoveryMechanism" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting.property.recoveryMechanism"></a>

```go
RecoveryMechanism interface{}
```

- *Type:* interface{}

recovery_mechanism block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#recovery_mechanism CognitoUserPool#recovery_mechanism}

---

### CognitoUserPoolAccountRecoverySettingRecoveryMechanism <a name="CognitoUserPoolAccountRecoverySettingRecoveryMechanism" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

&cognitouserpool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism {
	Name: *string,
	Priority: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#priority CognitoUserPool#priority}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#priority CognitoUserPool#priority}.

---

### CognitoUserPoolAdminCreateUserConfig <a name="CognitoUserPoolAdminCreateUserConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

&cognitouserpool.CognitoUserPoolAdminCreateUserConfig {
	AllowAdminCreateUserOnly: interface{},
	InviteMessageTemplate: github.com/cdktf/cdktf-provider-aws-go/aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig.property.allowAdminCreateUserOnly">AllowAdminCreateUserOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#allow_admin_create_user_only CognitoUserPool#allow_admin_create_user_only}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig.property.inviteMessageTemplate">InviteMessageTemplate</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a></code> | invite_message_template block. |

---

##### `AllowAdminCreateUserOnly`<sup>Optional</sup> <a name="AllowAdminCreateUserOnly" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig.property.allowAdminCreateUserOnly"></a>

```go
AllowAdminCreateUserOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#allow_admin_create_user_only CognitoUserPool#allow_admin_create_user_only}.

---

##### `InviteMessageTemplate`<sup>Optional</sup> <a name="InviteMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig.property.inviteMessageTemplate"></a>

```go
InviteMessageTemplate CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a>

invite_message_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#invite_message_template CognitoUserPool#invite_message_template}

---

### CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate <a name="CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

&cognitouserpool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate {
	EmailMessage: *string,
	EmailSubject: *string,
	SmsMessage: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.property.emailMessage">EmailMessage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message CognitoUserPool#email_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.property.emailSubject">EmailSubject</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject CognitoUserPool#email_subject}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.property.smsMessage">SmsMessage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_message CognitoUserPool#sms_message}. |

---

##### `EmailMessage`<sup>Optional</sup> <a name="EmailMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.property.emailMessage"></a>

```go
EmailMessage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message CognitoUserPool#email_message}.

---

##### `EmailSubject`<sup>Optional</sup> <a name="EmailSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.property.emailSubject"></a>

```go
EmailSubject *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject CognitoUserPool#email_subject}.

---

##### `SmsMessage`<sup>Optional</sup> <a name="SmsMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.property.smsMessage"></a>

```go
SmsMessage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_message CognitoUserPool#sms_message}.

---

### CognitoUserPoolConfig <a name="CognitoUserPoolConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

&cognitouserpool.CognitoUserPoolConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AccountRecoverySetting: github.com/cdktf/cdktf-provider-aws-go/aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting,
	AdminCreateUserConfig: github.com/cdktf/cdktf-provider-aws-go/aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig,
	AliasAttributes: *[]*string,
	AutoVerifiedAttributes: *[]*string,
	DeletionProtection: *string,
	DeviceConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration,
	EmailConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.cognitoUserPool.CognitoUserPoolEmailConfiguration,
	EmailVerificationMessage: *string,
	EmailVerificationSubject: *string,
	Id: *string,
	LambdaConfig: github.com/cdktf/cdktf-provider-aws-go/aws.cognitoUserPool.CognitoUserPoolLambdaConfig,
	MfaConfiguration: *string,
	PasswordPolicy: github.com/cdktf/cdktf-provider-aws-go/aws.cognitoUserPool.CognitoUserPoolPasswordPolicy,
	Schema: interface{},
	SmsAuthenticationMessage: *string,
	SmsConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.cognitoUserPool.CognitoUserPoolSmsConfiguration,
	SmsVerificationMessage: *string,
	SoftwareTokenMfaConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	UserAttributeUpdateSettings: github.com/cdktf/cdktf-provider-aws-go/aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings,
	UsernameAttributes: *[]*string,
	UsernameConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration,
	UserPoolAddOns: github.com/cdktf/cdktf-provider-aws-go/aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns,
	VerificationMessageTemplate: github.com/cdktf/cdktf-provider-aws-go/aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.accountRecoverySetting">AccountRecoverySetting</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a></code> | account_recovery_setting block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.adminCreateUserConfig">AdminCreateUserConfig</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a></code> | admin_create_user_config block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.aliasAttributes">AliasAttributes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#alias_attributes CognitoUserPool#alias_attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.autoVerifiedAttributes">AutoVerifiedAttributes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#auto_verified_attributes CognitoUserPool#auto_verified_attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.deletionProtection">DeletionProtection</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#deletion_protection CognitoUserPool#deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.deviceConfiguration">DeviceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a></code> | device_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.emailConfiguration">EmailConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a></code> | email_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.emailVerificationMessage">EmailVerificationMessage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_verification_message CognitoUserPool#email_verification_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.emailVerificationSubject">EmailVerificationSubject</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_verification_subject CognitoUserPool#email_verification_subject}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#id CognitoUserPool#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.lambdaConfig">LambdaConfig</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a></code> | lambda_config block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.mfaConfiguration">MfaConfiguration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#mfa_configuration CognitoUserPool#mfa_configuration}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.passwordPolicy">PasswordPolicy</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a></code> | password_policy block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.schema">Schema</a></code> | <code>interface{}</code> | schema block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.smsAuthenticationMessage">SmsAuthenticationMessage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_authentication_message CognitoUserPool#sms_authentication_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.smsConfiguration">SmsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a></code> | sms_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.smsVerificationMessage">SmsVerificationMessage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_verification_message CognitoUserPool#sms_verification_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.softwareTokenMfaConfiguration">SoftwareTokenMfaConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a></code> | software_token_mfa_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#tags CognitoUserPool#tags}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#tags_all CognitoUserPool#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.userAttributeUpdateSettings">UserAttributeUpdateSettings</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a></code> | user_attribute_update_settings block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.usernameAttributes">UsernameAttributes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#username_attributes CognitoUserPool#username_attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.usernameConfiguration">UsernameConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a></code> | username_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.userPoolAddOns">UserPoolAddOns</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a></code> | user_pool_add_ons block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.verificationMessageTemplate">VerificationMessageTemplate</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a></code> | verification_message_template block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}.

---

##### `AccountRecoverySetting`<sup>Optional</sup> <a name="AccountRecoverySetting" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.accountRecoverySetting"></a>

```go
AccountRecoverySetting CognitoUserPoolAccountRecoverySetting
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a>

account_recovery_setting block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#account_recovery_setting CognitoUserPool#account_recovery_setting}

---

##### `AdminCreateUserConfig`<sup>Optional</sup> <a name="AdminCreateUserConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.adminCreateUserConfig"></a>

```go
AdminCreateUserConfig CognitoUserPoolAdminCreateUserConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a>

admin_create_user_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#admin_create_user_config CognitoUserPool#admin_create_user_config}

---

##### `AliasAttributes`<sup>Optional</sup> <a name="AliasAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.aliasAttributes"></a>

```go
AliasAttributes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#alias_attributes CognitoUserPool#alias_attributes}.

---

##### `AutoVerifiedAttributes`<sup>Optional</sup> <a name="AutoVerifiedAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.autoVerifiedAttributes"></a>

```go
AutoVerifiedAttributes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#auto_verified_attributes CognitoUserPool#auto_verified_attributes}.

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.deletionProtection"></a>

```go
DeletionProtection *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#deletion_protection CognitoUserPool#deletion_protection}.

---

##### `DeviceConfiguration`<sup>Optional</sup> <a name="DeviceConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.deviceConfiguration"></a>

```go
DeviceConfiguration CognitoUserPoolDeviceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a>

device_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#device_configuration CognitoUserPool#device_configuration}

---

##### `EmailConfiguration`<sup>Optional</sup> <a name="EmailConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.emailConfiguration"></a>

```go
EmailConfiguration CognitoUserPoolEmailConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a>

email_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_configuration CognitoUserPool#email_configuration}

---

##### `EmailVerificationMessage`<sup>Optional</sup> <a name="EmailVerificationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.emailVerificationMessage"></a>

```go
EmailVerificationMessage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_verification_message CognitoUserPool#email_verification_message}.

---

##### `EmailVerificationSubject`<sup>Optional</sup> <a name="EmailVerificationSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.emailVerificationSubject"></a>

```go
EmailVerificationSubject *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_verification_subject CognitoUserPool#email_verification_subject}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#id CognitoUserPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LambdaConfig`<sup>Optional</sup> <a name="LambdaConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.lambdaConfig"></a>

```go
LambdaConfig CognitoUserPoolLambdaConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a>

lambda_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_config CognitoUserPool#lambda_config}

---

##### `MfaConfiguration`<sup>Optional</sup> <a name="MfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.mfaConfiguration"></a>

```go
MfaConfiguration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#mfa_configuration CognitoUserPool#mfa_configuration}.

---

##### `PasswordPolicy`<sup>Optional</sup> <a name="PasswordPolicy" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.passwordPolicy"></a>

```go
PasswordPolicy CognitoUserPoolPasswordPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a>

password_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#password_policy CognitoUserPool#password_policy}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.schema"></a>

```go
Schema interface{}
```

- *Type:* interface{}

schema block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#schema CognitoUserPool#schema}

---

##### `SmsAuthenticationMessage`<sup>Optional</sup> <a name="SmsAuthenticationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.smsAuthenticationMessage"></a>

```go
SmsAuthenticationMessage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_authentication_message CognitoUserPool#sms_authentication_message}.

---

##### `SmsConfiguration`<sup>Optional</sup> <a name="SmsConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.smsConfiguration"></a>

```go
SmsConfiguration CognitoUserPoolSmsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a>

sms_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_configuration CognitoUserPool#sms_configuration}

---

##### `SmsVerificationMessage`<sup>Optional</sup> <a name="SmsVerificationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.smsVerificationMessage"></a>

```go
SmsVerificationMessage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_verification_message CognitoUserPool#sms_verification_message}.

---

##### `SoftwareTokenMfaConfiguration`<sup>Optional</sup> <a name="SoftwareTokenMfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.softwareTokenMfaConfiguration"></a>

```go
SoftwareTokenMfaConfiguration CognitoUserPoolSoftwareTokenMfaConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a>

software_token_mfa_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#software_token_mfa_configuration CognitoUserPool#software_token_mfa_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#tags CognitoUserPool#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#tags_all CognitoUserPool#tags_all}.

---

##### `UserAttributeUpdateSettings`<sup>Optional</sup> <a name="UserAttributeUpdateSettings" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.userAttributeUpdateSettings"></a>

```go
UserAttributeUpdateSettings CognitoUserPoolUserAttributeUpdateSettings
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a>

user_attribute_update_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#user_attribute_update_settings CognitoUserPool#user_attribute_update_settings}

---

##### `UsernameAttributes`<sup>Optional</sup> <a name="UsernameAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.usernameAttributes"></a>

```go
UsernameAttributes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#username_attributes CognitoUserPool#username_attributes}.

---

##### `UsernameConfiguration`<sup>Optional</sup> <a name="UsernameConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.usernameConfiguration"></a>

```go
UsernameConfiguration CognitoUserPoolUsernameConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a>

username_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#username_configuration CognitoUserPool#username_configuration}

---

##### `UserPoolAddOns`<sup>Optional</sup> <a name="UserPoolAddOns" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.userPoolAddOns"></a>

```go
UserPoolAddOns CognitoUserPoolUserPoolAddOns
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a>

user_pool_add_ons block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#user_pool_add_ons CognitoUserPool#user_pool_add_ons}

---

##### `VerificationMessageTemplate`<sup>Optional</sup> <a name="VerificationMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.verificationMessageTemplate"></a>

```go
VerificationMessageTemplate CognitoUserPoolVerificationMessageTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a>

verification_message_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#verification_message_template CognitoUserPool#verification_message_template}

---

### CognitoUserPoolDeviceConfiguration <a name="CognitoUserPoolDeviceConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

&cognitouserpool.CognitoUserPoolDeviceConfiguration {
	ChallengeRequiredOnNewDevice: interface{},
	DeviceOnlyRememberedOnUserPrompt: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration.property.challengeRequiredOnNewDevice">ChallengeRequiredOnNewDevice</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#challenge_required_on_new_device CognitoUserPool#challenge_required_on_new_device}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration.property.deviceOnlyRememberedOnUserPrompt">DeviceOnlyRememberedOnUserPrompt</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#device_only_remembered_on_user_prompt CognitoUserPool#device_only_remembered_on_user_prompt}. |

---

##### `ChallengeRequiredOnNewDevice`<sup>Optional</sup> <a name="ChallengeRequiredOnNewDevice" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration.property.challengeRequiredOnNewDevice"></a>

```go
ChallengeRequiredOnNewDevice interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#challenge_required_on_new_device CognitoUserPool#challenge_required_on_new_device}.

---

##### `DeviceOnlyRememberedOnUserPrompt`<sup>Optional</sup> <a name="DeviceOnlyRememberedOnUserPrompt" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration.property.deviceOnlyRememberedOnUserPrompt"></a>

```go
DeviceOnlyRememberedOnUserPrompt interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#device_only_remembered_on_user_prompt CognitoUserPool#device_only_remembered_on_user_prompt}.

---

### CognitoUserPoolEmailConfiguration <a name="CognitoUserPoolEmailConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

&cognitouserpool.CognitoUserPoolEmailConfiguration {
	ConfigurationSet: *string,
	EmailSendingAccount: *string,
	FromEmailAddress: *string,
	ReplyToEmailAddress: *string,
	SourceArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.configurationSet">ConfigurationSet</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#configuration_set CognitoUserPool#configuration_set}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.emailSendingAccount">EmailSendingAccount</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_sending_account CognitoUserPool#email_sending_account}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.fromEmailAddress">FromEmailAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#from_email_address CognitoUserPool#from_email_address}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.replyToEmailAddress">ReplyToEmailAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#reply_to_email_address CognitoUserPool#reply_to_email_address}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.sourceArn">SourceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#source_arn CognitoUserPool#source_arn}. |

---

##### `ConfigurationSet`<sup>Optional</sup> <a name="ConfigurationSet" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.configurationSet"></a>

```go
ConfigurationSet *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#configuration_set CognitoUserPool#configuration_set}.

---

##### `EmailSendingAccount`<sup>Optional</sup> <a name="EmailSendingAccount" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.emailSendingAccount"></a>

```go
EmailSendingAccount *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_sending_account CognitoUserPool#email_sending_account}.

---

##### `FromEmailAddress`<sup>Optional</sup> <a name="FromEmailAddress" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.fromEmailAddress"></a>

```go
FromEmailAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#from_email_address CognitoUserPool#from_email_address}.

---

##### `ReplyToEmailAddress`<sup>Optional</sup> <a name="ReplyToEmailAddress" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.replyToEmailAddress"></a>

```go
ReplyToEmailAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#reply_to_email_address CognitoUserPool#reply_to_email_address}.

---

##### `SourceArn`<sup>Optional</sup> <a name="SourceArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.sourceArn"></a>

```go
SourceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#source_arn CognitoUserPool#source_arn}.

---

### CognitoUserPoolLambdaConfig <a name="CognitoUserPoolLambdaConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

&cognitouserpool.CognitoUserPoolLambdaConfig {
	CreateAuthChallenge: *string,
	CustomEmailSender: github.com/cdktf/cdktf-provider-aws-go/aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender,
	CustomMessage: *string,
	CustomSmsSender: github.com/cdktf/cdktf-provider-aws-go/aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender,
	DefineAuthChallenge: *string,
	KmsKeyId: *string,
	PostAuthentication: *string,
	PostConfirmation: *string,
	PreAuthentication: *string,
	PreSignUp: *string,
	PreTokenGeneration: *string,
	UserMigration: *string,
	VerifyAuthChallengeResponse: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.createAuthChallenge">CreateAuthChallenge</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#create_auth_challenge CognitoUserPool#create_auth_challenge}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.customEmailSender">CustomEmailSender</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a></code> | custom_email_sender block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.customMessage">CustomMessage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#custom_message CognitoUserPool#custom_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.customSmsSender">CustomSmsSender</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a></code> | custom_sms_sender block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.defineAuthChallenge">DefineAuthChallenge</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#define_auth_challenge CognitoUserPool#define_auth_challenge}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#kms_key_id CognitoUserPool#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.postAuthentication">PostAuthentication</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#post_authentication CognitoUserPool#post_authentication}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.postConfirmation">PostConfirmation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#post_confirmation CognitoUserPool#post_confirmation}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.preAuthentication">PreAuthentication</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_authentication CognitoUserPool#pre_authentication}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.preSignUp">PreSignUp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_sign_up CognitoUserPool#pre_sign_up}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.preTokenGeneration">PreTokenGeneration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_token_generation CognitoUserPool#pre_token_generation}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.userMigration">UserMigration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#user_migration CognitoUserPool#user_migration}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.verifyAuthChallengeResponse">VerifyAuthChallengeResponse</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#verify_auth_challenge_response CognitoUserPool#verify_auth_challenge_response}. |

---

##### `CreateAuthChallenge`<sup>Optional</sup> <a name="CreateAuthChallenge" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.createAuthChallenge"></a>

```go
CreateAuthChallenge *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#create_auth_challenge CognitoUserPool#create_auth_challenge}.

---

##### `CustomEmailSender`<sup>Optional</sup> <a name="CustomEmailSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.customEmailSender"></a>

```go
CustomEmailSender CognitoUserPoolLambdaConfigCustomEmailSender
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a>

custom_email_sender block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#custom_email_sender CognitoUserPool#custom_email_sender}

---

##### `CustomMessage`<sup>Optional</sup> <a name="CustomMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.customMessage"></a>

```go
CustomMessage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#custom_message CognitoUserPool#custom_message}.

---

##### `CustomSmsSender`<sup>Optional</sup> <a name="CustomSmsSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.customSmsSender"></a>

```go
CustomSmsSender CognitoUserPoolLambdaConfigCustomSmsSender
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a>

custom_sms_sender block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#custom_sms_sender CognitoUserPool#custom_sms_sender}

---

##### `DefineAuthChallenge`<sup>Optional</sup> <a name="DefineAuthChallenge" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.defineAuthChallenge"></a>

```go
DefineAuthChallenge *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#define_auth_challenge CognitoUserPool#define_auth_challenge}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#kms_key_id CognitoUserPool#kms_key_id}.

---

##### `PostAuthentication`<sup>Optional</sup> <a name="PostAuthentication" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.postAuthentication"></a>

```go
PostAuthentication *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#post_authentication CognitoUserPool#post_authentication}.

---

##### `PostConfirmation`<sup>Optional</sup> <a name="PostConfirmation" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.postConfirmation"></a>

```go
PostConfirmation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#post_confirmation CognitoUserPool#post_confirmation}.

---

##### `PreAuthentication`<sup>Optional</sup> <a name="PreAuthentication" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.preAuthentication"></a>

```go
PreAuthentication *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_authentication CognitoUserPool#pre_authentication}.

---

##### `PreSignUp`<sup>Optional</sup> <a name="PreSignUp" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.preSignUp"></a>

```go
PreSignUp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_sign_up CognitoUserPool#pre_sign_up}.

---

##### `PreTokenGeneration`<sup>Optional</sup> <a name="PreTokenGeneration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.preTokenGeneration"></a>

```go
PreTokenGeneration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_token_generation CognitoUserPool#pre_token_generation}.

---

##### `UserMigration`<sup>Optional</sup> <a name="UserMigration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.userMigration"></a>

```go
UserMigration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#user_migration CognitoUserPool#user_migration}.

---

##### `VerifyAuthChallengeResponse`<sup>Optional</sup> <a name="VerifyAuthChallengeResponse" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.verifyAuthChallengeResponse"></a>

```go
VerifyAuthChallengeResponse *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#verify_auth_challenge_response CognitoUserPool#verify_auth_challenge_response}.

---

### CognitoUserPoolLambdaConfigCustomEmailSender <a name="CognitoUserPoolLambdaConfigCustomEmailSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

&cognitouserpool.CognitoUserPoolLambdaConfigCustomEmailSender {
	LambdaArn: *string,
	LambdaVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_arn CognitoUserPool#lambda_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender.property.lambdaVersion">LambdaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_version CognitoUserPool#lambda_version}. |

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender.property.lambdaArn"></a>

```go
LambdaArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_arn CognitoUserPool#lambda_arn}.

---

##### `LambdaVersion`<sup>Required</sup> <a name="LambdaVersion" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender.property.lambdaVersion"></a>

```go
LambdaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_version CognitoUserPool#lambda_version}.

---

### CognitoUserPoolLambdaConfigCustomSmsSender <a name="CognitoUserPoolLambdaConfigCustomSmsSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

&cognitouserpool.CognitoUserPoolLambdaConfigCustomSmsSender {
	LambdaArn: *string,
	LambdaVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_arn CognitoUserPool#lambda_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender.property.lambdaVersion">LambdaVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_version CognitoUserPool#lambda_version}. |

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender.property.lambdaArn"></a>

```go
LambdaArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_arn CognitoUserPool#lambda_arn}.

---

##### `LambdaVersion`<sup>Required</sup> <a name="LambdaVersion" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender.property.lambdaVersion"></a>

```go
LambdaVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_version CognitoUserPool#lambda_version}.

---

### CognitoUserPoolPasswordPolicy <a name="CognitoUserPoolPasswordPolicy" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

&cognitouserpool.CognitoUserPoolPasswordPolicy {
	MinimumLength: *f64,
	RequireLowercase: interface{},
	RequireNumbers: interface{},
	RequireSymbols: interface{},
	RequireUppercase: interface{},
	TemporaryPasswordValidityDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.minimumLength">MinimumLength</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#minimum_length CognitoUserPool#minimum_length}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireLowercase">RequireLowercase</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_lowercase CognitoUserPool#require_lowercase}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireNumbers">RequireNumbers</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_numbers CognitoUserPool#require_numbers}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireSymbols">RequireSymbols</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_symbols CognitoUserPool#require_symbols}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireUppercase">RequireUppercase</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_uppercase CognitoUserPool#require_uppercase}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.temporaryPasswordValidityDays">TemporaryPasswordValidityDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#temporary_password_validity_days CognitoUserPool#temporary_password_validity_days}. |

---

##### `MinimumLength`<sup>Optional</sup> <a name="MinimumLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.minimumLength"></a>

```go
MinimumLength *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#minimum_length CognitoUserPool#minimum_length}.

---

##### `RequireLowercase`<sup>Optional</sup> <a name="RequireLowercase" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireLowercase"></a>

```go
RequireLowercase interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_lowercase CognitoUserPool#require_lowercase}.

---

##### `RequireNumbers`<sup>Optional</sup> <a name="RequireNumbers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireNumbers"></a>

```go
RequireNumbers interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_numbers CognitoUserPool#require_numbers}.

---

##### `RequireSymbols`<sup>Optional</sup> <a name="RequireSymbols" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireSymbols"></a>

```go
RequireSymbols interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_symbols CognitoUserPool#require_symbols}.

---

##### `RequireUppercase`<sup>Optional</sup> <a name="RequireUppercase" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireUppercase"></a>

```go
RequireUppercase interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_uppercase CognitoUserPool#require_uppercase}.

---

##### `TemporaryPasswordValidityDays`<sup>Optional</sup> <a name="TemporaryPasswordValidityDays" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.temporaryPasswordValidityDays"></a>

```go
TemporaryPasswordValidityDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#temporary_password_validity_days CognitoUserPool#temporary_password_validity_days}.

---

### CognitoUserPoolSchema <a name="CognitoUserPoolSchema" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

&cognitouserpool.CognitoUserPoolSchema {
	AttributeDataType: *string,
	Name: *string,
	DeveloperOnlyAttribute: interface{},
	Mutable: interface{},
	NumberAttributeConstraints: github.com/cdktf/cdktf-provider-aws-go/aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints,
	Required: interface{},
	StringAttributeConstraints: github.com/cdktf/cdktf-provider-aws-go/aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.attributeDataType">AttributeDataType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#attribute_data_type CognitoUserPool#attribute_data_type}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.developerOnlyAttribute">DeveloperOnlyAttribute</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#developer_only_attribute CognitoUserPool#developer_only_attribute}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.mutable">Mutable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#mutable CognitoUserPool#mutable}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.numberAttributeConstraints">NumberAttributeConstraints</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints">CognitoUserPoolSchemaNumberAttributeConstraints</a></code> | number_attribute_constraints block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.required">Required</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#required CognitoUserPool#required}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.stringAttributeConstraints">StringAttributeConstraints</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints">CognitoUserPoolSchemaStringAttributeConstraints</a></code> | string_attribute_constraints block. |

---

##### `AttributeDataType`<sup>Required</sup> <a name="AttributeDataType" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.attributeDataType"></a>

```go
AttributeDataType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#attribute_data_type CognitoUserPool#attribute_data_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}.

---

##### `DeveloperOnlyAttribute`<sup>Optional</sup> <a name="DeveloperOnlyAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.developerOnlyAttribute"></a>

```go
DeveloperOnlyAttribute interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#developer_only_attribute CognitoUserPool#developer_only_attribute}.

---

##### `Mutable`<sup>Optional</sup> <a name="Mutable" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.mutable"></a>

```go
Mutable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#mutable CognitoUserPool#mutable}.

---

##### `NumberAttributeConstraints`<sup>Optional</sup> <a name="NumberAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.numberAttributeConstraints"></a>

```go
NumberAttributeConstraints CognitoUserPoolSchemaNumberAttributeConstraints
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints">CognitoUserPoolSchemaNumberAttributeConstraints</a>

number_attribute_constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#number_attribute_constraints CognitoUserPool#number_attribute_constraints}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#required CognitoUserPool#required}.

---

##### `StringAttributeConstraints`<sup>Optional</sup> <a name="StringAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.stringAttributeConstraints"></a>

```go
StringAttributeConstraints CognitoUserPoolSchemaStringAttributeConstraints
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints">CognitoUserPoolSchemaStringAttributeConstraints</a>

string_attribute_constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#string_attribute_constraints CognitoUserPool#string_attribute_constraints}

---

### CognitoUserPoolSchemaNumberAttributeConstraints <a name="CognitoUserPoolSchemaNumberAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

&cognitouserpool.CognitoUserPoolSchemaNumberAttributeConstraints {
	MaxValue: *string,
	MinValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints.property.maxValue">MaxValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#max_value CognitoUserPool#max_value}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints.property.minValue">MinValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#min_value CognitoUserPool#min_value}. |

---

##### `MaxValue`<sup>Optional</sup> <a name="MaxValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints.property.maxValue"></a>

```go
MaxValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#max_value CognitoUserPool#max_value}.

---

##### `MinValue`<sup>Optional</sup> <a name="MinValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints.property.minValue"></a>

```go
MinValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#min_value CognitoUserPool#min_value}.

---

### CognitoUserPoolSchemaStringAttributeConstraints <a name="CognitoUserPoolSchemaStringAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

&cognitouserpool.CognitoUserPoolSchemaStringAttributeConstraints {
	MaxLength: *string,
	MinLength: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints.property.maxLength">MaxLength</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#max_length CognitoUserPool#max_length}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints.property.minLength">MinLength</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#min_length CognitoUserPool#min_length}. |

---

##### `MaxLength`<sup>Optional</sup> <a name="MaxLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints.property.maxLength"></a>

```go
MaxLength *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#max_length CognitoUserPool#max_length}.

---

##### `MinLength`<sup>Optional</sup> <a name="MinLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints.property.minLength"></a>

```go
MinLength *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#min_length CognitoUserPool#min_length}.

---

### CognitoUserPoolSmsConfiguration <a name="CognitoUserPoolSmsConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

&cognitouserpool.CognitoUserPoolSmsConfiguration {
	ExternalId: *string,
	SnsCallerArn: *string,
	SnsRegion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.property.externalId">ExternalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#external_id CognitoUserPool#external_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.property.snsCallerArn">SnsCallerArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sns_caller_arn CognitoUserPool#sns_caller_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.property.snsRegion">SnsRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sns_region CognitoUserPool#sns_region}. |

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.property.externalId"></a>

```go
ExternalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#external_id CognitoUserPool#external_id}.

---

##### `SnsCallerArn`<sup>Required</sup> <a name="SnsCallerArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.property.snsCallerArn"></a>

```go
SnsCallerArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sns_caller_arn CognitoUserPool#sns_caller_arn}.

---

##### `SnsRegion`<sup>Optional</sup> <a name="SnsRegion" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.property.snsRegion"></a>

```go
SnsRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sns_region CognitoUserPool#sns_region}.

---

### CognitoUserPoolSoftwareTokenMfaConfiguration <a name="CognitoUserPoolSoftwareTokenMfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

&cognitouserpool.CognitoUserPoolSoftwareTokenMfaConfiguration {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#enabled CognitoUserPool#enabled}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#enabled CognitoUserPool#enabled}.

---

### CognitoUserPoolUserAttributeUpdateSettings <a name="CognitoUserPoolUserAttributeUpdateSettings" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

&cognitouserpool.CognitoUserPoolUserAttributeUpdateSettings {
	AttributesRequireVerificationBeforeUpdate: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings.property.attributesRequireVerificationBeforeUpdate">AttributesRequireVerificationBeforeUpdate</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#attributes_require_verification_before_update CognitoUserPool#attributes_require_verification_before_update}. |

---

##### `AttributesRequireVerificationBeforeUpdate`<sup>Required</sup> <a name="AttributesRequireVerificationBeforeUpdate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings.property.attributesRequireVerificationBeforeUpdate"></a>

```go
AttributesRequireVerificationBeforeUpdate *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#attributes_require_verification_before_update CognitoUserPool#attributes_require_verification_before_update}.

---

### CognitoUserPoolUsernameConfiguration <a name="CognitoUserPoolUsernameConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

&cognitouserpool.CognitoUserPoolUsernameConfiguration {
	CaseSensitive: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration.property.caseSensitive">CaseSensitive</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#case_sensitive CognitoUserPool#case_sensitive}. |

---

##### `CaseSensitive`<sup>Required</sup> <a name="CaseSensitive" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration.property.caseSensitive"></a>

```go
CaseSensitive interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#case_sensitive CognitoUserPool#case_sensitive}.

---

### CognitoUserPoolUserPoolAddOns <a name="CognitoUserPoolUserPoolAddOns" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

&cognitouserpool.CognitoUserPoolUserPoolAddOns {
	AdvancedSecurityMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns.property.advancedSecurityMode">AdvancedSecurityMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#advanced_security_mode CognitoUserPool#advanced_security_mode}. |

---

##### `AdvancedSecurityMode`<sup>Required</sup> <a name="AdvancedSecurityMode" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns.property.advancedSecurityMode"></a>

```go
AdvancedSecurityMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#advanced_security_mode CognitoUserPool#advanced_security_mode}.

---

### CognitoUserPoolVerificationMessageTemplate <a name="CognitoUserPoolVerificationMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

&cognitouserpool.CognitoUserPoolVerificationMessageTemplate {
	DefaultEmailOption: *string,
	EmailMessage: *string,
	EmailMessageByLink: *string,
	EmailSubject: *string,
	EmailSubjectByLink: *string,
	SmsMessage: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.defaultEmailOption">DefaultEmailOption</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#default_email_option CognitoUserPool#default_email_option}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailMessage">EmailMessage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message CognitoUserPool#email_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailMessageByLink">EmailMessageByLink</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message_by_link CognitoUserPool#email_message_by_link}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailSubject">EmailSubject</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject CognitoUserPool#email_subject}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailSubjectByLink">EmailSubjectByLink</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject_by_link CognitoUserPool#email_subject_by_link}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.smsMessage">SmsMessage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_message CognitoUserPool#sms_message}. |

---

##### `DefaultEmailOption`<sup>Optional</sup> <a name="DefaultEmailOption" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.defaultEmailOption"></a>

```go
DefaultEmailOption *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#default_email_option CognitoUserPool#default_email_option}.

---

##### `EmailMessage`<sup>Optional</sup> <a name="EmailMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailMessage"></a>

```go
EmailMessage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message CognitoUserPool#email_message}.

---

##### `EmailMessageByLink`<sup>Optional</sup> <a name="EmailMessageByLink" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailMessageByLink"></a>

```go
EmailMessageByLink *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message_by_link CognitoUserPool#email_message_by_link}.

---

##### `EmailSubject`<sup>Optional</sup> <a name="EmailSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailSubject"></a>

```go
EmailSubject *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject CognitoUserPool#email_subject}.

---

##### `EmailSubjectByLink`<sup>Optional</sup> <a name="EmailSubjectByLink" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailSubjectByLink"></a>

```go
EmailSubjectByLink *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject_by_link CognitoUserPool#email_subject_by_link}.

---

##### `SmsMessage`<sup>Optional</sup> <a name="SmsMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.smsMessage"></a>

```go
SmsMessage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_message CognitoUserPool#sms_message}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoUserPoolAccountRecoverySettingOutputReference <a name="CognitoUserPoolAccountRecoverySettingOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

cognitouserpool.NewCognitoUserPoolAccountRecoverySettingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CognitoUserPoolAccountRecoverySettingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.putRecoveryMechanism">PutRecoveryMechanism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.resetRecoveryMechanism">ResetRecoveryMechanism</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRecoveryMechanism` <a name="PutRecoveryMechanism" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.putRecoveryMechanism"></a>

```go
func PutRecoveryMechanism(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.putRecoveryMechanism.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRecoveryMechanism` <a name="ResetRecoveryMechanism" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.resetRecoveryMechanism"></a>

```go
func ResetRecoveryMechanism()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.recoveryMechanism">RecoveryMechanism</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList">CognitoUserPoolAccountRecoverySettingRecoveryMechanismList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.recoveryMechanismInput">RecoveryMechanismInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RecoveryMechanism`<sup>Required</sup> <a name="RecoveryMechanism" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.recoveryMechanism"></a>

```go
func RecoveryMechanism() CognitoUserPoolAccountRecoverySettingRecoveryMechanismList
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList">CognitoUserPoolAccountRecoverySettingRecoveryMechanismList</a>

---

##### `RecoveryMechanismInput`<sup>Optional</sup> <a name="RecoveryMechanismInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.recoveryMechanismInput"></a>

```go
func RecoveryMechanismInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.internalValue"></a>

```go
func InternalValue() CognitoUserPoolAccountRecoverySetting
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a>

---


### CognitoUserPoolAccountRecoverySettingRecoveryMechanismList <a name="CognitoUserPoolAccountRecoverySettingRecoveryMechanismList" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

cognitouserpool.NewCognitoUserPoolAccountRecoverySettingRecoveryMechanismList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CognitoUserPoolAccountRecoverySettingRecoveryMechanismList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.get"></a>

```go
func Get(index *f64) CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference <a name="CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

cognitouserpool.NewCognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference <a name="CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

cognitouserpool.NewCognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resetEmailMessage">ResetEmailMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resetEmailSubject">ResetEmailSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resetSmsMessage">ResetSmsMessage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmailMessage` <a name="ResetEmailMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resetEmailMessage"></a>

```go
func ResetEmailMessage()
```

##### `ResetEmailSubject` <a name="ResetEmailSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resetEmailSubject"></a>

```go
func ResetEmailSubject()
```

##### `ResetSmsMessage` <a name="ResetSmsMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resetSmsMessage"></a>

```go
func ResetSmsMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailMessageInput">EmailMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailSubjectInput">EmailSubjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.smsMessageInput">SmsMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailMessage">EmailMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailSubject">EmailSubject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.smsMessage">SmsMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailMessageInput`<sup>Optional</sup> <a name="EmailMessageInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailMessageInput"></a>

```go
func EmailMessageInput() *string
```

- *Type:* *string

---

##### `EmailSubjectInput`<sup>Optional</sup> <a name="EmailSubjectInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailSubjectInput"></a>

```go
func EmailSubjectInput() *string
```

- *Type:* *string

---

##### `SmsMessageInput`<sup>Optional</sup> <a name="SmsMessageInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.smsMessageInput"></a>

```go
func SmsMessageInput() *string
```

- *Type:* *string

---

##### `EmailMessage`<sup>Required</sup> <a name="EmailMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailMessage"></a>

```go
func EmailMessage() *string
```

- *Type:* *string

---

##### `EmailSubject`<sup>Required</sup> <a name="EmailSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailSubject"></a>

```go
func EmailSubject() *string
```

- *Type:* *string

---

##### `SmsMessage`<sup>Required</sup> <a name="SmsMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.smsMessage"></a>

```go
func SmsMessage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a>

---


### CognitoUserPoolAdminCreateUserConfigOutputReference <a name="CognitoUserPoolAdminCreateUserConfigOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

cognitouserpool.NewCognitoUserPoolAdminCreateUserConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CognitoUserPoolAdminCreateUserConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.putInviteMessageTemplate">PutInviteMessageTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.resetAllowAdminCreateUserOnly">ResetAllowAdminCreateUserOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.resetInviteMessageTemplate">ResetInviteMessageTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInviteMessageTemplate` <a name="PutInviteMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.putInviteMessageTemplate"></a>

```go
func PutInviteMessageTemplate(value CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.putInviteMessageTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a>

---

##### `ResetAllowAdminCreateUserOnly` <a name="ResetAllowAdminCreateUserOnly" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.resetAllowAdminCreateUserOnly"></a>

```go
func ResetAllowAdminCreateUserOnly()
```

##### `ResetInviteMessageTemplate` <a name="ResetInviteMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.resetInviteMessageTemplate"></a>

```go
func ResetInviteMessageTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.inviteMessageTemplate">InviteMessageTemplate</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.allowAdminCreateUserOnlyInput">AllowAdminCreateUserOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.inviteMessageTemplateInput">InviteMessageTemplateInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.allowAdminCreateUserOnly">AllowAdminCreateUserOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InviteMessageTemplate`<sup>Required</sup> <a name="InviteMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.inviteMessageTemplate"></a>

```go
func InviteMessageTemplate() CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference</a>

---

##### `AllowAdminCreateUserOnlyInput`<sup>Optional</sup> <a name="AllowAdminCreateUserOnlyInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.allowAdminCreateUserOnlyInput"></a>

```go
func AllowAdminCreateUserOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `InviteMessageTemplateInput`<sup>Optional</sup> <a name="InviteMessageTemplateInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.inviteMessageTemplateInput"></a>

```go
func InviteMessageTemplateInput() CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a>

---

##### `AllowAdminCreateUserOnly`<sup>Required</sup> <a name="AllowAdminCreateUserOnly" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.allowAdminCreateUserOnly"></a>

```go
func AllowAdminCreateUserOnly() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CognitoUserPoolAdminCreateUserConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a>

---


### CognitoUserPoolDeviceConfigurationOutputReference <a name="CognitoUserPoolDeviceConfigurationOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

cognitouserpool.NewCognitoUserPoolDeviceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CognitoUserPoolDeviceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.resetChallengeRequiredOnNewDevice">ResetChallengeRequiredOnNewDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.resetDeviceOnlyRememberedOnUserPrompt">ResetDeviceOnlyRememberedOnUserPrompt</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChallengeRequiredOnNewDevice` <a name="ResetChallengeRequiredOnNewDevice" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.resetChallengeRequiredOnNewDevice"></a>

```go
func ResetChallengeRequiredOnNewDevice()
```

##### `ResetDeviceOnlyRememberedOnUserPrompt` <a name="ResetDeviceOnlyRememberedOnUserPrompt" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.resetDeviceOnlyRememberedOnUserPrompt"></a>

```go
func ResetDeviceOnlyRememberedOnUserPrompt()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.challengeRequiredOnNewDeviceInput">ChallengeRequiredOnNewDeviceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.deviceOnlyRememberedOnUserPromptInput">DeviceOnlyRememberedOnUserPromptInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.challengeRequiredOnNewDevice">ChallengeRequiredOnNewDevice</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.deviceOnlyRememberedOnUserPrompt">DeviceOnlyRememberedOnUserPrompt</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChallengeRequiredOnNewDeviceInput`<sup>Optional</sup> <a name="ChallengeRequiredOnNewDeviceInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.challengeRequiredOnNewDeviceInput"></a>

```go
func ChallengeRequiredOnNewDeviceInput() interface{}
```

- *Type:* interface{}

---

##### `DeviceOnlyRememberedOnUserPromptInput`<sup>Optional</sup> <a name="DeviceOnlyRememberedOnUserPromptInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.deviceOnlyRememberedOnUserPromptInput"></a>

```go
func DeviceOnlyRememberedOnUserPromptInput() interface{}
```

- *Type:* interface{}

---

##### `ChallengeRequiredOnNewDevice`<sup>Required</sup> <a name="ChallengeRequiredOnNewDevice" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.challengeRequiredOnNewDevice"></a>

```go
func ChallengeRequiredOnNewDevice() interface{}
```

- *Type:* interface{}

---

##### `DeviceOnlyRememberedOnUserPrompt`<sup>Required</sup> <a name="DeviceOnlyRememberedOnUserPrompt" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.deviceOnlyRememberedOnUserPrompt"></a>

```go
func DeviceOnlyRememberedOnUserPrompt() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() CognitoUserPoolDeviceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a>

---


### CognitoUserPoolEmailConfigurationOutputReference <a name="CognitoUserPoolEmailConfigurationOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

cognitouserpool.NewCognitoUserPoolEmailConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CognitoUserPoolEmailConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetConfigurationSet">ResetConfigurationSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetEmailSendingAccount">ResetEmailSendingAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetFromEmailAddress">ResetFromEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetReplyToEmailAddress">ResetReplyToEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetSourceArn">ResetSourceArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfigurationSet` <a name="ResetConfigurationSet" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetConfigurationSet"></a>

```go
func ResetConfigurationSet()
```

##### `ResetEmailSendingAccount` <a name="ResetEmailSendingAccount" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetEmailSendingAccount"></a>

```go
func ResetEmailSendingAccount()
```

##### `ResetFromEmailAddress` <a name="ResetFromEmailAddress" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetFromEmailAddress"></a>

```go
func ResetFromEmailAddress()
```

##### `ResetReplyToEmailAddress` <a name="ResetReplyToEmailAddress" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetReplyToEmailAddress"></a>

```go
func ResetReplyToEmailAddress()
```

##### `ResetSourceArn` <a name="ResetSourceArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetSourceArn"></a>

```go
func ResetSourceArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.configurationSetInput">ConfigurationSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.emailSendingAccountInput">EmailSendingAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.fromEmailAddressInput">FromEmailAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.replyToEmailAddressInput">ReplyToEmailAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.sourceArnInput">SourceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.configurationSet">ConfigurationSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.emailSendingAccount">EmailSendingAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.fromEmailAddress">FromEmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.replyToEmailAddress">ReplyToEmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.sourceArn">SourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigurationSetInput`<sup>Optional</sup> <a name="ConfigurationSetInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.configurationSetInput"></a>

```go
func ConfigurationSetInput() *string
```

- *Type:* *string

---

##### `EmailSendingAccountInput`<sup>Optional</sup> <a name="EmailSendingAccountInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.emailSendingAccountInput"></a>

```go
func EmailSendingAccountInput() *string
```

- *Type:* *string

---

##### `FromEmailAddressInput`<sup>Optional</sup> <a name="FromEmailAddressInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.fromEmailAddressInput"></a>

```go
func FromEmailAddressInput() *string
```

- *Type:* *string

---

##### `ReplyToEmailAddressInput`<sup>Optional</sup> <a name="ReplyToEmailAddressInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.replyToEmailAddressInput"></a>

```go
func ReplyToEmailAddressInput() *string
```

- *Type:* *string

---

##### `SourceArnInput`<sup>Optional</sup> <a name="SourceArnInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.sourceArnInput"></a>

```go
func SourceArnInput() *string
```

- *Type:* *string

---

##### `ConfigurationSet`<sup>Required</sup> <a name="ConfigurationSet" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.configurationSet"></a>

```go
func ConfigurationSet() *string
```

- *Type:* *string

---

##### `EmailSendingAccount`<sup>Required</sup> <a name="EmailSendingAccount" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.emailSendingAccount"></a>

```go
func EmailSendingAccount() *string
```

- *Type:* *string

---

##### `FromEmailAddress`<sup>Required</sup> <a name="FromEmailAddress" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.fromEmailAddress"></a>

```go
func FromEmailAddress() *string
```

- *Type:* *string

---

##### `ReplyToEmailAddress`<sup>Required</sup> <a name="ReplyToEmailAddress" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.replyToEmailAddress"></a>

```go
func ReplyToEmailAddress() *string
```

- *Type:* *string

---

##### `SourceArn`<sup>Required</sup> <a name="SourceArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.sourceArn"></a>

```go
func SourceArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() CognitoUserPoolEmailConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a>

---


### CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference <a name="CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

cognitouserpool.NewCognitoUserPoolLambdaConfigCustomEmailSenderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaArnInput">LambdaArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersionInput">LambdaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersion">LambdaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LambdaArnInput`<sup>Optional</sup> <a name="LambdaArnInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaArnInput"></a>

```go
func LambdaArnInput() *string
```

- *Type:* *string

---

##### `LambdaVersionInput`<sup>Optional</sup> <a name="LambdaVersionInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersionInput"></a>

```go
func LambdaVersionInput() *string
```

- *Type:* *string

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaArn"></a>

```go
func LambdaArn() *string
```

- *Type:* *string

---

##### `LambdaVersion`<sup>Required</sup> <a name="LambdaVersion" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersion"></a>

```go
func LambdaVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.internalValue"></a>

```go
func InternalValue() CognitoUserPoolLambdaConfigCustomEmailSender
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a>

---


### CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference <a name="CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

cognitouserpool.NewCognitoUserPoolLambdaConfigCustomSmsSenderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaArnInput">LambdaArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersionInput">LambdaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersion">LambdaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LambdaArnInput`<sup>Optional</sup> <a name="LambdaArnInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaArnInput"></a>

```go
func LambdaArnInput() *string
```

- *Type:* *string

---

##### `LambdaVersionInput`<sup>Optional</sup> <a name="LambdaVersionInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersionInput"></a>

```go
func LambdaVersionInput() *string
```

- *Type:* *string

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaArn"></a>

```go
func LambdaArn() *string
```

- *Type:* *string

---

##### `LambdaVersion`<sup>Required</sup> <a name="LambdaVersion" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersion"></a>

```go
func LambdaVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.internalValue"></a>

```go
func InternalValue() CognitoUserPoolLambdaConfigCustomSmsSender
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a>

---


### CognitoUserPoolLambdaConfigOutputReference <a name="CognitoUserPoolLambdaConfigOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

cognitouserpool.NewCognitoUserPoolLambdaConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CognitoUserPoolLambdaConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.putCustomEmailSender">PutCustomEmailSender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.putCustomSmsSender">PutCustomSmsSender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetCreateAuthChallenge">ResetCreateAuthChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetCustomEmailSender">ResetCustomEmailSender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetCustomMessage">ResetCustomMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetCustomSmsSender">ResetCustomSmsSender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetDefineAuthChallenge">ResetDefineAuthChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPostAuthentication">ResetPostAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPostConfirmation">ResetPostConfirmation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPreAuthentication">ResetPreAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPreSignUp">ResetPreSignUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPreTokenGeneration">ResetPreTokenGeneration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetUserMigration">ResetUserMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetVerifyAuthChallengeResponse">ResetVerifyAuthChallengeResponse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomEmailSender` <a name="PutCustomEmailSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.putCustomEmailSender"></a>

```go
func PutCustomEmailSender(value CognitoUserPoolLambdaConfigCustomEmailSender)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.putCustomEmailSender.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a>

---

##### `PutCustomSmsSender` <a name="PutCustomSmsSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.putCustomSmsSender"></a>

```go
func PutCustomSmsSender(value CognitoUserPoolLambdaConfigCustomSmsSender)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.putCustomSmsSender.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a>

---

##### `ResetCreateAuthChallenge` <a name="ResetCreateAuthChallenge" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetCreateAuthChallenge"></a>

```go
func ResetCreateAuthChallenge()
```

##### `ResetCustomEmailSender` <a name="ResetCustomEmailSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetCustomEmailSender"></a>

```go
func ResetCustomEmailSender()
```

##### `ResetCustomMessage` <a name="ResetCustomMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetCustomMessage"></a>

```go
func ResetCustomMessage()
```

##### `ResetCustomSmsSender` <a name="ResetCustomSmsSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetCustomSmsSender"></a>

```go
func ResetCustomSmsSender()
```

##### `ResetDefineAuthChallenge` <a name="ResetDefineAuthChallenge" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetDefineAuthChallenge"></a>

```go
func ResetDefineAuthChallenge()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetPostAuthentication` <a name="ResetPostAuthentication" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPostAuthentication"></a>

```go
func ResetPostAuthentication()
```

##### `ResetPostConfirmation` <a name="ResetPostConfirmation" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPostConfirmation"></a>

```go
func ResetPostConfirmation()
```

##### `ResetPreAuthentication` <a name="ResetPreAuthentication" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPreAuthentication"></a>

```go
func ResetPreAuthentication()
```

##### `ResetPreSignUp` <a name="ResetPreSignUp" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPreSignUp"></a>

```go
func ResetPreSignUp()
```

##### `ResetPreTokenGeneration` <a name="ResetPreTokenGeneration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPreTokenGeneration"></a>

```go
func ResetPreTokenGeneration()
```

##### `ResetUserMigration` <a name="ResetUserMigration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetUserMigration"></a>

```go
func ResetUserMigration()
```

##### `ResetVerifyAuthChallengeResponse` <a name="ResetVerifyAuthChallengeResponse" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetVerifyAuthChallengeResponse"></a>

```go
func ResetVerifyAuthChallengeResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customEmailSender">CustomEmailSender</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference">CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customSmsSender">CustomSmsSender</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference">CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.createAuthChallengeInput">CreateAuthChallengeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customEmailSenderInput">CustomEmailSenderInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customMessageInput">CustomMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customSmsSenderInput">CustomSmsSenderInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.defineAuthChallengeInput">DefineAuthChallengeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postAuthenticationInput">PostAuthenticationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postConfirmationInput">PostConfirmationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preAuthenticationInput">PreAuthenticationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preSignUpInput">PreSignUpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preTokenGenerationInput">PreTokenGenerationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.userMigrationInput">UserMigrationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.verifyAuthChallengeResponseInput">VerifyAuthChallengeResponseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.createAuthChallenge">CreateAuthChallenge</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customMessage">CustomMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.defineAuthChallenge">DefineAuthChallenge</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postAuthentication">PostAuthentication</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postConfirmation">PostConfirmation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preAuthentication">PreAuthentication</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preSignUp">PreSignUp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preTokenGeneration">PreTokenGeneration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.userMigration">UserMigration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.verifyAuthChallengeResponse">VerifyAuthChallengeResponse</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomEmailSender`<sup>Required</sup> <a name="CustomEmailSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customEmailSender"></a>

```go
func CustomEmailSender() CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference">CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference</a>

---

##### `CustomSmsSender`<sup>Required</sup> <a name="CustomSmsSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customSmsSender"></a>

```go
func CustomSmsSender() CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference">CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference</a>

---

##### `CreateAuthChallengeInput`<sup>Optional</sup> <a name="CreateAuthChallengeInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.createAuthChallengeInput"></a>

```go
func CreateAuthChallengeInput() *string
```

- *Type:* *string

---

##### `CustomEmailSenderInput`<sup>Optional</sup> <a name="CustomEmailSenderInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customEmailSenderInput"></a>

```go
func CustomEmailSenderInput() CognitoUserPoolLambdaConfigCustomEmailSender
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a>

---

##### `CustomMessageInput`<sup>Optional</sup> <a name="CustomMessageInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customMessageInput"></a>

```go
func CustomMessageInput() *string
```

- *Type:* *string

---

##### `CustomSmsSenderInput`<sup>Optional</sup> <a name="CustomSmsSenderInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customSmsSenderInput"></a>

```go
func CustomSmsSenderInput() CognitoUserPoolLambdaConfigCustomSmsSender
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a>

---

##### `DefineAuthChallengeInput`<sup>Optional</sup> <a name="DefineAuthChallengeInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.defineAuthChallengeInput"></a>

```go
func DefineAuthChallengeInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `PostAuthenticationInput`<sup>Optional</sup> <a name="PostAuthenticationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postAuthenticationInput"></a>

```go
func PostAuthenticationInput() *string
```

- *Type:* *string

---

##### `PostConfirmationInput`<sup>Optional</sup> <a name="PostConfirmationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postConfirmationInput"></a>

```go
func PostConfirmationInput() *string
```

- *Type:* *string

---

##### `PreAuthenticationInput`<sup>Optional</sup> <a name="PreAuthenticationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preAuthenticationInput"></a>

```go
func PreAuthenticationInput() *string
```

- *Type:* *string

---

##### `PreSignUpInput`<sup>Optional</sup> <a name="PreSignUpInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preSignUpInput"></a>

```go
func PreSignUpInput() *string
```

- *Type:* *string

---

##### `PreTokenGenerationInput`<sup>Optional</sup> <a name="PreTokenGenerationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preTokenGenerationInput"></a>

```go
func PreTokenGenerationInput() *string
```

- *Type:* *string

---

##### `UserMigrationInput`<sup>Optional</sup> <a name="UserMigrationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.userMigrationInput"></a>

```go
func UserMigrationInput() *string
```

- *Type:* *string

---

##### `VerifyAuthChallengeResponseInput`<sup>Optional</sup> <a name="VerifyAuthChallengeResponseInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.verifyAuthChallengeResponseInput"></a>

```go
func VerifyAuthChallengeResponseInput() *string
```

- *Type:* *string

---

##### `CreateAuthChallenge`<sup>Required</sup> <a name="CreateAuthChallenge" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.createAuthChallenge"></a>

```go
func CreateAuthChallenge() *string
```

- *Type:* *string

---

##### `CustomMessage`<sup>Required</sup> <a name="CustomMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customMessage"></a>

```go
func CustomMessage() *string
```

- *Type:* *string

---

##### `DefineAuthChallenge`<sup>Required</sup> <a name="DefineAuthChallenge" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.defineAuthChallenge"></a>

```go
func DefineAuthChallenge() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `PostAuthentication`<sup>Required</sup> <a name="PostAuthentication" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postAuthentication"></a>

```go
func PostAuthentication() *string
```

- *Type:* *string

---

##### `PostConfirmation`<sup>Required</sup> <a name="PostConfirmation" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postConfirmation"></a>

```go
func PostConfirmation() *string
```

- *Type:* *string

---

##### `PreAuthentication`<sup>Required</sup> <a name="PreAuthentication" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preAuthentication"></a>

```go
func PreAuthentication() *string
```

- *Type:* *string

---

##### `PreSignUp`<sup>Required</sup> <a name="PreSignUp" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preSignUp"></a>

```go
func PreSignUp() *string
```

- *Type:* *string

---

##### `PreTokenGeneration`<sup>Required</sup> <a name="PreTokenGeneration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preTokenGeneration"></a>

```go
func PreTokenGeneration() *string
```

- *Type:* *string

---

##### `UserMigration`<sup>Required</sup> <a name="UserMigration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.userMigration"></a>

```go
func UserMigration() *string
```

- *Type:* *string

---

##### `VerifyAuthChallengeResponse`<sup>Required</sup> <a name="VerifyAuthChallengeResponse" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.verifyAuthChallengeResponse"></a>

```go
func VerifyAuthChallengeResponse() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CognitoUserPoolLambdaConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a>

---


### CognitoUserPoolPasswordPolicyOutputReference <a name="CognitoUserPoolPasswordPolicyOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

cognitouserpool.NewCognitoUserPoolPasswordPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CognitoUserPoolPasswordPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetMinimumLength">ResetMinimumLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetRequireLowercase">ResetRequireLowercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetRequireNumbers">ResetRequireNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetRequireSymbols">ResetRequireSymbols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetRequireUppercase">ResetRequireUppercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetTemporaryPasswordValidityDays">ResetTemporaryPasswordValidityDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMinimumLength` <a name="ResetMinimumLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetMinimumLength"></a>

```go
func ResetMinimumLength()
```

##### `ResetRequireLowercase` <a name="ResetRequireLowercase" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetRequireLowercase"></a>

```go
func ResetRequireLowercase()
```

##### `ResetRequireNumbers` <a name="ResetRequireNumbers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetRequireNumbers"></a>

```go
func ResetRequireNumbers()
```

##### `ResetRequireSymbols` <a name="ResetRequireSymbols" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetRequireSymbols"></a>

```go
func ResetRequireSymbols()
```

##### `ResetRequireUppercase` <a name="ResetRequireUppercase" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetRequireUppercase"></a>

```go
func ResetRequireUppercase()
```

##### `ResetTemporaryPasswordValidityDays` <a name="ResetTemporaryPasswordValidityDays" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetTemporaryPasswordValidityDays"></a>

```go
func ResetTemporaryPasswordValidityDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.minimumLengthInput">MinimumLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireLowercaseInput">RequireLowercaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireNumbersInput">RequireNumbersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireSymbolsInput">RequireSymbolsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireUppercaseInput">RequireUppercaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.temporaryPasswordValidityDaysInput">TemporaryPasswordValidityDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.minimumLength">MinimumLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireLowercase">RequireLowercase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireNumbers">RequireNumbers</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireSymbols">RequireSymbols</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireUppercase">RequireUppercase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.temporaryPasswordValidityDays">TemporaryPasswordValidityDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MinimumLengthInput`<sup>Optional</sup> <a name="MinimumLengthInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.minimumLengthInput"></a>

```go
func MinimumLengthInput() *f64
```

- *Type:* *f64

---

##### `RequireLowercaseInput`<sup>Optional</sup> <a name="RequireLowercaseInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireLowercaseInput"></a>

```go
func RequireLowercaseInput() interface{}
```

- *Type:* interface{}

---

##### `RequireNumbersInput`<sup>Optional</sup> <a name="RequireNumbersInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireNumbersInput"></a>

```go
func RequireNumbersInput() interface{}
```

- *Type:* interface{}

---

##### `RequireSymbolsInput`<sup>Optional</sup> <a name="RequireSymbolsInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireSymbolsInput"></a>

```go
func RequireSymbolsInput() interface{}
```

- *Type:* interface{}

---

##### `RequireUppercaseInput`<sup>Optional</sup> <a name="RequireUppercaseInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireUppercaseInput"></a>

```go
func RequireUppercaseInput() interface{}
```

- *Type:* interface{}

---

##### `TemporaryPasswordValidityDaysInput`<sup>Optional</sup> <a name="TemporaryPasswordValidityDaysInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.temporaryPasswordValidityDaysInput"></a>

```go
func TemporaryPasswordValidityDaysInput() *f64
```

- *Type:* *f64

---

##### `MinimumLength`<sup>Required</sup> <a name="MinimumLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.minimumLength"></a>

```go
func MinimumLength() *f64
```

- *Type:* *f64

---

##### `RequireLowercase`<sup>Required</sup> <a name="RequireLowercase" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireLowercase"></a>

```go
func RequireLowercase() interface{}
```

- *Type:* interface{}

---

##### `RequireNumbers`<sup>Required</sup> <a name="RequireNumbers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireNumbers"></a>

```go
func RequireNumbers() interface{}
```

- *Type:* interface{}

---

##### `RequireSymbols`<sup>Required</sup> <a name="RequireSymbols" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireSymbols"></a>

```go
func RequireSymbols() interface{}
```

- *Type:* interface{}

---

##### `RequireUppercase`<sup>Required</sup> <a name="RequireUppercase" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireUppercase"></a>

```go
func RequireUppercase() interface{}
```

- *Type:* interface{}

---

##### `TemporaryPasswordValidityDays`<sup>Required</sup> <a name="TemporaryPasswordValidityDays" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.temporaryPasswordValidityDays"></a>

```go
func TemporaryPasswordValidityDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() CognitoUserPoolPasswordPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a>

---


### CognitoUserPoolSchemaList <a name="CognitoUserPoolSchemaList" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

cognitouserpool.NewCognitoUserPoolSchemaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CognitoUserPoolSchemaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.get"></a>

```go
func Get(index *f64) CognitoUserPoolSchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference <a name="CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

cognitouserpool.NewCognitoUserPoolSchemaNumberAttributeConstraintsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.resetMaxValue">ResetMaxValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.resetMinValue">ResetMinValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxValue` <a name="ResetMaxValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.resetMaxValue"></a>

```go
func ResetMaxValue()
```

##### `ResetMinValue` <a name="ResetMinValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.resetMinValue"></a>

```go
func ResetMinValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.maxValueInput">MaxValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.minValueInput">MinValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.maxValue">MaxValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.minValue">MinValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints">CognitoUserPoolSchemaNumberAttributeConstraints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxValueInput`<sup>Optional</sup> <a name="MaxValueInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.maxValueInput"></a>

```go
func MaxValueInput() *string
```

- *Type:* *string

---

##### `MinValueInput`<sup>Optional</sup> <a name="MinValueInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.minValueInput"></a>

```go
func MinValueInput() *string
```

- *Type:* *string

---

##### `MaxValue`<sup>Required</sup> <a name="MaxValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.maxValue"></a>

```go
func MaxValue() *string
```

- *Type:* *string

---

##### `MinValue`<sup>Required</sup> <a name="MinValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.minValue"></a>

```go
func MinValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.internalValue"></a>

```go
func InternalValue() CognitoUserPoolSchemaNumberAttributeConstraints
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints">CognitoUserPoolSchemaNumberAttributeConstraints</a>

---


### CognitoUserPoolSchemaOutputReference <a name="CognitoUserPoolSchemaOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

cognitouserpool.NewCognitoUserPoolSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CognitoUserPoolSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.putNumberAttributeConstraints">PutNumberAttributeConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.putStringAttributeConstraints">PutStringAttributeConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetDeveloperOnlyAttribute">ResetDeveloperOnlyAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetMutable">ResetMutable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetNumberAttributeConstraints">ResetNumberAttributeConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetStringAttributeConstraints">ResetStringAttributeConstraints</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNumberAttributeConstraints` <a name="PutNumberAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.putNumberAttributeConstraints"></a>

```go
func PutNumberAttributeConstraints(value CognitoUserPoolSchemaNumberAttributeConstraints)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.putNumberAttributeConstraints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints">CognitoUserPoolSchemaNumberAttributeConstraints</a>

---

##### `PutStringAttributeConstraints` <a name="PutStringAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.putStringAttributeConstraints"></a>

```go
func PutStringAttributeConstraints(value CognitoUserPoolSchemaStringAttributeConstraints)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.putStringAttributeConstraints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints">CognitoUserPoolSchemaStringAttributeConstraints</a>

---

##### `ResetDeveloperOnlyAttribute` <a name="ResetDeveloperOnlyAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetDeveloperOnlyAttribute"></a>

```go
func ResetDeveloperOnlyAttribute()
```

##### `ResetMutable` <a name="ResetMutable" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetMutable"></a>

```go
func ResetMutable()
```

##### `ResetNumberAttributeConstraints` <a name="ResetNumberAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetNumberAttributeConstraints"></a>

```go
func ResetNumberAttributeConstraints()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetRequired"></a>

```go
func ResetRequired()
```

##### `ResetStringAttributeConstraints` <a name="ResetStringAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetStringAttributeConstraints"></a>

```go
func ResetStringAttributeConstraints()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.numberAttributeConstraints">NumberAttributeConstraints</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference">CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.stringAttributeConstraints">StringAttributeConstraints</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference">CognitoUserPoolSchemaStringAttributeConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.attributeDataTypeInput">AttributeDataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.developerOnlyAttributeInput">DeveloperOnlyAttributeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.mutableInput">MutableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.numberAttributeConstraintsInput">NumberAttributeConstraintsInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints">CognitoUserPoolSchemaNumberAttributeConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.stringAttributeConstraintsInput">StringAttributeConstraintsInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints">CognitoUserPoolSchemaStringAttributeConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.attributeDataType">AttributeDataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.developerOnlyAttribute">DeveloperOnlyAttribute</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.mutable">Mutable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NumberAttributeConstraints`<sup>Required</sup> <a name="NumberAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.numberAttributeConstraints"></a>

```go
func NumberAttributeConstraints() CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference">CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference</a>

---

##### `StringAttributeConstraints`<sup>Required</sup> <a name="StringAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.stringAttributeConstraints"></a>

```go
func StringAttributeConstraints() CognitoUserPoolSchemaStringAttributeConstraintsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference">CognitoUserPoolSchemaStringAttributeConstraintsOutputReference</a>

---

##### `AttributeDataTypeInput`<sup>Optional</sup> <a name="AttributeDataTypeInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.attributeDataTypeInput"></a>

```go
func AttributeDataTypeInput() *string
```

- *Type:* *string

---

##### `DeveloperOnlyAttributeInput`<sup>Optional</sup> <a name="DeveloperOnlyAttributeInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.developerOnlyAttributeInput"></a>

```go
func DeveloperOnlyAttributeInput() interface{}
```

- *Type:* interface{}

---

##### `MutableInput`<sup>Optional</sup> <a name="MutableInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.mutableInput"></a>

```go
func MutableInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NumberAttributeConstraintsInput`<sup>Optional</sup> <a name="NumberAttributeConstraintsInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.numberAttributeConstraintsInput"></a>

```go
func NumberAttributeConstraintsInput() CognitoUserPoolSchemaNumberAttributeConstraints
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints">CognitoUserPoolSchemaNumberAttributeConstraints</a>

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `StringAttributeConstraintsInput`<sup>Optional</sup> <a name="StringAttributeConstraintsInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.stringAttributeConstraintsInput"></a>

```go
func StringAttributeConstraintsInput() CognitoUserPoolSchemaStringAttributeConstraints
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints">CognitoUserPoolSchemaStringAttributeConstraints</a>

---

##### `AttributeDataType`<sup>Required</sup> <a name="AttributeDataType" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.attributeDataType"></a>

```go
func AttributeDataType() *string
```

- *Type:* *string

---

##### `DeveloperOnlyAttribute`<sup>Required</sup> <a name="DeveloperOnlyAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.developerOnlyAttribute"></a>

```go
func DeveloperOnlyAttribute() interface{}
```

- *Type:* interface{}

---

##### `Mutable`<sup>Required</sup> <a name="Mutable" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.mutable"></a>

```go
func Mutable() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CognitoUserPoolSchemaStringAttributeConstraintsOutputReference <a name="CognitoUserPoolSchemaStringAttributeConstraintsOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

cognitouserpool.NewCognitoUserPoolSchemaStringAttributeConstraintsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CognitoUserPoolSchemaStringAttributeConstraintsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.resetMaxLength">ResetMaxLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.resetMinLength">ResetMinLength</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxLength` <a name="ResetMaxLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.resetMaxLength"></a>

```go
func ResetMaxLength()
```

##### `ResetMinLength` <a name="ResetMinLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.resetMinLength"></a>

```go
func ResetMinLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.maxLengthInput">MaxLengthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.minLengthInput">MinLengthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.maxLength">MaxLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.minLength">MinLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints">CognitoUserPoolSchemaStringAttributeConstraints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxLengthInput`<sup>Optional</sup> <a name="MaxLengthInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.maxLengthInput"></a>

```go
func MaxLengthInput() *string
```

- *Type:* *string

---

##### `MinLengthInput`<sup>Optional</sup> <a name="MinLengthInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.minLengthInput"></a>

```go
func MinLengthInput() *string
```

- *Type:* *string

---

##### `MaxLength`<sup>Required</sup> <a name="MaxLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.maxLength"></a>

```go
func MaxLength() *string
```

- *Type:* *string

---

##### `MinLength`<sup>Required</sup> <a name="MinLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.minLength"></a>

```go
func MinLength() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.internalValue"></a>

```go
func InternalValue() CognitoUserPoolSchemaStringAttributeConstraints
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints">CognitoUserPoolSchemaStringAttributeConstraints</a>

---


### CognitoUserPoolSmsConfigurationOutputReference <a name="CognitoUserPoolSmsConfigurationOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

cognitouserpool.NewCognitoUserPoolSmsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CognitoUserPoolSmsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.resetSnsRegion">ResetSnsRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSnsRegion` <a name="ResetSnsRegion" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.resetSnsRegion"></a>

```go
func ResetSnsRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsCallerArnInput">SnsCallerArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsRegionInput">SnsRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsCallerArn">SnsCallerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsRegion">SnsRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.externalIdInput"></a>

```go
func ExternalIdInput() *string
```

- *Type:* *string

---

##### `SnsCallerArnInput`<sup>Optional</sup> <a name="SnsCallerArnInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsCallerArnInput"></a>

```go
func SnsCallerArnInput() *string
```

- *Type:* *string

---

##### `SnsRegionInput`<sup>Optional</sup> <a name="SnsRegionInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsRegionInput"></a>

```go
func SnsRegionInput() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `SnsCallerArn`<sup>Required</sup> <a name="SnsCallerArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsCallerArn"></a>

```go
func SnsCallerArn() *string
```

- *Type:* *string

---

##### `SnsRegion`<sup>Required</sup> <a name="SnsRegion" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsRegion"></a>

```go
func SnsRegion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() CognitoUserPoolSmsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a>

---


### CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference <a name="CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

cognitouserpool.NewCognitoUserPoolSoftwareTokenMfaConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() CognitoUserPoolSoftwareTokenMfaConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a>

---


### CognitoUserPoolUserAttributeUpdateSettingsOutputReference <a name="CognitoUserPoolUserAttributeUpdateSettingsOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

cognitouserpool.NewCognitoUserPoolUserAttributeUpdateSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CognitoUserPoolUserAttributeUpdateSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.attributesRequireVerificationBeforeUpdateInput">AttributesRequireVerificationBeforeUpdateInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.attributesRequireVerificationBeforeUpdate">AttributesRequireVerificationBeforeUpdate</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributesRequireVerificationBeforeUpdateInput`<sup>Optional</sup> <a name="AttributesRequireVerificationBeforeUpdateInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.attributesRequireVerificationBeforeUpdateInput"></a>

```go
func AttributesRequireVerificationBeforeUpdateInput() *[]*string
```

- *Type:* *[]*string

---

##### `AttributesRequireVerificationBeforeUpdate`<sup>Required</sup> <a name="AttributesRequireVerificationBeforeUpdate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.attributesRequireVerificationBeforeUpdate"></a>

```go
func AttributesRequireVerificationBeforeUpdate() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() CognitoUserPoolUserAttributeUpdateSettings
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a>

---


### CognitoUserPoolUsernameConfigurationOutputReference <a name="CognitoUserPoolUsernameConfigurationOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

cognitouserpool.NewCognitoUserPoolUsernameConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CognitoUserPoolUsernameConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.caseSensitiveInput">CaseSensitiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.caseSensitive">CaseSensitive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaseSensitiveInput`<sup>Optional</sup> <a name="CaseSensitiveInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.caseSensitiveInput"></a>

```go
func CaseSensitiveInput() interface{}
```

- *Type:* interface{}

---

##### `CaseSensitive`<sup>Required</sup> <a name="CaseSensitive" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.caseSensitive"></a>

```go
func CaseSensitive() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() CognitoUserPoolUsernameConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a>

---


### CognitoUserPoolUserPoolAddOnsOutputReference <a name="CognitoUserPoolUserPoolAddOnsOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

cognitouserpool.NewCognitoUserPoolUserPoolAddOnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CognitoUserPoolUserPoolAddOnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.advancedSecurityModeInput">AdvancedSecurityModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.advancedSecurityMode">AdvancedSecurityMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdvancedSecurityModeInput`<sup>Optional</sup> <a name="AdvancedSecurityModeInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.advancedSecurityModeInput"></a>

```go
func AdvancedSecurityModeInput() *string
```

- *Type:* *string

---

##### `AdvancedSecurityMode`<sup>Required</sup> <a name="AdvancedSecurityMode" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.advancedSecurityMode"></a>

```go
func AdvancedSecurityMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.internalValue"></a>

```go
func InternalValue() CognitoUserPoolUserPoolAddOns
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a>

---


### CognitoUserPoolVerificationMessageTemplateOutputReference <a name="CognitoUserPoolVerificationMessageTemplateOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/cognitouserpool"

cognitouserpool.NewCognitoUserPoolVerificationMessageTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CognitoUserPoolVerificationMessageTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetDefaultEmailOption">ResetDefaultEmailOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetEmailMessage">ResetEmailMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetEmailMessageByLink">ResetEmailMessageByLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetEmailSubject">ResetEmailSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetEmailSubjectByLink">ResetEmailSubjectByLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetSmsMessage">ResetSmsMessage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultEmailOption` <a name="ResetDefaultEmailOption" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetDefaultEmailOption"></a>

```go
func ResetDefaultEmailOption()
```

##### `ResetEmailMessage` <a name="ResetEmailMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetEmailMessage"></a>

```go
func ResetEmailMessage()
```

##### `ResetEmailMessageByLink` <a name="ResetEmailMessageByLink" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetEmailMessageByLink"></a>

```go
func ResetEmailMessageByLink()
```

##### `ResetEmailSubject` <a name="ResetEmailSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetEmailSubject"></a>

```go
func ResetEmailSubject()
```

##### `ResetEmailSubjectByLink` <a name="ResetEmailSubjectByLink" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetEmailSubjectByLink"></a>

```go
func ResetEmailSubjectByLink()
```

##### `ResetSmsMessage` <a name="ResetSmsMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetSmsMessage"></a>

```go
func ResetSmsMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.defaultEmailOptionInput">DefaultEmailOptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessageByLinkInput">EmailMessageByLinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessageInput">EmailMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubjectByLinkInput">EmailSubjectByLinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubjectInput">EmailSubjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.smsMessageInput">SmsMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.defaultEmailOption">DefaultEmailOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessage">EmailMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessageByLink">EmailMessageByLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubject">EmailSubject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubjectByLink">EmailSubjectByLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.smsMessage">SmsMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultEmailOptionInput`<sup>Optional</sup> <a name="DefaultEmailOptionInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.defaultEmailOptionInput"></a>

```go
func DefaultEmailOptionInput() *string
```

- *Type:* *string

---

##### `EmailMessageByLinkInput`<sup>Optional</sup> <a name="EmailMessageByLinkInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessageByLinkInput"></a>

```go
func EmailMessageByLinkInput() *string
```

- *Type:* *string

---

##### `EmailMessageInput`<sup>Optional</sup> <a name="EmailMessageInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessageInput"></a>

```go
func EmailMessageInput() *string
```

- *Type:* *string

---

##### `EmailSubjectByLinkInput`<sup>Optional</sup> <a name="EmailSubjectByLinkInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubjectByLinkInput"></a>

```go
func EmailSubjectByLinkInput() *string
```

- *Type:* *string

---

##### `EmailSubjectInput`<sup>Optional</sup> <a name="EmailSubjectInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubjectInput"></a>

```go
func EmailSubjectInput() *string
```

- *Type:* *string

---

##### `SmsMessageInput`<sup>Optional</sup> <a name="SmsMessageInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.smsMessageInput"></a>

```go
func SmsMessageInput() *string
```

- *Type:* *string

---

##### `DefaultEmailOption`<sup>Required</sup> <a name="DefaultEmailOption" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.defaultEmailOption"></a>

```go
func DefaultEmailOption() *string
```

- *Type:* *string

---

##### `EmailMessage`<sup>Required</sup> <a name="EmailMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessage"></a>

```go
func EmailMessage() *string
```

- *Type:* *string

---

##### `EmailMessageByLink`<sup>Required</sup> <a name="EmailMessageByLink" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessageByLink"></a>

```go
func EmailMessageByLink() *string
```

- *Type:* *string

---

##### `EmailSubject`<sup>Required</sup> <a name="EmailSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubject"></a>

```go
func EmailSubject() *string
```

- *Type:* *string

---

##### `EmailSubjectByLink`<sup>Required</sup> <a name="EmailSubjectByLink" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubjectByLink"></a>

```go
func EmailSubjectByLink() *string
```

- *Type:* *string

---

##### `SmsMessage`<sup>Required</sup> <a name="SmsMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.smsMessage"></a>

```go
func SmsMessage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() CognitoUserPoolVerificationMessageTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a>

---



