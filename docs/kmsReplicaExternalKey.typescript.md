# `kmsReplicaExternalKey` Submodule <a name="`kmsReplicaExternalKey` Submodule" id="@cdktf/provider-aws.kmsReplicaExternalKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsReplicaExternalKey <a name="KmsReplicaExternalKey" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key aws_kms_replica_external_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer"></a>

```typescript
import { kmsReplicaExternalKey } from '@cdktf/provider-aws'

new kmsReplicaExternalKey.KmsReplicaExternalKey(scope: Construct, id: string, config: KmsReplicaExternalKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig">KmsReplicaExternalKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig">KmsReplicaExternalKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetBypassPolicyLockoutSafetyCheck">resetBypassPolicyLockoutSafetyCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetDeletionWindowInDays">resetDeletionWindowInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetKeyMaterialBase64">resetKeyMaterialBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetValidTo">resetValidTo</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetBypassPolicyLockoutSafetyCheck` <a name="resetBypassPolicyLockoutSafetyCheck" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetBypassPolicyLockoutSafetyCheck"></a>

```typescript
public resetBypassPolicyLockoutSafetyCheck(): void
```

##### `resetDeletionWindowInDays` <a name="resetDeletionWindowInDays" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetDeletionWindowInDays"></a>

```typescript
public resetDeletionWindowInDays(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeyMaterialBase64` <a name="resetKeyMaterialBase64" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetKeyMaterialBase64"></a>

