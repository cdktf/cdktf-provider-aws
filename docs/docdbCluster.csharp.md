# `docdbCluster` Submodule <a name="`docdbCluster` Submodule" id="@cdktf/provider-aws.docdbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DocdbCluster <a name="DocdbCluster" id="@cdktf/provider-aws.docdbCluster.DocdbCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster aws_docdb_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DocdbCluster(Construct Scope, string Id, DocdbClusterConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig">DocdbClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig">DocdbClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.putRestoreToPointInTime">PutRestoreToPointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetAllowMajorVersionUpgrade">ResetAllowMajorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetApplyImmediately">ResetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetAvailabilityZones">ResetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetBackupRetentionPeriod">ResetBackupRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetClusterIdentifier">ResetClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetClusterIdentifierPrefix">ResetClusterIdentifierPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetClusterMembers">ResetClusterMembers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetDbClusterParameterGroupName">ResetDbClusterParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetDbSubnetGroupName">ResetDbSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetEnabledCloudwatchLogsExports">ResetEnabledCloudwatchLogsExports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetEngine">ResetEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetFinalSnapshotIdentifier">ResetFinalSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetGlobalClusterIdentifier">ResetGlobalClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetManageMasterUserPassword">ResetManageMasterUserPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetMasterPassword">ResetMasterPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetMasterPasswordWo">ResetMasterPasswordWo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetMasterPasswordWoVersion">ResetMasterPasswordWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetMasterUsername">ResetMasterUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetPreferredBackupWindow">ResetPreferredBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetPreferredMaintenanceWindow">ResetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetRestoreToPointInTime">ResetRestoreToPointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetSkipFinalSnapshot">ResetSkipFinalSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetSnapshotIdentifier">ResetSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetStorageEncrypted">ResetStorageEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetStorageType">ResetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetVpcSecurityGroupIds">ResetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRestoreToPointInTime` <a name="PutRestoreToPointInTime" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.putRestoreToPointInTime"></a>

```csharp
private void PutRestoreToPointInTime(DocdbClusterRestoreToPointInTime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.putRestoreToPointInTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime">DocdbClusterRestoreToPointInTime</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(DocdbClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts">DocdbClusterTimeouts</a>

---

##### `ResetAllowMajorVersionUpgrade` <a name="ResetAllowMajorVersionUpgrade" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetAllowMajorVersionUpgrade"></a>

```csharp
private void ResetAllowMajorVersionUpgrade()
```

##### `ResetApplyImmediately` <a name="ResetApplyImmediately" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetApplyImmediately"></a>

```csharp
private void ResetApplyImmediately()
```

##### `ResetAvailabilityZones` <a name="ResetAvailabilityZones" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetAvailabilityZones"></a>

```csharp
private void ResetAvailabilityZones()
```

##### `ResetBackupRetentionPeriod` <a name="ResetBackupRetentionPeriod" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetBackupRetentionPeriod"></a>

```csharp
private void ResetBackupRetentionPeriod()
```

##### `ResetClusterIdentifier` <a name="ResetClusterIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetClusterIdentifier"></a>

```csharp
private void ResetClusterIdentifier()
```

##### `ResetClusterIdentifierPrefix` <a name="ResetClusterIdentifierPrefix" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetClusterIdentifierPrefix"></a>

```csharp
private void ResetClusterIdentifierPrefix()
```

##### `ResetClusterMembers` <a name="ResetClusterMembers" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetClusterMembers"></a>

```csharp
private void ResetClusterMembers()
```

##### `ResetDbClusterParameterGroupName` <a name="ResetDbClusterParameterGroupName" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetDbClusterParameterGroupName"></a>

```csharp
private void ResetDbClusterParameterGroupName()
```

##### `ResetDbSubnetGroupName` <a name="ResetDbSubnetGroupName" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetDbSubnetGroupName"></a>

```csharp
private void ResetDbSubnetGroupName()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetDeletionProtection"></a>

```csharp
private void ResetDeletionProtection()
```

##### `ResetEnabledCloudwatchLogsExports` <a name="ResetEnabledCloudwatchLogsExports" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetEnabledCloudwatchLogsExports"></a>

```csharp
private void ResetEnabledCloudwatchLogsExports()
```

##### `ResetEngine` <a name="ResetEngine" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetEngine"></a>

