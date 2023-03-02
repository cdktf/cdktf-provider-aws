# `dbInstance` Submodule <a name="`dbInstance` Submodule" id="@cdktf/provider-aws.dbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DbInstance <a name="DbInstance" id="@cdktf/provider-aws.dbInstance.DbInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_instance aws_db_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DbInstance(Construct Scope, string Id, DbInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig">DbInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dbInstance.DbInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig">DbInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.putBlueGreenUpdate">PutBlueGreenUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.putRestoreToPointInTime">PutRestoreToPointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.putS3Import">PutS3Import</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetAllocatedStorage">ResetAllocatedStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetAllowMajorVersionUpgrade">ResetAllowMajorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetApplyImmediately">ResetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetAutoMinorVersionUpgrade">ResetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetBackupRetentionPeriod">ResetBackupRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetBackupWindow">ResetBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetBlueGreenUpdate">ResetBlueGreenUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetCaCertIdentifier">ResetCaCertIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetCharacterSetName">ResetCharacterSetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetCopyTagsToSnapshot">ResetCopyTagsToSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetCustomerOwnedIpEnabled">ResetCustomerOwnedIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetCustomIamInstanceProfile">ResetCustomIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetDbName">ResetDbName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetDbSubnetGroupName">ResetDbSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetDeleteAutomatedBackups">ResetDeleteAutomatedBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetDomainIamRoleName">ResetDomainIamRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetEnabledCloudwatchLogsExports">ResetEnabledCloudwatchLogsExports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetEngine">ResetEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetFinalSnapshotIdentifier">ResetFinalSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetIamDatabaseAuthenticationEnabled">ResetIamDatabaseAuthenticationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetIdentifier">ResetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetIdentifierPrefix">ResetIdentifierPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetLicenseModel">ResetLicenseModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetMaxAllocatedStorage">ResetMaxAllocatedStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetMonitoringInterval">ResetMonitoringInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetMonitoringRoleArn">ResetMonitoringRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetMultiAz">ResetMultiAz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetNcharCharacterSetName">ResetNcharCharacterSetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetNetworkType">ResetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetOptionGroupName">ResetOptionGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetParameterGroupName">ResetParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetPerformanceInsightsEnabled">ResetPerformanceInsightsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetPerformanceInsightsKmsKeyId">ResetPerformanceInsightsKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetPerformanceInsightsRetentionPeriod">ResetPerformanceInsightsRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetPubliclyAccessible">ResetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetReplicaMode">ResetReplicaMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetReplicateSourceDb">ResetReplicateSourceDb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetRestoreToPointInTime">ResetRestoreToPointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetS3Import">ResetS3Import</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetSecurityGroupNames">ResetSecurityGroupNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetSkipFinalSnapshot">ResetSkipFinalSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetSnapshotIdentifier">ResetSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetStorageEncrypted">ResetStorageEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetStorageThroughput">ResetStorageThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetStorageType">ResetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetTimezone">ResetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.resetVpcSecurityGroupIds">ResetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dbInstance.DbInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dbInstance.DbInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dbInstance.DbInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dbInstance.DbInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dbInstance.DbInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dbInstance.DbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dbInstance.DbInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dbInstance.DbInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dbInstance.DbInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutBlueGreenUpdate` <a name="PutBlueGreenUpdate" id="@cdktf/provider-aws.dbInstance.DbInstance.putBlueGreenUpdate"></a>

