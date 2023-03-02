# `fsxLustreFileSystem` Submodule <a name="`fsxLustreFileSystem` Submodule" id="@cdktf/provider-aws.fsxLustreFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxLustreFileSystem <a name="FsxLustreFileSystem" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system aws_fsx_lustre_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.Initializer"></a>

```typescript
import { fsxLustreFileSystem } from '@cdktf/provider-aws'

new fsxLustreFileSystem.FsxLustreFileSystem(scope: Construct, id: string, config: FsxLustreFileSystemConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig">FsxLustreFileSystemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig">FsxLustreFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putLogConfiguration">putLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetAutoImportPolicy">resetAutoImportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetAutomaticBackupRetentionDays">resetAutomaticBackupRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetBackupId">resetBackupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetCopyTagsToBackups">resetCopyTagsToBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetDailyAutomaticBackupStartTime">resetDailyAutomaticBackupStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetDataCompressionType">resetDataCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetDeploymentType">resetDeploymentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetDriveCacheType">resetDriveCacheType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetExportPath">resetExportPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetFileSystemTypeVersion">resetFileSystemTypeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetImportedFileChunkSize">resetImportedFileChunkSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetImportPath">resetImportPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetLogConfiguration">resetLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetPerUnitStorageThroughput">resetPerUnitStorageThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetStorageCapacity">resetStorageCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetStorageType">resetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetWeeklyMaintenanceStartTime">resetWeeklyMaintenanceStartTime</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putLogConfiguration` <a name="putLogConfiguration" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putLogConfiguration"></a>