```csharp
private void ResetEngine()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetEngineVersion"></a>

```csharp
private void ResetEngineVersion()
```

##### `ResetFinalSnapshotIdentifier` <a name="ResetFinalSnapshotIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetFinalSnapshotIdentifier"></a>

```csharp
private void ResetFinalSnapshotIdentifier()
```

##### `ResetGlobalClusterIdentifier` <a name="ResetGlobalClusterIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetGlobalClusterIdentifier"></a>

```csharp
private void ResetGlobalClusterIdentifier()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetManageMasterUserPassword` <a name="ResetManageMasterUserPassword" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetManageMasterUserPassword"></a>

```csharp
private void ResetManageMasterUserPassword()
```

##### `ResetMasterPassword` <a name="ResetMasterPassword" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetMasterPassword"></a>

```csharp
private void ResetMasterPassword()
```

##### `ResetMasterPasswordWo` <a name="ResetMasterPasswordWo" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetMasterPasswordWo"></a>

```csharp
private void ResetMasterPasswordWo()
```

##### `ResetMasterPasswordWoVersion` <a name="ResetMasterPasswordWoVersion" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetMasterPasswordWoVersion"></a>

```csharp
private void ResetMasterPasswordWoVersion()
```

##### `ResetMasterUsername` <a name="ResetMasterUsername" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetMasterUsername"></a>

```csharp
private void ResetMasterUsername()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPreferredBackupWindow` <a name="ResetPreferredBackupWindow" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetPreferredBackupWindow"></a>

```csharp
private void ResetPreferredBackupWindow()
```

##### `ResetPreferredMaintenanceWindow` <a name="ResetPreferredMaintenanceWindow" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetPreferredMaintenanceWindow"></a>

```csharp
private void ResetPreferredMaintenanceWindow()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRestoreToPointInTime` <a name="ResetRestoreToPointInTime" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetRestoreToPointInTime"></a>

```csharp
private void ResetRestoreToPointInTime()
```

##### `ResetSkipFinalSnapshot` <a name="ResetSkipFinalSnapshot" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetSkipFinalSnapshot"></a>

```csharp
private void ResetSkipFinalSnapshot()
```

##### `ResetSnapshotIdentifier` <a name="ResetSnapshotIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetSnapshotIdentifier"></a>

```csharp
private void ResetSnapshotIdentifier()
```

##### `ResetStorageEncrypted` <a name="ResetStorageEncrypted" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetStorageEncrypted"></a>

```csharp
private void ResetStorageEncrypted()
```

##### `ResetStorageType` <a name="ResetStorageType" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetStorageType"></a>

```csharp
private void ResetStorageType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetVpcSecurityGroupIds"></a>

```csharp
private void ResetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DocdbCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DocdbCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DocdbCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DocdbCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DocdbCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DocdbCluster resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DocdbCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DocdbCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DocdbCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterResourceId">ClusterResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.hostedZoneId">HostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterUserSecret">MasterUserSecret</a></code> | <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList">DocdbClusterMasterUserSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.readerEndpoint">ReaderEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.restoreToPointInTime">RestoreToPointInTime</a></code> | <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference">DocdbClusterRestoreToPointInTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference">DocdbClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.allowMajorVersionUpgradeInput">AllowMajorVersionUpgradeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.applyImmediatelyInput">ApplyImmediatelyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.availabilityZonesInput">AvailabilityZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.backupRetentionPeriodInput">BackupRetentionPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterIdentifierInput">ClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterIdentifierPrefixInput">ClusterIdentifierPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterMembersInput">ClusterMembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.dbClusterParameterGroupNameInput">DbClusterParameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.dbSubnetGroupNameInput">DbSubnetGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.enabledCloudwatchLogsExportsInput">EnabledCloudwatchLogsExportsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.engineInput">EngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.engineVersionInput">EngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.finalSnapshotIdentifierInput">FinalSnapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.globalClusterIdentifierInput">GlobalClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.manageMasterUserPasswordInput">ManageMasterUserPasswordInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPasswordInput">MasterPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPasswordWoInput">MasterPasswordWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPasswordWoVersionInput">MasterPasswordWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterUsernameInput">MasterUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.preferredBackupWindowInput">PreferredBackupWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.preferredMaintenanceWindowInput">PreferredMaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.restoreToPointInTimeInput">RestoreToPointInTimeInput</a></code> | <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime">DocdbClusterRestoreToPointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.skipFinalSnapshotInput">SkipFinalSnapshotInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.snapshotIdentifierInput">SnapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.storageEncryptedInput">StorageEncryptedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.storageTypeInput">StorageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.allowMajorVersionUpgrade">AllowMajorVersionUpgrade</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.applyImmediately">ApplyImmediately</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.backupRetentionPeriod">BackupRetentionPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterIdentifierPrefix">ClusterIdentifierPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterMembers">ClusterMembers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.dbClusterParameterGroupName">DbClusterParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.dbSubnetGroupName">DbSubnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.deletionProtection">DeletionProtection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.enabledCloudwatchLogsExports">EnabledCloudwatchLogsExports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.finalSnapshotIdentifier">FinalSnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.globalClusterIdentifier">GlobalClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.manageMasterUserPassword">ManageMasterUserPassword</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPassword">MasterPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPasswordWo">MasterPasswordWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPasswordWoVersion">MasterPasswordWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterUsername">MasterUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.preferredBackupWindow">PreferredBackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.skipFinalSnapshot">SkipFinalSnapshot</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.snapshotIdentifier">SnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.storageEncrypted">StorageEncrypted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ClusterResourceId`<sup>Required</sup> <a name="ClusterResourceId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterResourceId"></a>

