# `rdsCluster` Submodule <a name="`rdsCluster` Submodule" id="@cdktf/provider-aws.rdsCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsCluster <a name="RdsCluster" id="@cdktf/provider-aws.rdsCluster.RdsCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster aws_rds_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/rdscluster"

rdscluster.NewRdsCluster(scope Construct, id *string, config RdsClusterConfig) RdsCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig">RdsClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.rdsCluster.RdsCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig">RdsClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetClusterIdentifier">ResetClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetClusterIdentifierPrefix">ResetClusterIdentifierPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetClusterMembers">ResetClusterMembers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetCopyTagsToSnapshot">ResetCopyTagsToSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetDbClusterInstanceClass">ResetDbClusterInstanceClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetDbClusterParameterGroupName">ResetDbClusterParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetDbInstanceParameterGroupName">ResetDbInstanceParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetDbSubnetGroupName">ResetDbSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetEnabledCloudwatchLogsExports">ResetEnabledCloudwatchLogsExports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetEnableGlobalWriteForwarding">ResetEnableGlobalWriteForwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetEnableHttpEndpoint">ResetEnableHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetEngine">ResetEngine</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetMasterUsername">ResetMasterUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetMasterUserSecretKmsKeyId">ResetMasterUserSecretKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetNetworkType">ResetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetPreferredBackupWindow">ResetPreferredBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.resetPreferredMaintenanceWindow">ResetPreferredMaintenanceWindow</a></code> | *No description.* |
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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.rdsCluster.RdsCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.rdsCluster.RdsCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rdsCluster.RdsCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.rdsCluster.RdsCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.rdsCluster.RdsCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutRestoreToPointInTime` <a name="PutRestoreToPointInTime" id="@cdktf/provider-aws.rdsCluster.RdsCluster.putRestoreToPointInTime"></a>

```go
func PutRestoreToPointInTime(value RdsClusterRestoreToPointInTime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rdsCluster.RdsCluster.putRestoreToPointInTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime">RdsClusterRestoreToPointInTime</a>

---

##### `PutS3Import` <a name="PutS3Import" id="@cdktf/provider-aws.rdsCluster.RdsCluster.putS3Import"></a>

```go
func PutS3Import(value RdsClusterS3Import)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rdsCluster.RdsCluster.putS3Import.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import">RdsClusterS3Import</a>

---

##### `PutScalingConfiguration` <a name="PutScalingConfiguration" id="@cdktf/provider-aws.rdsCluster.RdsCluster.putScalingConfiguration"></a>

```go
func PutScalingConfiguration(value RdsClusterScalingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rdsCluster.RdsCluster.putScalingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration">RdsClusterScalingConfiguration</a>

---

##### `PutServerlessv2ScalingConfiguration` <a name="PutServerlessv2ScalingConfiguration" id="@cdktf/provider-aws.rdsCluster.RdsCluster.putServerlessv2ScalingConfiguration"></a>

```go
func PutServerlessv2ScalingConfiguration(value RdsClusterServerlessv2ScalingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rdsCluster.RdsCluster.putServerlessv2ScalingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration">RdsClusterServerlessv2ScalingConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.rdsCluster.RdsCluster.putTimeouts"></a>

```go
func PutTimeouts(value RdsClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rdsCluster.RdsCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts">RdsClusterTimeouts</a>

---

##### `ResetAllocatedStorage` <a name="ResetAllocatedStorage" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetAllocatedStorage"></a>

```go
func ResetAllocatedStorage()
```

##### `ResetAllowMajorVersionUpgrade` <a name="ResetAllowMajorVersionUpgrade" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetAllowMajorVersionUpgrade"></a>

```go
func ResetAllowMajorVersionUpgrade()
```

##### `ResetApplyImmediately` <a name="ResetApplyImmediately" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetApplyImmediately"></a>

```go
func ResetApplyImmediately()
```

##### `ResetAvailabilityZones` <a name="ResetAvailabilityZones" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetAvailabilityZones"></a>

```go
func ResetAvailabilityZones()
```

##### `ResetBacktrackWindow` <a name="ResetBacktrackWindow" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetBacktrackWindow"></a>

```go
func ResetBacktrackWindow()
```

##### `ResetBackupRetentionPeriod` <a name="ResetBackupRetentionPeriod" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetBackupRetentionPeriod"></a>

```go
func ResetBackupRetentionPeriod()
```

##### `ResetClusterIdentifier` <a name="ResetClusterIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetClusterIdentifier"></a>

```go
func ResetClusterIdentifier()
```

##### `ResetClusterIdentifierPrefix` <a name="ResetClusterIdentifierPrefix" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetClusterIdentifierPrefix"></a>

```go
func ResetClusterIdentifierPrefix()
```

##### `ResetClusterMembers` <a name="ResetClusterMembers" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetClusterMembers"></a>

```go
func ResetClusterMembers()
```

##### `ResetCopyTagsToSnapshot` <a name="ResetCopyTagsToSnapshot" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetCopyTagsToSnapshot"></a>

```go
func ResetCopyTagsToSnapshot()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetDbClusterInstanceClass` <a name="ResetDbClusterInstanceClass" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetDbClusterInstanceClass"></a>

```go
func ResetDbClusterInstanceClass()
```

##### `ResetDbClusterParameterGroupName` <a name="ResetDbClusterParameterGroupName" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetDbClusterParameterGroupName"></a>

```go
func ResetDbClusterParameterGroupName()
```

##### `ResetDbInstanceParameterGroupName` <a name="ResetDbInstanceParameterGroupName" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetDbInstanceParameterGroupName"></a>

```go
func ResetDbInstanceParameterGroupName()
```

##### `ResetDbSubnetGroupName` <a name="ResetDbSubnetGroupName" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetDbSubnetGroupName"></a>

```go
func ResetDbSubnetGroupName()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetDeletionProtection"></a>

```go
func ResetDeletionProtection()
```

##### `ResetEnabledCloudwatchLogsExports` <a name="ResetEnabledCloudwatchLogsExports" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetEnabledCloudwatchLogsExports"></a>

```go
func ResetEnabledCloudwatchLogsExports()
```

##### `ResetEnableGlobalWriteForwarding` <a name="ResetEnableGlobalWriteForwarding" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetEnableGlobalWriteForwarding"></a>

```go
func ResetEnableGlobalWriteForwarding()
```

##### `ResetEnableHttpEndpoint` <a name="ResetEnableHttpEndpoint" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetEnableHttpEndpoint"></a>

```go
func ResetEnableHttpEndpoint()
```

##### `ResetEngine` <a name="ResetEngine" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetEngine"></a>

```go
func ResetEngine()
```

##### `ResetEngineMode` <a name="ResetEngineMode" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetEngineMode"></a>

```go
func ResetEngineMode()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetEngineVersion"></a>

```go
func ResetEngineVersion()
```

##### `ResetFinalSnapshotIdentifier` <a name="ResetFinalSnapshotIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetFinalSnapshotIdentifier"></a>

```go
func ResetFinalSnapshotIdentifier()
```

##### `ResetGlobalClusterIdentifier` <a name="ResetGlobalClusterIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetGlobalClusterIdentifier"></a>

```go
func ResetGlobalClusterIdentifier()
```

##### `ResetIamDatabaseAuthenticationEnabled` <a name="ResetIamDatabaseAuthenticationEnabled" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetIamDatabaseAuthenticationEnabled"></a>

```go
func ResetIamDatabaseAuthenticationEnabled()
```

##### `ResetIamRoles` <a name="ResetIamRoles" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetIamRoles"></a>

```go
func ResetIamRoles()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetIops"></a>

```go
func ResetIops()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetManageMasterUserPassword` <a name="ResetManageMasterUserPassword" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetManageMasterUserPassword"></a>

```go
func ResetManageMasterUserPassword()
```

##### `ResetMasterPassword` <a name="ResetMasterPassword" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetMasterPassword"></a>

```go
func ResetMasterPassword()
```

##### `ResetMasterUsername` <a name="ResetMasterUsername" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetMasterUsername"></a>

```go
func ResetMasterUsername()
```

##### `ResetMasterUserSecretKmsKeyId` <a name="ResetMasterUserSecretKmsKeyId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetMasterUserSecretKmsKeyId"></a>

```go
func ResetMasterUserSecretKmsKeyId()
```

##### `ResetNetworkType` <a name="ResetNetworkType" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetNetworkType"></a>

```go
func ResetNetworkType()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPreferredBackupWindow` <a name="ResetPreferredBackupWindow" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetPreferredBackupWindow"></a>

```go
func ResetPreferredBackupWindow()
```

##### `ResetPreferredMaintenanceWindow` <a name="ResetPreferredMaintenanceWindow" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetPreferredMaintenanceWindow"></a>

```go
func ResetPreferredMaintenanceWindow()
```

##### `ResetReplicationSourceIdentifier` <a name="ResetReplicationSourceIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetReplicationSourceIdentifier"></a>

```go
func ResetReplicationSourceIdentifier()
```

##### `ResetRestoreToPointInTime` <a name="ResetRestoreToPointInTime" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetRestoreToPointInTime"></a>

```go
func ResetRestoreToPointInTime()
```

##### `ResetS3Import` <a name="ResetS3Import" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetS3Import"></a>

```go
func ResetS3Import()
```

##### `ResetScalingConfiguration` <a name="ResetScalingConfiguration" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetScalingConfiguration"></a>

```go
func ResetScalingConfiguration()
```

##### `ResetServerlessv2ScalingConfiguration` <a name="ResetServerlessv2ScalingConfiguration" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetServerlessv2ScalingConfiguration"></a>

```go
func ResetServerlessv2ScalingConfiguration()
```

##### `ResetSkipFinalSnapshot` <a name="ResetSkipFinalSnapshot" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetSkipFinalSnapshot"></a>

```go
func ResetSkipFinalSnapshot()
```

##### `ResetSnapshotIdentifier` <a name="ResetSnapshotIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetSnapshotIdentifier"></a>

```go
func ResetSnapshotIdentifier()
```

##### `ResetSourceRegion` <a name="ResetSourceRegion" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetSourceRegion"></a>

```go
func ResetSourceRegion()
```

##### `ResetStorageEncrypted` <a name="ResetStorageEncrypted" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetStorageEncrypted"></a>

```go
func ResetStorageEncrypted()
```

##### `ResetStorageType` <a name="ResetStorageType" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetStorageType"></a>

```go
func ResetStorageType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktf/provider-aws.rdsCluster.RdsCluster.resetVpcSecurityGroupIds"></a>

```go
func ResetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.rdsCluster.RdsCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/rdscluster"

rdscluster.RdsCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsCluster.RdsCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.rdsCluster.RdsCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/rdscluster"

rdscluster.RdsCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsCluster.RdsCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.rdsCluster.RdsCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/rdscluster"

rdscluster.RdsCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsCluster.RdsCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterResourceId">ClusterResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineVersionActual">EngineVersionActual</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.hostedZoneId">HostedZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterUserSecret">MasterUserSecret</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList">RdsClusterMasterUserSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.readerEndpoint">ReaderEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.restoreToPointInTime">RestoreToPointInTime</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference">RdsClusterRestoreToPointInTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.s3Import">S3Import</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference">RdsClusterS3ImportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.scalingConfiguration">ScalingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference">RdsClusterScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.serverlessv2ScalingConfiguration">Serverlessv2ScalingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference">RdsClusterServerlessv2ScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference">RdsClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.allocatedStorageInput">AllocatedStorageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.allowMajorVersionUpgradeInput">AllowMajorVersionUpgradeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.applyImmediatelyInput">ApplyImmediatelyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.availabilityZonesInput">AvailabilityZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.backtrackWindowInput">BacktrackWindowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.backupRetentionPeriodInput">BackupRetentionPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterIdentifierInput">ClusterIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterIdentifierPrefixInput">ClusterIdentifierPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterMembersInput">ClusterMembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.copyTagsToSnapshotInput">CopyTagsToSnapshotInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbClusterInstanceClassInput">DbClusterInstanceClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbClusterParameterGroupNameInput">DbClusterParameterGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbInstanceParameterGroupNameInput">DbInstanceParameterGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbSubnetGroupNameInput">DbSubnetGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.enabledCloudwatchLogsExportsInput">EnabledCloudwatchLogsExportsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.enableGlobalWriteForwardingInput">EnableGlobalWriteForwardingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.enableHttpEndpointInput">EnableHttpEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineInput">EngineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineModeInput">EngineModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineVersionInput">EngineVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.finalSnapshotIdentifierInput">FinalSnapshotIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.globalClusterIdentifierInput">GlobalClusterIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.iamDatabaseAuthenticationEnabledInput">IamDatabaseAuthenticationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.iamRolesInput">IamRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.iopsInput">IopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.manageMasterUserPasswordInput">ManageMasterUserPasswordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterPasswordInput">MasterPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterUsernameInput">MasterUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterUserSecretKmsKeyIdInput">MasterUserSecretKmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.networkTypeInput">NetworkTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.preferredBackupWindowInput">PreferredBackupWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.preferredMaintenanceWindowInput">PreferredMaintenanceWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.replicationSourceIdentifierInput">ReplicationSourceIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.restoreToPointInTimeInput">RestoreToPointInTimeInput</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime">RdsClusterRestoreToPointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.s3ImportInput">S3ImportInput</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import">RdsClusterS3Import</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.scalingConfigurationInput">ScalingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration">RdsClusterScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.serverlessv2ScalingConfigurationInput">Serverlessv2ScalingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration">RdsClusterServerlessv2ScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.skipFinalSnapshotInput">SkipFinalSnapshotInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.snapshotIdentifierInput">SnapshotIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.sourceRegionInput">SourceRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.storageEncryptedInput">StorageEncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.storageTypeInput">StorageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.allocatedStorage">AllocatedStorage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.allowMajorVersionUpgrade">AllowMajorVersionUpgrade</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.applyImmediately">ApplyImmediately</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.backtrackWindow">BacktrackWindow</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.backupRetentionPeriod">BackupRetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterIdentifierPrefix">ClusterIdentifierPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterMembers">ClusterMembers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.copyTagsToSnapshot">CopyTagsToSnapshot</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbClusterInstanceClass">DbClusterInstanceClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbClusterParameterGroupName">DbClusterParameterGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbInstanceParameterGroupName">DbInstanceParameterGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbSubnetGroupName">DbSubnetGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.enabledCloudwatchLogsExports">EnabledCloudwatchLogsExports</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.enableGlobalWriteForwarding">EnableGlobalWriteForwarding</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.enableHttpEndpoint">EnableHttpEndpoint</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineMode">EngineMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.finalSnapshotIdentifier">FinalSnapshotIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.globalClusterIdentifier">GlobalClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.iamDatabaseAuthenticationEnabled">IamDatabaseAuthenticationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.iamRoles">IamRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.manageMasterUserPassword">ManageMasterUserPassword</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterPassword">MasterPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterUsername">MasterUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterUserSecretKmsKeyId">MasterUserSecretKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.networkType">NetworkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.preferredBackupWindow">PreferredBackupWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.replicationSourceIdentifier">ReplicationSourceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.skipFinalSnapshot">SkipFinalSnapshot</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.snapshotIdentifier">SnapshotIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.sourceRegion">SourceRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.storageEncrypted">StorageEncrypted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.storageType">StorageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ClusterResourceId`<sup>Required</sup> <a name="ClusterResourceId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterResourceId"></a>

```go
func ClusterResourceId() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `EngineVersionActual`<sup>Required</sup> <a name="EngineVersionActual" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineVersionActual"></a>

```go
func EngineVersionActual() *string
```

- *Type:* *string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.hostedZoneId"></a>

```go
func HostedZoneId() *string
```

- *Type:* *string

---

##### `MasterUserSecret`<sup>Required</sup> <a name="MasterUserSecret" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterUserSecret"></a>

```go
func MasterUserSecret() RdsClusterMasterUserSecretList
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList">RdsClusterMasterUserSecretList</a>

---

##### `ReaderEndpoint`<sup>Required</sup> <a name="ReaderEndpoint" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.readerEndpoint"></a>

```go
func ReaderEndpoint() *string
```

- *Type:* *string

---

##### `RestoreToPointInTime`<sup>Required</sup> <a name="RestoreToPointInTime" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.restoreToPointInTime"></a>

```go
func RestoreToPointInTime() RdsClusterRestoreToPointInTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference">RdsClusterRestoreToPointInTimeOutputReference</a>

---

##### `S3Import`<sup>Required</sup> <a name="S3Import" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.s3Import"></a>

```go
func S3Import() RdsClusterS3ImportOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference">RdsClusterS3ImportOutputReference</a>

---

##### `ScalingConfiguration`<sup>Required</sup> <a name="ScalingConfiguration" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.scalingConfiguration"></a>

```go
func ScalingConfiguration() RdsClusterScalingConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference">RdsClusterScalingConfigurationOutputReference</a>

---

##### `Serverlessv2ScalingConfiguration`<sup>Required</sup> <a name="Serverlessv2ScalingConfiguration" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.serverlessv2ScalingConfiguration"></a>

```go
func Serverlessv2ScalingConfiguration() RdsClusterServerlessv2ScalingConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference">RdsClusterServerlessv2ScalingConfigurationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.timeouts"></a>

```go
func Timeouts() RdsClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference">RdsClusterTimeoutsOutputReference</a>

---

##### `AllocatedStorageInput`<sup>Optional</sup> <a name="AllocatedStorageInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.allocatedStorageInput"></a>

```go
func AllocatedStorageInput() *f64
```

- *Type:* *f64

---

##### `AllowMajorVersionUpgradeInput`<sup>Optional</sup> <a name="AllowMajorVersionUpgradeInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.allowMajorVersionUpgradeInput"></a>

```go
func AllowMajorVersionUpgradeInput() interface{}
```

- *Type:* interface{}

---

##### `ApplyImmediatelyInput`<sup>Optional</sup> <a name="ApplyImmediatelyInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.applyImmediatelyInput"></a>

```go
func ApplyImmediatelyInput() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZonesInput`<sup>Optional</sup> <a name="AvailabilityZonesInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.availabilityZonesInput"></a>

```go
func AvailabilityZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BacktrackWindowInput`<sup>Optional</sup> <a name="BacktrackWindowInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.backtrackWindowInput"></a>

```go
func BacktrackWindowInput() *f64
```

- *Type:* *f64

---

##### `BackupRetentionPeriodInput`<sup>Optional</sup> <a name="BackupRetentionPeriodInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.backupRetentionPeriodInput"></a>

```go
func BackupRetentionPeriodInput() *f64
```

- *Type:* *f64

---

##### `ClusterIdentifierInput`<sup>Optional</sup> <a name="ClusterIdentifierInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterIdentifierInput"></a>

```go
func ClusterIdentifierInput() *string
```

- *Type:* *string

---

##### `ClusterIdentifierPrefixInput`<sup>Optional</sup> <a name="ClusterIdentifierPrefixInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterIdentifierPrefixInput"></a>

```go
func ClusterIdentifierPrefixInput() *string
```

- *Type:* *string

---

##### `ClusterMembersInput`<sup>Optional</sup> <a name="ClusterMembersInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterMembersInput"></a>

```go
func ClusterMembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `CopyTagsToSnapshotInput`<sup>Optional</sup> <a name="CopyTagsToSnapshotInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.copyTagsToSnapshotInput"></a>

```go
func CopyTagsToSnapshotInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `DbClusterInstanceClassInput`<sup>Optional</sup> <a name="DbClusterInstanceClassInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbClusterInstanceClassInput"></a>

```go
func DbClusterInstanceClassInput() *string
```

- *Type:* *string

---

##### `DbClusterParameterGroupNameInput`<sup>Optional</sup> <a name="DbClusterParameterGroupNameInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbClusterParameterGroupNameInput"></a>

```go
func DbClusterParameterGroupNameInput() *string
```

- *Type:* *string

---

##### `DbInstanceParameterGroupNameInput`<sup>Optional</sup> <a name="DbInstanceParameterGroupNameInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbInstanceParameterGroupNameInput"></a>

```go
func DbInstanceParameterGroupNameInput() *string
```

- *Type:* *string

---

##### `DbSubnetGroupNameInput`<sup>Optional</sup> <a name="DbSubnetGroupNameInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbSubnetGroupNameInput"></a>

```go
func DbSubnetGroupNameInput() *string
```

- *Type:* *string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.deletionProtectionInput"></a>

```go
func DeletionProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledCloudwatchLogsExportsInput`<sup>Optional</sup> <a name="EnabledCloudwatchLogsExportsInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.enabledCloudwatchLogsExportsInput"></a>

```go
func EnabledCloudwatchLogsExportsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnableGlobalWriteForwardingInput`<sup>Optional</sup> <a name="EnableGlobalWriteForwardingInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.enableGlobalWriteForwardingInput"></a>

```go
func EnableGlobalWriteForwardingInput() interface{}
```

- *Type:* interface{}

---

##### `EnableHttpEndpointInput`<sup>Optional</sup> <a name="EnableHttpEndpointInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.enableHttpEndpointInput"></a>

```go
func EnableHttpEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineInput"></a>

```go
func EngineInput() *string
```

- *Type:* *string

---

##### `EngineModeInput`<sup>Optional</sup> <a name="EngineModeInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineModeInput"></a>

```go
func EngineModeInput() *string
```

- *Type:* *string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineVersionInput"></a>

```go
func EngineVersionInput() *string
```

- *Type:* *string

---

##### `FinalSnapshotIdentifierInput`<sup>Optional</sup> <a name="FinalSnapshotIdentifierInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.finalSnapshotIdentifierInput"></a>

```go
func FinalSnapshotIdentifierInput() *string
```

- *Type:* *string

---

##### `GlobalClusterIdentifierInput`<sup>Optional</sup> <a name="GlobalClusterIdentifierInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.globalClusterIdentifierInput"></a>

```go
func GlobalClusterIdentifierInput() *string
```

- *Type:* *string

---

##### `IamDatabaseAuthenticationEnabledInput`<sup>Optional</sup> <a name="IamDatabaseAuthenticationEnabledInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.iamDatabaseAuthenticationEnabledInput"></a>

```go
func IamDatabaseAuthenticationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IamRolesInput`<sup>Optional</sup> <a name="IamRolesInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.iamRolesInput"></a>

```go
func IamRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.iopsInput"></a>

```go
func IopsInput() *f64
```

- *Type:* *f64

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `ManageMasterUserPasswordInput`<sup>Optional</sup> <a name="ManageMasterUserPasswordInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.manageMasterUserPasswordInput"></a>

```go
func ManageMasterUserPasswordInput() interface{}
```

- *Type:* interface{}

---

##### `MasterPasswordInput`<sup>Optional</sup> <a name="MasterPasswordInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterPasswordInput"></a>

```go
func MasterPasswordInput() *string
```

- *Type:* *string

---

##### `MasterUsernameInput`<sup>Optional</sup> <a name="MasterUsernameInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterUsernameInput"></a>

```go
func MasterUsernameInput() *string
```

- *Type:* *string

---

##### `MasterUserSecretKmsKeyIdInput`<sup>Optional</sup> <a name="MasterUserSecretKmsKeyIdInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterUserSecretKmsKeyIdInput"></a>

```go
func MasterUserSecretKmsKeyIdInput() *string
```

- *Type:* *string

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.networkTypeInput"></a>

```go
func NetworkTypeInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PreferredBackupWindowInput`<sup>Optional</sup> <a name="PreferredBackupWindowInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.preferredBackupWindowInput"></a>

```go
func PreferredBackupWindowInput() *string
```

- *Type:* *string

---

##### `PreferredMaintenanceWindowInput`<sup>Optional</sup> <a name="PreferredMaintenanceWindowInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.preferredMaintenanceWindowInput"></a>

```go
func PreferredMaintenanceWindowInput() *string
```

- *Type:* *string

---

##### `ReplicationSourceIdentifierInput`<sup>Optional</sup> <a name="ReplicationSourceIdentifierInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.replicationSourceIdentifierInput"></a>

```go
func ReplicationSourceIdentifierInput() *string
```

- *Type:* *string

---

##### `RestoreToPointInTimeInput`<sup>Optional</sup> <a name="RestoreToPointInTimeInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.restoreToPointInTimeInput"></a>

```go
func RestoreToPointInTimeInput() RdsClusterRestoreToPointInTime
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime">RdsClusterRestoreToPointInTime</a>

---

##### `S3ImportInput`<sup>Optional</sup> <a name="S3ImportInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.s3ImportInput"></a>

```go
func S3ImportInput() RdsClusterS3Import
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import">RdsClusterS3Import</a>

---

##### `ScalingConfigurationInput`<sup>Optional</sup> <a name="ScalingConfigurationInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.scalingConfigurationInput"></a>

```go
func ScalingConfigurationInput() RdsClusterScalingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration">RdsClusterScalingConfiguration</a>

---

##### `Serverlessv2ScalingConfigurationInput`<sup>Optional</sup> <a name="Serverlessv2ScalingConfigurationInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.serverlessv2ScalingConfigurationInput"></a>

```go
func Serverlessv2ScalingConfigurationInput() RdsClusterServerlessv2ScalingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration">RdsClusterServerlessv2ScalingConfiguration</a>

---

##### `SkipFinalSnapshotInput`<sup>Optional</sup> <a name="SkipFinalSnapshotInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.skipFinalSnapshotInput"></a>

```go
func SkipFinalSnapshotInput() interface{}
```

- *Type:* interface{}

---

##### `SnapshotIdentifierInput`<sup>Optional</sup> <a name="SnapshotIdentifierInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.snapshotIdentifierInput"></a>

```go
func SnapshotIdentifierInput() *string
```

- *Type:* *string

---

##### `SourceRegionInput`<sup>Optional</sup> <a name="SourceRegionInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.sourceRegionInput"></a>

```go
func SourceRegionInput() *string
```

- *Type:* *string

---

##### `StorageEncryptedInput`<sup>Optional</sup> <a name="StorageEncryptedInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.storageEncryptedInput"></a>

```go
func StorageEncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.storageTypeInput"></a>

```go
func StorageTypeInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.vpcSecurityGroupIdsInput"></a>

```go
func VpcSecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllocatedStorage`<sup>Required</sup> <a name="AllocatedStorage" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.allocatedStorage"></a>

```go
func AllocatedStorage() *f64
```

- *Type:* *f64

---

##### `AllowMajorVersionUpgrade`<sup>Required</sup> <a name="AllowMajorVersionUpgrade" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.allowMajorVersionUpgrade"></a>

```go
func AllowMajorVersionUpgrade() interface{}
```

- *Type:* interface{}

---

##### `ApplyImmediately`<sup>Required</sup> <a name="ApplyImmediately" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.applyImmediately"></a>

```go
func ApplyImmediately() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.availabilityZones"></a>

```go
func AvailabilityZones() *[]*string
```

- *Type:* *[]*string

---

##### `BacktrackWindow`<sup>Required</sup> <a name="BacktrackWindow" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.backtrackWindow"></a>

```go
func BacktrackWindow() *f64
```

- *Type:* *f64

---

##### `BackupRetentionPeriod`<sup>Required</sup> <a name="BackupRetentionPeriod" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.backupRetentionPeriod"></a>

```go
func BackupRetentionPeriod() *f64
```

- *Type:* *f64

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterIdentifier"></a>

```go
func ClusterIdentifier() *string
```

- *Type:* *string

---

##### `ClusterIdentifierPrefix`<sup>Required</sup> <a name="ClusterIdentifierPrefix" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterIdentifierPrefix"></a>

```go
func ClusterIdentifierPrefix() *string
```

- *Type:* *string

---

##### `ClusterMembers`<sup>Required</sup> <a name="ClusterMembers" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.clusterMembers"></a>

```go
func ClusterMembers() *[]*string
```

- *Type:* *[]*string

---

##### `CopyTagsToSnapshot`<sup>Required</sup> <a name="CopyTagsToSnapshot" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.copyTagsToSnapshot"></a>

```go
func CopyTagsToSnapshot() interface{}
```

- *Type:* interface{}

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `DbClusterInstanceClass`<sup>Required</sup> <a name="DbClusterInstanceClass" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbClusterInstanceClass"></a>

```go
func DbClusterInstanceClass() *string
```

- *Type:* *string

---

##### `DbClusterParameterGroupName`<sup>Required</sup> <a name="DbClusterParameterGroupName" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbClusterParameterGroupName"></a>

```go
func DbClusterParameterGroupName() *string
```

- *Type:* *string

---

##### `DbInstanceParameterGroupName`<sup>Required</sup> <a name="DbInstanceParameterGroupName" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbInstanceParameterGroupName"></a>

```go
func DbInstanceParameterGroupName() *string
```

- *Type:* *string

---

##### `DbSubnetGroupName`<sup>Required</sup> <a name="DbSubnetGroupName" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.dbSubnetGroupName"></a>

```go
func DbSubnetGroupName() *string
```

- *Type:* *string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.deletionProtection"></a>

```go
func DeletionProtection() interface{}
```

- *Type:* interface{}

---

##### `EnabledCloudwatchLogsExports`<sup>Required</sup> <a name="EnabledCloudwatchLogsExports" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.enabledCloudwatchLogsExports"></a>

```go
func EnabledCloudwatchLogsExports() *[]*string
```

- *Type:* *[]*string

---

##### `EnableGlobalWriteForwarding`<sup>Required</sup> <a name="EnableGlobalWriteForwarding" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.enableGlobalWriteForwarding"></a>

```go
func EnableGlobalWriteForwarding() interface{}
```

- *Type:* interface{}

---

##### `EnableHttpEndpoint`<sup>Required</sup> <a name="EnableHttpEndpoint" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.enableHttpEndpoint"></a>

```go
func EnableHttpEndpoint() interface{}
```

- *Type:* interface{}

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `EngineMode`<sup>Required</sup> <a name="EngineMode" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineMode"></a>

```go
func EngineMode() *string
```

- *Type:* *string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `FinalSnapshotIdentifier`<sup>Required</sup> <a name="FinalSnapshotIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.finalSnapshotIdentifier"></a>

```go
func FinalSnapshotIdentifier() *string
```

- *Type:* *string

---

##### `GlobalClusterIdentifier`<sup>Required</sup> <a name="GlobalClusterIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.globalClusterIdentifier"></a>

```go
func GlobalClusterIdentifier() *string
```

- *Type:* *string

---

##### `IamDatabaseAuthenticationEnabled`<sup>Required</sup> <a name="IamDatabaseAuthenticationEnabled" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.iamDatabaseAuthenticationEnabled"></a>

```go
func IamDatabaseAuthenticationEnabled() interface{}
```

- *Type:* interface{}

---

##### `IamRoles`<sup>Required</sup> <a name="IamRoles" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.iamRoles"></a>

```go
func IamRoles() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `ManageMasterUserPassword`<sup>Required</sup> <a name="ManageMasterUserPassword" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.manageMasterUserPassword"></a>

```go
func ManageMasterUserPassword() interface{}
```

- *Type:* interface{}

---

##### `MasterPassword`<sup>Required</sup> <a name="MasterPassword" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterPassword"></a>

```go
func MasterPassword() *string
```

- *Type:* *string

---

##### `MasterUsername`<sup>Required</sup> <a name="MasterUsername" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterUsername"></a>

```go
func MasterUsername() *string
```

- *Type:* *string

---

##### `MasterUserSecretKmsKeyId`<sup>Required</sup> <a name="MasterUserSecretKmsKeyId" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.masterUserSecretKmsKeyId"></a>

```go
func MasterUserSecretKmsKeyId() *string
```

- *Type:* *string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.networkType"></a>

```go
func NetworkType() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PreferredBackupWindow`<sup>Required</sup> <a name="PreferredBackupWindow" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.preferredBackupWindow"></a>

```go
func PreferredBackupWindow() *string
```

- *Type:* *string

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.preferredMaintenanceWindow"></a>

```go
func PreferredMaintenanceWindow() *string
```

- *Type:* *string

---

##### `ReplicationSourceIdentifier`<sup>Required</sup> <a name="ReplicationSourceIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.replicationSourceIdentifier"></a>

```go
func ReplicationSourceIdentifier() *string
```

- *Type:* *string

---

##### `SkipFinalSnapshot`<sup>Required</sup> <a name="SkipFinalSnapshot" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.skipFinalSnapshot"></a>

```go
func SkipFinalSnapshot() interface{}
```

- *Type:* interface{}

---

##### `SnapshotIdentifier`<sup>Required</sup> <a name="SnapshotIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.snapshotIdentifier"></a>

```go
func SnapshotIdentifier() *string
```

- *Type:* *string

---

##### `SourceRegion`<sup>Required</sup> <a name="SourceRegion" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.sourceRegion"></a>

```go
func SourceRegion() *string
```

- *Type:* *string

---

##### `StorageEncrypted`<sup>Required</sup> <a name="StorageEncrypted" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.storageEncrypted"></a>

```go
func StorageEncrypted() interface{}
```

- *Type:* interface{}

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.storageType"></a>

```go
func StorageType() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.vpcSecurityGroupIds"></a>

```go
func VpcSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.rdsCluster.RdsCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsClusterConfig <a name="RdsClusterConfig" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/rdscluster"

&rdscluster.RdsClusterConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AllocatedStorage: *f64,
	AllowMajorVersionUpgrade: interface{},
	ApplyImmediately: interface{},
	AvailabilityZones: *[]*string,
	BacktrackWindow: *f64,
	BackupRetentionPeriod: *f64,
	ClusterIdentifier: *string,
	ClusterIdentifierPrefix: *string,
	ClusterMembers: *[]*string,
	CopyTagsToSnapshot: interface{},
	DatabaseName: *string,
	DbClusterInstanceClass: *string,
	DbClusterParameterGroupName: *string,
	DbInstanceParameterGroupName: *string,
	DbSubnetGroupName: *string,
	DeletionProtection: interface{},
	EnabledCloudwatchLogsExports: *[]*string,
	EnableGlobalWriteForwarding: interface{},
	EnableHttpEndpoint: interface{},
	Engine: *string,
	EngineMode: *string,
	EngineVersion: *string,
	FinalSnapshotIdentifier: *string,
	GlobalClusterIdentifier: *string,
	IamDatabaseAuthenticationEnabled: interface{},
	IamRoles: *[]*string,
	Id: *string,
	Iops: *f64,
	KmsKeyId: *string,
	ManageMasterUserPassword: interface{},
	MasterPassword: *string,
	MasterUsername: *string,
	MasterUserSecretKmsKeyId: *string,
	NetworkType: *string,
	Port: *f64,
	PreferredBackupWindow: *string,
	PreferredMaintenanceWindow: *string,
	ReplicationSourceIdentifier: *string,
	RestoreToPointInTime: github.com/cdktf/cdktf-provider-aws-go/aws.rdsCluster.RdsClusterRestoreToPointInTime,
	S3Import: github.com/cdktf/cdktf-provider-aws-go/aws.rdsCluster.RdsClusterS3Import,
	ScalingConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.rdsCluster.RdsClusterScalingConfiguration,
	Serverlessv2ScalingConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration,
	SkipFinalSnapshot: interface{},
	SnapshotIdentifier: *string,
	SourceRegion: *string,
	StorageEncrypted: interface{},
	StorageType: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.rdsCluster.RdsClusterTimeouts,
	VpcSecurityGroupIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.allocatedStorage">AllocatedStorage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#allocated_storage RdsCluster#allocated_storage}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.allowMajorVersionUpgrade">AllowMajorVersionUpgrade</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#allow_major_version_upgrade RdsCluster#allow_major_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.applyImmediately">ApplyImmediately</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#apply_immediately RdsCluster#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#availability_zones RdsCluster#availability_zones}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.backtrackWindow">BacktrackWindow</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#backtrack_window RdsCluster#backtrack_window}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.backupRetentionPeriod">BackupRetentionPeriod</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#backup_retention_period RdsCluster#backup_retention_period}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#cluster_identifier RdsCluster#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.clusterIdentifierPrefix">ClusterIdentifierPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#cluster_identifier_prefix RdsCluster#cluster_identifier_prefix}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.clusterMembers">ClusterMembers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#cluster_members RdsCluster#cluster_members}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.copyTagsToSnapshot">CopyTagsToSnapshot</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#copy_tags_to_snapshot RdsCluster#copy_tags_to_snapshot}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#database_name RdsCluster#database_name}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.dbClusterInstanceClass">DbClusterInstanceClass</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#db_cluster_instance_class RdsCluster#db_cluster_instance_class}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.dbClusterParameterGroupName">DbClusterParameterGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#db_cluster_parameter_group_name RdsCluster#db_cluster_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.dbInstanceParameterGroupName">DbInstanceParameterGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#db_instance_parameter_group_name RdsCluster#db_instance_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.dbSubnetGroupName">DbSubnetGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#db_subnet_group_name RdsCluster#db_subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#deletion_protection RdsCluster#deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.enabledCloudwatchLogsExports">EnabledCloudwatchLogsExports</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#enabled_cloudwatch_logs_exports RdsCluster#enabled_cloudwatch_logs_exports}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.enableGlobalWriteForwarding">EnableGlobalWriteForwarding</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#enable_global_write_forwarding RdsCluster#enable_global_write_forwarding}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.enableHttpEndpoint">EnableHttpEndpoint</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#enable_http_endpoint RdsCluster#enable_http_endpoint}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.engine">Engine</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#engine RdsCluster#engine}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.engineMode">EngineMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#engine_mode RdsCluster#engine_mode}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#engine_version RdsCluster#engine_version}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.finalSnapshotIdentifier">FinalSnapshotIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#final_snapshot_identifier RdsCluster#final_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.globalClusterIdentifier">GlobalClusterIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#global_cluster_identifier RdsCluster#global_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.iamDatabaseAuthenticationEnabled">IamDatabaseAuthenticationEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#iam_database_authentication_enabled RdsCluster#iam_database_authentication_enabled}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.iamRoles">IamRoles</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#iam_roles RdsCluster#iam_roles}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#id RdsCluster#id}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.iops">Iops</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#iops RdsCluster#iops}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#kms_key_id RdsCluster#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.manageMasterUserPassword">ManageMasterUserPassword</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#manage_master_user_password RdsCluster#manage_master_user_password}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.masterPassword">MasterPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#master_password RdsCluster#master_password}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.masterUsername">MasterUsername</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#master_username RdsCluster#master_username}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.masterUserSecretKmsKeyId">MasterUserSecretKmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#master_user_secret_kms_key_id RdsCluster#master_user_secret_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.networkType">NetworkType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#network_type RdsCluster#network_type}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#port RdsCluster#port}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.preferredBackupWindow">PreferredBackupWindow</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#preferred_backup_window RdsCluster#preferred_backup_window}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#preferred_maintenance_window RdsCluster#preferred_maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.replicationSourceIdentifier">ReplicationSourceIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#replication_source_identifier RdsCluster#replication_source_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.restoreToPointInTime">RestoreToPointInTime</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime">RdsClusterRestoreToPointInTime</a></code> | restore_to_point_in_time block. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.s3Import">S3Import</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import">RdsClusterS3Import</a></code> | s3_import block. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.scalingConfiguration">ScalingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration">RdsClusterScalingConfiguration</a></code> | scaling_configuration block. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.serverlessv2ScalingConfiguration">Serverlessv2ScalingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration">RdsClusterServerlessv2ScalingConfiguration</a></code> | serverlessv2_scaling_configuration block. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.skipFinalSnapshot">SkipFinalSnapshot</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#skip_final_snapshot RdsCluster#skip_final_snapshot}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.snapshotIdentifier">SnapshotIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#snapshot_identifier RdsCluster#snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.sourceRegion">SourceRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#source_region RdsCluster#source_region}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.storageEncrypted">StorageEncrypted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#storage_encrypted RdsCluster#storage_encrypted}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.storageType">StorageType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#storage_type RdsCluster#storage_type}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#tags RdsCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#tags_all RdsCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts">RdsClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#vpc_security_group_ids RdsCluster#vpc_security_group_ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllocatedStorage`<sup>Optional</sup> <a name="AllocatedStorage" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.allocatedStorage"></a>

```go
AllocatedStorage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#allocated_storage RdsCluster#allocated_storage}.

---

##### `AllowMajorVersionUpgrade`<sup>Optional</sup> <a name="AllowMajorVersionUpgrade" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.allowMajorVersionUpgrade"></a>

```go
AllowMajorVersionUpgrade interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#allow_major_version_upgrade RdsCluster#allow_major_version_upgrade}.

---

##### `ApplyImmediately`<sup>Optional</sup> <a name="ApplyImmediately" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.applyImmediately"></a>

```go
ApplyImmediately interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#apply_immediately RdsCluster#apply_immediately}.

---

##### `AvailabilityZones`<sup>Optional</sup> <a name="AvailabilityZones" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.availabilityZones"></a>

```go
AvailabilityZones *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#availability_zones RdsCluster#availability_zones}.

---

##### `BacktrackWindow`<sup>Optional</sup> <a name="BacktrackWindow" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.backtrackWindow"></a>

```go
BacktrackWindow *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#backtrack_window RdsCluster#backtrack_window}.

---

##### `BackupRetentionPeriod`<sup>Optional</sup> <a name="BackupRetentionPeriod" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.backupRetentionPeriod"></a>

```go
BackupRetentionPeriod *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#backup_retention_period RdsCluster#backup_retention_period}.

---

##### `ClusterIdentifier`<sup>Optional</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.clusterIdentifier"></a>

```go
ClusterIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#cluster_identifier RdsCluster#cluster_identifier}.

---

##### `ClusterIdentifierPrefix`<sup>Optional</sup> <a name="ClusterIdentifierPrefix" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.clusterIdentifierPrefix"></a>

```go
ClusterIdentifierPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#cluster_identifier_prefix RdsCluster#cluster_identifier_prefix}.

---

##### `ClusterMembers`<sup>Optional</sup> <a name="ClusterMembers" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.clusterMembers"></a>

```go
ClusterMembers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#cluster_members RdsCluster#cluster_members}.

---

##### `CopyTagsToSnapshot`<sup>Optional</sup> <a name="CopyTagsToSnapshot" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.copyTagsToSnapshot"></a>

```go
CopyTagsToSnapshot interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#copy_tags_to_snapshot RdsCluster#copy_tags_to_snapshot}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#database_name RdsCluster#database_name}.

---

##### `DbClusterInstanceClass`<sup>Optional</sup> <a name="DbClusterInstanceClass" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.dbClusterInstanceClass"></a>

```go
DbClusterInstanceClass *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#db_cluster_instance_class RdsCluster#db_cluster_instance_class}.

---

##### `DbClusterParameterGroupName`<sup>Optional</sup> <a name="DbClusterParameterGroupName" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.dbClusterParameterGroupName"></a>

```go
DbClusterParameterGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#db_cluster_parameter_group_name RdsCluster#db_cluster_parameter_group_name}.

---

##### `DbInstanceParameterGroupName`<sup>Optional</sup> <a name="DbInstanceParameterGroupName" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.dbInstanceParameterGroupName"></a>

```go
DbInstanceParameterGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#db_instance_parameter_group_name RdsCluster#db_instance_parameter_group_name}.

---

##### `DbSubnetGroupName`<sup>Optional</sup> <a name="DbSubnetGroupName" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.dbSubnetGroupName"></a>

```go
DbSubnetGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#db_subnet_group_name RdsCluster#db_subnet_group_name}.

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.deletionProtection"></a>

```go
DeletionProtection interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#deletion_protection RdsCluster#deletion_protection}.

---

##### `EnabledCloudwatchLogsExports`<sup>Optional</sup> <a name="EnabledCloudwatchLogsExports" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.enabledCloudwatchLogsExports"></a>

```go
EnabledCloudwatchLogsExports *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#enabled_cloudwatch_logs_exports RdsCluster#enabled_cloudwatch_logs_exports}.

---

##### `EnableGlobalWriteForwarding`<sup>Optional</sup> <a name="EnableGlobalWriteForwarding" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.enableGlobalWriteForwarding"></a>

```go
EnableGlobalWriteForwarding interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#enable_global_write_forwarding RdsCluster#enable_global_write_forwarding}.

---

##### `EnableHttpEndpoint`<sup>Optional</sup> <a name="EnableHttpEndpoint" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.enableHttpEndpoint"></a>

```go
EnableHttpEndpoint interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#enable_http_endpoint RdsCluster#enable_http_endpoint}.

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.engine"></a>

```go
Engine *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#engine RdsCluster#engine}.

---

##### `EngineMode`<sup>Optional</sup> <a name="EngineMode" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.engineMode"></a>

```go
EngineMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#engine_mode RdsCluster#engine_mode}.

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.engineVersion"></a>

```go
EngineVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#engine_version RdsCluster#engine_version}.

---

##### `FinalSnapshotIdentifier`<sup>Optional</sup> <a name="FinalSnapshotIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.finalSnapshotIdentifier"></a>

```go
FinalSnapshotIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#final_snapshot_identifier RdsCluster#final_snapshot_identifier}.

---

##### `GlobalClusterIdentifier`<sup>Optional</sup> <a name="GlobalClusterIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.globalClusterIdentifier"></a>

```go
GlobalClusterIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#global_cluster_identifier RdsCluster#global_cluster_identifier}.

---

##### `IamDatabaseAuthenticationEnabled`<sup>Optional</sup> <a name="IamDatabaseAuthenticationEnabled" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.iamDatabaseAuthenticationEnabled"></a>

```go
IamDatabaseAuthenticationEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#iam_database_authentication_enabled RdsCluster#iam_database_authentication_enabled}.

---

##### `IamRoles`<sup>Optional</sup> <a name="IamRoles" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.iamRoles"></a>

```go
IamRoles *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#iam_roles RdsCluster#iam_roles}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#id RdsCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.iops"></a>

```go
Iops *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#iops RdsCluster#iops}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#kms_key_id RdsCluster#kms_key_id}.

---

##### `ManageMasterUserPassword`<sup>Optional</sup> <a name="ManageMasterUserPassword" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.manageMasterUserPassword"></a>

```go
ManageMasterUserPassword interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#manage_master_user_password RdsCluster#manage_master_user_password}.

---

##### `MasterPassword`<sup>Optional</sup> <a name="MasterPassword" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.masterPassword"></a>

```go
MasterPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#master_password RdsCluster#master_password}.

---

##### `MasterUsername`<sup>Optional</sup> <a name="MasterUsername" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.masterUsername"></a>

```go
MasterUsername *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#master_username RdsCluster#master_username}.

---

##### `MasterUserSecretKmsKeyId`<sup>Optional</sup> <a name="MasterUserSecretKmsKeyId" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.masterUserSecretKmsKeyId"></a>

```go
MasterUserSecretKmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#master_user_secret_kms_key_id RdsCluster#master_user_secret_kms_key_id}.

---

##### `NetworkType`<sup>Optional</sup> <a name="NetworkType" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.networkType"></a>

```go
NetworkType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#network_type RdsCluster#network_type}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#port RdsCluster#port}.

---

##### `PreferredBackupWindow`<sup>Optional</sup> <a name="PreferredBackupWindow" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.preferredBackupWindow"></a>

```go
PreferredBackupWindow *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#preferred_backup_window RdsCluster#preferred_backup_window}.

---

##### `PreferredMaintenanceWindow`<sup>Optional</sup> <a name="PreferredMaintenanceWindow" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.preferredMaintenanceWindow"></a>

```go
PreferredMaintenanceWindow *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#preferred_maintenance_window RdsCluster#preferred_maintenance_window}.

---

##### `ReplicationSourceIdentifier`<sup>Optional</sup> <a name="ReplicationSourceIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.replicationSourceIdentifier"></a>

```go
ReplicationSourceIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#replication_source_identifier RdsCluster#replication_source_identifier}.

---

##### `RestoreToPointInTime`<sup>Optional</sup> <a name="RestoreToPointInTime" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.restoreToPointInTime"></a>

```go
RestoreToPointInTime RdsClusterRestoreToPointInTime
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime">RdsClusterRestoreToPointInTime</a>

restore_to_point_in_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#restore_to_point_in_time RdsCluster#restore_to_point_in_time}

---

##### `S3Import`<sup>Optional</sup> <a name="S3Import" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.s3Import"></a>

```go
S3Import RdsClusterS3Import
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import">RdsClusterS3Import</a>

s3_import block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#s3_import RdsCluster#s3_import}

---

##### `ScalingConfiguration`<sup>Optional</sup> <a name="ScalingConfiguration" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.scalingConfiguration"></a>

```go
ScalingConfiguration RdsClusterScalingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration">RdsClusterScalingConfiguration</a>

scaling_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#scaling_configuration RdsCluster#scaling_configuration}

---

##### `Serverlessv2ScalingConfiguration`<sup>Optional</sup> <a name="Serverlessv2ScalingConfiguration" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.serverlessv2ScalingConfiguration"></a>

```go
Serverlessv2ScalingConfiguration RdsClusterServerlessv2ScalingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration">RdsClusterServerlessv2ScalingConfiguration</a>

serverlessv2_scaling_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#serverlessv2_scaling_configuration RdsCluster#serverlessv2_scaling_configuration}

---

##### `SkipFinalSnapshot`<sup>Optional</sup> <a name="SkipFinalSnapshot" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.skipFinalSnapshot"></a>

```go
SkipFinalSnapshot interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#skip_final_snapshot RdsCluster#skip_final_snapshot}.

---

##### `SnapshotIdentifier`<sup>Optional</sup> <a name="SnapshotIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.snapshotIdentifier"></a>

```go
SnapshotIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#snapshot_identifier RdsCluster#snapshot_identifier}.

---

##### `SourceRegion`<sup>Optional</sup> <a name="SourceRegion" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.sourceRegion"></a>

```go
SourceRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#source_region RdsCluster#source_region}.

---

##### `StorageEncrypted`<sup>Optional</sup> <a name="StorageEncrypted" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.storageEncrypted"></a>

```go
StorageEncrypted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#storage_encrypted RdsCluster#storage_encrypted}.

---

##### `StorageType`<sup>Optional</sup> <a name="StorageType" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.storageType"></a>

```go
StorageType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#storage_type RdsCluster#storage_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#tags RdsCluster#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#tags_all RdsCluster#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.timeouts"></a>

```go
Timeouts RdsClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts">RdsClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#timeouts RdsCluster#timeouts}

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.rdsCluster.RdsClusterConfig.property.vpcSecurityGroupIds"></a>

```go
VpcSecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#vpc_security_group_ids RdsCluster#vpc_security_group_ids}.

---

### RdsClusterMasterUserSecret <a name="RdsClusterMasterUserSecret" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecret.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/rdscluster"

&rdscluster.RdsClusterMasterUserSecret {

}
```


### RdsClusterRestoreToPointInTime <a name="RdsClusterRestoreToPointInTime" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/rdscluster"

&rdscluster.RdsClusterRestoreToPointInTime {
	SourceClusterIdentifier: *string,
	RestoreToTime: *string,
	RestoreType: *string,
	UseLatestRestorableTime: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime.property.sourceClusterIdentifier">SourceClusterIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#source_cluster_identifier RdsCluster#source_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime.property.restoreToTime">RestoreToTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#restore_to_time RdsCluster#restore_to_time}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime.property.restoreType">RestoreType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#restore_type RdsCluster#restore_type}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime.property.useLatestRestorableTime">UseLatestRestorableTime</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#use_latest_restorable_time RdsCluster#use_latest_restorable_time}. |

---

##### `SourceClusterIdentifier`<sup>Required</sup> <a name="SourceClusterIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime.property.sourceClusterIdentifier"></a>

```go
SourceClusterIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#source_cluster_identifier RdsCluster#source_cluster_identifier}.

---

##### `RestoreToTime`<sup>Optional</sup> <a name="RestoreToTime" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime.property.restoreToTime"></a>

```go
RestoreToTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#restore_to_time RdsCluster#restore_to_time}.

---

##### `RestoreType`<sup>Optional</sup> <a name="RestoreType" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime.property.restoreType"></a>

```go
RestoreType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#restore_type RdsCluster#restore_type}.

---

##### `UseLatestRestorableTime`<sup>Optional</sup> <a name="UseLatestRestorableTime" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime.property.useLatestRestorableTime"></a>

```go
UseLatestRestorableTime interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#use_latest_restorable_time RdsCluster#use_latest_restorable_time}.

---

### RdsClusterS3Import <a name="RdsClusterS3Import" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3Import"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3Import.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/rdscluster"

&rdscluster.RdsClusterS3Import {
	BucketName: *string,
	IngestionRole: *string,
	SourceEngine: *string,
	SourceEngineVersion: *string,
	BucketPrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import.property.bucketName">BucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#bucket_name RdsCluster#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import.property.ingestionRole">IngestionRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#ingestion_role RdsCluster#ingestion_role}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import.property.sourceEngine">SourceEngine</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#source_engine RdsCluster#source_engine}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import.property.sourceEngineVersion">SourceEngineVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#source_engine_version RdsCluster#source_engine_version}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import.property.bucketPrefix">BucketPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#bucket_prefix RdsCluster#bucket_prefix}. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3Import.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#bucket_name RdsCluster#bucket_name}.

---

##### `IngestionRole`<sup>Required</sup> <a name="IngestionRole" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3Import.property.ingestionRole"></a>

```go
IngestionRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#ingestion_role RdsCluster#ingestion_role}.

---

##### `SourceEngine`<sup>Required</sup> <a name="SourceEngine" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3Import.property.sourceEngine"></a>

```go
SourceEngine *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#source_engine RdsCluster#source_engine}.

---

##### `SourceEngineVersion`<sup>Required</sup> <a name="SourceEngineVersion" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3Import.property.sourceEngineVersion"></a>

```go
SourceEngineVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#source_engine_version RdsCluster#source_engine_version}.

---

##### `BucketPrefix`<sup>Optional</sup> <a name="BucketPrefix" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3Import.property.bucketPrefix"></a>

```go
BucketPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#bucket_prefix RdsCluster#bucket_prefix}.

---

### RdsClusterScalingConfiguration <a name="RdsClusterScalingConfiguration" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/rdscluster"

&rdscluster.RdsClusterScalingConfiguration {
	AutoPause: interface{},
	MaxCapacity: *f64,
	MinCapacity: *f64,
	SecondsUntilAutoPause: *f64,
	TimeoutAction: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.property.autoPause">AutoPause</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#auto_pause RdsCluster#auto_pause}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#max_capacity RdsCluster#max_capacity}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.property.minCapacity">MinCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#min_capacity RdsCluster#min_capacity}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.property.secondsUntilAutoPause">SecondsUntilAutoPause</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#seconds_until_auto_pause RdsCluster#seconds_until_auto_pause}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.property.timeoutAction">TimeoutAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#timeout_action RdsCluster#timeout_action}. |

---

##### `AutoPause`<sup>Optional</sup> <a name="AutoPause" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.property.autoPause"></a>

```go
AutoPause interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#auto_pause RdsCluster#auto_pause}.

---

##### `MaxCapacity`<sup>Optional</sup> <a name="MaxCapacity" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.property.maxCapacity"></a>

```go
MaxCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#max_capacity RdsCluster#max_capacity}.

---

##### `MinCapacity`<sup>Optional</sup> <a name="MinCapacity" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.property.minCapacity"></a>

```go
MinCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#min_capacity RdsCluster#min_capacity}.

---

##### `SecondsUntilAutoPause`<sup>Optional</sup> <a name="SecondsUntilAutoPause" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.property.secondsUntilAutoPause"></a>

```go
SecondsUntilAutoPause *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#seconds_until_auto_pause RdsCluster#seconds_until_auto_pause}.

---

##### `TimeoutAction`<sup>Optional</sup> <a name="TimeoutAction" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration.property.timeoutAction"></a>

```go
TimeoutAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#timeout_action RdsCluster#timeout_action}.

---

### RdsClusterServerlessv2ScalingConfiguration <a name="RdsClusterServerlessv2ScalingConfiguration" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/rdscluster"

&rdscluster.RdsClusterServerlessv2ScalingConfiguration {
	MaxCapacity: *f64,
	MinCapacity: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#max_capacity RdsCluster#max_capacity}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration.property.minCapacity">MinCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#min_capacity RdsCluster#min_capacity}. |

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration.property.maxCapacity"></a>

```go
MaxCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#max_capacity RdsCluster#max_capacity}.

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration.property.minCapacity"></a>

```go
MinCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#min_capacity RdsCluster#min_capacity}.

---

### RdsClusterTimeouts <a name="RdsClusterTimeouts" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/rdscluster"

&rdscluster.RdsClusterTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#create RdsCluster#create}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#delete RdsCluster#delete}. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#update RdsCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#create RdsCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#delete RdsCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rds_cluster#update RdsCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RdsClusterMasterUserSecretList <a name="RdsClusterMasterUserSecretList" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/rdscluster"

rdscluster.NewRdsClusterMasterUserSecretList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RdsClusterMasterUserSecretList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.get"></a>

```go
func Get(index *f64) RdsClusterMasterUserSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### RdsClusterMasterUserSecretOutputReference <a name="RdsClusterMasterUserSecretOutputReference" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/rdscluster"

rdscluster.NewRdsClusterMasterUserSecretOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RdsClusterMasterUserSecretOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.property.secretStatus">SecretStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecret">RdsClusterMasterUserSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `SecretStatus`<sup>Required</sup> <a name="SecretStatus" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.property.secretStatus"></a>

```go
func SecretStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecretOutputReference.property.internalValue"></a>

```go
func InternalValue() RdsClusterMasterUserSecret
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterMasterUserSecret">RdsClusterMasterUserSecret</a>

---


### RdsClusterRestoreToPointInTimeOutputReference <a name="RdsClusterRestoreToPointInTimeOutputReference" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/rdscluster"

rdscluster.NewRdsClusterRestoreToPointInTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RdsClusterRestoreToPointInTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.resetUseLatestRestorableTime">ResetUseLatestRestorableTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRestoreToTime` <a name="ResetRestoreToTime" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.resetRestoreToTime"></a>

```go
func ResetRestoreToTime()
```

##### `ResetRestoreType` <a name="ResetRestoreType" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.resetRestoreType"></a>

```go
func ResetRestoreType()
```

##### `ResetUseLatestRestorableTime` <a name="ResetUseLatestRestorableTime" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.resetUseLatestRestorableTime"></a>

```go
func ResetUseLatestRestorableTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.restoreToTimeInput">RestoreToTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.restoreTypeInput">RestoreTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.sourceClusterIdentifierInput">SourceClusterIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.useLatestRestorableTimeInput">UseLatestRestorableTimeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.restoreToTime">RestoreToTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.restoreType">RestoreType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.sourceClusterIdentifier">SourceClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.useLatestRestorableTime">UseLatestRestorableTime</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime">RdsClusterRestoreToPointInTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RestoreToTimeInput`<sup>Optional</sup> <a name="RestoreToTimeInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.restoreToTimeInput"></a>

```go
func RestoreToTimeInput() *string
```

- *Type:* *string

---

##### `RestoreTypeInput`<sup>Optional</sup> <a name="RestoreTypeInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.restoreTypeInput"></a>

```go
func RestoreTypeInput() *string
```

- *Type:* *string

---

##### `SourceClusterIdentifierInput`<sup>Optional</sup> <a name="SourceClusterIdentifierInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.sourceClusterIdentifierInput"></a>

```go
func SourceClusterIdentifierInput() *string
```

- *Type:* *string

---

##### `UseLatestRestorableTimeInput`<sup>Optional</sup> <a name="UseLatestRestorableTimeInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.useLatestRestorableTimeInput"></a>

```go
func UseLatestRestorableTimeInput() interface{}
```

- *Type:* interface{}

---

##### `RestoreToTime`<sup>Required</sup> <a name="RestoreToTime" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.restoreToTime"></a>

```go
func RestoreToTime() *string
```

- *Type:* *string

---

##### `RestoreType`<sup>Required</sup> <a name="RestoreType" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.restoreType"></a>

```go
func RestoreType() *string
```

- *Type:* *string

---

##### `SourceClusterIdentifier`<sup>Required</sup> <a name="SourceClusterIdentifier" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.sourceClusterIdentifier"></a>

```go
func SourceClusterIdentifier() *string
```

- *Type:* *string

---

##### `UseLatestRestorableTime`<sup>Required</sup> <a name="UseLatestRestorableTime" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.useLatestRestorableTime"></a>

```go
func UseLatestRestorableTime() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() RdsClusterRestoreToPointInTime
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterRestoreToPointInTime">RdsClusterRestoreToPointInTime</a>

---


### RdsClusterS3ImportOutputReference <a name="RdsClusterS3ImportOutputReference" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/rdscluster"

rdscluster.NewRdsClusterS3ImportOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RdsClusterS3ImportOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketPrefix` <a name="ResetBucketPrefix" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.resetBucketPrefix"></a>

```go
func ResetBucketPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.bucketPrefixInput">BucketPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.ingestionRoleInput">IngestionRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.sourceEngineInput">SourceEngineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.sourceEngineVersionInput">SourceEngineVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.bucketPrefix">BucketPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.ingestionRole">IngestionRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.sourceEngine">SourceEngine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.sourceEngineVersion">SourceEngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import">RdsClusterS3Import</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `BucketPrefixInput`<sup>Optional</sup> <a name="BucketPrefixInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.bucketPrefixInput"></a>

```go
func BucketPrefixInput() *string
```

- *Type:* *string

---

##### `IngestionRoleInput`<sup>Optional</sup> <a name="IngestionRoleInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.ingestionRoleInput"></a>

```go
func IngestionRoleInput() *string
```

- *Type:* *string

---

##### `SourceEngineInput`<sup>Optional</sup> <a name="SourceEngineInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.sourceEngineInput"></a>

```go
func SourceEngineInput() *string
```

- *Type:* *string

---

##### `SourceEngineVersionInput`<sup>Optional</sup> <a name="SourceEngineVersionInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.sourceEngineVersionInput"></a>

```go
func SourceEngineVersionInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `BucketPrefix`<sup>Required</sup> <a name="BucketPrefix" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.bucketPrefix"></a>

```go
func BucketPrefix() *string
```

- *Type:* *string

---

##### `IngestionRole`<sup>Required</sup> <a name="IngestionRole" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.ingestionRole"></a>

```go
func IngestionRole() *string
```

- *Type:* *string

---

##### `SourceEngine`<sup>Required</sup> <a name="SourceEngine" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.sourceEngine"></a>

```go
func SourceEngine() *string
```

- *Type:* *string

---

##### `SourceEngineVersion`<sup>Required</sup> <a name="SourceEngineVersion" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.sourceEngineVersion"></a>

```go
func SourceEngineVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rdsCluster.RdsClusterS3ImportOutputReference.property.internalValue"></a>

```go
func InternalValue() RdsClusterS3Import
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterS3Import">RdsClusterS3Import</a>

---


### RdsClusterScalingConfigurationOutputReference <a name="RdsClusterScalingConfigurationOutputReference" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/rdscluster"

rdscluster.NewRdsClusterScalingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RdsClusterScalingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resetSecondsUntilAutoPause">ResetSecondsUntilAutoPause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resetTimeoutAction">ResetTimeoutAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoPause` <a name="ResetAutoPause" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resetAutoPause"></a>

```go
func ResetAutoPause()
```

##### `ResetMaxCapacity` <a name="ResetMaxCapacity" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resetMaxCapacity"></a>

```go
func ResetMaxCapacity()
```

##### `ResetMinCapacity` <a name="ResetMinCapacity" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resetMinCapacity"></a>

```go
func ResetMinCapacity()
```

##### `ResetSecondsUntilAutoPause` <a name="ResetSecondsUntilAutoPause" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resetSecondsUntilAutoPause"></a>

```go
func ResetSecondsUntilAutoPause()
```

##### `ResetTimeoutAction` <a name="ResetTimeoutAction" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.resetTimeoutAction"></a>

```go
func ResetTimeoutAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.autoPauseInput">AutoPauseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.minCapacityInput">MinCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.secondsUntilAutoPauseInput">SecondsUntilAutoPauseInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.timeoutActionInput">TimeoutActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.autoPause">AutoPause</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.minCapacity">MinCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.secondsUntilAutoPause">SecondsUntilAutoPause</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.timeoutAction">TimeoutAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration">RdsClusterScalingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoPauseInput`<sup>Optional</sup> <a name="AutoPauseInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.autoPauseInput"></a>

```go
func AutoPauseInput() interface{}
```

- *Type:* interface{}

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.maxCapacityInput"></a>

```go
func MaxCapacityInput() *f64
```

- *Type:* *f64

---

##### `MinCapacityInput`<sup>Optional</sup> <a name="MinCapacityInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.minCapacityInput"></a>

```go
func MinCapacityInput() *f64
```

- *Type:* *f64

---

##### `SecondsUntilAutoPauseInput`<sup>Optional</sup> <a name="SecondsUntilAutoPauseInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.secondsUntilAutoPauseInput"></a>

```go
func SecondsUntilAutoPauseInput() *f64
```

- *Type:* *f64

---

##### `TimeoutActionInput`<sup>Optional</sup> <a name="TimeoutActionInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.timeoutActionInput"></a>

```go
func TimeoutActionInput() *string
```

- *Type:* *string

---

##### `AutoPause`<sup>Required</sup> <a name="AutoPause" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.autoPause"></a>

```go
func AutoPause() interface{}
```

- *Type:* interface{}

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.maxCapacity"></a>

```go
func MaxCapacity() *f64
```

- *Type:* *f64

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.minCapacity"></a>

```go
func MinCapacity() *f64
```

- *Type:* *f64

---

##### `SecondsUntilAutoPause`<sup>Required</sup> <a name="SecondsUntilAutoPause" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.secondsUntilAutoPause"></a>

```go
func SecondsUntilAutoPause() *f64
```

- *Type:* *f64

---

##### `TimeoutAction`<sup>Required</sup> <a name="TimeoutAction" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.timeoutAction"></a>

```go
func TimeoutAction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() RdsClusterScalingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterScalingConfiguration">RdsClusterScalingConfiguration</a>

---


### RdsClusterServerlessv2ScalingConfigurationOutputReference <a name="RdsClusterServerlessv2ScalingConfigurationOutputReference" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/rdscluster"

rdscluster.NewRdsClusterServerlessv2ScalingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RdsClusterServerlessv2ScalingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.minCapacityInput">MinCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.minCapacity">MinCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration">RdsClusterServerlessv2ScalingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.maxCapacityInput"></a>

```go
func MaxCapacityInput() *f64
```

- *Type:* *f64

---

##### `MinCapacityInput`<sup>Optional</sup> <a name="MinCapacityInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.minCapacityInput"></a>

```go
func MinCapacityInput() *f64
```

- *Type:* *f64

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.maxCapacity"></a>

```go
func MaxCapacity() *f64
```

- *Type:* *f64

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.minCapacity"></a>

```go
func MinCapacity() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() RdsClusterServerlessv2ScalingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCluster.RdsClusterServerlessv2ScalingConfiguration">RdsClusterServerlessv2ScalingConfiguration</a>

---


### RdsClusterTimeoutsOutputReference <a name="RdsClusterTimeoutsOutputReference" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/rdscluster"

rdscluster.NewRdsClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RdsClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rdsCluster.RdsClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



