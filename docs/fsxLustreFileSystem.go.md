# `fsxLustreFileSystem` Submodule <a name="`fsxLustreFileSystem` Submodule" id="@cdktf/provider-aws.fsxLustreFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxLustreFileSystem <a name="FsxLustreFileSystem" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system aws_fsx_lustre_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxlustrefilesystem"

fsxlustrefilesystem.NewFsxLustreFileSystem(scope Construct, id *string, config FsxLustreFileSystemConfig) FsxLustreFileSystem
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig">FsxLustreFileSystemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig">FsxLustreFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putLogConfiguration">PutLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putMetadataConfiguration">PutMetadataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putRootSquashConfiguration">PutRootSquashConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetAutoImportPolicy">ResetAutoImportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetAutomaticBackupRetentionDays">ResetAutomaticBackupRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetBackupId">ResetBackupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetCopyTagsToBackups">ResetCopyTagsToBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetDailyAutomaticBackupStartTime">ResetDailyAutomaticBackupStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetDataCompressionType">ResetDataCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetDeploymentType">ResetDeploymentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetDriveCacheType">ResetDriveCacheType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetEfaEnabled">ResetEfaEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetExportPath">ResetExportPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetFileSystemTypeVersion">ResetFileSystemTypeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetFinalBackupTags">ResetFinalBackupTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetImportedFileChunkSize">ResetImportedFileChunkSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetImportPath">ResetImportPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetLogConfiguration">ResetLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetMetadataConfiguration">ResetMetadataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetPerUnitStorageThroughput">ResetPerUnitStorageThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetRootSquashConfiguration">ResetRootSquashConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetSkipFinalBackup">ResetSkipFinalBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetStorageCapacity">ResetStorageCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetStorageType">ResetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetWeeklyMaintenanceStartTime">ResetWeeklyMaintenanceStartTime</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLogConfiguration` <a name="PutLogConfiguration" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putLogConfiguration"></a>