```csharp
public string ClusterResourceId { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.hostedZoneId"></a>

```csharp
public string HostedZoneId { get; }
```

- *Type:* string

---

##### `MasterUserSecret`<sup>Required</sup> <a name="MasterUserSecret" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterUserSecret"></a>

```csharp
public DocdbClusterMasterUserSecretList MasterUserSecret { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList">DocdbClusterMasterUserSecretList</a>

---

##### `ReaderEndpoint`<sup>Required</sup> <a name="ReaderEndpoint" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.readerEndpoint"></a>

```csharp
public string ReaderEndpoint { get; }
```

- *Type:* string

---

##### `RestoreToPointInTime`<sup>Required</sup> <a name="RestoreToPointInTime" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.restoreToPointInTime"></a>

```csharp
public DocdbClusterRestoreToPointInTimeOutputReference RestoreToPointInTime { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference">DocdbClusterRestoreToPointInTimeOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.timeouts"></a>

```csharp
public DocdbClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference">DocdbClusterTimeoutsOutputReference</a>

---

##### `AllowMajorVersionUpgradeInput`<sup>Optional</sup> <a name="AllowMajorVersionUpgradeInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.allowMajorVersionUpgradeInput"></a>

```csharp
public object AllowMajorVersionUpgradeInput { get; }
```

- *Type:* object

---

##### `ApplyImmediatelyInput`<sup>Optional</sup> <a name="ApplyImmediatelyInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.applyImmediatelyInput"></a>

```csharp
public object ApplyImmediatelyInput { get; }
```

- *Type:* object

---

##### `AvailabilityZonesInput`<sup>Optional</sup> <a name="AvailabilityZonesInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.availabilityZonesInput"></a>

```csharp
public string[] AvailabilityZonesInput { get; }
```

- *Type:* string[]

---

##### `BackupRetentionPeriodInput`<sup>Optional</sup> <a name="BackupRetentionPeriodInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.backupRetentionPeriodInput"></a>

```csharp
public double BackupRetentionPeriodInput { get; }
```

- *Type:* double

---

##### `ClusterIdentifierInput`<sup>Optional</sup> <a name="ClusterIdentifierInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterIdentifierInput"></a>

```csharp
public string ClusterIdentifierInput { get; }
```

- *Type:* string

---

##### `ClusterIdentifierPrefixInput`<sup>Optional</sup> <a name="ClusterIdentifierPrefixInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterIdentifierPrefixInput"></a>

```csharp
public string ClusterIdentifierPrefixInput { get; }
```

- *Type:* string

---

##### `ClusterMembersInput`<sup>Optional</sup> <a name="ClusterMembersInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterMembersInput"></a>

```csharp
public string[] ClusterMembersInput { get; }
```

- *Type:* string[]

---

##### `DbClusterParameterGroupNameInput`<sup>Optional</sup> <a name="DbClusterParameterGroupNameInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.dbClusterParameterGroupNameInput"></a>

```csharp
public string DbClusterParameterGroupNameInput { get; }
```

- *Type:* string

---

##### `DbSubnetGroupNameInput`<sup>Optional</sup> <a name="DbSubnetGroupNameInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.dbSubnetGroupNameInput"></a>

```csharp
public string DbSubnetGroupNameInput { get; }
```

- *Type:* string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.deletionProtectionInput"></a>

```csharp
public object DeletionProtectionInput { get; }
```

- *Type:* object

---

##### `EnabledCloudwatchLogsExportsInput`<sup>Optional</sup> <a name="EnabledCloudwatchLogsExportsInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.enabledCloudwatchLogsExportsInput"></a>

```csharp
public string[] EnabledCloudwatchLogsExportsInput { get; }
```

- *Type:* string[]

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.engineInput"></a>

```csharp
public string EngineInput { get; }
```

- *Type:* string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.engineVersionInput"></a>

```csharp
public string EngineVersionInput { get; }
```

- *Type:* string

---

##### `FinalSnapshotIdentifierInput`<sup>Optional</sup> <a name="FinalSnapshotIdentifierInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.finalSnapshotIdentifierInput"></a>

```csharp
public string FinalSnapshotIdentifierInput { get; }
```

- *Type:* string

---

##### `GlobalClusterIdentifierInput`<sup>Optional</sup> <a name="GlobalClusterIdentifierInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.globalClusterIdentifierInput"></a>

```csharp
public string GlobalClusterIdentifierInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `ManageMasterUserPasswordInput`<sup>Optional</sup> <a name="ManageMasterUserPasswordInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.manageMasterUserPasswordInput"></a>

```csharp
public object ManageMasterUserPasswordInput { get; }
```

- *Type:* object

---

##### `MasterPasswordInput`<sup>Optional</sup> <a name="MasterPasswordInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPasswordInput"></a>

```csharp
public string MasterPasswordInput { get; }
```

- *Type:* string

---

##### `MasterPasswordWoInput`<sup>Optional</sup> <a name="MasterPasswordWoInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPasswordWoInput"></a>

```csharp
public string MasterPasswordWoInput { get; }
```

- *Type:* string

---

##### `MasterPasswordWoVersionInput`<sup>Optional</sup> <a name="MasterPasswordWoVersionInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPasswordWoVersionInput"></a>

```csharp
public double MasterPasswordWoVersionInput { get; }
```

- *Type:* double

---

##### `MasterUsernameInput`<sup>Optional</sup> <a name="MasterUsernameInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterUsernameInput"></a>

```csharp
public string MasterUsernameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PreferredBackupWindowInput`<sup>Optional</sup> <a name="PreferredBackupWindowInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.preferredBackupWindowInput"></a>

```csharp
public string PreferredBackupWindowInput { get; }
```

- *Type:* string

---

##### `PreferredMaintenanceWindowInput`<sup>Optional</sup> <a name="PreferredMaintenanceWindowInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.preferredMaintenanceWindowInput"></a>

```csharp
public string PreferredMaintenanceWindowInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RestoreToPointInTimeInput`<sup>Optional</sup> <a name="RestoreToPointInTimeInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.restoreToPointInTimeInput"></a>

```csharp
public DocdbClusterRestoreToPointInTime RestoreToPointInTimeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime">DocdbClusterRestoreToPointInTime</a>

---

##### `SkipFinalSnapshotInput`<sup>Optional</sup> <a name="SkipFinalSnapshotInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.skipFinalSnapshotInput"></a>

```csharp
public object SkipFinalSnapshotInput { get; }
```

- *Type:* object

---

##### `SnapshotIdentifierInput`<sup>Optional</sup> <a name="SnapshotIdentifierInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.snapshotIdentifierInput"></a>

```csharp
public string SnapshotIdentifierInput { get; }
```

- *Type:* string

---

##### `StorageEncryptedInput`<sup>Optional</sup> <a name="StorageEncryptedInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.storageEncryptedInput"></a>

```csharp
public object StorageEncryptedInput { get; }
```

- *Type:* object

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.storageTypeInput"></a>

```csharp
public string StorageTypeInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.vpcSecurityGroupIdsInput"></a>

```csharp
public string[] VpcSecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `AllowMajorVersionUpgrade`<sup>Required</sup> <a name="AllowMajorVersionUpgrade" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.allowMajorVersionUpgrade"></a>

```csharp
public object AllowMajorVersionUpgrade { get; }
```

- *Type:* object

---

##### `ApplyImmediately`<sup>Required</sup> <a name="ApplyImmediately" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.applyImmediately"></a>

```csharp
public object ApplyImmediately { get; }
```

- *Type:* object

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; }
```

- *Type:* string[]

---

##### `BackupRetentionPeriod`<sup>Required</sup> <a name="BackupRetentionPeriod" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.backupRetentionPeriod"></a>

```csharp
public double BackupRetentionPeriod { get; }
```

- *Type:* double

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; }
```

