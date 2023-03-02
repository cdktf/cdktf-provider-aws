# `storagegatewayCachedIscsiVolume` Submodule <a name="`storagegatewayCachedIscsiVolume` Submodule" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewayCachedIscsiVolume <a name="StoragegatewayCachedIscsiVolume" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume aws_storagegateway_cached_iscsi_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer"></a>

```typescript
import { storagegatewayCachedIscsiVolume } from '@cdktf/provider-aws'

new storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume(scope: Construct, id: string, config: StoragegatewayCachedIscsiVolumeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig">StoragegatewayCachedIscsiVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig">StoragegatewayCachedIscsiVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetKmsEncrypted">resetKmsEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetSourceVolumeArn">resetSourceVolumeArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsEncrypted` <a name="resetKmsEncrypted" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetKmsEncrypted"></a>

```typescript
public resetKmsEncrypted(): void
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetSnapshotId"></a>

```typescript
public resetSnapshotId(): void
```

##### `resetSourceVolumeArn` <a name="resetSourceVolumeArn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetSourceVolumeArn"></a>

```typescript
public resetSourceVolumeArn(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isConstruct"></a>

```typescript
import { storagegatewayCachedIscsiVolume } from '@cdktf/provider-aws'

storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isTerraformElement"></a>

```typescript
import { storagegatewayCachedIscsiVolume } from '@cdktf/provider-aws'

storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isTerraformResource"></a>

```typescript
import { storagegatewayCachedIscsiVolume } from '@cdktf/provider-aws'

storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.chapEnabled">chapEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.lunNumber">lunNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.networkInterfacePort">networkInterfacePort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.targetArn">targetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.volumeArn">volumeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.volumeId">volumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.gatewayArnInput">gatewayArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.kmsEncryptedInput">kmsEncryptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.snapshotIdInput">snapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.sourceVolumeArnInput">sourceVolumeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.targetNameInput">targetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.volumeSizeInBytesInput">volumeSizeInBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.gatewayArn">gatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.kmsEncrypted">kmsEncrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.sourceVolumeArn">sourceVolumeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.targetName">targetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.volumeSizeInBytes">volumeSizeInBytes</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `chapEnabled`<sup>Required</sup> <a name="chapEnabled" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.chapEnabled"></a>

```typescript
public readonly chapEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lunNumber`<sup>Required</sup> <a name="lunNumber" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.lunNumber"></a>

```typescript
public readonly lunNumber: number;
```

- *Type:* number

---

##### `networkInterfacePort`<sup>Required</sup> <a name="networkInterfacePort" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.networkInterfacePort"></a>

```typescript
public readonly networkInterfacePort: number;
```

- *Type:* number

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

---

##### `volumeArn`<sup>Required</sup> <a name="volumeArn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.volumeArn"></a>

```typescript
public readonly volumeArn: string;
```

- *Type:* string

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

---

##### `gatewayArnInput`<sup>Optional</sup> <a name="gatewayArnInput" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.gatewayArnInput"></a>

```typescript
public readonly gatewayArnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsEncryptedInput`<sup>Optional</sup> <a name="kmsEncryptedInput" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.kmsEncryptedInput"></a>

```typescript
public readonly kmsEncryptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.networkInterfaceIdInput"></a>

```typescript
public readonly networkInterfaceIdInput: string;
```

- *Type:* string

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.snapshotIdInput"></a>

```typescript
public readonly snapshotIdInput: string;
```

- *Type:* string

---

##### `sourceVolumeArnInput`<sup>Optional</sup> <a name="sourceVolumeArnInput" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.sourceVolumeArnInput"></a>

```typescript
public readonly sourceVolumeArnInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetNameInput`<sup>Optional</sup> <a name="targetNameInput" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.targetNameInput"></a>

```typescript
public readonly targetNameInput: string;
```

- *Type:* string

---

##### `volumeSizeInBytesInput`<sup>Optional</sup> <a name="volumeSizeInBytesInput" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.volumeSizeInBytesInput"></a>

```typescript
public readonly volumeSizeInBytesInput: number;
```

- *Type:* number

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.gatewayArn"></a>

```typescript
public readonly gatewayArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsEncrypted`<sup>Required</sup> <a name="kmsEncrypted" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.kmsEncrypted"></a>

```typescript
public readonly kmsEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `sourceVolumeArn`<sup>Required</sup> <a name="sourceVolumeArn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.sourceVolumeArn"></a>

```typescript
public readonly sourceVolumeArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.targetName"></a>

```typescript
public readonly targetName: string;
```

- *Type:* string

---

##### `volumeSizeInBytes`<sup>Required</sup> <a name="volumeSizeInBytes" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.volumeSizeInBytes"></a>

```typescript
public readonly volumeSizeInBytes: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewayCachedIscsiVolumeConfig <a name="StoragegatewayCachedIscsiVolumeConfig" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.Initializer"></a>

```typescript
import { storagegatewayCachedIscsiVolume } from '@cdktf/provider-aws'

const storagegatewayCachedIscsiVolumeConfig: storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.gatewayArn">gatewayArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#gateway_arn StoragegatewayCachedIscsiVolume#gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#network_interface_id StoragegatewayCachedIscsiVolume#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.targetName">targetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#target_name StoragegatewayCachedIscsiVolume#target_name}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.volumeSizeInBytes">volumeSizeInBytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#volume_size_in_bytes StoragegatewayCachedIscsiVolume#volume_size_in_bytes}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#id StoragegatewayCachedIscsiVolume#id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.kmsEncrypted">kmsEncrypted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#kms_encrypted StoragegatewayCachedIscsiVolume#kms_encrypted}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.kmsKey">kmsKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#kms_key StoragegatewayCachedIscsiVolume#kms_key}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.snapshotId">snapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#snapshot_id StoragegatewayCachedIscsiVolume#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.sourceVolumeArn">sourceVolumeArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#source_volume_arn StoragegatewayCachedIscsiVolume#source_volume_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#tags StoragegatewayCachedIscsiVolume#tags}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#tags_all StoragegatewayCachedIscsiVolume#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.gatewayArn"></a>

```typescript
public readonly gatewayArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#gateway_arn StoragegatewayCachedIscsiVolume#gateway_arn}.

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#network_interface_id StoragegatewayCachedIscsiVolume#network_interface_id}.

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.targetName"></a>

```typescript
public readonly targetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#target_name StoragegatewayCachedIscsiVolume#target_name}.

---

##### `volumeSizeInBytes`<sup>Required</sup> <a name="volumeSizeInBytes" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.volumeSizeInBytes"></a>

```typescript
public readonly volumeSizeInBytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#volume_size_in_bytes StoragegatewayCachedIscsiVolume#volume_size_in_bytes}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#id StoragegatewayCachedIscsiVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsEncrypted`<sup>Optional</sup> <a name="kmsEncrypted" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.kmsEncrypted"></a>

```typescript
public readonly kmsEncrypted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#kms_encrypted StoragegatewayCachedIscsiVolume#kms_encrypted}.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#kms_key StoragegatewayCachedIscsiVolume#kms_key}.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#snapshot_id StoragegatewayCachedIscsiVolume#snapshot_id}.

---

##### `sourceVolumeArn`<sup>Optional</sup> <a name="sourceVolumeArn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.sourceVolumeArn"></a>

```typescript
public readonly sourceVolumeArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#source_volume_arn StoragegatewayCachedIscsiVolume#source_volume_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#tags StoragegatewayCachedIscsiVolume#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#tags_all StoragegatewayCachedIscsiVolume#tags_all}.

---



