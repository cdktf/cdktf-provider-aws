# `cognitoUserPool` Submodule <a name="`cognitoUserPool` Submodule" id="@cdktf/provider-aws.cognitoUserPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPool <a name="CognitoUserPool" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool aws_cognito_user_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

new cognitoUserPool.CognitoUserPool(scope: Construct, id: string, config: CognitoUserPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig">CognitoUserPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig">CognitoUserPoolConfig</a>

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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAccountRecoverySetting` <a name="putAccountRecoverySetting" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putAccountRecoverySetting"></a>

```typescript
public putAccountRecoverySetting(value: CognitoUserPoolAccountRecoverySetting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putAccountRecoverySetting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a>

---

##### `putAdminCreateUserConfig` <a name="putAdminCreateUserConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putAdminCreateUserConfig"></a>

```typescript
public putAdminCreateUserConfig(value: CognitoUserPoolAdminCreateUserConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putAdminCreateUserConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a>

---

##### `putDeviceConfiguration` <a name="putDeviceConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putDeviceConfiguration"></a>

```typescript
public putDeviceConfiguration(value: CognitoUserPoolDeviceConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putDeviceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a>

---

##### `putEmailConfiguration` <a name="putEmailConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putEmailConfiguration"></a>

```typescript
public putEmailConfiguration(value: CognitoUserPoolEmailConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putEmailConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a>

---

##### `putLambdaConfig` <a name="putLambdaConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putLambdaConfig"></a>

```typescript
public putLambdaConfig(value: CognitoUserPoolLambdaConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putLambdaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a>

---

##### `putPasswordPolicy` <a name="putPasswordPolicy" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putPasswordPolicy"></a>

```typescript
public putPasswordPolicy(value: CognitoUserPoolPasswordPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putPasswordPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a>

---

##### `putSchema` <a name="putSchema" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSchema"></a>

```typescript
public putSchema(value: IResolvable | CognitoUserPoolSchema[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSchema.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema">CognitoUserPoolSchema</a>[]

---

##### `putSmsConfiguration` <a name="putSmsConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSmsConfiguration"></a>

```typescript
public putSmsConfiguration(value: CognitoUserPoolSmsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSmsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a>

---

##### `putSoftwareTokenMfaConfiguration` <a name="putSoftwareTokenMfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSoftwareTokenMfaConfiguration"></a>

```typescript
public putSoftwareTokenMfaConfiguration(value: CognitoUserPoolSoftwareTokenMfaConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putSoftwareTokenMfaConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a>

---

##### `putUserAttributeUpdateSettings` <a name="putUserAttributeUpdateSettings" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUserAttributeUpdateSettings"></a>

```typescript
public putUserAttributeUpdateSettings(value: CognitoUserPoolUserAttributeUpdateSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUserAttributeUpdateSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a>

---

##### `putUsernameConfiguration` <a name="putUsernameConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUsernameConfiguration"></a>

```typescript
public putUsernameConfiguration(value: CognitoUserPoolUsernameConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUsernameConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a>

---

##### `putUserPoolAddOns` <a name="putUserPoolAddOns" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUserPoolAddOns"></a>

```typescript
public putUserPoolAddOns(value: CognitoUserPoolUserPoolAddOns): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putUserPoolAddOns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a>

---

##### `putVerificationMessageTemplate` <a name="putVerificationMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putVerificationMessageTemplate"></a>

```typescript
public putVerificationMessageTemplate(value: CognitoUserPoolVerificationMessageTemplate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.putVerificationMessageTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a>

---

##### `resetAccountRecoverySetting` <a name="resetAccountRecoverySetting" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetAccountRecoverySetting"></a>

```typescript
public resetAccountRecoverySetting(): void
```

##### `resetAdminCreateUserConfig` <a name="resetAdminCreateUserConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetAdminCreateUserConfig"></a>

```typescript
public resetAdminCreateUserConfig(): void
```

##### `resetAliasAttributes` <a name="resetAliasAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetAliasAttributes"></a>

```typescript
public resetAliasAttributes(): void
```

##### `resetAutoVerifiedAttributes` <a name="resetAutoVerifiedAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetAutoVerifiedAttributes"></a>

```typescript
public resetAutoVerifiedAttributes(): void
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetDeviceConfiguration` <a name="resetDeviceConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetDeviceConfiguration"></a>

```typescript
public resetDeviceConfiguration(): void
```

##### `resetEmailConfiguration` <a name="resetEmailConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetEmailConfiguration"></a>

```typescript
public resetEmailConfiguration(): void
```

##### `resetEmailVerificationMessage` <a name="resetEmailVerificationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetEmailVerificationMessage"></a>

```typescript
public resetEmailVerificationMessage(): void
```

##### `resetEmailVerificationSubject` <a name="resetEmailVerificationSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetEmailVerificationSubject"></a>

```typescript
public resetEmailVerificationSubject(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLambdaConfig` <a name="resetLambdaConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetLambdaConfig"></a>

```typescript
public resetLambdaConfig(): void
```

##### `resetMfaConfiguration` <a name="resetMfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetMfaConfiguration"></a>

```typescript
public resetMfaConfiguration(): void
```

##### `resetPasswordPolicy` <a name="resetPasswordPolicy" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetPasswordPolicy"></a>

```typescript
public resetPasswordPolicy(): void
```

##### `resetSchema` <a name="resetSchema" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSchema"></a>

```typescript
public resetSchema(): void
```

##### `resetSmsAuthenticationMessage` <a name="resetSmsAuthenticationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSmsAuthenticationMessage"></a>

```typescript
public resetSmsAuthenticationMessage(): void
```

##### `resetSmsConfiguration` <a name="resetSmsConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSmsConfiguration"></a>

```typescript
public resetSmsConfiguration(): void
```

##### `resetSmsVerificationMessage` <a name="resetSmsVerificationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSmsVerificationMessage"></a>

```typescript
public resetSmsVerificationMessage(): void
```

##### `resetSoftwareTokenMfaConfiguration` <a name="resetSoftwareTokenMfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetSoftwareTokenMfaConfiguration"></a>

```typescript
public resetSoftwareTokenMfaConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetUserAttributeUpdateSettings` <a name="resetUserAttributeUpdateSettings" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetUserAttributeUpdateSettings"></a>

```typescript
public resetUserAttributeUpdateSettings(): void
```

##### `resetUsernameAttributes` <a name="resetUsernameAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetUsernameAttributes"></a>

```typescript
public resetUsernameAttributes(): void
```

##### `resetUsernameConfiguration` <a name="resetUsernameConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetUsernameConfiguration"></a>

```typescript
public resetUsernameConfiguration(): void
```

##### `resetUserPoolAddOns` <a name="resetUserPoolAddOns" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetUserPoolAddOns"></a>

```typescript
public resetUserPoolAddOns(): void
```

##### `resetVerificationMessageTemplate` <a name="resetVerificationMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.resetVerificationMessageTemplate"></a>

```typescript
public resetVerificationMessageTemplate(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isConstruct"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

cognitoUserPool.CognitoUserPool.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isTerraformElement"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

cognitoUserPool.CognitoUserPool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isTerraformResource"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

cognitoUserPool.CognitoUserPool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.accountRecoverySetting">accountRecoverySetting</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference">CognitoUserPoolAccountRecoverySettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.adminCreateUserConfig">adminCreateUserConfig</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference">CognitoUserPoolAdminCreateUserConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.customDomain">customDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deviceConfiguration">deviceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference">CognitoUserPoolDeviceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailConfiguration">emailConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference">CognitoUserPoolEmailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.estimatedNumberOfUsers">estimatedNumberOfUsers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lambdaConfig">lambdaConfig</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference">CognitoUserPoolLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lastModifiedDate">lastModifiedDate</a></code> | <code>string</code> | *No description.* |
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
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.aliasAttributesInput">aliasAttributesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.autoVerifiedAttributesInput">autoVerifiedAttributesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deviceConfigurationInput">deviceConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailConfigurationInput">emailConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationMessageInput">emailVerificationMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationSubjectInput">emailVerificationSubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lambdaConfigInput">lambdaConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.mfaConfigurationInput">mfaConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.passwordPolicyInput">passwordPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.schemaInput">schemaInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema">CognitoUserPoolSchema</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsAuthenticationMessageInput">smsAuthenticationMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsConfigurationInput">smsConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsVerificationMessageInput">smsVerificationMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.softwareTokenMfaConfigurationInput">softwareTokenMfaConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userAttributeUpdateSettingsInput">userAttributeUpdateSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameAttributesInput">usernameAttributesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameConfigurationInput">usernameConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userPoolAddOnsInput">userPoolAddOnsInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.verificationMessageTemplateInput">verificationMessageTemplateInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.aliasAttributes">aliasAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.autoVerifiedAttributes">autoVerifiedAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deletionProtection">deletionProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationMessage">emailVerificationMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationSubject">emailVerificationSubject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.mfaConfiguration">mfaConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsAuthenticationMessage">smsAuthenticationMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsVerificationMessage">smsVerificationMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameAttributes">usernameAttributes</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountRecoverySetting`<sup>Required</sup> <a name="accountRecoverySetting" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.accountRecoverySetting"></a>

```typescript
public readonly accountRecoverySetting: CognitoUserPoolAccountRecoverySettingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference">CognitoUserPoolAccountRecoverySettingOutputReference</a>

---

##### `adminCreateUserConfig`<sup>Required</sup> <a name="adminCreateUserConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.adminCreateUserConfig"></a>

```typescript
public readonly adminCreateUserConfig: CognitoUserPoolAdminCreateUserConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference">CognitoUserPoolAdminCreateUserConfigOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `customDomain`<sup>Required</sup> <a name="customDomain" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.customDomain"></a>

```typescript
public readonly customDomain: string;
```

- *Type:* string

---

##### `deviceConfiguration`<sup>Required</sup> <a name="deviceConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deviceConfiguration"></a>

```typescript
public readonly deviceConfiguration: CognitoUserPoolDeviceConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference">CognitoUserPoolDeviceConfigurationOutputReference</a>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `emailConfiguration`<sup>Required</sup> <a name="emailConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailConfiguration"></a>

```typescript
public readonly emailConfiguration: CognitoUserPoolEmailConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference">CognitoUserPoolEmailConfigurationOutputReference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `estimatedNumberOfUsers`<sup>Required</sup> <a name="estimatedNumberOfUsers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.estimatedNumberOfUsers"></a>

```typescript
public readonly estimatedNumberOfUsers: number;
```

- *Type:* number

---

##### `lambdaConfig`<sup>Required</sup> <a name="lambdaConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lambdaConfig"></a>

```typescript
public readonly lambdaConfig: CognitoUserPoolLambdaConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference">CognitoUserPoolLambdaConfigOutputReference</a>

---

##### `lastModifiedDate`<sup>Required</sup> <a name="lastModifiedDate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lastModifiedDate"></a>

```typescript
public readonly lastModifiedDate: string;
```

- *Type:* string

---

##### `passwordPolicy`<sup>Required</sup> <a name="passwordPolicy" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.passwordPolicy"></a>

```typescript
public readonly passwordPolicy: CognitoUserPoolPasswordPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference">CognitoUserPoolPasswordPolicyOutputReference</a>

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.schema"></a>

```typescript
public readonly schema: CognitoUserPoolSchemaList;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList">CognitoUserPoolSchemaList</a>

---

##### `smsConfiguration`<sup>Required</sup> <a name="smsConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsConfiguration"></a>

```typescript
public readonly smsConfiguration: CognitoUserPoolSmsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference">CognitoUserPoolSmsConfigurationOutputReference</a>

---

##### `softwareTokenMfaConfiguration`<sup>Required</sup> <a name="softwareTokenMfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.softwareTokenMfaConfiguration"></a>

```typescript
public readonly softwareTokenMfaConfiguration: CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference">CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference</a>

---

##### `userAttributeUpdateSettings`<sup>Required</sup> <a name="userAttributeUpdateSettings" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userAttributeUpdateSettings"></a>

```typescript
public readonly userAttributeUpdateSettings: CognitoUserPoolUserAttributeUpdateSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference">CognitoUserPoolUserAttributeUpdateSettingsOutputReference</a>

---

##### `usernameConfiguration`<sup>Required</sup> <a name="usernameConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameConfiguration"></a>

```typescript
public readonly usernameConfiguration: CognitoUserPoolUsernameConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference">CognitoUserPoolUsernameConfigurationOutputReference</a>

---

##### `userPoolAddOns`<sup>Required</sup> <a name="userPoolAddOns" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userPoolAddOns"></a>

```typescript
public readonly userPoolAddOns: CognitoUserPoolUserPoolAddOnsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference">CognitoUserPoolUserPoolAddOnsOutputReference</a>

---

##### `verificationMessageTemplate`<sup>Required</sup> <a name="verificationMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.verificationMessageTemplate"></a>

```typescript
public readonly verificationMessageTemplate: CognitoUserPoolVerificationMessageTemplateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference">CognitoUserPoolVerificationMessageTemplateOutputReference</a>

---

##### `accountRecoverySettingInput`<sup>Optional</sup> <a name="accountRecoverySettingInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.accountRecoverySettingInput"></a>

```typescript
public readonly accountRecoverySettingInput: CognitoUserPoolAccountRecoverySetting;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a>

---

##### `adminCreateUserConfigInput`<sup>Optional</sup> <a name="adminCreateUserConfigInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.adminCreateUserConfigInput"></a>

```typescript
public readonly adminCreateUserConfigInput: CognitoUserPoolAdminCreateUserConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a>

---

##### `aliasAttributesInput`<sup>Optional</sup> <a name="aliasAttributesInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.aliasAttributesInput"></a>

```typescript
public readonly aliasAttributesInput: string[];
```

- *Type:* string[]

---

##### `autoVerifiedAttributesInput`<sup>Optional</sup> <a name="autoVerifiedAttributesInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.autoVerifiedAttributesInput"></a>

```typescript
public readonly autoVerifiedAttributesInput: string[];
```

- *Type:* string[]

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: string;
```

- *Type:* string

---

##### `deviceConfigurationInput`<sup>Optional</sup> <a name="deviceConfigurationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deviceConfigurationInput"></a>

```typescript
public readonly deviceConfigurationInput: CognitoUserPoolDeviceConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a>

---

##### `emailConfigurationInput`<sup>Optional</sup> <a name="emailConfigurationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailConfigurationInput"></a>

```typescript
public readonly emailConfigurationInput: CognitoUserPoolEmailConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a>

---

##### `emailVerificationMessageInput`<sup>Optional</sup> <a name="emailVerificationMessageInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationMessageInput"></a>

```typescript
public readonly emailVerificationMessageInput: string;
```

- *Type:* string

---

##### `emailVerificationSubjectInput`<sup>Optional</sup> <a name="emailVerificationSubjectInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationSubjectInput"></a>

```typescript
public readonly emailVerificationSubjectInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lambdaConfigInput`<sup>Optional</sup> <a name="lambdaConfigInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.lambdaConfigInput"></a>

```typescript
public readonly lambdaConfigInput: CognitoUserPoolLambdaConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a>

---

##### `mfaConfigurationInput`<sup>Optional</sup> <a name="mfaConfigurationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.mfaConfigurationInput"></a>

```typescript
public readonly mfaConfigurationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordPolicyInput`<sup>Optional</sup> <a name="passwordPolicyInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.passwordPolicyInput"></a>

```typescript
public readonly passwordPolicyInput: CognitoUserPoolPasswordPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a>

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.schemaInput"></a>

```typescript
public readonly schemaInput: IResolvable | CognitoUserPoolSchema[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema">CognitoUserPoolSchema</a>[]

---

##### `smsAuthenticationMessageInput`<sup>Optional</sup> <a name="smsAuthenticationMessageInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsAuthenticationMessageInput"></a>

```typescript
public readonly smsAuthenticationMessageInput: string;
```

- *Type:* string

---

##### `smsConfigurationInput`<sup>Optional</sup> <a name="smsConfigurationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsConfigurationInput"></a>

```typescript
public readonly smsConfigurationInput: CognitoUserPoolSmsConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a>

---

##### `smsVerificationMessageInput`<sup>Optional</sup> <a name="smsVerificationMessageInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsVerificationMessageInput"></a>

```typescript
public readonly smsVerificationMessageInput: string;
```

- *Type:* string

---

##### `softwareTokenMfaConfigurationInput`<sup>Optional</sup> <a name="softwareTokenMfaConfigurationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.softwareTokenMfaConfigurationInput"></a>

```typescript
public readonly softwareTokenMfaConfigurationInput: CognitoUserPoolSoftwareTokenMfaConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `userAttributeUpdateSettingsInput`<sup>Optional</sup> <a name="userAttributeUpdateSettingsInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userAttributeUpdateSettingsInput"></a>

```typescript
public readonly userAttributeUpdateSettingsInput: CognitoUserPoolUserAttributeUpdateSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a>

---

##### `usernameAttributesInput`<sup>Optional</sup> <a name="usernameAttributesInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameAttributesInput"></a>

```typescript
public readonly usernameAttributesInput: string[];
```

- *Type:* string[]

---

##### `usernameConfigurationInput`<sup>Optional</sup> <a name="usernameConfigurationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameConfigurationInput"></a>

```typescript
public readonly usernameConfigurationInput: CognitoUserPoolUsernameConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a>

---

##### `userPoolAddOnsInput`<sup>Optional</sup> <a name="userPoolAddOnsInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.userPoolAddOnsInput"></a>

```typescript
public readonly userPoolAddOnsInput: CognitoUserPoolUserPoolAddOns;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a>

---

##### `verificationMessageTemplateInput`<sup>Optional</sup> <a name="verificationMessageTemplateInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.verificationMessageTemplateInput"></a>

```typescript
public readonly verificationMessageTemplateInput: CognitoUserPoolVerificationMessageTemplate;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a>

---

##### `aliasAttributes`<sup>Required</sup> <a name="aliasAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.aliasAttributes"></a>

```typescript
public readonly aliasAttributes: string[];
```

- *Type:* string[]

---

##### `autoVerifiedAttributes`<sup>Required</sup> <a name="autoVerifiedAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.autoVerifiedAttributes"></a>

```typescript
public readonly autoVerifiedAttributes: string[];
```

- *Type:* string[]

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: string;
```

- *Type:* string

---

##### `emailVerificationMessage`<sup>Required</sup> <a name="emailVerificationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationMessage"></a>

```typescript
public readonly emailVerificationMessage: string;
```

- *Type:* string

---

##### `emailVerificationSubject`<sup>Required</sup> <a name="emailVerificationSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.emailVerificationSubject"></a>

```typescript
public readonly emailVerificationSubject: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mfaConfiguration`<sup>Required</sup> <a name="mfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.mfaConfiguration"></a>

```typescript
public readonly mfaConfiguration: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `smsAuthenticationMessage`<sup>Required</sup> <a name="smsAuthenticationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsAuthenticationMessage"></a>

```typescript
public readonly smsAuthenticationMessage: string;
```

- *Type:* string

---

##### `smsVerificationMessage`<sup>Required</sup> <a name="smsVerificationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.smsVerificationMessage"></a>

```typescript
public readonly smsVerificationMessage: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `usernameAttributes`<sup>Required</sup> <a name="usernameAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.usernameAttributes"></a>

```typescript
public readonly usernameAttributes: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolAccountRecoverySetting <a name="CognitoUserPoolAccountRecoverySetting" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

const cognitoUserPoolAccountRecoverySetting: cognitoUserPool.CognitoUserPoolAccountRecoverySetting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting.property.recoveryMechanism">recoveryMechanism</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism">CognitoUserPoolAccountRecoverySettingRecoveryMechanism</a>[]</code> | recovery_mechanism block. |

---

##### `recoveryMechanism`<sup>Required</sup> <a name="recoveryMechanism" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting.property.recoveryMechanism"></a>

```typescript
public readonly recoveryMechanism: IResolvable | CognitoUserPoolAccountRecoverySettingRecoveryMechanism[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism">CognitoUserPoolAccountRecoverySettingRecoveryMechanism</a>[]

recovery_mechanism block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#recovery_mechanism CognitoUserPool#recovery_mechanism}

---

### CognitoUserPoolAccountRecoverySettingRecoveryMechanism <a name="CognitoUserPoolAccountRecoverySettingRecoveryMechanism" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

const cognitoUserPoolAccountRecoverySettingRecoveryMechanism: cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#priority CognitoUserPool#priority}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#priority CognitoUserPool#priority}.

---

### CognitoUserPoolAdminCreateUserConfig <a name="CognitoUserPoolAdminCreateUserConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

const cognitoUserPoolAdminCreateUserConfig: cognitoUserPool.CognitoUserPoolAdminCreateUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig.property.allowAdminCreateUserOnly">allowAdminCreateUserOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#allow_admin_create_user_only CognitoUserPool#allow_admin_create_user_only}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig.property.inviteMessageTemplate">inviteMessageTemplate</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a></code> | invite_message_template block. |

---

##### `allowAdminCreateUserOnly`<sup>Optional</sup> <a name="allowAdminCreateUserOnly" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig.property.allowAdminCreateUserOnly"></a>

```typescript
public readonly allowAdminCreateUserOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#allow_admin_create_user_only CognitoUserPool#allow_admin_create_user_only}.

---

##### `inviteMessageTemplate`<sup>Optional</sup> <a name="inviteMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig.property.inviteMessageTemplate"></a>

```typescript
public readonly inviteMessageTemplate: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a>

invite_message_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#invite_message_template CognitoUserPool#invite_message_template}

---

### CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate <a name="CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

const cognitoUserPoolAdminCreateUserConfigInviteMessageTemplate: cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.property.emailMessage">emailMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message CognitoUserPool#email_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.property.emailSubject">emailSubject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject CognitoUserPool#email_subject}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.property.smsMessage">smsMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_message CognitoUserPool#sms_message}. |

---

##### `emailMessage`<sup>Optional</sup> <a name="emailMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.property.emailMessage"></a>

```typescript
public readonly emailMessage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message CognitoUserPool#email_message}.

---

##### `emailSubject`<sup>Optional</sup> <a name="emailSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.property.emailSubject"></a>

```typescript
public readonly emailSubject: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject CognitoUserPool#email_subject}.

---

##### `smsMessage`<sup>Optional</sup> <a name="smsMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate.property.smsMessage"></a>

```typescript
public readonly smsMessage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_message CognitoUserPool#sms_message}.

---

### CognitoUserPoolConfig <a name="CognitoUserPoolConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

const cognitoUserPoolConfig: cognitoUserPool.CognitoUserPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.accountRecoverySetting">accountRecoverySetting</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a></code> | account_recovery_setting block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.adminCreateUserConfig">adminCreateUserConfig</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a></code> | admin_create_user_config block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.aliasAttributes">aliasAttributes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#alias_attributes CognitoUserPool#alias_attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.autoVerifiedAttributes">autoVerifiedAttributes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#auto_verified_attributes CognitoUserPool#auto_verified_attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.deletionProtection">deletionProtection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#deletion_protection CognitoUserPool#deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.deviceConfiguration">deviceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a></code> | device_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.emailConfiguration">emailConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a></code> | email_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.emailVerificationMessage">emailVerificationMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_verification_message CognitoUserPool#email_verification_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.emailVerificationSubject">emailVerificationSubject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_verification_subject CognitoUserPool#email_verification_subject}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#id CognitoUserPool#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.lambdaConfig">lambdaConfig</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a></code> | lambda_config block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.mfaConfiguration">mfaConfiguration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#mfa_configuration CognitoUserPool#mfa_configuration}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.passwordPolicy">passwordPolicy</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a></code> | password_policy block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.schema">schema</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema">CognitoUserPoolSchema</a>[]</code> | schema block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.smsAuthenticationMessage">smsAuthenticationMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_authentication_message CognitoUserPool#sms_authentication_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.smsConfiguration">smsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a></code> | sms_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.smsVerificationMessage">smsVerificationMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_verification_message CognitoUserPool#sms_verification_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.softwareTokenMfaConfiguration">softwareTokenMfaConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a></code> | software_token_mfa_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#tags CognitoUserPool#tags}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#tags_all CognitoUserPool#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.userAttributeUpdateSettings">userAttributeUpdateSettings</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a></code> | user_attribute_update_settings block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.usernameAttributes">usernameAttributes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#username_attributes CognitoUserPool#username_attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.usernameConfiguration">usernameConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a></code> | username_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.userPoolAddOns">userPoolAddOns</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a></code> | user_pool_add_ons block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.verificationMessageTemplate">verificationMessageTemplate</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a></code> | verification_message_template block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}.

---

##### `accountRecoverySetting`<sup>Optional</sup> <a name="accountRecoverySetting" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.accountRecoverySetting"></a>

```typescript
public readonly accountRecoverySetting: CognitoUserPoolAccountRecoverySetting;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a>

account_recovery_setting block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#account_recovery_setting CognitoUserPool#account_recovery_setting}

---

##### `adminCreateUserConfig`<sup>Optional</sup> <a name="adminCreateUserConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.adminCreateUserConfig"></a>

```typescript
public readonly adminCreateUserConfig: CognitoUserPoolAdminCreateUserConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a>

admin_create_user_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#admin_create_user_config CognitoUserPool#admin_create_user_config}

---

##### `aliasAttributes`<sup>Optional</sup> <a name="aliasAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.aliasAttributes"></a>

```typescript
public readonly aliasAttributes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#alias_attributes CognitoUserPool#alias_attributes}.

---

##### `autoVerifiedAttributes`<sup>Optional</sup> <a name="autoVerifiedAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.autoVerifiedAttributes"></a>

```typescript
public readonly autoVerifiedAttributes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#auto_verified_attributes CognitoUserPool#auto_verified_attributes}.

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#deletion_protection CognitoUserPool#deletion_protection}.

---

##### `deviceConfiguration`<sup>Optional</sup> <a name="deviceConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.deviceConfiguration"></a>

```typescript
public readonly deviceConfiguration: CognitoUserPoolDeviceConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a>

device_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#device_configuration CognitoUserPool#device_configuration}

---

##### `emailConfiguration`<sup>Optional</sup> <a name="emailConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.emailConfiguration"></a>

```typescript
public readonly emailConfiguration: CognitoUserPoolEmailConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a>

email_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_configuration CognitoUserPool#email_configuration}

---

##### `emailVerificationMessage`<sup>Optional</sup> <a name="emailVerificationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.emailVerificationMessage"></a>

```typescript
public readonly emailVerificationMessage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_verification_message CognitoUserPool#email_verification_message}.

---

##### `emailVerificationSubject`<sup>Optional</sup> <a name="emailVerificationSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.emailVerificationSubject"></a>

```typescript
public readonly emailVerificationSubject: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_verification_subject CognitoUserPool#email_verification_subject}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#id CognitoUserPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lambdaConfig`<sup>Optional</sup> <a name="lambdaConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.lambdaConfig"></a>

```typescript
public readonly lambdaConfig: CognitoUserPoolLambdaConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a>

lambda_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_config CognitoUserPool#lambda_config}

---

##### `mfaConfiguration`<sup>Optional</sup> <a name="mfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.mfaConfiguration"></a>

```typescript
public readonly mfaConfiguration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#mfa_configuration CognitoUserPool#mfa_configuration}.

---

##### `passwordPolicy`<sup>Optional</sup> <a name="passwordPolicy" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.passwordPolicy"></a>

```typescript
public readonly passwordPolicy: CognitoUserPoolPasswordPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a>

password_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#password_policy CognitoUserPool#password_policy}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.schema"></a>

```typescript
public readonly schema: IResolvable | CognitoUserPoolSchema[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema">CognitoUserPoolSchema</a>[]

schema block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#schema CognitoUserPool#schema}

---

##### `smsAuthenticationMessage`<sup>Optional</sup> <a name="smsAuthenticationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.smsAuthenticationMessage"></a>

```typescript
public readonly smsAuthenticationMessage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_authentication_message CognitoUserPool#sms_authentication_message}.

---

##### `smsConfiguration`<sup>Optional</sup> <a name="smsConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.smsConfiguration"></a>

```typescript
public readonly smsConfiguration: CognitoUserPoolSmsConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a>

sms_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_configuration CognitoUserPool#sms_configuration}

---

##### `smsVerificationMessage`<sup>Optional</sup> <a name="smsVerificationMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.smsVerificationMessage"></a>

```typescript
public readonly smsVerificationMessage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_verification_message CognitoUserPool#sms_verification_message}.

---

##### `softwareTokenMfaConfiguration`<sup>Optional</sup> <a name="softwareTokenMfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.softwareTokenMfaConfiguration"></a>

```typescript
public readonly softwareTokenMfaConfiguration: CognitoUserPoolSoftwareTokenMfaConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a>

software_token_mfa_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#software_token_mfa_configuration CognitoUserPool#software_token_mfa_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#tags CognitoUserPool#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#tags_all CognitoUserPool#tags_all}.

---

##### `userAttributeUpdateSettings`<sup>Optional</sup> <a name="userAttributeUpdateSettings" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.userAttributeUpdateSettings"></a>

```typescript
public readonly userAttributeUpdateSettings: CognitoUserPoolUserAttributeUpdateSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a>

user_attribute_update_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#user_attribute_update_settings CognitoUserPool#user_attribute_update_settings}

---

##### `usernameAttributes`<sup>Optional</sup> <a name="usernameAttributes" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.usernameAttributes"></a>

```typescript
public readonly usernameAttributes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#username_attributes CognitoUserPool#username_attributes}.

---

##### `usernameConfiguration`<sup>Optional</sup> <a name="usernameConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.usernameConfiguration"></a>

```typescript
public readonly usernameConfiguration: CognitoUserPoolUsernameConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a>

username_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#username_configuration CognitoUserPool#username_configuration}

---

##### `userPoolAddOns`<sup>Optional</sup> <a name="userPoolAddOns" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.userPoolAddOns"></a>

```typescript
public readonly userPoolAddOns: CognitoUserPoolUserPoolAddOns;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a>

user_pool_add_ons block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#user_pool_add_ons CognitoUserPool#user_pool_add_ons}

---

##### `verificationMessageTemplate`<sup>Optional</sup> <a name="verificationMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolConfig.property.verificationMessageTemplate"></a>

```typescript
public readonly verificationMessageTemplate: CognitoUserPoolVerificationMessageTemplate;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a>

verification_message_template block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#verification_message_template CognitoUserPool#verification_message_template}

---

### CognitoUserPoolDeviceConfiguration <a name="CognitoUserPoolDeviceConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

const cognitoUserPoolDeviceConfiguration: cognitoUserPool.CognitoUserPoolDeviceConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration.property.challengeRequiredOnNewDevice">challengeRequiredOnNewDevice</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#challenge_required_on_new_device CognitoUserPool#challenge_required_on_new_device}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration.property.deviceOnlyRememberedOnUserPrompt">deviceOnlyRememberedOnUserPrompt</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#device_only_remembered_on_user_prompt CognitoUserPool#device_only_remembered_on_user_prompt}. |

---

##### `challengeRequiredOnNewDevice`<sup>Optional</sup> <a name="challengeRequiredOnNewDevice" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration.property.challengeRequiredOnNewDevice"></a>

```typescript
public readonly challengeRequiredOnNewDevice: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#challenge_required_on_new_device CognitoUserPool#challenge_required_on_new_device}.

---

##### `deviceOnlyRememberedOnUserPrompt`<sup>Optional</sup> <a name="deviceOnlyRememberedOnUserPrompt" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration.property.deviceOnlyRememberedOnUserPrompt"></a>

```typescript
public readonly deviceOnlyRememberedOnUserPrompt: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#device_only_remembered_on_user_prompt CognitoUserPool#device_only_remembered_on_user_prompt}.

---

### CognitoUserPoolEmailConfiguration <a name="CognitoUserPoolEmailConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

const cognitoUserPoolEmailConfiguration: cognitoUserPool.CognitoUserPoolEmailConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.configurationSet">configurationSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#configuration_set CognitoUserPool#configuration_set}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.emailSendingAccount">emailSendingAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_sending_account CognitoUserPool#email_sending_account}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.fromEmailAddress">fromEmailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#from_email_address CognitoUserPool#from_email_address}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.replyToEmailAddress">replyToEmailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#reply_to_email_address CognitoUserPool#reply_to_email_address}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.sourceArn">sourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#source_arn CognitoUserPool#source_arn}. |

---

##### `configurationSet`<sup>Optional</sup> <a name="configurationSet" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.configurationSet"></a>

```typescript
public readonly configurationSet: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#configuration_set CognitoUserPool#configuration_set}.

---

##### `emailSendingAccount`<sup>Optional</sup> <a name="emailSendingAccount" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.emailSendingAccount"></a>

```typescript
public readonly emailSendingAccount: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_sending_account CognitoUserPool#email_sending_account}.

---

##### `fromEmailAddress`<sup>Optional</sup> <a name="fromEmailAddress" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.fromEmailAddress"></a>

```typescript
public readonly fromEmailAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#from_email_address CognitoUserPool#from_email_address}.

---

##### `replyToEmailAddress`<sup>Optional</sup> <a name="replyToEmailAddress" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.replyToEmailAddress"></a>

```typescript
public readonly replyToEmailAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#reply_to_email_address CognitoUserPool#reply_to_email_address}.

---

##### `sourceArn`<sup>Optional</sup> <a name="sourceArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration.property.sourceArn"></a>

```typescript
public readonly sourceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#source_arn CognitoUserPool#source_arn}.

---

### CognitoUserPoolLambdaConfig <a name="CognitoUserPoolLambdaConfig" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

const cognitoUserPoolLambdaConfig: cognitoUserPool.CognitoUserPoolLambdaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.createAuthChallenge">createAuthChallenge</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#create_auth_challenge CognitoUserPool#create_auth_challenge}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.customEmailSender">customEmailSender</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a></code> | custom_email_sender block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.customMessage">customMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#custom_message CognitoUserPool#custom_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.customSmsSender">customSmsSender</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a></code> | custom_sms_sender block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.defineAuthChallenge">defineAuthChallenge</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#define_auth_challenge CognitoUserPool#define_auth_challenge}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#kms_key_id CognitoUserPool#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.postAuthentication">postAuthentication</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#post_authentication CognitoUserPool#post_authentication}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.postConfirmation">postConfirmation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#post_confirmation CognitoUserPool#post_confirmation}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.preAuthentication">preAuthentication</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_authentication CognitoUserPool#pre_authentication}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.preSignUp">preSignUp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_sign_up CognitoUserPool#pre_sign_up}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.preTokenGeneration">preTokenGeneration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_token_generation CognitoUserPool#pre_token_generation}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.userMigration">userMigration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#user_migration CognitoUserPool#user_migration}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.verifyAuthChallengeResponse">verifyAuthChallengeResponse</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#verify_auth_challenge_response CognitoUserPool#verify_auth_challenge_response}. |

---

##### `createAuthChallenge`<sup>Optional</sup> <a name="createAuthChallenge" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.createAuthChallenge"></a>

```typescript
public readonly createAuthChallenge: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#create_auth_challenge CognitoUserPool#create_auth_challenge}.

---

##### `customEmailSender`<sup>Optional</sup> <a name="customEmailSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.customEmailSender"></a>

```typescript
public readonly customEmailSender: CognitoUserPoolLambdaConfigCustomEmailSender;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a>

custom_email_sender block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#custom_email_sender CognitoUserPool#custom_email_sender}

---

##### `customMessage`<sup>Optional</sup> <a name="customMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.customMessage"></a>

```typescript
public readonly customMessage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#custom_message CognitoUserPool#custom_message}.

---

##### `customSmsSender`<sup>Optional</sup> <a name="customSmsSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.customSmsSender"></a>

```typescript
public readonly customSmsSender: CognitoUserPoolLambdaConfigCustomSmsSender;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a>

custom_sms_sender block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#custom_sms_sender CognitoUserPool#custom_sms_sender}

---

##### `defineAuthChallenge`<sup>Optional</sup> <a name="defineAuthChallenge" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.defineAuthChallenge"></a>

```typescript
public readonly defineAuthChallenge: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#define_auth_challenge CognitoUserPool#define_auth_challenge}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#kms_key_id CognitoUserPool#kms_key_id}.

---

##### `postAuthentication`<sup>Optional</sup> <a name="postAuthentication" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.postAuthentication"></a>

```typescript
public readonly postAuthentication: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#post_authentication CognitoUserPool#post_authentication}.

---

##### `postConfirmation`<sup>Optional</sup> <a name="postConfirmation" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.postConfirmation"></a>

```typescript
public readonly postConfirmation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#post_confirmation CognitoUserPool#post_confirmation}.

---

##### `preAuthentication`<sup>Optional</sup> <a name="preAuthentication" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.preAuthentication"></a>

```typescript
public readonly preAuthentication: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_authentication CognitoUserPool#pre_authentication}.

---

##### `preSignUp`<sup>Optional</sup> <a name="preSignUp" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.preSignUp"></a>

```typescript
public readonly preSignUp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_sign_up CognitoUserPool#pre_sign_up}.

---

##### `preTokenGeneration`<sup>Optional</sup> <a name="preTokenGeneration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.preTokenGeneration"></a>

```typescript
public readonly preTokenGeneration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#pre_token_generation CognitoUserPool#pre_token_generation}.

---

##### `userMigration`<sup>Optional</sup> <a name="userMigration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.userMigration"></a>

```typescript
public readonly userMigration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#user_migration CognitoUserPool#user_migration}.

---

##### `verifyAuthChallengeResponse`<sup>Optional</sup> <a name="verifyAuthChallengeResponse" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig.property.verifyAuthChallengeResponse"></a>

```typescript
public readonly verifyAuthChallengeResponse: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#verify_auth_challenge_response CognitoUserPool#verify_auth_challenge_response}.

---

### CognitoUserPoolLambdaConfigCustomEmailSender <a name="CognitoUserPoolLambdaConfigCustomEmailSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

const cognitoUserPoolLambdaConfigCustomEmailSender: cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender.property.lambdaArn">lambdaArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_arn CognitoUserPool#lambda_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender.property.lambdaVersion">lambdaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_version CognitoUserPool#lambda_version}. |

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender.property.lambdaArn"></a>

```typescript
public readonly lambdaArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_arn CognitoUserPool#lambda_arn}.

---

##### `lambdaVersion`<sup>Required</sup> <a name="lambdaVersion" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender.property.lambdaVersion"></a>

```typescript
public readonly lambdaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_version CognitoUserPool#lambda_version}.

---

### CognitoUserPoolLambdaConfigCustomSmsSender <a name="CognitoUserPoolLambdaConfigCustomSmsSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

const cognitoUserPoolLambdaConfigCustomSmsSender: cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender.property.lambdaArn">lambdaArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_arn CognitoUserPool#lambda_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender.property.lambdaVersion">lambdaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_version CognitoUserPool#lambda_version}. |

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender.property.lambdaArn"></a>

```typescript
public readonly lambdaArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_arn CognitoUserPool#lambda_arn}.

---

##### `lambdaVersion`<sup>Required</sup> <a name="lambdaVersion" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender.property.lambdaVersion"></a>

```typescript
public readonly lambdaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#lambda_version CognitoUserPool#lambda_version}.

---

### CognitoUserPoolPasswordPolicy <a name="CognitoUserPoolPasswordPolicy" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

const cognitoUserPoolPasswordPolicy: cognitoUserPool.CognitoUserPoolPasswordPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.minimumLength">minimumLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#minimum_length CognitoUserPool#minimum_length}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireLowercase">requireLowercase</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_lowercase CognitoUserPool#require_lowercase}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireNumbers">requireNumbers</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_numbers CognitoUserPool#require_numbers}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireSymbols">requireSymbols</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_symbols CognitoUserPool#require_symbols}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireUppercase">requireUppercase</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_uppercase CognitoUserPool#require_uppercase}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.temporaryPasswordValidityDays">temporaryPasswordValidityDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#temporary_password_validity_days CognitoUserPool#temporary_password_validity_days}. |

---

##### `minimumLength`<sup>Optional</sup> <a name="minimumLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.minimumLength"></a>

```typescript
public readonly minimumLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#minimum_length CognitoUserPool#minimum_length}.

---

##### `requireLowercase`<sup>Optional</sup> <a name="requireLowercase" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireLowercase"></a>

```typescript
public readonly requireLowercase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_lowercase CognitoUserPool#require_lowercase}.

---

##### `requireNumbers`<sup>Optional</sup> <a name="requireNumbers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireNumbers"></a>

```typescript
public readonly requireNumbers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_numbers CognitoUserPool#require_numbers}.

---

##### `requireSymbols`<sup>Optional</sup> <a name="requireSymbols" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireSymbols"></a>

```typescript
public readonly requireSymbols: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_symbols CognitoUserPool#require_symbols}.

---

##### `requireUppercase`<sup>Optional</sup> <a name="requireUppercase" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.requireUppercase"></a>

```typescript
public readonly requireUppercase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#require_uppercase CognitoUserPool#require_uppercase}.

---

##### `temporaryPasswordValidityDays`<sup>Optional</sup> <a name="temporaryPasswordValidityDays" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy.property.temporaryPasswordValidityDays"></a>

```typescript
public readonly temporaryPasswordValidityDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#temporary_password_validity_days CognitoUserPool#temporary_password_validity_days}.

---

### CognitoUserPoolSchema <a name="CognitoUserPoolSchema" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

const cognitoUserPoolSchema: cognitoUserPool.CognitoUserPoolSchema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.attributeDataType">attributeDataType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#attribute_data_type CognitoUserPool#attribute_data_type}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.developerOnlyAttribute">developerOnlyAttribute</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#developer_only_attribute CognitoUserPool#developer_only_attribute}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.mutable">mutable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#mutable CognitoUserPool#mutable}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.numberAttributeConstraints">numberAttributeConstraints</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints">CognitoUserPoolSchemaNumberAttributeConstraints</a></code> | number_attribute_constraints block. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#required CognitoUserPool#required}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.stringAttributeConstraints">stringAttributeConstraints</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints">CognitoUserPoolSchemaStringAttributeConstraints</a></code> | string_attribute_constraints block. |

---

##### `attributeDataType`<sup>Required</sup> <a name="attributeDataType" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.attributeDataType"></a>

```typescript
public readonly attributeDataType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#attribute_data_type CognitoUserPool#attribute_data_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#name CognitoUserPool#name}.

---

##### `developerOnlyAttribute`<sup>Optional</sup> <a name="developerOnlyAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.developerOnlyAttribute"></a>

```typescript
public readonly developerOnlyAttribute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#developer_only_attribute CognitoUserPool#developer_only_attribute}.

---

##### `mutable`<sup>Optional</sup> <a name="mutable" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.mutable"></a>

```typescript
public readonly mutable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#mutable CognitoUserPool#mutable}.

---

##### `numberAttributeConstraints`<sup>Optional</sup> <a name="numberAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.numberAttributeConstraints"></a>

```typescript
public readonly numberAttributeConstraints: CognitoUserPoolSchemaNumberAttributeConstraints;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints">CognitoUserPoolSchemaNumberAttributeConstraints</a>

number_attribute_constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#number_attribute_constraints CognitoUserPool#number_attribute_constraints}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#required CognitoUserPool#required}.

---

##### `stringAttributeConstraints`<sup>Optional</sup> <a name="stringAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema.property.stringAttributeConstraints"></a>

```typescript
public readonly stringAttributeConstraints: CognitoUserPoolSchemaStringAttributeConstraints;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints">CognitoUserPoolSchemaStringAttributeConstraints</a>

string_attribute_constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#string_attribute_constraints CognitoUserPool#string_attribute_constraints}

---

### CognitoUserPoolSchemaNumberAttributeConstraints <a name="CognitoUserPoolSchemaNumberAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

const cognitoUserPoolSchemaNumberAttributeConstraints: cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints.property.maxValue">maxValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#max_value CognitoUserPool#max_value}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints.property.minValue">minValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#min_value CognitoUserPool#min_value}. |

---

##### `maxValue`<sup>Optional</sup> <a name="maxValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints.property.maxValue"></a>

```typescript
public readonly maxValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#max_value CognitoUserPool#max_value}.

---

##### `minValue`<sup>Optional</sup> <a name="minValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints.property.minValue"></a>

```typescript
public readonly minValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#min_value CognitoUserPool#min_value}.

---

### CognitoUserPoolSchemaStringAttributeConstraints <a name="CognitoUserPoolSchemaStringAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

const cognitoUserPoolSchemaStringAttributeConstraints: cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints.property.maxLength">maxLength</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#max_length CognitoUserPool#max_length}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints.property.minLength">minLength</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#min_length CognitoUserPool#min_length}. |

---

##### `maxLength`<sup>Optional</sup> <a name="maxLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints.property.maxLength"></a>

```typescript
public readonly maxLength: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#max_length CognitoUserPool#max_length}.

---

##### `minLength`<sup>Optional</sup> <a name="minLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints.property.minLength"></a>

```typescript
public readonly minLength: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#min_length CognitoUserPool#min_length}.

---

### CognitoUserPoolSmsConfiguration <a name="CognitoUserPoolSmsConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

const cognitoUserPoolSmsConfiguration: cognitoUserPool.CognitoUserPoolSmsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.property.externalId">externalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#external_id CognitoUserPool#external_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.property.snsCallerArn">snsCallerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sns_caller_arn CognitoUserPool#sns_caller_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.property.snsRegion">snsRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sns_region CognitoUserPool#sns_region}. |

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#external_id CognitoUserPool#external_id}.

---

##### `snsCallerArn`<sup>Required</sup> <a name="snsCallerArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.property.snsCallerArn"></a>

```typescript
public readonly snsCallerArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sns_caller_arn CognitoUserPool#sns_caller_arn}.

---

##### `snsRegion`<sup>Optional</sup> <a name="snsRegion" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration.property.snsRegion"></a>

```typescript
public readonly snsRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sns_region CognitoUserPool#sns_region}.

---

### CognitoUserPoolSoftwareTokenMfaConfiguration <a name="CognitoUserPoolSoftwareTokenMfaConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

const cognitoUserPoolSoftwareTokenMfaConfiguration: cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#enabled CognitoUserPool#enabled}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#enabled CognitoUserPool#enabled}.

---

### CognitoUserPoolUserAttributeUpdateSettings <a name="CognitoUserPoolUserAttributeUpdateSettings" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

const cognitoUserPoolUserAttributeUpdateSettings: cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings.property.attributesRequireVerificationBeforeUpdate">attributesRequireVerificationBeforeUpdate</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#attributes_require_verification_before_update CognitoUserPool#attributes_require_verification_before_update}. |

---

##### `attributesRequireVerificationBeforeUpdate`<sup>Required</sup> <a name="attributesRequireVerificationBeforeUpdate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings.property.attributesRequireVerificationBeforeUpdate"></a>

```typescript
public readonly attributesRequireVerificationBeforeUpdate: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#attributes_require_verification_before_update CognitoUserPool#attributes_require_verification_before_update}.

---

### CognitoUserPoolUsernameConfiguration <a name="CognitoUserPoolUsernameConfiguration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

const cognitoUserPoolUsernameConfiguration: cognitoUserPool.CognitoUserPoolUsernameConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration.property.caseSensitive">caseSensitive</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#case_sensitive CognitoUserPool#case_sensitive}. |

---

##### `caseSensitive`<sup>Required</sup> <a name="caseSensitive" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration.property.caseSensitive"></a>

```typescript
public readonly caseSensitive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#case_sensitive CognitoUserPool#case_sensitive}.

---

### CognitoUserPoolUserPoolAddOns <a name="CognitoUserPoolUserPoolAddOns" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

const cognitoUserPoolUserPoolAddOns: cognitoUserPool.CognitoUserPoolUserPoolAddOns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns.property.advancedSecurityMode">advancedSecurityMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#advanced_security_mode CognitoUserPool#advanced_security_mode}. |

---

##### `advancedSecurityMode`<sup>Required</sup> <a name="advancedSecurityMode" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns.property.advancedSecurityMode"></a>

```typescript
public readonly advancedSecurityMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#advanced_security_mode CognitoUserPool#advanced_security_mode}.

---

### CognitoUserPoolVerificationMessageTemplate <a name="CognitoUserPoolVerificationMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

const cognitoUserPoolVerificationMessageTemplate: cognitoUserPool.CognitoUserPoolVerificationMessageTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.defaultEmailOption">defaultEmailOption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#default_email_option CognitoUserPool#default_email_option}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailMessage">emailMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message CognitoUserPool#email_message}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailMessageByLink">emailMessageByLink</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message_by_link CognitoUserPool#email_message_by_link}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailSubject">emailSubject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject CognitoUserPool#email_subject}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailSubjectByLink">emailSubjectByLink</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject_by_link CognitoUserPool#email_subject_by_link}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.smsMessage">smsMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_message CognitoUserPool#sms_message}. |

---

##### `defaultEmailOption`<sup>Optional</sup> <a name="defaultEmailOption" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.defaultEmailOption"></a>

```typescript
public readonly defaultEmailOption: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#default_email_option CognitoUserPool#default_email_option}.

---

##### `emailMessage`<sup>Optional</sup> <a name="emailMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailMessage"></a>

```typescript
public readonly emailMessage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message CognitoUserPool#email_message}.

---

##### `emailMessageByLink`<sup>Optional</sup> <a name="emailMessageByLink" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailMessageByLink"></a>

```typescript
public readonly emailMessageByLink: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_message_by_link CognitoUserPool#email_message_by_link}.

---

##### `emailSubject`<sup>Optional</sup> <a name="emailSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailSubject"></a>

```typescript
public readonly emailSubject: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject CognitoUserPool#email_subject}.

---

##### `emailSubjectByLink`<sup>Optional</sup> <a name="emailSubjectByLink" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.emailSubjectByLink"></a>

```typescript
public readonly emailSubjectByLink: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#email_subject_by_link CognitoUserPool#email_subject_by_link}.

---

##### `smsMessage`<sup>Optional</sup> <a name="smsMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate.property.smsMessage"></a>

```typescript
public readonly smsMessage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool#sms_message CognitoUserPool#sms_message}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoUserPoolAccountRecoverySettingOutputReference <a name="CognitoUserPoolAccountRecoverySettingOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

new cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRecoveryMechanism` <a name="putRecoveryMechanism" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.putRecoveryMechanism"></a>

```typescript
public putRecoveryMechanism(value: IResolvable | CognitoUserPoolAccountRecoverySettingRecoveryMechanism[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.putRecoveryMechanism.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism">CognitoUserPoolAccountRecoverySettingRecoveryMechanism</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.recoveryMechanism">recoveryMechanism</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList">CognitoUserPoolAccountRecoverySettingRecoveryMechanismList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.recoveryMechanismInput">recoveryMechanismInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism">CognitoUserPoolAccountRecoverySettingRecoveryMechanism</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recoveryMechanism`<sup>Required</sup> <a name="recoveryMechanism" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.recoveryMechanism"></a>

```typescript
public readonly recoveryMechanism: CognitoUserPoolAccountRecoverySettingRecoveryMechanismList;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList">CognitoUserPoolAccountRecoverySettingRecoveryMechanismList</a>

---

##### `recoveryMechanismInput`<sup>Optional</sup> <a name="recoveryMechanismInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.recoveryMechanismInput"></a>

```typescript
public readonly recoveryMechanismInput: IResolvable | CognitoUserPoolAccountRecoverySettingRecoveryMechanism[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism">CognitoUserPoolAccountRecoverySettingRecoveryMechanism</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CognitoUserPoolAccountRecoverySetting;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySetting">CognitoUserPoolAccountRecoverySetting</a>

---


### CognitoUserPoolAccountRecoverySettingRecoveryMechanismList <a name="CognitoUserPoolAccountRecoverySettingRecoveryMechanismList" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

new cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.get"></a>

```typescript
public get(index: number): CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism">CognitoUserPoolAccountRecoverySettingRecoveryMechanism</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoUserPoolAccountRecoverySettingRecoveryMechanism[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism">CognitoUserPoolAccountRecoverySettingRecoveryMechanism</a>[]

---


### CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference <a name="CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

new cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism">CognitoUserPoolAccountRecoverySettingRecoveryMechanism</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanismOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CognitoUserPoolAccountRecoverySettingRecoveryMechanism | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAccountRecoverySettingRecoveryMechanism">CognitoUserPoolAccountRecoverySettingRecoveryMechanism</a> | cdktf.IResolvable

---


### CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference <a name="CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

new cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmailMessage` <a name="resetEmailMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resetEmailMessage"></a>

```typescript
public resetEmailMessage(): void
```

##### `resetEmailSubject` <a name="resetEmailSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resetEmailSubject"></a>

```typescript
public resetEmailSubject(): void
```

##### `resetSmsMessage` <a name="resetSmsMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.resetSmsMessage"></a>

```typescript
public resetSmsMessage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailMessageInput">emailMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailSubjectInput">emailSubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.smsMessageInput">smsMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailMessage">emailMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailSubject">emailSubject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.smsMessage">smsMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailMessageInput`<sup>Optional</sup> <a name="emailMessageInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailMessageInput"></a>

```typescript
public readonly emailMessageInput: string;
```

- *Type:* string

---

##### `emailSubjectInput`<sup>Optional</sup> <a name="emailSubjectInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailSubjectInput"></a>

```typescript
public readonly emailSubjectInput: string;
```

- *Type:* string

---

##### `smsMessageInput`<sup>Optional</sup> <a name="smsMessageInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.smsMessageInput"></a>

```typescript
public readonly smsMessageInput: string;
```

- *Type:* string

---

##### `emailMessage`<sup>Required</sup> <a name="emailMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailMessage"></a>

```typescript
public readonly emailMessage: string;
```

- *Type:* string

---

##### `emailSubject`<sup>Required</sup> <a name="emailSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.emailSubject"></a>

```typescript
public readonly emailSubject: string;
```

- *Type:* string

---

##### `smsMessage`<sup>Required</sup> <a name="smsMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.smsMessage"></a>

```typescript
public readonly smsMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a>

---


### CognitoUserPoolAdminCreateUserConfigOutputReference <a name="CognitoUserPoolAdminCreateUserConfigOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

new cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInviteMessageTemplate` <a name="putInviteMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.putInviteMessageTemplate"></a>

```typescript
public putInviteMessageTemplate(value: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.putInviteMessageTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a>

---

##### `resetAllowAdminCreateUserOnly` <a name="resetAllowAdminCreateUserOnly" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.resetAllowAdminCreateUserOnly"></a>

```typescript
public resetAllowAdminCreateUserOnly(): void
```

##### `resetInviteMessageTemplate` <a name="resetInviteMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.resetInviteMessageTemplate"></a>

```typescript
public resetInviteMessageTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.inviteMessageTemplate">inviteMessageTemplate</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.allowAdminCreateUserOnlyInput">allowAdminCreateUserOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.inviteMessageTemplateInput">inviteMessageTemplateInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.allowAdminCreateUserOnly">allowAdminCreateUserOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inviteMessageTemplate`<sup>Required</sup> <a name="inviteMessageTemplate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.inviteMessageTemplate"></a>

```typescript
public readonly inviteMessageTemplate: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference</a>

---

##### `allowAdminCreateUserOnlyInput`<sup>Optional</sup> <a name="allowAdminCreateUserOnlyInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.allowAdminCreateUserOnlyInput"></a>

```typescript
public readonly allowAdminCreateUserOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `inviteMessageTemplateInput`<sup>Optional</sup> <a name="inviteMessageTemplateInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.inviteMessageTemplateInput"></a>

```typescript
public readonly inviteMessageTemplateInput: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate">CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate</a>

---

##### `allowAdminCreateUserOnly`<sup>Required</sup> <a name="allowAdminCreateUserOnly" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.allowAdminCreateUserOnly"></a>

```typescript
public readonly allowAdminCreateUserOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CognitoUserPoolAdminCreateUserConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolAdminCreateUserConfig">CognitoUserPoolAdminCreateUserConfig</a>

---


### CognitoUserPoolDeviceConfigurationOutputReference <a name="CognitoUserPoolDeviceConfigurationOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

new cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChallengeRequiredOnNewDevice` <a name="resetChallengeRequiredOnNewDevice" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.resetChallengeRequiredOnNewDevice"></a>

```typescript
public resetChallengeRequiredOnNewDevice(): void
```

##### `resetDeviceOnlyRememberedOnUserPrompt` <a name="resetDeviceOnlyRememberedOnUserPrompt" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.resetDeviceOnlyRememberedOnUserPrompt"></a>

```typescript
public resetDeviceOnlyRememberedOnUserPrompt(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.challengeRequiredOnNewDeviceInput">challengeRequiredOnNewDeviceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.deviceOnlyRememberedOnUserPromptInput">deviceOnlyRememberedOnUserPromptInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.challengeRequiredOnNewDevice">challengeRequiredOnNewDevice</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.deviceOnlyRememberedOnUserPrompt">deviceOnlyRememberedOnUserPrompt</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `challengeRequiredOnNewDeviceInput`<sup>Optional</sup> <a name="challengeRequiredOnNewDeviceInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.challengeRequiredOnNewDeviceInput"></a>

```typescript
public readonly challengeRequiredOnNewDeviceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deviceOnlyRememberedOnUserPromptInput`<sup>Optional</sup> <a name="deviceOnlyRememberedOnUserPromptInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.deviceOnlyRememberedOnUserPromptInput"></a>

```typescript
public readonly deviceOnlyRememberedOnUserPromptInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `challengeRequiredOnNewDevice`<sup>Required</sup> <a name="challengeRequiredOnNewDevice" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.challengeRequiredOnNewDevice"></a>

```typescript
public readonly challengeRequiredOnNewDevice: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deviceOnlyRememberedOnUserPrompt`<sup>Required</sup> <a name="deviceOnlyRememberedOnUserPrompt" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.deviceOnlyRememberedOnUserPrompt"></a>

```typescript
public readonly deviceOnlyRememberedOnUserPrompt: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CognitoUserPoolDeviceConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolDeviceConfiguration">CognitoUserPoolDeviceConfiguration</a>

---


### CognitoUserPoolEmailConfigurationOutputReference <a name="CognitoUserPoolEmailConfigurationOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

new cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfigurationSet` <a name="resetConfigurationSet" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetConfigurationSet"></a>

```typescript
public resetConfigurationSet(): void
```

##### `resetEmailSendingAccount` <a name="resetEmailSendingAccount" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetEmailSendingAccount"></a>

```typescript
public resetEmailSendingAccount(): void
```

##### `resetFromEmailAddress` <a name="resetFromEmailAddress" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetFromEmailAddress"></a>

```typescript
public resetFromEmailAddress(): void
```

##### `resetReplyToEmailAddress` <a name="resetReplyToEmailAddress" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetReplyToEmailAddress"></a>

```typescript
public resetReplyToEmailAddress(): void
```

##### `resetSourceArn` <a name="resetSourceArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.resetSourceArn"></a>

```typescript
public resetSourceArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.configurationSetInput">configurationSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.emailSendingAccountInput">emailSendingAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.fromEmailAddressInput">fromEmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.replyToEmailAddressInput">replyToEmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.sourceArnInput">sourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.configurationSet">configurationSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.emailSendingAccount">emailSendingAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.fromEmailAddress">fromEmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.replyToEmailAddress">replyToEmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.sourceArn">sourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configurationSetInput`<sup>Optional</sup> <a name="configurationSetInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.configurationSetInput"></a>

```typescript
public readonly configurationSetInput: string;
```

- *Type:* string

---

##### `emailSendingAccountInput`<sup>Optional</sup> <a name="emailSendingAccountInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.emailSendingAccountInput"></a>

```typescript
public readonly emailSendingAccountInput: string;
```

- *Type:* string

---

##### `fromEmailAddressInput`<sup>Optional</sup> <a name="fromEmailAddressInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.fromEmailAddressInput"></a>

```typescript
public readonly fromEmailAddressInput: string;
```

- *Type:* string

---

##### `replyToEmailAddressInput`<sup>Optional</sup> <a name="replyToEmailAddressInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.replyToEmailAddressInput"></a>

```typescript
public readonly replyToEmailAddressInput: string;
```

- *Type:* string

---

##### `sourceArnInput`<sup>Optional</sup> <a name="sourceArnInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.sourceArnInput"></a>

```typescript
public readonly sourceArnInput: string;
```

- *Type:* string

---

##### `configurationSet`<sup>Required</sup> <a name="configurationSet" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.configurationSet"></a>

```typescript
public readonly configurationSet: string;
```

- *Type:* string

---

##### `emailSendingAccount`<sup>Required</sup> <a name="emailSendingAccount" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.emailSendingAccount"></a>

```typescript
public readonly emailSendingAccount: string;
```

- *Type:* string

---

##### `fromEmailAddress`<sup>Required</sup> <a name="fromEmailAddress" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.fromEmailAddress"></a>

```typescript
public readonly fromEmailAddress: string;
```

- *Type:* string

---

##### `replyToEmailAddress`<sup>Required</sup> <a name="replyToEmailAddress" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.replyToEmailAddress"></a>

```typescript
public readonly replyToEmailAddress: string;
```

- *Type:* string

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.sourceArn"></a>

```typescript
public readonly sourceArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CognitoUserPoolEmailConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolEmailConfiguration">CognitoUserPoolEmailConfiguration</a>

---


### CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference <a name="CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

new cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaArnInput">lambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersionInput">lambdaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaArn">lambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersion">lambdaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaArnInput`<sup>Optional</sup> <a name="lambdaArnInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaArnInput"></a>

```typescript
public readonly lambdaArnInput: string;
```

- *Type:* string

---

##### `lambdaVersionInput`<sup>Optional</sup> <a name="lambdaVersionInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersionInput"></a>

```typescript
public readonly lambdaVersionInput: string;
```

- *Type:* string

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaArn"></a>

```typescript
public readonly lambdaArn: string;
```

- *Type:* string

---

##### `lambdaVersion`<sup>Required</sup> <a name="lambdaVersion" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersion"></a>

```typescript
public readonly lambdaVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CognitoUserPoolLambdaConfigCustomEmailSender;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a>

---


### CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference <a name="CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

new cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaArnInput">lambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersionInput">lambdaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaArn">lambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersion">lambdaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaArnInput`<sup>Optional</sup> <a name="lambdaArnInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaArnInput"></a>

```typescript
public readonly lambdaArnInput: string;
```

- *Type:* string

---

##### `lambdaVersionInput`<sup>Optional</sup> <a name="lambdaVersionInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersionInput"></a>

```typescript
public readonly lambdaVersionInput: string;
```

- *Type:* string

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaArn"></a>

```typescript
public readonly lambdaArn: string;
```

- *Type:* string

---

##### `lambdaVersion`<sup>Required</sup> <a name="lambdaVersion" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersion"></a>

```typescript
public readonly lambdaVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CognitoUserPoolLambdaConfigCustomSmsSender;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a>

---


### CognitoUserPoolLambdaConfigOutputReference <a name="CognitoUserPoolLambdaConfigOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

new cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomEmailSender` <a name="putCustomEmailSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.putCustomEmailSender"></a>

```typescript
public putCustomEmailSender(value: CognitoUserPoolLambdaConfigCustomEmailSender): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.putCustomEmailSender.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a>

---

##### `putCustomSmsSender` <a name="putCustomSmsSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.putCustomSmsSender"></a>

```typescript
public putCustomSmsSender(value: CognitoUserPoolLambdaConfigCustomSmsSender): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.putCustomSmsSender.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a>

---

##### `resetCreateAuthChallenge` <a name="resetCreateAuthChallenge" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetCreateAuthChallenge"></a>

```typescript
public resetCreateAuthChallenge(): void
```

##### `resetCustomEmailSender` <a name="resetCustomEmailSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetCustomEmailSender"></a>

```typescript
public resetCustomEmailSender(): void
```

##### `resetCustomMessage` <a name="resetCustomMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetCustomMessage"></a>

```typescript
public resetCustomMessage(): void
```

##### `resetCustomSmsSender` <a name="resetCustomSmsSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetCustomSmsSender"></a>

```typescript
public resetCustomSmsSender(): void
```

##### `resetDefineAuthChallenge` <a name="resetDefineAuthChallenge" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetDefineAuthChallenge"></a>

```typescript
public resetDefineAuthChallenge(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetPostAuthentication` <a name="resetPostAuthentication" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPostAuthentication"></a>

```typescript
public resetPostAuthentication(): void
```

##### `resetPostConfirmation` <a name="resetPostConfirmation" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPostConfirmation"></a>

```typescript
public resetPostConfirmation(): void
```

##### `resetPreAuthentication` <a name="resetPreAuthentication" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPreAuthentication"></a>

```typescript
public resetPreAuthentication(): void
```

##### `resetPreSignUp` <a name="resetPreSignUp" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPreSignUp"></a>

```typescript
public resetPreSignUp(): void
```

##### `resetPreTokenGeneration` <a name="resetPreTokenGeneration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetPreTokenGeneration"></a>

```typescript
public resetPreTokenGeneration(): void
```

##### `resetUserMigration` <a name="resetUserMigration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetUserMigration"></a>

```typescript
public resetUserMigration(): void
```

##### `resetVerifyAuthChallengeResponse` <a name="resetVerifyAuthChallengeResponse" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.resetVerifyAuthChallengeResponse"></a>

```typescript
public resetVerifyAuthChallengeResponse(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customEmailSender">customEmailSender</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference">CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customSmsSender">customSmsSender</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference">CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.createAuthChallengeInput">createAuthChallengeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customEmailSenderInput">customEmailSenderInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customMessageInput">customMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customSmsSenderInput">customSmsSenderInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.defineAuthChallengeInput">defineAuthChallengeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postAuthenticationInput">postAuthenticationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postConfirmationInput">postConfirmationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preAuthenticationInput">preAuthenticationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preSignUpInput">preSignUpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preTokenGenerationInput">preTokenGenerationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.userMigrationInput">userMigrationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.verifyAuthChallengeResponseInput">verifyAuthChallengeResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.createAuthChallenge">createAuthChallenge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customMessage">customMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.defineAuthChallenge">defineAuthChallenge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postAuthentication">postAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postConfirmation">postConfirmation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preAuthentication">preAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preSignUp">preSignUp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preTokenGeneration">preTokenGeneration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.userMigration">userMigration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.verifyAuthChallengeResponse">verifyAuthChallengeResponse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customEmailSender`<sup>Required</sup> <a name="customEmailSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customEmailSender"></a>

```typescript
public readonly customEmailSender: CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference">CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference</a>

---

##### `customSmsSender`<sup>Required</sup> <a name="customSmsSender" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customSmsSender"></a>

```typescript
public readonly customSmsSender: CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference">CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference</a>

---

##### `createAuthChallengeInput`<sup>Optional</sup> <a name="createAuthChallengeInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.createAuthChallengeInput"></a>

```typescript
public readonly createAuthChallengeInput: string;
```

- *Type:* string

---

##### `customEmailSenderInput`<sup>Optional</sup> <a name="customEmailSenderInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customEmailSenderInput"></a>

```typescript
public readonly customEmailSenderInput: CognitoUserPoolLambdaConfigCustomEmailSender;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomEmailSender">CognitoUserPoolLambdaConfigCustomEmailSender</a>

---

##### `customMessageInput`<sup>Optional</sup> <a name="customMessageInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customMessageInput"></a>

```typescript
public readonly customMessageInput: string;
```

- *Type:* string

---

##### `customSmsSenderInput`<sup>Optional</sup> <a name="customSmsSenderInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customSmsSenderInput"></a>

```typescript
public readonly customSmsSenderInput: CognitoUserPoolLambdaConfigCustomSmsSender;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigCustomSmsSender">CognitoUserPoolLambdaConfigCustomSmsSender</a>

---

##### `defineAuthChallengeInput`<sup>Optional</sup> <a name="defineAuthChallengeInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.defineAuthChallengeInput"></a>

```typescript
public readonly defineAuthChallengeInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `postAuthenticationInput`<sup>Optional</sup> <a name="postAuthenticationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postAuthenticationInput"></a>

```typescript
public readonly postAuthenticationInput: string;
```

- *Type:* string

---

##### `postConfirmationInput`<sup>Optional</sup> <a name="postConfirmationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postConfirmationInput"></a>

```typescript
public readonly postConfirmationInput: string;
```

- *Type:* string

---

##### `preAuthenticationInput`<sup>Optional</sup> <a name="preAuthenticationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preAuthenticationInput"></a>

```typescript
public readonly preAuthenticationInput: string;
```

- *Type:* string

---

##### `preSignUpInput`<sup>Optional</sup> <a name="preSignUpInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preSignUpInput"></a>

```typescript
public readonly preSignUpInput: string;
```

- *Type:* string

---

##### `preTokenGenerationInput`<sup>Optional</sup> <a name="preTokenGenerationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preTokenGenerationInput"></a>

```typescript
public readonly preTokenGenerationInput: string;
```

- *Type:* string

---

##### `userMigrationInput`<sup>Optional</sup> <a name="userMigrationInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.userMigrationInput"></a>

```typescript
public readonly userMigrationInput: string;
```

- *Type:* string

---

##### `verifyAuthChallengeResponseInput`<sup>Optional</sup> <a name="verifyAuthChallengeResponseInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.verifyAuthChallengeResponseInput"></a>

```typescript
public readonly verifyAuthChallengeResponseInput: string;
```

- *Type:* string

---

##### `createAuthChallenge`<sup>Required</sup> <a name="createAuthChallenge" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.createAuthChallenge"></a>

```typescript
public readonly createAuthChallenge: string;
```

- *Type:* string

---

##### `customMessage`<sup>Required</sup> <a name="customMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.customMessage"></a>

```typescript
public readonly customMessage: string;
```

- *Type:* string

---

##### `defineAuthChallenge`<sup>Required</sup> <a name="defineAuthChallenge" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.defineAuthChallenge"></a>

```typescript
public readonly defineAuthChallenge: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `postAuthentication`<sup>Required</sup> <a name="postAuthentication" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postAuthentication"></a>

```typescript
public readonly postAuthentication: string;
```

- *Type:* string

---

##### `postConfirmation`<sup>Required</sup> <a name="postConfirmation" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.postConfirmation"></a>

```typescript
public readonly postConfirmation: string;
```

- *Type:* string

---

##### `preAuthentication`<sup>Required</sup> <a name="preAuthentication" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preAuthentication"></a>

```typescript
public readonly preAuthentication: string;
```

- *Type:* string

---

##### `preSignUp`<sup>Required</sup> <a name="preSignUp" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preSignUp"></a>

```typescript
public readonly preSignUp: string;
```

- *Type:* string

---

##### `preTokenGeneration`<sup>Required</sup> <a name="preTokenGeneration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.preTokenGeneration"></a>

```typescript
public readonly preTokenGeneration: string;
```

- *Type:* string

---

##### `userMigration`<sup>Required</sup> <a name="userMigration" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.userMigration"></a>

```typescript
public readonly userMigration: string;
```

- *Type:* string

---

##### `verifyAuthChallengeResponse`<sup>Required</sup> <a name="verifyAuthChallengeResponse" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.verifyAuthChallengeResponse"></a>

```typescript
public readonly verifyAuthChallengeResponse: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CognitoUserPoolLambdaConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolLambdaConfig">CognitoUserPoolLambdaConfig</a>

---


### CognitoUserPoolPasswordPolicyOutputReference <a name="CognitoUserPoolPasswordPolicyOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

new cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMinimumLength` <a name="resetMinimumLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetMinimumLength"></a>

```typescript
public resetMinimumLength(): void
```

##### `resetRequireLowercase` <a name="resetRequireLowercase" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetRequireLowercase"></a>

```typescript
public resetRequireLowercase(): void
```

##### `resetRequireNumbers` <a name="resetRequireNumbers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetRequireNumbers"></a>

```typescript
public resetRequireNumbers(): void
```

##### `resetRequireSymbols` <a name="resetRequireSymbols" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetRequireSymbols"></a>

```typescript
public resetRequireSymbols(): void
```

##### `resetRequireUppercase` <a name="resetRequireUppercase" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetRequireUppercase"></a>

```typescript
public resetRequireUppercase(): void
```

##### `resetTemporaryPasswordValidityDays` <a name="resetTemporaryPasswordValidityDays" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.resetTemporaryPasswordValidityDays"></a>

```typescript
public resetTemporaryPasswordValidityDays(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.minimumLengthInput">minimumLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireLowercaseInput">requireLowercaseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireNumbersInput">requireNumbersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireSymbolsInput">requireSymbolsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireUppercaseInput">requireUppercaseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.temporaryPasswordValidityDaysInput">temporaryPasswordValidityDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.minimumLength">minimumLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireLowercase">requireLowercase</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireNumbers">requireNumbers</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireSymbols">requireSymbols</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireUppercase">requireUppercase</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.temporaryPasswordValidityDays">temporaryPasswordValidityDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `minimumLengthInput`<sup>Optional</sup> <a name="minimumLengthInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.minimumLengthInput"></a>

```typescript
public readonly minimumLengthInput: number;
```

- *Type:* number

---

##### `requireLowercaseInput`<sup>Optional</sup> <a name="requireLowercaseInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireLowercaseInput"></a>

```typescript
public readonly requireLowercaseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireNumbersInput`<sup>Optional</sup> <a name="requireNumbersInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireNumbersInput"></a>

```typescript
public readonly requireNumbersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireSymbolsInput`<sup>Optional</sup> <a name="requireSymbolsInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireSymbolsInput"></a>

```typescript
public readonly requireSymbolsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireUppercaseInput`<sup>Optional</sup> <a name="requireUppercaseInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireUppercaseInput"></a>

```typescript
public readonly requireUppercaseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `temporaryPasswordValidityDaysInput`<sup>Optional</sup> <a name="temporaryPasswordValidityDaysInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.temporaryPasswordValidityDaysInput"></a>

```typescript
public readonly temporaryPasswordValidityDaysInput: number;
```

- *Type:* number

---

##### `minimumLength`<sup>Required</sup> <a name="minimumLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.minimumLength"></a>

```typescript
public readonly minimumLength: number;
```

- *Type:* number

---

##### `requireLowercase`<sup>Required</sup> <a name="requireLowercase" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireLowercase"></a>

```typescript
public readonly requireLowercase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireNumbers`<sup>Required</sup> <a name="requireNumbers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireNumbers"></a>

```typescript
public readonly requireNumbers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireSymbols`<sup>Required</sup> <a name="requireSymbols" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireSymbols"></a>

```typescript
public readonly requireSymbols: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireUppercase`<sup>Required</sup> <a name="requireUppercase" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.requireUppercase"></a>

```typescript
public readonly requireUppercase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `temporaryPasswordValidityDays`<sup>Required</sup> <a name="temporaryPasswordValidityDays" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.temporaryPasswordValidityDays"></a>

```typescript
public readonly temporaryPasswordValidityDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CognitoUserPoolPasswordPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolPasswordPolicy">CognitoUserPoolPasswordPolicy</a>

---


### CognitoUserPoolSchemaList <a name="CognitoUserPoolSchemaList" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

new cognitoUserPool.CognitoUserPoolSchemaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.get"></a>

```typescript
public get(index: number): CognitoUserPoolSchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema">CognitoUserPoolSchema</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoUserPoolSchema[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema">CognitoUserPoolSchema</a>[]

---


### CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference <a name="CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

new cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxValue` <a name="resetMaxValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.resetMaxValue"></a>

```typescript
public resetMaxValue(): void
```

##### `resetMinValue` <a name="resetMinValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.resetMinValue"></a>

```typescript
public resetMinValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.maxValueInput">maxValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.minValueInput">minValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.maxValue">maxValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.minValue">minValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints">CognitoUserPoolSchemaNumberAttributeConstraints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxValueInput`<sup>Optional</sup> <a name="maxValueInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.maxValueInput"></a>

```typescript
public readonly maxValueInput: string;
```

- *Type:* string

---

##### `minValueInput`<sup>Optional</sup> <a name="minValueInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.minValueInput"></a>

```typescript
public readonly minValueInput: string;
```

- *Type:* string

---

##### `maxValue`<sup>Required</sup> <a name="maxValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.maxValue"></a>

```typescript
public readonly maxValue: string;
```

- *Type:* string

---

##### `minValue`<sup>Required</sup> <a name="minValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.minValue"></a>

```typescript
public readonly minValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CognitoUserPoolSchemaNumberAttributeConstraints;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints">CognitoUserPoolSchemaNumberAttributeConstraints</a>

---


### CognitoUserPoolSchemaOutputReference <a name="CognitoUserPoolSchemaOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

new cognitoUserPool.CognitoUserPoolSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNumberAttributeConstraints` <a name="putNumberAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.putNumberAttributeConstraints"></a>

```typescript
public putNumberAttributeConstraints(value: CognitoUserPoolSchemaNumberAttributeConstraints): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.putNumberAttributeConstraints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints">CognitoUserPoolSchemaNumberAttributeConstraints</a>

---

##### `putStringAttributeConstraints` <a name="putStringAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.putStringAttributeConstraints"></a>

```typescript
public putStringAttributeConstraints(value: CognitoUserPoolSchemaStringAttributeConstraints): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.putStringAttributeConstraints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints">CognitoUserPoolSchemaStringAttributeConstraints</a>

---

##### `resetDeveloperOnlyAttribute` <a name="resetDeveloperOnlyAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetDeveloperOnlyAttribute"></a>

```typescript
public resetDeveloperOnlyAttribute(): void
```

##### `resetMutable` <a name="resetMutable" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetMutable"></a>

```typescript
public resetMutable(): void
```

##### `resetNumberAttributeConstraints` <a name="resetNumberAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetNumberAttributeConstraints"></a>

```typescript
public resetNumberAttributeConstraints(): void
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetRequired"></a>

```typescript
public resetRequired(): void
```

##### `resetStringAttributeConstraints` <a name="resetStringAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.resetStringAttributeConstraints"></a>

```typescript
public resetStringAttributeConstraints(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.numberAttributeConstraints">numberAttributeConstraints</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference">CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.stringAttributeConstraints">stringAttributeConstraints</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference">CognitoUserPoolSchemaStringAttributeConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.attributeDataTypeInput">attributeDataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.developerOnlyAttributeInput">developerOnlyAttributeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.mutableInput">mutableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.numberAttributeConstraintsInput">numberAttributeConstraintsInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints">CognitoUserPoolSchemaNumberAttributeConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.stringAttributeConstraintsInput">stringAttributeConstraintsInput</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints">CognitoUserPoolSchemaStringAttributeConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.attributeDataType">attributeDataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.developerOnlyAttribute">developerOnlyAttribute</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.mutable">mutable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema">CognitoUserPoolSchema</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `numberAttributeConstraints`<sup>Required</sup> <a name="numberAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.numberAttributeConstraints"></a>

```typescript
public readonly numberAttributeConstraints: CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference">CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference</a>

---

##### `stringAttributeConstraints`<sup>Required</sup> <a name="stringAttributeConstraints" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.stringAttributeConstraints"></a>

```typescript
public readonly stringAttributeConstraints: CognitoUserPoolSchemaStringAttributeConstraintsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference">CognitoUserPoolSchemaStringAttributeConstraintsOutputReference</a>

---

##### `attributeDataTypeInput`<sup>Optional</sup> <a name="attributeDataTypeInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.attributeDataTypeInput"></a>

```typescript
public readonly attributeDataTypeInput: string;
```

- *Type:* string

---

##### `developerOnlyAttributeInput`<sup>Optional</sup> <a name="developerOnlyAttributeInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.developerOnlyAttributeInput"></a>

```typescript
public readonly developerOnlyAttributeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mutableInput`<sup>Optional</sup> <a name="mutableInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.mutableInput"></a>

```typescript
public readonly mutableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `numberAttributeConstraintsInput`<sup>Optional</sup> <a name="numberAttributeConstraintsInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.numberAttributeConstraintsInput"></a>

```typescript
public readonly numberAttributeConstraintsInput: CognitoUserPoolSchemaNumberAttributeConstraints;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaNumberAttributeConstraints">CognitoUserPoolSchemaNumberAttributeConstraints</a>

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `stringAttributeConstraintsInput`<sup>Optional</sup> <a name="stringAttributeConstraintsInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.stringAttributeConstraintsInput"></a>

```typescript
public readonly stringAttributeConstraintsInput: CognitoUserPoolSchemaStringAttributeConstraints;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints">CognitoUserPoolSchemaStringAttributeConstraints</a>

---

##### `attributeDataType`<sup>Required</sup> <a name="attributeDataType" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.attributeDataType"></a>

```typescript
public readonly attributeDataType: string;
```

- *Type:* string

---

##### `developerOnlyAttribute`<sup>Required</sup> <a name="developerOnlyAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.developerOnlyAttribute"></a>

```typescript
public readonly developerOnlyAttribute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mutable`<sup>Required</sup> <a name="mutable" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.mutable"></a>

```typescript
public readonly mutable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CognitoUserPoolSchema | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchema">CognitoUserPoolSchema</a> | cdktf.IResolvable

---


### CognitoUserPoolSchemaStringAttributeConstraintsOutputReference <a name="CognitoUserPoolSchemaStringAttributeConstraintsOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

new cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxLength` <a name="resetMaxLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.resetMaxLength"></a>

```typescript
public resetMaxLength(): void
```

##### `resetMinLength` <a name="resetMinLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.resetMinLength"></a>

```typescript
public resetMinLength(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.maxLengthInput">maxLengthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.minLengthInput">minLengthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.maxLength">maxLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.minLength">minLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints">CognitoUserPoolSchemaStringAttributeConstraints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxLengthInput`<sup>Optional</sup> <a name="maxLengthInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.maxLengthInput"></a>

```typescript
public readonly maxLengthInput: string;
```

- *Type:* string

---

##### `minLengthInput`<sup>Optional</sup> <a name="minLengthInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.minLengthInput"></a>

```typescript
public readonly minLengthInput: string;
```

- *Type:* string

---

##### `maxLength`<sup>Required</sup> <a name="maxLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.maxLength"></a>

```typescript
public readonly maxLength: string;
```

- *Type:* string

---

##### `minLength`<sup>Required</sup> <a name="minLength" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.minLength"></a>

```typescript
public readonly minLength: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CognitoUserPoolSchemaStringAttributeConstraints;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSchemaStringAttributeConstraints">CognitoUserPoolSchemaStringAttributeConstraints</a>

---


### CognitoUserPoolSmsConfigurationOutputReference <a name="CognitoUserPoolSmsConfigurationOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

new cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSnsRegion` <a name="resetSnsRegion" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.resetSnsRegion"></a>

```typescript
public resetSnsRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsCallerArnInput">snsCallerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsRegionInput">snsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsCallerArn">snsCallerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsRegion">snsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `snsCallerArnInput`<sup>Optional</sup> <a name="snsCallerArnInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsCallerArnInput"></a>

```typescript
public readonly snsCallerArnInput: string;
```

- *Type:* string

---

##### `snsRegionInput`<sup>Optional</sup> <a name="snsRegionInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsRegionInput"></a>

```typescript
public readonly snsRegionInput: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `snsCallerArn`<sup>Required</sup> <a name="snsCallerArn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsCallerArn"></a>

```typescript
public readonly snsCallerArn: string;
```

- *Type:* string

---

##### `snsRegion`<sup>Required</sup> <a name="snsRegion" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.snsRegion"></a>

```typescript
public readonly snsRegion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CognitoUserPoolSmsConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSmsConfiguration">CognitoUserPoolSmsConfiguration</a>

---


### CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference <a name="CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

new cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CognitoUserPoolSoftwareTokenMfaConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolSoftwareTokenMfaConfiguration">CognitoUserPoolSoftwareTokenMfaConfiguration</a>

---


### CognitoUserPoolUserAttributeUpdateSettingsOutputReference <a name="CognitoUserPoolUserAttributeUpdateSettingsOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

new cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.attributesRequireVerificationBeforeUpdateInput">attributesRequireVerificationBeforeUpdateInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.attributesRequireVerificationBeforeUpdate">attributesRequireVerificationBeforeUpdate</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributesRequireVerificationBeforeUpdateInput`<sup>Optional</sup> <a name="attributesRequireVerificationBeforeUpdateInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.attributesRequireVerificationBeforeUpdateInput"></a>

```typescript
public readonly attributesRequireVerificationBeforeUpdateInput: string[];
```

- *Type:* string[]

---

##### `attributesRequireVerificationBeforeUpdate`<sup>Required</sup> <a name="attributesRequireVerificationBeforeUpdate" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.attributesRequireVerificationBeforeUpdate"></a>

```typescript
public readonly attributesRequireVerificationBeforeUpdate: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CognitoUserPoolUserAttributeUpdateSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserAttributeUpdateSettings">CognitoUserPoolUserAttributeUpdateSettings</a>

---


### CognitoUserPoolUsernameConfigurationOutputReference <a name="CognitoUserPoolUsernameConfigurationOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

new cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.caseSensitiveInput">caseSensitiveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.caseSensitive">caseSensitive</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caseSensitiveInput`<sup>Optional</sup> <a name="caseSensitiveInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.caseSensitiveInput"></a>

```typescript
public readonly caseSensitiveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `caseSensitive`<sup>Required</sup> <a name="caseSensitive" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.caseSensitive"></a>

```typescript
public readonly caseSensitive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CognitoUserPoolUsernameConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUsernameConfiguration">CognitoUserPoolUsernameConfiguration</a>

---


### CognitoUserPoolUserPoolAddOnsOutputReference <a name="CognitoUserPoolUserPoolAddOnsOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

new cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.advancedSecurityModeInput">advancedSecurityModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.advancedSecurityMode">advancedSecurityMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `advancedSecurityModeInput`<sup>Optional</sup> <a name="advancedSecurityModeInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.advancedSecurityModeInput"></a>

```typescript
public readonly advancedSecurityModeInput: string;
```

- *Type:* string

---

##### `advancedSecurityMode`<sup>Required</sup> <a name="advancedSecurityMode" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.advancedSecurityMode"></a>

```typescript
public readonly advancedSecurityMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CognitoUserPoolUserPoolAddOns;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolUserPoolAddOns">CognitoUserPoolUserPoolAddOns</a>

---


### CognitoUserPoolVerificationMessageTemplateOutputReference <a name="CognitoUserPoolVerificationMessageTemplateOutputReference" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.Initializer"></a>

```typescript
import { cognitoUserPool } from '@cdktf/provider-aws'

new cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultEmailOption` <a name="resetDefaultEmailOption" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetDefaultEmailOption"></a>

```typescript
public resetDefaultEmailOption(): void
```

##### `resetEmailMessage` <a name="resetEmailMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetEmailMessage"></a>

```typescript
public resetEmailMessage(): void
```

##### `resetEmailMessageByLink` <a name="resetEmailMessageByLink" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetEmailMessageByLink"></a>

```typescript
public resetEmailMessageByLink(): void
```

##### `resetEmailSubject` <a name="resetEmailSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetEmailSubject"></a>

```typescript
public resetEmailSubject(): void
```

##### `resetEmailSubjectByLink` <a name="resetEmailSubjectByLink" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetEmailSubjectByLink"></a>

```typescript
public resetEmailSubjectByLink(): void
```

##### `resetSmsMessage` <a name="resetSmsMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.resetSmsMessage"></a>

```typescript
public resetSmsMessage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.defaultEmailOptionInput">defaultEmailOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessageByLinkInput">emailMessageByLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessageInput">emailMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubjectByLinkInput">emailSubjectByLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubjectInput">emailSubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.smsMessageInput">smsMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.defaultEmailOption">defaultEmailOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessage">emailMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessageByLink">emailMessageByLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubject">emailSubject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubjectByLink">emailSubjectByLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.smsMessage">smsMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultEmailOptionInput`<sup>Optional</sup> <a name="defaultEmailOptionInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.defaultEmailOptionInput"></a>

```typescript
public readonly defaultEmailOptionInput: string;
```

- *Type:* string

---

##### `emailMessageByLinkInput`<sup>Optional</sup> <a name="emailMessageByLinkInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessageByLinkInput"></a>

```typescript
public readonly emailMessageByLinkInput: string;
```

- *Type:* string

---

##### `emailMessageInput`<sup>Optional</sup> <a name="emailMessageInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessageInput"></a>

```typescript
public readonly emailMessageInput: string;
```

- *Type:* string

---

##### `emailSubjectByLinkInput`<sup>Optional</sup> <a name="emailSubjectByLinkInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubjectByLinkInput"></a>

```typescript
public readonly emailSubjectByLinkInput: string;
```

- *Type:* string

---

##### `emailSubjectInput`<sup>Optional</sup> <a name="emailSubjectInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubjectInput"></a>

```typescript
public readonly emailSubjectInput: string;
```

- *Type:* string

---

##### `smsMessageInput`<sup>Optional</sup> <a name="smsMessageInput" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.smsMessageInput"></a>

```typescript
public readonly smsMessageInput: string;
```

- *Type:* string

---

##### `defaultEmailOption`<sup>Required</sup> <a name="defaultEmailOption" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.defaultEmailOption"></a>

```typescript
public readonly defaultEmailOption: string;
```

- *Type:* string

---

##### `emailMessage`<sup>Required</sup> <a name="emailMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessage"></a>

```typescript
public readonly emailMessage: string;
```

- *Type:* string

---

##### `emailMessageByLink`<sup>Required</sup> <a name="emailMessageByLink" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailMessageByLink"></a>

```typescript
public readonly emailMessageByLink: string;
```

- *Type:* string

---

##### `emailSubject`<sup>Required</sup> <a name="emailSubject" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubject"></a>

```typescript
public readonly emailSubject: string;
```

- *Type:* string

---

##### `emailSubjectByLink`<sup>Required</sup> <a name="emailSubjectByLink" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.emailSubjectByLink"></a>

```typescript
public readonly emailSubjectByLink: string;
```

- *Type:* string

---

##### `smsMessage`<sup>Required</sup> <a name="smsMessage" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.smsMessage"></a>

```typescript
public readonly smsMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CognitoUserPoolVerificationMessageTemplate;
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoUserPool.CognitoUserPoolVerificationMessageTemplate">CognitoUserPoolVerificationMessageTemplate</a>

---