```csharp
private void PutBlueGreenUpdate(DbInstanceBlueGreenUpdate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dbInstance.DbInstance.putBlueGreenUpdate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate">DbInstanceBlueGreenUpdate</a>

---

##### `PutRestoreToPointInTime` <a name="PutRestoreToPointInTime" id="@cdktf/provider-aws.dbInstance.DbInstance.putRestoreToPointInTime"></a>

```csharp
private void PutRestoreToPointInTime(DbInstanceRestoreToPointInTime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dbInstance.DbInstance.putRestoreToPointInTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime">DbInstanceRestoreToPointInTime</a>

---

##### `PutS3Import` <a name="PutS3Import" id="@cdktf/provider-aws.dbInstance.DbInstance.putS3Import"></a>

```csharp
private void PutS3Import(DbInstanceS3Import Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dbInstance.DbInstance.putS3Import.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import">DbInstanceS3Import</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dbInstance.DbInstance.putTimeouts"></a>

```csharp
private void PutTimeouts(DbInstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dbInstance.DbInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeouts">DbInstanceTimeouts</a>

---

##### `ResetAllocatedStorage` <a name="ResetAllocatedStorage" id="@cdktf/provider-aws.dbInstance.DbInstance.resetAllocatedStorage"></a>

```csharp
private void ResetAllocatedStorage()
```

##### `ResetAllowMajorVersionUpgrade` <a name="ResetAllowMajorVersionUpgrade" id="@cdktf/provider-aws.dbInstance.DbInstance.resetAllowMajorVersionUpgrade"></a>

```csharp
private void ResetAllowMajorVersionUpgrade()
```

##### `ResetApplyImmediately` <a name="ResetApplyImmediately" id="@cdktf/provider-aws.dbInstance.DbInstance.resetApplyImmediately"></a>

```csharp
private void ResetApplyImmediately()
```

##### `ResetAutoMinorVersionUpgrade` <a name="ResetAutoMinorVersionUpgrade" id="@cdktf/provider-aws.dbInstance.DbInstance.resetAutoMinorVersionUpgrade"></a>

```csharp
private void ResetAutoMinorVersionUpgrade()
```

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-aws.dbInstance.DbInstance.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetBackupRetentionPeriod` <a name="ResetBackupRetentionPeriod" id="@cdktf/provider-aws.dbInstance.DbInstance.resetBackupRetentionPeriod"></a>

```csharp
private void ResetBackupRetentionPeriod()
```

##### `ResetBackupWindow` <a name="ResetBackupWindow" id="@cdktf/provider-aws.dbInstance.DbInstance.resetBackupWindow"></a>

```csharp
private void ResetBackupWindow()
```

##### `ResetBlueGreenUpdate` <a name="ResetBlueGreenUpdate" id="@cdktf/provider-aws.dbInstance.DbInstance.resetBlueGreenUpdate"></a>

```csharp
private void ResetBlueGreenUpdate()
```

##### `ResetCaCertIdentifier` <a name="ResetCaCertIdentifier" id="@cdktf/provider-aws.dbInstance.DbInstance.resetCaCertIdentifier"></a>

```csharp
private void ResetCaCertIdentifier()
```

##### `ResetCharacterSetName` <a name="ResetCharacterSetName" id="@cdktf/provider-aws.dbInstance.DbInstance.resetCharacterSetName"></a>

```csharp
private void ResetCharacterSetName()
```

##### `ResetCopyTagsToSnapshot` <a name="ResetCopyTagsToSnapshot" id="@cdktf/provider-aws.dbInstance.DbInstance.resetCopyTagsToSnapshot"></a>

```csharp
private void ResetCopyTagsToSnapshot()
```

##### `ResetCustomerOwnedIpEnabled` <a name="ResetCustomerOwnedIpEnabled" id="@cdktf/provider-aws.dbInstance.DbInstance.resetCustomerOwnedIpEnabled"></a>

```csharp
private void ResetCustomerOwnedIpEnabled()
```

##### `ResetCustomIamInstanceProfile` <a name="ResetCustomIamInstanceProfile" id="@cdktf/provider-aws.dbInstance.DbInstance.resetCustomIamInstanceProfile"></a>

```csharp
private void ResetCustomIamInstanceProfile()
```

##### `ResetDbName` <a name="ResetDbName" id="@cdktf/provider-aws.dbInstance.DbInstance.resetDbName"></a>

```csharp
private void ResetDbName()
```

##### `ResetDbSubnetGroupName` <a name="ResetDbSubnetGroupName" id="@cdktf/provider-aws.dbInstance.DbInstance.resetDbSubnetGroupName"></a>

```csharp
private void ResetDbSubnetGroupName()
```

##### `ResetDeleteAutomatedBackups` <a name="ResetDeleteAutomatedBackups" id="@cdktf/provider-aws.dbInstance.DbInstance.resetDeleteAutomatedBackups"></a>

```csharp
private void ResetDeleteAutomatedBackups()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-aws.dbInstance.DbInstance.resetDeletionProtection"></a>

```csharp
private void ResetDeletionProtection()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-aws.dbInstance.DbInstance.resetDomain"></a>

```csharp
private void ResetDomain()
```

##### `ResetDomainIamRoleName` <a name="ResetDomainIamRoleName" id="@cdktf/provider-aws.dbInstance.DbInstance.resetDomainIamRoleName"></a>

```csharp
private void ResetDomainIamRoleName()
```

##### `ResetEnabledCloudwatchLogsExports` <a name="ResetEnabledCloudwatchLogsExports" id="@cdktf/provider-aws.dbInstance.DbInstance.resetEnabledCloudwatchLogsExports"></a>

```csharp
private void ResetEnabledCloudwatchLogsExports()
```

##### `ResetEngine` <a name="ResetEngine" id="@cdktf/provider-aws.dbInstance.DbInstance.resetEngine"></a>

```csharp
private void ResetEngine()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktf/provider-aws.dbInstance.DbInstance.resetEngineVersion"></a>

```csharp
private void ResetEngineVersion()
```

##### `ResetFinalSnapshotIdentifier` <a name="ResetFinalSnapshotIdentifier" id="@cdktf/provider-aws.dbInstance.DbInstance.resetFinalSnapshotIdentifier"></a>

```csharp
private void ResetFinalSnapshotIdentifier()
```

##### `ResetIamDatabaseAuthenticationEnabled` <a name="ResetIamDatabaseAuthenticationEnabled" id="@cdktf/provider-aws.dbInstance.DbInstance.resetIamDatabaseAuthenticationEnabled"></a>

```csharp
private void ResetIamDatabaseAuthenticationEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dbInstance.DbInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentifier` <a name="ResetIdentifier" id="@cdktf/provider-aws.dbInstance.DbInstance.resetIdentifier"></a>

```csharp
private void ResetIdentifier()
```

##### `ResetIdentifierPrefix` <a name="ResetIdentifierPrefix" id="@cdktf/provider-aws.dbInstance.DbInstance.resetIdentifierPrefix"></a>

```csharp
private void ResetIdentifierPrefix()
```

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-aws.dbInstance.DbInstance.resetIops"></a>

```csharp
private void ResetIops()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.dbInstance.DbInstance.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetLicenseModel` <a name="ResetLicenseModel" id="@cdktf/provider-aws.dbInstance.DbInstance.resetLicenseModel"></a>

```csharp
private void ResetLicenseModel()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktf/provider-aws.dbInstance.DbInstance.resetMaintenanceWindow"></a>

```csharp
private void ResetMaintenanceWindow()
```

##### `ResetMaxAllocatedStorage` <a name="ResetMaxAllocatedStorage" id="@cdktf/provider-aws.dbInstance.DbInstance.resetMaxAllocatedStorage"></a>

```csharp
private void ResetMaxAllocatedStorage()
```

##### `ResetMonitoringInterval` <a name="ResetMonitoringInterval" id="@cdktf/provider-aws.dbInstance.DbInstance.resetMonitoringInterval"></a>

```csharp
private void ResetMonitoringInterval()
```

##### `ResetMonitoringRoleArn` <a name="ResetMonitoringRoleArn" id="@cdktf/provider-aws.dbInstance.DbInstance.resetMonitoringRoleArn"></a>

```csharp
private void ResetMonitoringRoleArn()
```

##### `ResetMultiAz` <a name="ResetMultiAz" id="@cdktf/provider-aws.dbInstance.DbInstance.resetMultiAz"></a>

```csharp
private void ResetMultiAz()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.dbInstance.DbInstance.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNcharCharacterSetName` <a name="ResetNcharCharacterSetName" id="@cdktf/provider-aws.dbInstance.DbInstance.resetNcharCharacterSetName"></a>

```csharp
private void ResetNcharCharacterSetName()
```

##### `ResetNetworkType` <a name="ResetNetworkType" id="@cdktf/provider-aws.dbInstance.DbInstance.resetNetworkType"></a>

```csharp
private void ResetNetworkType()
```

##### `ResetOptionGroupName` <a name="ResetOptionGroupName" id="@cdktf/provider-aws.dbInstance.DbInstance.resetOptionGroupName"></a>

```csharp
private void ResetOptionGroupName()
```

##### `ResetParameterGroupName` <a name="ResetParameterGroupName" id="@cdktf/provider-aws.dbInstance.DbInstance.resetParameterGroupName"></a>

```csharp
private void ResetParameterGroupName()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-aws.dbInstance.DbInstance.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPerformanceInsightsEnabled` <a name="ResetPerformanceInsightsEnabled" id="@cdktf/provider-aws.dbInstance.DbInstance.resetPerformanceInsightsEnabled"></a>

```csharp
private void ResetPerformanceInsightsEnabled()
```

##### `ResetPerformanceInsightsKmsKeyId` <a name="ResetPerformanceInsightsKmsKeyId" id="@cdktf/provider-aws.dbInstance.DbInstance.resetPerformanceInsightsKmsKeyId"></a>

```csharp
private void ResetPerformanceInsightsKmsKeyId()
```

##### `ResetPerformanceInsightsRetentionPeriod` <a name="ResetPerformanceInsightsRetentionPeriod" id="@cdktf/provider-aws.dbInstance.DbInstance.resetPerformanceInsightsRetentionPeriod"></a>

```csharp
private void ResetPerformanceInsightsRetentionPeriod()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.dbInstance.DbInstance.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPubliclyAccessible` <a name="ResetPubliclyAccessible" id="@cdktf/provider-aws.dbInstance.DbInstance.resetPubliclyAccessible"></a>

```csharp
private void ResetPubliclyAccessible()
```

##### `ResetReplicaMode` <a name="ResetReplicaMode" id="@cdktf/provider-aws.dbInstance.DbInstance.resetReplicaMode"></a>

```csharp
private void ResetReplicaMode()
```

##### `ResetReplicateSourceDb` <a name="ResetReplicateSourceDb" id="@cdktf/provider-aws.dbInstance.DbInstance.resetReplicateSourceDb"></a>

```csharp
private void ResetReplicateSourceDb()
```

##### `ResetRestoreToPointInTime` <a name="ResetRestoreToPointInTime" id="@cdktf/provider-aws.dbInstance.DbInstance.resetRestoreToPointInTime"></a>

```csharp
private void ResetRestoreToPointInTime()
```

##### `ResetS3Import` <a name="ResetS3Import" id="@cdktf/provider-aws.dbInstance.DbInstance.resetS3Import"></a>

```csharp
private void ResetS3Import()
```

##### `ResetSecurityGroupNames` <a name="ResetSecurityGroupNames" id="@cdktf/provider-aws.dbInstance.DbInstance.resetSecurityGroupNames"></a>

```csharp
private void ResetSecurityGroupNames()
```

##### `ResetSkipFinalSnapshot` <a name="ResetSkipFinalSnapshot" id="@cdktf/provider-aws.dbInstance.DbInstance.resetSkipFinalSnapshot"></a>

```csharp
private void ResetSkipFinalSnapshot()
```

##### `ResetSnapshotIdentifier` <a name="ResetSnapshotIdentifier" id="@cdktf/provider-aws.dbInstance.DbInstance.resetSnapshotIdentifier"></a>

```csharp
private void ResetSnapshotIdentifier()
```

##### `ResetStorageEncrypted` <a name="ResetStorageEncrypted" id="@cdktf/provider-aws.dbInstance.DbInstance.resetStorageEncrypted"></a>

```csharp
private void ResetStorageEncrypted()
```

##### `ResetStorageThroughput` <a name="ResetStorageThroughput" id="@cdktf/provider-aws.dbInstance.DbInstance.resetStorageThroughput"></a>

```csharp
private void ResetStorageThroughput()
```

##### `ResetStorageType` <a name="ResetStorageType" id="@cdktf/provider-aws.dbInstance.DbInstance.resetStorageType"></a>

```csharp
private void ResetStorageType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dbInstance.DbInstance.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.dbInstance.DbInstance.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dbInstance.DbInstance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktf/provider-aws.dbInstance.DbInstance.resetTimezone"></a>

```csharp
private void ResetTimezone()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-aws.dbInstance.DbInstance.resetUsername"></a>

```csharp
private void ResetUsername()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktf/provider-aws.dbInstance.DbInstance.resetVpcSecurityGroupIds"></a>

```csharp
private void ResetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dbInstance.DbInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DbInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dbInstance.DbInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dbInstance.DbInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DbInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dbInstance.DbInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.dbInstance.DbInstance.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DbInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dbInstance.DbInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.blueGreenUpdate">BlueGreenUpdate</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference">DbInstanceBlueGreenUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.engineVersionActual">EngineVersionActual</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.hostedZoneId">HostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.latestRestorableTime">LatestRestorableTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.replicas">Replicas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.restoreToPointInTime">RestoreToPointInTime</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference">DbInstanceRestoreToPointInTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.s3Import">S3Import</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference">DbInstanceS3ImportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference">DbInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.allocatedStorageInput">AllocatedStorageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.allowMajorVersionUpgradeInput">AllowMajorVersionUpgradeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.applyImmediatelyInput">ApplyImmediatelyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.autoMinorVersionUpgradeInput">AutoMinorVersionUpgradeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.backupRetentionPeriodInput">BackupRetentionPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.backupWindowInput">BackupWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.blueGreenUpdateInput">BlueGreenUpdateInput</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate">DbInstanceBlueGreenUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.caCertIdentifierInput">CaCertIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.characterSetNameInput">CharacterSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.copyTagsToSnapshotInput">CopyTagsToSnapshotInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.customerOwnedIpEnabledInput">CustomerOwnedIpEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.customIamInstanceProfileInput">CustomIamInstanceProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.dbNameInput">DbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.dbSubnetGroupNameInput">DbSubnetGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.deleteAutomatedBackupsInput">DeleteAutomatedBackupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.domainIamRoleNameInput">DomainIamRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.enabledCloudwatchLogsExportsInput">EnabledCloudwatchLogsExportsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.engineInput">EngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.engineVersionInput">EngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.finalSnapshotIdentifierInput">FinalSnapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.iamDatabaseAuthenticationEnabledInput">IamDatabaseAuthenticationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.identifierPrefixInput">IdentifierPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.instanceClassInput">InstanceClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.iopsInput">IopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.licenseModelInput">LicenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.maxAllocatedStorageInput">MaxAllocatedStorageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.monitoringIntervalInput">MonitoringIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.monitoringRoleArnInput">MonitoringRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.multiAzInput">MultiAzInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.ncharCharacterSetNameInput">NcharCharacterSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.networkTypeInput">NetworkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.optionGroupNameInput">OptionGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.parameterGroupNameInput">ParameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsEnabledInput">PerformanceInsightsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsKmsKeyIdInput">PerformanceInsightsKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsRetentionPeriodInput">PerformanceInsightsRetentionPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.publiclyAccessibleInput">PubliclyAccessibleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.replicaModeInput">ReplicaModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.replicateSourceDbInput">ReplicateSourceDbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.restoreToPointInTimeInput">RestoreToPointInTimeInput</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime">DbInstanceRestoreToPointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.s3ImportInput">S3ImportInput</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import">DbInstanceS3Import</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.securityGroupNamesInput">SecurityGroupNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.skipFinalSnapshotInput">SkipFinalSnapshotInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.snapshotIdentifierInput">SnapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.storageEncryptedInput">StorageEncryptedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.storageThroughputInput">StorageThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.storageTypeInput">StorageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.timezoneInput">TimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.allocatedStorage">AllocatedStorage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.allowMajorVersionUpgrade">AllowMajorVersionUpgrade</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.applyImmediately">ApplyImmediately</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.backupRetentionPeriod">BackupRetentionPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.backupWindow">BackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.caCertIdentifier">CaCertIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.characterSetName">CharacterSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.copyTagsToSnapshot">CopyTagsToSnapshot</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.customerOwnedIpEnabled">CustomerOwnedIpEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.customIamInstanceProfile">CustomIamInstanceProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.dbName">DbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.dbSubnetGroupName">DbSubnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.deleteAutomatedBackups">DeleteAutomatedBackups</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.deletionProtection">DeletionProtection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.domainIamRoleName">DomainIamRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.enabledCloudwatchLogsExports">EnabledCloudwatchLogsExports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.finalSnapshotIdentifier">FinalSnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.iamDatabaseAuthenticationEnabled">IamDatabaseAuthenticationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.identifierPrefix">IdentifierPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.instanceClass">InstanceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.maintenanceWindow">MaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.maxAllocatedStorage">MaxAllocatedStorage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.monitoringInterval">MonitoringInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.monitoringRoleArn">MonitoringRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.multiAz">MultiAz</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.ncharCharacterSetName">NcharCharacterSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.networkType">NetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.optionGroupName">OptionGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.parameterGroupName">ParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsEnabled">PerformanceInsightsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsKmsKeyId">PerformanceInsightsKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsRetentionPeriod">PerformanceInsightsRetentionPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.replicaMode">ReplicaMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.replicateSourceDb">ReplicateSourceDb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.securityGroupNames">SecurityGroupNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.skipFinalSnapshot">SkipFinalSnapshot</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.snapshotIdentifier">SnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.storageEncrypted">StorageEncrypted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.storageThroughput">StorageThroughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dbInstance.DbInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dbInstance.DbInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dbInstance.DbInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dbInstance.DbInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dbInstance.DbInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dbInstance.DbInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dbInstance.DbInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dbInstance.DbInstance.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dbInstance.DbInstance.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dbInstance.DbInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dbInstance.DbInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dbInstance.DbInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dbInstance.DbInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dbInstance.DbInstance.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-aws.dbInstance.DbInstance.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dbInstance.DbInstance.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `BlueGreenUpdate`<sup>Required</sup> <a name="BlueGreenUpdate" id="@cdktf/provider-aws.dbInstance.DbInstance.property.blueGreenUpdate"></a>

```csharp
public DbInstanceBlueGreenUpdateOutputReference BlueGreenUpdate { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference">DbInstanceBlueGreenUpdateOutputReference</a>

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.dbInstance.DbInstance.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `EngineVersionActual`<sup>Required</sup> <a name="EngineVersionActual" id="@cdktf/provider-aws.dbInstance.DbInstance.property.engineVersionActual"></a>

```csharp
public string EngineVersionActual { get; }
```

- *Type:* string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktf/provider-aws.dbInstance.DbInstance.property.hostedZoneId"></a>

```csharp
public string HostedZoneId { get; }
```

- *Type:* string

---

##### `LatestRestorableTime`<sup>Required</sup> <a name="LatestRestorableTime" id="@cdktf/provider-aws.dbInstance.DbInstance.property.latestRestorableTime"></a>

```csharp
public string LatestRestorableTime { get; }
```

- *Type:* string

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="@cdktf/provider-aws.dbInstance.DbInstance.property.replicas"></a>

```csharp
public string[] Replicas { get; }
```

- *Type:* string[]

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-aws.dbInstance.DbInstance.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `RestoreToPointInTime`<sup>Required</sup> <a name="RestoreToPointInTime" id="@cdktf/provider-aws.dbInstance.DbInstance.property.restoreToPointInTime"></a>

```csharp
public DbInstanceRestoreToPointInTimeOutputReference RestoreToPointInTime { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference">DbInstanceRestoreToPointInTimeOutputReference</a>

---

##### `S3Import`<sup>Required</sup> <a name="S3Import" id="@cdktf/provider-aws.dbInstance.DbInstance.property.s3Import"></a>

```csharp
public DbInstanceS3ImportOutputReference S3Import { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference">DbInstanceS3ImportOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.dbInstance.DbInstance.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dbInstance.DbInstance.property.timeouts"></a>

```csharp
public DbInstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference">DbInstanceTimeoutsOutputReference</a>

---

##### `AllocatedStorageInput`<sup>Optional</sup> <a name="AllocatedStorageInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.allocatedStorageInput"></a>

```csharp
public double AllocatedStorageInput { get; }
```

- *Type:* double

---

##### `AllowMajorVersionUpgradeInput`<sup>Optional</sup> <a name="AllowMajorVersionUpgradeInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.allowMajorVersionUpgradeInput"></a>

```csharp
public object AllowMajorVersionUpgradeInput { get; }
```

- *Type:* object

---

##### `ApplyImmediatelyInput`<sup>Optional</sup> <a name="ApplyImmediatelyInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.applyImmediatelyInput"></a>

```csharp
public object ApplyImmediatelyInput { get; }
```

- *Type:* object

---

##### `AutoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="AutoMinorVersionUpgradeInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.autoMinorVersionUpgradeInput"></a>

```csharp
public object AutoMinorVersionUpgradeInput { get; }
```

- *Type:* object

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `BackupRetentionPeriodInput`<sup>Optional</sup> <a name="BackupRetentionPeriodInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.backupRetentionPeriodInput"></a>

```csharp
public double BackupRetentionPeriodInput { get; }
```

- *Type:* double

---

##### `BackupWindowInput`<sup>Optional</sup> <a name="BackupWindowInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.backupWindowInput"></a>

```csharp
public string BackupWindowInput { get; }
```

- *Type:* string

---

##### `BlueGreenUpdateInput`<sup>Optional</sup> <a name="BlueGreenUpdateInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.blueGreenUpdateInput"></a>

```csharp
public DbInstanceBlueGreenUpdate BlueGreenUpdateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate">DbInstanceBlueGreenUpdate</a>

---

##### `CaCertIdentifierInput`<sup>Optional</sup> <a name="CaCertIdentifierInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.caCertIdentifierInput"></a>

```csharp
public string CaCertIdentifierInput { get; }
```

- *Type:* string

---

##### `CharacterSetNameInput`<sup>Optional</sup> <a name="CharacterSetNameInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.characterSetNameInput"></a>

```csharp
public string CharacterSetNameInput { get; }
```

- *Type:* string

---

##### `CopyTagsToSnapshotInput`<sup>Optional</sup> <a name="CopyTagsToSnapshotInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.copyTagsToSnapshotInput"></a>

```csharp
public object CopyTagsToSnapshotInput { get; }
```

- *Type:* object

---

##### `CustomerOwnedIpEnabledInput`<sup>Optional</sup> <a name="CustomerOwnedIpEnabledInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.customerOwnedIpEnabledInput"></a>

```csharp
public object CustomerOwnedIpEnabledInput { get; }
```

- *Type:* object

---

##### `CustomIamInstanceProfileInput`<sup>Optional</sup> <a name="CustomIamInstanceProfileInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.customIamInstanceProfileInput"></a>

```csharp
public string CustomIamInstanceProfileInput { get; }
```

- *Type:* string

---

##### `DbNameInput`<sup>Optional</sup> <a name="DbNameInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.dbNameInput"></a>

```csharp
public string DbNameInput { get; }
```

- *Type:* string

---

##### `DbSubnetGroupNameInput`<sup>Optional</sup> <a name="DbSubnetGroupNameInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.dbSubnetGroupNameInput"></a>

```csharp
public string DbSubnetGroupNameInput { get; }
```

- *Type:* string

---

##### `DeleteAutomatedBackupsInput`<sup>Optional</sup> <a name="DeleteAutomatedBackupsInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.deleteAutomatedBackupsInput"></a>

```csharp
public object DeleteAutomatedBackupsInput { get; }
```

- *Type:* object

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.deletionProtectionInput"></a>

```csharp
public object DeletionProtectionInput { get; }
```

- *Type:* object

---

##### `DomainIamRoleNameInput`<sup>Optional</sup> <a name="DomainIamRoleNameInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.domainIamRoleNameInput"></a>

```csharp
public string DomainIamRoleNameInput { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `EnabledCloudwatchLogsExportsInput`<sup>Optional</sup> <a name="EnabledCloudwatchLogsExportsInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.enabledCloudwatchLogsExportsInput"></a>

```csharp
public string[] EnabledCloudwatchLogsExportsInput { get; }
```

- *Type:* string[]

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.engineInput"></a>

```csharp
public string EngineInput { get; }
```

- *Type:* string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.engineVersionInput"></a>

```csharp
public string EngineVersionInput { get; }
```

- *Type:* string

---

##### `FinalSnapshotIdentifierInput`<sup>Optional</sup> <a name="FinalSnapshotIdentifierInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.finalSnapshotIdentifierInput"></a>

```csharp
public string FinalSnapshotIdentifierInput { get; }
```

- *Type:* string

---

##### `IamDatabaseAuthenticationEnabledInput`<sup>Optional</sup> <a name="IamDatabaseAuthenticationEnabledInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.iamDatabaseAuthenticationEnabledInput"></a>

```csharp
public object IamDatabaseAuthenticationEnabledInput { get; }
```

- *Type:* object

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `IdentifierPrefixInput`<sup>Optional</sup> <a name="IdentifierPrefixInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.identifierPrefixInput"></a>

```csharp
public string IdentifierPrefixInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceClassInput`<sup>Optional</sup> <a name="InstanceClassInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.instanceClassInput"></a>

```csharp
public string InstanceClassInput { get; }
```

- *Type:* string

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.iopsInput"></a>

```csharp
public double IopsInput { get; }
```

- *Type:* double

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `LicenseModelInput`<sup>Optional</sup> <a name="LicenseModelInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.licenseModelInput"></a>

```csharp
public string LicenseModelInput { get; }
```

- *Type:* string

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.maintenanceWindowInput"></a>

```csharp
public string MaintenanceWindowInput { get; }
```

- *Type:* string

---

##### `MaxAllocatedStorageInput`<sup>Optional</sup> <a name="MaxAllocatedStorageInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.maxAllocatedStorageInput"></a>

```csharp
public double MaxAllocatedStorageInput { get; }
```

- *Type:* double

---

##### `MonitoringIntervalInput`<sup>Optional</sup> <a name="MonitoringIntervalInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.monitoringIntervalInput"></a>

```csharp
public double MonitoringIntervalInput { get; }
```

- *Type:* double

---

##### `MonitoringRoleArnInput`<sup>Optional</sup> <a name="MonitoringRoleArnInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.monitoringRoleArnInput"></a>

```csharp
public string MonitoringRoleArnInput { get; }
```

- *Type:* string

---

##### `MultiAzInput`<sup>Optional</sup> <a name="MultiAzInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.multiAzInput"></a>

```csharp
public object MultiAzInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NcharCharacterSetNameInput`<sup>Optional</sup> <a name="NcharCharacterSetNameInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.ncharCharacterSetNameInput"></a>

```csharp
public string NcharCharacterSetNameInput { get; }
```

- *Type:* string

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.networkTypeInput"></a>

```csharp
public string NetworkTypeInput { get; }
```

- *Type:* string

---

##### `OptionGroupNameInput`<sup>Optional</sup> <a name="OptionGroupNameInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.optionGroupNameInput"></a>

```csharp
public string OptionGroupNameInput { get; }
```

- *Type:* string

---

##### `ParameterGroupNameInput`<sup>Optional</sup> <a name="ParameterGroupNameInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.parameterGroupNameInput"></a>

```csharp
public string ParameterGroupNameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PerformanceInsightsEnabledInput`<sup>Optional</sup> <a name="PerformanceInsightsEnabledInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsEnabledInput"></a>

```csharp
public object PerformanceInsightsEnabledInput { get; }
```

- *Type:* object

---

##### `PerformanceInsightsKmsKeyIdInput`<sup>Optional</sup> <a name="PerformanceInsightsKmsKeyIdInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsKmsKeyIdInput"></a>

```csharp
public string PerformanceInsightsKmsKeyIdInput { get; }
```

- *Type:* string

---

##### `PerformanceInsightsRetentionPeriodInput`<sup>Optional</sup> <a name="PerformanceInsightsRetentionPeriodInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsRetentionPeriodInput"></a>

```csharp
public double PerformanceInsightsRetentionPeriodInput { get; }
```

- *Type:* double

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PubliclyAccessibleInput`<sup>Optional</sup> <a name="PubliclyAccessibleInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.publiclyAccessibleInput"></a>

```csharp
public object PubliclyAccessibleInput { get; }
```

- *Type:* object

---

##### `ReplicaModeInput`<sup>Optional</sup> <a name="ReplicaModeInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.replicaModeInput"></a>

```csharp
public string ReplicaModeInput { get; }
```

- *Type:* string

---

##### `ReplicateSourceDbInput`<sup>Optional</sup> <a name="ReplicateSourceDbInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.replicateSourceDbInput"></a>

```csharp
public string ReplicateSourceDbInput { get; }
```

- *Type:* string

---

##### `RestoreToPointInTimeInput`<sup>Optional</sup> <a name="RestoreToPointInTimeInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.restoreToPointInTimeInput"></a>

```csharp
public DbInstanceRestoreToPointInTime RestoreToPointInTimeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime">DbInstanceRestoreToPointInTime</a>

---

##### `S3ImportInput`<sup>Optional</sup> <a name="S3ImportInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.s3ImportInput"></a>

```csharp
public DbInstanceS3Import S3ImportInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import">DbInstanceS3Import</a>

---

##### `SecurityGroupNamesInput`<sup>Optional</sup> <a name="SecurityGroupNamesInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.securityGroupNamesInput"></a>

```csharp
public string[] SecurityGroupNamesInput { get; }
```

- *Type:* string[]

---

##### `SkipFinalSnapshotInput`<sup>Optional</sup> <a name="SkipFinalSnapshotInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.skipFinalSnapshotInput"></a>

```csharp
public object SkipFinalSnapshotInput { get; }
```

- *Type:* object

---

##### `SnapshotIdentifierInput`<sup>Optional</sup> <a name="SnapshotIdentifierInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.snapshotIdentifierInput"></a>

```csharp
public string SnapshotIdentifierInput { get; }
```

- *Type:* string

---

##### `StorageEncryptedInput`<sup>Optional</sup> <a name="StorageEncryptedInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.storageEncryptedInput"></a>

```csharp
public object StorageEncryptedInput { get; }
```

- *Type:* object

---

##### `StorageThroughputInput`<sup>Optional</sup> <a name="StorageThroughputInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.storageThroughputInput"></a>

```csharp
public double StorageThroughputInput { get; }
```

- *Type:* double

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.storageTypeInput"></a>

```csharp
public string StorageTypeInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.timezoneInput"></a>

```csharp
public string TimezoneInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.vpcSecurityGroupIdsInput"></a>

```csharp
public string[] VpcSecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `AllocatedStorage`<sup>Required</sup> <a name="AllocatedStorage" id="@cdktf/provider-aws.dbInstance.DbInstance.property.allocatedStorage"></a>

```csharp
public double AllocatedStorage { get; }
```

- *Type:* double

---

##### `AllowMajorVersionUpgrade`<sup>Required</sup> <a name="AllowMajorVersionUpgrade" id="@cdktf/provider-aws.dbInstance.DbInstance.property.allowMajorVersionUpgrade"></a>

```csharp
public object AllowMajorVersionUpgrade { get; }
```

- *Type:* object

---

##### `ApplyImmediately`<sup>Required</sup> <a name="ApplyImmediately" id="@cdktf/provider-aws.dbInstance.DbInstance.property.applyImmediately"></a>

```csharp
public object ApplyImmediately { get; }
```

- *Type:* object

---

##### `AutoMinorVersionUpgrade`<sup>Required</sup> <a name="AutoMinorVersionUpgrade" id="@cdktf/provider-aws.dbInstance.DbInstance.property.autoMinorVersionUpgrade"></a>

```csharp
public object AutoMinorVersionUpgrade { get; }
```

- *Type:* object

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.dbInstance.DbInstance.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `BackupRetentionPeriod`<sup>Required</sup> <a name="BackupRetentionPeriod" id="@cdktf/provider-aws.dbInstance.DbInstance.property.backupRetentionPeriod"></a>

```csharp
public double BackupRetentionPeriod { get; }
```

- *Type:* double

---

##### `BackupWindow`<sup>Required</sup> <a name="BackupWindow" id="@cdktf/provider-aws.dbInstance.DbInstance.property.backupWindow"></a>

```csharp
public string BackupWindow { get; }
```

- *Type:* string

---

##### `CaCertIdentifier`<sup>Required</sup> <a name="CaCertIdentifier" id="@cdktf/provider-aws.dbInstance.DbInstance.property.caCertIdentifier"></a>

```csharp
public string CaCertIdentifier { get; }
```

- *Type:* string

---

##### `CharacterSetName`<sup>Required</sup> <a name="CharacterSetName" id="@cdktf/provider-aws.dbInstance.DbInstance.property.characterSetName"></a>

```csharp
public string CharacterSetName { get; }
```

- *Type:* string

---

##### `CopyTagsToSnapshot`<sup>Required</sup> <a name="CopyTagsToSnapshot" id="@cdktf/provider-aws.dbInstance.DbInstance.property.copyTagsToSnapshot"></a>

```csharp
public object CopyTagsToSnapshot { get; }
```

- *Type:* object

---

##### `CustomerOwnedIpEnabled`<sup>Required</sup> <a name="CustomerOwnedIpEnabled" id="@cdktf/provider-aws.dbInstance.DbInstance.property.customerOwnedIpEnabled"></a>

```csharp
public object CustomerOwnedIpEnabled { get; }
```

- *Type:* object

---

##### `CustomIamInstanceProfile`<sup>Required</sup> <a name="CustomIamInstanceProfile" id="@cdktf/provider-aws.dbInstance.DbInstance.property.customIamInstanceProfile"></a>

```csharp
public string CustomIamInstanceProfile { get; }
```

- *Type:* string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktf/provider-aws.dbInstance.DbInstance.property.dbName"></a>

```csharp
public string DbName { get; }
```

- *Type:* string

---

##### `DbSubnetGroupName`<sup>Required</sup> <a name="DbSubnetGroupName" id="@cdktf/provider-aws.dbInstance.DbInstance.property.dbSubnetGroupName"></a>

```csharp
public string DbSubnetGroupName { get; }
```

- *Type:* string

---

##### `DeleteAutomatedBackups`<sup>Required</sup> <a name="DeleteAutomatedBackups" id="@cdktf/provider-aws.dbInstance.DbInstance.property.deleteAutomatedBackups"></a>

```csharp
public object DeleteAutomatedBackups { get; }
```

- *Type:* object

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-aws.dbInstance.DbInstance.property.deletionProtection"></a>

```csharp
public object DeletionProtection { get; }
```

- *Type:* object

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-aws.dbInstance.DbInstance.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `DomainIamRoleName`<sup>Required</sup> <a name="DomainIamRoleName" id="@cdktf/provider-aws.dbInstance.DbInstance.property.domainIamRoleName"></a>

```csharp
public string DomainIamRoleName { get; }
```

- *Type:* string

---

##### `EnabledCloudwatchLogsExports`<sup>Required</sup> <a name="EnabledCloudwatchLogsExports" id="@cdktf/provider-aws.dbInstance.DbInstance.property.enabledCloudwatchLogsExports"></a>

```csharp
public string[] EnabledCloudwatchLogsExports { get; }
```

- *Type:* string[]

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-aws.dbInstance.DbInstance.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-aws.dbInstance.DbInstance.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `FinalSnapshotIdentifier`<sup>Required</sup> <a name="FinalSnapshotIdentifier" id="@cdktf/provider-aws.dbInstance.DbInstance.property.finalSnapshotIdentifier"></a>

```csharp
public string FinalSnapshotIdentifier { get; }
```

- *Type:* string

---

##### `IamDatabaseAuthenticationEnabled`<sup>Required</sup> <a name="IamDatabaseAuthenticationEnabled" id="@cdktf/provider-aws.dbInstance.DbInstance.property.iamDatabaseAuthenticationEnabled"></a>

```csharp
public object IamDatabaseAuthenticationEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dbInstance.DbInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-aws.dbInstance.DbInstance.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `IdentifierPrefix`<sup>Required</sup> <a name="IdentifierPrefix" id="@cdktf/provider-aws.dbInstance.DbInstance.property.identifierPrefix"></a>

```csharp
public string IdentifierPrefix { get; }
```

- *Type:* string

---

##### `InstanceClass`<sup>Required</sup> <a name="InstanceClass" id="@cdktf/provider-aws.dbInstance.DbInstance.property.instanceClass"></a>

```csharp
public string InstanceClass { get; }
```

- *Type:* string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.dbInstance.DbInstance.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.dbInstance.DbInstance.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktf/provider-aws.dbInstance.DbInstance.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-aws.dbInstance.DbInstance.property.maintenanceWindow"></a>

```csharp
public string MaintenanceWindow { get; }
```

- *Type:* string

---

##### `MaxAllocatedStorage`<sup>Required</sup> <a name="MaxAllocatedStorage" id="@cdktf/provider-aws.dbInstance.DbInstance.property.maxAllocatedStorage"></a>

```csharp
public double MaxAllocatedStorage { get; }
```

- *Type:* double

---

##### `MonitoringInterval`<sup>Required</sup> <a name="MonitoringInterval" id="@cdktf/provider-aws.dbInstance.DbInstance.property.monitoringInterval"></a>

```csharp
public double MonitoringInterval { get; }
```

- *Type:* double

---

##### `MonitoringRoleArn`<sup>Required</sup> <a name="MonitoringRoleArn" id="@cdktf/provider-aws.dbInstance.DbInstance.property.monitoringRoleArn"></a>

```csharp
public string MonitoringRoleArn { get; }
```

- *Type:* string

---

##### `MultiAz`<sup>Required</sup> <a name="MultiAz" id="@cdktf/provider-aws.dbInstance.DbInstance.property.multiAz"></a>

```csharp
public object MultiAz { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dbInstance.DbInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NcharCharacterSetName`<sup>Required</sup> <a name="NcharCharacterSetName" id="@cdktf/provider-aws.dbInstance.DbInstance.property.ncharCharacterSetName"></a>

```csharp
public string NcharCharacterSetName { get; }
```

- *Type:* string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktf/provider-aws.dbInstance.DbInstance.property.networkType"></a>

```csharp
public string NetworkType { get; }
```

- *Type:* string

---

##### `OptionGroupName`<sup>Required</sup> <a name="OptionGroupName" id="@cdktf/provider-aws.dbInstance.DbInstance.property.optionGroupName"></a>

```csharp
public string OptionGroupName { get; }
```

- *Type:* string

---

##### `ParameterGroupName`<sup>Required</sup> <a name="ParameterGroupName" id="@cdktf/provider-aws.dbInstance.DbInstance.property.parameterGroupName"></a>

```csharp
public string ParameterGroupName { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.dbInstance.DbInstance.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PerformanceInsightsEnabled`<sup>Required</sup> <a name="PerformanceInsightsEnabled" id="@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsEnabled"></a>

```csharp
public object PerformanceInsightsEnabled { get; }
```

- *Type:* object

---

##### `PerformanceInsightsKmsKeyId`<sup>Required</sup> <a name="PerformanceInsightsKmsKeyId" id="@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsKmsKeyId"></a>

```csharp
public string PerformanceInsightsKmsKeyId { get; }
```

- *Type:* string

---

##### `PerformanceInsightsRetentionPeriod`<sup>Required</sup> <a name="PerformanceInsightsRetentionPeriod" id="@cdktf/provider-aws.dbInstance.DbInstance.property.performanceInsightsRetentionPeriod"></a>

```csharp
public double PerformanceInsightsRetentionPeriod { get; }
```

- *Type:* double

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.dbInstance.DbInstance.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PubliclyAccessible`<sup>Required</sup> <a name="PubliclyAccessible" id="@cdktf/provider-aws.dbInstance.DbInstance.property.publiclyAccessible"></a>

```csharp
public object PubliclyAccessible { get; }
```

- *Type:* object

---

##### `ReplicaMode`<sup>Required</sup> <a name="ReplicaMode" id="@cdktf/provider-aws.dbInstance.DbInstance.property.replicaMode"></a>

```csharp
public string ReplicaMode { get; }
```

- *Type:* string

---

##### `ReplicateSourceDb`<sup>Required</sup> <a name="ReplicateSourceDb" id="@cdktf/provider-aws.dbInstance.DbInstance.property.replicateSourceDb"></a>

```csharp
public string ReplicateSourceDb { get; }
```

- *Type:* string

---

##### `SecurityGroupNames`<sup>Required</sup> <a name="SecurityGroupNames" id="@cdktf/provider-aws.dbInstance.DbInstance.property.securityGroupNames"></a>

```csharp
public string[] SecurityGroupNames { get; }
```

- *Type:* string[]

---

##### `SkipFinalSnapshot`<sup>Required</sup> <a name="SkipFinalSnapshot" id="@cdktf/provider-aws.dbInstance.DbInstance.property.skipFinalSnapshot"></a>

```csharp
public object SkipFinalSnapshot { get; }
```

- *Type:* object

---

##### `SnapshotIdentifier`<sup>Required</sup> <a name="SnapshotIdentifier" id="@cdktf/provider-aws.dbInstance.DbInstance.property.snapshotIdentifier"></a>

```csharp
public string SnapshotIdentifier { get; }
```

- *Type:* string

---

##### `StorageEncrypted`<sup>Required</sup> <a name="StorageEncrypted" id="@cdktf/provider-aws.dbInstance.DbInstance.property.storageEncrypted"></a>

```csharp
public object StorageEncrypted { get; }
```

- *Type:* object

---

##### `StorageThroughput`<sup>Required</sup> <a name="StorageThroughput" id="@cdktf/provider-aws.dbInstance.DbInstance.property.storageThroughput"></a>

```csharp
public double StorageThroughput { get; }
```

- *Type:* double

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktf/provider-aws.dbInstance.DbInstance.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dbInstance.DbInstance.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.dbInstance.DbInstance.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-aws.dbInstance.DbInstance.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.dbInstance.DbInstance.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.dbInstance.DbInstance.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dbInstance.DbInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DbInstanceBlueGreenUpdate <a name="DbInstanceBlueGreenUpdate" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DbInstanceBlueGreenUpdate {
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#enabled DbInstance#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#enabled DbInstance#enabled}.

---

### DbInstanceConfig <a name="DbInstanceConfig" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DbInstanceConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string InstanceClass,
    double AllocatedStorage = null,
    object AllowMajorVersionUpgrade = null,
    object ApplyImmediately = null,
    object AutoMinorVersionUpgrade = null,
    string AvailabilityZone = null,
    double BackupRetentionPeriod = null,
    string BackupWindow = null,
    DbInstanceBlueGreenUpdate BlueGreenUpdate = null,
    string CaCertIdentifier = null,
    string CharacterSetName = null,
    object CopyTagsToSnapshot = null,
    object CustomerOwnedIpEnabled = null,
    string CustomIamInstanceProfile = null,
    string DbName = null,
    string DbSubnetGroupName = null,
    object DeleteAutomatedBackups = null,
    object DeletionProtection = null,
    string Domain = null,
    string DomainIamRoleName = null,
    string[] EnabledCloudwatchLogsExports = null,
    string Engine = null,
    string EngineVersion = null,
    string FinalSnapshotIdentifier = null,
    object IamDatabaseAuthenticationEnabled = null,
    string Id = null,
    string Identifier = null,
    string IdentifierPrefix = null,
    double Iops = null,
    string KmsKeyId = null,
    string LicenseModel = null,
    string MaintenanceWindow = null,
    double MaxAllocatedStorage = null,
    double MonitoringInterval = null,
    string MonitoringRoleArn = null,
    object MultiAz = null,
    string Name = null,
    string NcharCharacterSetName = null,
    string NetworkType = null,
    string OptionGroupName = null,
    string ParameterGroupName = null,
    string Password = null,
    object PerformanceInsightsEnabled = null,
    string PerformanceInsightsKmsKeyId = null,
    double PerformanceInsightsRetentionPeriod = null,
    double Port = null,
    object PubliclyAccessible = null,
    string ReplicaMode = null,
    string ReplicateSourceDb = null,
    DbInstanceRestoreToPointInTime RestoreToPointInTime = null,
    DbInstanceS3Import S3Import = null,
    string[] SecurityGroupNames = null,
    object SkipFinalSnapshot = null,
    string SnapshotIdentifier = null,
    object StorageEncrypted = null,
    double StorageThroughput = null,
    string StorageType = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    DbInstanceTimeouts Timeouts = null,
    string Timezone = null,
    string Username = null,
    string[] VpcSecurityGroupIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.instanceClass">InstanceClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#instance_class DbInstance#instance_class}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.allocatedStorage">AllocatedStorage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#allocated_storage DbInstance#allocated_storage}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.allowMajorVersionUpgrade">AllowMajorVersionUpgrade</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#allow_major_version_upgrade DbInstance#allow_major_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.applyImmediately">ApplyImmediately</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#apply_immediately DbInstance#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#auto_minor_version_upgrade DbInstance#auto_minor_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#availability_zone DbInstance#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.backupRetentionPeriod">BackupRetentionPeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#backup_retention_period DbInstance#backup_retention_period}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.backupWindow">BackupWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#backup_window DbInstance#backup_window}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.blueGreenUpdate">BlueGreenUpdate</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate">DbInstanceBlueGreenUpdate</a></code> | blue_green_update block. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.caCertIdentifier">CaCertIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#ca_cert_identifier DbInstance#ca_cert_identifier}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.characterSetName">CharacterSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#character_set_name DbInstance#character_set_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.copyTagsToSnapshot">CopyTagsToSnapshot</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#copy_tags_to_snapshot DbInstance#copy_tags_to_snapshot}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.customerOwnedIpEnabled">CustomerOwnedIpEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#customer_owned_ip_enabled DbInstance#customer_owned_ip_enabled}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.customIamInstanceProfile">CustomIamInstanceProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#custom_iam_instance_profile DbInstance#custom_iam_instance_profile}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.dbName">DbName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#db_name DbInstance#db_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.dbSubnetGroupName">DbSubnetGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#db_subnet_group_name DbInstance#db_subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.deleteAutomatedBackups">DeleteAutomatedBackups</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#delete_automated_backups DbInstance#delete_automated_backups}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.deletionProtection">DeletionProtection</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#deletion_protection DbInstance#deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.domain">Domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#domain DbInstance#domain}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.domainIamRoleName">DomainIamRoleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#domain_iam_role_name DbInstance#domain_iam_role_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.enabledCloudwatchLogsExports">EnabledCloudwatchLogsExports</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#enabled_cloudwatch_logs_exports DbInstance#enabled_cloudwatch_logs_exports}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.engine">Engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#engine DbInstance#engine}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.engineVersion">EngineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#engine_version DbInstance#engine_version}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.finalSnapshotIdentifier">FinalSnapshotIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#final_snapshot_identifier DbInstance#final_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.iamDatabaseAuthenticationEnabled">IamDatabaseAuthenticationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#iam_database_authentication_enabled DbInstance#iam_database_authentication_enabled}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#id DbInstance#id}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.identifier">Identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#identifier DbInstance#identifier}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.identifierPrefix">IdentifierPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#identifier_prefix DbInstance#identifier_prefix}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.iops">Iops</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#iops DbInstance#iops}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#kms_key_id DbInstance#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.licenseModel">LicenseModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#license_model DbInstance#license_model}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.maintenanceWindow">MaintenanceWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#maintenance_window DbInstance#maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.maxAllocatedStorage">MaxAllocatedStorage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#max_allocated_storage DbInstance#max_allocated_storage}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.monitoringInterval">MonitoringInterval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#monitoring_interval DbInstance#monitoring_interval}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.monitoringRoleArn">MonitoringRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#monitoring_role_arn DbInstance#monitoring_role_arn}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.multiAz">MultiAz</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#multi_az DbInstance#multi_az}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#name DbInstance#name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.ncharCharacterSetName">NcharCharacterSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#nchar_character_set_name DbInstance#nchar_character_set_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.networkType">NetworkType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#network_type DbInstance#network_type}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.optionGroupName">OptionGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#option_group_name DbInstance#option_group_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.parameterGroupName">ParameterGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#parameter_group_name DbInstance#parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#password DbInstance#password}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.performanceInsightsEnabled">PerformanceInsightsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#performance_insights_enabled DbInstance#performance_insights_enabled}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.performanceInsightsKmsKeyId">PerformanceInsightsKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#performance_insights_kms_key_id DbInstance#performance_insights_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.performanceInsightsRetentionPeriod">PerformanceInsightsRetentionPeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#performance_insights_retention_period DbInstance#performance_insights_retention_period}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#port DbInstance#port}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#publicly_accessible DbInstance#publicly_accessible}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.replicaMode">ReplicaMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#replica_mode DbInstance#replica_mode}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.replicateSourceDb">ReplicateSourceDb</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#replicate_source_db DbInstance#replicate_source_db}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.restoreToPointInTime">RestoreToPointInTime</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime">DbInstanceRestoreToPointInTime</a></code> | restore_to_point_in_time block. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.s3Import">S3Import</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import">DbInstanceS3Import</a></code> | s3_import block. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.securityGroupNames">SecurityGroupNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#security_group_names DbInstance#security_group_names}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.skipFinalSnapshot">SkipFinalSnapshot</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#skip_final_snapshot DbInstance#skip_final_snapshot}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.snapshotIdentifier">SnapshotIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#snapshot_identifier DbInstance#snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.storageEncrypted">StorageEncrypted</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#storage_encrypted DbInstance#storage_encrypted}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.storageThroughput">StorageThroughput</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#storage_throughput DbInstance#storage_throughput}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.storageType">StorageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#storage_type DbInstance#storage_type}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#tags DbInstance#tags}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#tags_all DbInstance#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeouts">DbInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.timezone">Timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#timezone DbInstance#timezone}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#username DbInstance#username}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#vpc_security_group_ids DbInstance#vpc_security_group_ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InstanceClass`<sup>Required</sup> <a name="InstanceClass" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.instanceClass"></a>

```csharp
public string InstanceClass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#instance_class DbInstance#instance_class}.

---

##### `AllocatedStorage`<sup>Optional</sup> <a name="AllocatedStorage" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.allocatedStorage"></a>

```csharp
public double AllocatedStorage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#allocated_storage DbInstance#allocated_storage}.

---

##### `AllowMajorVersionUpgrade`<sup>Optional</sup> <a name="AllowMajorVersionUpgrade" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.allowMajorVersionUpgrade"></a>

```csharp
public object AllowMajorVersionUpgrade { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#allow_major_version_upgrade DbInstance#allow_major_version_upgrade}.

---

##### `ApplyImmediately`<sup>Optional</sup> <a name="ApplyImmediately" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.applyImmediately"></a>

```csharp
public object ApplyImmediately { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#apply_immediately DbInstance#apply_immediately}.

---

##### `AutoMinorVersionUpgrade`<sup>Optional</sup> <a name="AutoMinorVersionUpgrade" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.autoMinorVersionUpgrade"></a>

```csharp
public object AutoMinorVersionUpgrade { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#auto_minor_version_upgrade DbInstance#auto_minor_version_upgrade}.

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#availability_zone DbInstance#availability_zone}.

---

##### `BackupRetentionPeriod`<sup>Optional</sup> <a name="BackupRetentionPeriod" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.backupRetentionPeriod"></a>

```csharp
public double BackupRetentionPeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#backup_retention_period DbInstance#backup_retention_period}.

---

##### `BackupWindow`<sup>Optional</sup> <a name="BackupWindow" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.backupWindow"></a>

```csharp
public string BackupWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#backup_window DbInstance#backup_window}.

---

##### `BlueGreenUpdate`<sup>Optional</sup> <a name="BlueGreenUpdate" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.blueGreenUpdate"></a>

```csharp
public DbInstanceBlueGreenUpdate BlueGreenUpdate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate">DbInstanceBlueGreenUpdate</a>

blue_green_update block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#blue_green_update DbInstance#blue_green_update}

---

##### `CaCertIdentifier`<sup>Optional</sup> <a name="CaCertIdentifier" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.caCertIdentifier"></a>

```csharp
public string CaCertIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#ca_cert_identifier DbInstance#ca_cert_identifier}.

---

##### `CharacterSetName`<sup>Optional</sup> <a name="CharacterSetName" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.characterSetName"></a>

```csharp
public string CharacterSetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#character_set_name DbInstance#character_set_name}.

---

##### `CopyTagsToSnapshot`<sup>Optional</sup> <a name="CopyTagsToSnapshot" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.copyTagsToSnapshot"></a>

```csharp
public object CopyTagsToSnapshot { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#copy_tags_to_snapshot DbInstance#copy_tags_to_snapshot}.

---

##### `CustomerOwnedIpEnabled`<sup>Optional</sup> <a name="CustomerOwnedIpEnabled" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.customerOwnedIpEnabled"></a>

```csharp
public object CustomerOwnedIpEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#customer_owned_ip_enabled DbInstance#customer_owned_ip_enabled}.

---

##### `CustomIamInstanceProfile`<sup>Optional</sup> <a name="CustomIamInstanceProfile" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.customIamInstanceProfile"></a>

```csharp
public string CustomIamInstanceProfile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#custom_iam_instance_profile DbInstance#custom_iam_instance_profile}.

---

##### `DbName`<sup>Optional</sup> <a name="DbName" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.dbName"></a>

```csharp
public string DbName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#db_name DbInstance#db_name}.

---

##### `DbSubnetGroupName`<sup>Optional</sup> <a name="DbSubnetGroupName" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.dbSubnetGroupName"></a>

```csharp
public string DbSubnetGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#db_subnet_group_name DbInstance#db_subnet_group_name}.

---

##### `DeleteAutomatedBackups`<sup>Optional</sup> <a name="DeleteAutomatedBackups" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.deleteAutomatedBackups"></a>

```csharp
public object DeleteAutomatedBackups { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#delete_automated_backups DbInstance#delete_automated_backups}.

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.deletionProtection"></a>

```csharp
public object DeletionProtection { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#deletion_protection DbInstance#deletion_protection}.

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#domain DbInstance#domain}.

---

##### `DomainIamRoleName`<sup>Optional</sup> <a name="DomainIamRoleName" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.domainIamRoleName"></a>

```csharp
public string DomainIamRoleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#domain_iam_role_name DbInstance#domain_iam_role_name}.

---

##### `EnabledCloudwatchLogsExports`<sup>Optional</sup> <a name="EnabledCloudwatchLogsExports" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.enabledCloudwatchLogsExports"></a>

```csharp
public string[] EnabledCloudwatchLogsExports { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#enabled_cloudwatch_logs_exports DbInstance#enabled_cloudwatch_logs_exports}.

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.engine"></a>

```csharp
public string Engine { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#engine DbInstance#engine}.

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.engineVersion"></a>

```csharp
public string EngineVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#engine_version DbInstance#engine_version}.

---

##### `FinalSnapshotIdentifier`<sup>Optional</sup> <a name="FinalSnapshotIdentifier" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.finalSnapshotIdentifier"></a>

```csharp
public string FinalSnapshotIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#final_snapshot_identifier DbInstance#final_snapshot_identifier}.

---

##### `IamDatabaseAuthenticationEnabled`<sup>Optional</sup> <a name="IamDatabaseAuthenticationEnabled" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.iamDatabaseAuthenticationEnabled"></a>

```csharp
public object IamDatabaseAuthenticationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#iam_database_authentication_enabled DbInstance#iam_database_authentication_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#id DbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identifier`<sup>Optional</sup> <a name="Identifier" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#identifier DbInstance#identifier}.

---

##### `IdentifierPrefix`<sup>Optional</sup> <a name="IdentifierPrefix" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.identifierPrefix"></a>

```csharp
public string IdentifierPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#identifier_prefix DbInstance#identifier_prefix}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.iops"></a>

```csharp
public double Iops { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#iops DbInstance#iops}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#kms_key_id DbInstance#kms_key_id}.

---

##### `LicenseModel`<sup>Optional</sup> <a name="LicenseModel" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.licenseModel"></a>

```csharp
public string LicenseModel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#license_model DbInstance#license_model}.

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.maintenanceWindow"></a>

```csharp
public string MaintenanceWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#maintenance_window DbInstance#maintenance_window}.

---

##### `MaxAllocatedStorage`<sup>Optional</sup> <a name="MaxAllocatedStorage" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.maxAllocatedStorage"></a>

```csharp
public double MaxAllocatedStorage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#max_allocated_storage DbInstance#max_allocated_storage}.

---

##### `MonitoringInterval`<sup>Optional</sup> <a name="MonitoringInterval" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.monitoringInterval"></a>

```csharp
public double MonitoringInterval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#monitoring_interval DbInstance#monitoring_interval}.

---

##### `MonitoringRoleArn`<sup>Optional</sup> <a name="MonitoringRoleArn" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.monitoringRoleArn"></a>

```csharp
public string MonitoringRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#monitoring_role_arn DbInstance#monitoring_role_arn}.

---

##### `MultiAz`<sup>Optional</sup> <a name="MultiAz" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.multiAz"></a>

```csharp
public object MultiAz { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#multi_az DbInstance#multi_az}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#name DbInstance#name}.

---

##### `NcharCharacterSetName`<sup>Optional</sup> <a name="NcharCharacterSetName" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.ncharCharacterSetName"></a>

```csharp
public string NcharCharacterSetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#nchar_character_set_name DbInstance#nchar_character_set_name}.

---

##### `NetworkType`<sup>Optional</sup> <a name="NetworkType" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.networkType"></a>

```csharp
public string NetworkType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#network_type DbInstance#network_type}.

---

##### `OptionGroupName`<sup>Optional</sup> <a name="OptionGroupName" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.optionGroupName"></a>

```csharp
public string OptionGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#option_group_name DbInstance#option_group_name}.

---

##### `ParameterGroupName`<sup>Optional</sup> <a name="ParameterGroupName" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.parameterGroupName"></a>

```csharp
public string ParameterGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#parameter_group_name DbInstance#parameter_group_name}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#password DbInstance#password}.

---

##### `PerformanceInsightsEnabled`<sup>Optional</sup> <a name="PerformanceInsightsEnabled" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.performanceInsightsEnabled"></a>

```csharp
public object PerformanceInsightsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#performance_insights_enabled DbInstance#performance_insights_enabled}.

---

##### `PerformanceInsightsKmsKeyId`<sup>Optional</sup> <a name="PerformanceInsightsKmsKeyId" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.performanceInsightsKmsKeyId"></a>

```csharp
public string PerformanceInsightsKmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#performance_insights_kms_key_id DbInstance#performance_insights_kms_key_id}.

---

##### `PerformanceInsightsRetentionPeriod`<sup>Optional</sup> <a name="PerformanceInsightsRetentionPeriod" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.performanceInsightsRetentionPeriod"></a>

```csharp
public double PerformanceInsightsRetentionPeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#performance_insights_retention_period DbInstance#performance_insights_retention_period}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#port DbInstance#port}.

---

##### `PubliclyAccessible`<sup>Optional</sup> <a name="PubliclyAccessible" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.publiclyAccessible"></a>

```csharp
public object PubliclyAccessible { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#publicly_accessible DbInstance#publicly_accessible}.

---

##### `ReplicaMode`<sup>Optional</sup> <a name="ReplicaMode" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.replicaMode"></a>

```csharp
public string ReplicaMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#replica_mode DbInstance#replica_mode}.

---

##### `ReplicateSourceDb`<sup>Optional</sup> <a name="ReplicateSourceDb" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.replicateSourceDb"></a>

```csharp
public string ReplicateSourceDb { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#replicate_source_db DbInstance#replicate_source_db}.

---

##### `RestoreToPointInTime`<sup>Optional</sup> <a name="RestoreToPointInTime" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.restoreToPointInTime"></a>

```csharp
public DbInstanceRestoreToPointInTime RestoreToPointInTime { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime">DbInstanceRestoreToPointInTime</a>

restore_to_point_in_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#restore_to_point_in_time DbInstance#restore_to_point_in_time}

---

##### `S3Import`<sup>Optional</sup> <a name="S3Import" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.s3Import"></a>

```csharp
public DbInstanceS3Import S3Import { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import">DbInstanceS3Import</a>

s3_import block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#s3_import DbInstance#s3_import}

---

##### `SecurityGroupNames`<sup>Optional</sup> <a name="SecurityGroupNames" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.securityGroupNames"></a>

```csharp
public string[] SecurityGroupNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#security_group_names DbInstance#security_group_names}.

---

##### `SkipFinalSnapshot`<sup>Optional</sup> <a name="SkipFinalSnapshot" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.skipFinalSnapshot"></a>

```csharp
public object SkipFinalSnapshot { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#skip_final_snapshot DbInstance#skip_final_snapshot}.

---

##### `SnapshotIdentifier`<sup>Optional</sup> <a name="SnapshotIdentifier" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.snapshotIdentifier"></a>

```csharp
public string SnapshotIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#snapshot_identifier DbInstance#snapshot_identifier}.

---

##### `StorageEncrypted`<sup>Optional</sup> <a name="StorageEncrypted" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.storageEncrypted"></a>

```csharp
public object StorageEncrypted { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#storage_encrypted DbInstance#storage_encrypted}.

---

##### `StorageThroughput`<sup>Optional</sup> <a name="StorageThroughput" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.storageThroughput"></a>

```csharp
public double StorageThroughput { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#storage_throughput DbInstance#storage_throughput}.

---

##### `StorageType`<sup>Optional</sup> <a name="StorageType" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.storageType"></a>

```csharp
public string StorageType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#storage_type DbInstance#storage_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#tags DbInstance#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#tags_all DbInstance#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.timeouts"></a>

```csharp
public DbInstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeouts">DbInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#timeouts DbInstance#timeouts}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.timezone"></a>

```csharp
public string Timezone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#timezone DbInstance#timezone}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#username DbInstance#username}.

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.dbInstance.DbInstanceConfig.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#vpc_security_group_ids DbInstance#vpc_security_group_ids}.

---

### DbInstanceRestoreToPointInTime <a name="DbInstanceRestoreToPointInTime" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DbInstanceRestoreToPointInTime {
    string RestoreTime = null,
    string SourceDbInstanceAutomatedBackupsArn = null,
    string SourceDbInstanceIdentifier = null,
    string SourceDbiResourceId = null,
    object UseLatestRestorableTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime.property.restoreTime">RestoreTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#restore_time DbInstance#restore_time}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime.property.sourceDbInstanceAutomatedBackupsArn">SourceDbInstanceAutomatedBackupsArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_db_instance_automated_backups_arn DbInstance#source_db_instance_automated_backups_arn}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime.property.sourceDbInstanceIdentifier">SourceDbInstanceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_db_instance_identifier DbInstance#source_db_instance_identifier}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime.property.sourceDbiResourceId">SourceDbiResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_dbi_resource_id DbInstance#source_dbi_resource_id}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime.property.useLatestRestorableTime">UseLatestRestorableTime</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#use_latest_restorable_time DbInstance#use_latest_restorable_time}. |

---

##### `RestoreTime`<sup>Optional</sup> <a name="RestoreTime" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime.property.restoreTime"></a>

```csharp
public string RestoreTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#restore_time DbInstance#restore_time}.

---

##### `SourceDbInstanceAutomatedBackupsArn`<sup>Optional</sup> <a name="SourceDbInstanceAutomatedBackupsArn" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime.property.sourceDbInstanceAutomatedBackupsArn"></a>

```csharp
public string SourceDbInstanceAutomatedBackupsArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_db_instance_automated_backups_arn DbInstance#source_db_instance_automated_backups_arn}.

---

##### `SourceDbInstanceIdentifier`<sup>Optional</sup> <a name="SourceDbInstanceIdentifier" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime.property.sourceDbInstanceIdentifier"></a>

```csharp
public string SourceDbInstanceIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_db_instance_identifier DbInstance#source_db_instance_identifier}.

---

##### `SourceDbiResourceId`<sup>Optional</sup> <a name="SourceDbiResourceId" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime.property.sourceDbiResourceId"></a>

```csharp
public string SourceDbiResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_dbi_resource_id DbInstance#source_dbi_resource_id}.

---

##### `UseLatestRestorableTime`<sup>Optional</sup> <a name="UseLatestRestorableTime" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime.property.useLatestRestorableTime"></a>

```csharp
public object UseLatestRestorableTime { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#use_latest_restorable_time DbInstance#use_latest_restorable_time}.

---

### DbInstanceS3Import <a name="DbInstanceS3Import" id="@cdktf/provider-aws.dbInstance.DbInstanceS3Import"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbInstance.DbInstanceS3Import.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DbInstanceS3Import {
    string BucketName,
    string IngestionRole,
    string SourceEngine,
    string SourceEngineVersion,
    string BucketPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import.property.bucketName">BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#bucket_name DbInstance#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import.property.ingestionRole">IngestionRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#ingestion_role DbInstance#ingestion_role}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import.property.sourceEngine">SourceEngine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_engine DbInstance#source_engine}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import.property.sourceEngineVersion">SourceEngineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_engine_version DbInstance#source_engine_version}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import.property.bucketPrefix">BucketPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#bucket_prefix DbInstance#bucket_prefix}. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.dbInstance.DbInstanceS3Import.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#bucket_name DbInstance#bucket_name}.

---

##### `IngestionRole`<sup>Required</sup> <a name="IngestionRole" id="@cdktf/provider-aws.dbInstance.DbInstanceS3Import.property.ingestionRole"></a>

```csharp
public string IngestionRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#ingestion_role DbInstance#ingestion_role}.

---

##### `SourceEngine`<sup>Required</sup> <a name="SourceEngine" id="@cdktf/provider-aws.dbInstance.DbInstanceS3Import.property.sourceEngine"></a>

```csharp
public string SourceEngine { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_engine DbInstance#source_engine}.

---

##### `SourceEngineVersion`<sup>Required</sup> <a name="SourceEngineVersion" id="@cdktf/provider-aws.dbInstance.DbInstanceS3Import.property.sourceEngineVersion"></a>

```csharp
public string SourceEngineVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#source_engine_version DbInstance#source_engine_version}.

---

##### `BucketPrefix`<sup>Optional</sup> <a name="BucketPrefix" id="@cdktf/provider-aws.dbInstance.DbInstanceS3Import.property.bucketPrefix"></a>

```csharp
public string BucketPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#bucket_prefix DbInstance#bucket_prefix}.

---

### DbInstanceTimeouts <a name="DbInstanceTimeouts" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DbInstanceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#create DbInstance#create}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#delete DbInstance#delete}. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#update DbInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#create DbInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#delete DbInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance#update DbInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DbInstanceBlueGreenUpdateOutputReference <a name="DbInstanceBlueGreenUpdateOutputReference" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DbInstanceBlueGreenUpdateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate">DbInstanceBlueGreenUpdate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdateOutputReference.property.internalValue"></a>

```csharp
public DbInstanceBlueGreenUpdate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceBlueGreenUpdate">DbInstanceBlueGreenUpdate</a>

---


### DbInstanceRestoreToPointInTimeOutputReference <a name="DbInstanceRestoreToPointInTimeOutputReference" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DbInstanceRestoreToPointInTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resetRestoreTime">ResetRestoreTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resetSourceDbInstanceAutomatedBackupsArn">ResetSourceDbInstanceAutomatedBackupsArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resetSourceDbInstanceIdentifier">ResetSourceDbInstanceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resetSourceDbiResourceId">ResetSourceDbiResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resetUseLatestRestorableTime">ResetUseLatestRestorableTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRestoreTime` <a name="ResetRestoreTime" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resetRestoreTime"></a>

```csharp
private void ResetRestoreTime()
```

##### `ResetSourceDbInstanceAutomatedBackupsArn` <a name="ResetSourceDbInstanceAutomatedBackupsArn" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resetSourceDbInstanceAutomatedBackupsArn"></a>

```csharp
private void ResetSourceDbInstanceAutomatedBackupsArn()
```

##### `ResetSourceDbInstanceIdentifier` <a name="ResetSourceDbInstanceIdentifier" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resetSourceDbInstanceIdentifier"></a>

```csharp
private void ResetSourceDbInstanceIdentifier()
```

##### `ResetSourceDbiResourceId` <a name="ResetSourceDbiResourceId" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resetSourceDbiResourceId"></a>

```csharp
private void ResetSourceDbiResourceId()
```

##### `ResetUseLatestRestorableTime` <a name="ResetUseLatestRestorableTime" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.resetUseLatestRestorableTime"></a>

```csharp
private void ResetUseLatestRestorableTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.restoreTimeInput">RestoreTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbInstanceAutomatedBackupsArnInput">SourceDbInstanceAutomatedBackupsArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbInstanceIdentifierInput">SourceDbInstanceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbiResourceIdInput">SourceDbiResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.useLatestRestorableTimeInput">UseLatestRestorableTimeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.restoreTime">RestoreTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbInstanceAutomatedBackupsArn">SourceDbInstanceAutomatedBackupsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbInstanceIdentifier">SourceDbInstanceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbiResourceId">SourceDbiResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.useLatestRestorableTime">UseLatestRestorableTime</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime">DbInstanceRestoreToPointInTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RestoreTimeInput`<sup>Optional</sup> <a name="RestoreTimeInput" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.restoreTimeInput"></a>

```csharp
public string RestoreTimeInput { get; }
```

- *Type:* string

---

##### `SourceDbInstanceAutomatedBackupsArnInput`<sup>Optional</sup> <a name="SourceDbInstanceAutomatedBackupsArnInput" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbInstanceAutomatedBackupsArnInput"></a>

```csharp
public string SourceDbInstanceAutomatedBackupsArnInput { get; }
```

- *Type:* string

---

##### `SourceDbInstanceIdentifierInput`<sup>Optional</sup> <a name="SourceDbInstanceIdentifierInput" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbInstanceIdentifierInput"></a>

```csharp
public string SourceDbInstanceIdentifierInput { get; }
```

- *Type:* string

---

##### `SourceDbiResourceIdInput`<sup>Optional</sup> <a name="SourceDbiResourceIdInput" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbiResourceIdInput"></a>

```csharp
public string SourceDbiResourceIdInput { get; }
```

- *Type:* string

---

##### `UseLatestRestorableTimeInput`<sup>Optional</sup> <a name="UseLatestRestorableTimeInput" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.useLatestRestorableTimeInput"></a>

```csharp
public object UseLatestRestorableTimeInput { get; }
```

- *Type:* object

---

##### `RestoreTime`<sup>Required</sup> <a name="RestoreTime" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.restoreTime"></a>

```csharp
public string RestoreTime { get; }
```

- *Type:* string

---

##### `SourceDbInstanceAutomatedBackupsArn`<sup>Required</sup> <a name="SourceDbInstanceAutomatedBackupsArn" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbInstanceAutomatedBackupsArn"></a>

```csharp
public string SourceDbInstanceAutomatedBackupsArn { get; }
```

- *Type:* string

---

##### `SourceDbInstanceIdentifier`<sup>Required</sup> <a name="SourceDbInstanceIdentifier" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbInstanceIdentifier"></a>

```csharp
public string SourceDbInstanceIdentifier { get; }
```

- *Type:* string

---

##### `SourceDbiResourceId`<sup>Required</sup> <a name="SourceDbiResourceId" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.sourceDbiResourceId"></a>

```csharp
public string SourceDbiResourceId { get; }
```

- *Type:* string

---

##### `UseLatestRestorableTime`<sup>Required</sup> <a name="UseLatestRestorableTime" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.useLatestRestorableTime"></a>

```csharp
public object UseLatestRestorableTime { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTimeOutputReference.property.internalValue"></a>

```csharp
public DbInstanceRestoreToPointInTime InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceRestoreToPointInTime">DbInstanceRestoreToPointInTime</a>

---


### DbInstanceS3ImportOutputReference <a name="DbInstanceS3ImportOutputReference" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DbInstanceS3ImportOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.resetBucketPrefix">ResetBucketPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketPrefix` <a name="ResetBucketPrefix" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.resetBucketPrefix"></a>

```csharp
private void ResetBucketPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.bucketPrefixInput">BucketPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.ingestionRoleInput">IngestionRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.sourceEngineInput">SourceEngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.sourceEngineVersionInput">SourceEngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.bucketPrefix">BucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.ingestionRole">IngestionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.sourceEngine">SourceEngine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.sourceEngineVersion">SourceEngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import">DbInstanceS3Import</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `BucketPrefixInput`<sup>Optional</sup> <a name="BucketPrefixInput" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.bucketPrefixInput"></a>

```csharp
public string BucketPrefixInput { get; }
```

- *Type:* string

---

##### `IngestionRoleInput`<sup>Optional</sup> <a name="IngestionRoleInput" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.ingestionRoleInput"></a>

```csharp
public string IngestionRoleInput { get; }
```

- *Type:* string

---

##### `SourceEngineInput`<sup>Optional</sup> <a name="SourceEngineInput" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.sourceEngineInput"></a>

```csharp
public string SourceEngineInput { get; }
```

- *Type:* string

---

##### `SourceEngineVersionInput`<sup>Optional</sup> <a name="SourceEngineVersionInput" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.sourceEngineVersionInput"></a>

```csharp
public string SourceEngineVersionInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `BucketPrefix`<sup>Required</sup> <a name="BucketPrefix" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.bucketPrefix"></a>

```csharp
public string BucketPrefix { get; }
```

- *Type:* string

---

##### `IngestionRole`<sup>Required</sup> <a name="IngestionRole" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.ingestionRole"></a>

```csharp
public string IngestionRole { get; }
```

- *Type:* string

---

##### `SourceEngine`<sup>Required</sup> <a name="SourceEngine" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.sourceEngine"></a>

```csharp
public string SourceEngine { get; }
```

- *Type:* string

---

##### `SourceEngineVersion`<sup>Required</sup> <a name="SourceEngineVersion" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.sourceEngineVersion"></a>

```csharp
public string SourceEngineVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dbInstance.DbInstanceS3ImportOutputReference.property.internalValue"></a>

```csharp
public DbInstanceS3Import InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dbInstance.DbInstanceS3Import">DbInstanceS3Import</a>

---


### DbInstanceTimeoutsOutputReference <a name="DbInstanceTimeoutsOutputReference" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DbInstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dbInstance.DbInstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