```typescript
public resetKeyMaterialBase64(): void
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetPolicy"></a>

```typescript
public resetPolicy(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetValidTo` <a name="resetValidTo" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.resetValidTo"></a>

```typescript
public resetValidTo(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.isConstruct"></a>

```typescript
import { kmsReplicaExternalKey } from '@cdktf/provider-aws'

kmsReplicaExternalKey.KmsReplicaExternalKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.isTerraformElement"></a>

```typescript
import { kmsReplicaExternalKey } from '@cdktf/provider-aws'

kmsReplicaExternalKey.KmsReplicaExternalKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.isTerraformResource"></a>

```typescript
import { kmsReplicaExternalKey } from '@cdktf/provider-aws'

kmsReplicaExternalKey.KmsReplicaExternalKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.expirationModel">expirationModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.keyState">keyState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.keyUsage">keyUsage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.bypassPolicyLockoutSafetyCheckInput">bypassPolicyLockoutSafetyCheckInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.deletionWindowInDaysInput">deletionWindowInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.keyMaterialBase64Input">keyMaterialBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.primaryKeyArnInput">primaryKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.validToInput">validToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.bypassPolicyLockoutSafetyCheck">bypassPolicyLockoutSafetyCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.deletionWindowInDays">deletionWindowInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.keyMaterialBase64">keyMaterialBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.primaryKeyArn">primaryKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.validTo">validTo</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `expirationModel`<sup>Required</sup> <a name="expirationModel" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.expirationModel"></a>

```typescript
public readonly expirationModel: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `keyState`<sup>Required</sup> <a name="keyState" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.keyState"></a>

```typescript
public readonly keyState: string;
```

- *Type:* string

---

##### `keyUsage`<sup>Required</sup> <a name="keyUsage" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.keyUsage"></a>

```typescript
public readonly keyUsage: string;
```

- *Type:* string

---

##### `bypassPolicyLockoutSafetyCheckInput`<sup>Optional</sup> <a name="bypassPolicyLockoutSafetyCheckInput" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.bypassPolicyLockoutSafetyCheckInput"></a>

```typescript
public readonly bypassPolicyLockoutSafetyCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deletionWindowInDaysInput`<sup>Optional</sup> <a name="deletionWindowInDaysInput" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.deletionWindowInDaysInput"></a>

```typescript
public readonly deletionWindowInDaysInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyMaterialBase64Input`<sup>Optional</sup> <a name="keyMaterialBase64Input" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.keyMaterialBase64Input"></a>

```typescript
public readonly keyMaterialBase64Input: string;
```

- *Type:* string

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `primaryKeyArnInput`<sup>Optional</sup> <a name="primaryKeyArnInput" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.primaryKeyArnInput"></a>

```typescript
public readonly primaryKeyArnInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `validToInput`<sup>Optional</sup> <a name="validToInput" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.validToInput"></a>

```typescript
public readonly validToInput: string;
```

- *Type:* string

---

##### `bypassPolicyLockoutSafetyCheck`<sup>Required</sup> <a name="bypassPolicyLockoutSafetyCheck" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.bypassPolicyLockoutSafetyCheck"></a>

```typescript
public readonly bypassPolicyLockoutSafetyCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deletionWindowInDays`<sup>Required</sup> <a name="deletionWindowInDays" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.deletionWindowInDays"></a>

```typescript
public readonly deletionWindowInDays: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyMaterialBase64`<sup>Required</sup> <a name="keyMaterialBase64" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.keyMaterialBase64"></a>

```typescript
public readonly keyMaterialBase64: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `primaryKeyArn`<sup>Required</sup> <a name="primaryKeyArn" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.primaryKeyArn"></a>

```typescript
public readonly primaryKeyArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `validTo`<sup>Required</sup> <a name="validTo" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.validTo"></a>

```typescript
public readonly validTo: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsReplicaExternalKeyConfig <a name="KmsReplicaExternalKeyConfig" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.Initializer"></a>

```typescript
import { kmsReplicaExternalKey } from '@cdktf/provider-aws'

const kmsReplicaExternalKeyConfig: kmsReplicaExternalKey.KmsReplicaExternalKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.primaryKeyArn">primaryKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#primary_key_arn KmsReplicaExternalKey#primary_key_arn}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.bypassPolicyLockoutSafetyCheck">bypassPolicyLockoutSafetyCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#bypass_policy_lockout_safety_check KmsReplicaExternalKey#bypass_policy_lockout_safety_check}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.deletionWindowInDays">deletionWindowInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#deletion_window_in_days KmsReplicaExternalKey#deletion_window_in_days}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#description KmsReplicaExternalKey#description}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#enabled KmsReplicaExternalKey#enabled}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#id KmsReplicaExternalKey#id}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.keyMaterialBase64">keyMaterialBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#key_material_base64 KmsReplicaExternalKey#key_material_base64}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.policy">policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#policy KmsReplicaExternalKey#policy}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#tags KmsReplicaExternalKey#tags}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#tags_all KmsReplicaExternalKey#tags_all}. |
| <code><a href="#@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.validTo">validTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#valid_to KmsReplicaExternalKey#valid_to}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `primaryKeyArn`<sup>Required</sup> <a name="primaryKeyArn" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.primaryKeyArn"></a>

```typescript
public readonly primaryKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#primary_key_arn KmsReplicaExternalKey#primary_key_arn}.

---

##### `bypassPolicyLockoutSafetyCheck`<sup>Optional</sup> <a name="bypassPolicyLockoutSafetyCheck" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.bypassPolicyLockoutSafetyCheck"></a>

```typescript
public readonly bypassPolicyLockoutSafetyCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#bypass_policy_lockout_safety_check KmsReplicaExternalKey#bypass_policy_lockout_safety_check}.

---

##### `deletionWindowInDays`<sup>Optional</sup> <a name="deletionWindowInDays" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.deletionWindowInDays"></a>

```typescript
public readonly deletionWindowInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#deletion_window_in_days KmsReplicaExternalKey#deletion_window_in_days}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#description KmsReplicaExternalKey#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#enabled KmsReplicaExternalKey#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#id KmsReplicaExternalKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyMaterialBase64`<sup>Optional</sup> <a name="keyMaterialBase64" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.keyMaterialBase64"></a>

```typescript
public readonly keyMaterialBase64: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#key_material_base64 KmsReplicaExternalKey#key_material_base64}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#policy KmsReplicaExternalKey#policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#tags KmsReplicaExternalKey#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#tags_all KmsReplicaExternalKey#tags_all}.

---

##### `validTo`<sup>Optional</sup> <a name="validTo" id="@cdktf/provider-aws.kmsReplicaExternalKey.KmsReplicaExternalKeyConfig.property.validTo"></a>

```typescript
public readonly validTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_external_key#valid_to KmsReplicaExternalKey#valid_to}.

---



