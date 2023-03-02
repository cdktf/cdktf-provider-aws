# `ebsSnapshotCopy` Submodule <a name="`ebsSnapshotCopy` Submodule" id="@cdktf/provider-aws.ebsSnapshotCopy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EbsSnapshotCopy <a name="EbsSnapshotCopy" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy aws_ebs_snapshot_copy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer"></a>

```typescript
import { ebsSnapshotCopy } from '@cdktf/provider-aws'

new ebsSnapshotCopy.EbsSnapshotCopy(scope: Construct, id: string, config: EbsSnapshotCopyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig">EbsSnapshotCopyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig">EbsSnapshotCopyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetPermanentRestore">resetPermanentRestore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetStorageTier">resetStorageTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetTemporaryRestoreDays">resetTemporaryRestoreDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.putTimeouts"></a>

```typescript
public putTimeouts(value: EbsSnapshotCopyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts">EbsSnapshotCopyTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetEncrypted"></a>

```typescript
public resetEncrypted(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetPermanentRestore` <a name="resetPermanentRestore" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetPermanentRestore"></a>

```typescript
public resetPermanentRestore(): void
```

##### `resetStorageTier` <a name="resetStorageTier" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetStorageTier"></a>

```typescript
public resetStorageTier(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTemporaryRestoreDays` <a name="resetTemporaryRestoreDays" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetTemporaryRestoreDays"></a>

```typescript
public resetTemporaryRestoreDays(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.isConstruct"></a>

```typescript
import { ebsSnapshotCopy } from '@cdktf/provider-aws'

ebsSnapshotCopy.EbsSnapshotCopy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.isTerraformElement"></a>

```typescript
import { ebsSnapshotCopy } from '@cdktf/provider-aws'

ebsSnapshotCopy.EbsSnapshotCopy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.isTerraformResource"></a>

```typescript
import { ebsSnapshotCopy } from '@cdktf/provider-aws'

ebsSnapshotCopy.EbsSnapshotCopy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.dataEncryptionKeyId">dataEncryptionKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.outpostArn">outpostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.ownerAlias">ownerAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference">EbsSnapshotCopyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.volumeId">volumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.encryptedInput">encryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.permanentRestoreInput">permanentRestoreInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.sourceRegionInput">sourceRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.sourceSnapshotIdInput">sourceSnapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.storageTierInput">storageTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.temporaryRestoreDaysInput">temporaryRestoreDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts">EbsSnapshotCopyTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.permanentRestore">permanentRestore</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.sourceRegion">sourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.sourceSnapshotId">sourceSnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.storageTier">storageTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.temporaryRestoreDays">temporaryRestoreDays</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `dataEncryptionKeyId`<sup>Required</sup> <a name="dataEncryptionKeyId" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.dataEncryptionKeyId"></a>

```typescript
public readonly dataEncryptionKeyId: string;
```

- *Type:* string

---

##### `outpostArn`<sup>Required</sup> <a name="outpostArn" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.outpostArn"></a>

```typescript
public readonly outpostArn: string;
```

- *Type:* string

---

##### `ownerAlias`<sup>Required</sup> <a name="ownerAlias" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.ownerAlias"></a>

```typescript
public readonly ownerAlias: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.timeouts"></a>

```typescript
public readonly timeouts: EbsSnapshotCopyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference">EbsSnapshotCopyTimeoutsOutputReference</a>

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.encryptedInput"></a>

```typescript
public readonly encryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `permanentRestoreInput`<sup>Optional</sup> <a name="permanentRestoreInput" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.permanentRestoreInput"></a>

```typescript
public readonly permanentRestoreInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceRegionInput`<sup>Optional</sup> <a name="sourceRegionInput" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.sourceRegionInput"></a>

```typescript
public readonly sourceRegionInput: string;
```

- *Type:* string

---

##### `sourceSnapshotIdInput`<sup>Optional</sup> <a name="sourceSnapshotIdInput" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.sourceSnapshotIdInput"></a>

```typescript
public readonly sourceSnapshotIdInput: string;
```

- *Type:* string

---

##### `storageTierInput`<sup>Optional</sup> <a name="storageTierInput" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.storageTierInput"></a>

```typescript
public readonly storageTierInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `temporaryRestoreDaysInput`<sup>Optional</sup> <a name="temporaryRestoreDaysInput" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.temporaryRestoreDaysInput"></a>

```typescript
public readonly temporaryRestoreDaysInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: EbsSnapshotCopyTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts">EbsSnapshotCopyTimeouts</a> | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `permanentRestore`<sup>Required</sup> <a name="permanentRestore" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.permanentRestore"></a>

```typescript
public readonly permanentRestore: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceRegion`<sup>Required</sup> <a name="sourceRegion" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.sourceRegion"></a>

```typescript
public readonly sourceRegion: string;
```

- *Type:* string

---

##### `sourceSnapshotId`<sup>Required</sup> <a name="sourceSnapshotId" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.sourceSnapshotId"></a>

```typescript
public readonly sourceSnapshotId: string;
```

- *Type:* string

---

##### `storageTier`<sup>Required</sup> <a name="storageTier" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.storageTier"></a>

```typescript
public readonly storageTier: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `temporaryRestoreDays`<sup>Required</sup> <a name="temporaryRestoreDays" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.temporaryRestoreDays"></a>

```typescript
public readonly temporaryRestoreDays: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EbsSnapshotCopyConfig <a name="EbsSnapshotCopyConfig" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.Initializer"></a>

```typescript
import { ebsSnapshotCopy } from '@cdktf/provider-aws'

const ebsSnapshotCopyConfig: ebsSnapshotCopy.EbsSnapshotCopyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.sourceRegion">sourceRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#source_region EbsSnapshotCopy#source_region}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.sourceSnapshotId">sourceSnapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#source_snapshot_id EbsSnapshotCopy#source_snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#description EbsSnapshotCopy#description}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.encrypted">encrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#encrypted EbsSnapshotCopy#encrypted}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#id EbsSnapshotCopy#id}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#kms_key_id EbsSnapshotCopy#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.permanentRestore">permanentRestore</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#permanent_restore EbsSnapshotCopy#permanent_restore}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.storageTier">storageTier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#storage_tier EbsSnapshotCopy#storage_tier}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#tags EbsSnapshotCopy#tags}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#tags_all EbsSnapshotCopy#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.temporaryRestoreDays">temporaryRestoreDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#temporary_restore_days EbsSnapshotCopy#temporary_restore_days}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts">EbsSnapshotCopyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `sourceRegion`<sup>Required</sup> <a name="sourceRegion" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.sourceRegion"></a>

```typescript
public readonly sourceRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#source_region EbsSnapshotCopy#source_region}.

---

##### `sourceSnapshotId`<sup>Required</sup> <a name="sourceSnapshotId" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.sourceSnapshotId"></a>

```typescript
public readonly sourceSnapshotId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#source_snapshot_id EbsSnapshotCopy#source_snapshot_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#description EbsSnapshotCopy#description}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.encrypted"></a>

```typescript
public readonly encrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#encrypted EbsSnapshotCopy#encrypted}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#id EbsSnapshotCopy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#kms_key_id EbsSnapshotCopy#kms_key_id}.

---

##### `permanentRestore`<sup>Optional</sup> <a name="permanentRestore" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.permanentRestore"></a>

```typescript
public readonly permanentRestore: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#permanent_restore EbsSnapshotCopy#permanent_restore}.

---

##### `storageTier`<sup>Optional</sup> <a name="storageTier" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.storageTier"></a>

```typescript
public readonly storageTier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#storage_tier EbsSnapshotCopy#storage_tier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#tags EbsSnapshotCopy#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#tags_all EbsSnapshotCopy#tags_all}.

---

##### `temporaryRestoreDays`<sup>Optional</sup> <a name="temporaryRestoreDays" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.temporaryRestoreDays"></a>

```typescript
public readonly temporaryRestoreDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#temporary_restore_days EbsSnapshotCopy#temporary_restore_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EbsSnapshotCopyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts">EbsSnapshotCopyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#timeouts EbsSnapshotCopy#timeouts}

---

### EbsSnapshotCopyTimeouts <a name="EbsSnapshotCopyTimeouts" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts.Initializer"></a>

```typescript
import { ebsSnapshotCopy } from '@cdktf/provider-aws'

const ebsSnapshotCopyTimeouts: ebsSnapshotCopy.EbsSnapshotCopyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#create EbsSnapshotCopy#create}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#delete EbsSnapshotCopy#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#create EbsSnapshotCopy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#delete EbsSnapshotCopy#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### EbsSnapshotCopyTimeoutsOutputReference <a name="EbsSnapshotCopyTimeoutsOutputReference" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.Initializer"></a>

```typescript
import { ebsSnapshotCopy } from '@cdktf/provider-aws'

new ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts">EbsSnapshotCopyTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EbsSnapshotCopyTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts">EbsSnapshotCopyTimeouts</a> | cdktf.IResolvable

---



