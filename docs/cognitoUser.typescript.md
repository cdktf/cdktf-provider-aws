# `cognitoUser` Submodule <a name="`cognitoUser` Submodule" id="@cdktf/provider-aws.cognitoUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUser <a name="CognitoUser" id="@cdktf/provider-aws.cognitoUser.CognitoUser"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user aws_cognito_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer"></a>

```typescript
import { cognitoUser } from '@cdktf/provider-aws'

new cognitoUser.CognitoUser(scope: Construct, id: string, config: CognitoUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig">CognitoUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig">CognitoUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetClientMetadata">resetClientMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetDesiredDeliveryMediums">resetDesiredDeliveryMediums</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetForceAliasCreation">resetForceAliasCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetMessageAction">resetMessageAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetTemporaryPassword">resetTemporaryPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.resetValidationData">resetValidationData</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUser.CognitoUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cognitoUser.CognitoUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cognitoUser.CognitoUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUser.CognitoUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cognitoUser.CognitoUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cognitoUser.CognitoUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cognitoUser.CognitoUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cognitoUser.CognitoUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUser.CognitoUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetClientMetadata` <a name="resetClientMetadata" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetClientMetadata"></a>

```typescript
public resetClientMetadata(): void
```

##### `resetDesiredDeliveryMediums` <a name="resetDesiredDeliveryMediums" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetDesiredDeliveryMediums"></a>

```typescript
public resetDesiredDeliveryMediums(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetForceAliasCreation` <a name="resetForceAliasCreation" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetForceAliasCreation"></a>

```typescript
public resetForceAliasCreation(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMessageAction` <a name="resetMessageAction" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetMessageAction"></a>

```typescript
public resetMessageAction(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetTemporaryPassword` <a name="resetTemporaryPassword" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetTemporaryPassword"></a>

```typescript
public resetTemporaryPassword(): void
```

##### `resetValidationData` <a name="resetValidationData" id="@cdktf/provider-aws.cognitoUser.CognitoUser.resetValidationData"></a>

```typescript
public resetValidationData(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cognitoUser.CognitoUser.isConstruct"></a>

```typescript
import { cognitoUser } from '@cdktf/provider-aws'

cognitoUser.CognitoUser.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUser.CognitoUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cognitoUser.CognitoUser.isTerraformElement"></a>

```typescript
import { cognitoUser } from '@cdktf/provider-aws'

cognitoUser.CognitoUser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUser.CognitoUser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cognitoUser.CognitoUser.isTerraformResource"></a>

```typescript
import { cognitoUser } from '@cdktf/provider-aws'

cognitoUser.CognitoUser.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUser.CognitoUser.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.lastModifiedDate">lastModifiedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.mfaSettingList">mfaSettingList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.preferredMfaSetting">preferredMfaSetting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.sub">sub</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.attributesInput">attributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.clientMetadataInput">clientMetadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.desiredDeliveryMediumsInput">desiredDeliveryMediumsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.forceAliasCreationInput">forceAliasCreationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.messageActionInput">messageActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.temporaryPasswordInput">temporaryPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.userPoolIdInput">userPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.validationDataInput">validationDataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.attributes">attributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.clientMetadata">clientMetadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.desiredDeliveryMediums">desiredDeliveryMediums</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.forceAliasCreation">forceAliasCreation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.messageAction">messageAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.temporaryPassword">temporaryPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.userPoolId">userPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.validationData">validationData</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `lastModifiedDate`<sup>Required</sup> <a name="lastModifiedDate" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.lastModifiedDate"></a>

```typescript
public readonly lastModifiedDate: string;
```

- *Type:* string

---

##### `mfaSettingList`<sup>Required</sup> <a name="mfaSettingList" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.mfaSettingList"></a>

```typescript
public readonly mfaSettingList: string[];
```

- *Type:* string[]

---

##### `preferredMfaSetting`<sup>Required</sup> <a name="preferredMfaSetting" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.preferredMfaSetting"></a>

```typescript
public readonly preferredMfaSetting: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `sub`<sup>Required</sup> <a name="sub" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.sub"></a>

```typescript
public readonly sub: string;
```

- *Type:* string

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.attributesInput"></a>

```typescript
public readonly attributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `clientMetadataInput`<sup>Optional</sup> <a name="clientMetadataInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.clientMetadataInput"></a>

```typescript
public readonly clientMetadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `desiredDeliveryMediumsInput`<sup>Optional</sup> <a name="desiredDeliveryMediumsInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.desiredDeliveryMediumsInput"></a>

```typescript
public readonly desiredDeliveryMediumsInput: string[];
```

- *Type:* string[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceAliasCreationInput`<sup>Optional</sup> <a name="forceAliasCreationInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.forceAliasCreationInput"></a>

