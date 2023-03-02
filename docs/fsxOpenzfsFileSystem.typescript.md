# `fsxOpenzfsFileSystem` Submodule <a name="`fsxOpenzfsFileSystem` Submodule" id="@cdktf/provider-aws.fsxOpenzfsFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxOpenzfsFileSystem <a name="FsxOpenzfsFileSystem" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system aws_fsx_openzfs_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer"></a>

```typescript
import { fsxOpenzfsFileSystem } from '@cdktf/provider-aws'

new fsxOpenzfsFileSystem.FsxOpenzfsFileSystem(scope: Construct, id: string, config: FsxOpenzfsFileSystemConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig">FsxOpenzfsFileSystemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig">FsxOpenzfsFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.putDiskIopsConfiguration">putDiskIopsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.putRootVolumeConfiguration">putRootVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetAutomaticBackupRetentionDays">resetAutomaticBackupRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetBackupId">resetBackupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetCopyTagsToBackups">resetCopyTagsToBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetCopyTagsToVolumes">resetCopyTagsToVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetDailyAutomaticBackupStartTime">resetDailyAutomaticBackupStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetDiskIopsConfiguration">resetDiskIopsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetRootVolumeConfiguration">resetRootVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetStorageCapacity">resetStorageCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetStorageType">resetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetWeeklyMaintenanceStartTime">resetWeeklyMaintenanceStartTime</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDiskIopsConfiguration` <a name="putDiskIopsConfiguration" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.putDiskIopsConfiguration"></a>

