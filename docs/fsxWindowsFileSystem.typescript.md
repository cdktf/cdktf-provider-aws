# `fsxWindowsFileSystem` Submodule <a name="`fsxWindowsFileSystem` Submodule" id="@cdktf/provider-aws.fsxWindowsFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxWindowsFileSystem <a name="FsxWindowsFileSystem" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system aws_fsx_windows_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer"></a>

```typescript
import { fsxWindowsFileSystem } from '@cdktf/provider-aws'

new fsxWindowsFileSystem.FsxWindowsFileSystem(scope: Construct, id: string, config: FsxWindowsFileSystemConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig">FsxWindowsFileSystemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig">FsxWindowsFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putAuditLogConfiguration">putAuditLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putSelfManagedActiveDirectory">putSelfManagedActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetActiveDirectoryId">resetActiveDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetAliases">resetAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetAuditLogConfiguration">resetAuditLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetAutomaticBackupRetentionDays">resetAutomaticBackupRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetBackupId">resetBackupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetCopyTagsToBackups">resetCopyTagsToBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetDailyAutomaticBackupStartTime">resetDailyAutomaticBackupStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetDeploymentType">resetDeploymentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetPreferredSubnetId">resetPreferredSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetSelfManagedActiveDirectory">resetSelfManagedActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetSkipFinalBackup">resetSkipFinalBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetStorageCapacity">resetStorageCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetStorageType">resetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetWeeklyMaintenanceStartTime">resetWeeklyMaintenanceStartTime</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAuditLogConfiguration` <a name="putAuditLogConfiguration" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putAuditLogConfiguration"></a>