- *Type:* string

---

##### `ClusterIdentifierPrefix`<sup>Required</sup> <a name="ClusterIdentifierPrefix" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterIdentifierPrefix"></a>

```csharp
public string ClusterIdentifierPrefix { get; }
```

- *Type:* string

---

##### `ClusterMembers`<sup>Required</sup> <a name="ClusterMembers" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterMembers"></a>

```csharp
public string[] ClusterMembers { get; }
```

- *Type:* string[]

---

##### `DbClusterParameterGroupName`<sup>Required</sup> <a name="DbClusterParameterGroupName" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.dbClusterParameterGroupName"></a>

```csharp
public string DbClusterParameterGroupName { get; }
```

- *Type:* string

---

##### `DbSubnetGroupName`<sup>Required</sup> <a name="DbSubnetGroupName" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.dbSubnetGroupName"></a>

```csharp
public string DbSubnetGroupName { get; }
```

- *Type:* string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.deletionProtection"></a>

```csharp
public object DeletionProtection { get; }
```

- *Type:* object

---

##### `EnabledCloudwatchLogsExports`<sup>Required</sup> <a name="EnabledCloudwatchLogsExports" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.enabledCloudwatchLogsExports"></a>

```csharp
public string[] EnabledCloudwatchLogsExports { get; }
```

- *Type:* string[]

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `FinalSnapshotIdentifier`<sup>Required</sup> <a name="FinalSnapshotIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.finalSnapshotIdentifier"></a>

```csharp
public string FinalSnapshotIdentifier { get; }
```