```typescript
public putLogConfiguration(value: FsxLustreFileSystemLogConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putLogConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration">FsxLustreFileSystemLogConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putTimeouts"></a>

```typescript
public putTimeouts(value: FsxLustreFileSystemTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts">FsxLustreFileSystemTimeouts</a>

---

##### `resetAutoImportPolicy` <a name="resetAutoImportPolicy" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetAutoImportPolicy"></a>

```typescript
public resetAutoImportPolicy(): void
```

##### `resetAutomaticBackupRetentionDays` <a name="resetAutomaticBackupRetentionDays" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetAutomaticBackupRetentionDays"></a>

```typescript
public resetAutomaticBackupRetentionDays(): void
```

##### `resetBackupId` <a name="resetBackupId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetBackupId"></a>

```typescript
public resetBackupId(): void
```

##### `resetCopyTagsToBackups` <a name="resetCopyTagsToBackups" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetCopyTagsToBackups"></a>

```typescript
public resetCopyTagsToBackups(): void
```

##### `resetDailyAutomaticBackupStartTime` <a name="resetDailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetDailyAutomaticBackupStartTime"></a>

```typescript
public resetDailyAutomaticBackupStartTime(): void
```

##### `resetDataCompressionType` <a name="resetDataCompressionType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetDataCompressionType"></a>

```typescript
public resetDataCompressionType(): void
```

##### `resetDeploymentType` <a name="resetDeploymentType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetDeploymentType"></a>

```typescript
public resetDeploymentType(): void
```

##### `resetDriveCacheType` <a name="resetDriveCacheType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetDriveCacheType"></a>

```typescript
public resetDriveCacheType(): void
```

##### `resetExportPath` <a name="resetExportPath" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetExportPath"></a>

```typescript
public resetExportPath(): void
```

##### `resetFileSystemTypeVersion` <a name="resetFileSystemTypeVersion" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetFileSystemTypeVersion"></a>

```typescript
public resetFileSystemTypeVersion(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImportedFileChunkSize` <a name="resetImportedFileChunkSize" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetImportedFileChunkSize"></a>

```typescript
public resetImportedFileChunkSize(): void
```

##### `resetImportPath` <a name="resetImportPath" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetImportPath"></a>

```typescript
public resetImportPath(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetLogConfiguration` <a name="resetLogConfiguration" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetLogConfiguration"></a>

```typescript
public resetLogConfiguration(): void
```

##### `resetPerUnitStorageThroughput` <a name="resetPerUnitStorageThroughput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetPerUnitStorageThroughput"></a>

```typescript
public resetPerUnitStorageThroughput(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetStorageCapacity` <a name="resetStorageCapacity" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetStorageCapacity"></a>

```typescript
public resetStorageCapacity(): void
```

##### `resetStorageType` <a name="resetStorageType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetStorageType"></a>

```typescript
public resetStorageType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWeeklyMaintenanceStartTime` <a name="resetWeeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetWeeklyMaintenanceStartTime"></a>

```typescript
public resetWeeklyMaintenanceStartTime(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isConstruct"></a>

```typescript
import { fsxLustreFileSystem } from '@cdktf/provider-aws'

fsxLustreFileSystem.FsxLustreFileSystem.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isTerraformElement"></a>

```typescript
import { fsxLustreFileSystem } from '@cdktf/provider-aws'

fsxLustreFileSystem.FsxLustreFileSystem.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isTerraformResource"></a>

```typescript
import { fsxLustreFileSystem } from '@cdktf/provider-aws'

fsxLustreFileSystem.FsxLustreFileSystem.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference">FsxLustreFileSystemLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.mountName">mountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.networkInterfaceIds">networkInterfaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference">FsxLustreFileSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.autoImportPolicyInput">autoImportPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.automaticBackupRetentionDaysInput">automaticBackupRetentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.backupIdInput">backupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.copyTagsToBackupsInput">copyTagsToBackupsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dailyAutomaticBackupStartTimeInput">dailyAutomaticBackupStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dataCompressionTypeInput">dataCompressionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.deploymentTypeInput">deploymentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.driveCacheTypeInput">driveCacheTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.exportPathInput">exportPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.fileSystemTypeVersionInput">fileSystemTypeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.importedFileChunkSizeInput">importedFileChunkSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.importPathInput">importPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.logConfigurationInput">logConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration">FsxLustreFileSystemLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.perUnitStorageThroughputInput">perUnitStorageThroughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.storageCapacityInput">storageCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.storageTypeInput">storageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts">FsxLustreFileSystemTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.weeklyMaintenanceStartTimeInput">weeklyMaintenanceStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.autoImportPolicy">autoImportPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.automaticBackupRetentionDays">automaticBackupRetentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.backupId">backupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.copyTagsToBackups">copyTagsToBackups</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dailyAutomaticBackupStartTime">dailyAutomaticBackupStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dataCompressionType">dataCompressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.deploymentType">deploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.driveCacheType">driveCacheType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.exportPath">exportPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.fileSystemTypeVersion">fileSystemTypeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.importedFileChunkSize">importedFileChunkSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.importPath">importPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.perUnitStorageThroughput">perUnitStorageThroughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.storageCapacity">storageCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.weeklyMaintenanceStartTime">weeklyMaintenanceStartTime</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `logConfiguration`<sup>Required</sup> <a name="logConfiguration" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.logConfiguration"></a>

```typescript
public readonly logConfiguration: FsxLustreFileSystemLogConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference">FsxLustreFileSystemLogConfigurationOutputReference</a>

---

##### `mountName`<sup>Required</sup> <a name="mountName" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.mountName"></a>

```typescript
public readonly mountName: string;
```

- *Type:* string

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="networkInterfaceIds" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.networkInterfaceIds"></a>

```typescript
public readonly networkInterfaceIds: string[];
```

- *Type:* string[]

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.timeouts"></a>

```typescript
public readonly timeouts: FsxLustreFileSystemTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference">FsxLustreFileSystemTimeoutsOutputReference</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `autoImportPolicyInput`<sup>Optional</sup> <a name="autoImportPolicyInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.autoImportPolicyInput"></a>

```typescript
public readonly autoImportPolicyInput: string;
```

- *Type:* string

---

##### `automaticBackupRetentionDaysInput`<sup>Optional</sup> <a name="automaticBackupRetentionDaysInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.automaticBackupRetentionDaysInput"></a>

```typescript
public readonly automaticBackupRetentionDaysInput: number;
```

- *Type:* number

---

##### `backupIdInput`<sup>Optional</sup> <a name="backupIdInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.backupIdInput"></a>

```typescript
public readonly backupIdInput: string;
```

- *Type:* string

---

##### `copyTagsToBackupsInput`<sup>Optional</sup> <a name="copyTagsToBackupsInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.copyTagsToBackupsInput"></a>

```typescript
public readonly copyTagsToBackupsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dailyAutomaticBackupStartTimeInput`<sup>Optional</sup> <a name="dailyAutomaticBackupStartTimeInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dailyAutomaticBackupStartTimeInput"></a>

```typescript
public readonly dailyAutomaticBackupStartTimeInput: string;
```

- *Type:* string

---

##### `dataCompressionTypeInput`<sup>Optional</sup> <a name="dataCompressionTypeInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dataCompressionTypeInput"></a>

```typescript
public readonly dataCompressionTypeInput: string;
```

- *Type:* string

---

##### `deploymentTypeInput`<sup>Optional</sup> <a name="deploymentTypeInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.deploymentTypeInput"></a>

```typescript
public readonly deploymentTypeInput: string;
```

- *Type:* string

---

##### `driveCacheTypeInput`<sup>Optional</sup> <a name="driveCacheTypeInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.driveCacheTypeInput"></a>

```typescript
public readonly driveCacheTypeInput: string;
```

- *Type:* string

---

##### `exportPathInput`<sup>Optional</sup> <a name="exportPathInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.exportPathInput"></a>

```typescript
public readonly exportPathInput: string;
```

- *Type:* string

---

##### `fileSystemTypeVersionInput`<sup>Optional</sup> <a name="fileSystemTypeVersionInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.fileSystemTypeVersionInput"></a>

```typescript
public readonly fileSystemTypeVersionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `importedFileChunkSizeInput`<sup>Optional</sup> <a name="importedFileChunkSizeInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.importedFileChunkSizeInput"></a>

```typescript
public readonly importedFileChunkSizeInput: number;
```

- *Type:* number

---

##### `importPathInput`<sup>Optional</sup> <a name="importPathInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.importPathInput"></a>

```typescript
public readonly importPathInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `logConfigurationInput`<sup>Optional</sup> <a name="logConfigurationInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.logConfigurationInput"></a>

```typescript
public readonly logConfigurationInput: FsxLustreFileSystemLogConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration">FsxLustreFileSystemLogConfiguration</a>

---

##### `perUnitStorageThroughputInput`<sup>Optional</sup> <a name="perUnitStorageThroughputInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.perUnitStorageThroughputInput"></a>

```typescript
public readonly perUnitStorageThroughputInput: number;
```

- *Type:* number

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `storageCapacityInput`<sup>Optional</sup> <a name="storageCapacityInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.storageCapacityInput"></a>

```typescript
public readonly storageCapacityInput: number;
```

- *Type:* number

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.storageTypeInput"></a>

```typescript
public readonly storageTypeInput: string;
```

- *Type:* string

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: FsxLustreFileSystemTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts">FsxLustreFileSystemTimeouts</a> | cdktf.IResolvable

---

##### `weeklyMaintenanceStartTimeInput`<sup>Optional</sup> <a name="weeklyMaintenanceStartTimeInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.weeklyMaintenanceStartTimeInput"></a>

```typescript
public readonly weeklyMaintenanceStartTimeInput: string;
```

- *Type:* string

---

##### `autoImportPolicy`<sup>Required</sup> <a name="autoImportPolicy" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.autoImportPolicy"></a>

```typescript
public readonly autoImportPolicy: string;
```

- *Type:* string

---

##### `automaticBackupRetentionDays`<sup>Required</sup> <a name="automaticBackupRetentionDays" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.automaticBackupRetentionDays"></a>

```typescript
public readonly automaticBackupRetentionDays: number;
```

- *Type:* number

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.backupId"></a>

```typescript
public readonly backupId: string;
```

- *Type:* string

---

##### `copyTagsToBackups`<sup>Required</sup> <a name="copyTagsToBackups" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.copyTagsToBackups"></a>

```typescript
public readonly copyTagsToBackups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dailyAutomaticBackupStartTime`<sup>Required</sup> <a name="dailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dailyAutomaticBackupStartTime"></a>

```typescript
public readonly dailyAutomaticBackupStartTime: string;
```

- *Type:* string

---

##### `dataCompressionType`<sup>Required</sup> <a name="dataCompressionType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dataCompressionType"></a>

```typescript
public readonly dataCompressionType: string;
```

- *Type:* string

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

---

##### `driveCacheType`<sup>Required</sup> <a name="driveCacheType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.driveCacheType"></a>

```typescript
public readonly driveCacheType: string;
```

- *Type:* string

---

##### `exportPath`<sup>Required</sup> <a name="exportPath" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.exportPath"></a>

```typescript
public readonly exportPath: string;
```

- *Type:* string

---

##### `fileSystemTypeVersion`<sup>Required</sup> <a name="fileSystemTypeVersion" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.fileSystemTypeVersion"></a>

```typescript
public readonly fileSystemTypeVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `importedFileChunkSize`<sup>Required</sup> <a name="importedFileChunkSize" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.importedFileChunkSize"></a>

```typescript
public readonly importedFileChunkSize: number;
```

- *Type:* number

---

##### `importPath`<sup>Required</sup> <a name="importPath" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.importPath"></a>

```typescript
public readonly importPath: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `perUnitStorageThroughput`<sup>Required</sup> <a name="perUnitStorageThroughput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.perUnitStorageThroughput"></a>

```typescript
public readonly perUnitStorageThroughput: number;
```

- *Type:* number

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `storageCapacity`<sup>Required</sup> <a name="storageCapacity" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.storageCapacity"></a>

```typescript
public readonly storageCapacity: number;
```

- *Type:* number

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `weeklyMaintenanceStartTime`<sup>Required</sup> <a name="weeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.weeklyMaintenanceStartTime"></a>

```typescript
public readonly weeklyMaintenanceStartTime: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FsxLustreFileSystemConfig <a name="FsxLustreFileSystemConfig" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.Initializer"></a>

```typescript
import { fsxLustreFileSystem } from '@cdktf/provider-aws'

const fsxLustreFileSystemConfig: fsxLustreFileSystem.FsxLustreFileSystemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#subnet_ids FsxLustreFileSystem#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.autoImportPolicy">autoImportPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#auto_import_policy FsxLustreFileSystem#auto_import_policy}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.automaticBackupRetentionDays">automaticBackupRetentionDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#automatic_backup_retention_days FsxLustreFileSystem#automatic_backup_retention_days}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.backupId">backupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#backup_id FsxLustreFileSystem#backup_id}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.copyTagsToBackups">copyTagsToBackups</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#copy_tags_to_backups FsxLustreFileSystem#copy_tags_to_backups}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.dailyAutomaticBackupStartTime">dailyAutomaticBackupStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#daily_automatic_backup_start_time FsxLustreFileSystem#daily_automatic_backup_start_time}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.dataCompressionType">dataCompressionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#data_compression_type FsxLustreFileSystem#data_compression_type}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.deploymentType">deploymentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#deployment_type FsxLustreFileSystem#deployment_type}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.driveCacheType">driveCacheType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#drive_cache_type FsxLustreFileSystem#drive_cache_type}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.exportPath">exportPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#export_path FsxLustreFileSystem#export_path}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.fileSystemTypeVersion">fileSystemTypeVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#file_system_type_version FsxLustreFileSystem#file_system_type_version}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#id FsxLustreFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.importedFileChunkSize">importedFileChunkSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#imported_file_chunk_size FsxLustreFileSystem#imported_file_chunk_size}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.importPath">importPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#import_path FsxLustreFileSystem#import_path}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#kms_key_id FsxLustreFileSystem#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration">FsxLustreFileSystemLogConfiguration</a></code> | log_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.perUnitStorageThroughput">perUnitStorageThroughput</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#per_unit_storage_throughput FsxLustreFileSystem#per_unit_storage_throughput}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#security_group_ids FsxLustreFileSystem#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.storageCapacity">storageCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#storage_capacity FsxLustreFileSystem#storage_capacity}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.storageType">storageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#storage_type FsxLustreFileSystem#storage_type}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#tags FsxLustreFileSystem#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#tags_all FsxLustreFileSystem#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts">FsxLustreFileSystemTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.weeklyMaintenanceStartTime">weeklyMaintenanceStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#weekly_maintenance_start_time FsxLustreFileSystem#weekly_maintenance_start_time}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#subnet_ids FsxLustreFileSystem#subnet_ids}.

---

##### `autoImportPolicy`<sup>Optional</sup> <a name="autoImportPolicy" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.autoImportPolicy"></a>

```typescript
public readonly autoImportPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#auto_import_policy FsxLustreFileSystem#auto_import_policy}.

---

##### `automaticBackupRetentionDays`<sup>Optional</sup> <a name="automaticBackupRetentionDays" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.automaticBackupRetentionDays"></a>

```typescript
public readonly automaticBackupRetentionDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#automatic_backup_retention_days FsxLustreFileSystem#automatic_backup_retention_days}.

---

##### `backupId`<sup>Optional</sup> <a name="backupId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.backupId"></a>

```typescript
public readonly backupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#backup_id FsxLustreFileSystem#backup_id}.

---

##### `copyTagsToBackups`<sup>Optional</sup> <a name="copyTagsToBackups" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.copyTagsToBackups"></a>

```typescript
public readonly copyTagsToBackups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#copy_tags_to_backups FsxLustreFileSystem#copy_tags_to_backups}.

---

##### `dailyAutomaticBackupStartTime`<sup>Optional</sup> <a name="dailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.dailyAutomaticBackupStartTime"></a>

```typescript
public readonly dailyAutomaticBackupStartTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#daily_automatic_backup_start_time FsxLustreFileSystem#daily_automatic_backup_start_time}.

---

##### `dataCompressionType`<sup>Optional</sup> <a name="dataCompressionType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.dataCompressionType"></a>

```typescript
public readonly dataCompressionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#data_compression_type FsxLustreFileSystem#data_compression_type}.

---

##### `deploymentType`<sup>Optional</sup> <a name="deploymentType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#deployment_type FsxLustreFileSystem#deployment_type}.

---

##### `driveCacheType`<sup>Optional</sup> <a name="driveCacheType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.driveCacheType"></a>

```typescript
public readonly driveCacheType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#drive_cache_type FsxLustreFileSystem#drive_cache_type}.

---

##### `exportPath`<sup>Optional</sup> <a name="exportPath" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.exportPath"></a>

```typescript
public readonly exportPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#export_path FsxLustreFileSystem#export_path}.

---

##### `fileSystemTypeVersion`<sup>Optional</sup> <a name="fileSystemTypeVersion" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.fileSystemTypeVersion"></a>

```typescript
public readonly fileSystemTypeVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#file_system_type_version FsxLustreFileSystem#file_system_type_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#id FsxLustreFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importedFileChunkSize`<sup>Optional</sup> <a name="importedFileChunkSize" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.importedFileChunkSize"></a>

```typescript
public readonly importedFileChunkSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#imported_file_chunk_size FsxLustreFileSystem#imported_file_chunk_size}.

---

##### `importPath`<sup>Optional</sup> <a name="importPath" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.importPath"></a>

```typescript
public readonly importPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#import_path FsxLustreFileSystem#import_path}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#kms_key_id FsxLustreFileSystem#kms_key_id}.

---

##### `logConfiguration`<sup>Optional</sup> <a name="logConfiguration" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.logConfiguration"></a>

```typescript
public readonly logConfiguration: FsxLustreFileSystemLogConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration">FsxLustreFileSystemLogConfiguration</a>

log_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#log_configuration FsxLustreFileSystem#log_configuration}

---

##### `perUnitStorageThroughput`<sup>Optional</sup> <a name="perUnitStorageThroughput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.perUnitStorageThroughput"></a>

```typescript
public readonly perUnitStorageThroughput: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#per_unit_storage_throughput FsxLustreFileSystem#per_unit_storage_throughput}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#security_group_ids FsxLustreFileSystem#security_group_ids}.

---

##### `storageCapacity`<sup>Optional</sup> <a name="storageCapacity" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.storageCapacity"></a>

```typescript
public readonly storageCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#storage_capacity FsxLustreFileSystem#storage_capacity}.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#storage_type FsxLustreFileSystem#storage_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#tags FsxLustreFileSystem#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#tags_all FsxLustreFileSystem#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FsxLustreFileSystemTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts">FsxLustreFileSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#timeouts FsxLustreFileSystem#timeouts}

---

##### `weeklyMaintenanceStartTime`<sup>Optional</sup> <a name="weeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.weeklyMaintenanceStartTime"></a>

```typescript
public readonly weeklyMaintenanceStartTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#weekly_maintenance_start_time FsxLustreFileSystem#weekly_maintenance_start_time}.

---

### FsxLustreFileSystemLogConfiguration <a name="FsxLustreFileSystemLogConfiguration" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration.Initializer"></a>

```typescript
import { fsxLustreFileSystem } from '@cdktf/provider-aws'

const fsxLustreFileSystemLogConfiguration: fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration.property.destination">destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#destination FsxLustreFileSystem#destination}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration.property.level">level</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#level FsxLustreFileSystem#level}. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#destination FsxLustreFileSystem#destination}.

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#level FsxLustreFileSystem#level}.

---

### FsxLustreFileSystemTimeouts <a name="FsxLustreFileSystemTimeouts" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts.Initializer"></a>

```typescript
import { fsxLustreFileSystem } from '@cdktf/provider-aws'

const fsxLustreFileSystemTimeouts: fsxLustreFileSystem.FsxLustreFileSystemTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#create FsxLustreFileSystem#create}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#delete FsxLustreFileSystem#delete}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#update FsxLustreFileSystem#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#create FsxLustreFileSystem#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#delete FsxLustreFileSystem#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#update FsxLustreFileSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxLustreFileSystemLogConfigurationOutputReference <a name="FsxLustreFileSystemLogConfigurationOutputReference" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.Initializer"></a>

```typescript
import { fsxLustreFileSystem } from '@cdktf/provider-aws'

new fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.resetLevel">resetLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestination` <a name="resetDestination" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.resetDestination"></a>

```typescript
public resetDestination(): void
```

##### `resetLevel` <a name="resetLevel" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.resetLevel"></a>

```typescript
public resetLevel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.levelInput">levelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration">FsxLustreFileSystemLogConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.levelInput"></a>

```typescript
public readonly levelInput: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FsxLustreFileSystemLogConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration">FsxLustreFileSystemLogConfiguration</a>

---


### FsxLustreFileSystemTimeoutsOutputReference <a name="FsxLustreFileSystemTimeoutsOutputReference" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.Initializer"></a>

```typescript
import { fsxLustreFileSystem } from '@cdktf/provider-aws'

new fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts">FsxLustreFileSystemTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FsxLustreFileSystemTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts">FsxLustreFileSystemTimeouts</a> | cdktf.IResolvable

---



