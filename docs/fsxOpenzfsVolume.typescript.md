# `fsxOpenzfsVolume` Submodule <a name="`fsxOpenzfsVolume` Submodule" id="@cdktf/provider-aws.fsxOpenzfsVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxOpenzfsVolume <a name="FsxOpenzfsVolume" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume aws_fsx_openzfs_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer"></a>

```typescript
import { fsxOpenzfsVolume } from '@cdktf/provider-aws'

new fsxOpenzfsVolume.FsxOpenzfsVolume(scope: Construct, id: string, config: FsxOpenzfsVolumeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig">FsxOpenzfsVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig">FsxOpenzfsVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putNfsExports">putNfsExports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putOriginSnapshot">putOriginSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putUserAndGroupQuotas">putUserAndGroupQuotas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetCopyTagsToSnapshots">resetCopyTagsToSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetDataCompressionType">resetDataCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetNfsExports">resetNfsExports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetOriginSnapshot">resetOriginSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetRecordSizeKib">resetRecordSizeKib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetStorageCapacityQuotaGib">resetStorageCapacityQuotaGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetStorageCapacityReservationGib">resetStorageCapacityReservationGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetUserAndGroupQuotas">resetUserAndGroupQuotas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putNfsExports` <a name="putNfsExports" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putNfsExports"></a>

```typescript
public putNfsExports(value: FsxOpenzfsVolumeNfsExports): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putNfsExports.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a>

---

##### `putOriginSnapshot` <a name="putOriginSnapshot" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putOriginSnapshot"></a>

```typescript
public putOriginSnapshot(value: FsxOpenzfsVolumeOriginSnapshot): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putOriginSnapshot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putTimeouts"></a>

