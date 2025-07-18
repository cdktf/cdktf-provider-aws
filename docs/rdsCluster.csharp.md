# `rdsCluster` Submodule <a name="`rdsCluster` Submodule" id="@cdktf/provider-aws.rdsCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsCluster <a name="RdsCluster" id="@cdktf/provider-aws.rdsCluster.RdsCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster aws_rds_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RdsCluster(Construct Scope, string Id, RdsClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig">RdsClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig">RdsClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.putRestoreToPointInTime">PutRestoreToPointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.putS3Import">PutS3Import</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.putScalingConfiguration">PutScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.putServerlessv2ScalingConfiguration">PutServerlessv2ScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetAllocatedStorage">ResetAllocatedStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetAllowMajorVersionUpgrade">ResetAllowMajorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetApplyImmediately">ResetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetAvailabilityZones">ResetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetBacktrackWindow">ResetBacktrackWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetBackupRetentionPeriod">ResetBackupRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetCaCertificateIdentifier">ResetCaCertificateIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetClusterIdentifier">ResetClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetClusterIdentifierPrefix">ResetClusterIdentifierPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetClusterMembers">ResetClusterMembers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetClusterScalabilityType">ResetClusterScalabilityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetCopyTagsToSnapshot">ResetCopyTagsToSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetDatabaseInsightsMode">ResetDatabaseInsightsMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetDbClusterInstanceClass">ResetDbClusterInstanceClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetDbClusterParameterGroupName">ResetDbClusterParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetDbInstanceParameterGroupName">ResetDbInstanceParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetDbSubnetGroupName">ResetDbSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetDbSystemId">ResetDbSystemId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetDeleteAutomatedBackups">ResetDeleteAutomatedBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetDomainIamRoleName">ResetDomainIamRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetEnabledCloudwatchLogsExports">ResetEnabledCloudwatchLogsExports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetEnableGlobalWriteForwarding">ResetEnableGlobalWriteForwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetEnableHttpEndpoint">ResetEnableHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetEnableLocalWriteForwarding">ResetEnableLocalWriteForwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetEngineLifecycleSupport">ResetEngineLifecycleSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetEngineMode">ResetEngineMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetFinalSnapshotIdentifier">ResetFinalSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetGlobalClusterIdentifier">ResetGlobalClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetIamDatabaseAuthenticationEnabled">ResetIamDatabaseAuthenticationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetIamRoles">ResetIamRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetManageMasterUserPassword">ResetManageMasterUserPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetMasterPassword">ResetMasterPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetMasterPasswordWo">ResetMasterPasswordWo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetMasterPasswordWoVersion">ResetMasterPasswordWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetMasterUsername">ResetMasterUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetMasterUserSecretKmsKeyId">ResetMasterUserSecretKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetMonitoringInterval">ResetMonitoringInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetMonitoringRoleArn">ResetMonitoringRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetNetworkType">ResetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetPerformanceInsightsEnabled">ResetPerformanceInsightsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetPerformanceInsightsKmsKeyId">ResetPerformanceInsightsKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetPerformanceInsightsRetentionPeriod">ResetPerformanceInsightsRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetPreferredBackupWindow">ResetPreferredBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetPreferredMaintenanceWindow">ResetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetReplicationSourceIdentifier">ResetReplicationSourceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetRestoreToPointInTime">ResetRestoreToPointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetS3Import">ResetS3Import</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetScalingConfiguration">ResetScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetServerlessv2ScalingConfiguration">ResetServerlessv2ScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetSkipFinalSnapshot">ResetSkipFinalSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetSnapshotIdentifier">ResetSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetSourceRegion">ResetSourceRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetStorageEncrypted">ResetStorageEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetStorageType">ResetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetVpcSecurityGroupIds">ResetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rdsCluster.RdsCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.rdsCluster.RdsCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.rdsCluster.RdsCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.rdsCluster.RdsCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.rdsCluster.RdsCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.rdsCluster.RdsCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.rdsCluster.RdsCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.rdsCluster.RdsCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.rdsCluster.RdsCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.rdsCluster.RdsCluster.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.rdsCluster.RdsCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.rdsCluster.RdsCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.rdsCluster.RdsCluster.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.rdsCluster.RdsCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.rdsCluster.RdsCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.rdsCluster.RdsCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.rdsCluster.RdsCluster.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.rdsCluster.RdsCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRestoreToPointInTime` <a name="PutRestoreToPointInTime" id="@cdktf/provider-aws.rdsCluster.RdsCluster.putRestoreToPointInTime"></a>

