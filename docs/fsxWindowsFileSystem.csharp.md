# `fsxWindowsFileSystem` Submodule <a name="`fsxWindowsFileSystem` Submodule" id="@cdktf/provider-aws.fsxWindowsFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxWindowsFileSystem <a name="FsxWindowsFileSystem" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system aws_fsx_windows_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxWindowsFileSystem(Construct Scope, string Id, FsxWindowsFileSystemConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig">FsxWindowsFileSystemConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAuditLogConfiguration` <a name="PutAuditLogConfiguration" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putAuditLogConfiguration"></a>

```csharp
private void PutAuditLogConfiguration(FsxWindowsFileSystemAuditLogConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putAuditLogConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a>

---

##### `PutSelfManagedActiveDirectory` <a name="PutSelfManagedActiveDirectory" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putSelfManagedActiveDirectory"></a>

```csharp
private void PutSelfManagedActiveDirectory(FsxWindowsFileSystemSelfManagedActiveDirectory Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putSelfManagedActiveDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putTimeouts"></a>

```csharp
private void PutTimeouts(FsxWindowsFileSystemTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts">FsxWindowsFileSystemTimeouts</a>

---

##### `ResetActiveDirectoryId` <a name="ResetActiveDirectoryId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetActiveDirectoryId"></a>

```csharp
private void ResetActiveDirectoryId()
```

##### `ResetAliases` <a name="ResetAliases" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetAliases"></a>

```csharp
private void ResetAliases()
```

##### `ResetAuditLogConfiguration` <a name="ResetAuditLogConfiguration" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetAuditLogConfiguration"></a>

```csharp
private void ResetAuditLogConfiguration()
```

##### `ResetAutomaticBackupRetentionDays` <a name="ResetAutomaticBackupRetentionDays" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetAutomaticBackupRetentionDays"></a>

```csharp
private void ResetAutomaticBackupRetentionDays()
```

##### `ResetBackupId` <a name="ResetBackupId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetBackupId"></a>

```csharp
private void ResetBackupId()
```

##### `ResetCopyTagsToBackups` <a name="ResetCopyTagsToBackups" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetCopyTagsToBackups"></a>

```csharp
private void ResetCopyTagsToBackups()
```

##### `ResetDailyAutomaticBackupStartTime` <a name="ResetDailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetDailyAutomaticBackupStartTime"></a>

```csharp
private void ResetDailyAutomaticBackupStartTime()
```

##### `ResetDeploymentType` <a name="ResetDeploymentType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetDeploymentType"></a>

```csharp
private void ResetDeploymentType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetPreferredSubnetId` <a name="ResetPreferredSubnetId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetPreferredSubnetId"></a>

```csharp
private void ResetPreferredSubnetId()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSelfManagedActiveDirectory` <a name="ResetSelfManagedActiveDirectory" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetSelfManagedActiveDirectory"></a>

```csharp
private void ResetSelfManagedActiveDirectory()
```

##### `ResetSkipFinalBackup` <a name="ResetSkipFinalBackup" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetSkipFinalBackup"></a>

```csharp
private void ResetSkipFinalBackup()
```

##### `ResetStorageCapacity` <a name="ResetStorageCapacity" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetStorageCapacity"></a>

```csharp
private void ResetStorageCapacity()
```

##### `ResetStorageType` <a name="ResetStorageType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetStorageType"></a>

```csharp
private void ResetStorageType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWeeklyMaintenanceStartTime` <a name="ResetWeeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.resetWeeklyMaintenanceStartTime"></a>

```csharp
private void ResetWeeklyMaintenanceStartTime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

FsxWindowsFileSystem.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

FsxWindowsFileSystem.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

FsxWindowsFileSystem.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.auditLogConfiguration">AuditLogConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference">FsxWindowsFileSystemAuditLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.networkInterfaceIds">NetworkInterfaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.preferredFileServerIp">PreferredFileServerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.remoteAdministrationEndpoint">RemoteAdministrationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.selfManagedActiveDirectory">SelfManagedActiveDirectory</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference">FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference">FsxWindowsFileSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.activeDirectoryIdInput">ActiveDirectoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.aliasesInput">AliasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.auditLogConfigurationInput">AuditLogConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.automaticBackupRetentionDaysInput">AutomaticBackupRetentionDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.backupIdInput">BackupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.copyTagsToBackupsInput">CopyTagsToBackupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dailyAutomaticBackupStartTimeInput">DailyAutomaticBackupStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.deploymentTypeInput">DeploymentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.preferredSubnetIdInput">PreferredSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.selfManagedActiveDirectoryInput">SelfManagedActiveDirectoryInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.skipFinalBackupInput">SkipFinalBackupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageCapacityInput">StorageCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageTypeInput">StorageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.throughputCapacityInput">ThroughputCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.weeklyMaintenanceStartTimeInput">WeeklyMaintenanceStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.activeDirectoryId">ActiveDirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.aliases">Aliases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.automaticBackupRetentionDays">AutomaticBackupRetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.backupId">BackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.copyTagsToBackups">CopyTagsToBackups</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dailyAutomaticBackupStartTime">DailyAutomaticBackupStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.deploymentType">DeploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.preferredSubnetId">PreferredSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.skipFinalBackup">SkipFinalBackup</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageCapacity">StorageCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.throughputCapacity">ThroughputCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.weeklyMaintenanceStartTime">WeeklyMaintenanceStartTime</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AuditLogConfiguration`<sup>Required</sup> <a name="AuditLogConfiguration" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.auditLogConfiguration"></a>

```csharp
public FsxWindowsFileSystemAuditLogConfigurationOutputReference AuditLogConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference">FsxWindowsFileSystemAuditLogConfigurationOutputReference</a>

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `NetworkInterfaceIds`<sup>Required</sup> <a name="NetworkInterfaceIds" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.networkInterfaceIds"></a>

```csharp
public string[] NetworkInterfaceIds { get; }
```

- *Type:* string[]

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `PreferredFileServerIp`<sup>Required</sup> <a name="PreferredFileServerIp" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.preferredFileServerIp"></a>

```csharp
public string PreferredFileServerIp { get; }
```

- *Type:* string

---

##### `RemoteAdministrationEndpoint`<sup>Required</sup> <a name="RemoteAdministrationEndpoint" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.remoteAdministrationEndpoint"></a>

```csharp
public string RemoteAdministrationEndpoint { get; }
```

- *Type:* string

---

##### `SelfManagedActiveDirectory`<sup>Required</sup> <a name="SelfManagedActiveDirectory" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.selfManagedActiveDirectory"></a>

```csharp
public FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference SelfManagedActiveDirectory { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference">FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.timeouts"></a>

```csharp
public FsxWindowsFileSystemTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference">FsxWindowsFileSystemTimeoutsOutputReference</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `ActiveDirectoryIdInput`<sup>Optional</sup> <a name="ActiveDirectoryIdInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.activeDirectoryIdInput"></a>

```csharp
public string ActiveDirectoryIdInput { get; }
```

- *Type:* string

---

##### `AliasesInput`<sup>Optional</sup> <a name="AliasesInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.aliasesInput"></a>

```csharp
public string[] AliasesInput { get; }
```

- *Type:* string[]

---

##### `AuditLogConfigurationInput`<sup>Optional</sup> <a name="AuditLogConfigurationInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.auditLogConfigurationInput"></a>

```csharp
public FsxWindowsFileSystemAuditLogConfiguration AuditLogConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a>

---

##### `AutomaticBackupRetentionDaysInput`<sup>Optional</sup> <a name="AutomaticBackupRetentionDaysInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.automaticBackupRetentionDaysInput"></a>

```csharp
public double AutomaticBackupRetentionDaysInput { get; }
```

- *Type:* double

---

##### `BackupIdInput`<sup>Optional</sup> <a name="BackupIdInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.backupIdInput"></a>

```csharp
public string BackupIdInput { get; }
```

- *Type:* string

---

##### `CopyTagsToBackupsInput`<sup>Optional</sup> <a name="CopyTagsToBackupsInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.copyTagsToBackupsInput"></a>

```csharp
public object CopyTagsToBackupsInput { get; }
```

- *Type:* object

---

##### `DailyAutomaticBackupStartTimeInput`<sup>Optional</sup> <a name="DailyAutomaticBackupStartTimeInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dailyAutomaticBackupStartTimeInput"></a>

```csharp
public string DailyAutomaticBackupStartTimeInput { get; }
```

- *Type:* string

---

##### `DeploymentTypeInput`<sup>Optional</sup> <a name="DeploymentTypeInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.deploymentTypeInput"></a>

```csharp
public string DeploymentTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `PreferredSubnetIdInput`<sup>Optional</sup> <a name="PreferredSubnetIdInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.preferredSubnetIdInput"></a>

```csharp
public string PreferredSubnetIdInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SelfManagedActiveDirectoryInput`<sup>Optional</sup> <a name="SelfManagedActiveDirectoryInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.selfManagedActiveDirectoryInput"></a>

```csharp
public FsxWindowsFileSystemSelfManagedActiveDirectory SelfManagedActiveDirectoryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a>

---

##### `SkipFinalBackupInput`<sup>Optional</sup> <a name="SkipFinalBackupInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.skipFinalBackupInput"></a>

```csharp
public object SkipFinalBackupInput { get; }
```

- *Type:* object

---

##### `StorageCapacityInput`<sup>Optional</sup> <a name="StorageCapacityInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageCapacityInput"></a>

```csharp
public double StorageCapacityInput { get; }
```

- *Type:* double

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageTypeInput"></a>

```csharp
public string StorageTypeInput { get; }
```

- *Type:* string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ThroughputCapacityInput`<sup>Optional</sup> <a name="ThroughputCapacityInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.throughputCapacityInput"></a>

```csharp
public double ThroughputCapacityInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WeeklyMaintenanceStartTimeInput`<sup>Optional</sup> <a name="WeeklyMaintenanceStartTimeInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.weeklyMaintenanceStartTimeInput"></a>

```csharp
public string WeeklyMaintenanceStartTimeInput { get; }
```

- *Type:* string

---

##### `ActiveDirectoryId`<sup>Required</sup> <a name="ActiveDirectoryId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.activeDirectoryId"></a>

```csharp
public string ActiveDirectoryId { get; }
```

- *Type:* string

---

##### `Aliases`<sup>Required</sup> <a name="Aliases" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.aliases"></a>

```csharp
public string[] Aliases { get; }
```

- *Type:* string[]

---

##### `AutomaticBackupRetentionDays`<sup>Required</sup> <a name="AutomaticBackupRetentionDays" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.automaticBackupRetentionDays"></a>

```csharp
public double AutomaticBackupRetentionDays { get; }
```

- *Type:* double

---

##### `BackupId`<sup>Required</sup> <a name="BackupId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.backupId"></a>

```csharp
public string BackupId { get; }
```

- *Type:* string

---

##### `CopyTagsToBackups`<sup>Required</sup> <a name="CopyTagsToBackups" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.copyTagsToBackups"></a>

```csharp
public object CopyTagsToBackups { get; }
```

- *Type:* object

---

##### `DailyAutomaticBackupStartTime`<sup>Required</sup> <a name="DailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.dailyAutomaticBackupStartTime"></a>

```csharp
public string DailyAutomaticBackupStartTime { get; }
```

- *Type:* string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.deploymentType"></a>

```csharp
public string DeploymentType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `PreferredSubnetId`<sup>Required</sup> <a name="PreferredSubnetId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.preferredSubnetId"></a>

```csharp
public string PreferredSubnetId { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SkipFinalBackup`<sup>Required</sup> <a name="SkipFinalBackup" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.skipFinalBackup"></a>

```csharp
public object SkipFinalBackup { get; }
```

- *Type:* object

---

##### `StorageCapacity`<sup>Required</sup> <a name="StorageCapacity" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageCapacity"></a>

```csharp
public double StorageCapacity { get; }
```

- *Type:* double

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ThroughputCapacity`<sup>Required</sup> <a name="ThroughputCapacity" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.throughputCapacity"></a>

```csharp
public double ThroughputCapacity { get; }
```

- *Type:* double

---

##### `WeeklyMaintenanceStartTime`<sup>Required</sup> <a name="WeeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.weeklyMaintenanceStartTime"></a>

```csharp
public string WeeklyMaintenanceStartTime { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystem.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FsxWindowsFileSystemAuditLogConfiguration <a name="FsxWindowsFileSystemAuditLogConfiguration" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxWindowsFileSystemAuditLogConfiguration {
    string AuditLogDestination = null,
    string FileAccessAuditLogLevel = null,
    string FileShareAccessAuditLogLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.property.auditLogDestination">AuditLogDestination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#audit_log_destination FsxWindowsFileSystem#audit_log_destination}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.property.fileAccessAuditLogLevel">FileAccessAuditLogLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#file_access_audit_log_level FsxWindowsFileSystem#file_access_audit_log_level}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.property.fileShareAccessAuditLogLevel">FileShareAccessAuditLogLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#file_share_access_audit_log_level FsxWindowsFileSystem#file_share_access_audit_log_level}. |

---

##### `AuditLogDestination`<sup>Optional</sup> <a name="AuditLogDestination" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.property.auditLogDestination"></a>

```csharp
public string AuditLogDestination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#audit_log_destination FsxWindowsFileSystem#audit_log_destination}.

---

##### `FileAccessAuditLogLevel`<sup>Optional</sup> <a name="FileAccessAuditLogLevel" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.property.fileAccessAuditLogLevel"></a>

```csharp
public string FileAccessAuditLogLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#file_access_audit_log_level FsxWindowsFileSystem#file_access_audit_log_level}.

---

##### `FileShareAccessAuditLogLevel`<sup>Optional</sup> <a name="FileShareAccessAuditLogLevel" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration.property.fileShareAccessAuditLogLevel"></a>

```csharp
public string FileShareAccessAuditLogLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#file_share_access_audit_log_level FsxWindowsFileSystem#file_share_access_audit_log_level}.

---

### FsxWindowsFileSystemConfig <a name="FsxWindowsFileSystemConfig" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxWindowsFileSystemConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] SubnetIds,
    double ThroughputCapacity,
    string ActiveDirectoryId = null,
    string[] Aliases = null,
    FsxWindowsFileSystemAuditLogConfiguration AuditLogConfiguration = null,
    double AutomaticBackupRetentionDays = null,
    string BackupId = null,
    object CopyTagsToBackups = null,
    string DailyAutomaticBackupStartTime = null,
    string DeploymentType = null,
    string Id = null,
    string KmsKeyId = null,
    string PreferredSubnetId = null,
    string[] SecurityGroupIds = null,
    FsxWindowsFileSystemSelfManagedActiveDirectory SelfManagedActiveDirectory = null,
    object SkipFinalBackup = null,
    double StorageCapacity = null,
    string StorageType = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    FsxWindowsFileSystemTimeouts Timeouts = null,
    string WeeklyMaintenanceStartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#subnet_ids FsxWindowsFileSystem#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.throughputCapacity">ThroughputCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#throughput_capacity FsxWindowsFileSystem#throughput_capacity}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.activeDirectoryId">ActiveDirectoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#active_directory_id FsxWindowsFileSystem#active_directory_id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.aliases">Aliases</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#aliases FsxWindowsFileSystem#aliases}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.auditLogConfiguration">AuditLogConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a></code> | audit_log_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.automaticBackupRetentionDays">AutomaticBackupRetentionDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#automatic_backup_retention_days FsxWindowsFileSystem#automatic_backup_retention_days}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.backupId">BackupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#backup_id FsxWindowsFileSystem#backup_id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.copyTagsToBackups">CopyTagsToBackups</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#copy_tags_to_backups FsxWindowsFileSystem#copy_tags_to_backups}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.dailyAutomaticBackupStartTime">DailyAutomaticBackupStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#daily_automatic_backup_start_time FsxWindowsFileSystem#daily_automatic_backup_start_time}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.deploymentType">DeploymentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#deployment_type FsxWindowsFileSystem#deployment_type}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#id FsxWindowsFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#kms_key_id FsxWindowsFileSystem#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.preferredSubnetId">PreferredSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#preferred_subnet_id FsxWindowsFileSystem#preferred_subnet_id}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#security_group_ids FsxWindowsFileSystem#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.selfManagedActiveDirectory">SelfManagedActiveDirectory</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a></code> | self_managed_active_directory block. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.skipFinalBackup">SkipFinalBackup</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#skip_final_backup FsxWindowsFileSystem#skip_final_backup}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.storageCapacity">StorageCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#storage_capacity FsxWindowsFileSystem#storage_capacity}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.storageType">StorageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#storage_type FsxWindowsFileSystem#storage_type}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#tags FsxWindowsFileSystem#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#tags_all FsxWindowsFileSystem#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts">FsxWindowsFileSystemTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.weeklyMaintenanceStartTime">WeeklyMaintenanceStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#weekly_maintenance_start_time FsxWindowsFileSystem#weekly_maintenance_start_time}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#subnet_ids FsxWindowsFileSystem#subnet_ids}.

---

##### `ThroughputCapacity`<sup>Required</sup> <a name="ThroughputCapacity" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.throughputCapacity"></a>

```csharp
public double ThroughputCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#throughput_capacity FsxWindowsFileSystem#throughput_capacity}.

---

##### `ActiveDirectoryId`<sup>Optional</sup> <a name="ActiveDirectoryId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.activeDirectoryId"></a>

```csharp
public string ActiveDirectoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#active_directory_id FsxWindowsFileSystem#active_directory_id}.

---

##### `Aliases`<sup>Optional</sup> <a name="Aliases" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.aliases"></a>

```csharp
public string[] Aliases { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#aliases FsxWindowsFileSystem#aliases}.

---

##### `AuditLogConfiguration`<sup>Optional</sup> <a name="AuditLogConfiguration" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.auditLogConfiguration"></a>

```csharp
public FsxWindowsFileSystemAuditLogConfiguration AuditLogConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a>

audit_log_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#audit_log_configuration FsxWindowsFileSystem#audit_log_configuration}

---

##### `AutomaticBackupRetentionDays`<sup>Optional</sup> <a name="AutomaticBackupRetentionDays" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.automaticBackupRetentionDays"></a>

```csharp
public double AutomaticBackupRetentionDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#automatic_backup_retention_days FsxWindowsFileSystem#automatic_backup_retention_days}.

---

##### `BackupId`<sup>Optional</sup> <a name="BackupId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.backupId"></a>

```csharp
public string BackupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#backup_id FsxWindowsFileSystem#backup_id}.

---

##### `CopyTagsToBackups`<sup>Optional</sup> <a name="CopyTagsToBackups" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.copyTagsToBackups"></a>

```csharp
public object CopyTagsToBackups { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#copy_tags_to_backups FsxWindowsFileSystem#copy_tags_to_backups}.

---

##### `DailyAutomaticBackupStartTime`<sup>Optional</sup> <a name="DailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.dailyAutomaticBackupStartTime"></a>

```csharp
public string DailyAutomaticBackupStartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#daily_automatic_backup_start_time FsxWindowsFileSystem#daily_automatic_backup_start_time}.

---

##### `DeploymentType`<sup>Optional</sup> <a name="DeploymentType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.deploymentType"></a>

```csharp
public string DeploymentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#deployment_type FsxWindowsFileSystem#deployment_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#id FsxWindowsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#kms_key_id FsxWindowsFileSystem#kms_key_id}.

---

##### `PreferredSubnetId`<sup>Optional</sup> <a name="PreferredSubnetId" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.preferredSubnetId"></a>

```csharp
public string PreferredSubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#preferred_subnet_id FsxWindowsFileSystem#preferred_subnet_id}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#security_group_ids FsxWindowsFileSystem#security_group_ids}.

---

##### `SelfManagedActiveDirectory`<sup>Optional</sup> <a name="SelfManagedActiveDirectory" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.selfManagedActiveDirectory"></a>

```csharp
public FsxWindowsFileSystemSelfManagedActiveDirectory SelfManagedActiveDirectory { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a>

self_managed_active_directory block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#self_managed_active_directory FsxWindowsFileSystem#self_managed_active_directory}

---

##### `SkipFinalBackup`<sup>Optional</sup> <a name="SkipFinalBackup" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.skipFinalBackup"></a>

```csharp
public object SkipFinalBackup { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#skip_final_backup FsxWindowsFileSystem#skip_final_backup}.

---

##### `StorageCapacity`<sup>Optional</sup> <a name="StorageCapacity" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.storageCapacity"></a>

```csharp
public double StorageCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#storage_capacity FsxWindowsFileSystem#storage_capacity}.

---

##### `StorageType`<sup>Optional</sup> <a name="StorageType" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.storageType"></a>

```csharp
public string StorageType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#storage_type FsxWindowsFileSystem#storage_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#tags FsxWindowsFileSystem#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#tags_all FsxWindowsFileSystem#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.timeouts"></a>

```csharp
public FsxWindowsFileSystemTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts">FsxWindowsFileSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#timeouts FsxWindowsFileSystem#timeouts}

---

##### `WeeklyMaintenanceStartTime`<sup>Optional</sup> <a name="WeeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemConfig.property.weeklyMaintenanceStartTime"></a>

```csharp
public string WeeklyMaintenanceStartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#weekly_maintenance_start_time FsxWindowsFileSystem#weekly_maintenance_start_time}.

---

### FsxWindowsFileSystemSelfManagedActiveDirectory <a name="FsxWindowsFileSystemSelfManagedActiveDirectory" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxWindowsFileSystemSelfManagedActiveDirectory {
    string[] DnsIps,
    string DomainName,
    string Password,
    string Username,
    string FileSystemAdministratorsGroup = null,
    string OrganizationalUnitDistinguishedName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.dnsIps">DnsIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#dns_ips FsxWindowsFileSystem#dns_ips}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#domain_name FsxWindowsFileSystem#domain_name}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#password FsxWindowsFileSystem#password}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#username FsxWindowsFileSystem#username}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.fileSystemAdministratorsGroup">FileSystemAdministratorsGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#file_system_administrators_group FsxWindowsFileSystem#file_system_administrators_group}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.organizationalUnitDistinguishedName">OrganizationalUnitDistinguishedName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#organizational_unit_distinguished_name FsxWindowsFileSystem#organizational_unit_distinguished_name}. |

---

##### `DnsIps`<sup>Required</sup> <a name="DnsIps" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.dnsIps"></a>

```csharp
public string[] DnsIps { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#dns_ips FsxWindowsFileSystem#dns_ips}.

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#domain_name FsxWindowsFileSystem#domain_name}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#password FsxWindowsFileSystem#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#username FsxWindowsFileSystem#username}.

---

##### `FileSystemAdministratorsGroup`<sup>Optional</sup> <a name="FileSystemAdministratorsGroup" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.fileSystemAdministratorsGroup"></a>

```csharp
public string FileSystemAdministratorsGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#file_system_administrators_group FsxWindowsFileSystem#file_system_administrators_group}.

---

##### `OrganizationalUnitDistinguishedName`<sup>Optional</sup> <a name="OrganizationalUnitDistinguishedName" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory.property.organizationalUnitDistinguishedName"></a>

```csharp
public string OrganizationalUnitDistinguishedName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#organizational_unit_distinguished_name FsxWindowsFileSystem#organizational_unit_distinguished_name}.

---

### FsxWindowsFileSystemTimeouts <a name="FsxWindowsFileSystemTimeouts" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxWindowsFileSystemTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#create FsxWindowsFileSystem#create}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#delete FsxWindowsFileSystem#delete}. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#update FsxWindowsFileSystem#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#create FsxWindowsFileSystem#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#delete FsxWindowsFileSystem#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system#update FsxWindowsFileSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxWindowsFileSystemAuditLogConfigurationOutputReference <a name="FsxWindowsFileSystemAuditLogConfigurationOutputReference" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxWindowsFileSystemAuditLogConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuditLogDestination` <a name="ResetAuditLogDestination" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resetAuditLogDestination"></a>

```csharp
private void ResetAuditLogDestination()
```

##### `ResetFileAccessAuditLogLevel` <a name="ResetFileAccessAuditLogLevel" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resetFileAccessAuditLogLevel"></a>

```csharp
private void ResetFileAccessAuditLogLevel()
```

##### `ResetFileShareAccessAuditLogLevel` <a name="ResetFileShareAccessAuditLogLevel" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.resetFileShareAccessAuditLogLevel"></a>

```csharp
private void ResetFileShareAccessAuditLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.auditLogDestinationInput">AuditLogDestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileAccessAuditLogLevelInput">FileAccessAuditLogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileShareAccessAuditLogLevelInput">FileShareAccessAuditLogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.auditLogDestination">AuditLogDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileAccessAuditLogLevel">FileAccessAuditLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileShareAccessAuditLogLevel">FileShareAccessAuditLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuditLogDestinationInput`<sup>Optional</sup> <a name="AuditLogDestinationInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.auditLogDestinationInput"></a>

```csharp
public string AuditLogDestinationInput { get; }
```

- *Type:* string

---

##### `FileAccessAuditLogLevelInput`<sup>Optional</sup> <a name="FileAccessAuditLogLevelInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileAccessAuditLogLevelInput"></a>

```csharp
public string FileAccessAuditLogLevelInput { get; }
```

- *Type:* string

---

##### `FileShareAccessAuditLogLevelInput`<sup>Optional</sup> <a name="FileShareAccessAuditLogLevelInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileShareAccessAuditLogLevelInput"></a>

```csharp
public string FileShareAccessAuditLogLevelInput { get; }
```

- *Type:* string

---

##### `AuditLogDestination`<sup>Required</sup> <a name="AuditLogDestination" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.auditLogDestination"></a>

```csharp
public string AuditLogDestination { get; }
```

- *Type:* string

---

##### `FileAccessAuditLogLevel`<sup>Required</sup> <a name="FileAccessAuditLogLevel" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileAccessAuditLogLevel"></a>

```csharp
public string FileAccessAuditLogLevel { get; }
```

- *Type:* string

---

##### `FileShareAccessAuditLogLevel`<sup>Required</sup> <a name="FileShareAccessAuditLogLevel" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileShareAccessAuditLogLevel"></a>

```csharp
public string FileShareAccessAuditLogLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfigurationOutputReference.property.internalValue"></a>

```csharp
public FsxWindowsFileSystemAuditLogConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemAuditLogConfiguration">FsxWindowsFileSystemAuditLogConfiguration</a>

---


### FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference <a name="FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileSystemAdministratorsGroup` <a name="ResetFileSystemAdministratorsGroup" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.resetFileSystemAdministratorsGroup"></a>

```csharp
private void ResetFileSystemAdministratorsGroup()
```

##### `ResetOrganizationalUnitDistinguishedName` <a name="ResetOrganizationalUnitDistinguishedName" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.resetOrganizationalUnitDistinguishedName"></a>

```csharp
private void ResetOrganizationalUnitDistinguishedName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.dnsIpsInput">DnsIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.fileSystemAdministratorsGroupInput">FileSystemAdministratorsGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.organizationalUnitDistinguishedNameInput">OrganizationalUnitDistinguishedNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.dnsIps">DnsIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.fileSystemAdministratorsGroup">FileSystemAdministratorsGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.organizationalUnitDistinguishedName">OrganizationalUnitDistinguishedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsIpsInput`<sup>Optional</sup> <a name="DnsIpsInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.dnsIpsInput"></a>

```csharp
public string[] DnsIpsInput { get; }
```

- *Type:* string[]

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `FileSystemAdministratorsGroupInput`<sup>Optional</sup> <a name="FileSystemAdministratorsGroupInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.fileSystemAdministratorsGroupInput"></a>

```csharp
public string FileSystemAdministratorsGroupInput { get; }
```

- *Type:* string

---

##### `OrganizationalUnitDistinguishedNameInput`<sup>Optional</sup> <a name="OrganizationalUnitDistinguishedNameInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.organizationalUnitDistinguishedNameInput"></a>

```csharp
public string OrganizationalUnitDistinguishedNameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `DnsIps`<sup>Required</sup> <a name="DnsIps" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.dnsIps"></a>

```csharp
public string[] DnsIps { get; }
```

- *Type:* string[]

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `FileSystemAdministratorsGroup`<sup>Required</sup> <a name="FileSystemAdministratorsGroup" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.fileSystemAdministratorsGroup"></a>

```csharp
public string FileSystemAdministratorsGroup { get; }
```

- *Type:* string

---

##### `OrganizationalUnitDistinguishedName`<sup>Required</sup> <a name="OrganizationalUnitDistinguishedName" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.organizationalUnitDistinguishedName"></a>

```csharp
public string OrganizationalUnitDistinguishedName { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference.property.internalValue"></a>

```csharp
public FsxWindowsFileSystemSelfManagedActiveDirectory InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemSelfManagedActiveDirectory">FsxWindowsFileSystemSelfManagedActiveDirectory</a>

---


### FsxWindowsFileSystemTimeoutsOutputReference <a name="FsxWindowsFileSystemTimeoutsOutputReference" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxWindowsFileSystemTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxWindowsFileSystem.FsxWindowsFileSystemTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