```typescript
public putTimeouts(value: FsxOpenzfsVolumeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts">FsxOpenzfsVolumeTimeouts</a>

---

##### `putUserAndGroupQuotas` <a name="putUserAndGroupQuotas" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putUserAndGroupQuotas"></a>

```typescript
public putUserAndGroupQuotas(value: IResolvable | FsxOpenzfsVolumeUserAndGroupQuotas[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putUserAndGroupQuotas.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas">FsxOpenzfsVolumeUserAndGroupQuotas</a>[]

---

##### `resetCopyTagsToSnapshots` <a name="resetCopyTagsToSnapshots" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetCopyTagsToSnapshots"></a>

```typescript
public resetCopyTagsToSnapshots(): void
```

##### `resetDataCompressionType` <a name="resetDataCompressionType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetDataCompressionType"></a>

```typescript
public resetDataCompressionType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNfsExports` <a name="resetNfsExports" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetNfsExports"></a>

```typescript
public resetNfsExports(): void
```

##### `resetOriginSnapshot` <a name="resetOriginSnapshot" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetOriginSnapshot"></a>

```typescript
public resetOriginSnapshot(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```

##### `resetRecordSizeKib` <a name="resetRecordSizeKib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetRecordSizeKib"></a>

```typescript
public resetRecordSizeKib(): void
```

##### `resetStorageCapacityQuotaGib` <a name="resetStorageCapacityQuotaGib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetStorageCapacityQuotaGib"></a>

```typescript
public resetStorageCapacityQuotaGib(): void
```

##### `resetStorageCapacityReservationGib` <a name="resetStorageCapacityReservationGib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetStorageCapacityReservationGib"></a>

```typescript
public resetStorageCapacityReservationGib(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserAndGroupQuotas` <a name="resetUserAndGroupQuotas" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetUserAndGroupQuotas"></a>

```typescript
public resetUserAndGroupQuotas(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isConstruct"></a>

```typescript
import { fsxOpenzfsVolume } from '@cdktf/provider-aws'

fsxOpenzfsVolume.FsxOpenzfsVolume.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isTerraformElement"></a>

```typescript
import { fsxOpenzfsVolume } from '@cdktf/provider-aws'

fsxOpenzfsVolume.FsxOpenzfsVolume.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isTerraformResource"></a>

```typescript
import { fsxOpenzfsVolume } from '@cdktf/provider-aws'

fsxOpenzfsVolume.FsxOpenzfsVolume.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.nfsExports">nfsExports</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference">FsxOpenzfsVolumeNfsExportsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.originSnapshot">originSnapshot</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference">FsxOpenzfsVolumeOriginSnapshotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference">FsxOpenzfsVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.userAndGroupQuotas">userAndGroupQuotas</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList">FsxOpenzfsVolumeUserAndGroupQuotasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.copyTagsToSnapshotsInput">copyTagsToSnapshotsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.dataCompressionTypeInput">dataCompressionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.nfsExportsInput">nfsExportsInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.originSnapshotInput">originSnapshotInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.parentVolumeIdInput">parentVolumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.recordSizeKibInput">recordSizeKibInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityQuotaGibInput">storageCapacityQuotaGibInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityReservationGibInput">storageCapacityReservationGibInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts">FsxOpenzfsVolumeTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.userAndGroupQuotasInput">userAndGroupQuotasInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas">FsxOpenzfsVolumeUserAndGroupQuotas</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.copyTagsToSnapshots">copyTagsToSnapshots</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.dataCompressionType">dataCompressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.parentVolumeId">parentVolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.recordSizeKib">recordSizeKib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityQuotaGib">storageCapacityQuotaGib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityReservationGib">storageCapacityReservationGib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `nfsExports`<sup>Required</sup> <a name="nfsExports" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.nfsExports"></a>

```typescript
public readonly nfsExports: FsxOpenzfsVolumeNfsExportsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference">FsxOpenzfsVolumeNfsExportsOutputReference</a>

---

##### `originSnapshot`<sup>Required</sup> <a name="originSnapshot" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.originSnapshot"></a>

```typescript
public readonly originSnapshot: FsxOpenzfsVolumeOriginSnapshotOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference">FsxOpenzfsVolumeOriginSnapshotOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.timeouts"></a>

```typescript
public readonly timeouts: FsxOpenzfsVolumeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference">FsxOpenzfsVolumeTimeoutsOutputReference</a>

---

##### `userAndGroupQuotas`<sup>Required</sup> <a name="userAndGroupQuotas" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.userAndGroupQuotas"></a>

```typescript
public readonly userAndGroupQuotas: FsxOpenzfsVolumeUserAndGroupQuotasList;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList">FsxOpenzfsVolumeUserAndGroupQuotasList</a>

---

##### `copyTagsToSnapshotsInput`<sup>Optional</sup> <a name="copyTagsToSnapshotsInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.copyTagsToSnapshotsInput"></a>

```typescript
public readonly copyTagsToSnapshotsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dataCompressionTypeInput`<sup>Optional</sup> <a name="dataCompressionTypeInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.dataCompressionTypeInput"></a>

```typescript
public readonly dataCompressionTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nfsExportsInput`<sup>Optional</sup> <a name="nfsExportsInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.nfsExportsInput"></a>

```typescript
public readonly nfsExportsInput: FsxOpenzfsVolumeNfsExports;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a>

---

##### `originSnapshotInput`<sup>Optional</sup> <a name="originSnapshotInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.originSnapshotInput"></a>

```typescript
public readonly originSnapshotInput: FsxOpenzfsVolumeOriginSnapshot;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a>

---

##### `parentVolumeIdInput`<sup>Optional</sup> <a name="parentVolumeIdInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.parentVolumeIdInput"></a>

```typescript
public readonly parentVolumeIdInput: string;
```

- *Type:* string

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `recordSizeKibInput`<sup>Optional</sup> <a name="recordSizeKibInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.recordSizeKibInput"></a>

```typescript
public readonly recordSizeKibInput: number;
```

- *Type:* number

---

##### `storageCapacityQuotaGibInput`<sup>Optional</sup> <a name="storageCapacityQuotaGibInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityQuotaGibInput"></a>

```typescript
public readonly storageCapacityQuotaGibInput: number;
```

- *Type:* number

---

##### `storageCapacityReservationGibInput`<sup>Optional</sup> <a name="storageCapacityReservationGibInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityReservationGibInput"></a>

```typescript
public readonly storageCapacityReservationGibInput: number;
```

- *Type:* number

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: FsxOpenzfsVolumeTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts">FsxOpenzfsVolumeTimeouts</a> | cdktf.IResolvable

---

##### `userAndGroupQuotasInput`<sup>Optional</sup> <a name="userAndGroupQuotasInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.userAndGroupQuotasInput"></a>

```typescript
public readonly userAndGroupQuotasInput: IResolvable | FsxOpenzfsVolumeUserAndGroupQuotas[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas">FsxOpenzfsVolumeUserAndGroupQuotas</a>[]

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `copyTagsToSnapshots`<sup>Required</sup> <a name="copyTagsToSnapshots" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.copyTagsToSnapshots"></a>

```typescript
public readonly copyTagsToSnapshots: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dataCompressionType`<sup>Required</sup> <a name="dataCompressionType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.dataCompressionType"></a>

```typescript
public readonly dataCompressionType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentVolumeId`<sup>Required</sup> <a name="parentVolumeId" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.parentVolumeId"></a>

```typescript
public readonly parentVolumeId: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `recordSizeKib`<sup>Required</sup> <a name="recordSizeKib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.recordSizeKib"></a>

```typescript
public readonly recordSizeKib: number;
```

- *Type:* number

---

##### `storageCapacityQuotaGib`<sup>Required</sup> <a name="storageCapacityQuotaGib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityQuotaGib"></a>

```typescript
public readonly storageCapacityQuotaGib: number;
```

- *Type:* number

---

##### `storageCapacityReservationGib`<sup>Required</sup> <a name="storageCapacityReservationGib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityReservationGib"></a>

```typescript
public readonly storageCapacityReservationGib: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FsxOpenzfsVolumeConfig <a name="FsxOpenzfsVolumeConfig" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.Initializer"></a>

```typescript
import { fsxOpenzfsVolume } from '@cdktf/provider-aws'

const fsxOpenzfsVolumeConfig: fsxOpenzfsVolume.FsxOpenzfsVolumeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#name FsxOpenzfsVolume#name}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.parentVolumeId">parentVolumeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#parent_volume_id FsxOpenzfsVolume#parent_volume_id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.copyTagsToSnapshots">copyTagsToSnapshots</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#copy_tags_to_snapshots FsxOpenzfsVolume#copy_tags_to_snapshots}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.dataCompressionType">dataCompressionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#data_compression_type FsxOpenzfsVolume#data_compression_type}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#id FsxOpenzfsVolume#id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.nfsExports">nfsExports</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a></code> | nfs_exports block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.originSnapshot">originSnapshot</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a></code> | origin_snapshot block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#read_only FsxOpenzfsVolume#read_only}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.recordSizeKib">recordSizeKib</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#record_size_kib FsxOpenzfsVolume#record_size_kib}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.storageCapacityQuotaGib">storageCapacityQuotaGib</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_quota_gib FsxOpenzfsVolume#storage_capacity_quota_gib}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.storageCapacityReservationGib">storageCapacityReservationGib</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_reservation_gib FsxOpenzfsVolume#storage_capacity_reservation_gib}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#tags FsxOpenzfsVolume#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#tags_all FsxOpenzfsVolume#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts">FsxOpenzfsVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.userAndGroupQuotas">userAndGroupQuotas</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas">FsxOpenzfsVolumeUserAndGroupQuotas</a>[]</code> | user_and_group_quotas block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.volumeType">volumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#volume_type FsxOpenzfsVolume#volume_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#name FsxOpenzfsVolume#name}.

---

##### `parentVolumeId`<sup>Required</sup> <a name="parentVolumeId" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.parentVolumeId"></a>

```typescript
public readonly parentVolumeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#parent_volume_id FsxOpenzfsVolume#parent_volume_id}.

---

##### `copyTagsToSnapshots`<sup>Optional</sup> <a name="copyTagsToSnapshots" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.copyTagsToSnapshots"></a>

```typescript
public readonly copyTagsToSnapshots: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#copy_tags_to_snapshots FsxOpenzfsVolume#copy_tags_to_snapshots}.

---

##### `dataCompressionType`<sup>Optional</sup> <a name="dataCompressionType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.dataCompressionType"></a>

```typescript
public readonly dataCompressionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#data_compression_type FsxOpenzfsVolume#data_compression_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#id FsxOpenzfsVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nfsExports`<sup>Optional</sup> <a name="nfsExports" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.nfsExports"></a>

```typescript
public readonly nfsExports: FsxOpenzfsVolumeNfsExports;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a>

nfs_exports block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#nfs_exports FsxOpenzfsVolume#nfs_exports}

---

##### `originSnapshot`<sup>Optional</sup> <a name="originSnapshot" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.originSnapshot"></a>

```typescript
public readonly originSnapshot: FsxOpenzfsVolumeOriginSnapshot;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a>

origin_snapshot block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#origin_snapshot FsxOpenzfsVolume#origin_snapshot}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#read_only FsxOpenzfsVolume#read_only}.

---

##### `recordSizeKib`<sup>Optional</sup> <a name="recordSizeKib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.recordSizeKib"></a>

```typescript
public readonly recordSizeKib: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#record_size_kib FsxOpenzfsVolume#record_size_kib}.

---

##### `storageCapacityQuotaGib`<sup>Optional</sup> <a name="storageCapacityQuotaGib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.storageCapacityQuotaGib"></a>

```typescript
public readonly storageCapacityQuotaGib: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_quota_gib FsxOpenzfsVolume#storage_capacity_quota_gib}.

---

##### `storageCapacityReservationGib`<sup>Optional</sup> <a name="storageCapacityReservationGib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.storageCapacityReservationGib"></a>

```typescript
public readonly storageCapacityReservationGib: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_reservation_gib FsxOpenzfsVolume#storage_capacity_reservation_gib}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#tags FsxOpenzfsVolume#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#tags_all FsxOpenzfsVolume#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FsxOpenzfsVolumeTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts">FsxOpenzfsVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#timeouts FsxOpenzfsVolume#timeouts}

---

##### `userAndGroupQuotas`<sup>Optional</sup> <a name="userAndGroupQuotas" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.userAndGroupQuotas"></a>

```typescript
public readonly userAndGroupQuotas: IResolvable | FsxOpenzfsVolumeUserAndGroupQuotas[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas">FsxOpenzfsVolumeUserAndGroupQuotas</a>[]

user_and_group_quotas block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#user_and_group_quotas FsxOpenzfsVolume#user_and_group_quotas}

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#volume_type FsxOpenzfsVolume#volume_type}.

---

### FsxOpenzfsVolumeNfsExports <a name="FsxOpenzfsVolumeNfsExports" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports.Initializer"></a>

```typescript
import { fsxOpenzfsVolume } from '@cdktf/provider-aws'

const fsxOpenzfsVolumeNfsExports: fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports.property.clientConfigurations">clientConfigurations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations">FsxOpenzfsVolumeNfsExportsClientConfigurations</a>[]</code> | client_configurations block. |

---

##### `clientConfigurations`<sup>Required</sup> <a name="clientConfigurations" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports.property.clientConfigurations"></a>

```typescript
public readonly clientConfigurations: IResolvable | FsxOpenzfsVolumeNfsExportsClientConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations">FsxOpenzfsVolumeNfsExportsClientConfigurations</a>[]

client_configurations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#client_configurations FsxOpenzfsVolume#client_configurations}

---

### FsxOpenzfsVolumeNfsExportsClientConfigurations <a name="FsxOpenzfsVolumeNfsExportsClientConfigurations" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations.Initializer"></a>

```typescript
import { fsxOpenzfsVolume } from '@cdktf/provider-aws'

const fsxOpenzfsVolumeNfsExportsClientConfigurations: fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations.property.clients">clients</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#clients FsxOpenzfsVolume#clients}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations.property.options">options</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#options FsxOpenzfsVolume#options}. |

---

##### `clients`<sup>Required</sup> <a name="clients" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations.property.clients"></a>

```typescript
public readonly clients: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#clients FsxOpenzfsVolume#clients}.

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations.property.options"></a>

```typescript
public readonly options: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#options FsxOpenzfsVolume#options}.

---

### FsxOpenzfsVolumeOriginSnapshot <a name="FsxOpenzfsVolumeOriginSnapshot" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot.Initializer"></a>

```typescript
import { fsxOpenzfsVolume } from '@cdktf/provider-aws'

const fsxOpenzfsVolumeOriginSnapshot: fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot.property.copyStrategy">copyStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#copy_strategy FsxOpenzfsVolume#copy_strategy}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot.property.snapshotArn">snapshotArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#snapshot_arn FsxOpenzfsVolume#snapshot_arn}. |

---

##### `copyStrategy`<sup>Required</sup> <a name="copyStrategy" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot.property.copyStrategy"></a>

```typescript
public readonly copyStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#copy_strategy FsxOpenzfsVolume#copy_strategy}.

---

##### `snapshotArn`<sup>Required</sup> <a name="snapshotArn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot.property.snapshotArn"></a>

```typescript
public readonly snapshotArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#snapshot_arn FsxOpenzfsVolume#snapshot_arn}.

---

### FsxOpenzfsVolumeTimeouts <a name="FsxOpenzfsVolumeTimeouts" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.Initializer"></a>

```typescript
import { fsxOpenzfsVolume } from '@cdktf/provider-aws'

const fsxOpenzfsVolumeTimeouts: fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#create FsxOpenzfsVolume#create}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#delete FsxOpenzfsVolume#delete}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#update FsxOpenzfsVolume#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#create FsxOpenzfsVolume#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#delete FsxOpenzfsVolume#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#update FsxOpenzfsVolume#update}.

---

### FsxOpenzfsVolumeUserAndGroupQuotas <a name="FsxOpenzfsVolumeUserAndGroupQuotas" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.Initializer"></a>

```typescript
import { fsxOpenzfsVolume } from '@cdktf/provider-aws'

const fsxOpenzfsVolumeUserAndGroupQuotas: fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.property.id">id</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#id FsxOpenzfsVolume#id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.property.storageCapacityQuotaGib">storageCapacityQuotaGib</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_quota_gib FsxOpenzfsVolume#storage_capacity_quota_gib}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#type FsxOpenzfsVolume#type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#id FsxOpenzfsVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storageCapacityQuotaGib`<sup>Required</sup> <a name="storageCapacityQuotaGib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.property.storageCapacityQuotaGib"></a>

```typescript
public readonly storageCapacityQuotaGib: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_quota_gib FsxOpenzfsVolume#storage_capacity_quota_gib}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#type FsxOpenzfsVolume#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxOpenzfsVolumeNfsExportsClientConfigurationsList <a name="FsxOpenzfsVolumeNfsExportsClientConfigurationsList" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer"></a>

```typescript
import { fsxOpenzfsVolume } from '@cdktf/provider-aws'

new fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.get"></a>

```typescript
public get(index: number): FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations">FsxOpenzfsVolumeNfsExportsClientConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FsxOpenzfsVolumeNfsExportsClientConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations">FsxOpenzfsVolumeNfsExportsClientConfigurations</a>[]

---


### FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference <a name="FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer"></a>

```typescript
import { fsxOpenzfsVolume } from '@cdktf/provider-aws'

new fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.clientsInput">clientsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.optionsInput">optionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.clients">clients</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.options">options</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations">FsxOpenzfsVolumeNfsExportsClientConfigurations</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientsInput`<sup>Optional</sup> <a name="clientsInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.clientsInput"></a>

```typescript
public readonly clientsInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.optionsInput"></a>

```typescript
public readonly optionsInput: string[];
```

- *Type:* string[]

---

##### `clients`<sup>Required</sup> <a name="clients" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.clients"></a>

```typescript
public readonly clients: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.options"></a>

```typescript
public readonly options: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FsxOpenzfsVolumeNfsExportsClientConfigurations | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations">FsxOpenzfsVolumeNfsExportsClientConfigurations</a> | cdktf.IResolvable

---


### FsxOpenzfsVolumeNfsExportsOutputReference <a name="FsxOpenzfsVolumeNfsExportsOutputReference" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.Initializer"></a>

```typescript
import { fsxOpenzfsVolume } from '@cdktf/provider-aws'

new fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.putClientConfigurations">putClientConfigurations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientConfigurations` <a name="putClientConfigurations" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.putClientConfigurations"></a>

```typescript
public putClientConfigurations(value: IResolvable | FsxOpenzfsVolumeNfsExportsClientConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.putClientConfigurations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations">FsxOpenzfsVolumeNfsExportsClientConfigurations</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.clientConfigurations">clientConfigurations</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList">FsxOpenzfsVolumeNfsExportsClientConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.clientConfigurationsInput">clientConfigurationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations">FsxOpenzfsVolumeNfsExportsClientConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientConfigurations`<sup>Required</sup> <a name="clientConfigurations" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.clientConfigurations"></a>

```typescript
public readonly clientConfigurations: FsxOpenzfsVolumeNfsExportsClientConfigurationsList;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList">FsxOpenzfsVolumeNfsExportsClientConfigurationsList</a>

---

##### `clientConfigurationsInput`<sup>Optional</sup> <a name="clientConfigurationsInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.clientConfigurationsInput"></a>

```typescript
public readonly clientConfigurationsInput: IResolvable | FsxOpenzfsVolumeNfsExportsClientConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations">FsxOpenzfsVolumeNfsExportsClientConfigurations</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FsxOpenzfsVolumeNfsExports;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a>

---


### FsxOpenzfsVolumeOriginSnapshotOutputReference <a name="FsxOpenzfsVolumeOriginSnapshotOutputReference" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.Initializer"></a>

```typescript
import { fsxOpenzfsVolume } from '@cdktf/provider-aws'

new fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.copyStrategyInput">copyStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.snapshotArnInput">snapshotArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.copyStrategy">copyStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.snapshotArn">snapshotArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `copyStrategyInput`<sup>Optional</sup> <a name="copyStrategyInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.copyStrategyInput"></a>

```typescript
public readonly copyStrategyInput: string;
```

- *Type:* string

---

##### `snapshotArnInput`<sup>Optional</sup> <a name="snapshotArnInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.snapshotArnInput"></a>

```typescript
public readonly snapshotArnInput: string;
```

- *Type:* string

---

##### `copyStrategy`<sup>Required</sup> <a name="copyStrategy" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.copyStrategy"></a>

```typescript
public readonly copyStrategy: string;
```

- *Type:* string

---

##### `snapshotArn`<sup>Required</sup> <a name="snapshotArn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.snapshotArn"></a>

```typescript
public readonly snapshotArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FsxOpenzfsVolumeOriginSnapshot;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a>

---


### FsxOpenzfsVolumeTimeoutsOutputReference <a name="FsxOpenzfsVolumeTimeoutsOutputReference" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.Initializer"></a>

```typescript
import { fsxOpenzfsVolume } from '@cdktf/provider-aws'

new fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts">FsxOpenzfsVolumeTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FsxOpenzfsVolumeTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts">FsxOpenzfsVolumeTimeouts</a> | cdktf.IResolvable

---


### FsxOpenzfsVolumeUserAndGroupQuotasList <a name="FsxOpenzfsVolumeUserAndGroupQuotasList" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer"></a>

```typescript
import { fsxOpenzfsVolume } from '@cdktf/provider-aws'

new fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.get"></a>

```typescript
public get(index: number): FsxOpenzfsVolumeUserAndGroupQuotasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas">FsxOpenzfsVolumeUserAndGroupQuotas</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FsxOpenzfsVolumeUserAndGroupQuotas[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas">FsxOpenzfsVolumeUserAndGroupQuotas</a>[]

---


### FsxOpenzfsVolumeUserAndGroupQuotasOutputReference <a name="FsxOpenzfsVolumeUserAndGroupQuotasOutputReference" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer"></a>

```typescript
import { fsxOpenzfsVolume } from '@cdktf/provider-aws'

new fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.idInput">idInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGibInput">storageCapacityQuotaGibInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGib">storageCapacityQuotaGib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas">FsxOpenzfsVolumeUserAndGroupQuotas</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.idInput"></a>

```typescript
public readonly idInput: number;
```

- *Type:* number

---

##### `storageCapacityQuotaGibInput`<sup>Optional</sup> <a name="storageCapacityQuotaGibInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGibInput"></a>

```typescript
public readonly storageCapacityQuotaGibInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `storageCapacityQuotaGib`<sup>Required</sup> <a name="storageCapacityQuotaGib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGib"></a>

```typescript
public readonly storageCapacityQuotaGib: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FsxOpenzfsVolumeUserAndGroupQuotas | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas">FsxOpenzfsVolumeUserAndGroupQuotas</a> | cdktf.IResolvable

---



