# `kmsExternalKey` Submodule <a name="`kmsExternalKey` Submodule" id="@cdktf/provider-aws.kmsExternalKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsExternalKey <a name="KmsExternalKey" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key aws_kms_external_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer"></a>

```typescript
import { kmsExternalKey } from '@cdktf/provider-aws'

new kmsExternalKey.KmsExternalKey(scope: Construct, id: string, config?: KmsExternalKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig">KmsExternalKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig">KmsExternalKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetBypassPolicyLockoutSafetyCheck">resetBypassPolicyLockoutSafetyCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetDeletionWindowInDays">resetDeletionWindowInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetKeyMaterialBase64">resetKeyMaterialBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetMultiRegion">resetMultiRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetValidTo">resetValidTo</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetBypassPolicyLockoutSafetyCheck` <a name="resetBypassPolicyLockoutSafetyCheck" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetBypassPolicyLockoutSafetyCheck"></a>

```typescript
public resetBypassPolicyLockoutSafetyCheck(): void
```

##### `resetDeletionWindowInDays` <a name="resetDeletionWindowInDays" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetDeletionWindowInDays"></a>

```typescript
public resetDeletionWindowInDays(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeyMaterialBase64` <a name="resetKeyMaterialBase64" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetKeyMaterialBase64"></a>

```typescript
public resetKeyMaterialBase64(): void
```

##### `resetMultiRegion` <a name="resetMultiRegion" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetMultiRegion"></a>

