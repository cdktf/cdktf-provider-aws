# `cognitoUserPool` Submodule <a name="`cognitoUserPool` Submodule" id="@cdktf/provider-aws.cognitoUserPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPool <a name="CognitoUserPool" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool aws_cognito_user_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPool(Construct Scope, string Id, CognitoUserPoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig">CognitoUserPoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAccountRecoverySetting` <a name="PutAccountRecoverySetting" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putAccountRecoverySetting"></a>

```csharp
private void PutAccountRecoverySetting(CognitoUserPoolAccountRecoverySetting Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putAccountRecoverySetting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a>

---

##### `PutAdminCreateUserConfig` <a name="PutAdminCreateUserConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putAdminCreateUserConfig"></a>

```csharp
private void PutAdminCreateUserConfig(CognitoUserPoolAdminCreateUserConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putAdminCreateUserConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a>

---

##### `PutDeviceConfiguration` <a name="PutDeviceConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putDeviceConfiguration"></a>

```csharp
private void PutDeviceConfiguration(CognitoUserPoolDeviceConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putDeviceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a>

---

##### `PutEmailConfiguration` <a name="PutEmailConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putEmailConfiguration"></a>

```csharp
private void PutEmailConfiguration(CognitoUserPoolEmailConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putEmailConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a>

---

##### `PutLambdaConfig` <a name="PutLambdaConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putLambdaConfig"></a>

```csharp
private void PutLambdaConfig(CognitoUserPoolLambdaConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putLambdaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a>

---

##### `PutPasswordPolicy` <a name="PutPasswordPolicy" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putPasswordPolicy"></a>

```csharp
private void PutPasswordPolicy(CognitoUserPoolPasswordPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putPasswordPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a>

---

##### `PutSchema` <a name="PutSchema" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSchema"></a>

```csharp
private void PutSchema(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSchema.parameter.value"></a>

- *Type:* object

---

##### `PutSmsConfiguration` <a name="PutSmsConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSmsConfiguration"></a>

```csharp
private void PutSmsConfiguration(CognitoUserPoolSmsConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSmsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a>

---

##### `PutSoftwareTokenMfaConfiguration` <a name="PutSoftwareTokenMfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSoftwareTokenMfaConfiguration"></a>

```csharp
private void PutSoftwareTokenMfaConfiguration(CognitoUserPoolSoftwareTokenMfaConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSoftwareTokenMfaConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a>

---

##### `PutUserAttributeUpdateSettings` <a name="PutUserAttributeUpdateSettings" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUserAttributeUpdateSettings"></a>

```csharp
private void PutUserAttributeUpdateSettings(CognitoUserPoolUserAttributeUpdateSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUserAttributeUpdateSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a>

---

##### `PutUsernameConfiguration` <a name="PutUsernameConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUsernameConfiguration"></a>

```csharp
private void PutUsernameConfiguration(CognitoUserPoolUsernameConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUsernameConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a>

---

##### `PutUserPoolAddOns` <a name="PutUserPoolAddOns" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUserPoolAddOns"></a>

```csharp
private void PutUserPoolAddOns(CognitoUserPoolUserPoolAddOns Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUserPoolAddOns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a>

---

##### `PutVerificationMessageTemplate` <a name="PutVerificationMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putVerificationMessageTemplate"></a>

```csharp
private void PutVerificationMessageTemplate(CognitoUserPoolVerificationMessageTemplate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putVerificationMessageTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a>

---

##### `ResetAccountRecoverySetting` <a name="ResetAccountRecoverySetting" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetAccountRecoverySetting"></a>

```csharp
private void ResetAccountRecoverySetting()
```

##### `ResetAdminCreateUserConfig` <a name="ResetAdminCreateUserConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetAdminCreateUserConfig"></a>

```csharp
private void ResetAdminCreateUserConfig()
```

##### `ResetAliasAttributes` <a name="ResetAliasAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetAliasAttributes"></a>

```csharp
private void ResetAliasAttributes()
```

##### `ResetAutoVerifiedAttributes` <a name="ResetAutoVerifiedAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetAutoVerifiedAttributes"></a>

```csharp
private void ResetAutoVerifiedAttributes()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetDeletionProtection"></a>

```csharp
private void ResetDeletionProtection()
```

##### `ResetDeviceConfiguration` <a name="ResetDeviceConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetDeviceConfiguration"></a>

```csharp
private void ResetDeviceConfiguration()
```

##### `ResetEmailConfiguration` <a name="ResetEmailConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetEmailConfiguration"></a>

```csharp
private void ResetEmailConfiguration()
```

##### `ResetEmailVerificationMessage` <a name="ResetEmailVerificationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetEmailVerificationMessage"></a>

```csharp
private void ResetEmailVerificationMessage()
```

##### `ResetEmailVerificationSubject` <a name="ResetEmailVerificationSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetEmailVerificationSubject"></a>

```csharp
private void ResetEmailVerificationSubject()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLambdaConfig` <a name="ResetLambdaConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetLambdaConfig"></a>

```csharp
private void ResetLambdaConfig()
```

##### `ResetMfaConfiguration` <a name="ResetMfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetMfaConfiguration"></a>

```csharp
private void ResetMfaConfiguration()
```

##### `ResetPasswordPolicy` <a name="ResetPasswordPolicy" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetPasswordPolicy"></a>

```csharp
private void ResetPasswordPolicy()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSchema"></a>

```csharp
private void ResetSchema()
```

##### `ResetSmsAuthenticationMessage` <a name="ResetSmsAuthenticationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSmsAuthenticationMessage"></a>

```csharp
private void ResetSmsAuthenticationMessage()
```

##### `ResetSmsConfiguration` <a name="ResetSmsConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSmsConfiguration"></a>

```csharp
private void ResetSmsConfiguration()
```

##### `ResetSmsVerificationMessage` <a name="ResetSmsVerificationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSmsVerificationMessage"></a>

```csharp
private void ResetSmsVerificationMessage()
```

##### `ResetSoftwareTokenMfaConfiguration` <a name="ResetSoftwareTokenMfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSoftwareTokenMfaConfiguration"></a>

```csharp
private void ResetSoftwareTokenMfaConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetUserAttributeUpdateSettings` <a name="ResetUserAttributeUpdateSettings" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetUserAttributeUpdateSettings"></a>

```csharp
private void ResetUserAttributeUpdateSettings()
```

##### `ResetUsernameAttributes` <a name="ResetUsernameAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetUsernameAttributes"></a>

```csharp
private void ResetUsernameAttributes()
```

##### `ResetUsernameConfiguration` <a name="ResetUsernameConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetUsernameConfiguration"></a>

```csharp
private void ResetUsernameConfiguration()
```

##### `ResetUserPoolAddOns` <a name="ResetUserPoolAddOns" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetUserPoolAddOns"></a>

```csharp
private void ResetUserPoolAddOns()
```

##### `ResetVerificationMessageTemplate` <a name="ResetVerificationMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetVerificationMessageTemplate"></a>

```csharp
private void ResetVerificationMessageTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CognitoUserPool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CognitoUserPool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CognitoUserPool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.accountRecoverySetting">AccountRecoverySetting</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference">CognitoUserPoolAccountRecoverySettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.adminCreateUserConfig">AdminCreateUserConfig</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference">CognitoUserPoolAdminCreateUserConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.creationDate">CreationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.customDomain">CustomDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deviceConfiguration">DeviceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference">CognitoUserPoolDeviceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailConfiguration">EmailConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference">CognitoUserPoolEmailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.estimatedNumberOfUsers">EstimatedNumberOfUsers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lambdaConfig">LambdaConfig</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference">CognitoUserPoolLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lastModifiedDate">LastModifiedDate</a></code> | <code>string</code> | *No description.* |
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
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.aliasAttributesInput">AliasAttributesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.autoVerifiedAttributesInput">AutoVerifiedAttributesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deviceConfigurationInput">DeviceConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailConfigurationInput">EmailConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationMessageInput">EmailVerificationMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationSubjectInput">EmailVerificationSubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lambdaConfigInput">LambdaConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.mfaConfigurationInput">MfaConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.passwordPolicyInput">PasswordPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.schemaInput">SchemaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsAuthenticationMessageInput">SmsAuthenticationMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsConfigurationInput">SmsConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsVerificationMessageInput">SmsVerificationMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.softwareTokenMfaConfigurationInput">SoftwareTokenMfaConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userAttributeUpdateSettingsInput">UserAttributeUpdateSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameAttributesInput">UsernameAttributesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameConfigurationInput">UsernameConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userPoolAddOnsInput">UserPoolAddOnsInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.verificationMessageTemplateInput">VerificationMessageTemplateInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.aliasAttributes">AliasAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.autoVerifiedAttributes">AutoVerifiedAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deletionProtection">DeletionProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationMessage">EmailVerificationMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationSubject">EmailVerificationSubject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.mfaConfiguration">MfaConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsAuthenticationMessage">SmsAuthenticationMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsVerificationMessage">SmsVerificationMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameAttributes">UsernameAttributes</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccountRecoverySetting`<sup>Required</sup> <a name="AccountRecoverySetting" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.accountRecoverySetting"></a>

```csharp
public CognitoUserPoolAccountRecoverySettingOutputReference AccountRecoverySetting { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference">CognitoUserPoolAccountRecoverySettingOutputReference</a>

---

##### `AdminCreateUserConfig`<sup>Required</sup> <a name="AdminCreateUserConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.adminCreateUserConfig"></a>

```csharp
public CognitoUserPoolAdminCreateUserConfigOutputReference AdminCreateUserConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference">CognitoUserPoolAdminCreateUserConfigOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.creationDate"></a>

```csharp
public string CreationDate { get; }
```

- *Type:* string

---

##### `CustomDomain`<sup>Required</sup> <a name="CustomDomain" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.customDomain"></a>

```csharp
public string CustomDomain { get; }
```

- *Type:* string

---

##### `DeviceConfiguration`<sup>Required</sup> <a name="DeviceConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deviceConfiguration"></a>

```csharp
public CognitoUserPoolDeviceConfigurationOutputReference DeviceConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference">CognitoUserPoolDeviceConfigurationOutputReference</a>

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `EmailConfiguration`<sup>Required</sup> <a name="EmailConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailConfiguration"></a>

```csharp
public CognitoUserPoolEmailConfigurationOutputReference EmailConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference">CognitoUserPoolEmailConfigurationOutputReference</a>

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `EstimatedNumberOfUsers`<sup>Required</sup> <a name="EstimatedNumberOfUsers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.estimatedNumberOfUsers"></a>

```csharp
public double EstimatedNumberOfUsers { get; }
```

- *Type:* double

---

##### `LambdaConfig`<sup>Required</sup> <a name="LambdaConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lambdaConfig"></a>

```csharp
public CognitoUserPoolLambdaConfigOutputReference LambdaConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference">CognitoUserPoolLambdaConfigOutputReference</a>

---

##### `LastModifiedDate`<sup>Required</sup> <a name="LastModifiedDate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lastModifiedDate"></a>

```csharp
public string LastModifiedDate { get; }
```

- *Type:* string

---

##### `PasswordPolicy`<sup>Required</sup> <a name="PasswordPolicy" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.passwordPolicy"></a>

```csharp
public CognitoUserPoolPasswordPolicyOutputReference PasswordPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference">CognitoUserPoolPasswordPolicyOutputReference</a>

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.schema"></a>

```csharp
public CognitoUserPoolSchemaList Schema { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList">CognitoUserPoolSchemaList</a>

---

##### `SmsConfiguration`<sup>Required</sup> <a name="SmsConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsConfiguration"></a>

```csharp
public CognitoUserPoolSmsConfigurationOutputReference SmsConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference">CognitoUserPoolSmsConfigurationOutputReference</a>

---

##### `SoftwareTokenMfaConfiguration`<sup>Required</sup> <a name="SoftwareTokenMfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.softwareTokenMfaConfiguration"></a>

```csharp
public CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference SoftwareTokenMfaConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference">CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference</a>

---

##### `UserAttributeUpdateSettings`<sup>Required</sup> <a name="UserAttributeUpdateSettings" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userAttributeUpdateSettings"></a>

```csharp
public CognitoUserPoolUserAttributeUpdateSettingsOutputReference UserAttributeUpdateSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference">CognitoUserPoolUserAttributeUpdateSettingsOutputReference</a>

---

##### `UsernameConfiguration`<sup>Required</sup> <a name="UsernameConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameConfiguration"></a>

```csharp
public CognitoUserPoolUsernameConfigurationOutputReference UsernameConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference">CognitoUserPoolUsernameConfigurationOutputReference</a>

---

##### `UserPoolAddOns`<sup>Required</sup> <a name="UserPoolAddOns" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userPoolAddOns"></a>

```csharp
public CognitoUserPoolUserPoolAddOnsOutputReference UserPoolAddOns { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference">CognitoUserPoolUserPoolAddOnsOutputReference</a>

---

##### `VerificationMessageTemplate`<sup>Required</sup> <a name="VerificationMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.verificationMessageTemplate"></a>

```csharp
public CognitoUserPoolVerificationMessageTemplateOutputReference VerificationMessageTemplate { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference">CognitoUserPoolVerificationMessageTemplateOutputReference</a>

---

##### `AccountRecoverySettingInput`<sup>Optional</sup> <a name="AccountRecoverySettingInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.accountRecoverySettingInput"></a>

```csharp
public CognitoUserPoolAccountRecoverySetting AccountRecoverySettingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a>

---

##### `AdminCreateUserConfigInput`<sup>Optional</sup> <a name="AdminCreateUserConfigInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.adminCreateUserConfigInput"></a>

```csharp
public CognitoUserPoolAdminCreateUserConfig AdminCreateUserConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a>

---

##### `AliasAttributesInput`<sup>Optional</sup> <a name="AliasAttributesInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.aliasAttributesInput"></a>

```csharp
public string[] AliasAttributesInput { get; }
```

- *Type:* string[]

---

##### `AutoVerifiedAttributesInput`<sup>Optional</sup> <a name="AutoVerifiedAttributesInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.autoVerifiedAttributesInput"></a>

```csharp
public string[] AutoVerifiedAttributesInput { get; }
```

- *Type:* string[]

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deletionProtectionInput"></a>

```csharp
public string DeletionProtectionInput { get; }
```

- *Type:* string

---

##### `DeviceConfigurationInput`<sup>Optional</sup> <a name="DeviceConfigurationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deviceConfigurationInput"></a>

```csharp
public CognitoUserPoolDeviceConfiguration DeviceConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a>

---

##### `EmailConfigurationInput`<sup>Optional</sup> <a name="EmailConfigurationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailConfigurationInput"></a>

```csharp
public CognitoUserPoolEmailConfiguration EmailConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a>

---

##### `EmailVerificationMessageInput`<sup>Optional</sup> <a name="EmailVerificationMessageInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationMessageInput"></a>

```csharp
public string EmailVerificationMessageInput { get; }
```

- *Type:* string

---

##### `EmailVerificationSubjectInput`<sup>Optional</sup> <a name="EmailVerificationSubjectInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationSubjectInput"></a>

```csharp
public string EmailVerificationSubjectInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LambdaConfigInput`<sup>Optional</sup> <a name="LambdaConfigInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lambdaConfigInput"></a>

```csharp
public CognitoUserPoolLambdaConfig LambdaConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a>

---

##### `MfaConfigurationInput`<sup>Optional</sup> <a name="MfaConfigurationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.mfaConfigurationInput"></a>

```csharp
public string MfaConfigurationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PasswordPolicyInput`<sup>Optional</sup> <a name="PasswordPolicyInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.passwordPolicyInput"></a>

```csharp
public CognitoUserPoolPasswordPolicy PasswordPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a>

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.schemaInput"></a>

```csharp
public object SchemaInput { get; }
```

- *Type:* object

---

##### `SmsAuthenticationMessageInput`<sup>Optional</sup> <a name="SmsAuthenticationMessageInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsAuthenticationMessageInput"></a>

```csharp
public string SmsAuthenticationMessageInput { get; }
```

- *Type:* string

---

##### `SmsConfigurationInput`<sup>Optional</sup> <a name="SmsConfigurationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsConfigurationInput"></a>

```csharp
public CognitoUserPoolSmsConfiguration SmsConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a>

---

##### `SmsVerificationMessageInput`<sup>Optional</sup> <a name="SmsVerificationMessageInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsVerificationMessageInput"></a>

```csharp
public string SmsVerificationMessageInput { get; }
```

- *Type:* string

---

##### `SoftwareTokenMfaConfigurationInput`<sup>Optional</sup> <a name="SoftwareTokenMfaConfigurationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.softwareTokenMfaConfigurationInput"></a>

```csharp
public CognitoUserPoolSoftwareTokenMfaConfiguration SoftwareTokenMfaConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UserAttributeUpdateSettingsInput`<sup>Optional</sup> <a name="UserAttributeUpdateSettingsInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userAttributeUpdateSettingsInput"></a>

```csharp
public CognitoUserPoolUserAttributeUpdateSettings UserAttributeUpdateSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a>

---

##### `UsernameAttributesInput`<sup>Optional</sup> <a name="UsernameAttributesInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameAttributesInput"></a>

```csharp
public string[] UsernameAttributesInput { get; }
```

- *Type:* string[]

---

##### `UsernameConfigurationInput`<sup>Optional</sup> <a name="UsernameConfigurationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameConfigurationInput"></a>

```csharp
public CognitoUserPoolUsernameConfiguration UsernameConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a>

---

##### `UserPoolAddOnsInput`<sup>Optional</sup> <a name="UserPoolAddOnsInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userPoolAddOnsInput"></a>

```csharp
public CognitoUserPoolUserPoolAddOns UserPoolAddOnsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a>

---

##### `VerificationMessageTemplateInput`<sup>Optional</sup> <a name="VerificationMessageTemplateInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.verificationMessageTemplateInput"></a>

```csharp
public CognitoUserPoolVerificationMessageTemplate VerificationMessageTemplateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a>

---

##### `AliasAttributes`<sup>Required</sup> <a name="AliasAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.aliasAttributes"></a>

```csharp
public string[] AliasAttributes { get; }
```

- *Type:* string[]

---

##### `AutoVerifiedAttributes`<sup>Required</sup> <a name="AutoVerifiedAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.autoVerifiedAttributes"></a>

```csharp
public string[] AutoVerifiedAttributes { get; }
```

- *Type:* string[]

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deletionProtection"></a>

```csharp
public string DeletionProtection { get; }
```

- *Type:* string

---

##### `EmailVerificationMessage`<sup>Required</sup> <a name="EmailVerificationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationMessage"></a>

```csharp
public string EmailVerificationMessage { get; }
```

- *Type:* string

---

##### `EmailVerificationSubject`<sup>Required</sup> <a name="EmailVerificationSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationSubject"></a>

```csharp
public string EmailVerificationSubject { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MfaConfiguration`<sup>Required</sup> <a name="MfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.mfaConfiguration"></a>

```csharp
public string MfaConfiguration { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SmsAuthenticationMessage`<sup>Required</sup> <a name="SmsAuthenticationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsAuthenticationMessage"></a>

```csharp
public string SmsAuthenticationMessage { get; }
```

- *Type:* string

---

##### `SmsVerificationMessage`<sup>Required</sup> <a name="SmsVerificationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsVerificationMessage"></a>

```csharp
public string SmsVerificationMessage { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UsernameAttributes`<sup>Required</sup> <a name="UsernameAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameAttributes"></a>

```csharp
public string[] UsernameAttributes { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolAccountRecoverySetting <a name="CognitoUserPoolAccountRecoverySetting" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolAccountRecoverySetting {
    object RecoveryMechanism
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting.property.recoveryMechanism">RecoveryMechanism</a></code> | <code>object</code> | recovery_mechanism block. |

---

##### `RecoveryMechanism`<sup>Required</sup> <a name="RecoveryMechanism" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting.property.recoveryMechanism"></a>

```csharp
public object RecoveryMechanism { get; set; }
```

- *Type:* object

recovery_mechanism block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#recovery_mechanism CognitoUserPool#recovery_mechanism}

---

### CognitoUserPoolAccountRecoverySettingRecoveryMechanism <a name="CognitoUserPoolAccountRecoverySettingRecoveryMechanism" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolAccountRecoverySettingRecoveryMechanism {
    string Name,
    double Priority
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#priority CognitoUserPool#priority}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#priority CognitoUserPool#priority}.

---

### CognitoUserPoolAdminCreateUserConfig <a name="CognitoUserPoolAdminCreateUserConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolAdminCreateUserConfig {
    object AllowAdminCreateUserOnly = null,
    CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate InviteMessageTemplate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig.property.allowAdminCreateUserOnly">AllowAdminCreateUserOnly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#allow_admin_create_user_only CognitoUserPool#allow_admin_create_user_only}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig.property.inviteMessageTemplate">InviteMessageTemplate</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a></code> | invite_message_template block. |

---

##### `AllowAdminCreateUserOnly`<sup>Optional</sup> <a name="AllowAdminCreateUserOnly" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig.property.allowAdminCreateUserOnly"></a>

```csharp
public object AllowAdminCreateUserOnly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#allow_admin_create_user_only CognitoUserPool#allow_admin_create_user_only}.

---

##### `InviteMessageTemplate`<sup>Optional</sup> <a name="InviteMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig.property.inviteMessageTemplate"></a>

```csharp
public CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate InviteMessageTemplate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a>

invite_message_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#invite_message_template CognitoUserPool#invite_message_template}

---

### CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate <a name="CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate {
    string EmailMessage = null,
    string EmailSubject = null,
    string SmsMessage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.property.emailMessage">EmailMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message CognitoUserPool#email_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.property.emailSubject">EmailSubject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject CognitoUserPool#email_subject}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.property.smsMessage">SmsMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_message CognitoUserPool#sms_message}. |

---

##### `EmailMessage`<sup>Optional</sup> <a name="EmailMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.property.emailMessage"></a>

```csharp
public string EmailMessage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message CognitoUserPool#email_message}.

---

##### `EmailSubject`<sup>Optional</sup> <a name="EmailSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.property.emailSubject"></a>

```csharp
public string EmailSubject { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject CognitoUserPool#email_subject}.

---

##### `SmsMessage`<sup>Optional</sup> <a name="SmsMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.property.smsMessage"></a>

```csharp
public string SmsMessage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_message CognitoUserPool#sms_message}.

---

### CognitoUserPoolConfig <a name="CognitoUserPoolConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    CognitoUserPoolAccountRecoverySetting AccountRecoverySetting = null,
    CognitoUserPoolAdminCreateUserConfig AdminCreateUserConfig = null,
    string[] AliasAttributes = null,
    string[] AutoVerifiedAttributes = null,
    string DeletionProtection = null,
    CognitoUserPoolDeviceConfiguration DeviceConfiguration = null,
    CognitoUserPoolEmailConfiguration EmailConfiguration = null,
    string EmailVerificationMessage = null,
    string EmailVerificationSubject = null,
    string Id = null,
    CognitoUserPoolLambdaConfig LambdaConfig = null,
    string MfaConfiguration = null,
    CognitoUserPoolPasswordPolicy PasswordPolicy = null,
    object Schema = null,
    string SmsAuthenticationMessage = null,
    CognitoUserPoolSmsConfiguration SmsConfiguration = null,
    string SmsVerificationMessage = null,
    CognitoUserPoolSoftwareTokenMfaConfiguration SoftwareTokenMfaConfiguration = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    CognitoUserPoolUserAttributeUpdateSettings UserAttributeUpdateSettings = null,
    string[] UsernameAttributes = null,
    CognitoUserPoolUsernameConfiguration UsernameConfiguration = null,
    CognitoUserPoolUserPoolAddOns UserPoolAddOns = null,
    CognitoUserPoolVerificationMessageTemplate VerificationMessageTemplate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.accountRecoverySetting">AccountRecoverySetting</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a></code> | account_recovery_setting block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.adminCreateUserConfig">AdminCreateUserConfig</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a></code> | admin_create_user_config block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.aliasAttributes">AliasAttributes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#alias_attributes CognitoUserPool#alias_attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.autoVerifiedAttributes">AutoVerifiedAttributes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#auto_verified_attributes CognitoUserPool#auto_verified_attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.deletionProtection">DeletionProtection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#deletion_protection CognitoUserPool#deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.deviceConfiguration">DeviceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a></code> | device_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.emailConfiguration">EmailConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a></code> | email_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.emailVerificationMessage">EmailVerificationMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_verification_message CognitoUserPool#email_verification_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.emailVerificationSubject">EmailVerificationSubject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_verification_subject CognitoUserPool#email_verification_subject}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#id CognitoUserPool#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.lambdaConfig">LambdaConfig</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a></code> | lambda_config block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.mfaConfiguration">MfaConfiguration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#mfa_configuration CognitoUserPool#mfa_configuration}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.passwordPolicy">PasswordPolicy</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a></code> | password_policy block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.schema">Schema</a></code> | <code>object</code> | schema block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.smsAuthenticationMessage">SmsAuthenticationMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_authentication_message CognitoUserPool#sms_authentication_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.smsConfiguration">SmsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a></code> | sms_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.smsVerificationMessage">SmsVerificationMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_verification_message CognitoUserPool#sms_verification_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.softwareTokenMfaConfiguration">SoftwareTokenMfaConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a></code> | software_token_mfa_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#tags CognitoUserPool#tags}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#tags_all CognitoUserPool#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.userAttributeUpdateSettings">UserAttributeUpdateSettings</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a></code> | user_attribute_update_settings block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.usernameAttributes">UsernameAttributes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#username_attributes CognitoUserPool#username_attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.usernameConfiguration">UsernameConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a></code> | username_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.userPoolAddOns">UserPoolAddOns</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a></code> | user_pool_add_ons block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.verificationMessageTemplate">VerificationMessageTemplate</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a></code> | verification_message_template block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}.

---

##### `AccountRecoverySetting`<sup>Optional</sup> <a name="AccountRecoverySetting" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.accountRecoverySetting"></a>

```csharp
public CognitoUserPoolAccountRecoverySetting AccountRecoverySetting { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a>

account_recovery_setting block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#account_recovery_setting CognitoUserPool#account_recovery_setting}

---

##### `AdminCreateUserConfig`<sup>Optional</sup> <a name="AdminCreateUserConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.adminCreateUserConfig"></a>

```csharp
public CognitoUserPoolAdminCreateUserConfig AdminCreateUserConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a>

admin_create_user_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#admin_create_user_config CognitoUserPool#admin_create_user_config}

---

##### `AliasAttributes`<sup>Optional</sup> <a name="AliasAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.aliasAttributes"></a>

```csharp
public string[] AliasAttributes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#alias_attributes CognitoUserPool#alias_attributes}.

---

##### `AutoVerifiedAttributes`<sup>Optional</sup> <a name="AutoVerifiedAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.autoVerifiedAttributes"></a>

```csharp
public string[] AutoVerifiedAttributes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#auto_verified_attributes CognitoUserPool#auto_verified_attributes}.

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.deletionProtection"></a>

```csharp
public string DeletionProtection { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#deletion_protection CognitoUserPool#deletion_protection}.

---

##### `DeviceConfiguration`<sup>Optional</sup> <a name="DeviceConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.deviceConfiguration"></a>

```csharp
public CognitoUserPoolDeviceConfiguration DeviceConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a>

device_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#device_configuration CognitoUserPool#device_configuration}

---

##### `EmailConfiguration`<sup>Optional</sup> <a name="EmailConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.emailConfiguration"></a>

```csharp
public CognitoUserPoolEmailConfiguration EmailConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a>

email_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_configuration CognitoUserPool#email_configuration}

---

##### `EmailVerificationMessage`<sup>Optional</sup> <a name="EmailVerificationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.emailVerificationMessage"></a>

```csharp
public string EmailVerificationMessage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_verification_message CognitoUserPool#email_verification_message}.

---

##### `EmailVerificationSubject`<sup>Optional</sup> <a name="EmailVerificationSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.emailVerificationSubject"></a>

```csharp
public string EmailVerificationSubject { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_verification_subject CognitoUserPool#email_verification_subject}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#id CognitoUserPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LambdaConfig`<sup>Optional</sup> <a name="LambdaConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.lambdaConfig"></a>

```csharp
public CognitoUserPoolLambdaConfig LambdaConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a>

lambda_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_config CognitoUserPool#lambda_config}

---

##### `MfaConfiguration`<sup>Optional</sup> <a name="MfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.mfaConfiguration"></a>

```csharp
public string MfaConfiguration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#mfa_configuration CognitoUserPool#mfa_configuration}.

---

##### `PasswordPolicy`<sup>Optional</sup> <a name="PasswordPolicy" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.passwordPolicy"></a>

```csharp
public CognitoUserPoolPasswordPolicy PasswordPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a>

password_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#password_policy CognitoUserPool#password_policy}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.schema"></a>

```csharp
public object Schema { get; set; }
```

- *Type:* object

schema block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#schema CognitoUserPool#schema}

---

##### `SmsAuthenticationMessage`<sup>Optional</sup> <a name="SmsAuthenticationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.smsAuthenticationMessage"></a>

```csharp
public string SmsAuthenticationMessage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_authentication_message CognitoUserPool#sms_authentication_message}.

---

##### `SmsConfiguration`<sup>Optional</sup> <a name="SmsConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.smsConfiguration"></a>

```csharp
public CognitoUserPoolSmsConfiguration SmsConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a>

sms_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_configuration CognitoUserPool#sms_configuration}

---

##### `SmsVerificationMessage`<sup>Optional</sup> <a name="SmsVerificationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.smsVerificationMessage"></a>

```csharp
public string SmsVerificationMessage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_verification_message CognitoUserPool#sms_verification_message}.

---

##### `SoftwareTokenMfaConfiguration`<sup>Optional</sup> <a name="SoftwareTokenMfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.softwareTokenMfaConfiguration"></a>

```csharp
public CognitoUserPoolSoftwareTokenMfaConfiguration SoftwareTokenMfaConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a>

software_token_mfa_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#software_token_mfa_configuration CognitoUserPool#software_token_mfa_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#tags CognitoUserPool#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#tags_all CognitoUserPool#tags_all}.

---

##### `UserAttributeUpdateSettings`<sup>Optional</sup> <a name="UserAttributeUpdateSettings" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.userAttributeUpdateSettings"></a>

```csharp
public CognitoUserPoolUserAttributeUpdateSettings UserAttributeUpdateSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a>

user_attribute_update_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#user_attribute_update_settings CognitoUserPool#user_attribute_update_settings}

---

##### `UsernameAttributes`<sup>Optional</sup> <a name="UsernameAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.usernameAttributes"></a>

```csharp
public string[] UsernameAttributes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#username_attributes CognitoUserPool#username_attributes}.

---

##### `UsernameConfiguration`<sup>Optional</sup> <a name="UsernameConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.usernameConfiguration"></a>

```csharp
public CognitoUserPoolUsernameConfiguration UsernameConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a>

username_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#username_configuration CognitoUserPool#username_configuration}

---

##### `UserPoolAddOns`<sup>Optional</sup> <a name="UserPoolAddOns" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.userPoolAddOns"></a>

```csharp
public CognitoUserPoolUserPoolAddOns UserPoolAddOns { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a>

user_pool_add_ons block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#user_pool_add_ons CognitoUserPool#user_pool_add_ons}

---

##### `VerificationMessageTemplate`<sup>Optional</sup> <a name="VerificationMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.verificationMessageTemplate"></a>

```csharp
public CognitoUserPoolVerificationMessageTemplate VerificationMessageTemplate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a>

verification_message_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#verification_message_template CognitoUserPool#verification_message_template}

---

### CognitoUserPoolDeviceConfiguration <a name="CognitoUserPoolDeviceConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolDeviceConfiguration {
    object ChallengeRequiredOnNewDevice = null,
    object DeviceOnlyRememberedOnUserPrompt = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration.property.challengeRequiredOnNewDevice">ChallengeRequiredOnNewDevice</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#challenge_required_on_new_device CognitoUserPool#challenge_required_on_new_device}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration.property.deviceOnlyRememberedOnUserPrompt">DeviceOnlyRememberedOnUserPrompt</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#device_only_remembered_on_user_prompt CognitoUserPool#device_only_remembered_on_user_prompt}. |

---

##### `ChallengeRequiredOnNewDevice`<sup>Optional</sup> <a name="ChallengeRequiredOnNewDevice" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration.property.challengeRequiredOnNewDevice"></a>

```csharp
public object ChallengeRequiredOnNewDevice { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#challenge_required_on_new_device CognitoUserPool#challenge_required_on_new_device}.

---

##### `DeviceOnlyRememberedOnUserPrompt`<sup>Optional</sup> <a name="DeviceOnlyRememberedOnUserPrompt" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration.property.deviceOnlyRememberedOnUserPrompt"></a>

```csharp
public object DeviceOnlyRememberedOnUserPrompt { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#device_only_remembered_on_user_prompt CognitoUserPool#device_only_remembered_on_user_prompt}.

---

### CognitoUserPoolEmailConfiguration <a name="CognitoUserPoolEmailConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolEmailConfiguration {
    string ConfigurationSet = null,
    string EmailSendingAccount = null,
    string FromEmailAddress = null,
    string ReplyToEmailAddress = null,
    string SourceArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.configurationSet">ConfigurationSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#configuration_set CognitoUserPool#configuration_set}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.emailSendingAccount">EmailSendingAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_sending_account CognitoUserPool#email_sending_account}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.fromEmailAddress">FromEmailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#from_email_address CognitoUserPool#from_email_address}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.replyToEmailAddress">ReplyToEmailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#reply_to_email_address CognitoUserPool#reply_to_email_address}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.sourceArn">SourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#source_arn CognitoUserPool#source_arn}. |

---

##### `ConfigurationSet`<sup>Optional</sup> <a name="ConfigurationSet" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.configurationSet"></a>

```csharp
public string ConfigurationSet { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#configuration_set CognitoUserPool#configuration_set}.

---

##### `EmailSendingAccount`<sup>Optional</sup> <a name="EmailSendingAccount" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.emailSendingAccount"></a>

```csharp
public string EmailSendingAccount { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_sending_account CognitoUserPool#email_sending_account}.

---

##### `FromEmailAddress`<sup>Optional</sup> <a name="FromEmailAddress" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.fromEmailAddress"></a>

```csharp
public string FromEmailAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#from_email_address CognitoUserPool#from_email_address}.

---

##### `ReplyToEmailAddress`<sup>Optional</sup> <a name="ReplyToEmailAddress" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.replyToEmailAddress"></a>

```csharp
public string ReplyToEmailAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#reply_to_email_address CognitoUserPool#reply_to_email_address}.

---

##### `SourceArn`<sup>Optional</sup> <a name="SourceArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.sourceArn"></a>

```csharp
public string SourceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#source_arn CognitoUserPool#source_arn}.

---

### CognitoUserPoolLambdaConfig <a name="CognitoUserPoolLambdaConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolLambdaConfig {
    string CreateAuthChallenge = null,
    CognitoUserPoolLambdaConfigCustomEmailSender CustomEmailSender = null,
    string CustomMessage = null,
    CognitoUserPoolLambdaConfigCustomSmsSender CustomSmsSender = null,
    string DefineAuthChallenge = null,
    string KmsKeyId = null,
    string PostAuthentication = null,
    string PostConfirmation = null,
    string PreAuthentication = null,
    string PreSignUp = null,
    string PreTokenGeneration = null,
    string UserMigration = null,
    string VerifyAuthChallengeResponse = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.createAuthChallenge">CreateAuthChallenge</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#create_auth_challenge CognitoUserPool#create_auth_challenge}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.customEmailSender">CustomEmailSender</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a></code> | custom_email_sender block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.customMessage">CustomMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#custom_message CognitoUserPool#custom_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.customSmsSender">CustomSmsSender</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a></code> | custom_sms_sender block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.defineAuthChallenge">DefineAuthChallenge</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#define_auth_challenge CognitoUserPool#define_auth_challenge}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#kms_key_id CognitoUserPool#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.postAuthentication">PostAuthentication</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#post_authentication CognitoUserPool#post_authentication}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.postConfirmation">PostConfirmation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#post_confirmation CognitoUserPool#post_confirmation}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.preAuthentication">PreAuthentication</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_authentication CognitoUserPool#pre_authentication}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.preSignUp">PreSignUp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_sign_up CognitoUserPool#pre_sign_up}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.preTokenGeneration">PreTokenGeneration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_token_generation CognitoUserPool#pre_token_generation}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.userMigration">UserMigration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#user_migration CognitoUserPool#user_migration}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.verifyAuthChallengeResponse">VerifyAuthChallengeResponse</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#verify_auth_challenge_response CognitoUserPool#verify_auth_challenge_response}. |

---

##### `CreateAuthChallenge`<sup>Optional</sup> <a name="CreateAuthChallenge" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.createAuthChallenge"></a>

```csharp
public string CreateAuthChallenge { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#create_auth_challenge CognitoUserPool#create_auth_challenge}.

---

##### `CustomEmailSender`<sup>Optional</sup> <a name="CustomEmailSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.customEmailSender"></a>

```csharp
public CognitoUserPoolLambdaConfigCustomEmailSender CustomEmailSender { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a>

custom_email_sender block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#custom_email_sender CognitoUserPool#custom_email_sender}

---

##### `CustomMessage`<sup>Optional</sup> <a name="CustomMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.customMessage"></a>

```csharp
public string CustomMessage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#custom_message CognitoUserPool#custom_message}.

---

##### `CustomSmsSender`<sup>Optional</sup> <a name="CustomSmsSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.customSmsSender"></a>

```csharp
public CognitoUserPoolLambdaConfigCustomSmsSender CustomSmsSender { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a>

custom_sms_sender block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#custom_sms_sender CognitoUserPool#custom_sms_sender}

---

##### `DefineAuthChallenge`<sup>Optional</sup> <a name="DefineAuthChallenge" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.defineAuthChallenge"></a>

```csharp
public string DefineAuthChallenge { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#define_auth_challenge CognitoUserPool#define_auth_challenge}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#kms_key_id CognitoUserPool#kms_key_id}.

---

##### `PostAuthentication`<sup>Optional</sup> <a name="PostAuthentication" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.postAuthentication"></a>

```csharp
public string PostAuthentication { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#post_authentication CognitoUserPool#post_authentication}.

---

##### `PostConfirmation`<sup>Optional</sup> <a name="PostConfirmation" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.postConfirmation"></a>

```csharp
public string PostConfirmation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#post_confirmation CognitoUserPool#post_confirmation}.

---

##### `PreAuthentication`<sup>Optional</sup> <a name="PreAuthentication" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.preAuthentication"></a>

```csharp
public string PreAuthentication { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_authentication CognitoUserPool#pre_authentication}.

---

##### `PreSignUp`<sup>Optional</sup> <a name="PreSignUp" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.preSignUp"></a>

```csharp
public string PreSignUp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_sign_up CognitoUserPool#pre_sign_up}.

---

##### `PreTokenGeneration`<sup>Optional</sup> <a name="PreTokenGeneration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.preTokenGeneration"></a>

```csharp
public string PreTokenGeneration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_token_generation CognitoUserPool#pre_token_generation}.

---

##### `UserMigration`<sup>Optional</sup> <a name="UserMigration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.userMigration"></a>

```csharp
public string UserMigration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#user_migration CognitoUserPool#user_migration}.

---

##### `VerifyAuthChallengeResponse`<sup>Optional</sup> <a name="VerifyAuthChallengeResponse" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.verifyAuthChallengeResponse"></a>

```csharp
public string VerifyAuthChallengeResponse { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#verify_auth_challenge_response CognitoUserPool#verify_auth_challenge_response}.

---

### CognitoUserPoolLambdaConfigCustomEmailSender <a name="CognitoUserPoolLambdaConfigCustomEmailSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolLambdaConfigCustomEmailSender {
    string LambdaArn,
    string LambdaVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender.property.lambdaArn">LambdaArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_arn CognitoUserPool#lambda_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender.property.lambdaVersion">LambdaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_version CognitoUserPool#lambda_version}. |

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender.property.lambdaArn"></a>

```csharp
public string LambdaArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_arn CognitoUserPool#lambda_arn}.

---

##### `LambdaVersion`<sup>Required</sup> <a name="LambdaVersion" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender.property.lambdaVersion"></a>

```csharp
public string LambdaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_version CognitoUserPool#lambda_version}.

---

### CognitoUserPoolLambdaConfigCustomSmsSender <a name="CognitoUserPoolLambdaConfigCustomSmsSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolLambdaConfigCustomSmsSender {
    string LambdaArn,
    string LambdaVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender.property.lambdaArn">LambdaArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_arn CognitoUserPool#lambda_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender.property.lambdaVersion">LambdaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_version CognitoUserPool#lambda_version}. |

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender.property.lambdaArn"></a>

```csharp
public string LambdaArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_arn CognitoUserPool#lambda_arn}.

---

##### `LambdaVersion`<sup>Required</sup> <a name="LambdaVersion" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender.property.lambdaVersion"></a>

```csharp
public string LambdaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_version CognitoUserPool#lambda_version}.

---

### CognitoUserPoolPasswordPolicy <a name="CognitoUserPoolPasswordPolicy" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolPasswordPolicy {
    double MinimumLength = null,
    object RequireLowercase = null,
    object RequireNumbers = null,
    object RequireSymbols = null,
    object RequireUppercase = null,
    double TemporaryPasswordValidityDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.minimumLength">MinimumLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#minimum_length CognitoUserPool#minimum_length}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireLowercase">RequireLowercase</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_lowercase CognitoUserPool#require_lowercase}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireNumbers">RequireNumbers</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_numbers CognitoUserPool#require_numbers}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireSymbols">RequireSymbols</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_symbols CognitoUserPool#require_symbols}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireUppercase">RequireUppercase</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_uppercase CognitoUserPool#require_uppercase}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.temporaryPasswordValidityDays">TemporaryPasswordValidityDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#temporary_password_validity_days CognitoUserPool#temporary_password_validity_days}. |

---

##### `MinimumLength`<sup>Optional</sup> <a name="MinimumLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.minimumLength"></a>

```csharp
public double MinimumLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#minimum_length CognitoUserPool#minimum_length}.

---

##### `RequireLowercase`<sup>Optional</sup> <a name="RequireLowercase" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireLowercase"></a>

```csharp
public object RequireLowercase { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_lowercase CognitoUserPool#require_lowercase}.

---

##### `RequireNumbers`<sup>Optional</sup> <a name="RequireNumbers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireNumbers"></a>

```csharp
public object RequireNumbers { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_numbers CognitoUserPool#require_numbers}.

---

##### `RequireSymbols`<sup>Optional</sup> <a name="RequireSymbols" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireSymbols"></a>

```csharp
public object RequireSymbols { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_symbols CognitoUserPool#require_symbols}.

---

##### `RequireUppercase`<sup>Optional</sup> <a name="RequireUppercase" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireUppercase"></a>

```csharp
public object RequireUppercase { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_uppercase CognitoUserPool#require_uppercase}.

---

##### `TemporaryPasswordValidityDays`<sup>Optional</sup> <a name="TemporaryPasswordValidityDays" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.temporaryPasswordValidityDays"></a>

```csharp
public double TemporaryPasswordValidityDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#temporary_password_validity_days CognitoUserPool#temporary_password_validity_days}.

---

### CognitoUserPoolSchema <a name="CognitoUserPoolSchema" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolSchema {
    string AttributeDataType,
    string Name,
    object DeveloperOnlyAttribute = null,
    object Mutable = null,
    CognitoUserPoolSchemaNumberAttributeConstraints NumberAttributeConstraints = null,
    object Required = null,
    CognitoUserPoolSchemaStringAttributeConstraints StringAttributeConstraints = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.attributeDataType">AttributeDataType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#attribute_data_type CognitoUserPool#attribute_data_type}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.developerOnlyAttribute">DeveloperOnlyAttribute</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#developer_only_attribute CognitoUserPool#developer_only_attribute}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.mutable">Mutable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#mutable CognitoUserPool#mutable}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.numberAttributeConstraints">NumberAttributeConstraints</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints">CognitoUserPoolSchemaNumberAttributeConstraints</a></code> | number_attribute_constraints block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.required">Required</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#required CognitoUserPool#required}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.stringAttributeConstraints">StringAttributeConstraints</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints">CognitoUserPoolSchemaStringAttributeConstraints</a></code> | string_attribute_constraints block. |

---

##### `AttributeDataType`<sup>Required</sup> <a name="AttributeDataType" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.attributeDataType"></a>

```csharp
public string AttributeDataType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#attribute_data_type CognitoUserPool#attribute_data_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}.

---

##### `DeveloperOnlyAttribute`<sup>Optional</sup> <a name="DeveloperOnlyAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.developerOnlyAttribute"></a>

```csharp
public object DeveloperOnlyAttribute { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#developer_only_attribute CognitoUserPool#developer_only_attribute}.

---

##### `Mutable`<sup>Optional</sup> <a name="Mutable" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.mutable"></a>

```csharp
public object Mutable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#mutable CognitoUserPool#mutable}.

---

##### `NumberAttributeConstraints`<sup>Optional</sup> <a name="NumberAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.numberAttributeConstraints"></a>

```csharp
public CognitoUserPoolSchemaNumberAttributeConstraints NumberAttributeConstraints { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints">CognitoUserPoolSchemaNumberAttributeConstraints</a>

number_attribute_constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#number_attribute_constraints CognitoUserPool#number_attribute_constraints}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.required"></a>

```csharp
public object Required { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#required CognitoUserPool#required}.

---

##### `StringAttributeConstraints`<sup>Optional</sup> <a name="StringAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.stringAttributeConstraints"></a>

```csharp
public CognitoUserPoolSchemaStringAttributeConstraints StringAttributeConstraints { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints">CognitoUserPoolSchemaStringAttributeConstraints</a>

string_attribute_constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#string_attribute_constraints CognitoUserPool#string_attribute_constraints}

---

### CognitoUserPoolSchemaNumberAttributeConstraints <a name="CognitoUserPoolSchemaNumberAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolSchemaNumberAttributeConstraints {
    string MaxValue = null,
    string MinValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints.property.maxValue">MaxValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#max_value CognitoUserPool#max_value}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints.property.minValue">MinValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#min_value CognitoUserPool#min_value}. |

---

##### `MaxValue`<sup>Optional</sup> <a name="MaxValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints.property.maxValue"></a>

```csharp
public string MaxValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#max_value CognitoUserPool#max_value}.

---

##### `MinValue`<sup>Optional</sup> <a name="MinValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints.property.minValue"></a>

```csharp
public string MinValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#min_value CognitoUserPool#min_value}.

---

### CognitoUserPoolSchemaStringAttributeConstraints <a name="CognitoUserPoolSchemaStringAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolSchemaStringAttributeConstraints {
    string MaxLength = null,
    string MinLength = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints.property.maxLength">MaxLength</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#max_length CognitoUserPool#max_length}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints.property.minLength">MinLength</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#min_length CognitoUserPool#min_length}. |

---

##### `MaxLength`<sup>Optional</sup> <a name="MaxLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints.property.maxLength"></a>

```csharp
public string MaxLength { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#max_length CognitoUserPool#max_length}.

---

##### `MinLength`<sup>Optional</sup> <a name="MinLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints.property.minLength"></a>

```csharp
public string MinLength { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#min_length CognitoUserPool#min_length}.

---

### CognitoUserPoolSmsConfiguration <a name="CognitoUserPoolSmsConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolSmsConfiguration {
    string ExternalId,
    string SnsCallerArn,
    string SnsRegion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.property.externalId">ExternalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#external_id CognitoUserPool#external_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.property.snsCallerArn">SnsCallerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sns_caller_arn CognitoUserPool#sns_caller_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.property.snsRegion">SnsRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sns_region CognitoUserPool#sns_region}. |

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#external_id CognitoUserPool#external_id}.

---

##### `SnsCallerArn`<sup>Required</sup> <a name="SnsCallerArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.property.snsCallerArn"></a>

```csharp
public string SnsCallerArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sns_caller_arn CognitoUserPool#sns_caller_arn}.

---

##### `SnsRegion`<sup>Optional</sup> <a name="SnsRegion" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.property.snsRegion"></a>

```csharp
public string SnsRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sns_region CognitoUserPool#sns_region}.

---

### CognitoUserPoolSoftwareTokenMfaConfiguration <a name="CognitoUserPoolSoftwareTokenMfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolSoftwareTokenMfaConfiguration {
    object Enabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#enabled CognitoUserPool#enabled}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#enabled CognitoUserPool#enabled}.

---

### CognitoUserPoolUserAttributeUpdateSettings <a name="CognitoUserPoolUserAttributeUpdateSettings" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolUserAttributeUpdateSettings {
    string[] AttributesRequireVerificationBeforeUpdate
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings.property.attributesRequireVerificationBeforeUpdate">AttributesRequireVerificationBeforeUpdate</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#attributes_require_verification_before_update CognitoUserPool#attributes_require_verification_before_update}. |

---

##### `AttributesRequireVerificationBeforeUpdate`<sup>Required</sup> <a name="AttributesRequireVerificationBeforeUpdate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings.property.attributesRequireVerificationBeforeUpdate"></a>

```csharp
public string[] AttributesRequireVerificationBeforeUpdate { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#attributes_require_verification_before_update CognitoUserPool#attributes_require_verification_before_update}.

---

### CognitoUserPoolUsernameConfiguration <a name="CognitoUserPoolUsernameConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolUsernameConfiguration {
    object CaseSensitive
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration.property.caseSensitive">CaseSensitive</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#case_sensitive CognitoUserPool#case_sensitive}. |

---

##### `CaseSensitive`<sup>Required</sup> <a name="CaseSensitive" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration.property.caseSensitive"></a>

```csharp
public object CaseSensitive { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#case_sensitive CognitoUserPool#case_sensitive}.

---

### CognitoUserPoolUserPoolAddOns <a name="CognitoUserPoolUserPoolAddOns" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolUserPoolAddOns {
    string AdvancedSecurityMode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns.property.advancedSecurityMode">AdvancedSecurityMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#advanced_security_mode CognitoUserPool#advanced_security_mode}. |

---

##### `AdvancedSecurityMode`<sup>Required</sup> <a name="AdvancedSecurityMode" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns.property.advancedSecurityMode"></a>

```csharp
public string AdvancedSecurityMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#advanced_security_mode CognitoUserPool#advanced_security_mode}.

---

### CognitoUserPoolVerificationMessageTemplate <a name="CognitoUserPoolVerificationMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolVerificationMessageTemplate {
    string DefaultEmailOption = null,
    string EmailMessage = null,
    string EmailMessageByLink = null,
    string EmailSubject = null,
    string EmailSubjectByLink = null,
    string SmsMessage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.defaultEmailOption">DefaultEmailOption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#default_email_option CognitoUserPool#default_email_option}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailMessage">EmailMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message CognitoUserPool#email_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailMessageByLink">EmailMessageByLink</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message_by_link CognitoUserPool#email_message_by_link}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailSubject">EmailSubject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject CognitoUserPool#email_subject}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailSubjectByLink">EmailSubjectByLink</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject_by_link CognitoUserPool#email_subject_by_link}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.smsMessage">SmsMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_message CognitoUserPool#sms_message}. |

---

##### `DefaultEmailOption`<sup>Optional</sup> <a name="DefaultEmailOption" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.defaultEmailOption"></a>

```csharp
public string DefaultEmailOption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#default_email_option CognitoUserPool#default_email_option}.

---

##### `EmailMessage`<sup>Optional</sup> <a name="EmailMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailMessage"></a>

```csharp
public string EmailMessage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message CognitoUserPool#email_message}.

---

##### `EmailMessageByLink`<sup>Optional</sup> <a name="EmailMessageByLink" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailMessageByLink"></a>

```csharp
public string EmailMessageByLink { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message_by_link CognitoUserPool#email_message_by_link}.

---

##### `EmailSubject`<sup>Optional</sup> <a name="EmailSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailSubject"></a>

```csharp
public string EmailSubject { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject CognitoUserPool#email_subject}.

---

##### `EmailSubjectByLink`<sup>Optional</sup> <a name="EmailSubjectByLink" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailSubjectByLink"></a>

```csharp
public string EmailSubjectByLink { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject_by_link CognitoUserPool#email_subject_by_link}.

---

##### `SmsMessage`<sup>Optional</sup> <a name="SmsMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.smsMessage"></a>

```csharp
public string SmsMessage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_message CognitoUserPool#sms_message}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoUserPoolAccountRecoverySettingOutputReference <a name="CognitoUserPoolAccountRecoverySettingOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolAccountRecoverySettingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRecoveryMechanism` <a name="PutRecoveryMechanism" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.putRecoveryMechanism"></a>

```csharp
private void PutRecoveryMechanism(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.putRecoveryMechanism.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.recoveryMechanism">RecoveryMechanism</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList">CognitoUserPoolAccountRecoverySettingRecoveryMechanismList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.recoveryMechanismInput">RecoveryMechanismInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RecoveryMechanism`<sup>Required</sup> <a name="RecoveryMechanism" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.recoveryMechanism"></a>

```csharp
public CognitoUserPoolAccountRecoverySettingRecoveryMechanismList RecoveryMechanism { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList">CognitoUserPoolAccountRecoverySettingRecoveryMechanismList</a>

---

##### `RecoveryMechanismInput`<sup>Optional</sup> <a name="RecoveryMechanismInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.recoveryMechanismInput"></a>

```csharp
public object RecoveryMechanismInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.internalValue"></a>

```csharp
public CognitoUserPoolAccountRecoverySetting InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a>

---


### CognitoUserPoolAccountRecoverySettingRecoveryMechanismList <a name="CognitoUserPoolAccountRecoverySettingRecoveryMechanismList" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolAccountRecoverySettingRecoveryMechanismList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.get"></a>

```csharp
private CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference <a name="CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference <a name="CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmailMessage` <a name="ResetEmailMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resetEmailMessage"></a>

```csharp
private void ResetEmailMessage()
```

##### `ResetEmailSubject` <a name="ResetEmailSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resetEmailSubject"></a>

```csharp
private void ResetEmailSubject()
```

##### `ResetSmsMessage` <a name="ResetSmsMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resetSmsMessage"></a>

```csharp
private void ResetSmsMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailMessageInput">EmailMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailSubjectInput">EmailSubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.smsMessageInput">SmsMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailMessage">EmailMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailSubject">EmailSubject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.smsMessage">SmsMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailMessageInput`<sup>Optional</sup> <a name="EmailMessageInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailMessageInput"></a>

```csharp
public string EmailMessageInput { get; }
```

- *Type:* string

---

##### `EmailSubjectInput`<sup>Optional</sup> <a name="EmailSubjectInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailSubjectInput"></a>

```csharp
public string EmailSubjectInput { get; }
```

- *Type:* string

---

##### `SmsMessageInput`<sup>Optional</sup> <a name="SmsMessageInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.smsMessageInput"></a>

```csharp
public string SmsMessageInput { get; }
```

- *Type:* string

---

##### `EmailMessage`<sup>Required</sup> <a name="EmailMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailMessage"></a>

```csharp
public string EmailMessage { get; }
```

- *Type:* string

---

##### `EmailSubject`<sup>Required</sup> <a name="EmailSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailSubject"></a>

```csharp
public string EmailSubject { get; }
```

- *Type:* string

---

##### `SmsMessage`<sup>Required</sup> <a name="SmsMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.smsMessage"></a>

```csharp
public string SmsMessage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.internalValue"></a>

```csharp
public CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a>

---


### CognitoUserPoolAdminCreateUserConfigOutputReference <a name="CognitoUserPoolAdminCreateUserConfigOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolAdminCreateUserConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInviteMessageTemplate` <a name="PutInviteMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.putInviteMessageTemplate"></a>

```csharp
private void PutInviteMessageTemplate(CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.putInviteMessageTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a>

---

##### `ResetAllowAdminCreateUserOnly` <a name="ResetAllowAdminCreateUserOnly" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.resetAllowAdminCreateUserOnly"></a>

```csharp
private void ResetAllowAdminCreateUserOnly()
```

##### `ResetInviteMessageTemplate` <a name="ResetInviteMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.resetInviteMessageTemplate"></a>

```csharp
private void ResetInviteMessageTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.inviteMessageTemplate">InviteMessageTemplate</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.allowAdminCreateUserOnlyInput">AllowAdminCreateUserOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.inviteMessageTemplateInput">InviteMessageTemplateInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.allowAdminCreateUserOnly">AllowAdminCreateUserOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InviteMessageTemplate`<sup>Required</sup> <a name="InviteMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.inviteMessageTemplate"></a>

```csharp
public CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference InviteMessageTemplate { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference</a>

---

##### `AllowAdminCreateUserOnlyInput`<sup>Optional</sup> <a name="AllowAdminCreateUserOnlyInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.allowAdminCreateUserOnlyInput"></a>

```csharp
public object AllowAdminCreateUserOnlyInput { get; }
```

- *Type:* object

---

##### `InviteMessageTemplateInput`<sup>Optional</sup> <a name="InviteMessageTemplateInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.inviteMessageTemplateInput"></a>

```csharp
public CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate InviteMessageTemplateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a>

---

##### `AllowAdminCreateUserOnly`<sup>Required</sup> <a name="AllowAdminCreateUserOnly" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.allowAdminCreateUserOnly"></a>

```csharp
public object AllowAdminCreateUserOnly { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.internalValue"></a>

```csharp
public CognitoUserPoolAdminCreateUserConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a>

---


### CognitoUserPoolDeviceConfigurationOutputReference <a name="CognitoUserPoolDeviceConfigurationOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolDeviceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChallengeRequiredOnNewDevice` <a name="ResetChallengeRequiredOnNewDevice" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.resetChallengeRequiredOnNewDevice"></a>

```csharp
private void ResetChallengeRequiredOnNewDevice()
```

##### `ResetDeviceOnlyRememberedOnUserPrompt` <a name="ResetDeviceOnlyRememberedOnUserPrompt" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.resetDeviceOnlyRememberedOnUserPrompt"></a>

```csharp
private void ResetDeviceOnlyRememberedOnUserPrompt()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.challengeRequiredOnNewDeviceInput">ChallengeRequiredOnNewDeviceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.deviceOnlyRememberedOnUserPromptInput">DeviceOnlyRememberedOnUserPromptInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.challengeRequiredOnNewDevice">ChallengeRequiredOnNewDevice</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.deviceOnlyRememberedOnUserPrompt">DeviceOnlyRememberedOnUserPrompt</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChallengeRequiredOnNewDeviceInput`<sup>Optional</sup> <a name="ChallengeRequiredOnNewDeviceInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.challengeRequiredOnNewDeviceInput"></a>

```csharp
public object ChallengeRequiredOnNewDeviceInput { get; }
```

- *Type:* object

---

##### `DeviceOnlyRememberedOnUserPromptInput`<sup>Optional</sup> <a name="DeviceOnlyRememberedOnUserPromptInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.deviceOnlyRememberedOnUserPromptInput"></a>

```csharp
public object DeviceOnlyRememberedOnUserPromptInput { get; }
```

- *Type:* object

---

##### `ChallengeRequiredOnNewDevice`<sup>Required</sup> <a name="ChallengeRequiredOnNewDevice" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.challengeRequiredOnNewDevice"></a>

```csharp
public object ChallengeRequiredOnNewDevice { get; }
```

- *Type:* object

---

##### `DeviceOnlyRememberedOnUserPrompt`<sup>Required</sup> <a name="DeviceOnlyRememberedOnUserPrompt" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.deviceOnlyRememberedOnUserPrompt"></a>

```csharp
public object DeviceOnlyRememberedOnUserPrompt { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.internalValue"></a>

```csharp
public CognitoUserPoolDeviceConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a>

---


### CognitoUserPoolEmailConfigurationOutputReference <a name="CognitoUserPoolEmailConfigurationOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolEmailConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfigurationSet` <a name="ResetConfigurationSet" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetConfigurationSet"></a>

```csharp
private void ResetConfigurationSet()
```

##### `ResetEmailSendingAccount` <a name="ResetEmailSendingAccount" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetEmailSendingAccount"></a>

```csharp
private void ResetEmailSendingAccount()
```

##### `ResetFromEmailAddress` <a name="ResetFromEmailAddress" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetFromEmailAddress"></a>

```csharp
private void ResetFromEmailAddress()
```

##### `ResetReplyToEmailAddress` <a name="ResetReplyToEmailAddress" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetReplyToEmailAddress"></a>

```csharp
private void ResetReplyToEmailAddress()
```

##### `ResetSourceArn` <a name="ResetSourceArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetSourceArn"></a>

```csharp
private void ResetSourceArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.configurationSetInput">ConfigurationSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.emailSendingAccountInput">EmailSendingAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.fromEmailAddressInput">FromEmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.replyToEmailAddressInput">ReplyToEmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.sourceArnInput">SourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.configurationSet">ConfigurationSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.emailSendingAccount">EmailSendingAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.fromEmailAddress">FromEmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.replyToEmailAddress">ReplyToEmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.sourceArn">SourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigurationSetInput`<sup>Optional</sup> <a name="ConfigurationSetInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.configurationSetInput"></a>

```csharp
public string ConfigurationSetInput { get; }
```

- *Type:* string

---

##### `EmailSendingAccountInput`<sup>Optional</sup> <a name="EmailSendingAccountInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.emailSendingAccountInput"></a>

```csharp
public string EmailSendingAccountInput { get; }
```

- *Type:* string

---

##### `FromEmailAddressInput`<sup>Optional</sup> <a name="FromEmailAddressInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.fromEmailAddressInput"></a>

```csharp
public string FromEmailAddressInput { get; }
```

- *Type:* string

---

##### `ReplyToEmailAddressInput`<sup>Optional</sup> <a name="ReplyToEmailAddressInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.replyToEmailAddressInput"></a>

```csharp
public string ReplyToEmailAddressInput { get; }
```

- *Type:* string

---

##### `SourceArnInput`<sup>Optional</sup> <a name="SourceArnInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.sourceArnInput"></a>

```csharp
public string SourceArnInput { get; }
```

- *Type:* string

---

##### `ConfigurationSet`<sup>Required</sup> <a name="ConfigurationSet" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.configurationSet"></a>

```csharp
public string ConfigurationSet { get; }
```

- *Type:* string

---

##### `EmailSendingAccount`<sup>Required</sup> <a name="EmailSendingAccount" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.emailSendingAccount"></a>

```csharp
public string EmailSendingAccount { get; }
```

- *Type:* string

---

##### `FromEmailAddress`<sup>Required</sup> <a name="FromEmailAddress" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.fromEmailAddress"></a>

```csharp
public string FromEmailAddress { get; }
```

- *Type:* string

---

##### `ReplyToEmailAddress`<sup>Required</sup> <a name="ReplyToEmailAddress" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.replyToEmailAddress"></a>

```csharp
public string ReplyToEmailAddress { get; }
```

- *Type:* string

---

##### `SourceArn`<sup>Required</sup> <a name="SourceArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.sourceArn"></a>

```csharp
public string SourceArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.internalValue"></a>

```csharp
public CognitoUserPoolEmailConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a>

---


### CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference <a name="CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaArnInput">LambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersionInput">LambdaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersion">LambdaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LambdaArnInput`<sup>Optional</sup> <a name="LambdaArnInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaArnInput"></a>

```csharp
public string LambdaArnInput { get; }
```

- *Type:* string

---

##### `LambdaVersionInput`<sup>Optional</sup> <a name="LambdaVersionInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersionInput"></a>

```csharp
public string LambdaVersionInput { get; }
```

- *Type:* string

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaArn"></a>

```csharp
public string LambdaArn { get; }
```

- *Type:* string

---

##### `LambdaVersion`<sup>Required</sup> <a name="LambdaVersion" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersion"></a>

```csharp
public string LambdaVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.internalValue"></a>

```csharp
public CognitoUserPoolLambdaConfigCustomEmailSender InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a>

---


### CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference <a name="CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaArnInput">LambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersionInput">LambdaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersion">LambdaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LambdaArnInput`<sup>Optional</sup> <a name="LambdaArnInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaArnInput"></a>

```csharp
public string LambdaArnInput { get; }
```

- *Type:* string

---

##### `LambdaVersionInput`<sup>Optional</sup> <a name="LambdaVersionInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersionInput"></a>

```csharp
public string LambdaVersionInput { get; }
```

- *Type:* string

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaArn"></a>

```csharp
public string LambdaArn { get; }
```

- *Type:* string

---

##### `LambdaVersion`<sup>Required</sup> <a name="LambdaVersion" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersion"></a>

```csharp
public string LambdaVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.internalValue"></a>

```csharp
public CognitoUserPoolLambdaConfigCustomSmsSender InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a>

---


### CognitoUserPoolLambdaConfigOutputReference <a name="CognitoUserPoolLambdaConfigOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolLambdaConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomEmailSender` <a name="PutCustomEmailSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.putCustomEmailSender"></a>

```csharp
private void PutCustomEmailSender(CognitoUserPoolLambdaConfigCustomEmailSender Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.putCustomEmailSender.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a>

---

##### `PutCustomSmsSender` <a name="PutCustomSmsSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.putCustomSmsSender"></a>

```csharp
private void PutCustomSmsSender(CognitoUserPoolLambdaConfigCustomSmsSender Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.putCustomSmsSender.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a>

---

##### `ResetCreateAuthChallenge` <a name="ResetCreateAuthChallenge" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetCreateAuthChallenge"></a>

```csharp
private void ResetCreateAuthChallenge()
```

##### `ResetCustomEmailSender` <a name="ResetCustomEmailSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetCustomEmailSender"></a>

```csharp
private void ResetCustomEmailSender()
```

##### `ResetCustomMessage` <a name="ResetCustomMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetCustomMessage"></a>

```csharp
private void ResetCustomMessage()
```

##### `ResetCustomSmsSender` <a name="ResetCustomSmsSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetCustomSmsSender"></a>

```csharp
private void ResetCustomSmsSender()
```

##### `ResetDefineAuthChallenge` <a name="ResetDefineAuthChallenge" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetDefineAuthChallenge"></a>

```csharp
private void ResetDefineAuthChallenge()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetPostAuthentication` <a name="ResetPostAuthentication" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPostAuthentication"></a>

```csharp
private void ResetPostAuthentication()
```

##### `ResetPostConfirmation` <a name="ResetPostConfirmation" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPostConfirmation"></a>

```csharp
private void ResetPostConfirmation()
```

##### `ResetPreAuthentication` <a name="ResetPreAuthentication" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPreAuthentication"></a>

```csharp
private void ResetPreAuthentication()
```

##### `ResetPreSignUp` <a name="ResetPreSignUp" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPreSignUp"></a>

```csharp
private void ResetPreSignUp()
```

##### `ResetPreTokenGeneration` <a name="ResetPreTokenGeneration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPreTokenGeneration"></a>

```csharp
private void ResetPreTokenGeneration()
```

##### `ResetUserMigration` <a name="ResetUserMigration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetUserMigration"></a>

```csharp
private void ResetUserMigration()
```

##### `ResetVerifyAuthChallengeResponse` <a name="ResetVerifyAuthChallengeResponse" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetVerifyAuthChallengeResponse"></a>

```csharp
private void ResetVerifyAuthChallengeResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customEmailSender">CustomEmailSender</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference">CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customSmsSender">CustomSmsSender</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference">CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.createAuthChallengeInput">CreateAuthChallengeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customEmailSenderInput">CustomEmailSenderInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customMessageInput">CustomMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customSmsSenderInput">CustomSmsSenderInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.defineAuthChallengeInput">DefineAuthChallengeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postAuthenticationInput">PostAuthenticationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postConfirmationInput">PostConfirmationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preAuthenticationInput">PreAuthenticationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preSignUpInput">PreSignUpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preTokenGenerationInput">PreTokenGenerationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.userMigrationInput">UserMigrationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.verifyAuthChallengeResponseInput">VerifyAuthChallengeResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.createAuthChallenge">CreateAuthChallenge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customMessage">CustomMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.defineAuthChallenge">DefineAuthChallenge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postAuthentication">PostAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postConfirmation">PostConfirmation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preAuthentication">PreAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preSignUp">PreSignUp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preTokenGeneration">PreTokenGeneration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.userMigration">UserMigration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.verifyAuthChallengeResponse">VerifyAuthChallengeResponse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomEmailSender`<sup>Required</sup> <a name="CustomEmailSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customEmailSender"></a>

```csharp
public CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference CustomEmailSender { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference">CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference</a>

---

##### `CustomSmsSender`<sup>Required</sup> <a name="CustomSmsSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customSmsSender"></a>

```csharp
public CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference CustomSmsSender { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference">CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference</a>

---

##### `CreateAuthChallengeInput`<sup>Optional</sup> <a name="CreateAuthChallengeInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.createAuthChallengeInput"></a>

```csharp
public string CreateAuthChallengeInput { get; }
```

- *Type:* string

---

##### `CustomEmailSenderInput`<sup>Optional</sup> <a name="CustomEmailSenderInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customEmailSenderInput"></a>

```csharp
public CognitoUserPoolLambdaConfigCustomEmailSender CustomEmailSenderInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a>

---

##### `CustomMessageInput`<sup>Optional</sup> <a name="CustomMessageInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customMessageInput"></a>

```csharp
public string CustomMessageInput { get; }
```

- *Type:* string

---

##### `CustomSmsSenderInput`<sup>Optional</sup> <a name="CustomSmsSenderInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customSmsSenderInput"></a>

```csharp
public CognitoUserPoolLambdaConfigCustomSmsSender CustomSmsSenderInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a>

---

##### `DefineAuthChallengeInput`<sup>Optional</sup> <a name="DefineAuthChallengeInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.defineAuthChallengeInput"></a>

```csharp
public string DefineAuthChallengeInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `PostAuthenticationInput`<sup>Optional</sup> <a name="PostAuthenticationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postAuthenticationInput"></a>

```csharp
public string PostAuthenticationInput { get; }
```

- *Type:* string

---

##### `PostConfirmationInput`<sup>Optional</sup> <a name="PostConfirmationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postConfirmationInput"></a>

```csharp
public string PostConfirmationInput { get; }
```

- *Type:* string

---

##### `PreAuthenticationInput`<sup>Optional</sup> <a name="PreAuthenticationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preAuthenticationInput"></a>

```csharp
public string PreAuthenticationInput { get; }
```

- *Type:* string

---

##### `PreSignUpInput`<sup>Optional</sup> <a name="PreSignUpInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preSignUpInput"></a>

```csharp
public string PreSignUpInput { get; }
```

- *Type:* string

---

##### `PreTokenGenerationInput`<sup>Optional</sup> <a name="PreTokenGenerationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preTokenGenerationInput"></a>

```csharp
public string PreTokenGenerationInput { get; }
```

- *Type:* string

---

##### `UserMigrationInput`<sup>Optional</sup> <a name="UserMigrationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.userMigrationInput"></a>

```csharp
public string UserMigrationInput { get; }
```

- *Type:* string

---

##### `VerifyAuthChallengeResponseInput`<sup>Optional</sup> <a name="VerifyAuthChallengeResponseInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.verifyAuthChallengeResponseInput"></a>

```csharp
public string VerifyAuthChallengeResponseInput { get; }
```

- *Type:* string

---

##### `CreateAuthChallenge`<sup>Required</sup> <a name="CreateAuthChallenge" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.createAuthChallenge"></a>

```csharp
public string CreateAuthChallenge { get; }
```

- *Type:* string

---

##### `CustomMessage`<sup>Required</sup> <a name="CustomMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customMessage"></a>

```csharp
public string CustomMessage { get; }
```

- *Type:* string

---

##### `DefineAuthChallenge`<sup>Required</sup> <a name="DefineAuthChallenge" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.defineAuthChallenge"></a>

```csharp
public string DefineAuthChallenge { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `PostAuthentication`<sup>Required</sup> <a name="PostAuthentication" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postAuthentication"></a>

```csharp
public string PostAuthentication { get; }
```

- *Type:* string

---

##### `PostConfirmation`<sup>Required</sup> <a name="PostConfirmation" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postConfirmation"></a>

```csharp
public string PostConfirmation { get; }
```

- *Type:* string

---

##### `PreAuthentication`<sup>Required</sup> <a name="PreAuthentication" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preAuthentication"></a>

```csharp
public string PreAuthentication { get; }
```

- *Type:* string

---

##### `PreSignUp`<sup>Required</sup> <a name="PreSignUp" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preSignUp"></a>

```csharp
public string PreSignUp { get; }
```

- *Type:* string

---

##### `PreTokenGeneration`<sup>Required</sup> <a name="PreTokenGeneration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preTokenGeneration"></a>

```csharp
public string PreTokenGeneration { get; }
```

- *Type:* string

---

##### `UserMigration`<sup>Required</sup> <a name="UserMigration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.userMigration"></a>

```csharp
public string UserMigration { get; }
```

- *Type:* string

---

##### `VerifyAuthChallengeResponse`<sup>Required</sup> <a name="VerifyAuthChallengeResponse" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.verifyAuthChallengeResponse"></a>

```csharp
public string VerifyAuthChallengeResponse { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.internalValue"></a>

```csharp
public CognitoUserPoolLambdaConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a>

---


### CognitoUserPoolPasswordPolicyOutputReference <a name="CognitoUserPoolPasswordPolicyOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolPasswordPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMinimumLength` <a name="ResetMinimumLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetMinimumLength"></a>

```csharp
private void ResetMinimumLength()
```

##### `ResetRequireLowercase` <a name="ResetRequireLowercase" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetRequireLowercase"></a>

```csharp
private void ResetRequireLowercase()
```

##### `ResetRequireNumbers` <a name="ResetRequireNumbers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetRequireNumbers"></a>

```csharp
private void ResetRequireNumbers()
```

##### `ResetRequireSymbols` <a name="ResetRequireSymbols" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetRequireSymbols"></a>

```csharp
private void ResetRequireSymbols()
```

##### `ResetRequireUppercase` <a name="ResetRequireUppercase" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetRequireUppercase"></a>

```csharp
private void ResetRequireUppercase()
```

##### `ResetTemporaryPasswordValidityDays` <a name="ResetTemporaryPasswordValidityDays" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetTemporaryPasswordValidityDays"></a>

```csharp
private void ResetTemporaryPasswordValidityDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.minimumLengthInput">MinimumLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireLowercaseInput">RequireLowercaseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireNumbersInput">RequireNumbersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireSymbolsInput">RequireSymbolsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireUppercaseInput">RequireUppercaseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.temporaryPasswordValidityDaysInput">TemporaryPasswordValidityDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.minimumLength">MinimumLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireLowercase">RequireLowercase</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireNumbers">RequireNumbers</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireSymbols">RequireSymbols</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireUppercase">RequireUppercase</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.temporaryPasswordValidityDays">TemporaryPasswordValidityDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MinimumLengthInput`<sup>Optional</sup> <a name="MinimumLengthInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.minimumLengthInput"></a>

```csharp
public double MinimumLengthInput { get; }
```

- *Type:* double

---

##### `RequireLowercaseInput`<sup>Optional</sup> <a name="RequireLowercaseInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireLowercaseInput"></a>

```csharp
public object RequireLowercaseInput { get; }
```

- *Type:* object

---

##### `RequireNumbersInput`<sup>Optional</sup> <a name="RequireNumbersInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireNumbersInput"></a>

```csharp
public object RequireNumbersInput { get; }
```

- *Type:* object

---

##### `RequireSymbolsInput`<sup>Optional</sup> <a name="RequireSymbolsInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireSymbolsInput"></a>

```csharp
public object RequireSymbolsInput { get; }
```

- *Type:* object

---

##### `RequireUppercaseInput`<sup>Optional</sup> <a name="RequireUppercaseInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireUppercaseInput"></a>

```csharp
public object RequireUppercaseInput { get; }
```

- *Type:* object

---

##### `TemporaryPasswordValidityDaysInput`<sup>Optional</sup> <a name="TemporaryPasswordValidityDaysInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.temporaryPasswordValidityDaysInput"></a>

```csharp
public double TemporaryPasswordValidityDaysInput { get; }
```

- *Type:* double

---

##### `MinimumLength`<sup>Required</sup> <a name="MinimumLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.minimumLength"></a>

```csharp
public double MinimumLength { get; }
```

- *Type:* double

---

##### `RequireLowercase`<sup>Required</sup> <a name="RequireLowercase" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireLowercase"></a>

```csharp
public object RequireLowercase { get; }
```

- *Type:* object

---

##### `RequireNumbers`<sup>Required</sup> <a name="RequireNumbers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireNumbers"></a>

```csharp
public object RequireNumbers { get; }
```

- *Type:* object

---

##### `RequireSymbols`<sup>Required</sup> <a name="RequireSymbols" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireSymbols"></a>

```csharp
public object RequireSymbols { get; }
```

- *Type:* object

---

##### `RequireUppercase`<sup>Required</sup> <a name="RequireUppercase" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireUppercase"></a>

```csharp
public object RequireUppercase { get; }
```

- *Type:* object

---

##### `TemporaryPasswordValidityDays`<sup>Required</sup> <a name="TemporaryPasswordValidityDays" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.temporaryPasswordValidityDays"></a>

```csharp
public double TemporaryPasswordValidityDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.internalValue"></a>

```csharp
public CognitoUserPoolPasswordPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a>

---


### CognitoUserPoolSchemaList <a name="CognitoUserPoolSchemaList" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolSchemaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.get"></a>

```csharp
private CognitoUserPoolSchemaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference <a name="CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxValue` <a name="ResetMaxValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.resetMaxValue"></a>

```csharp
private void ResetMaxValue()
```

##### `ResetMinValue` <a name="ResetMinValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.resetMinValue"></a>

```csharp
private void ResetMinValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.maxValueInput">MaxValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.minValueInput">MinValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.maxValue">MaxValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.minValue">MinValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints">CognitoUserPoolSchemaNumberAttributeConstraints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxValueInput`<sup>Optional</sup> <a name="MaxValueInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.maxValueInput"></a>

```csharp
public string MaxValueInput { get; }
```

- *Type:* string

---

##### `MinValueInput`<sup>Optional</sup> <a name="MinValueInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.minValueInput"></a>

```csharp
public string MinValueInput { get; }
```

- *Type:* string

---

##### `MaxValue`<sup>Required</sup> <a name="MaxValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.maxValue"></a>

```csharp
public string MaxValue { get; }
```

- *Type:* string

---

##### `MinValue`<sup>Required</sup> <a name="MinValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.minValue"></a>

```csharp
public string MinValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.internalValue"></a>

```csharp
public CognitoUserPoolSchemaNumberAttributeConstraints InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints">CognitoUserPoolSchemaNumberAttributeConstraints</a>

---


### CognitoUserPoolSchemaOutputReference <a name="CognitoUserPoolSchemaOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNumberAttributeConstraints` <a name="PutNumberAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.putNumberAttributeConstraints"></a>

```csharp
private void PutNumberAttributeConstraints(CognitoUserPoolSchemaNumberAttributeConstraints Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.putNumberAttributeConstraints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints">CognitoUserPoolSchemaNumberAttributeConstraints</a>

---

##### `PutStringAttributeConstraints` <a name="PutStringAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.putStringAttributeConstraints"></a>

```csharp
private void PutStringAttributeConstraints(CognitoUserPoolSchemaStringAttributeConstraints Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.putStringAttributeConstraints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints">CognitoUserPoolSchemaStringAttributeConstraints</a>

---

##### `ResetDeveloperOnlyAttribute` <a name="ResetDeveloperOnlyAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetDeveloperOnlyAttribute"></a>

```csharp
private void ResetDeveloperOnlyAttribute()
```

##### `ResetMutable` <a name="ResetMutable" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetMutable"></a>

```csharp
private void ResetMutable()
```

##### `ResetNumberAttributeConstraints` <a name="ResetNumberAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetNumberAttributeConstraints"></a>

```csharp
private void ResetNumberAttributeConstraints()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetRequired"></a>

```csharp
private void ResetRequired()
```

##### `ResetStringAttributeConstraints` <a name="ResetStringAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetStringAttributeConstraints"></a>

```csharp
private void ResetStringAttributeConstraints()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.numberAttributeConstraints">NumberAttributeConstraints</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference">CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.stringAttributeConstraints">StringAttributeConstraints</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference">CognitoUserPoolSchemaStringAttributeConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.attributeDataTypeInput">AttributeDataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.developerOnlyAttributeInput">DeveloperOnlyAttributeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.mutableInput">MutableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.numberAttributeConstraintsInput">NumberAttributeConstraintsInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints">CognitoUserPoolSchemaNumberAttributeConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.requiredInput">RequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.stringAttributeConstraintsInput">StringAttributeConstraintsInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints">CognitoUserPoolSchemaStringAttributeConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.attributeDataType">AttributeDataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.developerOnlyAttribute">DeveloperOnlyAttribute</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.mutable">Mutable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.required">Required</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NumberAttributeConstraints`<sup>Required</sup> <a name="NumberAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.numberAttributeConstraints"></a>

```csharp
public CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference NumberAttributeConstraints { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference">CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference</a>

---

##### `StringAttributeConstraints`<sup>Required</sup> <a name="StringAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.stringAttributeConstraints"></a>

```csharp
public CognitoUserPoolSchemaStringAttributeConstraintsOutputReference StringAttributeConstraints { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference">CognitoUserPoolSchemaStringAttributeConstraintsOutputReference</a>

---

##### `AttributeDataTypeInput`<sup>Optional</sup> <a name="AttributeDataTypeInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.attributeDataTypeInput"></a>

```csharp
public string AttributeDataTypeInput { get; }
```

- *Type:* string

---

##### `DeveloperOnlyAttributeInput`<sup>Optional</sup> <a name="DeveloperOnlyAttributeInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.developerOnlyAttributeInput"></a>

```csharp
public object DeveloperOnlyAttributeInput { get; }
```

- *Type:* object

---

##### `MutableInput`<sup>Optional</sup> <a name="MutableInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.mutableInput"></a>

```csharp
public object MutableInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NumberAttributeConstraintsInput`<sup>Optional</sup> <a name="NumberAttributeConstraintsInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.numberAttributeConstraintsInput"></a>

```csharp
public CognitoUserPoolSchemaNumberAttributeConstraints NumberAttributeConstraintsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints">CognitoUserPoolSchemaNumberAttributeConstraints</a>

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.requiredInput"></a>

```csharp
public object RequiredInput { get; }
```

- *Type:* object

---

##### `StringAttributeConstraintsInput`<sup>Optional</sup> <a name="StringAttributeConstraintsInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.stringAttributeConstraintsInput"></a>

```csharp
public CognitoUserPoolSchemaStringAttributeConstraints StringAttributeConstraintsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints">CognitoUserPoolSchemaStringAttributeConstraints</a>

---

##### `AttributeDataType`<sup>Required</sup> <a name="AttributeDataType" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.attributeDataType"></a>

```csharp
public string AttributeDataType { get; }
```

- *Type:* string

---

##### `DeveloperOnlyAttribute`<sup>Required</sup> <a name="DeveloperOnlyAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.developerOnlyAttribute"></a>

```csharp
public object DeveloperOnlyAttribute { get; }
```

- *Type:* object

---

##### `Mutable`<sup>Required</sup> <a name="Mutable" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.mutable"></a>

```csharp
public object Mutable { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.required"></a>

```csharp
public object Required { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CognitoUserPoolSchemaStringAttributeConstraintsOutputReference <a name="CognitoUserPoolSchemaStringAttributeConstraintsOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolSchemaStringAttributeConstraintsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxLength` <a name="ResetMaxLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.resetMaxLength"></a>

```csharp
private void ResetMaxLength()
```

##### `ResetMinLength` <a name="ResetMinLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.resetMinLength"></a>

```csharp
private void ResetMinLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.maxLengthInput">MaxLengthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.minLengthInput">MinLengthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.maxLength">MaxLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.minLength">MinLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints">CognitoUserPoolSchemaStringAttributeConstraints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxLengthInput`<sup>Optional</sup> <a name="MaxLengthInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.maxLengthInput"></a>

```csharp
public string MaxLengthInput { get; }
```

- *Type:* string

---

##### `MinLengthInput`<sup>Optional</sup> <a name="MinLengthInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.minLengthInput"></a>

```csharp
public string MinLengthInput { get; }
```

- *Type:* string

---

##### `MaxLength`<sup>Required</sup> <a name="MaxLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.maxLength"></a>

```csharp
public string MaxLength { get; }
```

- *Type:* string

---

##### `MinLength`<sup>Required</sup> <a name="MinLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.minLength"></a>

```csharp
public string MinLength { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.internalValue"></a>

```csharp
public CognitoUserPoolSchemaStringAttributeConstraints InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints">CognitoUserPoolSchemaStringAttributeConstraints</a>

---


### CognitoUserPoolSmsConfigurationOutputReference <a name="CognitoUserPoolSmsConfigurationOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolSmsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSnsRegion` <a name="ResetSnsRegion" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.resetSnsRegion"></a>

```csharp
private void ResetSnsRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsCallerArnInput">SnsCallerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsRegionInput">SnsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsCallerArn">SnsCallerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsRegion">SnsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.externalIdInput"></a>

```csharp
public string ExternalIdInput { get; }
```

- *Type:* string

---

##### `SnsCallerArnInput`<sup>Optional</sup> <a name="SnsCallerArnInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsCallerArnInput"></a>

```csharp
public string SnsCallerArnInput { get; }
```

- *Type:* string

---

##### `SnsRegionInput`<sup>Optional</sup> <a name="SnsRegionInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsRegionInput"></a>

```csharp
public string SnsRegionInput { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `SnsCallerArn`<sup>Required</sup> <a name="SnsCallerArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsCallerArn"></a>

```csharp
public string SnsCallerArn { get; }
```

- *Type:* string

---

##### `SnsRegion`<sup>Required</sup> <a name="SnsRegion" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsRegion"></a>

```csharp
public string SnsRegion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.internalValue"></a>

```csharp
public CognitoUserPoolSmsConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a>

---


### CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference <a name="CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.internalValue"></a>

```csharp
public CognitoUserPoolSoftwareTokenMfaConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a>

---


### CognitoUserPoolUserAttributeUpdateSettingsOutputReference <a name="CognitoUserPoolUserAttributeUpdateSettingsOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolUserAttributeUpdateSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.attributesRequireVerificationBeforeUpdateInput">AttributesRequireVerificationBeforeUpdateInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.attributesRequireVerificationBeforeUpdate">AttributesRequireVerificationBeforeUpdate</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributesRequireVerificationBeforeUpdateInput`<sup>Optional</sup> <a name="AttributesRequireVerificationBeforeUpdateInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.attributesRequireVerificationBeforeUpdateInput"></a>

```csharp
public string[] AttributesRequireVerificationBeforeUpdateInput { get; }
```

- *Type:* string[]

---

##### `AttributesRequireVerificationBeforeUpdate`<sup>Required</sup> <a name="AttributesRequireVerificationBeforeUpdate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.attributesRequireVerificationBeforeUpdate"></a>

```csharp
public string[] AttributesRequireVerificationBeforeUpdate { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.internalValue"></a>

```csharp
public CognitoUserPoolUserAttributeUpdateSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a>

---


### CognitoUserPoolUsernameConfigurationOutputReference <a name="CognitoUserPoolUsernameConfigurationOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolUsernameConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.caseSensitiveInput">CaseSensitiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.caseSensitive">CaseSensitive</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaseSensitiveInput`<sup>Optional</sup> <a name="CaseSensitiveInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.caseSensitiveInput"></a>

```csharp
public object CaseSensitiveInput { get; }
```

- *Type:* object

---

##### `CaseSensitive`<sup>Required</sup> <a name="CaseSensitive" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.caseSensitive"></a>

```csharp
public object CaseSensitive { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.internalValue"></a>

```csharp
public CognitoUserPoolUsernameConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a>

---


### CognitoUserPoolUserPoolAddOnsOutputReference <a name="CognitoUserPoolUserPoolAddOnsOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolUserPoolAddOnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.advancedSecurityModeInput">AdvancedSecurityModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.advancedSecurityMode">AdvancedSecurityMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdvancedSecurityModeInput`<sup>Optional</sup> <a name="AdvancedSecurityModeInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.advancedSecurityModeInput"></a>

```csharp
public string AdvancedSecurityModeInput { get; }
```

- *Type:* string

---

##### `AdvancedSecurityMode`<sup>Required</sup> <a name="AdvancedSecurityMode" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.advancedSecurityMode"></a>

```csharp
public string AdvancedSecurityMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.internalValue"></a>

```csharp
public CognitoUserPoolUserPoolAddOns InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a>

---


### CognitoUserPoolVerificationMessageTemplateOutputReference <a name="CognitoUserPoolVerificationMessageTemplateOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoUserPoolVerificationMessageTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultEmailOption` <a name="ResetDefaultEmailOption" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetDefaultEmailOption"></a>

```csharp
private void ResetDefaultEmailOption()
```

##### `ResetEmailMessage` <a name="ResetEmailMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetEmailMessage"></a>

```csharp
private void ResetEmailMessage()
```

##### `ResetEmailMessageByLink` <a name="ResetEmailMessageByLink" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetEmailMessageByLink"></a>

```csharp
private void ResetEmailMessageByLink()
```

##### `ResetEmailSubject` <a name="ResetEmailSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetEmailSubject"></a>

```csharp
private void ResetEmailSubject()
```

##### `ResetEmailSubjectByLink` <a name="ResetEmailSubjectByLink" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetEmailSubjectByLink"></a>

```csharp
private void ResetEmailSubjectByLink()
```

##### `ResetSmsMessage` <a name="ResetSmsMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetSmsMessage"></a>

```csharp
private void ResetSmsMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.defaultEmailOptionInput">DefaultEmailOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessageByLinkInput">EmailMessageByLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessageInput">EmailMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubjectByLinkInput">EmailSubjectByLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubjectInput">EmailSubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.smsMessageInput">SmsMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.defaultEmailOption">DefaultEmailOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessage">EmailMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessageByLink">EmailMessageByLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubject">EmailSubject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubjectByLink">EmailSubjectByLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.smsMessage">SmsMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultEmailOptionInput`<sup>Optional</sup> <a name="DefaultEmailOptionInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.defaultEmailOptionInput"></a>

```csharp
public string DefaultEmailOptionInput { get; }
```

- *Type:* string

---

##### `EmailMessageByLinkInput`<sup>Optional</sup> <a name="EmailMessageByLinkInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessageByLinkInput"></a>

```csharp
public string EmailMessageByLinkInput { get; }
```

- *Type:* string

---

##### `EmailMessageInput`<sup>Optional</sup> <a name="EmailMessageInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessageInput"></a>

```csharp
public string EmailMessageInput { get; }
```

- *Type:* string

---

##### `EmailSubjectByLinkInput`<sup>Optional</sup> <a name="EmailSubjectByLinkInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubjectByLinkInput"></a>

```csharp
public string EmailSubjectByLinkInput { get; }
```

- *Type:* string

---

##### `EmailSubjectInput`<sup>Optional</sup> <a name="EmailSubjectInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubjectInput"></a>

```csharp
public string EmailSubjectInput { get; }
```

- *Type:* string

---

##### `SmsMessageInput`<sup>Optional</sup> <a name="SmsMessageInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.smsMessageInput"></a>

```csharp
public string SmsMessageInput { get; }
```

- *Type:* string

---

##### `DefaultEmailOption`<sup>Required</sup> <a name="DefaultEmailOption" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.defaultEmailOption"></a>

```csharp
public string DefaultEmailOption { get; }
```

- *Type:* string

---

##### `EmailMessage`<sup>Required</sup> <a name="EmailMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessage"></a>

```csharp
public string EmailMessage { get; }
```

- *Type:* string

---

##### `EmailMessageByLink`<sup>Required</sup> <a name="EmailMessageByLink" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessageByLink"></a>

```csharp
public string EmailMessageByLink { get; }
```

- *Type:* string

---

##### `EmailSubject`<sup>Required</sup> <a name="EmailSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubject"></a>

```csharp
public string EmailSubject { get; }
```

- *Type:* string

---

##### `EmailSubjectByLink`<sup>Required</sup> <a name="EmailSubjectByLink" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubjectByLink"></a>

```csharp
public string EmailSubjectByLink { get; }
```

- *Type:* string

---

##### `SmsMessage`<sup>Required</sup> <a name="SmsMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.smsMessage"></a>

```csharp
public string SmsMessage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.internalValue"></a>

```csharp
public CognitoUserPoolVerificationMessageTemplate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a>

---



