# `fsxLustreFileSystem` Submodule <a name="`fsxLustreFileSystem` Submodule" id="@cdktf/provider-aws.fsxLustreFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxLustreFileSystem <a name="FsxLustreFileSystem" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system aws_fsx_lustre_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxLustreFileSystem(Construct Scope, string Id, FsxLustreFileSystemConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig">FsxLustreFileSystemConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig">FsxLustreFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putLogConfiguration">PutLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetAutoImportPolicy">ResetAutoImportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetAutomaticBackupRetentionDays">ResetAutomaticBackupRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetBackupId">ResetBackupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetCopyTagsToBackups">ResetCopyTagsToBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetDailyAutomaticBackupStartTime">ResetDailyAutomaticBackupStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetDataCompressionType">ResetDataCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetDeploymentType">ResetDeploymentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetDriveCacheType">ResetDriveCacheType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetExportPath">ResetExportPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetFileSystemTypeVersion">ResetFileSystemTypeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetImportedFileChunkSize">ResetImportedFileChunkSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetImportPath">ResetImportPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetLogConfiguration">ResetLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetPerUnitStorageThroughput">ResetPerUnitStorageThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetStorageCapacity">ResetStorageCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetStorageType">ResetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetWeeklyMaintenanceStartTime">ResetWeeklyMaintenanceStartTime</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutLogConfiguration` <a name="PutLogConfiguration" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putLogConfiguration"></a>