```typescript
public resetMultiRegion(): void
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetPolicy"></a>

```typescript
public resetPolicy(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetValidTo` <a name="resetValidTo" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.resetValidTo"></a>

```typescript
public resetValidTo(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.isConstruct"></a>

```typescript
import { kmsExternalKey } from '@cdktf/provider-aws'

kmsExternalKey.KmsExternalKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.isTerraformElement"></a>

```typescript
import { kmsExternalKey } from '@cdktf/provider-aws'

kmsExternalKey.KmsExternalKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.isTerraformResource"></a>

```typescript
import { kmsExternalKey } from '@cdktf/provider-aws'

kmsExternalKey.KmsExternalKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.expirationModel">expirationModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.keyState">keyState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.keyUsage">keyUsage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.bypassPolicyLockoutSafetyCheckInput">bypassPolicyLockoutSafetyCheckInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.deletionWindowInDaysInput">deletionWindowInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.keyMaterialBase64Input">keyMaterialBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.multiRegionInput">multiRegionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.validToInput">validToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.bypassPolicyLockoutSafetyCheck">bypassPolicyLockoutSafetyCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.deletionWindowInDays">deletionWindowInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.keyMaterialBase64">keyMaterialBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.multiRegion">multiRegion</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.validTo">validTo</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `expirationModel`<sup>Required</sup> <a name="expirationModel" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.expirationModel"></a>

```typescript
public readonly expirationModel: string;
```

- *Type:* string

---

##### `keyState`<sup>Required</sup> <a name="keyState" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.keyState"></a>

```typescript
public readonly keyState: string;
```

- *Type:* string

---

##### `keyUsage`<sup>Required</sup> <a name="keyUsage" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.keyUsage"></a>

```typescript
public readonly keyUsage: string;
```

- *Type:* string

---

##### `bypassPolicyLockoutSafetyCheckInput`<sup>Optional</sup> <a name="bypassPolicyLockoutSafetyCheckInput" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.bypassPolicyLockoutSafetyCheckInput"></a>

```typescript
public readonly bypassPolicyLockoutSafetyCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deletionWindowInDaysInput`<sup>Optional</sup> <a name="deletionWindowInDaysInput" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.deletionWindowInDaysInput"></a>

```typescript
public readonly deletionWindowInDaysInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyMaterialBase64Input`<sup>Optional</sup> <a name="keyMaterialBase64Input" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.keyMaterialBase64Input"></a>

```typescript
public readonly keyMaterialBase64Input: string;
```

- *Type:* string

---

##### `multiRegionInput`<sup>Optional</sup> <a name="multiRegionInput" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.multiRegionInput"></a>

```typescript
public readonly multiRegionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `validToInput`<sup>Optional</sup> <a name="validToInput" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.validToInput"></a>

```typescript
public readonly validToInput: string;
```

- *Type:* string

---

##### `bypassPolicyLockoutSafetyCheck`<sup>Required</sup> <a name="bypassPolicyLockoutSafetyCheck" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.bypassPolicyLockoutSafetyCheck"></a>

```typescript
public readonly bypassPolicyLockoutSafetyCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deletionWindowInDays`<sup>Required</sup> <a name="deletionWindowInDays" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.deletionWindowInDays"></a>

```typescript
public readonly deletionWindowInDays: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyMaterialBase64`<sup>Required</sup> <a name="keyMaterialBase64" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.keyMaterialBase64"></a>

```typescript
public readonly keyMaterialBase64: string;
```

- *Type:* string

---

##### `multiRegion`<sup>Required</sup> <a name="multiRegion" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.multiRegion"></a>

```typescript
public readonly multiRegion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `validTo`<sup>Required</sup> <a name="validTo" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.validTo"></a>

```typescript
public readonly validTo: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsExternalKeyConfig <a name="KmsExternalKeyConfig" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.Initializer"></a>

```typescript
import { kmsExternalKey } from '@cdktf/provider-aws'

const kmsExternalKeyConfig: kmsExternalKey.KmsExternalKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.bypassPolicyLockoutSafetyCheck">bypassPolicyLockoutSafetyCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#bypass_policy_lockout_safety_check KmsExternalKey#bypass_policy_lockout_safety_check}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.deletionWindowInDays">deletionWindowInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#deletion_window_in_days KmsExternalKey#deletion_window_in_days}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#description KmsExternalKey#description}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#enabled KmsExternalKey#enabled}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#id KmsExternalKey#id}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.keyMaterialBase64">keyMaterialBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#key_material_base64 KmsExternalKey#key_material_base64}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.multiRegion">multiRegion</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#multi_region KmsExternalKey#multi_region}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.policy">policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#policy KmsExternalKey#policy}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#tags KmsExternalKey#tags}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#tags_all KmsExternalKey#tags_all}. |
| <code><a href="#@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.validTo">validTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#valid_to KmsExternalKey#valid_to}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bypassPolicyLockoutSafetyCheck`<sup>Optional</sup> <a name="bypassPolicyLockoutSafetyCheck" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.bypassPolicyLockoutSafetyCheck"></a>

```typescript
public readonly bypassPolicyLockoutSafetyCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#bypass_policy_lockout_safety_check KmsExternalKey#bypass_policy_lockout_safety_check}.

---

##### `deletionWindowInDays`<sup>Optional</sup> <a name="deletionWindowInDays" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.deletionWindowInDays"></a>

```typescript
public readonly deletionWindowInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#deletion_window_in_days KmsExternalKey#deletion_window_in_days}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#description KmsExternalKey#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#enabled KmsExternalKey#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#id KmsExternalKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyMaterialBase64`<sup>Optional</sup> <a name="keyMaterialBase64" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.keyMaterialBase64"></a>

```typescript
public readonly keyMaterialBase64: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#key_material_base64 KmsExternalKey#key_material_base64}.

---

##### `multiRegion`<sup>Optional</sup> <a name="multiRegion" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.multiRegion"></a>

```typescript
public readonly multiRegion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#multi_region KmsExternalKey#multi_region}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#policy KmsExternalKey#policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#tags KmsExternalKey#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#tags_all KmsExternalKey#tags_all}.

---

##### `validTo`<sup>Optional</sup> <a name="validTo" id="@cdktf/provider-aws.kmsExternalKey.KmsExternalKeyConfig.property.validTo"></a>

```typescript
public readonly validTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key#valid_to KmsExternalKey#valid_to}.

---