```typescript
public putAuditLogConfiguration(value: FsxWindowsFileSystemAuditLogConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putAuditLogConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a>

---

##### `putSelfManagedActiveDirectory` <a name="putSelfManagedActiveDirectory" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putSelfManagedActiveDirectory"></a>

```typescript
public putSelfManagedActiveDirectory(value: FsxWindowsFileSystemSelfManagedActiveDirectory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putSelfManagedActiveDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putTimeouts"></a>

```typescript
public putTimeouts(value: FsxWindowsFileSystemTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts">FsxWindowsFileSystemTimeouts</a>

---

##### `resetActiveDirectoryId` <a name="resetActiveDirectoryId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetActiveDirectoryId"></a>

```typescript
public resetActiveDirectoryId(): void
```

##### `resetAliases` <a name="resetAliases" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetAliases"></a>

```typescript
public resetAliases(): void
```

##### `resetAuditLogConfiguration` <a name="resetAuditLogConfiguration" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetAuditLogConfiguration"></a>

```typescript
public resetAuditLogConfiguration(): void
```

##### `resetAutomaticBackupRetentionDays` <a name="resetAutomaticBackupRetentionDays" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetAutomaticBackupRetentionDays"></a>

```typescript
public resetAutomaticBackupRetentionDays(): void
```

##### `resetBackupId` <a name="resetBackupId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetBackupId"></a>

```typescript
public resetBackupId(): void
```

##### `resetCopyTagsToBackups` <a name="resetCopyTagsToBackups" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetCopyTagsToBackups"></a>

```typescript
public resetCopyTagsToBackups(): void
```

##### `resetDailyAutomaticBackupStartTime` <a name="resetDailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetDailyAutomaticBackupStartTime"></a>

```typescript
public resetDailyAutomaticBackupStartTime(): void
```

##### `resetDeploymentType` <a name="resetDeploymentType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetDeploymentType"></a>

```typescript
public resetDeploymentType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetPreferredSubnetId` <a name="resetPreferredSubnetId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetPreferredSubnetId"></a>

```typescript
public resetPreferredSubnetId(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSelfManagedActiveDirectory` <a name="resetSelfManagedActiveDirectory" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetSelfManagedActiveDirectory"></a>

```typescript
public resetSelfManagedActiveDirectory(): void
```

##### `resetSkipFinalBackup` <a name="resetSkipFinalBackup" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetSkipFinalBackup"></a>

```typescript
public resetSkipFinalBackup(): void
```

##### `resetStorageCapacity` <a name="resetStorageCapacity" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetStorageCapacity"></a>

```typescript
public resetStorageCapacity(): void
```

##### `resetStorageType` <a name="resetStorageType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetStorageType"></a>

```typescript
public resetStorageType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWeeklyMaintenanceStartTime` <a name="resetWeeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetWeeklyMaintenanceStartTime"></a>

```typescript
public resetWeeklyMaintenanceStartTime(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isConstruct"></a>

```typescript
import { fsxWindowsFileSystem } from '@cdktf/provider-aws'

fsxWindowsFileSystem.FsxWindowsFileSystem.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isTerraformElement"></a>

```typescript
import { fsxWindowsFileSystem } from '@cdktf/provider-aws'

fsxWindowsFileSystem.FsxWindowsFileSystem.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isTerraformResource"></a>

```typescript
import { fsxWindowsFileSystem } from '@cdktf/provider-aws'

fsxWindowsFileSystem.FsxWindowsFileSystem.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.auditLogConfiguration">auditLogConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference">FsxWindowsFileSystemAuditLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.networkInterfaceIds">networkInterfaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.preferredFileServerIp">preferredFileServerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.remoteAdministrationEndpoint">remoteAdministrationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.selfManagedActiveDirectory">selfManagedActiveDirectory</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference">FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference">FsxWindowsFileSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.activeDirectoryIdInput">activeDirectoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.aliasesInput">aliasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.auditLogConfigurationInput">auditLogConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.automaticBackupRetentionDaysInput">automaticBackupRetentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.backupIdInput">backupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.copyTagsToBackupsInput">copyTagsToBackupsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dailyAutomaticBackupStartTimeInput">dailyAutomaticBackupStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.deploymentTypeInput">deploymentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.preferredSubnetIdInput">preferredSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.selfManagedActiveDirectoryInput">selfManagedActiveDirectoryInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.skipFinalBackupInput">skipFinalBackupInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageCapacityInput">storageCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageTypeInput">storageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.throughputCapacityInput">throughputCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts">FsxWindowsFileSystemTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.weeklyMaintenanceStartTimeInput">weeklyMaintenanceStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.activeDirectoryId">activeDirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.aliases">aliases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.automaticBackupRetentionDays">automaticBackupRetentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.backupId">backupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.copyTagsToBackups">copyTagsToBackups</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dailyAutomaticBackupStartTime">dailyAutomaticBackupStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.deploymentType">deploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.preferredSubnetId">preferredSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.skipFinalBackup">skipFinalBackup</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageCapacity">storageCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.throughputCapacity">throughputCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.weeklyMaintenanceStartTime">weeklyMaintenanceStartTime</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `auditLogConfiguration`<sup>Required</sup> <a name="auditLogConfiguration" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.auditLogConfiguration"></a>

```typescript
public readonly auditLogConfiguration: FsxWindowsFileSystemAuditLogConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference">FsxWindowsFileSystemAuditLogConfigurationOutputReference</a>

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="networkInterfaceIds" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.networkInterfaceIds"></a>

```typescript
public readonly networkInterfaceIds: string[];
```

- *Type:* string[]

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `preferredFileServerIp`<sup>Required</sup> <a name="preferredFileServerIp" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.preferredFileServerIp"></a>

```typescript
public readonly preferredFileServerIp: string;
```

- *Type:* string

---

##### `remoteAdministrationEndpoint`<sup>Required</sup> <a name="remoteAdministrationEndpoint" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.remoteAdministrationEndpoint"></a>

```typescript
public readonly remoteAdministrationEndpoint: string;
```

- *Type:* string

---

##### `selfManagedActiveDirectory`<sup>Required</sup> <a name="selfManagedActiveDirectory" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.selfManagedActiveDirectory"></a>

```typescript
public readonly selfManagedActiveDirectory: FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference">FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.timeouts"></a>

```typescript
public readonly timeouts: FsxWindowsFileSystemTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference">FsxWindowsFileSystemTimeoutsOutputReference</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `activeDirectoryIdInput`<sup>Optional</sup> <a name="activeDirectoryIdInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.activeDirectoryIdInput"></a>

```typescript
public readonly activeDirectoryIdInput: string;
```

- *Type:* string

---

##### `aliasesInput`<sup>Optional</sup> <a name="aliasesInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.aliasesInput"></a>

```typescript
public readonly aliasesInput: string[];
```

- *Type:* string[]

---

##### `auditLogConfigurationInput`<sup>Optional</sup> <a name="auditLogConfigurationInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.auditLogConfigurationInput"></a>

```typescript
public readonly auditLogConfigurationInput: FsxWindowsFileSystemAuditLogConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a>

---

##### `automaticBackupRetentionDaysInput`<sup>Optional</sup> <a name="automaticBackupRetentionDaysInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.automaticBackupRetentionDaysInput"></a>

```typescript
public readonly automaticBackupRetentionDaysInput: number;
```

- *Type:* number

---

##### `backupIdInput`<sup>Optional</sup> <a name="backupIdInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.backupIdInput"></a>

```typescript
public readonly backupIdInput: string;
```

- *Type:* string

---

##### `copyTagsToBackupsInput`<sup>Optional</sup> <a name="copyTagsToBackupsInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.copyTagsToBackupsInput"></a>

```typescript
public readonly copyTagsToBackupsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dailyAutomaticBackupStartTimeInput`<sup>Optional</sup> <a name="dailyAutomaticBackupStartTimeInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dailyAutomaticBackupStartTimeInput"></a>

```typescript
public readonly dailyAutomaticBackupStartTimeInput: string;
```

- *Type:* string

---

##### `deploymentTypeInput`<sup>Optional</sup> <a name="deploymentTypeInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.deploymentTypeInput"></a>

```typescript
public readonly deploymentTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `preferredSubnetIdInput`<sup>Optional</sup> <a name="preferredSubnetIdInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.preferredSubnetIdInput"></a>

```typescript
public readonly preferredSubnetIdInput: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `selfManagedActiveDirectoryInput`<sup>Optional</sup> <a name="selfManagedActiveDirectoryInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.selfManagedActiveDirectoryInput"></a>

```typescript
public readonly selfManagedActiveDirectoryInput: FsxWindowsFileSystemSelfManagedActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a>

---

##### `skipFinalBackupInput`<sup>Optional</sup> <a name="skipFinalBackupInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.skipFinalBackupInput"></a>

```typescript
public readonly skipFinalBackupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageCapacityInput`<sup>Optional</sup> <a name="storageCapacityInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageCapacityInput"></a>

```typescript
public readonly storageCapacityInput: number;
```

- *Type:* number

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageTypeInput"></a>

```typescript
public readonly storageTypeInput: string;
```

- *Type:* string

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `throughputCapacityInput`<sup>Optional</sup> <a name="throughputCapacityInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.throughputCapacityInput"></a>

```typescript
public readonly throughputCapacityInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: FsxWindowsFileSystemTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts">FsxWindowsFileSystemTimeouts</a> | cdktf.IResolvable

---

##### `weeklyMaintenanceStartTimeInput`<sup>Optional</sup> <a name="weeklyMaintenanceStartTimeInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.weeklyMaintenanceStartTimeInput"></a>

```typescript
public readonly weeklyMaintenanceStartTimeInput: string;
```

- *Type:* string

---

##### `activeDirectoryId`<sup>Required</sup> <a name="activeDirectoryId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.activeDirectoryId"></a>

```typescript
public readonly activeDirectoryId: string;
```

- *Type:* string

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.aliases"></a>

```typescript
public readonly aliases: string[];
```

- *Type:* string[]

---

##### `automaticBackupRetentionDays`<sup>Required</sup> <a name="automaticBackupRetentionDays" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.automaticBackupRetentionDays"></a>

```typescript
public readonly automaticBackupRetentionDays: number;
```

- *Type:* number

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.backupId"></a>

```typescript
public readonly backupId: string;
```

- *Type:* string

---

##### `copyTagsToBackups`<sup>Required</sup> <a name="copyTagsToBackups" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.copyTagsToBackups"></a>

```typescript
public readonly copyTagsToBackups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dailyAutomaticBackupStartTime`<sup>Required</sup> <a name="dailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dailyAutomaticBackupStartTime"></a>

```typescript
public readonly dailyAutomaticBackupStartTime: string;
```

- *Type:* string

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `preferredSubnetId`<sup>Required</sup> <a name="preferredSubnetId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.preferredSubnetId"></a>

```typescript
public readonly preferredSubnetId: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `skipFinalBackup`<sup>Required</sup> <a name="skipFinalBackup" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.skipFinalBackup"></a>

```typescript
public readonly skipFinalBackup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageCapacity`<sup>Required</sup> <a name="storageCapacity" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageCapacity"></a>

```typescript
public readonly storageCapacity: number;
```

- *Type:* number

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `throughputCapacity`<sup>Required</sup> <a name="throughputCapacity" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.throughputCapacity"></a>

```typescript
public readonly throughputCapacity: number;
```

- *Type:* number

---

##### `weeklyMaintenanceStartTime`<sup>Required</sup> <a name="weeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.weeklyMaintenanceStartTime"></a>

```typescript
public readonly weeklyMaintenanceStartTime: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FsxWindowsFileSystemAuditLogConfiguration <a name="FsxWindowsFileSystemAuditLogConfiguration" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.Initializer"></a>

```typescript
import { fsxWindowsFileSystem } from '@cdktf/provider-aws'

const fsxWindowsFileSystemAuditLogConfiguration: fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.property.auditLogDestination">auditLogDestination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#audit_log_destination FsxWindowsFileSystem#audit_log_destination}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.property.fileAccessAuditLogLevel">fileAccessAuditLogLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#file_access_audit_log_level FsxWindowsFileSystem#file_access_audit_log_level}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.property.fileShareAccessAuditLogLevel">fileShareAccessAuditLogLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#file_share_access_audit_log_level FsxWindowsFileSystem#file_share_access_audit_log_level}. |

---

##### `auditLogDestination`<sup>Optional</sup> <a name="auditLogDestination" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.property.auditLogDestination"></a>

```typescript
public readonly auditLogDestination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#audit_log_destination FsxWindowsFileSystem#audit_log_destination}.

---

##### `fileAccessAuditLogLevel`<sup>Optional</sup> <a name="fileAccessAuditLogLevel" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.property.fileAccessAuditLogLevel"></a>

```typescript
public readonly fileAccessAuditLogLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#file_access_audit_log_level FsxWindowsFileSystem#file_access_audit_log_level}.

---

##### `fileShareAccessAuditLogLevel`<sup>Optional</sup> <a name="fileShareAccessAuditLogLevel" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.property.fileShareAccessAuditLogLevel"></a>

```typescript
public readonly fileShareAccessAuditLogLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#file_share_access_audit_log_level FsxWindowsFileSystem#file_share_access_audit_log_level}.

---

### FsxWindowsFileSystemConfig <a name="FsxWindowsFileSystemConfig" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.Initializer"></a>

```typescript
import { fsxWindowsFileSystem } from '@cdktf/provider-aws'

const fsxWindowsFileSystemConfig: fsxWindowsFileSystem.FsxWindowsFileSystemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#subnet_ids FsxWindowsFileSystem#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.throughputCapacity">throughputCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#throughput_capacity FsxWindowsFileSystem#throughput_capacity}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.activeDirectoryId">activeDirectoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#active_directory_id FsxWindowsFileSystem#active_directory_id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.aliases">aliases</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#aliases FsxWindowsFileSystem#aliases}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.auditLogConfiguration">auditLogConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a></code> | audit_log_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.automaticBackupRetentionDays">automaticBackupRetentionDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#automatic_backup_retention_days FsxWindowsFileSystem#automatic_backup_retention_days}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.backupId">backupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#backup_id FsxWindowsFileSystem#backup_id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.copyTagsToBackups">copyTagsToBackups</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#copy_tags_to_backups FsxWindowsFileSystem#copy_tags_to_backups}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.dailyAutomaticBackupStartTime">dailyAutomaticBackupStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#daily_automatic_backup_start_time FsxWindowsFileSystem#daily_automatic_backup_start_time}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.deploymentType">deploymentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#deployment_type FsxWindowsFileSystem#deployment_type}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#id FsxWindowsFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#kms_key_id FsxWindowsFileSystem#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.preferredSubnetId">preferredSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#preferred_subnet_id FsxWindowsFileSystem#preferred_subnet_id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#security_group_ids FsxWindowsFileSystem#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.selfManagedActiveDirectory">selfManagedActiveDirectory</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a></code> | self_managed_active_directory block. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.skipFinalBackup">skipFinalBackup</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#skip_final_backup FsxWindowsFileSystem#skip_final_backup}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.storageCapacity">storageCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#storage_capacity FsxWindowsFileSystem#storage_capacity}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.storageType">storageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#storage_type FsxWindowsFileSystem#storage_type}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#tags FsxWindowsFileSystem#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#tags_all FsxWindowsFileSystem#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts">FsxWindowsFileSystemTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.weeklyMaintenanceStartTime">weeklyMaintenanceStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#weekly_maintenance_start_time FsxWindowsFileSystem#weekly_maintenance_start_time}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#subnet_ids FsxWindowsFileSystem#subnet_ids}.

---

##### `throughputCapacity`<sup>Required</sup> <a name="throughputCapacity" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.throughputCapacity"></a>

```typescript
public readonly throughputCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#throughput_capacity FsxWindowsFileSystem#throughput_capacity}.

---

##### `activeDirectoryId`<sup>Optional</sup> <a name="activeDirectoryId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.activeDirectoryId"></a>

```typescript
public readonly activeDirectoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#active_directory_id FsxWindowsFileSystem#active_directory_id}.

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.aliases"></a>

```typescript
public readonly aliases: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#aliases FsxWindowsFileSystem#aliases}.

---

##### `auditLogConfiguration`<sup>Optional</sup> <a name="auditLogConfiguration" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.auditLogConfiguration"></a>

```typescript
public readonly auditLogConfiguration: FsxWindowsFileSystemAuditLogConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a>

audit_log_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#audit_log_configuration FsxWindowsFileSystem#audit_log_configuration}

---

##### `automaticBackupRetentionDays`<sup>Optional</sup> <a name="automaticBackupRetentionDays" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.automaticBackupRetentionDays"></a>

```typescript
public readonly automaticBackupRetentionDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#automatic_backup_retention_days FsxWindowsFileSystem#automatic_backup_retention_days}.

---

##### `backupId`<sup>Optional</sup> <a name="backupId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.backupId"></a>

```typescript
public readonly backupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#backup_id FsxWindowsFileSystem#backup_id}.

---

##### `copyTagsToBackups`<sup>Optional</sup> <a name="copyTagsToBackups" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.copyTagsToBackups"></a>

```typescript
public readonly copyTagsToBackups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#copy_tags_to_backups FsxWindowsFileSystem#copy_tags_to_backups}.

---

##### `dailyAutomaticBackupStartTime`<sup>Optional</sup> <a name="dailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.dailyAutomaticBackupStartTime"></a>

```typescript
public readonly dailyAutomaticBackupStartTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#daily_automatic_backup_start_time FsxWindowsFileSystem#daily_automatic_backup_start_time}.

---

##### `deploymentType`<sup>Optional</sup> <a name="deploymentType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#deployment_type FsxWindowsFileSystem#deployment_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#id FsxWindowsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#kms_key_id FsxWindowsFileSystem#kms_key_id}.

---

##### `preferredSubnetId`<sup>Optional</sup> <a name="preferredSubnetId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.preferredSubnetId"></a>

```typescript
public readonly preferredSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#preferred_subnet_id FsxWindowsFileSystem#preferred_subnet_id}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#security_group_ids FsxWindowsFileSystem#security_group_ids}.

---

##### `selfManagedActiveDirectory`<sup>Optional</sup> <a name="selfManagedActiveDirectory" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.selfManagedActiveDirectory"></a>

```typescript
public readonly selfManagedActiveDirectory: FsxWindowsFileSystemSelfManagedActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a>

self_managed_active_directory block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#self_managed_active_directory FsxWindowsFileSystem#self_managed_active_directory}

---

##### `skipFinalBackup`<sup>Optional</sup> <a name="skipFinalBackup" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.skipFinalBackup"></a>

```typescript
public readonly skipFinalBackup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#skip_final_backup FsxWindowsFileSystem#skip_final_backup}.

---

##### `storageCapacity`<sup>Optional</sup> <a name="storageCapacity" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.storageCapacity"></a>

```typescript
public readonly storageCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#storage_capacity FsxWindowsFileSystem#storage_capacity}.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#storage_type FsxWindowsFileSystem#storage_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#tags FsxWindowsFileSystem#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#tags_all FsxWindowsFileSystem#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FsxWindowsFileSystemTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts">FsxWindowsFileSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#timeouts FsxWindowsFileSystem#timeouts}

---

##### `weeklyMaintenanceStartTime`<sup>Optional</sup> <a name="weeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.weeklyMaintenanceStartTime"></a>

```typescript
public readonly weeklyMaintenanceStartTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#weekly_maintenance_start_time FsxWindowsFileSystem#weekly_maintenance_start_time}.

---

### FsxWindowsFileSystemSelfManagedActiveDirectory <a name="FsxWindowsFileSystemSelfManagedActiveDirectory" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.Initializer"></a>

```typescript
import { fsxWindowsFileSystem } from '@cdktf/provider-aws'

const fsxWindowsFileSystemSelfManagedActiveDirectory: fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.dnsIps">dnsIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#dns_ips FsxWindowsFileSystem#dns_ips}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#domain_name FsxWindowsFileSystem#domain_name}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#password FsxWindowsFileSystem#password}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#username FsxWindowsFileSystem#username}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.fileSystemAdministratorsGroup">fileSystemAdministratorsGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#file_system_administrators_group FsxWindowsFileSystem#file_system_administrators_group}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.organizationalUnitDistinguishedName">organizationalUnitDistinguishedName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#organizational_unit_distinguished_name FsxWindowsFileSystem#organizational_unit_distinguished_name}. |

---

##### `dnsIps`<sup>Required</sup> <a name="dnsIps" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.dnsIps"></a>

```typescript
public readonly dnsIps: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#dns_ips FsxWindowsFileSystem#dns_ips}.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#domain_name FsxWindowsFileSystem#domain_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#password FsxWindowsFileSystem#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#username FsxWindowsFileSystem#username}.

---

##### `fileSystemAdministratorsGroup`<sup>Optional</sup> <a name="fileSystemAdministratorsGroup" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.fileSystemAdministratorsGroup"></a>

```typescript
public readonly fileSystemAdministratorsGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#file_system_administrators_group FsxWindowsFileSystem#file_system_administrators_group}.

---

##### `organizationalUnitDistinguishedName`<sup>Optional</sup> <a name="organizationalUnitDistinguishedName" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.organizationalUnitDistinguishedName"></a>

```typescript
public readonly organizationalUnitDistinguishedName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#organizational_unit_distinguished_name FsxWindowsFileSystem#organizational_unit_distinguished_name}.

---

### FsxWindowsFileSystemTimeouts <a name="FsxWindowsFileSystemTimeouts" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.Initializer"></a>

```typescript
import { fsxWindowsFileSystem } from '@cdktf/provider-aws'

const fsxWindowsFileSystemTimeouts: fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#create FsxWindowsFileSystem#create}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#delete FsxWindowsFileSystem#delete}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#update FsxWindowsFileSystem#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#create FsxWindowsFileSystem#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#delete FsxWindowsFileSystem#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#update FsxWindowsFileSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxWindowsFileSystemAuditLogConfigurationOutputReference <a name="FsxWindowsFileSystemAuditLogConfigurationOutputReference" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer"></a>

```typescript
import { fsxWindowsFileSystem } from '@cdktf/provider-aws'

new fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resetAuditLogDestination">resetAuditLogDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resetFileAccessAuditLogLevel">resetFileAccessAuditLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resetFileShareAccessAuditLogLevel">resetFileShareAccessAuditLogLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuditLogDestination` <a name="resetAuditLogDestination" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resetAuditLogDestination"></a>

```typescript
public resetAuditLogDestination(): void
```

##### `resetFileAccessAuditLogLevel` <a name="resetFileAccessAuditLogLevel" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resetFileAccessAuditLogLevel"></a>

```typescript
public resetFileAccessAuditLogLevel(): void
```

##### `resetFileShareAccessAuditLogLevel` <a name="resetFileShareAccessAuditLogLevel" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resetFileShareAccessAuditLogLevel"></a>

```typescript
public resetFileShareAccessAuditLogLevel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.auditLogDestinationInput">auditLogDestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileAccessAuditLogLevelInput">fileAccessAuditLogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileShareAccessAuditLogLevelInput">fileShareAccessAuditLogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.auditLogDestination">auditLogDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileAccessAuditLogLevel">fileAccessAuditLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileShareAccessAuditLogLevel">fileShareAccessAuditLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auditLogDestinationInput`<sup>Optional</sup> <a name="auditLogDestinationInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.auditLogDestinationInput"></a>

```typescript
public readonly auditLogDestinationInput: string;
```

- *Type:* string

---

##### `fileAccessAuditLogLevelInput`<sup>Optional</sup> <a name="fileAccessAuditLogLevelInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileAccessAuditLogLevelInput"></a>

```typescript
public readonly fileAccessAuditLogLevelInput: string;
```

- *Type:* string

---

##### `fileShareAccessAuditLogLevelInput`<sup>Optional</sup> <a name="fileShareAccessAuditLogLevelInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileShareAccessAuditLogLevelInput"></a>

```typescript
public readonly fileShareAccessAuditLogLevelInput: string;
```

- *Type:* string

---

##### `auditLogDestination`<sup>Required</sup> <a name="auditLogDestination" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.auditLogDestination"></a>

```typescript
public readonly auditLogDestination: string;
```

- *Type:* string

---

##### `fileAccessAuditLogLevel`<sup>Required</sup> <a name="fileAccessAuditLogLevel" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileAccessAuditLogLevel"></a>

```typescript
public readonly fileAccessAuditLogLevel: string;
```

- *Type:* string

---

##### `fileShareAccessAuditLogLevel`<sup>Required</sup> <a name="fileShareAccessAuditLogLevel" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileShareAccessAuditLogLevel"></a>

```typescript
public readonly fileShareAccessAuditLogLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FsxWindowsFileSystemAuditLogConfiguration;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a>

---


### FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference <a name="FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.Initializer"></a>

```typescript
import { fsxWindowsFileSystem } from '@cdktf/provider-aws'

new fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.resetFileSystemAdministratorsGroup">resetFileSystemAdministratorsGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.resetOrganizationalUnitDistinguishedName">resetOrganizationalUnitDistinguishedName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileSystemAdministratorsGroup` <a name="resetFileSystemAdministratorsGroup" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.resetFileSystemAdministratorsGroup"></a>

```typescript
public resetFileSystemAdministratorsGroup(): void
```

##### `resetOrganizationalUnitDistinguishedName` <a name="resetOrganizationalUnitDistinguishedName" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.resetOrganizationalUnitDistinguishedName"></a>

```typescript
public resetOrganizationalUnitDistinguishedName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.dnsIpsInput">dnsIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.fileSystemAdministratorsGroupInput">fileSystemAdministratorsGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.organizationalUnitDistinguishedNameInput">organizationalUnitDistinguishedNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.dnsIps">dnsIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.fileSystemAdministratorsGroup">fileSystemAdministratorsGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.organizationalUnitDistinguishedName">organizationalUnitDistinguishedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsIpsInput`<sup>Optional</sup> <a name="dnsIpsInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.dnsIpsInput"></a>

```typescript
public readonly dnsIpsInput: string[];
```

- *Type:* string[]

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `fileSystemAdministratorsGroupInput`<sup>Optional</sup> <a name="fileSystemAdministratorsGroupInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.fileSystemAdministratorsGroupInput"></a>

```typescript
public readonly fileSystemAdministratorsGroupInput: string;
```

- *Type:* string

---

##### `organizationalUnitDistinguishedNameInput`<sup>Optional</sup> <a name="organizationalUnitDistinguishedNameInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.organizationalUnitDistinguishedNameInput"></a>

```typescript
public readonly organizationalUnitDistinguishedNameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `dnsIps`<sup>Required</sup> <a name="dnsIps" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.dnsIps"></a>

```typescript
public readonly dnsIps: string[];
```

- *Type:* string[]

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `fileSystemAdministratorsGroup`<sup>Required</sup> <a name="fileSystemAdministratorsGroup" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.fileSystemAdministratorsGroup"></a>

```typescript
public readonly fileSystemAdministratorsGroup: string;
```

- *Type:* string

---

##### `organizationalUnitDistinguishedName`<sup>Required</sup> <a name="organizationalUnitDistinguishedName" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.organizationalUnitDistinguishedName"></a>

```typescript
public readonly organizationalUnitDistinguishedName: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FsxWindowsFileSystemSelfManagedActiveDirectory;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a>

---


### FsxWindowsFileSystemTimeoutsOutputReference <a name="FsxWindowsFileSystemTimeoutsOutputReference" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.Initializer"></a>

```typescript
import { fsxWindowsFileSystem } from '@cdktf/provider-aws'

new fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts">FsxWindowsFileSystemTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FsxWindowsFileSystemTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts">FsxWindowsFileSystemTimeouts</a> | cdktf.IResolvable

---