```csharp
private void PutRestoreToPointInTime(RdsClusterRestoreToPointInTime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.rdsCluster.RdsCluster.putRestoreToPointInTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime">RdsClusterRestoreToPointInTime</a>

---

##### `PutS3Import` <a name="PutS3Import" id="@cdktf/provider-aws.rdsCluster.RdsCluster.putS3Import"></a>

```csharp
private void PutS3Import(RdsClusterS3Import Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.rdsCluster.RdsCluster.putS3Import.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import">RdsClusterS3Import</a>

---

##### `PutScalingConfiguration` <a name="PutScalingConfiguration" id="@cdktf/provider-aws.rdsCluster.RdsCluster.putScalingConfiguration"></a>

```csharp
private void PutScalingConfiguration(RdsClusterScalingConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.rdsCluster.RdsCluster.putScalingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration">RdsClusterScalingConfiguration</a>

---

##### `PutServerlessv2ScalingConfiguration` <a name="PutServerlessv2ScalingConfiguration" id="@cdktf/provider-aws.rdsCluster.RdsCluster.putServerlessv2ScalingConfiguration"></a>

```csharp
private void PutServerlessv2ScalingConfiguration(RdsClusterServerlessv2ScalingConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.rdsCluster.RdsCluster.putServerlessv2ScalingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration">RdsClusterServerlessv2ScalingConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.rdsCluster.RdsCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(RdsClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.rdsCluster.RdsCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts">RdsClusterTimeouts</a>

---

##### `ResetAllocatedStorage` <a name="ResetAllocatedStorage" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetAllocatedStorage"></a>

```csharp
private void ResetAllocatedStorage()
```

##### `ResetAllowMajorVersionUpgrade` <a name="ResetAllowMajorVersionUpgrade" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetAllowMajorVersionUpgrade"></a>

```csharp
private void ResetAllowMajorVersionUpgrade()
```

##### `ResetApplyImmediately` <a name="ResetApplyImmediately" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetApplyImmediately"></a>

```csharp
private void ResetApplyImmediately()
```

##### `ResetAvailabilityZones` <a name="ResetAvailabilityZones" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetAvailabilityZones"></a>

```csharp
private void ResetAvailabilityZones()
```

##### `ResetBacktrackWindow` <a name="ResetBacktrackWindow" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetBacktrackWindow"></a>

```csharp
private void ResetBacktrackWindow()
```

##### `ResetBackupRetentionPeriod` <a name="ResetBackupRetentionPeriod" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetBackupRetentionPeriod"></a>

```csharp
private void ResetBackupRetentionPeriod()
```

##### `ResetCaCertificateIdentifier` <a name="ResetCaCertificateIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetCaCertificateIdentifier"></a>

```csharp
private void ResetCaCertificateIdentifier()
```

##### `ResetClusterIdentifier` <a name="ResetClusterIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetClusterIdentifier"></a>

```csharp
private void ResetClusterIdentifier()
```

##### `ResetClusterIdentifierPrefix` <a name="ResetClusterIdentifierPrefix" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetClusterIdentifierPrefix"></a>

```csharp
private void ResetClusterIdentifierPrefix()
```

##### `ResetClusterMembers` <a name="ResetClusterMembers" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetClusterMembers"></a>

```csharp
private void ResetClusterMembers()
```

##### `ResetClusterScalabilityType` <a name="ResetClusterScalabilityType" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetClusterScalabilityType"></a>

```csharp
private void ResetClusterScalabilityType()
```

##### `ResetCopyTagsToSnapshot` <a name="ResetCopyTagsToSnapshot" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetCopyTagsToSnapshot"></a>

```csharp
private void ResetCopyTagsToSnapshot()
```

##### `ResetDatabaseInsightsMode` <a name="ResetDatabaseInsightsMode" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetDatabaseInsightsMode"></a>

```csharp
private void ResetDatabaseInsightsMode()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetDbClusterInstanceClass` <a name="ResetDbClusterInstanceClass" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetDbClusterInstanceClass"></a>

```csharp
private void ResetDbClusterInstanceClass()
```

##### `ResetDbClusterParameterGroupName` <a name="ResetDbClusterParameterGroupName" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetDbClusterParameterGroupName"></a>

```csharp
private void ResetDbClusterParameterGroupName()
```

##### `ResetDbInstanceParameterGroupName` <a name="ResetDbInstanceParameterGroupName" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetDbInstanceParameterGroupName"></a>

```csharp
private void ResetDbInstanceParameterGroupName()
```

##### `ResetDbSubnetGroupName` <a name="ResetDbSubnetGroupName" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetDbSubnetGroupName"></a>

```csharp
private void ResetDbSubnetGroupName()
```

##### `ResetDbSystemId` <a name="ResetDbSystemId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetDbSystemId"></a>

```csharp
private void ResetDbSystemId()
```

##### `ResetDeleteAutomatedBackups` <a name="ResetDeleteAutomatedBackups" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetDeleteAutomatedBackups"></a>

```csharp
private void ResetDeleteAutomatedBackups()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetDeletionProtection"></a>

```csharp
private void ResetDeletionProtection()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetDomain"></a>

```csharp
private void ResetDomain()
```

##### `ResetDomainIamRoleName` <a name="ResetDomainIamRoleName" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetDomainIamRoleName"></a>

```csharp
private void ResetDomainIamRoleName()
```

##### `ResetEnabledCloudwatchLogsExports` <a name="ResetEnabledCloudwatchLogsExports" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetEnabledCloudwatchLogsExports"></a>

```csharp
private void ResetEnabledCloudwatchLogsExports()
```

##### `ResetEnableGlobalWriteForwarding` <a name="ResetEnableGlobalWriteForwarding" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetEnableGlobalWriteForwarding"></a>

```csharp
private void ResetEnableGlobalWriteForwarding()
```

##### `ResetEnableHttpEndpoint` <a name="ResetEnableHttpEndpoint" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetEnableHttpEndpoint"></a>

```csharp
private void ResetEnableHttpEndpoint()
```

##### `ResetEnableLocalWriteForwarding` <a name="ResetEnableLocalWriteForwarding" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetEnableLocalWriteForwarding"></a>

```csharp
private void ResetEnableLocalWriteForwarding()
```

##### `ResetEngineLifecycleSupport` <a name="ResetEngineLifecycleSupport" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetEngineLifecycleSupport"></a>

```csharp
private void ResetEngineLifecycleSupport()
```

##### `ResetEngineMode` <a name="ResetEngineMode" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetEngineMode"></a>

```csharp
private void ResetEngineMode()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetEngineVersion"></a>

```csharp
private void ResetEngineVersion()
```

##### `ResetFinalSnapshotIdentifier` <a name="ResetFinalSnapshotIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetFinalSnapshotIdentifier"></a>

```csharp
private void ResetFinalSnapshotIdentifier()
```

##### `ResetGlobalClusterIdentifier` <a name="ResetGlobalClusterIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetGlobalClusterIdentifier"></a>

```csharp
private void ResetGlobalClusterIdentifier()
```

##### `ResetIamDatabaseAuthenticationEnabled` <a name="ResetIamDatabaseAuthenticationEnabled" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetIamDatabaseAuthenticationEnabled"></a>

```csharp
private void ResetIamDatabaseAuthenticationEnabled()
```

##### `ResetIamRoles` <a name="ResetIamRoles" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetIamRoles"></a>

```csharp
private void ResetIamRoles()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetIops"></a>

```csharp
private void ResetIops()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetManageMasterUserPassword` <a name="ResetManageMasterUserPassword" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetManageMasterUserPassword"></a>

```csharp
private void ResetManageMasterUserPassword()
```

##### `ResetMasterPassword` <a name="ResetMasterPassword" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetMasterPassword"></a>

```csharp
private void ResetMasterPassword()
```

##### `ResetMasterPasswordWo` <a name="ResetMasterPasswordWo" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetMasterPasswordWo"></a>

```csharp
private void ResetMasterPasswordWo()
```

##### `ResetMasterPasswordWoVersion` <a name="ResetMasterPasswordWoVersion" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetMasterPasswordWoVersion"></a>

```csharp
private void ResetMasterPasswordWoVersion()
```

##### `ResetMasterUsername` <a name="ResetMasterUsername" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetMasterUsername"></a>

```csharp
private void ResetMasterUsername()
```

##### `ResetMasterUserSecretKmsKeyId` <a name="ResetMasterUserSecretKmsKeyId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetMasterUserSecretKmsKeyId"></a>

```csharp
private void ResetMasterUserSecretKmsKeyId()
```

##### `ResetMonitoringInterval` <a name="ResetMonitoringInterval" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetMonitoringInterval"></a>

```csharp
private void ResetMonitoringInterval()
```

##### `ResetMonitoringRoleArn` <a name="ResetMonitoringRoleArn" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetMonitoringRoleArn"></a>

```csharp
private void ResetMonitoringRoleArn()
```

##### `ResetNetworkType` <a name="ResetNetworkType" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetNetworkType"></a>

```csharp
private void ResetNetworkType()
```

##### `ResetPerformanceInsightsEnabled` <a name="ResetPerformanceInsightsEnabled" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetPerformanceInsightsEnabled"></a>

```csharp
private void ResetPerformanceInsightsEnabled()
```

##### `ResetPerformanceInsightsKmsKeyId` <a name="ResetPerformanceInsightsKmsKeyId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetPerformanceInsightsKmsKeyId"></a>

```csharp
private void ResetPerformanceInsightsKmsKeyId()
```

##### `ResetPerformanceInsightsRetentionPeriod` <a name="ResetPerformanceInsightsRetentionPeriod" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetPerformanceInsightsRetentionPeriod"></a>

```csharp
private void ResetPerformanceInsightsRetentionPeriod()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPreferredBackupWindow` <a name="ResetPreferredBackupWindow" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetPreferredBackupWindow"></a>

```csharp
private void ResetPreferredBackupWindow()
```

##### `ResetPreferredMaintenanceWindow` <a name="ResetPreferredMaintenanceWindow" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetPreferredMaintenanceWindow"></a>

```csharp
private void ResetPreferredMaintenanceWindow()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetReplicationSourceIdentifier` <a name="ResetReplicationSourceIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetReplicationSourceIdentifier"></a>

```csharp
private void ResetReplicationSourceIdentifier()
```

##### `ResetRestoreToPointInTime` <a name="ResetRestoreToPointInTime" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetRestoreToPointInTime"></a>

```csharp
private void ResetRestoreToPointInTime()
```

##### `ResetS3Import` <a name="ResetS3Import" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetS3Import"></a>

```csharp
private void ResetS3Import()
```

##### `ResetScalingConfiguration` <a name="ResetScalingConfiguration" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetScalingConfiguration"></a>

```csharp
private void ResetScalingConfiguration()
```

##### `ResetServerlessv2ScalingConfiguration` <a name="ResetServerlessv2ScalingConfiguration" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetServerlessv2ScalingConfiguration"></a>

```csharp
private void ResetServerlessv2ScalingConfiguration()
```

##### `ResetSkipFinalSnapshot` <a name="ResetSkipFinalSnapshot" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetSkipFinalSnapshot"></a>

```csharp
private void ResetSkipFinalSnapshot()
```

##### `ResetSnapshotIdentifier` <a name="ResetSnapshotIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetSnapshotIdentifier"></a>

```csharp
private void ResetSnapshotIdentifier()
```

##### `ResetSourceRegion` <a name="ResetSourceRegion" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetSourceRegion"></a>

```csharp
private void ResetSourceRegion()
```

##### `ResetStorageEncrypted` <a name="ResetStorageEncrypted" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetStorageEncrypted"></a>

```csharp
private void ResetStorageEncrypted()
```

##### `ResetStorageType` <a name="ResetStorageType" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetStorageType"></a>

```csharp
private void ResetStorageType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetVpcSecurityGroupIds"></a>

```csharp
private void ResetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RdsCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.rdsCluster.RdsCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RdsCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.rdsCluster.RdsCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.rdsCluster.RdsCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RdsCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.rdsCluster.RdsCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.rdsCluster.RdsCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RdsCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.rdsCluster.RdsCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.rdsCluster.RdsCluster.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RdsCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a RdsCluster resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.rdsCluster.RdsCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RdsCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RdsCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.rdsCluster.RdsCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the RdsCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.caCertificateValidTill">CaCertificateValidTill</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterResourceId">ClusterResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineVersionActual">EngineVersionActual</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.hostedZoneId">HostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterUserSecret">MasterUserSecret</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList">RdsClusterMasterUserSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.readerEndpoint">ReaderEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.restoreToPointInTime">RestoreToPointInTime</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference">RdsClusterRestoreToPointInTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.s3Import">S3Import</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference">RdsClusterS3ImportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.scalingConfiguration">ScalingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference">RdsClusterScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.serverlessv2ScalingConfiguration">Serverlessv2ScalingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference">RdsClusterServerlessv2ScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference">RdsClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.allocatedStorageInput">AllocatedStorageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.allowMajorVersionUpgradeInput">AllowMajorVersionUpgradeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.applyImmediatelyInput">ApplyImmediatelyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.availabilityZonesInput">AvailabilityZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.backtrackWindowInput">BacktrackWindowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.backupRetentionPeriodInput">BackupRetentionPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.caCertificateIdentifierInput">CaCertificateIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterIdentifierInput">ClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterIdentifierPrefixInput">ClusterIdentifierPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterMembersInput">ClusterMembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterScalabilityTypeInput">ClusterScalabilityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.copyTagsToSnapshotInput">CopyTagsToSnapshotInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.databaseInsightsModeInput">DatabaseInsightsModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbClusterInstanceClassInput">DbClusterInstanceClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbClusterParameterGroupNameInput">DbClusterParameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbInstanceParameterGroupNameInput">DbInstanceParameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbSubnetGroupNameInput">DbSubnetGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbSystemIdInput">DbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.deleteAutomatedBackupsInput">DeleteAutomatedBackupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.domainIamRoleNameInput">DomainIamRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.enabledCloudwatchLogsExportsInput">EnabledCloudwatchLogsExportsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.enableGlobalWriteForwardingInput">EnableGlobalWriteForwardingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.enableHttpEndpointInput">EnableHttpEndpointInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.enableLocalWriteForwardingInput">EnableLocalWriteForwardingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineInput">EngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineLifecycleSupportInput">EngineLifecycleSupportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineModeInput">EngineModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineVersionInput">EngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.finalSnapshotIdentifierInput">FinalSnapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.globalClusterIdentifierInput">GlobalClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.iamDatabaseAuthenticationEnabledInput">IamDatabaseAuthenticationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.iamRolesInput">IamRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.iopsInput">IopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.manageMasterUserPasswordInput">ManageMasterUserPasswordInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterPasswordInput">MasterPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterPasswordWoInput">MasterPasswordWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterPasswordWoVersionInput">MasterPasswordWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterUsernameInput">MasterUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterUserSecretKmsKeyIdInput">MasterUserSecretKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.monitoringIntervalInput">MonitoringIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.monitoringRoleArnInput">MonitoringRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.networkTypeInput">NetworkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.performanceInsightsEnabledInput">PerformanceInsightsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.performanceInsightsKmsKeyIdInput">PerformanceInsightsKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.performanceInsightsRetentionPeriodInput">PerformanceInsightsRetentionPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.preferredBackupWindowInput">PreferredBackupWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.preferredMaintenanceWindowInput">PreferredMaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.replicationSourceIdentifierInput">ReplicationSourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.restoreToPointInTimeInput">RestoreToPointInTimeInput</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime">RdsClusterRestoreToPointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.s3ImportInput">S3ImportInput</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import">RdsClusterS3Import</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.scalingConfigurationInput">ScalingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration">RdsClusterScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.serverlessv2ScalingConfigurationInput">Serverlessv2ScalingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration">RdsClusterServerlessv2ScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.skipFinalSnapshotInput">SkipFinalSnapshotInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.snapshotIdentifierInput">SnapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.sourceRegionInput">SourceRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.storageEncryptedInput">StorageEncryptedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.storageTypeInput">StorageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.allocatedStorage">AllocatedStorage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.allowMajorVersionUpgrade">AllowMajorVersionUpgrade</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.applyImmediately">ApplyImmediately</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.backtrackWindow">BacktrackWindow</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.backupRetentionPeriod">BackupRetentionPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.caCertificateIdentifier">CaCertificateIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterIdentifierPrefix">ClusterIdentifierPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterMembers">ClusterMembers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterScalabilityType">ClusterScalabilityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.copyTagsToSnapshot">CopyTagsToSnapshot</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.databaseInsightsMode">DatabaseInsightsMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbClusterInstanceClass">DbClusterInstanceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbClusterParameterGroupName">DbClusterParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbInstanceParameterGroupName">DbInstanceParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbSubnetGroupName">DbSubnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.deleteAutomatedBackups">DeleteAutomatedBackups</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.deletionProtection">DeletionProtection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.domainIamRoleName">DomainIamRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.enabledCloudwatchLogsExports">EnabledCloudwatchLogsExports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.enableGlobalWriteForwarding">EnableGlobalWriteForwarding</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.enableHttpEndpoint">EnableHttpEndpoint</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.enableLocalWriteForwarding">EnableLocalWriteForwarding</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineLifecycleSupport">EngineLifecycleSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineMode">EngineMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.finalSnapshotIdentifier">FinalSnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.globalClusterIdentifier">GlobalClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.iamDatabaseAuthenticationEnabled">IamDatabaseAuthenticationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.iamRoles">IamRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.manageMasterUserPassword">ManageMasterUserPassword</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterPassword">MasterPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterPasswordWo">MasterPasswordWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterPasswordWoVersion">MasterPasswordWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterUsername">MasterUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterUserSecretKmsKeyId">MasterUserSecretKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.monitoringInterval">MonitoringInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.monitoringRoleArn">MonitoringRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.networkType">NetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.performanceInsightsEnabled">PerformanceInsightsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.performanceInsightsKmsKeyId">PerformanceInsightsKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.performanceInsightsRetentionPeriod">PerformanceInsightsRetentionPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.preferredBackupWindow">PreferredBackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.replicationSourceIdentifier">ReplicationSourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.skipFinalSnapshot">SkipFinalSnapshot</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.snapshotIdentifier">SnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.sourceRegion">SourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.storageEncrypted">StorageEncrypted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CaCertificateValidTill`<sup>Required</sup> <a name="CaCertificateValidTill" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.caCertificateValidTill"></a>

```csharp
public string CaCertificateValidTill { get; }
```

- *Type:* string

---

##### `ClusterResourceId`<sup>Required</sup> <a name="ClusterResourceId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterResourceId"></a>

```csharp
public string ClusterResourceId { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `EngineVersionActual`<sup>Required</sup> <a name="EngineVersionActual" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineVersionActual"></a>

```csharp
public string EngineVersionActual { get; }
```

- *Type:* string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.hostedZoneId"></a>

```csharp
public string HostedZoneId { get; }
```

- *Type:* string

---

##### `MasterUserSecret`<sup>Required</sup> <a name="MasterUserSecret" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterUserSecret"></a>

```csharp
public RdsClusterMasterUserSecretList MasterUserSecret { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList">RdsClusterMasterUserSecretList</a>

---

##### `ReaderEndpoint`<sup>Required</sup> <a name="ReaderEndpoint" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.readerEndpoint"></a>

```csharp
public string ReaderEndpoint { get; }
```

- *Type:* string

---

##### `RestoreToPointInTime`<sup>Required</sup> <a name="RestoreToPointInTime" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.restoreToPointInTime"></a>

```csharp
public RdsClusterRestoreToPointInTimeOutputReference RestoreToPointInTime { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference">RdsClusterRestoreToPointInTimeOutputReference</a>

---

##### `S3Import`<sup>Required</sup> <a name="S3Import" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.s3Import"></a>

```csharp
public RdsClusterS3ImportOutputReference S3Import { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference">RdsClusterS3ImportOutputReference</a>

---

##### `ScalingConfiguration`<sup>Required</sup> <a name="ScalingConfiguration" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.scalingConfiguration"></a>

```csharp
public RdsClusterScalingConfigurationOutputReference ScalingConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference">RdsClusterScalingConfigurationOutputReference</a>

---

##### `Serverlessv2ScalingConfiguration`<sup>Required</sup> <a name="Serverlessv2ScalingConfiguration" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.serverlessv2ScalingConfiguration"></a>

```csharp
public RdsClusterServerlessv2ScalingConfigurationOutputReference Serverlessv2ScalingConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference">RdsClusterServerlessv2ScalingConfigurationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.timeouts"></a>

```csharp
public RdsClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference">RdsClusterTimeoutsOutputReference</a>

---

##### `AllocatedStorageInput`<sup>Optional</sup> <a name="AllocatedStorageInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.allocatedStorageInput"></a>

```csharp
public double AllocatedStorageInput { get; }
```

- *Type:* double

---

##### `AllowMajorVersionUpgradeInput`<sup>Optional</sup> <a name="AllowMajorVersionUpgradeInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.allowMajorVersionUpgradeInput"></a>

```csharp
public object AllowMajorVersionUpgradeInput { get; }
```

- *Type:* object

---

##### `ApplyImmediatelyInput`<sup>Optional</sup> <a name="ApplyImmediatelyInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.applyImmediatelyInput"></a>

```csharp
public object ApplyImmediatelyInput { get; }
```

- *Type:* object

---

##### `AvailabilityZonesInput`<sup>Optional</sup> <a name="AvailabilityZonesInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.availabilityZonesInput"></a>

```csharp
public string[] AvailabilityZonesInput { get; }
```

- *Type:* string[]

---

##### `BacktrackWindowInput`<sup>Optional</sup> <a name="BacktrackWindowInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.backtrackWindowInput"></a>

```csharp
public double BacktrackWindowInput { get; }
```

- *Type:* double

---

##### `BackupRetentionPeriodInput`<sup>Optional</sup> <a name="BackupRetentionPeriodInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.backupRetentionPeriodInput"></a>

```csharp
public double BackupRetentionPeriodInput { get; }
```

- *Type:* double

---

##### `CaCertificateIdentifierInput`<sup>Optional</sup> <a name="CaCertificateIdentifierInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.caCertificateIdentifierInput"></a>

```csharp
public string CaCertificateIdentifierInput { get; }
```

- *Type:* string

---

##### `ClusterIdentifierInput`<sup>Optional</sup> <a name="ClusterIdentifierInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterIdentifierInput"></a>

```csharp
public string ClusterIdentifierInput { get; }
```

- *Type:* string

---

##### `ClusterIdentifierPrefixInput`<sup>Optional</sup> <a name="ClusterIdentifierPrefixInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterIdentifierPrefixInput"></a>

```csharp
public string ClusterIdentifierPrefixInput { get; }
```

- *Type:* string

---

##### `ClusterMembersInput`<sup>Optional</sup> <a name="ClusterMembersInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterMembersInput"></a>

```csharp
public string[] ClusterMembersInput { get; }
```

- *Type:* string[]

---

##### `ClusterScalabilityTypeInput`<sup>Optional</sup> <a name="ClusterScalabilityTypeInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterScalabilityTypeInput"></a>

```csharp
public string ClusterScalabilityTypeInput { get; }
```

- *Type:* string

---

##### `CopyTagsToSnapshotInput`<sup>Optional</sup> <a name="CopyTagsToSnapshotInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.copyTagsToSnapshotInput"></a>

```csharp
public object CopyTagsToSnapshotInput { get; }
```

- *Type:* object

---

##### `DatabaseInsightsModeInput`<sup>Optional</sup> <a name="DatabaseInsightsModeInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.databaseInsightsModeInput"></a>

```csharp
public string DatabaseInsightsModeInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `DbClusterInstanceClassInput`<sup>Optional</sup> <a name="DbClusterInstanceClassInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbClusterInstanceClassInput"></a>

```csharp
public string DbClusterInstanceClassInput { get; }
```

- *Type:* string

---

##### `DbClusterParameterGroupNameInput`<sup>Optional</sup> <a name="DbClusterParameterGroupNameInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbClusterParameterGroupNameInput"></a>

```csharp
public string DbClusterParameterGroupNameInput { get; }
```

- *Type:* string

---

##### `DbInstanceParameterGroupNameInput`<sup>Optional</sup> <a name="DbInstanceParameterGroupNameInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbInstanceParameterGroupNameInput"></a>

```csharp
public string DbInstanceParameterGroupNameInput { get; }
```

- *Type:* string

---

##### `DbSubnetGroupNameInput`<sup>Optional</sup> <a name="DbSubnetGroupNameInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbSubnetGroupNameInput"></a>

```csharp
public string DbSubnetGroupNameInput { get; }
```

- *Type:* string

---

##### `DbSystemIdInput`<sup>Optional</sup> <a name="DbSystemIdInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbSystemIdInput"></a>

```csharp
public string DbSystemIdInput { get; }
```

- *Type:* string

---

##### `DeleteAutomatedBackupsInput`<sup>Optional</sup> <a name="DeleteAutomatedBackupsInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.deleteAutomatedBackupsInput"></a>

```csharp
public object DeleteAutomatedBackupsInput { get; }
```

- *Type:* object

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.deletionProtectionInput"></a>

```csharp
public object DeletionProtectionInput { get; }
```

- *Type:* object

---

##### `DomainIamRoleNameInput`<sup>Optional</sup> <a name="DomainIamRoleNameInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.domainIamRoleNameInput"></a>

```csharp
public string DomainIamRoleNameInput { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `EnabledCloudwatchLogsExportsInput`<sup>Optional</sup> <a name="EnabledCloudwatchLogsExportsInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.enabledCloudwatchLogsExportsInput"></a>

```csharp
public string[] EnabledCloudwatchLogsExportsInput { get; }
```

- *Type:* string[]

---

##### `EnableGlobalWriteForwardingInput`<sup>Optional</sup> <a name="EnableGlobalWriteForwardingInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.enableGlobalWriteForwardingInput"></a>

```csharp
public object EnableGlobalWriteForwardingInput { get; }
```

- *Type:* object

---

##### `EnableHttpEndpointInput`<sup>Optional</sup> <a name="EnableHttpEndpointInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.enableHttpEndpointInput"></a>

```csharp
public object EnableHttpEndpointInput { get; }
```

- *Type:* object

---

##### `EnableLocalWriteForwardingInput`<sup>Optional</sup> <a name="EnableLocalWriteForwardingInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.enableLocalWriteForwardingInput"></a>

```csharp
public object EnableLocalWriteForwardingInput { get; }
```

- *Type:* object

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineInput"></a>

```csharp
public string EngineInput { get; }
```

- *Type:* string

---

##### `EngineLifecycleSupportInput`<sup>Optional</sup> <a name="EngineLifecycleSupportInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineLifecycleSupportInput"></a>

```csharp
public string EngineLifecycleSupportInput { get; }
```

- *Type:* string

---

##### `EngineModeInput`<sup>Optional</sup> <a name="EngineModeInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineModeInput"></a>

```csharp
public string EngineModeInput { get; }
```

- *Type:* string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineVersionInput"></a>

```csharp
public string EngineVersionInput { get; }
```

- *Type:* string

---

##### `FinalSnapshotIdentifierInput`<sup>Optional</sup> <a name="FinalSnapshotIdentifierInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.finalSnapshotIdentifierInput"></a>

```csharp
public string FinalSnapshotIdentifierInput { get; }
```

- *Type:* string

---

##### `GlobalClusterIdentifierInput`<sup>Optional</sup> <a name="GlobalClusterIdentifierInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.globalClusterIdentifierInput"></a>

```csharp
public string GlobalClusterIdentifierInput { get; }
```

- *Type:* string

---

##### `IamDatabaseAuthenticationEnabledInput`<sup>Optional</sup> <a name="IamDatabaseAuthenticationEnabledInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.iamDatabaseAuthenticationEnabledInput"></a>

```csharp
public object IamDatabaseAuthenticationEnabledInput { get; }
```

- *Type:* object

---

##### `IamRolesInput`<sup>Optional</sup> <a name="IamRolesInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.iamRolesInput"></a>

```csharp
public string[] IamRolesInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.iopsInput"></a>

```csharp
public double IopsInput { get; }
```

- *Type:* double

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `ManageMasterUserPasswordInput`<sup>Optional</sup> <a name="ManageMasterUserPasswordInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.manageMasterUserPasswordInput"></a>

```csharp
public object ManageMasterUserPasswordInput { get; }
```

- *Type:* object

---

##### `MasterPasswordInput`<sup>Optional</sup> <a name="MasterPasswordInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterPasswordInput"></a>

```csharp
public string MasterPasswordInput { get; }
```

- *Type:* string

---

##### `MasterPasswordWoInput`<sup>Optional</sup> <a name="MasterPasswordWoInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterPasswordWoInput"></a>

```csharp
public string MasterPasswordWoInput { get; }
```

- *Type:* string

---

##### `MasterPasswordWoVersionInput`<sup>Optional</sup> <a name="MasterPasswordWoVersionInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterPasswordWoVersionInput"></a>

```csharp
public double MasterPasswordWoVersionInput { get; }
```

- *Type:* double

---

##### `MasterUsernameInput`<sup>Optional</sup> <a name="MasterUsernameInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterUsernameInput"></a>

```csharp
public string MasterUsernameInput { get; }
```

- *Type:* string

---

##### `MasterUserSecretKmsKeyIdInput`<sup>Optional</sup> <a name="MasterUserSecretKmsKeyIdInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterUserSecretKmsKeyIdInput"></a>

```csharp
public string MasterUserSecretKmsKeyIdInput { get; }
```

- *Type:* string

---

##### `MonitoringIntervalInput`<sup>Optional</sup> <a name="MonitoringIntervalInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.monitoringIntervalInput"></a>

```csharp
public double MonitoringIntervalInput { get; }
```

- *Type:* double

---

##### `MonitoringRoleArnInput`<sup>Optional</sup> <a name="MonitoringRoleArnInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.monitoringRoleArnInput"></a>

```csharp
public string MonitoringRoleArnInput { get; }
```

- *Type:* string

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.networkTypeInput"></a>

```csharp
public string NetworkTypeInput { get; }
```

- *Type:* string

---

##### `PerformanceInsightsEnabledInput`<sup>Optional</sup> <a name="PerformanceInsightsEnabledInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.performanceInsightsEnabledInput"></a>

```csharp
public object PerformanceInsightsEnabledInput { get; }
```

- *Type:* object

---

##### `PerformanceInsightsKmsKeyIdInput`<sup>Optional</sup> <a name="PerformanceInsightsKmsKeyIdInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.performanceInsightsKmsKeyIdInput"></a>

```csharp
public string PerformanceInsightsKmsKeyIdInput { get; }
```

- *Type:* string

---

##### `PerformanceInsightsRetentionPeriodInput`<sup>Optional</sup> <a name="PerformanceInsightsRetentionPeriodInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.performanceInsightsRetentionPeriodInput"></a>

```csharp
public double PerformanceInsightsRetentionPeriodInput { get; }
```

- *Type:* double

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PreferredBackupWindowInput`<sup>Optional</sup> <a name="PreferredBackupWindowInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.preferredBackupWindowInput"></a>

```csharp
public string PreferredBackupWindowInput { get; }
```

- *Type:* string

---

##### `PreferredMaintenanceWindowInput`<sup>Optional</sup> <a name="PreferredMaintenanceWindowInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.preferredMaintenanceWindowInput"></a>

```csharp
public string PreferredMaintenanceWindowInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ReplicationSourceIdentifierInput`<sup>Optional</sup> <a name="ReplicationSourceIdentifierInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.replicationSourceIdentifierInput"></a>

```csharp
public string ReplicationSourceIdentifierInput { get; }
```

- *Type:* string

---

##### `RestoreToPointInTimeInput`<sup>Optional</sup> <a name="RestoreToPointInTimeInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.restoreToPointInTimeInput"></a>

```csharp
public RdsClusterRestoreToPointInTime RestoreToPointInTimeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime">RdsClusterRestoreToPointInTime</a>

---

##### `S3ImportInput`<sup>Optional</sup> <a name="S3ImportInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.s3ImportInput"></a>

```csharp
public RdsClusterS3Import S3ImportInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import">RdsClusterS3Import</a>

---

##### `ScalingConfigurationInput`<sup>Optional</sup> <a name="ScalingConfigurationInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.scalingConfigurationInput"></a>

```csharp
public RdsClusterScalingConfiguration ScalingConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration">RdsClusterScalingConfiguration</a>

---

##### `Serverlessv2ScalingConfigurationInput`<sup>Optional</sup> <a name="Serverlessv2ScalingConfigurationInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.serverlessv2ScalingConfigurationInput"></a>

```csharp
public RdsClusterServerlessv2ScalingConfiguration Serverlessv2ScalingConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration">RdsClusterServerlessv2ScalingConfiguration</a>

---

##### `SkipFinalSnapshotInput`<sup>Optional</sup> <a name="SkipFinalSnapshotInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.skipFinalSnapshotInput"></a>

```csharp
public object SkipFinalSnapshotInput { get; }
```

- *Type:* object

---

##### `SnapshotIdentifierInput`<sup>Optional</sup> <a name="SnapshotIdentifierInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.snapshotIdentifierInput"></a>

```csharp
public string SnapshotIdentifierInput { get; }
```

- *Type:* string

---

##### `SourceRegionInput`<sup>Optional</sup> <a name="SourceRegionInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.sourceRegionInput"></a>

```csharp
public string SourceRegionInput { get; }
```

- *Type:* string

---

##### `StorageEncryptedInput`<sup>Optional</sup> <a name="StorageEncryptedInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.storageEncryptedInput"></a>

```csharp
public object StorageEncryptedInput { get; }
```

- *Type:* object

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.storageTypeInput"></a>

```csharp
public string StorageTypeInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.vpcSecurityGroupIdsInput"></a>

```csharp
public string[] VpcSecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `AllocatedStorage`<sup>Required</sup> <a name="AllocatedStorage" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.allocatedStorage"></a>

```csharp
public double AllocatedStorage { get; }
```

- *Type:* double

---

##### `AllowMajorVersionUpgrade`<sup>Required</sup> <a name="AllowMajorVersionUpgrade" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.allowMajorVersionUpgrade"></a>

```csharp
public object AllowMajorVersionUpgrade { get; }
```

- *Type:* object

---

##### `ApplyImmediately`<sup>Required</sup> <a name="ApplyImmediately" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.applyImmediately"></a>

```csharp
public object ApplyImmediately { get; }
```

- *Type:* object

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; }
```

- *Type:* string[]

---

##### `BacktrackWindow`<sup>Required</sup> <a name="BacktrackWindow" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.backtrackWindow"></a>

```csharp
public double BacktrackWindow { get; }
```

- *Type:* double

---

##### `BackupRetentionPeriod`<sup>Required</sup> <a name="BackupRetentionPeriod" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.backupRetentionPeriod"></a>

```csharp
public double BackupRetentionPeriod { get; }
```

- *Type:* double

---

##### `CaCertificateIdentifier`<sup>Required</sup> <a name="CaCertificateIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.caCertificateIdentifier"></a>

```csharp
public string CaCertificateIdentifier { get; }
```

- *Type:* string

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; }
```

- *Type:* string

---

##### `ClusterIdentifierPrefix`<sup>Required</sup> <a name="ClusterIdentifierPrefix" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterIdentifierPrefix"></a>

```csharp
public string ClusterIdentifierPrefix { get; }
```

- *Type:* string

---

##### `ClusterMembers`<sup>Required</sup> <a name="ClusterMembers" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterMembers"></a>

```csharp
public string[] ClusterMembers { get; }
```

- *Type:* string[]

---

##### `ClusterScalabilityType`<sup>Required</sup> <a name="ClusterScalabilityType" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterScalabilityType"></a>

```csharp
public string ClusterScalabilityType { get; }
```

- *Type:* string

---

##### `CopyTagsToSnapshot`<sup>Required</sup> <a name="CopyTagsToSnapshot" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.copyTagsToSnapshot"></a>

```csharp
public object CopyTagsToSnapshot { get; }
```

- *Type:* object

---

##### `DatabaseInsightsMode`<sup>Required</sup> <a name="DatabaseInsightsMode" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.databaseInsightsMode"></a>

```csharp
public string DatabaseInsightsMode { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `DbClusterInstanceClass`<sup>Required</sup> <a name="DbClusterInstanceClass" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbClusterInstanceClass"></a>

```csharp
public string DbClusterInstanceClass { get; }
```

- *Type:* string

---

##### `DbClusterParameterGroupName`<sup>Required</sup> <a name="DbClusterParameterGroupName" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbClusterParameterGroupName"></a>

```csharp
public string DbClusterParameterGroupName { get; }
```

- *Type:* string

---

##### `DbInstanceParameterGroupName`<sup>Required</sup> <a name="DbInstanceParameterGroupName" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbInstanceParameterGroupName"></a>

```csharp
public string DbInstanceParameterGroupName { get; }
```

- *Type:* string

---

##### `DbSubnetGroupName`<sup>Required</sup> <a name="DbSubnetGroupName" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbSubnetGroupName"></a>

```csharp
public string DbSubnetGroupName { get; }
```

- *Type:* string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; }
```

- *Type:* string

---

##### `DeleteAutomatedBackups`<sup>Required</sup> <a name="DeleteAutomatedBackups" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.deleteAutomatedBackups"></a>

```csharp
public object DeleteAutomatedBackups { get; }
```

- *Type:* object

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.deletionProtection"></a>

```csharp
public object DeletionProtection { get; }
```

- *Type:* object

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `DomainIamRoleName`<sup>Required</sup> <a name="DomainIamRoleName" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.domainIamRoleName"></a>

```csharp
public string DomainIamRoleName { get; }
```

- *Type:* string

---

##### `EnabledCloudwatchLogsExports`<sup>Required</sup> <a name="EnabledCloudwatchLogsExports" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.enabledCloudwatchLogsExports"></a>

```csharp
public string[] EnabledCloudwatchLogsExports { get; }
```

- *Type:* string[]

---

##### `EnableGlobalWriteForwarding`<sup>Required</sup> <a name="EnableGlobalWriteForwarding" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.enableGlobalWriteForwarding"></a>

```csharp
public object EnableGlobalWriteForwarding { get; }
```

- *Type:* object

---

##### `EnableHttpEndpoint`<sup>Required</sup> <a name="EnableHttpEndpoint" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.enableHttpEndpoint"></a>

```csharp
public object EnableHttpEndpoint { get; }
```

- *Type:* object

---

##### `EnableLocalWriteForwarding`<sup>Required</sup> <a name="EnableLocalWriteForwarding" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.enableLocalWriteForwarding"></a>

```csharp
public object EnableLocalWriteForwarding { get; }
```

- *Type:* object

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `EngineLifecycleSupport`<sup>Required</sup> <a name="EngineLifecycleSupport" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineLifecycleSupport"></a>

```csharp
public string EngineLifecycleSupport { get; }
```

- *Type:* string

---

##### `EngineMode`<sup>Required</sup> <a name="EngineMode" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineMode"></a>

```csharp
public string EngineMode { get; }
```

- *Type:* string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `FinalSnapshotIdentifier`<sup>Required</sup> <a name="FinalSnapshotIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.finalSnapshotIdentifier"></a>

```csharp
public string FinalSnapshotIdentifier { get; }
```

- *Type:* string

---

##### `GlobalClusterIdentifier`<sup>Required</sup> <a name="GlobalClusterIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.globalClusterIdentifier"></a>

```csharp
public string GlobalClusterIdentifier { get; }
```

- *Type:* string

---

##### `IamDatabaseAuthenticationEnabled`<sup>Required</sup> <a name="IamDatabaseAuthenticationEnabled" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.iamDatabaseAuthenticationEnabled"></a>

```csharp
public object IamDatabaseAuthenticationEnabled { get; }
```

- *Type:* object

---

##### `IamRoles`<sup>Required</sup> <a name="IamRoles" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.iamRoles"></a>

```csharp
public string[] IamRoles { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `ManageMasterUserPassword`<sup>Required</sup> <a name="ManageMasterUserPassword" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.manageMasterUserPassword"></a>

```csharp
public object ManageMasterUserPassword { get; }
```

- *Type:* object

---

##### `MasterPassword`<sup>Required</sup> <a name="MasterPassword" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterPassword"></a>

```csharp
public string MasterPassword { get; }
```

- *Type:* string

---

##### `MasterPasswordWo`<sup>Required</sup> <a name="MasterPasswordWo" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterPasswordWo"></a>

```csharp
public string MasterPasswordWo { get; }
```

- *Type:* string

---

##### `MasterPasswordWoVersion`<sup>Required</sup> <a name="MasterPasswordWoVersion" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterPasswordWoVersion"></a>

```csharp
public double MasterPasswordWoVersion { get; }
```

- *Type:* double

---

##### `MasterUsername`<sup>Required</sup> <a name="MasterUsername" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterUsername"></a>

```csharp
public string MasterUsername { get; }
```

- *Type:* string

---

##### `MasterUserSecretKmsKeyId`<sup>Required</sup> <a name="MasterUserSecretKmsKeyId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterUserSecretKmsKeyId"></a>

```csharp
public string MasterUserSecretKmsKeyId { get; }
```

- *Type:* string

---

##### `MonitoringInterval`<sup>Required</sup> <a name="MonitoringInterval" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.monitoringInterval"></a>

```csharp
public double MonitoringInterval { get; }
```

- *Type:* double

---

##### `MonitoringRoleArn`<sup>Required</sup> <a name="MonitoringRoleArn" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.monitoringRoleArn"></a>

```csharp
public string MonitoringRoleArn { get; }
```

- *Type:* string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.networkType"></a>

```csharp
public string NetworkType { get; }
```

- *Type:* string

---

##### `PerformanceInsightsEnabled`<sup>Required</sup> <a name="PerformanceInsightsEnabled" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.performanceInsightsEnabled"></a>

```csharp
public object PerformanceInsightsEnabled { get; }
```

- *Type:* object

---

##### `PerformanceInsightsKmsKeyId`<sup>Required</sup> <a name="PerformanceInsightsKmsKeyId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.performanceInsightsKmsKeyId"></a>

```csharp
public string PerformanceInsightsKmsKeyId { get; }
```

- *Type:* string

---

##### `PerformanceInsightsRetentionPeriod`<sup>Required</sup> <a name="PerformanceInsightsRetentionPeriod" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.performanceInsightsRetentionPeriod"></a>

```csharp
public double PerformanceInsightsRetentionPeriod { get; }
```

- *Type:* double

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PreferredBackupWindow`<sup>Required</sup> <a name="PreferredBackupWindow" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.preferredBackupWindow"></a>

```csharp
public string PreferredBackupWindow { get; }
```

- *Type:* string

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ReplicationSourceIdentifier`<sup>Required</sup> <a name="ReplicationSourceIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.replicationSourceIdentifier"></a>

```csharp
public string ReplicationSourceIdentifier { get; }
```

- *Type:* string

---

##### `SkipFinalSnapshot`<sup>Required</sup> <a name="SkipFinalSnapshot" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.skipFinalSnapshot"></a>

```csharp
public object SkipFinalSnapshot { get; }
```

- *Type:* object

---

##### `SnapshotIdentifier`<sup>Required</sup> <a name="SnapshotIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.snapshotIdentifier"></a>

```csharp
public string SnapshotIdentifier { get; }
```

- *Type:* string

---

##### `SourceRegion`<sup>Required</sup> <a name="SourceRegion" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.sourceRegion"></a>

```csharp
public string SourceRegion { get; }
```

- *Type:* string

---

##### `StorageEncrypted`<sup>Required</sup> <a name="StorageEncrypted" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.storageEncrypted"></a>

```csharp
public object StorageEncrypted { get; }
```

- *Type:* object

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsClusterConfig <a name="RdsClusterConfig" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RdsClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Engine,
    double AllocatedStorage = null,
    object AllowMajorVersionUpgrade = null,
    object ApplyImmediately = null,
    string[] AvailabilityZones = null,
    double BacktrackWindow = null,
    double BackupRetentionPeriod = null,
    string CaCertificateIdentifier = null,
    string ClusterIdentifier = null,
    string ClusterIdentifierPrefix = null,
    string[] ClusterMembers = null,
    string ClusterScalabilityType = null,
    object CopyTagsToSnapshot = null,
    string DatabaseInsightsMode = null,
    string DatabaseName = null,
    string DbClusterInstanceClass = null,
    string DbClusterParameterGroupName = null,
    string DbInstanceParameterGroupName = null,
    string DbSubnetGroupName = null,
    string DbSystemId = null,
    object DeleteAutomatedBackups = null,
    object DeletionProtection = null,
    string Domain = null,
    string DomainIamRoleName = null,
    string[] EnabledCloudwatchLogsExports = null,
    object EnableGlobalWriteForwarding = null,
    object EnableHttpEndpoint = null,
    object EnableLocalWriteForwarding = null,
    string EngineLifecycleSupport = null,
    string EngineMode = null,
    string EngineVersion = null,
    string FinalSnapshotIdentifier = null,
    string GlobalClusterIdentifier = null,
    object IamDatabaseAuthenticationEnabled = null,
    string[] IamRoles = null,
    string Id = null,
    double Iops = null,
    string KmsKeyId = null,
    object ManageMasterUserPassword = null,
    string MasterPassword = null,
    string MasterPasswordWo = null,
    double MasterPasswordWoVersion = null,
    string MasterUsername = null,
    string MasterUserSecretKmsKeyId = null,
    double MonitoringInterval = null,
    string MonitoringRoleArn = null,
    string NetworkType = null,
    object PerformanceInsightsEnabled = null,
    string PerformanceInsightsKmsKeyId = null,
    double PerformanceInsightsRetentionPeriod = null,
    double Port = null,
    string PreferredBackupWindow = null,
    string PreferredMaintenanceWindow = null,
    string Region = null,
    string ReplicationSourceIdentifier = null,
    RdsClusterRestoreToPointInTime RestoreToPointInTime = null,
    RdsClusterS3Import S3Import = null,
    RdsClusterScalingConfiguration ScalingConfiguration = null,
    RdsClusterServerlessv2ScalingConfiguration Serverlessv2ScalingConfiguration = null,
    object SkipFinalSnapshot = null,
    string SnapshotIdentifier = null,
    string SourceRegion = null,
    object StorageEncrypted = null,
    string StorageType = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    RdsClusterTimeouts Timeouts = null,
    string[] VpcSecurityGroupIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.engine">Engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#engine RdsCluster#engine}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.allocatedStorage">AllocatedStorage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#allocated_storage RdsCluster#allocated_storage}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.allowMajorVersionUpgrade">AllowMajorVersionUpgrade</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#allow_major_version_upgrade RdsCluster#allow_major_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.applyImmediately">ApplyImmediately</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#apply_immediately RdsCluster#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#availability_zones RdsCluster#availability_zones}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.backtrackWindow">BacktrackWindow</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#backtrack_window RdsCluster#backtrack_window}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.backupRetentionPeriod">BackupRetentionPeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#backup_retention_period RdsCluster#backup_retention_period}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.caCertificateIdentifier">CaCertificateIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#ca_certificate_identifier RdsCluster#ca_certificate_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#cluster_identifier RdsCluster#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.clusterIdentifierPrefix">ClusterIdentifierPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#cluster_identifier_prefix RdsCluster#cluster_identifier_prefix}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.clusterMembers">ClusterMembers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#cluster_members RdsCluster#cluster_members}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.clusterScalabilityType">ClusterScalabilityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#cluster_scalability_type RdsCluster#cluster_scalability_type}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.copyTagsToSnapshot">CopyTagsToSnapshot</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#copy_tags_to_snapshot RdsCluster#copy_tags_to_snapshot}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.databaseInsightsMode">DatabaseInsightsMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#database_insights_mode RdsCluster#database_insights_mode}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#database_name RdsCluster#database_name}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.dbClusterInstanceClass">DbClusterInstanceClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#db_cluster_instance_class RdsCluster#db_cluster_instance_class}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.dbClusterParameterGroupName">DbClusterParameterGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#db_cluster_parameter_group_name RdsCluster#db_cluster_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.dbInstanceParameterGroupName">DbInstanceParameterGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#db_instance_parameter_group_name RdsCluster#db_instance_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.dbSubnetGroupName">DbSubnetGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#db_subnet_group_name RdsCluster#db_subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#db_system_id RdsCluster#db_system_id}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.deleteAutomatedBackups">DeleteAutomatedBackups</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#delete_automated_backups RdsCluster#delete_automated_backups}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.deletionProtection">DeletionProtection</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#deletion_protection RdsCluster#deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.domain">Domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#domain RdsCluster#domain}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.domainIamRoleName">DomainIamRoleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#domain_iam_role_name RdsCluster#domain_iam_role_name}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.enabledCloudwatchLogsExports">EnabledCloudwatchLogsExports</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#enabled_cloudwatch_logs_exports RdsCluster#enabled_cloudwatch_logs_exports}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.enableGlobalWriteForwarding">EnableGlobalWriteForwarding</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#enable_global_write_forwarding RdsCluster#enable_global_write_forwarding}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.enableHttpEndpoint">EnableHttpEndpoint</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#enable_http_endpoint RdsCluster#enable_http_endpoint}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.enableLocalWriteForwarding">EnableLocalWriteForwarding</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#enable_local_write_forwarding RdsCluster#enable_local_write_forwarding}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.engineLifecycleSupport">EngineLifecycleSupport</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#engine_lifecycle_support RdsCluster#engine_lifecycle_support}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.engineMode">EngineMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#engine_mode RdsCluster#engine_mode}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.engineVersion">EngineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#engine_version RdsCluster#engine_version}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.finalSnapshotIdentifier">FinalSnapshotIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#final_snapshot_identifier RdsCluster#final_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.globalClusterIdentifier">GlobalClusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#global_cluster_identifier RdsCluster#global_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.iamDatabaseAuthenticationEnabled">IamDatabaseAuthenticationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#iam_database_authentication_enabled RdsCluster#iam_database_authentication_enabled}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.iamRoles">IamRoles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#iam_roles RdsCluster#iam_roles}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#id RdsCluster#id}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.iops">Iops</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#iops RdsCluster#iops}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#kms_key_id RdsCluster#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.manageMasterUserPassword">ManageMasterUserPassword</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#manage_master_user_password RdsCluster#manage_master_user_password}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.masterPassword">MasterPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#master_password RdsCluster#master_password}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.masterPasswordWo">MasterPasswordWo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#master_password_wo RdsCluster#master_password_wo}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.masterPasswordWoVersion">MasterPasswordWoVersion</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#master_password_wo_version RdsCluster#master_password_wo_version}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.masterUsername">MasterUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#master_username RdsCluster#master_username}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.masterUserSecretKmsKeyId">MasterUserSecretKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#master_user_secret_kms_key_id RdsCluster#master_user_secret_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.monitoringInterval">MonitoringInterval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#monitoring_interval RdsCluster#monitoring_interval}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.monitoringRoleArn">MonitoringRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#monitoring_role_arn RdsCluster#monitoring_role_arn}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.networkType">NetworkType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#network_type RdsCluster#network_type}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.performanceInsightsEnabled">PerformanceInsightsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#performance_insights_enabled RdsCluster#performance_insights_enabled}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.performanceInsightsKmsKeyId">PerformanceInsightsKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#performance_insights_kms_key_id RdsCluster#performance_insights_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.performanceInsightsRetentionPeriod">PerformanceInsightsRetentionPeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#performance_insights_retention_period RdsCluster#performance_insights_retention_period}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#port RdsCluster#port}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.preferredBackupWindow">PreferredBackupWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#preferred_backup_window RdsCluster#preferred_backup_window}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#preferred_maintenance_window RdsCluster#preferred_maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.replicationSourceIdentifier">ReplicationSourceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#replication_source_identifier RdsCluster#replication_source_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.restoreToPointInTime">RestoreToPointInTime</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime">RdsClusterRestoreToPointInTime</a></code> | restore_to_point_in_time block. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.s3Import">S3Import</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import">RdsClusterS3Import</a></code> | s3_import block. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.scalingConfiguration">ScalingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration">RdsClusterScalingConfiguration</a></code> | scaling_configuration block. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.serverlessv2ScalingConfiguration">Serverlessv2ScalingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration">RdsClusterServerlessv2ScalingConfiguration</a></code> | serverlessv2_scaling_configuration block. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.skipFinalSnapshot">SkipFinalSnapshot</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#skip_final_snapshot RdsCluster#skip_final_snapshot}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.snapshotIdentifier">SnapshotIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#snapshot_identifier RdsCluster#snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.sourceRegion">SourceRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#source_region RdsCluster#source_region}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.storageEncrypted">StorageEncrypted</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#storage_encrypted RdsCluster#storage_encrypted}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.storageType">StorageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#storage_type RdsCluster#storage_type}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#tags RdsCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#tags_all RdsCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts">RdsClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#vpc_security_group_ids RdsCluster#vpc_security_group_ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.engine"></a>

```csharp
public string Engine { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#engine RdsCluster#engine}.

---

##### `AllocatedStorage`<sup>Optional</sup> <a name="AllocatedStorage" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.allocatedStorage"></a>

```csharp
public double AllocatedStorage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#allocated_storage RdsCluster#allocated_storage}.

---

##### `AllowMajorVersionUpgrade`<sup>Optional</sup> <a name="AllowMajorVersionUpgrade" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.allowMajorVersionUpgrade"></a>

```csharp
public object AllowMajorVersionUpgrade { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#allow_major_version_upgrade RdsCluster#allow_major_version_upgrade}.

---

##### `ApplyImmediately`<sup>Optional</sup> <a name="ApplyImmediately" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.applyImmediately"></a>

```csharp
public object ApplyImmediately { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#apply_immediately RdsCluster#apply_immediately}.

---

##### `AvailabilityZones`<sup>Optional</sup> <a name="AvailabilityZones" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#availability_zones RdsCluster#availability_zones}.

---

##### `BacktrackWindow`<sup>Optional</sup> <a name="BacktrackWindow" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.backtrackWindow"></a>

```csharp
public double BacktrackWindow { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#backtrack_window RdsCluster#backtrack_window}.

---

##### `BackupRetentionPeriod`<sup>Optional</sup> <a name="BackupRetentionPeriod" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.backupRetentionPeriod"></a>

```csharp
public double BackupRetentionPeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#backup_retention_period RdsCluster#backup_retention_period}.

---

##### `CaCertificateIdentifier`<sup>Optional</sup> <a name="CaCertificateIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.caCertificateIdentifier"></a>

```csharp
public string CaCertificateIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#ca_certificate_identifier RdsCluster#ca_certificate_identifier}.

---

##### `ClusterIdentifier`<sup>Optional</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#cluster_identifier RdsCluster#cluster_identifier}.

---

##### `ClusterIdentifierPrefix`<sup>Optional</sup> <a name="ClusterIdentifierPrefix" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.clusterIdentifierPrefix"></a>

```csharp
public string ClusterIdentifierPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#cluster_identifier_prefix RdsCluster#cluster_identifier_prefix}.

---

##### `ClusterMembers`<sup>Optional</sup> <a name="ClusterMembers" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.clusterMembers"></a>

```csharp
public string[] ClusterMembers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#cluster_members RdsCluster#cluster_members}.

---

##### `ClusterScalabilityType`<sup>Optional</sup> <a name="ClusterScalabilityType" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.clusterScalabilityType"></a>

```csharp
public string ClusterScalabilityType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#cluster_scalability_type RdsCluster#cluster_scalability_type}.

---

##### `CopyTagsToSnapshot`<sup>Optional</sup> <a name="CopyTagsToSnapshot" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.copyTagsToSnapshot"></a>

```csharp
public object CopyTagsToSnapshot { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#copy_tags_to_snapshot RdsCluster#copy_tags_to_snapshot}.

---

##### `DatabaseInsightsMode`<sup>Optional</sup> <a name="DatabaseInsightsMode" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.databaseInsightsMode"></a>

```csharp
public string DatabaseInsightsMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#database_insights_mode RdsCluster#database_insights_mode}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#database_name RdsCluster#database_name}.

---

##### `DbClusterInstanceClass`<sup>Optional</sup> <a name="DbClusterInstanceClass" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.dbClusterInstanceClass"></a>

```csharp
public string DbClusterInstanceClass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#db_cluster_instance_class RdsCluster#db_cluster_instance_class}.

---

##### `DbClusterParameterGroupName`<sup>Optional</sup> <a name="DbClusterParameterGroupName" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.dbClusterParameterGroupName"></a>

```csharp
public string DbClusterParameterGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#db_cluster_parameter_group_name RdsCluster#db_cluster_parameter_group_name}.

---

##### `DbInstanceParameterGroupName`<sup>Optional</sup> <a name="DbInstanceParameterGroupName" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.dbInstanceParameterGroupName"></a>

```csharp
public string DbInstanceParameterGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#db_instance_parameter_group_name RdsCluster#db_instance_parameter_group_name}.

---

##### `DbSubnetGroupName`<sup>Optional</sup> <a name="DbSubnetGroupName" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.dbSubnetGroupName"></a>

```csharp
public string DbSubnetGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#db_subnet_group_name RdsCluster#db_subnet_group_name}.

---

##### `DbSystemId`<sup>Optional</sup> <a name="DbSystemId" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#db_system_id RdsCluster#db_system_id}.

---

##### `DeleteAutomatedBackups`<sup>Optional</sup> <a name="DeleteAutomatedBackups" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.deleteAutomatedBackups"></a>

```csharp
public object DeleteAutomatedBackups { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#delete_automated_backups RdsCluster#delete_automated_backups}.

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.deletionProtection"></a>

```csharp
public object DeletionProtection { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#deletion_protection RdsCluster#deletion_protection}.

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#domain RdsCluster#domain}.

---

##### `DomainIamRoleName`<sup>Optional</sup> <a name="DomainIamRoleName" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.domainIamRoleName"></a>

```csharp
public string DomainIamRoleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#domain_iam_role_name RdsCluster#domain_iam_role_name}.

---

##### `EnabledCloudwatchLogsExports`<sup>Optional</sup> <a name="EnabledCloudwatchLogsExports" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.enabledCloudwatchLogsExports"></a>

```csharp
public string[] EnabledCloudwatchLogsExports { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#enabled_cloudwatch_logs_exports RdsCluster#enabled_cloudwatch_logs_exports}.

---

##### `EnableGlobalWriteForwarding`<sup>Optional</sup> <a name="EnableGlobalWriteForwarding" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.enableGlobalWriteForwarding"></a>

```csharp
public object EnableGlobalWriteForwarding { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#enable_global_write_forwarding RdsCluster#enable_global_write_forwarding}.

---

##### `EnableHttpEndpoint`<sup>Optional</sup> <a name="EnableHttpEndpoint" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.enableHttpEndpoint"></a>

```csharp
public object EnableHttpEndpoint { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#enable_http_endpoint RdsCluster#enable_http_endpoint}.

---

##### `EnableLocalWriteForwarding`<sup>Optional</sup> <a name="EnableLocalWriteForwarding" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.enableLocalWriteForwarding"></a>

```csharp
public object EnableLocalWriteForwarding { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#enable_local_write_forwarding RdsCluster#enable_local_write_forwarding}.

---

##### `EngineLifecycleSupport`<sup>Optional</sup> <a name="EngineLifecycleSupport" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.engineLifecycleSupport"></a>

```csharp
public string EngineLifecycleSupport { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#engine_lifecycle_support RdsCluster#engine_lifecycle_support}.

---

##### `EngineMode`<sup>Optional</sup> <a name="EngineMode" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.engineMode"></a>

```csharp
public string EngineMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#engine_mode RdsCluster#engine_mode}.

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.engineVersion"></a>

```csharp
public string EngineVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#engine_version RdsCluster#engine_version}.

---

##### `FinalSnapshotIdentifier`<sup>Optional</sup> <a name="FinalSnapshotIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.finalSnapshotIdentifier"></a>

```csharp
public string FinalSnapshotIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#final_snapshot_identifier RdsCluster#final_snapshot_identifier}.

---

##### `GlobalClusterIdentifier`<sup>Optional</sup> <a name="GlobalClusterIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.globalClusterIdentifier"></a>

```csharp
public string GlobalClusterIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#global_cluster_identifier RdsCluster#global_cluster_identifier}.

---

##### `IamDatabaseAuthenticationEnabled`<sup>Optional</sup> <a name="IamDatabaseAuthenticationEnabled" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.iamDatabaseAuthenticationEnabled"></a>

```csharp
public object IamDatabaseAuthenticationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#iam_database_authentication_enabled RdsCluster#iam_database_authentication_enabled}.

---

##### `IamRoles`<sup>Optional</sup> <a name="IamRoles" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.iamRoles"></a>

```csharp
public string[] IamRoles { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#iam_roles RdsCluster#iam_roles}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#id RdsCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.iops"></a>

```csharp
public double Iops { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#iops RdsCluster#iops}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#kms_key_id RdsCluster#kms_key_id}.

---

##### `ManageMasterUserPassword`<sup>Optional</sup> <a name="ManageMasterUserPassword" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.manageMasterUserPassword"></a>

```csharp
public object ManageMasterUserPassword { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#manage_master_user_password RdsCluster#manage_master_user_password}.

---

##### `MasterPassword`<sup>Optional</sup> <a name="MasterPassword" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.masterPassword"></a>

```csharp
public string MasterPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#master_password RdsCluster#master_password}.

---

##### `MasterPasswordWo`<sup>Optional</sup> <a name="MasterPasswordWo" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.masterPasswordWo"></a>

```csharp
public string MasterPasswordWo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#master_password_wo RdsCluster#master_password_wo}.

---

##### `MasterPasswordWoVersion`<sup>Optional</sup> <a name="MasterPasswordWoVersion" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.masterPasswordWoVersion"></a>

```csharp
public double MasterPasswordWoVersion { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#master_password_wo_version RdsCluster#master_password_wo_version}.

---

##### `MasterUsername`<sup>Optional</sup> <a name="MasterUsername" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.masterUsername"></a>

```csharp
public string MasterUsername { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#master_username RdsCluster#master_username}.

---

##### `MasterUserSecretKmsKeyId`<sup>Optional</sup> <a name="MasterUserSecretKmsKeyId" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.masterUserSecretKmsKeyId"></a>

```csharp
public string MasterUserSecretKmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#master_user_secret_kms_key_id RdsCluster#master_user_secret_kms_key_id}.

---

##### `MonitoringInterval`<sup>Optional</sup> <a name="MonitoringInterval" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.monitoringInterval"></a>

```csharp
public double MonitoringInterval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#monitoring_interval RdsCluster#monitoring_interval}.

---

##### `MonitoringRoleArn`<sup>Optional</sup> <a name="MonitoringRoleArn" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.monitoringRoleArn"></a>

```csharp
public string MonitoringRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#monitoring_role_arn RdsCluster#monitoring_role_arn}.

---

##### `NetworkType`<sup>Optional</sup> <a name="NetworkType" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.networkType"></a>

```csharp
public string NetworkType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#network_type RdsCluster#network_type}.

---

##### `PerformanceInsightsEnabled`<sup>Optional</sup> <a name="PerformanceInsightsEnabled" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.performanceInsightsEnabled"></a>

```csharp
public object PerformanceInsightsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#performance_insights_enabled RdsCluster#performance_insights_enabled}.

---

##### `PerformanceInsightsKmsKeyId`<sup>Optional</sup> <a name="PerformanceInsightsKmsKeyId" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.performanceInsightsKmsKeyId"></a>

```csharp
public string PerformanceInsightsKmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#performance_insights_kms_key_id RdsCluster#performance_insights_kms_key_id}.

---

##### `PerformanceInsightsRetentionPeriod`<sup>Optional</sup> <a name="PerformanceInsightsRetentionPeriod" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.performanceInsightsRetentionPeriod"></a>

```csharp
public double PerformanceInsightsRetentionPeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#performance_insights_retention_period RdsCluster#performance_insights_retention_period}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#port RdsCluster#port}.

---

##### `PreferredBackupWindow`<sup>Optional</sup> <a name="PreferredBackupWindow" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.preferredBackupWindow"></a>

```csharp
public string PreferredBackupWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#preferred_backup_window RdsCluster#preferred_backup_window}.

---

##### `PreferredMaintenanceWindow`<sup>Optional</sup> <a name="PreferredMaintenanceWindow" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#preferred_maintenance_window RdsCluster#preferred_maintenance_window}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#region RdsCluster#region}

---

##### `ReplicationSourceIdentifier`<sup>Optional</sup> <a name="ReplicationSourceIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.replicationSourceIdentifier"></a>

```csharp
public string ReplicationSourceIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#replication_source_identifier RdsCluster#replication_source_identifier}.

---

##### `RestoreToPointInTime`<sup>Optional</sup> <a name="RestoreToPointInTime" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.restoreToPointInTime"></a>

```csharp
public RdsClusterRestoreToPointInTime RestoreToPointInTime { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime">RdsClusterRestoreToPointInTime</a>

restore_to_point_in_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#restore_to_point_in_time RdsCluster#restore_to_point_in_time}

---

##### `S3Import`<sup>Optional</sup> <a name="S3Import" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.s3Import"></a>

```csharp
public RdsClusterS3Import S3Import { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import">RdsClusterS3Import</a>

s3_import block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#s3_import RdsCluster#s3_import}

---

##### `ScalingConfiguration`<sup>Optional</sup> <a name="ScalingConfiguration" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.scalingConfiguration"></a>

```csharp
public RdsClusterScalingConfiguration ScalingConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration">RdsClusterScalingConfiguration</a>

scaling_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#scaling_configuration RdsCluster#scaling_configuration}

---

##### `Serverlessv2ScalingConfiguration`<sup>Optional</sup> <a name="Serverlessv2ScalingConfiguration" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.serverlessv2ScalingConfiguration"></a>

```csharp
public RdsClusterServerlessv2ScalingConfiguration Serverlessv2ScalingConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration">RdsClusterServerlessv2ScalingConfiguration</a>

serverlessv2_scaling_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#serverlessv2_scaling_configuration RdsCluster#serverlessv2_scaling_configuration}

---

##### `SkipFinalSnapshot`<sup>Optional</sup> <a name="SkipFinalSnapshot" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.skipFinalSnapshot"></a>

```csharp
public object SkipFinalSnapshot { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#skip_final_snapshot RdsCluster#skip_final_snapshot}.

---

##### `SnapshotIdentifier`<sup>Optional</sup> <a name="SnapshotIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.snapshotIdentifier"></a>

```csharp
public string SnapshotIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#snapshot_identifier RdsCluster#snapshot_identifier}.

---

##### `SourceRegion`<sup>Optional</sup> <a name="SourceRegion" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.sourceRegion"></a>

```csharp
public string SourceRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#source_region RdsCluster#source_region}.

---

##### `StorageEncrypted`<sup>Optional</sup> <a name="StorageEncrypted" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.storageEncrypted"></a>

```csharp
public object StorageEncrypted { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#storage_encrypted RdsCluster#storage_encrypted}.

---

##### `StorageType`<sup>Optional</sup> <a name="StorageType" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.storageType"></a>

```csharp
public string StorageType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#storage_type RdsCluster#storage_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#tags RdsCluster#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#tags_all RdsCluster#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.timeouts"></a>

```csharp
public RdsClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts">RdsClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#timeouts RdsCluster#timeouts}

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#vpc_security_group_ids RdsCluster#vpc_security_group_ids}.

---

### RdsClusterMasterUserSecret <a name="RdsClusterMasterUserSecret" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RdsClusterMasterUserSecret {

};
```


### RdsClusterRestoreToPointInTime <a name="RdsClusterRestoreToPointInTime" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RdsClusterRestoreToPointInTime {
    string RestoreToTime = null,
    string RestoreType = null,
    string SourceClusterIdentifier = null,
    string SourceClusterResourceId = null,
    object UseLatestRestorableTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime.property.restoreToTime">RestoreToTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#restore_to_time RdsCluster#restore_to_time}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime.property.restoreType">RestoreType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#restore_type RdsCluster#restore_type}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime.property.sourceClusterIdentifier">SourceClusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#source_cluster_identifier RdsCluster#source_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime.property.sourceClusterResourceId">SourceClusterResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#source_cluster_resource_id RdsCluster#source_cluster_resource_id}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime.property.useLatestRestorableTime">UseLatestRestorableTime</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#use_latest_restorable_time RdsCluster#use_latest_restorable_time}. |

---

##### `RestoreToTime`<sup>Optional</sup> <a name="RestoreToTime" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime.property.restoreToTime"></a>

```csharp
public string RestoreToTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#restore_to_time RdsCluster#restore_to_time}.

---

##### `RestoreType`<sup>Optional</sup> <a name="RestoreType" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime.property.restoreType"></a>

```csharp
public string RestoreType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#restore_type RdsCluster#restore_type}.

---

##### `SourceClusterIdentifier`<sup>Optional</sup> <a name="SourceClusterIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime.property.sourceClusterIdentifier"></a>

```csharp
public string SourceClusterIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#source_cluster_identifier RdsCluster#source_cluster_identifier}.

---

##### `SourceClusterResourceId`<sup>Optional</sup> <a name="SourceClusterResourceId" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime.property.sourceClusterResourceId"></a>

```csharp
public string SourceClusterResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#source_cluster_resource_id RdsCluster#source_cluster_resource_id}.

---

##### `UseLatestRestorableTime`<sup>Optional</sup> <a name="UseLatestRestorableTime" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime.property.useLatestRestorableTime"></a>

```csharp
public object UseLatestRestorableTime { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#use_latest_restorable_time RdsCluster#use_latest_restorable_time}.

---

### RdsClusterS3Import <a name="RdsClusterS3Import" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3Import"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3Import.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RdsClusterS3Import {
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
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import.property.bucketName">BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#bucket_name RdsCluster#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import.property.ingestionRole">IngestionRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#ingestion_role RdsCluster#ingestion_role}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import.property.sourceEngine">SourceEngine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#source_engine RdsCluster#source_engine}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import.property.sourceEngineVersion">SourceEngineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#source_engine_version RdsCluster#source_engine_version}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import.property.bucketPrefix">BucketPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#bucket_prefix RdsCluster#bucket_prefix}. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3Import.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#bucket_name RdsCluster#bucket_name}.

---

##### `IngestionRole`<sup>Required</sup> <a name="IngestionRole" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3Import.property.ingestionRole"></a>

```csharp
public string IngestionRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#ingestion_role RdsCluster#ingestion_role}.

---

##### `SourceEngine`<sup>Required</sup> <a name="SourceEngine" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3Import.property.sourceEngine"></a>

```csharp
public string SourceEngine { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#source_engine RdsCluster#source_engine}.

---

##### `SourceEngineVersion`<sup>Required</sup> <a name="SourceEngineVersion" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3Import.property.sourceEngineVersion"></a>

```csharp
public string SourceEngineVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#source_engine_version RdsCluster#source_engine_version}.

---

##### `BucketPrefix`<sup>Optional</sup> <a name="BucketPrefix" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3Import.property.bucketPrefix"></a>

```csharp
public string BucketPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#bucket_prefix RdsCluster#bucket_prefix}.

---

### RdsClusterScalingConfiguration <a name="RdsClusterScalingConfiguration" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RdsClusterScalingConfiguration {
    object AutoPause = null,
    double MaxCapacity = null,
    double MinCapacity = null,
    double SecondsBeforeTimeout = null,
    double SecondsUntilAutoPause = null,
    string TimeoutAction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.property.autoPause">AutoPause</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#auto_pause RdsCluster#auto_pause}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#max_capacity RdsCluster#max_capacity}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.property.minCapacity">MinCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#min_capacity RdsCluster#min_capacity}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.property.secondsBeforeTimeout">SecondsBeforeTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#seconds_before_timeout RdsCluster#seconds_before_timeout}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.property.secondsUntilAutoPause">SecondsUntilAutoPause</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#seconds_until_auto_pause RdsCluster#seconds_until_auto_pause}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.property.timeoutAction">TimeoutAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#timeout_action RdsCluster#timeout_action}. |

---

##### `AutoPause`<sup>Optional</sup> <a name="AutoPause" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.property.autoPause"></a>

```csharp
public object AutoPause { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#auto_pause RdsCluster#auto_pause}.

---

##### `MaxCapacity`<sup>Optional</sup> <a name="MaxCapacity" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#max_capacity RdsCluster#max_capacity}.

---

##### `MinCapacity`<sup>Optional</sup> <a name="MinCapacity" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.property.minCapacity"></a>

```csharp
public double MinCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#min_capacity RdsCluster#min_capacity}.

---

##### `SecondsBeforeTimeout`<sup>Optional</sup> <a name="SecondsBeforeTimeout" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.property.secondsBeforeTimeout"></a>

```csharp
public double SecondsBeforeTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#seconds_before_timeout RdsCluster#seconds_before_timeout}.

---

##### `SecondsUntilAutoPause`<sup>Optional</sup> <a name="SecondsUntilAutoPause" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.property.secondsUntilAutoPause"></a>

```csharp
public double SecondsUntilAutoPause { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#seconds_until_auto_pause RdsCluster#seconds_until_auto_pause}.

---

##### `TimeoutAction`<sup>Optional</sup> <a name="TimeoutAction" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.property.timeoutAction"></a>

```csharp
public string TimeoutAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#timeout_action RdsCluster#timeout_action}.

---

### RdsClusterServerlessv2ScalingConfiguration <a name="RdsClusterServerlessv2ScalingConfiguration" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RdsClusterServerlessv2ScalingConfiguration {
    double MaxCapacity,
    double MinCapacity,
    double SecondsUntilAutoPause = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#max_capacity RdsCluster#max_capacity}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration.property.minCapacity">MinCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#min_capacity RdsCluster#min_capacity}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration.property.secondsUntilAutoPause">SecondsUntilAutoPause</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#seconds_until_auto_pause RdsCluster#seconds_until_auto_pause}. |

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#max_capacity RdsCluster#max_capacity}.

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration.property.minCapacity"></a>

```csharp
public double MinCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#min_capacity RdsCluster#min_capacity}.

---

##### `SecondsUntilAutoPause`<sup>Optional</sup> <a name="SecondsUntilAutoPause" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration.property.secondsUntilAutoPause"></a>

```csharp
public double SecondsUntilAutoPause { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#seconds_until_auto_pause RdsCluster#seconds_until_auto_pause}.

---

### RdsClusterTimeouts <a name="RdsClusterTimeouts" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RdsClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#create RdsCluster#create}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#delete RdsCluster#delete}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#update RdsCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#create RdsCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#delete RdsCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/rds_cluster#update RdsCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RdsClusterMasterUserSecretList <a name="RdsClusterMasterUserSecretList" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RdsClusterMasterUserSecretList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.get"></a>

```csharp
private RdsClusterMasterUserSecretOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### RdsClusterMasterUserSecretOutputReference <a name="RdsClusterMasterUserSecretOutputReference" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RdsClusterMasterUserSecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.property.secretStatus">SecretStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecret">RdsClusterMasterUserSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `SecretStatus`<sup>Required</sup> <a name="SecretStatus" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.property.secretStatus"></a>

```csharp
public string SecretStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.property.internalValue"></a>

```csharp
public RdsClusterMasterUserSecret InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecret">RdsClusterMasterUserSecret</a>

---


### RdsClusterRestoreToPointInTimeOutputReference <a name="RdsClusterRestoreToPointInTimeOutputReference" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RdsClusterRestoreToPointInTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.resetRestoreToTime">ResetRestoreToTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.resetRestoreType">ResetRestoreType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.resetSourceClusterIdentifier">ResetSourceClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.resetSourceClusterResourceId">ResetSourceClusterResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.resetUseLatestRestorableTime">ResetUseLatestRestorableTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRestoreToTime` <a name="ResetRestoreToTime" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.resetRestoreToTime"></a>

```csharp
private void ResetRestoreToTime()
```

##### `ResetRestoreType` <a name="ResetRestoreType" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.resetRestoreType"></a>

```csharp
private void ResetRestoreType()
```

##### `ResetSourceClusterIdentifier` <a name="ResetSourceClusterIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.resetSourceClusterIdentifier"></a>

```csharp
private void ResetSourceClusterIdentifier()
```

##### `ResetSourceClusterResourceId` <a name="ResetSourceClusterResourceId" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.resetSourceClusterResourceId"></a>

```csharp
private void ResetSourceClusterResourceId()
```

##### `ResetUseLatestRestorableTime` <a name="ResetUseLatestRestorableTime" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.resetUseLatestRestorableTime"></a>

```csharp
private void ResetUseLatestRestorableTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.restoreToTimeInput">RestoreToTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.restoreTypeInput">RestoreTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.sourceClusterIdentifierInput">SourceClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.sourceClusterResourceIdInput">SourceClusterResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.useLatestRestorableTimeInput">UseLatestRestorableTimeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.restoreToTime">RestoreToTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.restoreType">RestoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.sourceClusterIdentifier">SourceClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.sourceClusterResourceId">SourceClusterResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.useLatestRestorableTime">UseLatestRestorableTime</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime">RdsClusterRestoreToPointInTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RestoreToTimeInput`<sup>Optional</sup> <a name="RestoreToTimeInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.restoreToTimeInput"></a>

```csharp
public string RestoreToTimeInput { get; }
```

- *Type:* string

---

##### `RestoreTypeInput`<sup>Optional</sup> <a name="RestoreTypeInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.restoreTypeInput"></a>

```csharp
public string RestoreTypeInput { get; }
```

- *Type:* string

---

##### `SourceClusterIdentifierInput`<sup>Optional</sup> <a name="SourceClusterIdentifierInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.sourceClusterIdentifierInput"></a>

```csharp
public string SourceClusterIdentifierInput { get; }
```

- *Type:* string

---

##### `SourceClusterResourceIdInput`<sup>Optional</sup> <a name="SourceClusterResourceIdInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.sourceClusterResourceIdInput"></a>

```csharp
public string SourceClusterResourceIdInput { get; }
```

- *Type:* string

---

##### `UseLatestRestorableTimeInput`<sup>Optional</sup> <a name="UseLatestRestorableTimeInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.useLatestRestorableTimeInput"></a>

```csharp
public object UseLatestRestorableTimeInput { get; }
```

- *Type:* object

---

##### `RestoreToTime`<sup>Required</sup> <a name="RestoreToTime" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.restoreToTime"></a>

```csharp
public string RestoreToTime { get; }
```

- *Type:* string

---

##### `RestoreType`<sup>Required</sup> <a name="RestoreType" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.restoreType"></a>

```csharp
public string RestoreType { get; }
```

- *Type:* string

---

##### `SourceClusterIdentifier`<sup>Required</sup> <a name="SourceClusterIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.sourceClusterIdentifier"></a>

```csharp
public string SourceClusterIdentifier { get; }
```

- *Type:* string

---

##### `SourceClusterResourceId`<sup>Required</sup> <a name="SourceClusterResourceId" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.sourceClusterResourceId"></a>

```csharp
public string SourceClusterResourceId { get; }
```

- *Type:* string

---

##### `UseLatestRestorableTime`<sup>Required</sup> <a name="UseLatestRestorableTime" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.useLatestRestorableTime"></a>

```csharp
public object UseLatestRestorableTime { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.internalValue"></a>

```csharp
public RdsClusterRestoreToPointInTime InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime">RdsClusterRestoreToPointInTime</a>

---


### RdsClusterS3ImportOutputReference <a name="RdsClusterS3ImportOutputReference" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RdsClusterS3ImportOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.resetBucketPrefix">ResetBucketPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketPrefix` <a name="ResetBucketPrefix" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.resetBucketPrefix"></a>

```csharp
private void ResetBucketPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.bucketPrefixInput">BucketPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.ingestionRoleInput">IngestionRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.sourceEngineInput">SourceEngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.sourceEngineVersionInput">SourceEngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.bucketPrefix">BucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.ingestionRole">IngestionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.sourceEngine">SourceEngine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.sourceEngineVersion">SourceEngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import">RdsClusterS3Import</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `BucketPrefixInput`<sup>Optional</sup> <a name="BucketPrefixInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.bucketPrefixInput"></a>

```csharp
public string BucketPrefixInput { get; }
```

- *Type:* string

---

##### `IngestionRoleInput`<sup>Optional</sup> <a name="IngestionRoleInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.ingestionRoleInput"></a>

```csharp
public string IngestionRoleInput { get; }
```

- *Type:* string

---

##### `SourceEngineInput`<sup>Optional</sup> <a name="SourceEngineInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.sourceEngineInput"></a>

```csharp
public string SourceEngineInput { get; }
```

- *Type:* string

---

##### `SourceEngineVersionInput`<sup>Optional</sup> <a name="SourceEngineVersionInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.sourceEngineVersionInput"></a>

```csharp
public string SourceEngineVersionInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `BucketPrefix`<sup>Required</sup> <a name="BucketPrefix" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.bucketPrefix"></a>

```csharp
public string BucketPrefix { get; }
```

- *Type:* string

---

##### `IngestionRole`<sup>Required</sup> <a name="IngestionRole" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.ingestionRole"></a>

```csharp
public string IngestionRole { get; }
```

- *Type:* string

---

##### `SourceEngine`<sup>Required</sup> <a name="SourceEngine" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.sourceEngine"></a>

```csharp
public string SourceEngine { get; }
```

- *Type:* string

---

##### `SourceEngineVersion`<sup>Required</sup> <a name="SourceEngineVersion" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.sourceEngineVersion"></a>

```csharp
public string SourceEngineVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.internalValue"></a>

```csharp
public RdsClusterS3Import InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import">RdsClusterS3Import</a>

---


### RdsClusterScalingConfigurationOutputReference <a name="RdsClusterScalingConfigurationOutputReference" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RdsClusterScalingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resetAutoPause">ResetAutoPause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resetMaxCapacity">ResetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resetMinCapacity">ResetMinCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resetSecondsBeforeTimeout">ResetSecondsBeforeTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resetSecondsUntilAutoPause">ResetSecondsUntilAutoPause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resetTimeoutAction">ResetTimeoutAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoPause` <a name="ResetAutoPause" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resetAutoPause"></a>

```csharp
private void ResetAutoPause()
```

##### `ResetMaxCapacity` <a name="ResetMaxCapacity" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resetMaxCapacity"></a>

```csharp
private void ResetMaxCapacity()
```

##### `ResetMinCapacity` <a name="ResetMinCapacity" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resetMinCapacity"></a>

```csharp
private void ResetMinCapacity()
```

##### `ResetSecondsBeforeTimeout` <a name="ResetSecondsBeforeTimeout" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resetSecondsBeforeTimeout"></a>

```csharp
private void ResetSecondsBeforeTimeout()
```

##### `ResetSecondsUntilAutoPause` <a name="ResetSecondsUntilAutoPause" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resetSecondsUntilAutoPause"></a>

```csharp
private void ResetSecondsUntilAutoPause()
```

##### `ResetTimeoutAction` <a name="ResetTimeoutAction" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resetTimeoutAction"></a>

```csharp
private void ResetTimeoutAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.autoPauseInput">AutoPauseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.minCapacityInput">MinCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.secondsBeforeTimeoutInput">SecondsBeforeTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.secondsUntilAutoPauseInput">SecondsUntilAutoPauseInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.timeoutActionInput">TimeoutActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.autoPause">AutoPause</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.minCapacity">MinCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.secondsBeforeTimeout">SecondsBeforeTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.secondsUntilAutoPause">SecondsUntilAutoPause</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.timeoutAction">TimeoutAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration">RdsClusterScalingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoPauseInput`<sup>Optional</sup> <a name="AutoPauseInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.autoPauseInput"></a>

```csharp
public object AutoPauseInput { get; }
```

- *Type:* object

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.maxCapacityInput"></a>

```csharp
public double MaxCapacityInput { get; }
```

- *Type:* double

---

##### `MinCapacityInput`<sup>Optional</sup> <a name="MinCapacityInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.minCapacityInput"></a>

```csharp
public double MinCapacityInput { get; }
```

- *Type:* double

---

##### `SecondsBeforeTimeoutInput`<sup>Optional</sup> <a name="SecondsBeforeTimeoutInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.secondsBeforeTimeoutInput"></a>

```csharp
public double SecondsBeforeTimeoutInput { get; }
```

- *Type:* double

---

##### `SecondsUntilAutoPauseInput`<sup>Optional</sup> <a name="SecondsUntilAutoPauseInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.secondsUntilAutoPauseInput"></a>

```csharp
public double SecondsUntilAutoPauseInput { get; }
```

- *Type:* double

---

##### `TimeoutActionInput`<sup>Optional</sup> <a name="TimeoutActionInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.timeoutActionInput"></a>

```csharp
public string TimeoutActionInput { get; }
```

- *Type:* string

---

##### `AutoPause`<sup>Required</sup> <a name="AutoPause" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.autoPause"></a>

```csharp
public object AutoPause { get; }
```

- *Type:* object

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; }
```

- *Type:* double

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.minCapacity"></a>

```csharp
public double MinCapacity { get; }
```

- *Type:* double

---

##### `SecondsBeforeTimeout`<sup>Required</sup> <a name="SecondsBeforeTimeout" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.secondsBeforeTimeout"></a>

```csharp
public double SecondsBeforeTimeout { get; }
```

- *Type:* double

---

##### `SecondsUntilAutoPause`<sup>Required</sup> <a name="SecondsUntilAutoPause" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.secondsUntilAutoPause"></a>

```csharp
public double SecondsUntilAutoPause { get; }
```

- *Type:* double

---

##### `TimeoutAction`<sup>Required</sup> <a name="TimeoutAction" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.timeoutAction"></a>

```csharp
public string TimeoutAction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.internalValue"></a>

```csharp
public RdsClusterScalingConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration">RdsClusterScalingConfiguration</a>

---


### RdsClusterServerlessv2ScalingConfigurationOutputReference <a name="RdsClusterServerlessv2ScalingConfigurationOutputReference" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RdsClusterServerlessv2ScalingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.resetSecondsUntilAutoPause">ResetSecondsUntilAutoPause</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecondsUntilAutoPause` <a name="ResetSecondsUntilAutoPause" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.resetSecondsUntilAutoPause"></a>

```csharp
private void ResetSecondsUntilAutoPause()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.minCapacityInput">MinCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.secondsUntilAutoPauseInput">SecondsUntilAutoPauseInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.minCapacity">MinCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.secondsUntilAutoPause">SecondsUntilAutoPause</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration">RdsClusterServerlessv2ScalingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.maxCapacityInput"></a>

```csharp
public double MaxCapacityInput { get; }
```

- *Type:* double

---

##### `MinCapacityInput`<sup>Optional</sup> <a name="MinCapacityInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.minCapacityInput"></a>

```csharp
public double MinCapacityInput { get; }
```

- *Type:* double

---

##### `SecondsUntilAutoPauseInput`<sup>Optional</sup> <a name="SecondsUntilAutoPauseInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.secondsUntilAutoPauseInput"></a>

```csharp
public double SecondsUntilAutoPauseInput { get; }
```

- *Type:* double

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; }
```

- *Type:* double

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.minCapacity"></a>

```csharp
public double MinCapacity { get; }
```

- *Type:* double

---

##### `SecondsUntilAutoPause`<sup>Required</sup> <a name="SecondsUntilAutoPause" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.secondsUntilAutoPause"></a>

```csharp
public double SecondsUntilAutoPause { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.internalValue"></a>

```csharp
public RdsClusterServerlessv2ScalingConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration">RdsClusterServerlessv2ScalingConfiguration</a>

---


### RdsClusterTimeoutsOutputReference <a name="RdsClusterTimeoutsOutputReference" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RdsClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