```typescript
public putDiskIopsConfiguration(value: FsxOpenzfsFileSystemDiskIopsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.putDiskIopsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfiguration">FsxOpenzfsFileSystemDiskIopsConfiguration</a>

---

##### `putRootVolumeConfiguration` <a name="putRootVolumeConfiguration" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.putRootVolumeConfiguration"></a>

```typescript
public putRootVolumeConfiguration(value: FsxOpenzfsFileSystemRootVolumeConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.putRootVolumeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration">FsxOpenzfsFileSystemRootVolumeConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.putTimeouts"></a>

```typescript
public putTimeouts(value: FsxOpenzfsFileSystemTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeouts">FsxOpenzfsFileSystemTimeouts</a>

---

##### `resetAutomaticBackupRetentionDays` <a name="resetAutomaticBackupRetentionDays" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetAutomaticBackupRetentionDays"></a>

```typescript
public resetAutomaticBackupRetentionDays(): void
```

##### `resetBackupId` <a name="resetBackupId" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetBackupId"></a>

```typescript
public resetBackupId(): void
```

##### `resetCopyTagsToBackups` <a name="resetCopyTagsToBackups" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetCopyTagsToBackups"></a>

```typescript
public resetCopyTagsToBackups(): void
```

##### `resetCopyTagsToVolumes` <a name="resetCopyTagsToVolumes" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetCopyTagsToVolumes"></a>

```typescript
public resetCopyTagsToVolumes(): void
```

##### `resetDailyAutomaticBackupStartTime` <a name="resetDailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetDailyAutomaticBackupStartTime"></a>

```typescript
public resetDailyAutomaticBackupStartTime(): void
```

##### `resetDiskIopsConfiguration` <a name="resetDiskIopsConfiguration" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetDiskIopsConfiguration"></a>

```typescript
public resetDiskIopsConfiguration(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetRootVolumeConfiguration` <a name="resetRootVolumeConfiguration" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetRootVolumeConfiguration"></a>

```typescript
public resetRootVolumeConfiguration(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetStorageCapacity` <a name="resetStorageCapacity" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetStorageCapacity"></a>

```typescript
public resetStorageCapacity(): void
```

##### `resetStorageType` <a name="resetStorageType" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetStorageType"></a>

```typescript
public resetStorageType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWeeklyMaintenanceStartTime` <a name="resetWeeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.resetWeeklyMaintenanceStartTime"></a>

```typescript
public resetWeeklyMaintenanceStartTime(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.isConstruct"></a>

```typescript
import { fsxOpenzfsFileSystem } from '@cdktf/provider-aws'

fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.isTerraformElement"></a>

```typescript
import { fsxOpenzfsFileSystem } from '@cdktf/provider-aws'

fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.isTerraformResource"></a>

```typescript
import { fsxOpenzfsFileSystem } from '@cdktf/provider-aws'

fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.diskIopsConfiguration">diskIopsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference">FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.networkInterfaceIds">networkInterfaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.rootVolumeConfiguration">rootVolumeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference">FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.rootVolumeId">rootVolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference">FsxOpenzfsFileSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.automaticBackupRetentionDaysInput">automaticBackupRetentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.backupIdInput">backupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.copyTagsToBackupsInput">copyTagsToBackupsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.copyTagsToVolumesInput">copyTagsToVolumesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.dailyAutomaticBackupStartTimeInput">dailyAutomaticBackupStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.deploymentTypeInput">deploymentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.diskIopsConfigurationInput">diskIopsConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfiguration">FsxOpenzfsFileSystemDiskIopsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.rootVolumeConfigurationInput">rootVolumeConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration">FsxOpenzfsFileSystemRootVolumeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.storageCapacityInput">storageCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.storageTypeInput">storageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.throughputCapacityInput">throughputCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeouts">FsxOpenzfsFileSystemTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.weeklyMaintenanceStartTimeInput">weeklyMaintenanceStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.automaticBackupRetentionDays">automaticBackupRetentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.backupId">backupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.copyTagsToBackups">copyTagsToBackups</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.copyTagsToVolumes">copyTagsToVolumes</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.dailyAutomaticBackupStartTime">dailyAutomaticBackupStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.deploymentType">deploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.storageCapacity">storageCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.throughputCapacity">throughputCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.weeklyMaintenanceStartTime">weeklyMaintenanceStartTime</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `diskIopsConfiguration`<sup>Required</sup> <a name="diskIopsConfiguration" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.diskIopsConfiguration"></a>

```typescript
public readonly diskIopsConfiguration: FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference">FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference</a>

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="networkInterfaceIds" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.networkInterfaceIds"></a>

```typescript
public readonly networkInterfaceIds: string[];
```

- *Type:* string[]

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `rootVolumeConfiguration`<sup>Required</sup> <a name="rootVolumeConfiguration" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.rootVolumeConfiguration"></a>

```typescript
public readonly rootVolumeConfiguration: FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference">FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference</a>

---

##### `rootVolumeId`<sup>Required</sup> <a name="rootVolumeId" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.rootVolumeId"></a>

```typescript
public readonly rootVolumeId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.timeouts"></a>

```typescript
public readonly timeouts: FsxOpenzfsFileSystemTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference">FsxOpenzfsFileSystemTimeoutsOutputReference</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `automaticBackupRetentionDaysInput`<sup>Optional</sup> <a name="automaticBackupRetentionDaysInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.automaticBackupRetentionDaysInput"></a>

```typescript
public readonly automaticBackupRetentionDaysInput: number;
```

- *Type:* number

---

##### `backupIdInput`<sup>Optional</sup> <a name="backupIdInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.backupIdInput"></a>

```typescript
public readonly backupIdInput: string;
```

- *Type:* string

---

##### `copyTagsToBackupsInput`<sup>Optional</sup> <a name="copyTagsToBackupsInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.copyTagsToBackupsInput"></a>

```typescript
public readonly copyTagsToBackupsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `copyTagsToVolumesInput`<sup>Optional</sup> <a name="copyTagsToVolumesInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.copyTagsToVolumesInput"></a>

```typescript
public readonly copyTagsToVolumesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dailyAutomaticBackupStartTimeInput`<sup>Optional</sup> <a name="dailyAutomaticBackupStartTimeInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.dailyAutomaticBackupStartTimeInput"></a>

```typescript
public readonly dailyAutomaticBackupStartTimeInput: string;
```

- *Type:* string

---

##### `deploymentTypeInput`<sup>Optional</sup> <a name="deploymentTypeInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.deploymentTypeInput"></a>

```typescript
public readonly deploymentTypeInput: string;
```

- *Type:* string

---

##### `diskIopsConfigurationInput`<sup>Optional</sup> <a name="diskIopsConfigurationInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.diskIopsConfigurationInput"></a>

```typescript
public readonly diskIopsConfigurationInput: FsxOpenzfsFileSystemDiskIopsConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfiguration">FsxOpenzfsFileSystemDiskIopsConfiguration</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `rootVolumeConfigurationInput`<sup>Optional</sup> <a name="rootVolumeConfigurationInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.rootVolumeConfigurationInput"></a>

```typescript
public readonly rootVolumeConfigurationInput: FsxOpenzfsFileSystemRootVolumeConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration">FsxOpenzfsFileSystemRootVolumeConfiguration</a>

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `storageCapacityInput`<sup>Optional</sup> <a name="storageCapacityInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.storageCapacityInput"></a>

```typescript
public readonly storageCapacityInput: number;
```

- *Type:* number

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.storageTypeInput"></a>

```typescript
public readonly storageTypeInput: string;
```

- *Type:* string

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `throughputCapacityInput`<sup>Optional</sup> <a name="throughputCapacityInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.throughputCapacityInput"></a>

```typescript
public readonly throughputCapacityInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: FsxOpenzfsFileSystemTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeouts">FsxOpenzfsFileSystemTimeouts</a> | cdktf.IResolvable

---

##### `weeklyMaintenanceStartTimeInput`<sup>Optional</sup> <a name="weeklyMaintenanceStartTimeInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.weeklyMaintenanceStartTimeInput"></a>

```typescript
public readonly weeklyMaintenanceStartTimeInput: string;
```

- *Type:* string

---

##### `automaticBackupRetentionDays`<sup>Required</sup> <a name="automaticBackupRetentionDays" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.automaticBackupRetentionDays"></a>

```typescript
public readonly automaticBackupRetentionDays: number;
```

- *Type:* number

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.backupId"></a>

```typescript
public readonly backupId: string;
```

- *Type:* string

---

##### `copyTagsToBackups`<sup>Required</sup> <a name="copyTagsToBackups" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.copyTagsToBackups"></a>

```typescript
public readonly copyTagsToBackups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `copyTagsToVolumes`<sup>Required</sup> <a name="copyTagsToVolumes" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.copyTagsToVolumes"></a>

```typescript
public readonly copyTagsToVolumes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dailyAutomaticBackupStartTime`<sup>Required</sup> <a name="dailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.dailyAutomaticBackupStartTime"></a>

```typescript
public readonly dailyAutomaticBackupStartTime: string;
```

- *Type:* string

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `storageCapacity`<sup>Required</sup> <a name="storageCapacity" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.storageCapacity"></a>

```typescript
public readonly storageCapacity: number;
```

- *Type:* number

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `throughputCapacity`<sup>Required</sup> <a name="throughputCapacity" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.throughputCapacity"></a>

```typescript
public readonly throughputCapacity: number;
```

- *Type:* number

---

##### `weeklyMaintenanceStartTime`<sup>Required</sup> <a name="weeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.weeklyMaintenanceStartTime"></a>

```typescript
public readonly weeklyMaintenanceStartTime: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystem.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FsxOpenzfsFileSystemConfig <a name="FsxOpenzfsFileSystemConfig" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.Initializer"></a>

```typescript
import { fsxOpenzfsFileSystem } from '@cdktf/provider-aws'

const fsxOpenzfsFileSystemConfig: fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.deploymentType">deploymentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#deployment_type FsxOpenzfsFileSystem#deployment_type}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#subnet_ids FsxOpenzfsFileSystem#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.throughputCapacity">throughputCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#throughput_capacity FsxOpenzfsFileSystem#throughput_capacity}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.automaticBackupRetentionDays">automaticBackupRetentionDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#automatic_backup_retention_days FsxOpenzfsFileSystem#automatic_backup_retention_days}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.backupId">backupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#backup_id FsxOpenzfsFileSystem#backup_id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.copyTagsToBackups">copyTagsToBackups</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#copy_tags_to_backups FsxOpenzfsFileSystem#copy_tags_to_backups}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.copyTagsToVolumes">copyTagsToVolumes</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#copy_tags_to_volumes FsxOpenzfsFileSystem#copy_tags_to_volumes}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.dailyAutomaticBackupStartTime">dailyAutomaticBackupStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#daily_automatic_backup_start_time FsxOpenzfsFileSystem#daily_automatic_backup_start_time}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.diskIopsConfiguration">diskIopsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfiguration">FsxOpenzfsFileSystemDiskIopsConfiguration</a></code> | disk_iops_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#id FsxOpenzfsFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#kms_key_id FsxOpenzfsFileSystem#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.rootVolumeConfiguration">rootVolumeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration">FsxOpenzfsFileSystemRootVolumeConfiguration</a></code> | root_volume_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#security_group_ids FsxOpenzfsFileSystem#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.storageCapacity">storageCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#storage_capacity FsxOpenzfsFileSystem#storage_capacity}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.storageType">storageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#storage_type FsxOpenzfsFileSystem#storage_type}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#tags FsxOpenzfsFileSystem#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#tags_all FsxOpenzfsFileSystem#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeouts">FsxOpenzfsFileSystemTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.weeklyMaintenanceStartTime">weeklyMaintenanceStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#weekly_maintenance_start_time FsxOpenzfsFileSystem#weekly_maintenance_start_time}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#deployment_type FsxOpenzfsFileSystem#deployment_type}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#subnet_ids FsxOpenzfsFileSystem#subnet_ids}.

---

##### `throughputCapacity`<sup>Required</sup> <a name="throughputCapacity" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.throughputCapacity"></a>

```typescript
public readonly throughputCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#throughput_capacity FsxOpenzfsFileSystem#throughput_capacity}.

---

##### `automaticBackupRetentionDays`<sup>Optional</sup> <a name="automaticBackupRetentionDays" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.automaticBackupRetentionDays"></a>

```typescript
public readonly automaticBackupRetentionDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#automatic_backup_retention_days FsxOpenzfsFileSystem#automatic_backup_retention_days}.

---

##### `backupId`<sup>Optional</sup> <a name="backupId" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.backupId"></a>

```typescript
public readonly backupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#backup_id FsxOpenzfsFileSystem#backup_id}.

---

##### `copyTagsToBackups`<sup>Optional</sup> <a name="copyTagsToBackups" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.copyTagsToBackups"></a>

```typescript
public readonly copyTagsToBackups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#copy_tags_to_backups FsxOpenzfsFileSystem#copy_tags_to_backups}.

---

##### `copyTagsToVolumes`<sup>Optional</sup> <a name="copyTagsToVolumes" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.copyTagsToVolumes"></a>

```typescript
public readonly copyTagsToVolumes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#copy_tags_to_volumes FsxOpenzfsFileSystem#copy_tags_to_volumes}.

---

##### `dailyAutomaticBackupStartTime`<sup>Optional</sup> <a name="dailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.dailyAutomaticBackupStartTime"></a>

```typescript
public readonly dailyAutomaticBackupStartTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#daily_automatic_backup_start_time FsxOpenzfsFileSystem#daily_automatic_backup_start_time}.

---

##### `diskIopsConfiguration`<sup>Optional</sup> <a name="diskIopsConfiguration" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.diskIopsConfiguration"></a>

```typescript
public readonly diskIopsConfiguration: FsxOpenzfsFileSystemDiskIopsConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfiguration">FsxOpenzfsFileSystemDiskIopsConfiguration</a>

disk_iops_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#disk_iops_configuration FsxOpenzfsFileSystem#disk_iops_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#id FsxOpenzfsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#kms_key_id FsxOpenzfsFileSystem#kms_key_id}.

---

##### `rootVolumeConfiguration`<sup>Optional</sup> <a name="rootVolumeConfiguration" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.rootVolumeConfiguration"></a>

```typescript
public readonly rootVolumeConfiguration: FsxOpenzfsFileSystemRootVolumeConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration">FsxOpenzfsFileSystemRootVolumeConfiguration</a>

root_volume_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#root_volume_configuration FsxOpenzfsFileSystem#root_volume_configuration}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#security_group_ids FsxOpenzfsFileSystem#security_group_ids}.

---

##### `storageCapacity`<sup>Optional</sup> <a name="storageCapacity" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.storageCapacity"></a>

```typescript
public readonly storageCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#storage_capacity FsxOpenzfsFileSystem#storage_capacity}.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#storage_type FsxOpenzfsFileSystem#storage_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#tags FsxOpenzfsFileSystem#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#tags_all FsxOpenzfsFileSystem#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FsxOpenzfsFileSystemTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeouts">FsxOpenzfsFileSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#timeouts FsxOpenzfsFileSystem#timeouts}

---

##### `weeklyMaintenanceStartTime`<sup>Optional</sup> <a name="weeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemConfig.property.weeklyMaintenanceStartTime"></a>

```typescript
public readonly weeklyMaintenanceStartTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#weekly_maintenance_start_time FsxOpenzfsFileSystem#weekly_maintenance_start_time}.

---

### FsxOpenzfsFileSystemDiskIopsConfiguration <a name="FsxOpenzfsFileSystemDiskIopsConfiguration" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfiguration.Initializer"></a>

```typescript
import { fsxOpenzfsFileSystem } from '@cdktf/provider-aws'

const fsxOpenzfsFileSystemDiskIopsConfiguration: fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfiguration.property.iops">iops</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#iops FsxOpenzfsFileSystem#iops}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfiguration.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#mode FsxOpenzfsFileSystem#mode}. |

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfiguration.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#iops FsxOpenzfsFileSystem#iops}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfiguration.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#mode FsxOpenzfsFileSystem#mode}.

---

### FsxOpenzfsFileSystemRootVolumeConfiguration <a name="FsxOpenzfsFileSystemRootVolumeConfiguration" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration.Initializer"></a>

```typescript
import { fsxOpenzfsFileSystem } from '@cdktf/provider-aws'

const fsxOpenzfsFileSystemRootVolumeConfiguration: fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration.property.copyTagsToSnapshots">copyTagsToSnapshots</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#copy_tags_to_snapshots FsxOpenzfsFileSystem#copy_tags_to_snapshots}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration.property.dataCompressionType">dataCompressionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#data_compression_type FsxOpenzfsFileSystem#data_compression_type}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration.property.nfsExports">nfsExports</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports</a></code> | nfs_exports block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#read_only FsxOpenzfsFileSystem#read_only}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration.property.recordSizeKib">recordSizeKib</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#record_size_kib FsxOpenzfsFileSystem#record_size_kib}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration.property.userAndGroupQuotas">userAndGroupQuotas</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas">FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas</a>[]</code> | user_and_group_quotas block. |

---

##### `copyTagsToSnapshots`<sup>Optional</sup> <a name="copyTagsToSnapshots" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration.property.copyTagsToSnapshots"></a>

```typescript
public readonly copyTagsToSnapshots: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#copy_tags_to_snapshots FsxOpenzfsFileSystem#copy_tags_to_snapshots}.

---

##### `dataCompressionType`<sup>Optional</sup> <a name="dataCompressionType" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration.property.dataCompressionType"></a>

```typescript
public readonly dataCompressionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#data_compression_type FsxOpenzfsFileSystem#data_compression_type}.

---

##### `nfsExports`<sup>Optional</sup> <a name="nfsExports" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration.property.nfsExports"></a>

```typescript
public readonly nfsExports: FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports</a>

nfs_exports block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#nfs_exports FsxOpenzfsFileSystem#nfs_exports}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#read_only FsxOpenzfsFileSystem#read_only}.

---

##### `recordSizeKib`<sup>Optional</sup> <a name="recordSizeKib" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration.property.recordSizeKib"></a>

```typescript
public readonly recordSizeKib: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#record_size_kib FsxOpenzfsFileSystem#record_size_kib}.

---

##### `userAndGroupQuotas`<sup>Optional</sup> <a name="userAndGroupQuotas" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration.property.userAndGroupQuotas"></a>

```typescript
public readonly userAndGroupQuotas: IResolvable | FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas">FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas</a>[]

user_and_group_quotas block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#user_and_group_quotas FsxOpenzfsFileSystem#user_and_group_quotas}

---

### FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports <a name="FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports.Initializer"></a>

```typescript
import { fsxOpenzfsFileSystem } from '@cdktf/provider-aws'

const fsxOpenzfsFileSystemRootVolumeConfigurationNfsExports: fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports.property.clientConfigurations">clientConfigurations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations</a>[]</code> | client_configurations block. |

---

##### `clientConfigurations`<sup>Required</sup> <a name="clientConfigurations" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports.property.clientConfigurations"></a>

```typescript
public readonly clientConfigurations: IResolvable | FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations</a>[]

client_configurations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#client_configurations FsxOpenzfsFileSystem#client_configurations}

---

### FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations <a name="FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations.Initializer"></a>

```typescript
import { fsxOpenzfsFileSystem } from '@cdktf/provider-aws'

const fsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations: fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations.property.clients">clients</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#clients FsxOpenzfsFileSystem#clients}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations.property.options">options</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#options FsxOpenzfsFileSystem#options}. |

---

##### `clients`<sup>Required</sup> <a name="clients" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations.property.clients"></a>

```typescript
public readonly clients: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#clients FsxOpenzfsFileSystem#clients}.

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations.property.options"></a>

```typescript
public readonly options: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#options FsxOpenzfsFileSystem#options}.

---

### FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas <a name="FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas.Initializer"></a>

```typescript
import { fsxOpenzfsFileSystem } from '@cdktf/provider-aws'

const fsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas: fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas.property.id">id</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#id FsxOpenzfsFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas.property.storageCapacityQuotaGib">storageCapacityQuotaGib</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#storage_capacity_quota_gib FsxOpenzfsFileSystem#storage_capacity_quota_gib}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#type FsxOpenzfsFileSystem#type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#id FsxOpenzfsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storageCapacityQuotaGib`<sup>Required</sup> <a name="storageCapacityQuotaGib" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas.property.storageCapacityQuotaGib"></a>

```typescript
public readonly storageCapacityQuotaGib: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#storage_capacity_quota_gib FsxOpenzfsFileSystem#storage_capacity_quota_gib}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#type FsxOpenzfsFileSystem#type}.

---

### FsxOpenzfsFileSystemTimeouts <a name="FsxOpenzfsFileSystemTimeouts" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeouts.Initializer"></a>

```typescript
import { fsxOpenzfsFileSystem } from '@cdktf/provider-aws'

const fsxOpenzfsFileSystemTimeouts: fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#create FsxOpenzfsFileSystem#create}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#delete FsxOpenzfsFileSystem#delete}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#update FsxOpenzfsFileSystem#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#create FsxOpenzfsFileSystem#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#delete FsxOpenzfsFileSystem#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_file_system#update FsxOpenzfsFileSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference <a name="FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.Initializer"></a>

```typescript
import { fsxOpenzfsFileSystem } from '@cdktf/provider-aws'

new fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.resetIops"></a>

```typescript
public resetIops(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.property.iopsInput">iopsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfiguration">FsxOpenzfsFileSystemDiskIopsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.property.iopsInput"></a>

```typescript
public readonly iopsInput: number;
```

- *Type:* number

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FsxOpenzfsFileSystemDiskIopsConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemDiskIopsConfiguration">FsxOpenzfsFileSystemDiskIopsConfiguration</a>

---


### FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList <a name="FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.Initializer"></a>

```typescript
import { fsxOpenzfsFileSystem } from '@cdktf/provider-aws'

new fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.get"></a>

```typescript
public get(index: number): FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations</a>[]

---


### FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference <a name="FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.Initializer"></a>

```typescript
import { fsxOpenzfsFileSystem } from '@cdktf/provider-aws'

new fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.property.clientsInput">clientsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.property.optionsInput">optionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.property.clients">clients</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.property.options">options</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientsInput`<sup>Optional</sup> <a name="clientsInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.property.clientsInput"></a>

```typescript
public readonly clientsInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.property.optionsInput"></a>

```typescript
public readonly optionsInput: string[];
```

- *Type:* string[]

---

##### `clients`<sup>Required</sup> <a name="clients" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.property.clients"></a>

```typescript
public readonly clients: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.property.options"></a>

```typescript
public readonly options: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations</a> | cdktf.IResolvable

---


### FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference <a name="FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.Initializer"></a>

```typescript
import { fsxOpenzfsFileSystem } from '@cdktf/provider-aws'

new fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.putClientConfigurations">putClientConfigurations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientConfigurations` <a name="putClientConfigurations" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.putClientConfigurations"></a>

```typescript
public putClientConfigurations(value: IResolvable | FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.putClientConfigurations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.property.clientConfigurations">clientConfigurations</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.property.clientConfigurationsInput">clientConfigurationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientConfigurations`<sup>Required</sup> <a name="clientConfigurations" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.property.clientConfigurations"></a>

```typescript
public readonly clientConfigurations: FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurationsList</a>

---

##### `clientConfigurationsInput`<sup>Optional</sup> <a name="clientConfigurationsInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.property.clientConfigurationsInput"></a>

```typescript
public readonly clientConfigurationsInput: IResolvable | FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsClientConfigurations</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports</a>

---


### FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference <a name="FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.Initializer"></a>

```typescript
import { fsxOpenzfsFileSystem } from '@cdktf/provider-aws'

new fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.putNfsExports">putNfsExports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.putUserAndGroupQuotas">putUserAndGroupQuotas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.resetCopyTagsToSnapshots">resetCopyTagsToSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.resetDataCompressionType">resetDataCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.resetNfsExports">resetNfsExports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.resetRecordSizeKib">resetRecordSizeKib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.resetUserAndGroupQuotas">resetUserAndGroupQuotas</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNfsExports` <a name="putNfsExports" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.putNfsExports"></a>

```typescript
public putNfsExports(value: FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.putNfsExports.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports</a>

---

##### `putUserAndGroupQuotas` <a name="putUserAndGroupQuotas" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.putUserAndGroupQuotas"></a>

```typescript
public putUserAndGroupQuotas(value: IResolvable | FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.putUserAndGroupQuotas.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas">FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas</a>[]

---

##### `resetCopyTagsToSnapshots` <a name="resetCopyTagsToSnapshots" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.resetCopyTagsToSnapshots"></a>

```typescript
public resetCopyTagsToSnapshots(): void
```

##### `resetDataCompressionType` <a name="resetDataCompressionType" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.resetDataCompressionType"></a>

```typescript
public resetDataCompressionType(): void
```

##### `resetNfsExports` <a name="resetNfsExports" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.resetNfsExports"></a>

```typescript
public resetNfsExports(): void
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.resetReadOnly"></a>

```typescript
public resetReadOnly(): void
```

##### `resetRecordSizeKib` <a name="resetRecordSizeKib" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.resetRecordSizeKib"></a>

```typescript
public resetRecordSizeKib(): void
```

##### `resetUserAndGroupQuotas` <a name="resetUserAndGroupQuotas" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.resetUserAndGroupQuotas"></a>

```typescript
public resetUserAndGroupQuotas(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.nfsExports">nfsExports</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.userAndGroupQuotas">userAndGroupQuotas</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList">FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.copyTagsToSnapshotsInput">copyTagsToSnapshotsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.dataCompressionTypeInput">dataCompressionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.nfsExportsInput">nfsExportsInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.recordSizeKibInput">recordSizeKibInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.userAndGroupQuotasInput">userAndGroupQuotasInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas">FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.copyTagsToSnapshots">copyTagsToSnapshots</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.dataCompressionType">dataCompressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.readOnly">readOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.recordSizeKib">recordSizeKib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration">FsxOpenzfsFileSystemRootVolumeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nfsExports`<sup>Required</sup> <a name="nfsExports" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.nfsExports"></a>

```typescript
public readonly nfsExports: FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExportsOutputReference</a>

---

##### `userAndGroupQuotas`<sup>Required</sup> <a name="userAndGroupQuotas" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.userAndGroupQuotas"></a>

```typescript
public readonly userAndGroupQuotas: FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList">FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList</a>

---

##### `copyTagsToSnapshotsInput`<sup>Optional</sup> <a name="copyTagsToSnapshotsInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.copyTagsToSnapshotsInput"></a>

```typescript
public readonly copyTagsToSnapshotsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dataCompressionTypeInput`<sup>Optional</sup> <a name="dataCompressionTypeInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.dataCompressionTypeInput"></a>

```typescript
public readonly dataCompressionTypeInput: string;
```

- *Type:* string

---

##### `nfsExportsInput`<sup>Optional</sup> <a name="nfsExportsInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.nfsExportsInput"></a>

```typescript
public readonly nfsExportsInput: FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports">FsxOpenzfsFileSystemRootVolumeConfigurationNfsExports</a>

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.readOnlyInput"></a>

```typescript
public readonly readOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `recordSizeKibInput`<sup>Optional</sup> <a name="recordSizeKibInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.recordSizeKibInput"></a>

```typescript
public readonly recordSizeKibInput: number;
```

- *Type:* number

---

##### `userAndGroupQuotasInput`<sup>Optional</sup> <a name="userAndGroupQuotasInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.userAndGroupQuotasInput"></a>

```typescript
public readonly userAndGroupQuotasInput: IResolvable | FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas">FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas</a>[]

---

##### `copyTagsToSnapshots`<sup>Required</sup> <a name="copyTagsToSnapshots" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.copyTagsToSnapshots"></a>

```typescript
public readonly copyTagsToSnapshots: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dataCompressionType`<sup>Required</sup> <a name="dataCompressionType" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.dataCompressionType"></a>

```typescript
public readonly dataCompressionType: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `recordSizeKib`<sup>Required</sup> <a name="recordSizeKib" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.recordSizeKib"></a>

```typescript
public readonly recordSizeKib: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FsxOpenzfsFileSystemRootVolumeConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfiguration">FsxOpenzfsFileSystemRootVolumeConfiguration</a>

---


### FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList <a name="FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.Initializer"></a>

```typescript
import { fsxOpenzfsFileSystem } from '@cdktf/provider-aws'

new fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.get"></a>

```typescript
public get(index: number): FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas">FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas">FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas</a>[]

---


### FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference <a name="FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.Initializer"></a>

```typescript
import { fsxOpenzfsFileSystem } from '@cdktf/provider-aws'

new fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.idInput">idInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGibInput">storageCapacityQuotaGibInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGib">storageCapacityQuotaGib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas">FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.idInput"></a>

```typescript
public readonly idInput: number;
```

- *Type:* number

---

##### `storageCapacityQuotaGibInput`<sup>Optional</sup> <a name="storageCapacityQuotaGibInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGibInput"></a>

```typescript
public readonly storageCapacityQuotaGibInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `storageCapacityQuotaGib`<sup>Required</sup> <a name="storageCapacityQuotaGib" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGib"></a>

```typescript
public readonly storageCapacityQuotaGib: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas">FsxOpenzfsFileSystemRootVolumeConfigurationUserAndGroupQuotas</a> | cdktf.IResolvable

---


### FsxOpenzfsFileSystemTimeoutsOutputReference <a name="FsxOpenzfsFileSystemTimeoutsOutputReference" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.Initializer"></a>

```typescript
import { fsxOpenzfsFileSystem } from '@cdktf/provider-aws'

new fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeouts">FsxOpenzfsFileSystemTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FsxOpenzfsFileSystemTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsFileSystem.FsxOpenzfsFileSystemTimeouts">FsxOpenzfsFileSystemTimeouts</a> | cdktf.IResolvable

---



