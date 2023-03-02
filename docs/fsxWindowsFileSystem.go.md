# `fsxWindowsFileSystem` Submodule <a name="`fsxWindowsFileSystem` Submodule" id="@cdktf/provider-aws.fsxWindowsFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxWindowsFileSystem <a name="FsxWindowsFileSystem" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system aws_fsx_windows_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxwindowsfilesystem"

fsxwindowsfilesystem.NewFsxWindowsFileSystem(scope Construct, id *string, config FsxWindowsFileSystemConfig) FsxWindowsFileSystem
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig">FsxWindowsFileSystemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig">FsxWindowsFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putAuditLogConfiguration">PutAuditLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putSelfManagedActiveDirectory">PutSelfManagedActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetActiveDirectoryId">ResetActiveDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetAliases">ResetAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetAuditLogConfiguration">ResetAuditLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetAutomaticBackupRetentionDays">ResetAutomaticBackupRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetBackupId">ResetBackupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetCopyTagsToBackups">ResetCopyTagsToBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetDailyAutomaticBackupStartTime">ResetDailyAutomaticBackupStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetDeploymentType">ResetDeploymentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetPreferredSubnetId">ResetPreferredSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetSelfManagedActiveDirectory">ResetSelfManagedActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetSkipFinalBackup">ResetSkipFinalBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetStorageCapacity">ResetStorageCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetStorageType">ResetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetWeeklyMaintenanceStartTime">ResetWeeklyMaintenanceStartTime</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAuditLogConfiguration` <a name="PutAuditLogConfiguration" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putAuditLogConfiguration"></a>

```go
func PutAuditLogConfiguration(value FsxWindowsFileSystemAuditLogConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putAuditLogConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a>

---

##### `PutSelfManagedActiveDirectory` <a name="PutSelfManagedActiveDirectory" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putSelfManagedActiveDirectory"></a>

```go
func PutSelfManagedActiveDirectory(value FsxWindowsFileSystemSelfManagedActiveDirectory)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putSelfManagedActiveDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putTimeouts"></a>

```go
func PutTimeouts(value FsxWindowsFileSystemTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts">FsxWindowsFileSystemTimeouts</a>

---

##### `ResetActiveDirectoryId` <a name="ResetActiveDirectoryId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetActiveDirectoryId"></a>

```go
func ResetActiveDirectoryId()
```

##### `ResetAliases` <a name="ResetAliases" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetAliases"></a>

```go
func ResetAliases()
```

##### `ResetAuditLogConfiguration` <a name="ResetAuditLogConfiguration" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetAuditLogConfiguration"></a>

```go
func ResetAuditLogConfiguration()
```

##### `ResetAutomaticBackupRetentionDays` <a name="ResetAutomaticBackupRetentionDays" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetAutomaticBackupRetentionDays"></a>

```go
func ResetAutomaticBackupRetentionDays()
```

##### `ResetBackupId` <a name="ResetBackupId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetBackupId"></a>

```go
func ResetBackupId()
```

##### `ResetCopyTagsToBackups` <a name="ResetCopyTagsToBackups" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetCopyTagsToBackups"></a>

```go
func ResetCopyTagsToBackups()
```

##### `ResetDailyAutomaticBackupStartTime` <a name="ResetDailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetDailyAutomaticBackupStartTime"></a>

```go
func ResetDailyAutomaticBackupStartTime()
```

##### `ResetDeploymentType` <a name="ResetDeploymentType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetDeploymentType"></a>

```go
func ResetDeploymentType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetPreferredSubnetId` <a name="ResetPreferredSubnetId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetPreferredSubnetId"></a>

```go
func ResetPreferredSubnetId()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSelfManagedActiveDirectory` <a name="ResetSelfManagedActiveDirectory" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetSelfManagedActiveDirectory"></a>

```go
func ResetSelfManagedActiveDirectory()
```

##### `ResetSkipFinalBackup` <a name="ResetSkipFinalBackup" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetSkipFinalBackup"></a>

```go
func ResetSkipFinalBackup()
```

##### `ResetStorageCapacity` <a name="ResetStorageCapacity" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetStorageCapacity"></a>

```go
func ResetStorageCapacity()
```

##### `ResetStorageType` <a name="ResetStorageType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetStorageType"></a>

```go
func ResetStorageType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWeeklyMaintenanceStartTime` <a name="ResetWeeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetWeeklyMaintenanceStartTime"></a>

```go
func ResetWeeklyMaintenanceStartTime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxwindowsfilesystem"

fsxwindowsfilesystem.FsxWindowsFileSystem_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxwindowsfilesystem"

fsxwindowsfilesystem.FsxWindowsFileSystem_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxwindowsfilesystem"

fsxwindowsfilesystem.FsxWindowsFileSystem_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.auditLogConfiguration">AuditLogConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference">FsxWindowsFileSystemAuditLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.networkInterfaceIds">NetworkInterfaceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.preferredFileServerIp">PreferredFileServerIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.remoteAdministrationEndpoint">RemoteAdministrationEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.selfManagedActiveDirectory">SelfManagedActiveDirectory</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference">FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference">FsxWindowsFileSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.activeDirectoryIdInput">ActiveDirectoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.aliasesInput">AliasesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.auditLogConfigurationInput">AuditLogConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.automaticBackupRetentionDaysInput">AutomaticBackupRetentionDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.backupIdInput">BackupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.copyTagsToBackupsInput">CopyTagsToBackupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dailyAutomaticBackupStartTimeInput">DailyAutomaticBackupStartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.deploymentTypeInput">DeploymentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.preferredSubnetIdInput">PreferredSubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.selfManagedActiveDirectoryInput">SelfManagedActiveDirectoryInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.skipFinalBackupInput">SkipFinalBackupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageCapacityInput">StorageCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageTypeInput">StorageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.throughputCapacityInput">ThroughputCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.weeklyMaintenanceStartTimeInput">WeeklyMaintenanceStartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.activeDirectoryId">ActiveDirectoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.aliases">Aliases</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.automaticBackupRetentionDays">AutomaticBackupRetentionDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.backupId">BackupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.copyTagsToBackups">CopyTagsToBackups</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dailyAutomaticBackupStartTime">DailyAutomaticBackupStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.deploymentType">DeploymentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.preferredSubnetId">PreferredSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.skipFinalBackup">SkipFinalBackup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageCapacity">StorageCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageType">StorageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.throughputCapacity">ThroughputCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.weeklyMaintenanceStartTime">WeeklyMaintenanceStartTime</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AuditLogConfiguration`<sup>Required</sup> <a name="AuditLogConfiguration" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.auditLogConfiguration"></a>

```go
func AuditLogConfiguration() FsxWindowsFileSystemAuditLogConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference">FsxWindowsFileSystemAuditLogConfigurationOutputReference</a>

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `NetworkInterfaceIds`<sup>Required</sup> <a name="NetworkInterfaceIds" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.networkInterfaceIds"></a>

```go
func NetworkInterfaceIds() *[]*string
```

- *Type:* *[]*string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `PreferredFileServerIp`<sup>Required</sup> <a name="PreferredFileServerIp" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.preferredFileServerIp"></a>

```go
func PreferredFileServerIp() *string
```

- *Type:* *string

---

##### `RemoteAdministrationEndpoint`<sup>Required</sup> <a name="RemoteAdministrationEndpoint" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.remoteAdministrationEndpoint"></a>

```go
func RemoteAdministrationEndpoint() *string
```

- *Type:* *string

---

##### `SelfManagedActiveDirectory`<sup>Required</sup> <a name="SelfManagedActiveDirectory" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.selfManagedActiveDirectory"></a>

```go
func SelfManagedActiveDirectory() FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference">FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.timeouts"></a>

```go
func Timeouts() FsxWindowsFileSystemTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference">FsxWindowsFileSystemTimeoutsOutputReference</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `ActiveDirectoryIdInput`<sup>Optional</sup> <a name="ActiveDirectoryIdInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.activeDirectoryIdInput"></a>

```go
func ActiveDirectoryIdInput() *string
```

- *Type:* *string

---

##### `AliasesInput`<sup>Optional</sup> <a name="AliasesInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.aliasesInput"></a>

```go
func AliasesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuditLogConfigurationInput`<sup>Optional</sup> <a name="AuditLogConfigurationInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.auditLogConfigurationInput"></a>

```go
func AuditLogConfigurationInput() FsxWindowsFileSystemAuditLogConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a>

---

##### `AutomaticBackupRetentionDaysInput`<sup>Optional</sup> <a name="AutomaticBackupRetentionDaysInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.automaticBackupRetentionDaysInput"></a>

```go
func AutomaticBackupRetentionDaysInput() *f64
```

- *Type:* *f64

---

##### `BackupIdInput`<sup>Optional</sup> <a name="BackupIdInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.backupIdInput"></a>

```go
func BackupIdInput() *string
```

- *Type:* *string

---

##### `CopyTagsToBackupsInput`<sup>Optional</sup> <a name="CopyTagsToBackupsInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.copyTagsToBackupsInput"></a>

```go
func CopyTagsToBackupsInput() interface{}
```

- *Type:* interface{}

---

##### `DailyAutomaticBackupStartTimeInput`<sup>Optional</sup> <a name="DailyAutomaticBackupStartTimeInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dailyAutomaticBackupStartTimeInput"></a>

```go
func DailyAutomaticBackupStartTimeInput() *string
```

- *Type:* *string

---

##### `DeploymentTypeInput`<sup>Optional</sup> <a name="DeploymentTypeInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.deploymentTypeInput"></a>

```go
func DeploymentTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `PreferredSubnetIdInput`<sup>Optional</sup> <a name="PreferredSubnetIdInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.preferredSubnetIdInput"></a>

```go
func PreferredSubnetIdInput() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SelfManagedActiveDirectoryInput`<sup>Optional</sup> <a name="SelfManagedActiveDirectoryInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.selfManagedActiveDirectoryInput"></a>

```go
func SelfManagedActiveDirectoryInput() FsxWindowsFileSystemSelfManagedActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a>

---

##### `SkipFinalBackupInput`<sup>Optional</sup> <a name="SkipFinalBackupInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.skipFinalBackupInput"></a>

```go
func SkipFinalBackupInput() interface{}
```

- *Type:* interface{}

---

##### `StorageCapacityInput`<sup>Optional</sup> <a name="StorageCapacityInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageCapacityInput"></a>

```go
func StorageCapacityInput() *f64
```

- *Type:* *f64

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageTypeInput"></a>

```go
func StorageTypeInput() *string
```

- *Type:* *string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ThroughputCapacityInput`<sup>Optional</sup> <a name="ThroughputCapacityInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.throughputCapacityInput"></a>

```go
func ThroughputCapacityInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WeeklyMaintenanceStartTimeInput`<sup>Optional</sup> <a name="WeeklyMaintenanceStartTimeInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.weeklyMaintenanceStartTimeInput"></a>

```go
func WeeklyMaintenanceStartTimeInput() *string
```

- *Type:* *string

---

##### `ActiveDirectoryId`<sup>Required</sup> <a name="ActiveDirectoryId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.activeDirectoryId"></a>

```go
func ActiveDirectoryId() *string
```

- *Type:* *string

---

##### `Aliases`<sup>Required</sup> <a name="Aliases" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.aliases"></a>

```go
func Aliases() *[]*string
```

- *Type:* *[]*string

---

##### `AutomaticBackupRetentionDays`<sup>Required</sup> <a name="AutomaticBackupRetentionDays" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.automaticBackupRetentionDays"></a>

```go
func AutomaticBackupRetentionDays() *f64
```

- *Type:* *f64

---

##### `BackupId`<sup>Required</sup> <a name="BackupId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.backupId"></a>

```go
func BackupId() *string
```

- *Type:* *string

---

##### `CopyTagsToBackups`<sup>Required</sup> <a name="CopyTagsToBackups" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.copyTagsToBackups"></a>

```go
func CopyTagsToBackups() interface{}
```

- *Type:* interface{}

---

##### `DailyAutomaticBackupStartTime`<sup>Required</sup> <a name="DailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dailyAutomaticBackupStartTime"></a>

```go
func DailyAutomaticBackupStartTime() *string
```

- *Type:* *string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.deploymentType"></a>

```go
func DeploymentType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `PreferredSubnetId`<sup>Required</sup> <a name="PreferredSubnetId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.preferredSubnetId"></a>

```go
func PreferredSubnetId() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SkipFinalBackup`<sup>Required</sup> <a name="SkipFinalBackup" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.skipFinalBackup"></a>

```go
func SkipFinalBackup() interface{}
```

- *Type:* interface{}

---

##### `StorageCapacity`<sup>Required</sup> <a name="StorageCapacity" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageCapacity"></a>

```go
func StorageCapacity() *f64
```

- *Type:* *f64

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageType"></a>

```go
func StorageType() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ThroughputCapacity`<sup>Required</sup> <a name="ThroughputCapacity" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.throughputCapacity"></a>

```go
func ThroughputCapacity() *f64
```

- *Type:* *f64

---

##### `WeeklyMaintenanceStartTime`<sup>Required</sup> <a name="WeeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.weeklyMaintenanceStartTime"></a>

```go
func WeeklyMaintenanceStartTime() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FsxWindowsFileSystemAuditLogConfiguration <a name="FsxWindowsFileSystemAuditLogConfiguration" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxwindowsfilesystem"

&fsxwindowsfilesystem.FsxWindowsFileSystemAuditLogConfiguration {
	AuditLogDestination: *string,
	FileAccessAuditLogLevel: *string,
	FileShareAccessAuditLogLevel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.property.auditLogDestination">AuditLogDestination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#audit_log_destination FsxWindowsFileSystem#audit_log_destination}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.property.fileAccessAuditLogLevel">FileAccessAuditLogLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#file_access_audit_log_level FsxWindowsFileSystem#file_access_audit_log_level}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.property.fileShareAccessAuditLogLevel">FileShareAccessAuditLogLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#file_share_access_audit_log_level FsxWindowsFileSystem#file_share_access_audit_log_level}. |

---

##### `AuditLogDestination`<sup>Optional</sup> <a name="AuditLogDestination" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.property.auditLogDestination"></a>

```go
AuditLogDestination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#audit_log_destination FsxWindowsFileSystem#audit_log_destination}.

---

##### `FileAccessAuditLogLevel`<sup>Optional</sup> <a name="FileAccessAuditLogLevel" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.property.fileAccessAuditLogLevel"></a>

```go
FileAccessAuditLogLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#file_access_audit_log_level FsxWindowsFileSystem#file_access_audit_log_level}.

---

##### `FileShareAccessAuditLogLevel`<sup>Optional</sup> <a name="FileShareAccessAuditLogLevel" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.property.fileShareAccessAuditLogLevel"></a>

```go
FileShareAccessAuditLogLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#file_share_access_audit_log_level FsxWindowsFileSystem#file_share_access_audit_log_level}.

---

### FsxWindowsFileSystemConfig <a name="FsxWindowsFileSystemConfig" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxwindowsfilesystem"

&fsxwindowsfilesystem.FsxWindowsFileSystemConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SubnetIds: *[]*string,
	ThroughputCapacity: *f64,
	ActiveDirectoryId: *string,
	Aliases: *[]*string,
	AuditLogConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration,
	AutomaticBackupRetentionDays: *f64,
	BackupId: *string,
	CopyTagsToBackups: interface{},
	DailyAutomaticBackupStartTime: *string,
	DeploymentType: *string,
	Id: *string,
	KmsKeyId: *string,
	PreferredSubnetId: *string,
	SecurityGroupIds: *[]*string,
	SelfManagedActiveDirectory: github.com/cdktf/cdktf-provider-aws-go/aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory,
	SkipFinalBackup: interface{},
	StorageCapacity: *f64,
	StorageType: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts,
	WeeklyMaintenanceStartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#subnet_ids FsxWindowsFileSystem#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.throughputCapacity">ThroughputCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#throughput_capacity FsxWindowsFileSystem#throughput_capacity}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.activeDirectoryId">ActiveDirectoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#active_directory_id FsxWindowsFileSystem#active_directory_id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.aliases">Aliases</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#aliases FsxWindowsFileSystem#aliases}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.auditLogConfiguration">AuditLogConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a></code> | audit_log_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.automaticBackupRetentionDays">AutomaticBackupRetentionDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#automatic_backup_retention_days FsxWindowsFileSystem#automatic_backup_retention_days}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.backupId">BackupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#backup_id FsxWindowsFileSystem#backup_id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.copyTagsToBackups">CopyTagsToBackups</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#copy_tags_to_backups FsxWindowsFileSystem#copy_tags_to_backups}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.dailyAutomaticBackupStartTime">DailyAutomaticBackupStartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#daily_automatic_backup_start_time FsxWindowsFileSystem#daily_automatic_backup_start_time}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.deploymentType">DeploymentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#deployment_type FsxWindowsFileSystem#deployment_type}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#id FsxWindowsFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#kms_key_id FsxWindowsFileSystem#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.preferredSubnetId">PreferredSubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#preferred_subnet_id FsxWindowsFileSystem#preferred_subnet_id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#security_group_ids FsxWindowsFileSystem#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.selfManagedActiveDirectory">SelfManagedActiveDirectory</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a></code> | self_managed_active_directory block. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.skipFinalBackup">SkipFinalBackup</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#skip_final_backup FsxWindowsFileSystem#skip_final_backup}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.storageCapacity">StorageCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#storage_capacity FsxWindowsFileSystem#storage_capacity}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.storageType">StorageType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#storage_type FsxWindowsFileSystem#storage_type}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#tags FsxWindowsFileSystem#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#tags_all FsxWindowsFileSystem#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts">FsxWindowsFileSystemTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.weeklyMaintenanceStartTime">WeeklyMaintenanceStartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#weekly_maintenance_start_time FsxWindowsFileSystem#weekly_maintenance_start_time}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#subnet_ids FsxWindowsFileSystem#subnet_ids}.

---

##### `ThroughputCapacity`<sup>Required</sup> <a name="ThroughputCapacity" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.throughputCapacity"></a>

```go
ThroughputCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#throughput_capacity FsxWindowsFileSystem#throughput_capacity}.

---

##### `ActiveDirectoryId`<sup>Optional</sup> <a name="ActiveDirectoryId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.activeDirectoryId"></a>

```go
ActiveDirectoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#active_directory_id FsxWindowsFileSystem#active_directory_id}.

---

##### `Aliases`<sup>Optional</sup> <a name="Aliases" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.aliases"></a>

```go
Aliases *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#aliases FsxWindowsFileSystem#aliases}.

---

##### `AuditLogConfiguration`<sup>Optional</sup> <a name="AuditLogConfiguration" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.auditLogConfiguration"></a>

```go
AuditLogConfiguration FsxWindowsFileSystemAuditLogConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a>

audit_log_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#audit_log_configuration FsxWindowsFileSystem#audit_log_configuration}

---

##### `AutomaticBackupRetentionDays`<sup>Optional</sup> <a name="AutomaticBackupRetentionDays" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.automaticBackupRetentionDays"></a>

```go
AutomaticBackupRetentionDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#automatic_backup_retention_days FsxWindowsFileSystem#automatic_backup_retention_days}.

---

##### `BackupId`<sup>Optional</sup> <a name="BackupId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.backupId"></a>

```go
BackupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#backup_id FsxWindowsFileSystem#backup_id}.

---

##### `CopyTagsToBackups`<sup>Optional</sup> <a name="CopyTagsToBackups" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.copyTagsToBackups"></a>

```go
CopyTagsToBackups interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#copy_tags_to_backups FsxWindowsFileSystem#copy_tags_to_backups}.

---

##### `DailyAutomaticBackupStartTime`<sup>Optional</sup> <a name="DailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.dailyAutomaticBackupStartTime"></a>

```go
DailyAutomaticBackupStartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#daily_automatic_backup_start_time FsxWindowsFileSystem#daily_automatic_backup_start_time}.

---

##### `DeploymentType`<sup>Optional</sup> <a name="DeploymentType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.deploymentType"></a>

```go
DeploymentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#deployment_type FsxWindowsFileSystem#deployment_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#id FsxWindowsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#kms_key_id FsxWindowsFileSystem#kms_key_id}.

---

##### `PreferredSubnetId`<sup>Optional</sup> <a name="PreferredSubnetId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.preferredSubnetId"></a>

```go
PreferredSubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#preferred_subnet_id FsxWindowsFileSystem#preferred_subnet_id}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#security_group_ids FsxWindowsFileSystem#security_group_ids}.

---

##### `SelfManagedActiveDirectory`<sup>Optional</sup> <a name="SelfManagedActiveDirectory" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.selfManagedActiveDirectory"></a>

```go
SelfManagedActiveDirectory FsxWindowsFileSystemSelfManagedActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a>

self_managed_active_directory block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#self_managed_active_directory FsxWindowsFileSystem#self_managed_active_directory}

---

##### `SkipFinalBackup`<sup>Optional</sup> <a name="SkipFinalBackup" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.skipFinalBackup"></a>

```go
SkipFinalBackup interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#skip_final_backup FsxWindowsFileSystem#skip_final_backup}.

---

##### `StorageCapacity`<sup>Optional</sup> <a name="StorageCapacity" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.storageCapacity"></a>

```go
StorageCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#storage_capacity FsxWindowsFileSystem#storage_capacity}.

---

##### `StorageType`<sup>Optional</sup> <a name="StorageType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.storageType"></a>

```go
StorageType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#storage_type FsxWindowsFileSystem#storage_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#tags FsxWindowsFileSystem#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#tags_all FsxWindowsFileSystem#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.timeouts"></a>

```go
Timeouts FsxWindowsFileSystemTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts">FsxWindowsFileSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#timeouts FsxWindowsFileSystem#timeouts}

---

##### `WeeklyMaintenanceStartTime`<sup>Optional</sup> <a name="WeeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.weeklyMaintenanceStartTime"></a>

```go
WeeklyMaintenanceStartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#weekly_maintenance_start_time FsxWindowsFileSystem#weekly_maintenance_start_time}.

---

### FsxWindowsFileSystemSelfManagedActiveDirectory <a name="FsxWindowsFileSystemSelfManagedActiveDirectory" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxwindowsfilesystem"

&fsxwindowsfilesystem.FsxWindowsFileSystemSelfManagedActiveDirectory {
	DnsIps: *[]*string,
	DomainName: *string,
	Password: *string,
	Username: *string,
	FileSystemAdministratorsGroup: *string,
	OrganizationalUnitDistinguishedName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.dnsIps">DnsIps</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#dns_ips FsxWindowsFileSystem#dns_ips}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.domainName">DomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#domain_name FsxWindowsFileSystem#domain_name}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#password FsxWindowsFileSystem#password}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#username FsxWindowsFileSystem#username}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.fileSystemAdministratorsGroup">FileSystemAdministratorsGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#file_system_administrators_group FsxWindowsFileSystem#file_system_administrators_group}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.organizationalUnitDistinguishedName">OrganizationalUnitDistinguishedName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#organizational_unit_distinguished_name FsxWindowsFileSystem#organizational_unit_distinguished_name}. |

---

##### `DnsIps`<sup>Required</sup> <a name="DnsIps" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.dnsIps"></a>

```go
DnsIps *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#dns_ips FsxWindowsFileSystem#dns_ips}.

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#domain_name FsxWindowsFileSystem#domain_name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#password FsxWindowsFileSystem#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#username FsxWindowsFileSystem#username}.

---

##### `FileSystemAdministratorsGroup`<sup>Optional</sup> <a name="FileSystemAdministratorsGroup" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.fileSystemAdministratorsGroup"></a>

```go
FileSystemAdministratorsGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#file_system_administrators_group FsxWindowsFileSystem#file_system_administrators_group}.

---

##### `OrganizationalUnitDistinguishedName`<sup>Optional</sup> <a name="OrganizationalUnitDistinguishedName" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.organizationalUnitDistinguishedName"></a>

```go
OrganizationalUnitDistinguishedName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#organizational_unit_distinguished_name FsxWindowsFileSystem#organizational_unit_distinguished_name}.

---

### FsxWindowsFileSystemTimeouts <a name="FsxWindowsFileSystemTimeouts" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxwindowsfilesystem"

&fsxwindowsfilesystem.FsxWindowsFileSystemTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#create FsxWindowsFileSystem#create}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#delete FsxWindowsFileSystem#delete}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#update FsxWindowsFileSystem#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#create FsxWindowsFileSystem#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#delete FsxWindowsFileSystem#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#update FsxWindowsFileSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxWindowsFileSystemAuditLogConfigurationOutputReference <a name="FsxWindowsFileSystemAuditLogConfigurationOutputReference" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxwindowsfilesystem"

fsxwindowsfilesystem.NewFsxWindowsFileSystemAuditLogConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxWindowsFileSystemAuditLogConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resetAuditLogDestination">ResetAuditLogDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resetFileAccessAuditLogLevel">ResetFileAccessAuditLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resetFileShareAccessAuditLogLevel">ResetFileShareAccessAuditLogLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuditLogDestination` <a name="ResetAuditLogDestination" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resetAuditLogDestination"></a>

```go
func ResetAuditLogDestination()
```

##### `ResetFileAccessAuditLogLevel` <a name="ResetFileAccessAuditLogLevel" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resetFileAccessAuditLogLevel"></a>

```go
func ResetFileAccessAuditLogLevel()
```

##### `ResetFileShareAccessAuditLogLevel` <a name="ResetFileShareAccessAuditLogLevel" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resetFileShareAccessAuditLogLevel"></a>

```go
func ResetFileShareAccessAuditLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.auditLogDestinationInput">AuditLogDestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileAccessAuditLogLevelInput">FileAccessAuditLogLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileShareAccessAuditLogLevelInput">FileShareAccessAuditLogLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.auditLogDestination">AuditLogDestination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileAccessAuditLogLevel">FileAccessAuditLogLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileShareAccessAuditLogLevel">FileShareAccessAuditLogLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuditLogDestinationInput`<sup>Optional</sup> <a name="AuditLogDestinationInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.auditLogDestinationInput"></a>

```go
func AuditLogDestinationInput() *string
```

- *Type:* *string

---

##### `FileAccessAuditLogLevelInput`<sup>Optional</sup> <a name="FileAccessAuditLogLevelInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileAccessAuditLogLevelInput"></a>

```go
func FileAccessAuditLogLevelInput() *string
```

- *Type:* *string

---

##### `FileShareAccessAuditLogLevelInput`<sup>Optional</sup> <a name="FileShareAccessAuditLogLevelInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileShareAccessAuditLogLevelInput"></a>

```go
func FileShareAccessAuditLogLevelInput() *string
```

- *Type:* *string

---

##### `AuditLogDestination`<sup>Required</sup> <a name="AuditLogDestination" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.auditLogDestination"></a>

```go
func AuditLogDestination() *string
```

- *Type:* *string

---

##### `FileAccessAuditLogLevel`<sup>Required</sup> <a name="FileAccessAuditLogLevel" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileAccessAuditLogLevel"></a>

```go
func FileAccessAuditLogLevel() *string
```

- *Type:* *string

---

##### `FileShareAccessAuditLogLevel`<sup>Required</sup> <a name="FileShareAccessAuditLogLevel" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileShareAccessAuditLogLevel"></a>

```go
func FileShareAccessAuditLogLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() FsxWindowsFileSystemAuditLogConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a>

---


### FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference <a name="FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxwindowsfilesystem"

fsxwindowsfilesystem.NewFsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.resetFileSystemAdministratorsGroup">ResetFileSystemAdministratorsGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.resetOrganizationalUnitDistinguishedName">ResetOrganizationalUnitDistinguishedName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileSystemAdministratorsGroup` <a name="ResetFileSystemAdministratorsGroup" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.resetFileSystemAdministratorsGroup"></a>

```go
func ResetFileSystemAdministratorsGroup()
```

##### `ResetOrganizationalUnitDistinguishedName` <a name="ResetOrganizationalUnitDistinguishedName" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.resetOrganizationalUnitDistinguishedName"></a>

```go
func ResetOrganizationalUnitDistinguishedName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.dnsIpsInput">DnsIpsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.fileSystemAdministratorsGroupInput">FileSystemAdministratorsGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.organizationalUnitDistinguishedNameInput">OrganizationalUnitDistinguishedNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.dnsIps">DnsIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.fileSystemAdministratorsGroup">FileSystemAdministratorsGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.organizationalUnitDistinguishedName">OrganizationalUnitDistinguishedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsIpsInput`<sup>Optional</sup> <a name="DnsIpsInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.dnsIpsInput"></a>

```go
func DnsIpsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `FileSystemAdministratorsGroupInput`<sup>Optional</sup> <a name="FileSystemAdministratorsGroupInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.fileSystemAdministratorsGroupInput"></a>

```go
func FileSystemAdministratorsGroupInput() *string
```

- *Type:* *string

---

##### `OrganizationalUnitDistinguishedNameInput`<sup>Optional</sup> <a name="OrganizationalUnitDistinguishedNameInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.organizationalUnitDistinguishedNameInput"></a>

```go
func OrganizationalUnitDistinguishedNameInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `DnsIps`<sup>Required</sup> <a name="DnsIps" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.dnsIps"></a>

```go
func DnsIps() *[]*string
```

- *Type:* *[]*string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `FileSystemAdministratorsGroup`<sup>Required</sup> <a name="FileSystemAdministratorsGroup" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.fileSystemAdministratorsGroup"></a>

```go
func FileSystemAdministratorsGroup() *string
```

- *Type:* *string

---

##### `OrganizationalUnitDistinguishedName`<sup>Required</sup> <a name="OrganizationalUnitDistinguishedName" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.organizationalUnitDistinguishedName"></a>

```go
func OrganizationalUnitDistinguishedName() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.internalValue"></a>

```go
func InternalValue() FsxWindowsFileSystemSelfManagedActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a>

---


### FsxWindowsFileSystemTimeoutsOutputReference <a name="FsxWindowsFileSystemTimeoutsOutputReference" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxwindowsfilesystem"

fsxwindowsfilesystem.NewFsxWindowsFileSystemTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxWindowsFileSystemTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