```csharp
private void PutLogConfiguration(FsxLustreFileSystemLogConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putLogConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration">FsxLustreFileSystemLogConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putTimeouts"></a>

```csharp
private void PutTimeouts(FsxLustreFileSystemTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts">FsxLustreFileSystemTimeouts</a>

---

##### `ResetAutoImportPolicy` <a name="ResetAutoImportPolicy" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetAutoImportPolicy"></a>

```csharp
private void ResetAutoImportPolicy()
```

##### `ResetAutomaticBackupRetentionDays` <a name="ResetAutomaticBackupRetentionDays" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetAutomaticBackupRetentionDays"></a>

```csharp
private void ResetAutomaticBackupRetentionDays()
```

##### `ResetBackupId` <a name="ResetBackupId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetBackupId"></a>

```csharp
private void ResetBackupId()
```

##### `ResetCopyTagsToBackups` <a name="ResetCopyTagsToBackups" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetCopyTagsToBackups"></a>

```csharp
private void ResetCopyTagsToBackups()
```

##### `ResetDailyAutomaticBackupStartTime` <a name="ResetDailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetDailyAutomaticBackupStartTime"></a>

```csharp
private void ResetDailyAutomaticBackupStartTime()
```

##### `ResetDataCompressionType` <a name="ResetDataCompressionType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetDataCompressionType"></a>

```csharp
private void ResetDataCompressionType()
```

##### `ResetDeploymentType` <a name="ResetDeploymentType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetDeploymentType"></a>

```csharp
private void ResetDeploymentType()
```

##### `ResetDriveCacheType` <a name="ResetDriveCacheType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetDriveCacheType"></a>

```csharp
private void ResetDriveCacheType()
```

##### `ResetExportPath` <a name="ResetExportPath" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetExportPath"></a>

```csharp
private void ResetExportPath()
```

##### `ResetFileSystemTypeVersion` <a name="ResetFileSystemTypeVersion" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetFileSystemTypeVersion"></a>

```csharp
private void ResetFileSystemTypeVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImportedFileChunkSize` <a name="ResetImportedFileChunkSize" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetImportedFileChunkSize"></a>

```csharp
private void ResetImportedFileChunkSize()
```

##### `ResetImportPath` <a name="ResetImportPath" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetImportPath"></a>

```csharp
private void ResetImportPath()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetLogConfiguration` <a name="ResetLogConfiguration" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetLogConfiguration"></a>

```csharp
private void ResetLogConfiguration()
```

##### `ResetPerUnitStorageThroughput` <a name="ResetPerUnitStorageThroughput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetPerUnitStorageThroughput"></a>

```csharp
private void ResetPerUnitStorageThroughput()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetStorageCapacity` <a name="ResetStorageCapacity" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetStorageCapacity"></a>

```csharp
private void ResetStorageCapacity()
```

##### `ResetStorageType` <a name="ResetStorageType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetStorageType"></a>

```csharp
private void ResetStorageType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWeeklyMaintenanceStartTime` <a name="ResetWeeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.resetWeeklyMaintenanceStartTime"></a>

```csharp
private void ResetWeeklyMaintenanceStartTime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

FsxLustreFileSystem.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

FsxLustreFileSystem.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

FsxLustreFileSystem.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.logConfiguration">LogConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference">FsxLustreFileSystemLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.mountName">MountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.networkInterfaceIds">NetworkInterfaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference">FsxLustreFileSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.autoImportPolicyInput">AutoImportPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.automaticBackupRetentionDaysInput">AutomaticBackupRetentionDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.backupIdInput">BackupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.copyTagsToBackupsInput">CopyTagsToBackupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dailyAutomaticBackupStartTimeInput">DailyAutomaticBackupStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dataCompressionTypeInput">DataCompressionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.deploymentTypeInput">DeploymentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.driveCacheTypeInput">DriveCacheTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.exportPathInput">ExportPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.fileSystemTypeVersionInput">FileSystemTypeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.importedFileChunkSizeInput">ImportedFileChunkSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.importPathInput">ImportPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.logConfigurationInput">LogConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration">FsxLustreFileSystemLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.perUnitStorageThroughputInput">PerUnitStorageThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.storageCapacityInput">StorageCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.storageTypeInput">StorageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.weeklyMaintenanceStartTimeInput">WeeklyMaintenanceStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.autoImportPolicy">AutoImportPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.automaticBackupRetentionDays">AutomaticBackupRetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.backupId">BackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.copyTagsToBackups">CopyTagsToBackups</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dailyAutomaticBackupStartTime">DailyAutomaticBackupStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dataCompressionType">DataCompressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.deploymentType">DeploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.driveCacheType">DriveCacheType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.exportPath">ExportPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.fileSystemTypeVersion">FileSystemTypeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.importedFileChunkSize">ImportedFileChunkSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.importPath">ImportPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.perUnitStorageThroughput">PerUnitStorageThroughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.storageCapacity">StorageCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.weeklyMaintenanceStartTime">WeeklyMaintenanceStartTime</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `LogConfiguration`<sup>Required</sup> <a name="LogConfiguration" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.logConfiguration"></a>

```csharp
public FsxLustreFileSystemLogConfigurationOutputReference LogConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference">FsxLustreFileSystemLogConfigurationOutputReference</a>

---

##### `MountName`<sup>Required</sup> <a name="MountName" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.mountName"></a>

```csharp
public string MountName { get; }
```

- *Type:* string

---

##### `NetworkInterfaceIds`<sup>Required</sup> <a name="NetworkInterfaceIds" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.networkInterfaceIds"></a>

```csharp
public string[] NetworkInterfaceIds { get; }
```

- *Type:* string[]

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.timeouts"></a>

```csharp
public FsxLustreFileSystemTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference">FsxLustreFileSystemTimeoutsOutputReference</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `AutoImportPolicyInput`<sup>Optional</sup> <a name="AutoImportPolicyInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.autoImportPolicyInput"></a>

```csharp
public string AutoImportPolicyInput { get; }
```

- *Type:* string

---

##### `AutomaticBackupRetentionDaysInput`<sup>Optional</sup> <a name="AutomaticBackupRetentionDaysInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.automaticBackupRetentionDaysInput"></a>

```csharp
public double AutomaticBackupRetentionDaysInput { get; }
```

- *Type:* double

---

##### `BackupIdInput`<sup>Optional</sup> <a name="BackupIdInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.backupIdInput"></a>

```csharp
public string BackupIdInput { get; }
```

- *Type:* string

---

##### `CopyTagsToBackupsInput`<sup>Optional</sup> <a name="CopyTagsToBackupsInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.copyTagsToBackupsInput"></a>

```csharp
public object CopyTagsToBackupsInput { get; }
```

- *Type:* object

---

##### `DailyAutomaticBackupStartTimeInput`<sup>Optional</sup> <a name="DailyAutomaticBackupStartTimeInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dailyAutomaticBackupStartTimeInput"></a>

```csharp
public string DailyAutomaticBackupStartTimeInput { get; }
```

- *Type:* string

---

##### `DataCompressionTypeInput`<sup>Optional</sup> <a name="DataCompressionTypeInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dataCompressionTypeInput"></a>

```csharp
public string DataCompressionTypeInput { get; }
```

- *Type:* string

---

##### `DeploymentTypeInput`<sup>Optional</sup> <a name="DeploymentTypeInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.deploymentTypeInput"></a>

```csharp
public string DeploymentTypeInput { get; }
```

- *Type:* string

---

##### `DriveCacheTypeInput`<sup>Optional</sup> <a name="DriveCacheTypeInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.driveCacheTypeInput"></a>

```csharp
public string DriveCacheTypeInput { get; }
```

- *Type:* string

---

##### `ExportPathInput`<sup>Optional</sup> <a name="ExportPathInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.exportPathInput"></a>

```csharp
public string ExportPathInput { get; }
```

- *Type:* string

---

##### `FileSystemTypeVersionInput`<sup>Optional</sup> <a name="FileSystemTypeVersionInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.fileSystemTypeVersionInput"></a>

```csharp
public string FileSystemTypeVersionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImportedFileChunkSizeInput`<sup>Optional</sup> <a name="ImportedFileChunkSizeInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.importedFileChunkSizeInput"></a>

```csharp
public double ImportedFileChunkSizeInput { get; }
```

- *Type:* double

---

##### `ImportPathInput`<sup>Optional</sup> <a name="ImportPathInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.importPathInput"></a>

```csharp
public string ImportPathInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `LogConfigurationInput`<sup>Optional</sup> <a name="LogConfigurationInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.logConfigurationInput"></a>

```csharp
public FsxLustreFileSystemLogConfiguration LogConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration">FsxLustreFileSystemLogConfiguration</a>

---

##### `PerUnitStorageThroughputInput`<sup>Optional</sup> <a name="PerUnitStorageThroughputInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.perUnitStorageThroughputInput"></a>

```csharp
public double PerUnitStorageThroughputInput { get; }
```

- *Type:* double

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `StorageCapacityInput`<sup>Optional</sup> <a name="StorageCapacityInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.storageCapacityInput"></a>

```csharp
public double StorageCapacityInput { get; }
```

- *Type:* double

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.storageTypeInput"></a>

```csharp
public string StorageTypeInput { get; }
```

- *Type:* string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WeeklyMaintenanceStartTimeInput`<sup>Optional</sup> <a name="WeeklyMaintenanceStartTimeInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.weeklyMaintenanceStartTimeInput"></a>

```csharp
public string WeeklyMaintenanceStartTimeInput { get; }
```

- *Type:* string

---

##### `AutoImportPolicy`<sup>Required</sup> <a name="AutoImportPolicy" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.autoImportPolicy"></a>

```csharp
public string AutoImportPolicy { get; }
```

- *Type:* string

---

##### `AutomaticBackupRetentionDays`<sup>Required</sup> <a name="AutomaticBackupRetentionDays" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.automaticBackupRetentionDays"></a>

```csharp
public double AutomaticBackupRetentionDays { get; }
```

- *Type:* double

---

##### `BackupId`<sup>Required</sup> <a name="BackupId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.backupId"></a>

```csharp
public string BackupId { get; }
```

- *Type:* string

---

##### `CopyTagsToBackups`<sup>Required</sup> <a name="CopyTagsToBackups" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.copyTagsToBackups"></a>

```csharp
public object CopyTagsToBackups { get; }
```

- *Type:* object

---

##### `DailyAutomaticBackupStartTime`<sup>Required</sup> <a name="DailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dailyAutomaticBackupStartTime"></a>

```csharp
public string DailyAutomaticBackupStartTime { get; }
```

- *Type:* string

---

##### `DataCompressionType`<sup>Required</sup> <a name="DataCompressionType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.dataCompressionType"></a>

```csharp
public string DataCompressionType { get; }
```

- *Type:* string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.deploymentType"></a>

```csharp
public string DeploymentType { get; }
```

- *Type:* string

---

##### `DriveCacheType`<sup>Required</sup> <a name="DriveCacheType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.driveCacheType"></a>

```csharp
public string DriveCacheType { get; }
```

- *Type:* string

---

##### `ExportPath`<sup>Required</sup> <a name="ExportPath" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.exportPath"></a>

```csharp
public string ExportPath { get; }
```

- *Type:* string

---

##### `FileSystemTypeVersion`<sup>Required</sup> <a name="FileSystemTypeVersion" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.fileSystemTypeVersion"></a>

```csharp
public string FileSystemTypeVersion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImportedFileChunkSize`<sup>Required</sup> <a name="ImportedFileChunkSize" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.importedFileChunkSize"></a>

```csharp
public double ImportedFileChunkSize { get; }
```

- *Type:* double

---

##### `ImportPath`<sup>Required</sup> <a name="ImportPath" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.importPath"></a>

```csharp
public string ImportPath { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `PerUnitStorageThroughput`<sup>Required</sup> <a name="PerUnitStorageThroughput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.perUnitStorageThroughput"></a>

```csharp
public double PerUnitStorageThroughput { get; }
```

- *Type:* double

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `StorageCapacity`<sup>Required</sup> <a name="StorageCapacity" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.storageCapacity"></a>

```csharp
public double StorageCapacity { get; }
```

- *Type:* double

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WeeklyMaintenanceStartTime`<sup>Required</sup> <a name="WeeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.weeklyMaintenanceStartTime"></a>

```csharp
public string WeeklyMaintenanceStartTime { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystem.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FsxLustreFileSystemConfig <a name="FsxLustreFileSystemConfig" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxLustreFileSystemConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] SubnetIds,
    string AutoImportPolicy = null,
    double AutomaticBackupRetentionDays = null,
    string BackupId = null,
    object CopyTagsToBackups = null,
    string DailyAutomaticBackupStartTime = null,
    string DataCompressionType = null,
    string DeploymentType = null,
    string DriveCacheType = null,
    string ExportPath = null,
    string FileSystemTypeVersion = null,
    string Id = null,
    double ImportedFileChunkSize = null,
    string ImportPath = null,
    string KmsKeyId = null,
    FsxLustreFileSystemLogConfiguration LogConfiguration = null,
    double PerUnitStorageThroughput = null,
    string[] SecurityGroupIds = null,
    double StorageCapacity = null,
    string StorageType = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    FsxLustreFileSystemTimeouts Timeouts = null,
    string WeeklyMaintenanceStartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#subnet_ids FsxLustreFileSystem#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.autoImportPolicy">AutoImportPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#auto_import_policy FsxLustreFileSystem#auto_import_policy}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.automaticBackupRetentionDays">AutomaticBackupRetentionDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#automatic_backup_retention_days FsxLustreFileSystem#automatic_backup_retention_days}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.backupId">BackupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#backup_id FsxLustreFileSystem#backup_id}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.copyTagsToBackups">CopyTagsToBackups</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#copy_tags_to_backups FsxLustreFileSystem#copy_tags_to_backups}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.dailyAutomaticBackupStartTime">DailyAutomaticBackupStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#daily_automatic_backup_start_time FsxLustreFileSystem#daily_automatic_backup_start_time}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.dataCompressionType">DataCompressionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#data_compression_type FsxLustreFileSystem#data_compression_type}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.deploymentType">DeploymentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#deployment_type FsxLustreFileSystem#deployment_type}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.driveCacheType">DriveCacheType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#drive_cache_type FsxLustreFileSystem#drive_cache_type}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.exportPath">ExportPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#export_path FsxLustreFileSystem#export_path}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.fileSystemTypeVersion">FileSystemTypeVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#file_system_type_version FsxLustreFileSystem#file_system_type_version}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#id FsxLustreFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.importedFileChunkSize">ImportedFileChunkSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#imported_file_chunk_size FsxLustreFileSystem#imported_file_chunk_size}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.importPath">ImportPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#import_path FsxLustreFileSystem#import_path}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#kms_key_id FsxLustreFileSystem#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.logConfiguration">LogConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration">FsxLustreFileSystemLogConfiguration</a></code> | log_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.perUnitStorageThroughput">PerUnitStorageThroughput</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#per_unit_storage_throughput FsxLustreFileSystem#per_unit_storage_throughput}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#security_group_ids FsxLustreFileSystem#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.storageCapacity">StorageCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#storage_capacity FsxLustreFileSystem#storage_capacity}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.storageType">StorageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#storage_type FsxLustreFileSystem#storage_type}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#tags FsxLustreFileSystem#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#tags_all FsxLustreFileSystem#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts">FsxLustreFileSystemTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.weeklyMaintenanceStartTime">WeeklyMaintenanceStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#weekly_maintenance_start_time FsxLustreFileSystem#weekly_maintenance_start_time}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#subnet_ids FsxLustreFileSystem#subnet_ids}.

---

##### `AutoImportPolicy`<sup>Optional</sup> <a name="AutoImportPolicy" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.autoImportPolicy"></a>

```csharp
public string AutoImportPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#auto_import_policy FsxLustreFileSystem#auto_import_policy}.

---

##### `AutomaticBackupRetentionDays`<sup>Optional</sup> <a name="AutomaticBackupRetentionDays" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.automaticBackupRetentionDays"></a>

```csharp
public double AutomaticBackupRetentionDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#automatic_backup_retention_days FsxLustreFileSystem#automatic_backup_retention_days}.

---

##### `BackupId`<sup>Optional</sup> <a name="BackupId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.backupId"></a>

```csharp
public string BackupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#backup_id FsxLustreFileSystem#backup_id}.

---

##### `CopyTagsToBackups`<sup>Optional</sup> <a name="CopyTagsToBackups" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.copyTagsToBackups"></a>

```csharp
public object CopyTagsToBackups { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#copy_tags_to_backups FsxLustreFileSystem#copy_tags_to_backups}.

---

##### `DailyAutomaticBackupStartTime`<sup>Optional</sup> <a name="DailyAutomaticBackupStartTime" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.dailyAutomaticBackupStartTime"></a>

```csharp
public string DailyAutomaticBackupStartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#daily_automatic_backup_start_time FsxLustreFileSystem#daily_automatic_backup_start_time}.

---

##### `DataCompressionType`<sup>Optional</sup> <a name="DataCompressionType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.dataCompressionType"></a>

```csharp
public string DataCompressionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#data_compression_type FsxLustreFileSystem#data_compression_type}.

---

##### `DeploymentType`<sup>Optional</sup> <a name="DeploymentType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.deploymentType"></a>

```csharp
public string DeploymentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#deployment_type FsxLustreFileSystem#deployment_type}.

---

##### `DriveCacheType`<sup>Optional</sup> <a name="DriveCacheType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.driveCacheType"></a>

```csharp
public string DriveCacheType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#drive_cache_type FsxLustreFileSystem#drive_cache_type}.

---

##### `ExportPath`<sup>Optional</sup> <a name="ExportPath" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.exportPath"></a>

```csharp
public string ExportPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#export_path FsxLustreFileSystem#export_path}.

---

##### `FileSystemTypeVersion`<sup>Optional</sup> <a name="FileSystemTypeVersion" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.fileSystemTypeVersion"></a>

```csharp
public string FileSystemTypeVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#file_system_type_version FsxLustreFileSystem#file_system_type_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#id FsxLustreFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImportedFileChunkSize`<sup>Optional</sup> <a name="ImportedFileChunkSize" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.importedFileChunkSize"></a>

```csharp
public double ImportedFileChunkSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#imported_file_chunk_size FsxLustreFileSystem#imported_file_chunk_size}.

---

##### `ImportPath`<sup>Optional</sup> <a name="ImportPath" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.importPath"></a>

```csharp
public string ImportPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#import_path FsxLustreFileSystem#import_path}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#kms_key_id FsxLustreFileSystem#kms_key_id}.

---

##### `LogConfiguration`<sup>Optional</sup> <a name="LogConfiguration" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.logConfiguration"></a>

```csharp
public FsxLustreFileSystemLogConfiguration LogConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration">FsxLustreFileSystemLogConfiguration</a>

log_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#log_configuration FsxLustreFileSystem#log_configuration}

---

##### `PerUnitStorageThroughput`<sup>Optional</sup> <a name="PerUnitStorageThroughput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.perUnitStorageThroughput"></a>

```csharp
public double PerUnitStorageThroughput { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#per_unit_storage_throughput FsxLustreFileSystem#per_unit_storage_throughput}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#security_group_ids FsxLustreFileSystem#security_group_ids}.

---

##### `StorageCapacity`<sup>Optional</sup> <a name="StorageCapacity" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.storageCapacity"></a>

```csharp
public double StorageCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#storage_capacity FsxLustreFileSystem#storage_capacity}.

---

##### `StorageType`<sup>Optional</sup> <a name="StorageType" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.storageType"></a>

```csharp
public string StorageType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#storage_type FsxLustreFileSystem#storage_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#tags FsxLustreFileSystem#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#tags_all FsxLustreFileSystem#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.timeouts"></a>

```csharp
public FsxLustreFileSystemTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts">FsxLustreFileSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#timeouts FsxLustreFileSystem#timeouts}

---

##### `WeeklyMaintenanceStartTime`<sup>Optional</sup> <a name="WeeklyMaintenanceStartTime" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemConfig.property.weeklyMaintenanceStartTime"></a>

```csharp
public string WeeklyMaintenanceStartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#weekly_maintenance_start_time FsxLustreFileSystem#weekly_maintenance_start_time}.

---

### FsxLustreFileSystemLogConfiguration <a name="FsxLustreFileSystemLogConfiguration" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxLustreFileSystemLogConfiguration {
    string Destination = null,
    string Level = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration.property.destination">Destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#destination FsxLustreFileSystem#destination}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration.property.level">Level</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#level FsxLustreFileSystem#level}. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#destination FsxLustreFileSystem#destination}.

---

##### `Level`<sup>Optional</sup> <a name="Level" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration.property.level"></a>

```csharp
public string Level { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#level FsxLustreFileSystem#level}.

---

### FsxLustreFileSystemTimeouts <a name="FsxLustreFileSystemTimeouts" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxLustreFileSystemTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#create FsxLustreFileSystem#create}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#delete FsxLustreFileSystem#delete}. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#update FsxLustreFileSystem#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#create FsxLustreFileSystem#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#delete FsxLustreFileSystem#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system#update FsxLustreFileSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxLustreFileSystemLogConfigurationOutputReference <a name="FsxLustreFileSystemLogConfigurationOutputReference" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxLustreFileSystemLogConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.resetDestination"></a>

```csharp
private void ResetDestination()
```

##### `ResetLevel` <a name="ResetLevel" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.resetLevel"></a>

```csharp
private void ResetLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.levelInput">LevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration">FsxLustreFileSystemLogConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.levelInput"></a>

```csharp
public string LevelInput { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfigurationOutputReference.property.internalValue"></a>

```csharp
public FsxLustreFileSystemLogConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemLogConfiguration">FsxLustreFileSystemLogConfiguration</a>

---


### FsxLustreFileSystemTimeoutsOutputReference <a name="FsxLustreFileSystemTimeoutsOutputReference" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxLustreFileSystemTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxLustreFileSystem.FsxLustreFileSystemTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