```typescript
public readonly forceAliasCreationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `messageActionInput`<sup>Optional</sup> <a name="messageActionInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.messageActionInput"></a>

```typescript
public readonly messageActionInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `temporaryPasswordInput`<sup>Optional</sup> <a name="temporaryPasswordInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.temporaryPasswordInput"></a>

```typescript
public readonly temporaryPasswordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.userPoolIdInput"></a>

```typescript
public readonly userPoolIdInput: string;
```

- *Type:* string

---

##### `validationDataInput`<sup>Optional</sup> <a name="validationDataInput" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.validationDataInput"></a>

```typescript
public readonly validationDataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.attributes"></a>

```typescript
public readonly attributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `clientMetadata`<sup>Required</sup> <a name="clientMetadata" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.clientMetadata"></a>

```typescript
public readonly clientMetadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `desiredDeliveryMediums`<sup>Required</sup> <a name="desiredDeliveryMediums" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.desiredDeliveryMediums"></a>

```typescript
public readonly desiredDeliveryMediums: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceAliasCreation`<sup>Required</sup> <a name="forceAliasCreation" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.forceAliasCreation"></a>

```typescript
public readonly forceAliasCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `messageAction`<sup>Required</sup> <a name="messageAction" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.messageAction"></a>

```typescript
public readonly messageAction: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `temporaryPassword`<sup>Required</sup> <a name="temporaryPassword" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.temporaryPassword"></a>

```typescript
public readonly temporaryPassword: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

---

##### `validationData`<sup>Required</sup> <a name="validationData" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.validationData"></a>

```typescript
public readonly validationData: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cognitoUser.CognitoUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserConfig <a name="CognitoUserConfig" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.Initializer"></a>

```typescript
import { cognitoUser } from '@cdktf/provider-aws'

const cognitoUserConfig: cognitoUser.CognitoUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#username CognitoUser#username}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.userPoolId">userPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#user_pool_id CognitoUser#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.attributes">attributes</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#attributes CognitoUser#attributes}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.clientMetadata">clientMetadata</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#client_metadata CognitoUser#client_metadata}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.desiredDeliveryMediums">desiredDeliveryMediums</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#desired_delivery_mediums CognitoUser#desired_delivery_mediums}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#enabled CognitoUser#enabled}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.forceAliasCreation">forceAliasCreation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#force_alias_creation CognitoUser#force_alias_creation}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#id CognitoUser#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.messageAction">messageAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#message_action CognitoUser#message_action}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#password CognitoUser#password}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.temporaryPassword">temporaryPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#temporary_password CognitoUser#temporary_password}. |
| <code><a href="#@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.validationData">validationData</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#validation_data CognitoUser#validation_data}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#username CognitoUser#username}.

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#user_pool_id CognitoUser#user_pool_id}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.attributes"></a>

```typescript
public readonly attributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#attributes CognitoUser#attributes}.

---

##### `clientMetadata`<sup>Optional</sup> <a name="clientMetadata" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.clientMetadata"></a>

```typescript
public readonly clientMetadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#client_metadata CognitoUser#client_metadata}.

---

##### `desiredDeliveryMediums`<sup>Optional</sup> <a name="desiredDeliveryMediums" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.desiredDeliveryMediums"></a>

```typescript
public readonly desiredDeliveryMediums: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#desired_delivery_mediums CognitoUser#desired_delivery_mediums}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#enabled CognitoUser#enabled}.

---

##### `forceAliasCreation`<sup>Optional</sup> <a name="forceAliasCreation" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.forceAliasCreation"></a>

```typescript
public readonly forceAliasCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#force_alias_creation CognitoUser#force_alias_creation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#id CognitoUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `messageAction`<sup>Optional</sup> <a name="messageAction" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.messageAction"></a>

```typescript
public readonly messageAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#message_action CognitoUser#message_action}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#password CognitoUser#password}.

---

##### `temporaryPassword`<sup>Optional</sup> <a name="temporaryPassword" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.temporaryPassword"></a>

```typescript
public readonly temporaryPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#temporary_password CognitoUser#temporary_password}.

---

##### `validationData`<sup>Optional</sup> <a name="validationData" id="@cdktf/provider-aws.cognitoUser.CognitoUserConfig.property.validationData"></a>

```typescript
public readonly validationData: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user#validation_data CognitoUser#validation_data}.

---