```go
func PutLogConfiguration(value FsxLustreFileSystemLogConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putLogConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration">FsxLustreFileSystemLogConfiguration</a>

---

##### `PutMetadataConfiguration` <a name="PutMetadataConfiguration" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putMetadataConfiguration"></a>

```go
func PutMetadataConfiguration(value FsxLustreFileSystemMetadataConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putMetadataConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfiguration">FsxLustreFileSystemMetadataConfiguration</a>

---

##### `PutRootSquashConfiguration` <a name="PutRootSquashConfiguration" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putRootSquashConfiguration"></a>

```go
func PutRootSquashConfiguration(value FsxLustreFileSystemRootSquashConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putRootSquashConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfiguration">FsxLustreFileSystemRootSquashConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putTimeouts"></a>

```go
func PutTimeouts(value FsxLustreFileSystemTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts">FsxLustreFileSystemTimeouts</a>

---

##### `ResetAutoImportPolicy` <a name="ResetAutoImportPolicy" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetAutoImportPolicy"></a>

```go
func ResetAutoImportPolicy()
```

##### `ResetAutomaticBackupRetentionDays` <a name="ResetAutomaticBackupRetentionDays" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetAutomaticBackupRetentionDays"></a>

```go
func ResetAutomaticBackupRetentionDays()
```

##### `ResetBackupId` <a name="ResetBackupId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetBackupId"></a>

```go
func ResetBackupId()
```

##### `ResetCopyTagsToBackups` <a name="ResetCopyTagsToBackups" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetCopyTagsToBackups"></a>

```go
func ResetCopyTagsToBackups()
```

##### `ResetDailyAutomaticBackupStartTime` <a name="ResetDailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetDailyAutomaticBackupStartTime"></a>

```go
func ResetDailyAutomaticBackupStartTime()
```

##### `ResetDataCompressionType` <a name="ResetDataCompressionType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetDataCompressionType"></a>

```go
func ResetDataCompressionType()
```

##### `ResetDeploymentType` <a name="ResetDeploymentType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetDeploymentType"></a>

```go
func ResetDeploymentType()
```

##### `ResetDriveCacheType` <a name="ResetDriveCacheType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetDriveCacheType"></a>

```go
func ResetDriveCacheType()
```

##### `ResetEfaEnabled` <a name="ResetEfaEnabled" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetEfaEnabled"></a>

```go
func ResetEfaEnabled()
```

##### `ResetExportPath` <a name="ResetExportPath" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetExportPath"></a>

```go
func ResetExportPath()
```

##### `ResetFileSystemTypeVersion` <a name="ResetFileSystemTypeVersion" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetFileSystemTypeVersion"></a>

```go
func ResetFileSystemTypeVersion()
```

##### `ResetFinalBackupTags` <a name="ResetFinalBackupTags" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetFinalBackupTags"></a>

```go
func ResetFinalBackupTags()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetId"></a>

```go
func ResetId()
```

##### `ResetImportedFileChunkSize` <a name="ResetImportedFileChunkSize" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetImportedFileChunkSize"></a>

```go
func ResetImportedFileChunkSize()
```

##### `ResetImportPath` <a name="ResetImportPath" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetImportPath"></a>

```go
func ResetImportPath()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetLogConfiguration` <a name="ResetLogConfiguration" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetLogConfiguration"></a>

```go
func ResetLogConfiguration()
```

##### `ResetMetadataConfiguration` <a name="ResetMetadataConfiguration" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetMetadataConfiguration"></a>

```go
func ResetMetadataConfiguration()
```

##### `ResetPerUnitStorageThroughput` <a name="ResetPerUnitStorageThroughput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetPerUnitStorageThroughput"></a>

```go
func ResetPerUnitStorageThroughput()
```

##### `ResetRootSquashConfiguration` <a name="ResetRootSquashConfiguration" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetRootSquashConfiguration"></a>

```go
func ResetRootSquashConfiguration()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSkipFinalBackup` <a name="ResetSkipFinalBackup" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetSkipFinalBackup"></a>

```go
func ResetSkipFinalBackup()
```

##### `ResetStorageCapacity` <a name="ResetStorageCapacity" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetStorageCapacity"></a>

```go
func ResetStorageCapacity()
```

##### `ResetStorageType` <a name="ResetStorageType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetStorageType"></a>

```go
func ResetStorageType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWeeklyMaintenanceStartTime` <a name="ResetWeeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetWeeklyMaintenanceStartTime"></a>

```go
func ResetWeeklyMaintenanceStartTime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FsxLustreFileSystem resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxlustrefilesystem"

fsxlustrefilesystem.FsxLustreFileSystem_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxlustrefilesystem"

fsxlustrefilesystem.FsxLustreFileSystem_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxlustrefilesystem"

fsxlustrefilesystem.FsxLustreFileSystem_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxlustrefilesystem"

fsxlustrefilesystem.FsxLustreFileSystem_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a FsxLustreFileSystem resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FsxLustreFileSystem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FsxLustreFileSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the FsxLustreFileSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.logConfiguration">LogConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference">FsxLustreFileSystemLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.metadataConfiguration">MetadataConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference">FsxLustreFileSystemMetadataConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.mountName">MountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.networkInterfaceIds">NetworkInterfaceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.rootSquashConfiguration">RootSquashConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference">FsxLustreFileSystemRootSquashConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference">FsxLustreFileSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.autoImportPolicyInput">AutoImportPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.automaticBackupRetentionDaysInput">AutomaticBackupRetentionDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.backupIdInput">BackupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.copyTagsToBackupsInput">CopyTagsToBackupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dailyAutomaticBackupStartTimeInput">DailyAutomaticBackupStartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dataCompressionTypeInput">DataCompressionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.deploymentTypeInput">DeploymentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.driveCacheTypeInput">DriveCacheTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.efaEnabledInput">EfaEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.exportPathInput">ExportPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.fileSystemTypeVersionInput">FileSystemTypeVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.finalBackupTagsInput">FinalBackupTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.importedFileChunkSizeInput">ImportedFileChunkSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.importPathInput">ImportPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.logConfigurationInput">LogConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration">FsxLustreFileSystemLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.metadataConfigurationInput">MetadataConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfiguration">FsxLustreFileSystemMetadataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.perUnitStorageThroughputInput">PerUnitStorageThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.rootSquashConfigurationInput">RootSquashConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfiguration">FsxLustreFileSystemRootSquashConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.skipFinalBackupInput">SkipFinalBackupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.storageCapacityInput">StorageCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.storageTypeInput">StorageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.weeklyMaintenanceStartTimeInput">WeeklyMaintenanceStartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.autoImportPolicy">AutoImportPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.automaticBackupRetentionDays">AutomaticBackupRetentionDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.backupId">BackupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.copyTagsToBackups">CopyTagsToBackups</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dailyAutomaticBackupStartTime">DailyAutomaticBackupStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dataCompressionType">DataCompressionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.deploymentType">DeploymentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.driveCacheType">DriveCacheType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.efaEnabled">EfaEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.exportPath">ExportPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.fileSystemTypeVersion">FileSystemTypeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.finalBackupTags">FinalBackupTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.importedFileChunkSize">ImportedFileChunkSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.importPath">ImportPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.perUnitStorageThroughput">PerUnitStorageThroughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.skipFinalBackup">SkipFinalBackup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.storageCapacity">StorageCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.storageType">StorageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.weeklyMaintenanceStartTime">WeeklyMaintenanceStartTime</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `LogConfiguration`<sup>Required</sup> <a name="LogConfiguration" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.logConfiguration"></a>

```go
func LogConfiguration() FsxLustreFileSystemLogConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference">FsxLustreFileSystemLogConfigurationOutputReference</a>

---

##### `MetadataConfiguration`<sup>Required</sup> <a name="MetadataConfiguration" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.metadataConfiguration"></a>

```go
func MetadataConfiguration() FsxLustreFileSystemMetadataConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference">FsxLustreFileSystemMetadataConfigurationOutputReference</a>

---

##### `MountName`<sup>Required</sup> <a name="MountName" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.mountName"></a>

```go
func MountName() *string
```

- *Type:* *string

---

##### `NetworkInterfaceIds`<sup>Required</sup> <a name="NetworkInterfaceIds" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.networkInterfaceIds"></a>

```go
func NetworkInterfaceIds() *[]*string
```

- *Type:* *[]*string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `RootSquashConfiguration`<sup>Required</sup> <a name="RootSquashConfiguration" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.rootSquashConfiguration"></a>

```go
func RootSquashConfiguration() FsxLustreFileSystemRootSquashConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference">FsxLustreFileSystemRootSquashConfigurationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.timeouts"></a>

```go
func Timeouts() FsxLustreFileSystemTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference">FsxLustreFileSystemTimeoutsOutputReference</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `AutoImportPolicyInput`<sup>Optional</sup> <a name="AutoImportPolicyInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.autoImportPolicyInput"></a>

```go
func AutoImportPolicyInput() *string
```

- *Type:* *string

---

##### `AutomaticBackupRetentionDaysInput`<sup>Optional</sup> <a name="AutomaticBackupRetentionDaysInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.automaticBackupRetentionDaysInput"></a>

```go
func AutomaticBackupRetentionDaysInput() *f64
```

- *Type:* *f64

---

##### `BackupIdInput`<sup>Optional</sup> <a name="BackupIdInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.backupIdInput"></a>

```go
func BackupIdInput() *string
```

- *Type:* *string

---

##### `CopyTagsToBackupsInput`<sup>Optional</sup> <a name="CopyTagsToBackupsInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.copyTagsToBackupsInput"></a>

```go
func CopyTagsToBackupsInput() interface{}
```

- *Type:* interface{}

---

##### `DailyAutomaticBackupStartTimeInput`<sup>Optional</sup> <a name="DailyAutomaticBackupStartTimeInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dailyAutomaticBackupStartTimeInput"></a>

```go
func DailyAutomaticBackupStartTimeInput() *string
```

- *Type:* *string

---

##### `DataCompressionTypeInput`<sup>Optional</sup> <a name="DataCompressionTypeInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dataCompressionTypeInput"></a>

```go
func DataCompressionTypeInput() *string
```

- *Type:* *string

---

##### `DeploymentTypeInput`<sup>Optional</sup> <a name="DeploymentTypeInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.deploymentTypeInput"></a>

```go
func DeploymentTypeInput() *string
```

- *Type:* *string

---

##### `DriveCacheTypeInput`<sup>Optional</sup> <a name="DriveCacheTypeInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.driveCacheTypeInput"></a>

```go
func DriveCacheTypeInput() *string
```

- *Type:* *string

---

##### `EfaEnabledInput`<sup>Optional</sup> <a name="EfaEnabledInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.efaEnabledInput"></a>

```go
func EfaEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ExportPathInput`<sup>Optional</sup> <a name="ExportPathInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.exportPathInput"></a>

```go
func ExportPathInput() *string
```

- *Type:* *string

---

##### `FileSystemTypeVersionInput`<sup>Optional</sup> <a name="FileSystemTypeVersionInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.fileSystemTypeVersionInput"></a>

```go
func FileSystemTypeVersionInput() *string
```

- *Type:* *string

---

##### `FinalBackupTagsInput`<sup>Optional</sup> <a name="FinalBackupTagsInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.finalBackupTagsInput"></a>

```go
func FinalBackupTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImportedFileChunkSizeInput`<sup>Optional</sup> <a name="ImportedFileChunkSizeInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.importedFileChunkSizeInput"></a>

```go
func ImportedFileChunkSizeInput() *f64
```

- *Type:* *f64

---

##### `ImportPathInput`<sup>Optional</sup> <a name="ImportPathInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.importPathInput"></a>

```go
func ImportPathInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `LogConfigurationInput`<sup>Optional</sup> <a name="LogConfigurationInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.logConfigurationInput"></a>

```go
func LogConfigurationInput() FsxLustreFileSystemLogConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration">FsxLustreFileSystemLogConfiguration</a>

---

##### `MetadataConfigurationInput`<sup>Optional</sup> <a name="MetadataConfigurationInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.metadataConfigurationInput"></a>

```go
func MetadataConfigurationInput() FsxLustreFileSystemMetadataConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfiguration">FsxLustreFileSystemMetadataConfiguration</a>

---

##### `PerUnitStorageThroughputInput`<sup>Optional</sup> <a name="PerUnitStorageThroughputInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.perUnitStorageThroughputInput"></a>

```go
func PerUnitStorageThroughputInput() *f64
```

- *Type:* *f64

---

##### `RootSquashConfigurationInput`<sup>Optional</sup> <a name="RootSquashConfigurationInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.rootSquashConfigurationInput"></a>

```go
func RootSquashConfigurationInput() FsxLustreFileSystemRootSquashConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfiguration">FsxLustreFileSystemRootSquashConfiguration</a>

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SkipFinalBackupInput`<sup>Optional</sup> <a name="SkipFinalBackupInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.skipFinalBackupInput"></a>

```go
func SkipFinalBackupInput() interface{}
```

- *Type:* interface{}

---

##### `StorageCapacityInput`<sup>Optional</sup> <a name="StorageCapacityInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.storageCapacityInput"></a>

```go
func StorageCapacityInput() *f64
```

- *Type:* *f64

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.storageTypeInput"></a>

```go
func StorageTypeInput() *string
```

- *Type:* *string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WeeklyMaintenanceStartTimeInput`<sup>Optional</sup> <a name="WeeklyMaintenanceStartTimeInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.weeklyMaintenanceStartTimeInput"></a>

```go
func WeeklyMaintenanceStartTimeInput() *string
```

- *Type:* *string

---

##### `AutoImportPolicy`<sup>Required</sup> <a name="AutoImportPolicy" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.autoImportPolicy"></a>

```go
func AutoImportPolicy() *string
```

- *Type:* *string

---

##### `AutomaticBackupRetentionDays`<sup>Required</sup> <a name="AutomaticBackupRetentionDays" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.automaticBackupRetentionDays"></a>

```go
func AutomaticBackupRetentionDays() *f64
```

- *Type:* *f64

---

##### `BackupId`<sup>Required</sup> <a name="BackupId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.backupId"></a>

```go
func BackupId() *string
```

- *Type:* *string

---

##### `CopyTagsToBackups`<sup>Required</sup> <a name="CopyTagsToBackups" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.copyTagsToBackups"></a>

```go
func CopyTagsToBackups() interface{}
```

- *Type:* interface{}

---

##### `DailyAutomaticBackupStartTime`<sup>Required</sup> <a name="DailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dailyAutomaticBackupStartTime"></a>

```go
func DailyAutomaticBackupStartTime() *string
```

- *Type:* *string

---

##### `DataCompressionType`<sup>Required</sup> <a name="DataCompressionType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dataCompressionType"></a>

```go
func DataCompressionType() *string
```

- *Type:* *string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.deploymentType"></a>

```go
func DeploymentType() *string
```

- *Type:* *string

---

##### `DriveCacheType`<sup>Required</sup> <a name="DriveCacheType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.driveCacheType"></a>

```go
func DriveCacheType() *string
```

- *Type:* *string

---

##### `EfaEnabled`<sup>Required</sup> <a name="EfaEnabled" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.efaEnabled"></a>

```go
func EfaEnabled() interface{}
```

- *Type:* interface{}

---

##### `ExportPath`<sup>Required</sup> <a name="ExportPath" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.exportPath"></a>

```go
func ExportPath() *string
```

- *Type:* *string

---

##### `FileSystemTypeVersion`<sup>Required</sup> <a name="FileSystemTypeVersion" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.fileSystemTypeVersion"></a>

```go
func FileSystemTypeVersion() *string
```

- *Type:* *string

---

##### `FinalBackupTags`<sup>Required</sup> <a name="FinalBackupTags" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.finalBackupTags"></a>

```go
func FinalBackupTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImportedFileChunkSize`<sup>Required</sup> <a name="ImportedFileChunkSize" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.importedFileChunkSize"></a>

```go
func ImportedFileChunkSize() *f64
```

- *Type:* *f64

---

##### `ImportPath`<sup>Required</sup> <a name="ImportPath" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.importPath"></a>

```go
func ImportPath() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `PerUnitStorageThroughput`<sup>Required</sup> <a name="PerUnitStorageThroughput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.perUnitStorageThroughput"></a>

```go
func PerUnitStorageThroughput() *f64
```

- *Type:* *f64

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SkipFinalBackup`<sup>Required</sup> <a name="SkipFinalBackup" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.skipFinalBackup"></a>

```go
func SkipFinalBackup() interface{}
```

- *Type:* interface{}

---

##### `StorageCapacity`<sup>Required</sup> <a name="StorageCapacity" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.storageCapacity"></a>

```go
func StorageCapacity() *f64
```

- *Type:* *f64

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.storageType"></a>

```go
func StorageType() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WeeklyMaintenanceStartTime`<sup>Required</sup> <a name="WeeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.weeklyMaintenanceStartTime"></a>

```go
func WeeklyMaintenanceStartTime() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FsxLustreFileSystemConfig <a name="FsxLustreFileSystemConfig" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxlustrefilesystem"

&fsxlustrefilesystem.FsxLustreFileSystemConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SubnetIds: *[]*string,
	AutoImportPolicy: *string,
	AutomaticBackupRetentionDays: *f64,
	BackupId: *string,
	CopyTagsToBackups: interface{},
	DailyAutomaticBackupStartTime: *string,
	DataCompressionType: *string,
	DeploymentType: *string,
	DriveCacheType: *string,
	EfaEnabled: interface{},
	ExportPath: *string,
	FileSystemTypeVersion: *string,
	FinalBackupTags: *map[string]*string,
	Id: *string,
	ImportedFileChunkSize: *f64,
	ImportPath: *string,
	KmsKeyId: *string,
	LogConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws/v19.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration,
	MetadataConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws/v19.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfiguration,
	PerUnitStorageThroughput: *f64,
	RootSquashConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws/v19.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfiguration,
	SecurityGroupIds: *[]*string,
	SkipFinalBackup: interface{},
	StorageCapacity: *f64,
	StorageType: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v19.fsxLustreFileSystem.FsxLustreFileSystemTimeouts,
	WeeklyMaintenanceStartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#subnet_ids FsxLustreFileSystem#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.autoImportPolicy">AutoImportPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#auto_import_policy FsxLustreFileSystem#auto_import_policy}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.automaticBackupRetentionDays">AutomaticBackupRetentionDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#automatic_backup_retention_days FsxLustreFileSystem#automatic_backup_retention_days}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.backupId">BackupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#backup_id FsxLustreFileSystem#backup_id}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.copyTagsToBackups">CopyTagsToBackups</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#copy_tags_to_backups FsxLustreFileSystem#copy_tags_to_backups}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.dailyAutomaticBackupStartTime">DailyAutomaticBackupStartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#daily_automatic_backup_start_time FsxLustreFileSystem#daily_automatic_backup_start_time}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.dataCompressionType">DataCompressionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#data_compression_type FsxLustreFileSystem#data_compression_type}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.deploymentType">DeploymentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#deployment_type FsxLustreFileSystem#deployment_type}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.driveCacheType">DriveCacheType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#drive_cache_type FsxLustreFileSystem#drive_cache_type}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.efaEnabled">EfaEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#efa_enabled FsxLustreFileSystem#efa_enabled}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.exportPath">ExportPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#export_path FsxLustreFileSystem#export_path}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.fileSystemTypeVersion">FileSystemTypeVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#file_system_type_version FsxLustreFileSystem#file_system_type_version}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.finalBackupTags">FinalBackupTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#final_backup_tags FsxLustreFileSystem#final_backup_tags}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#id FsxLustreFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.importedFileChunkSize">ImportedFileChunkSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#imported_file_chunk_size FsxLustreFileSystem#imported_file_chunk_size}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.importPath">ImportPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#import_path FsxLustreFileSystem#import_path}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#kms_key_id FsxLustreFileSystem#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.logConfiguration">LogConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration">FsxLustreFileSystemLogConfiguration</a></code> | log_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.metadataConfiguration">MetadataConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfiguration">FsxLustreFileSystemMetadataConfiguration</a></code> | metadata_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.perUnitStorageThroughput">PerUnitStorageThroughput</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#per_unit_storage_throughput FsxLustreFileSystem#per_unit_storage_throughput}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.rootSquashConfiguration">RootSquashConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfiguration">FsxLustreFileSystemRootSquashConfiguration</a></code> | root_squash_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#security_group_ids FsxLustreFileSystem#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.skipFinalBackup">SkipFinalBackup</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#skip_final_backup FsxLustreFileSystem#skip_final_backup}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.storageCapacity">StorageCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#storage_capacity FsxLustreFileSystem#storage_capacity}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.storageType">StorageType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#storage_type FsxLustreFileSystem#storage_type}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#tags FsxLustreFileSystem#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#tags_all FsxLustreFileSystem#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts">FsxLustreFileSystemTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.weeklyMaintenanceStartTime">WeeklyMaintenanceStartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#weekly_maintenance_start_time FsxLustreFileSystem#weekly_maintenance_start_time}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#subnet_ids FsxLustreFileSystem#subnet_ids}.

---

##### `AutoImportPolicy`<sup>Optional</sup> <a name="AutoImportPolicy" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.autoImportPolicy"></a>

```go
AutoImportPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#auto_import_policy FsxLustreFileSystem#auto_import_policy}.

---

##### `AutomaticBackupRetentionDays`<sup>Optional</sup> <a name="AutomaticBackupRetentionDays" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.automaticBackupRetentionDays"></a>

```go
AutomaticBackupRetentionDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#automatic_backup_retention_days FsxLustreFileSystem#automatic_backup_retention_days}.

---

##### `BackupId`<sup>Optional</sup> <a name="BackupId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.backupId"></a>

```go
BackupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#backup_id FsxLustreFileSystem#backup_id}.

---

##### `CopyTagsToBackups`<sup>Optional</sup> <a name="CopyTagsToBackups" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.copyTagsToBackups"></a>

```go
CopyTagsToBackups interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#copy_tags_to_backups FsxLustreFileSystem#copy_tags_to_backups}.

---

##### `DailyAutomaticBackupStartTime`<sup>Optional</sup> <a name="DailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.dailyAutomaticBackupStartTime"></a>

```go
DailyAutomaticBackupStartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#daily_automatic_backup_start_time FsxLustreFileSystem#daily_automatic_backup_start_time}.

---

##### `DataCompressionType`<sup>Optional</sup> <a name="DataCompressionType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.dataCompressionType"></a>

```go
DataCompressionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#data_compression_type FsxLustreFileSystem#data_compression_type}.

---

##### `DeploymentType`<sup>Optional</sup> <a name="DeploymentType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.deploymentType"></a>

```go
DeploymentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#deployment_type FsxLustreFileSystem#deployment_type}.

---

##### `DriveCacheType`<sup>Optional</sup> <a name="DriveCacheType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.driveCacheType"></a>

```go
DriveCacheType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#drive_cache_type FsxLustreFileSystem#drive_cache_type}.

---

##### `EfaEnabled`<sup>Optional</sup> <a name="EfaEnabled" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.efaEnabled"></a>

```go
EfaEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#efa_enabled FsxLustreFileSystem#efa_enabled}.

---

##### `ExportPath`<sup>Optional</sup> <a name="ExportPath" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.exportPath"></a>

```go
ExportPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#export_path FsxLustreFileSystem#export_path}.

---

##### `FileSystemTypeVersion`<sup>Optional</sup> <a name="FileSystemTypeVersion" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.fileSystemTypeVersion"></a>

```go
FileSystemTypeVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#file_system_type_version FsxLustreFileSystem#file_system_type_version}.

---

##### `FinalBackupTags`<sup>Optional</sup> <a name="FinalBackupTags" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.finalBackupTags"></a>

```go
FinalBackupTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#final_backup_tags FsxLustreFileSystem#final_backup_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#id FsxLustreFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImportedFileChunkSize`<sup>Optional</sup> <a name="ImportedFileChunkSize" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.importedFileChunkSize"></a>

```go
ImportedFileChunkSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#imported_file_chunk_size FsxLustreFileSystem#imported_file_chunk_size}.

---

##### `ImportPath`<sup>Optional</sup> <a name="ImportPath" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.importPath"></a>

```go
ImportPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#import_path FsxLustreFileSystem#import_path}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#kms_key_id FsxLustreFileSystem#kms_key_id}.

---

##### `LogConfiguration`<sup>Optional</sup> <a name="LogConfiguration" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.logConfiguration"></a>

```go
LogConfiguration FsxLustreFileSystemLogConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration">FsxLustreFileSystemLogConfiguration</a>

log_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#log_configuration FsxLustreFileSystem#log_configuration}

---

##### `MetadataConfiguration`<sup>Optional</sup> <a name="MetadataConfiguration" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.metadataConfiguration"></a>

```go
MetadataConfiguration FsxLustreFileSystemMetadataConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfiguration">FsxLustreFileSystemMetadataConfiguration</a>

metadata_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#metadata_configuration FsxLustreFileSystem#metadata_configuration}

---

##### `PerUnitStorageThroughput`<sup>Optional</sup> <a name="PerUnitStorageThroughput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.perUnitStorageThroughput"></a>

```go
PerUnitStorageThroughput *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#per_unit_storage_throughput FsxLustreFileSystem#per_unit_storage_throughput}.

---

##### `RootSquashConfiguration`<sup>Optional</sup> <a name="RootSquashConfiguration" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.rootSquashConfiguration"></a>

```go
RootSquashConfiguration FsxLustreFileSystemRootSquashConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfiguration">FsxLustreFileSystemRootSquashConfiguration</a>

root_squash_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#root_squash_configuration FsxLustreFileSystem#root_squash_configuration}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#security_group_ids FsxLustreFileSystem#security_group_ids}.

---

##### `SkipFinalBackup`<sup>Optional</sup> <a name="SkipFinalBackup" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.skipFinalBackup"></a>

```go
SkipFinalBackup interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#skip_final_backup FsxLustreFileSystem#skip_final_backup}.

---

##### `StorageCapacity`<sup>Optional</sup> <a name="StorageCapacity" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.storageCapacity"></a>

```go
StorageCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#storage_capacity FsxLustreFileSystem#storage_capacity}.

---

##### `StorageType`<sup>Optional</sup> <a name="StorageType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.storageType"></a>

```go
StorageType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#storage_type FsxLustreFileSystem#storage_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#tags FsxLustreFileSystem#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#tags_all FsxLustreFileSystem#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.timeouts"></a>

```go
Timeouts FsxLustreFileSystemTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts">FsxLustreFileSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#timeouts FsxLustreFileSystem#timeouts}

---

##### `WeeklyMaintenanceStartTime`<sup>Optional</sup> <a name="WeeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.weeklyMaintenanceStartTime"></a>

```go
WeeklyMaintenanceStartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#weekly_maintenance_start_time FsxLustreFileSystem#weekly_maintenance_start_time}.

---

### FsxLustreFileSystemLogConfiguration <a name="FsxLustreFileSystemLogConfiguration" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxlustrefilesystem"

&fsxlustrefilesystem.FsxLustreFileSystemLogConfiguration {
	Destination: *string,
	Level: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#destination FsxLustreFileSystem#destination}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration.property.level">Level</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#level FsxLustreFileSystem#level}. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#destination FsxLustreFileSystem#destination}.

---

##### `Level`<sup>Optional</sup> <a name="Level" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration.property.level"></a>

```go
Level *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#level FsxLustreFileSystem#level}.

---

### FsxLustreFileSystemMetadataConfiguration <a name="FsxLustreFileSystemMetadataConfiguration" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxlustrefilesystem"

&fsxlustrefilesystem.FsxLustreFileSystemMetadataConfiguration {
	Iops: *f64,
	Mode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfiguration.property.iops">Iops</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#iops FsxLustreFileSystem#iops}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfiguration.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#mode FsxLustreFileSystem#mode}. |

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfiguration.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#iops FsxLustreFileSystem#iops}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfiguration.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#mode FsxLustreFileSystem#mode}.

---

### FsxLustreFileSystemRootSquashConfiguration <a name="FsxLustreFileSystemRootSquashConfiguration" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxlustrefilesystem"

&fsxlustrefilesystem.FsxLustreFileSystemRootSquashConfiguration {
	NoSquashNids: *[]*string,
	RootSquash: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfiguration.property.noSquashNids">NoSquashNids</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#no_squash_nids FsxLustreFileSystem#no_squash_nids}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfiguration.property.rootSquash">RootSquash</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#root_squash FsxLustreFileSystem#root_squash}. |

---

##### `NoSquashNids`<sup>Optional</sup> <a name="NoSquashNids" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfiguration.property.noSquashNids"></a>

```go
NoSquashNids *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#no_squash_nids FsxLustreFileSystem#no_squash_nids}.

---

##### `RootSquash`<sup>Optional</sup> <a name="RootSquash" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfiguration.property.rootSquash"></a>

```go
RootSquash *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#root_squash FsxLustreFileSystem#root_squash}.

---

### FsxLustreFileSystemTimeouts <a name="FsxLustreFileSystemTimeouts" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxlustrefilesystem"

&fsxlustrefilesystem.FsxLustreFileSystemTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#create FsxLustreFileSystem#create}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#delete FsxLustreFileSystem#delete}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#update FsxLustreFileSystem#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#create FsxLustreFileSystem#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#delete FsxLustreFileSystem#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/fsx_lustre_file_system#update FsxLustreFileSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxLustreFileSystemLogConfigurationOutputReference <a name="FsxLustreFileSystemLogConfigurationOutputReference" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxlustrefilesystem"

fsxlustrefilesystem.NewFsxLustreFileSystemLogConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxLustreFileSystemLogConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.resetLevel">ResetLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.resetDestination"></a>

```go
func ResetDestination()
```

##### `ResetLevel` <a name="ResetLevel" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.resetLevel"></a>

```go
func ResetLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.levelInput">LevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration">FsxLustreFileSystemLogConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.levelInput"></a>

```go
func LevelInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() FsxLustreFileSystemLogConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration">FsxLustreFileSystemLogConfiguration</a>

---


### FsxLustreFileSystemMetadataConfigurationOutputReference <a name="FsxLustreFileSystemMetadataConfigurationOutputReference" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxlustrefilesystem"

fsxlustrefilesystem.NewFsxLustreFileSystemMetadataConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxLustreFileSystemMetadataConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.resetIops"></a>

```go
func ResetIops()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.resetMode"></a>

```go
func ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfiguration">FsxLustreFileSystemMetadataConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() FsxLustreFileSystemMetadataConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemMetadataConfiguration">FsxLustreFileSystemMetadataConfiguration</a>

---


### FsxLustreFileSystemRootSquashConfigurationOutputReference <a name="FsxLustreFileSystemRootSquashConfigurationOutputReference" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxlustrefilesystem"

fsxlustrefilesystem.NewFsxLustreFileSystemRootSquashConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxLustreFileSystemRootSquashConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.resetNoSquashNids">ResetNoSquashNids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.resetRootSquash">ResetRootSquash</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNoSquashNids` <a name="ResetNoSquashNids" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.resetNoSquashNids"></a>

```go
func ResetNoSquashNids()
```

##### `ResetRootSquash` <a name="ResetRootSquash" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.resetRootSquash"></a>

```go
func ResetRootSquash()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.property.noSquashNidsInput">NoSquashNidsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.property.rootSquashInput">RootSquashInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.property.noSquashNids">NoSquashNids</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.property.rootSquash">RootSquash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfiguration">FsxLustreFileSystemRootSquashConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NoSquashNidsInput`<sup>Optional</sup> <a name="NoSquashNidsInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.property.noSquashNidsInput"></a>

```go
func NoSquashNidsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RootSquashInput`<sup>Optional</sup> <a name="RootSquashInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.property.rootSquashInput"></a>

```go
func RootSquashInput() *string
```

- *Type:* *string

---

##### `NoSquashNids`<sup>Required</sup> <a name="NoSquashNids" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.property.noSquashNids"></a>

```go
func NoSquashNids() *[]*string
```

- *Type:* *[]*string

---

##### `RootSquash`<sup>Required</sup> <a name="RootSquash" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.property.rootSquash"></a>

```go
func RootSquash() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() FsxLustreFileSystemRootSquashConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemRootSquashConfiguration">FsxLustreFileSystemRootSquashConfiguration</a>

---


### FsxLustreFileSystemTimeoutsOutputReference <a name="FsxLustreFileSystemTimeoutsOutputReference" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxlustrefilesystem"

fsxlustrefilesystem.NewFsxLustreFileSystemTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxLustreFileSystemTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