- *Type:* string

---

##### `GlobalClusterIdentifier`<sup>Required</sup> <a name="GlobalClusterIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.globalClusterIdentifier"></a>

```csharp
public string GlobalClusterIdentifier { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `ManageMasterUserPassword`<sup>Required</sup> <a name="ManageMasterUserPassword" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.manageMasterUserPassword"></a>

```csharp
public object ManageMasterUserPassword { get; }
```

- *Type:* object

---

##### `MasterPassword`<sup>Required</sup> <a name="MasterPassword" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPassword"></a>

```csharp
public string MasterPassword { get; }
```

- *Type:* string

---

##### `MasterPasswordWo`<sup>Required</sup> <a name="MasterPasswordWo" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPasswordWo"></a>

```csharp
public string MasterPasswordWo { get; }
```

- *Type:* string

---

##### `MasterPasswordWoVersion`<sup>Required</sup> <a name="MasterPasswordWoVersion" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPasswordWoVersion"></a>

```csharp
public double MasterPasswordWoVersion { get; }
```

- *Type:* double

---

##### `MasterUsername`<sup>Required</sup> <a name="MasterUsername" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterUsername"></a>

```csharp
public string MasterUsername { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PreferredBackupWindow`<sup>Required</sup> <a name="PreferredBackupWindow" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.preferredBackupWindow"></a>

```csharp
public string PreferredBackupWindow { get; }
```

- *Type:* string

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SkipFinalSnapshot`<sup>Required</sup> <a name="SkipFinalSnapshot" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.skipFinalSnapshot"></a>

```csharp
public object SkipFinalSnapshot { get; }
```

- *Type:* object

---

##### `SnapshotIdentifier`<sup>Required</sup> <a name="SnapshotIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.snapshotIdentifier"></a>

```csharp
public string SnapshotIdentifier { get; }
```

- *Type:* string

---

##### `StorageEncrypted`<sup>Required</sup> <a name="StorageEncrypted" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.storageEncrypted"></a>

```csharp
public object StorageEncrypted { get; }
```

- *Type:* object

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DocdbClusterConfig <a name="DocdbClusterConfig" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DocdbClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object AllowMajorVersionUpgrade = null,
    object ApplyImmediately = null,
    string[] AvailabilityZones = null,
    double BackupRetentionPeriod = null,
    string ClusterIdentifier = null,
    string ClusterIdentifierPrefix = null,
    string[] ClusterMembers = null,
    string DbClusterParameterGroupName = null,
    string DbSubnetGroupName = null,
    object DeletionProtection = null,
    string[] EnabledCloudwatchLogsExports = null,
    string Engine = null,
    string EngineVersion = null,
    string FinalSnapshotIdentifier = null,
    string GlobalClusterIdentifier = null,
    string Id = null,
    string KmsKeyId = null,
    object ManageMasterUserPassword = null,
    string MasterPassword = null,
    string MasterPasswordWo = null,
    double MasterPasswordWoVersion = null,
    string MasterUsername = null,
    double Port = null,
    string PreferredBackupWindow = null,
    string PreferredMaintenanceWindow = null,
    string Region = null,
    DocdbClusterRestoreToPointInTime RestoreToPointInTime = null,
    object SkipFinalSnapshot = null,
    string SnapshotIdentifier = null,
    object StorageEncrypted = null,
    string StorageType = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    DocdbClusterTimeouts Timeouts = null,
    string[] VpcSecurityGroupIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.allowMajorVersionUpgrade">AllowMajorVersionUpgrade</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#allow_major_version_upgrade DocdbCluster#allow_major_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.applyImmediately">ApplyImmediately</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#apply_immediately DocdbCluster#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#availability_zones DocdbCluster#availability_zones}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.backupRetentionPeriod">BackupRetentionPeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#backup_retention_period DocdbCluster#backup_retention_period}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#cluster_identifier DocdbCluster#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.clusterIdentifierPrefix">ClusterIdentifierPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#cluster_identifier_prefix DocdbCluster#cluster_identifier_prefix}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.clusterMembers">ClusterMembers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#cluster_members DocdbCluster#cluster_members}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.dbClusterParameterGroupName">DbClusterParameterGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#db_cluster_parameter_group_name DocdbCluster#db_cluster_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.dbSubnetGroupName">DbSubnetGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#db_subnet_group_name DocdbCluster#db_subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.deletionProtection">DeletionProtection</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#deletion_protection DocdbCluster#deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.enabledCloudwatchLogsExports">EnabledCloudwatchLogsExports</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#enabled_cloudwatch_logs_exports DocdbCluster#enabled_cloudwatch_logs_exports}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.engine">Engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#engine DocdbCluster#engine}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.engineVersion">EngineVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#engine_version DocdbCluster#engine_version}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.finalSnapshotIdentifier">FinalSnapshotIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#final_snapshot_identifier DocdbCluster#final_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.globalClusterIdentifier">GlobalClusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#global_cluster_identifier DocdbCluster#global_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#id DocdbCluster#id}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#kms_key_id DocdbCluster#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.manageMasterUserPassword">ManageMasterUserPassword</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#manage_master_user_password DocdbCluster#manage_master_user_password}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.masterPassword">MasterPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#master_password DocdbCluster#master_password}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.masterPasswordWo">MasterPasswordWo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#master_password_wo DocdbCluster#master_password_wo}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.masterPasswordWoVersion">MasterPasswordWoVersion</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#master_password_wo_version DocdbCluster#master_password_wo_version}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.masterUsername">MasterUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#master_username DocdbCluster#master_username}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#port DocdbCluster#port}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.preferredBackupWindow">PreferredBackupWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#preferred_backup_window DocdbCluster#preferred_backup_window}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#preferred_maintenance_window DocdbCluster#preferred_maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.restoreToPointInTime">RestoreToPointInTime</a></code> | <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime">DocdbClusterRestoreToPointInTime</a></code> | restore_to_point_in_time block. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.skipFinalSnapshot">SkipFinalSnapshot</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#skip_final_snapshot DocdbCluster#skip_final_snapshot}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.snapshotIdentifier">SnapshotIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#snapshot_identifier DocdbCluster#snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.storageEncrypted">StorageEncrypted</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#storage_encrypted DocdbCluster#storage_encrypted}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.storageType">StorageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#storage_type DocdbCluster#storage_type}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#tags DocdbCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#tags_all DocdbCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts">DocdbClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#vpc_security_group_ids DocdbCluster#vpc_security_group_ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AllowMajorVersionUpgrade`<sup>Optional</sup> <a name="AllowMajorVersionUpgrade" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.allowMajorVersionUpgrade"></a>

```csharp
public object AllowMajorVersionUpgrade { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#allow_major_version_upgrade DocdbCluster#allow_major_version_upgrade}.

---

##### `ApplyImmediately`<sup>Optional</sup> <a name="ApplyImmediately" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.applyImmediately"></a>

```csharp
public object ApplyImmediately { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#apply_immediately DocdbCluster#apply_immediately}.

---

##### `AvailabilityZones`<sup>Optional</sup> <a name="AvailabilityZones" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#availability_zones DocdbCluster#availability_zones}.

---

##### `BackupRetentionPeriod`<sup>Optional</sup> <a name="BackupRetentionPeriod" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.backupRetentionPeriod"></a>

```csharp
public double BackupRetentionPeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#backup_retention_period DocdbCluster#backup_retention_period}.

---

##### `ClusterIdentifier`<sup>Optional</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#cluster_identifier DocdbCluster#cluster_identifier}.

---

##### `ClusterIdentifierPrefix`<sup>Optional</sup> <a name="ClusterIdentifierPrefix" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.clusterIdentifierPrefix"></a>

```csharp
public string ClusterIdentifierPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#cluster_identifier_prefix DocdbCluster#cluster_identifier_prefix}.

---

##### `ClusterMembers`<sup>Optional</sup> <a name="ClusterMembers" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.clusterMembers"></a>

```csharp
public string[] ClusterMembers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#cluster_members DocdbCluster#cluster_members}.

---

##### `DbClusterParameterGroupName`<sup>Optional</sup> <a name="DbClusterParameterGroupName" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.dbClusterParameterGroupName"></a>

```csharp
public string DbClusterParameterGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#db_cluster_parameter_group_name DocdbCluster#db_cluster_parameter_group_name}.

---

##### `DbSubnetGroupName`<sup>Optional</sup> <a name="DbSubnetGroupName" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.dbSubnetGroupName"></a>

```csharp
public string DbSubnetGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#db_subnet_group_name DocdbCluster#db_subnet_group_name}.

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.deletionProtection"></a>

```csharp
public object DeletionProtection { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#deletion_protection DocdbCluster#deletion_protection}.

---

##### `EnabledCloudwatchLogsExports`<sup>Optional</sup> <a name="EnabledCloudwatchLogsExports" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.enabledCloudwatchLogsExports"></a>

```csharp
public string[] EnabledCloudwatchLogsExports { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#enabled_cloudwatch_logs_exports DocdbCluster#enabled_cloudwatch_logs_exports}.

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.engine"></a>

```csharp
public string Engine { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#engine DocdbCluster#engine}.

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.engineVersion"></a>

```csharp
public string EngineVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#engine_version DocdbCluster#engine_version}.

---

##### `FinalSnapshotIdentifier`<sup>Optional</sup> <a name="FinalSnapshotIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.finalSnapshotIdentifier"></a>

```csharp
public string FinalSnapshotIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#final_snapshot_identifier DocdbCluster#final_snapshot_identifier}.

---

##### `GlobalClusterIdentifier`<sup>Optional</sup> <a name="GlobalClusterIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.globalClusterIdentifier"></a>

```csharp
public string GlobalClusterIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#global_cluster_identifier DocdbCluster#global_cluster_identifier}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#id DocdbCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#kms_key_id DocdbCluster#kms_key_id}.

---

##### `ManageMasterUserPassword`<sup>Optional</sup> <a name="ManageMasterUserPassword" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.manageMasterUserPassword"></a>

```csharp
public object ManageMasterUserPassword { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#manage_master_user_password DocdbCluster#manage_master_user_password}.

---

##### `MasterPassword`<sup>Optional</sup> <a name="MasterPassword" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.masterPassword"></a>

```csharp
public string MasterPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#master_password DocdbCluster#master_password}.

---

##### `MasterPasswordWo`<sup>Optional</sup> <a name="MasterPasswordWo" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.masterPasswordWo"></a>

```csharp
public string MasterPasswordWo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#master_password_wo DocdbCluster#master_password_wo}.

---

##### `MasterPasswordWoVersion`<sup>Optional</sup> <a name="MasterPasswordWoVersion" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.masterPasswordWoVersion"></a>

```csharp
public double MasterPasswordWoVersion { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#master_password_wo_version DocdbCluster#master_password_wo_version}.

---

##### `MasterUsername`<sup>Optional</sup> <a name="MasterUsername" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.masterUsername"></a>

```csharp
public string MasterUsername { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#master_username DocdbCluster#master_username}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#port DocdbCluster#port}.

---

##### `PreferredBackupWindow`<sup>Optional</sup> <a name="PreferredBackupWindow" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.preferredBackupWindow"></a>

```csharp
public string PreferredBackupWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#preferred_backup_window DocdbCluster#preferred_backup_window}.

---

##### `PreferredMaintenanceWindow`<sup>Optional</sup> <a name="PreferredMaintenanceWindow" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#preferred_maintenance_window DocdbCluster#preferred_maintenance_window}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#region DocdbCluster#region}

---

##### `RestoreToPointInTime`<sup>Optional</sup> <a name="RestoreToPointInTime" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.restoreToPointInTime"></a>

```csharp
public DocdbClusterRestoreToPointInTime RestoreToPointInTime { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime">DocdbClusterRestoreToPointInTime</a>

restore_to_point_in_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#restore_to_point_in_time DocdbCluster#restore_to_point_in_time}

---

##### `SkipFinalSnapshot`<sup>Optional</sup> <a name="SkipFinalSnapshot" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.skipFinalSnapshot"></a>

```csharp
public object SkipFinalSnapshot { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#skip_final_snapshot DocdbCluster#skip_final_snapshot}.

---

##### `SnapshotIdentifier`<sup>Optional</sup> <a name="SnapshotIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.snapshotIdentifier"></a>

```csharp
public string SnapshotIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#snapshot_identifier DocdbCluster#snapshot_identifier}.

---

##### `StorageEncrypted`<sup>Optional</sup> <a name="StorageEncrypted" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.storageEncrypted"></a>

```csharp
public object StorageEncrypted { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#storage_encrypted DocdbCluster#storage_encrypted}.

---

##### `StorageType`<sup>Optional</sup> <a name="StorageType" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.storageType"></a>

```csharp
public string StorageType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#storage_type DocdbCluster#storage_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#tags DocdbCluster#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#tags_all DocdbCluster#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.timeouts"></a>

```csharp
public DocdbClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts">DocdbClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#timeouts DocdbCluster#timeouts}

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#vpc_security_group_ids DocdbCluster#vpc_security_group_ids}.

---

### DocdbClusterMasterUserSecret <a name="DocdbClusterMasterUserSecret" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DocdbClusterMasterUserSecret {

};
```


### DocdbClusterRestoreToPointInTime <a name="DocdbClusterRestoreToPointInTime" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DocdbClusterRestoreToPointInTime {
    string SourceClusterIdentifier,
    string RestoreToTime = null,
    string RestoreType = null,
    object UseLatestRestorableTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime.property.sourceClusterIdentifier">SourceClusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#source_cluster_identifier DocdbCluster#source_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime.property.restoreToTime">RestoreToTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#restore_to_time DocdbCluster#restore_to_time}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime.property.restoreType">RestoreType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#restore_type DocdbCluster#restore_type}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime.property.useLatestRestorableTime">UseLatestRestorableTime</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#use_latest_restorable_time DocdbCluster#use_latest_restorable_time}. |

---

##### `SourceClusterIdentifier`<sup>Required</sup> <a name="SourceClusterIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime.property.sourceClusterIdentifier"></a>

```csharp
public string SourceClusterIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#source_cluster_identifier DocdbCluster#source_cluster_identifier}.

---

##### `RestoreToTime`<sup>Optional</sup> <a name="RestoreToTime" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime.property.restoreToTime"></a>

```csharp
public string RestoreToTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#restore_to_time DocdbCluster#restore_to_time}.

---

##### `RestoreType`<sup>Optional</sup> <a name="RestoreType" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime.property.restoreType"></a>

```csharp
public string RestoreType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#restore_type DocdbCluster#restore_type}.

---

##### `UseLatestRestorableTime`<sup>Optional</sup> <a name="UseLatestRestorableTime" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime.property.useLatestRestorableTime"></a>

```csharp
public object UseLatestRestorableTime { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#use_latest_restorable_time DocdbCluster#use_latest_restorable_time}.

---

### DocdbClusterTimeouts <a name="DocdbClusterTimeouts" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DocdbClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#create DocdbCluster#create}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#delete DocdbCluster#delete}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#update DocdbCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#create DocdbCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#delete DocdbCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/docdb_cluster#update DocdbCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DocdbClusterMasterUserSecretList <a name="DocdbClusterMasterUserSecretList" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DocdbClusterMasterUserSecretList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.get"></a>

```csharp
private DocdbClusterMasterUserSecretOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DocdbClusterMasterUserSecretOutputReference <a name="DocdbClusterMasterUserSecretOutputReference" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DocdbClusterMasterUserSecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.secretStatus">SecretStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecret">DocdbClusterMasterUserSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `SecretStatus`<sup>Required</sup> <a name="SecretStatus" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.secretStatus"></a>

```csharp
public string SecretStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.internalValue"></a>

```csharp
public DocdbClusterMasterUserSecret InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecret">DocdbClusterMasterUserSecret</a>

---


### DocdbClusterRestoreToPointInTimeOutputReference <a name="DocdbClusterRestoreToPointInTimeOutputReference" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DocdbClusterRestoreToPointInTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.resetRestoreToTime">ResetRestoreToTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.resetRestoreType">ResetRestoreType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.resetUseLatestRestorableTime">ResetUseLatestRestorableTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRestoreToTime` <a name="ResetRestoreToTime" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.resetRestoreToTime"></a>

```csharp
private void ResetRestoreToTime()
```

##### `ResetRestoreType` <a name="ResetRestoreType" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.resetRestoreType"></a>

```csharp
private void ResetRestoreType()
```

##### `ResetUseLatestRestorableTime` <a name="ResetUseLatestRestorableTime" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.resetUseLatestRestorableTime"></a>

```csharp
private void ResetUseLatestRestorableTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.restoreToTimeInput">RestoreToTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.restoreTypeInput">RestoreTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.sourceClusterIdentifierInput">SourceClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.useLatestRestorableTimeInput">UseLatestRestorableTimeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.restoreToTime">RestoreToTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.restoreType">RestoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.sourceClusterIdentifier">SourceClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.useLatestRestorableTime">UseLatestRestorableTime</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime">DocdbClusterRestoreToPointInTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RestoreToTimeInput`<sup>Optional</sup> <a name="RestoreToTimeInput" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.restoreToTimeInput"></a>

```csharp
public string RestoreToTimeInput { get; }
```

- *Type:* string

---

##### `RestoreTypeInput`<sup>Optional</sup> <a name="RestoreTypeInput" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.restoreTypeInput"></a>

```csharp
public string RestoreTypeInput { get; }
```

- *Type:* string

---

##### `SourceClusterIdentifierInput`<sup>Optional</sup> <a name="SourceClusterIdentifierInput" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.sourceClusterIdentifierInput"></a>

```csharp
public string SourceClusterIdentifierInput { get; }
```

- *Type:* string

---

##### `UseLatestRestorableTimeInput`<sup>Optional</sup> <a name="UseLatestRestorableTimeInput" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.useLatestRestorableTimeInput"></a>

```csharp
public object UseLatestRestorableTimeInput { get; }
```

- *Type:* object

---

##### `RestoreToTime`<sup>Required</sup> <a name="RestoreToTime" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.restoreToTime"></a>

```csharp
public string RestoreToTime { get; }
```

- *Type:* string

---

##### `RestoreType`<sup>Required</sup> <a name="RestoreType" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.restoreType"></a>

```csharp
public string RestoreType { get; }
```

- *Type:* string

---

##### `SourceClusterIdentifier`<sup>Required</sup> <a name="SourceClusterIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.sourceClusterIdentifier"></a>

```csharp
public string SourceClusterIdentifier { get; }
```

- *Type:* string

---

##### `UseLatestRestorableTime`<sup>Required</sup> <a name="UseLatestRestorableTime" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.useLatestRestorableTime"></a>

```csharp
public object UseLatestRestorableTime { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.internalValue"></a>

```csharp
public DocdbClusterRestoreToPointInTime InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime">DocdbClusterRestoreToPointInTime</a>

---


### DocdbClusterTimeoutsOutputReference <a name="DocdbClusterTimeoutsOutputReference" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DocdbClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



