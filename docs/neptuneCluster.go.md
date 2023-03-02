# `neptuneCluster` Submodule <a name="`neptuneCluster` Submodule" id="@cdktf/provider-aws.neptuneCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NeptuneCluster <a name="NeptuneCluster" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster aws_neptune_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/neptunecluster"

neptunecluster.NewNeptuneCluster(scope Construct, id *string, config NeptuneClusterConfig) NeptuneCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig">NeptuneClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig">NeptuneClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.putServerlessV2ScalingConfiguration">PutServerlessV2ScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetAllowMajorVersionUpgrade">ResetAllowMajorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetApplyImmediately">ResetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetAvailabilityZones">ResetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetBackupRetentionPeriod">ResetBackupRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetClusterIdentifier">ResetClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetClusterIdentifierPrefix">ResetClusterIdentifierPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetCopyTagsToSnapshot">ResetCopyTagsToSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetEnableCloudwatchLogsExports">ResetEnableCloudwatchLogsExports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetEngine">ResetEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetFinalSnapshotIdentifier">ResetFinalSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetGlobalClusterIdentifier">ResetGlobalClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetIamDatabaseAuthenticationEnabled">ResetIamDatabaseAuthenticationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetIamRoles">ResetIamRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetNeptuneClusterParameterGroupName">ResetNeptuneClusterParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetNeptuneInstanceParameterGroupName">ResetNeptuneInstanceParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetNeptuneSubnetGroupName">ResetNeptuneSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetPreferredBackupWindow">ResetPreferredBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetPreferredMaintenanceWindow">ResetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetReplicationSourceIdentifier">ResetReplicationSourceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetServerlessV2ScalingConfiguration">ResetServerlessV2ScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetSkipFinalSnapshot">ResetSkipFinalSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetSnapshotIdentifier">ResetSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetStorageEncrypted">ResetStorageEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetVpcSecurityGroupIds">ResetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutServerlessV2ScalingConfiguration` <a name="PutServerlessV2ScalingConfiguration" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.putServerlessV2ScalingConfiguration"></a>

```go
func PutServerlessV2ScalingConfiguration(value NeptuneClusterServerlessV2ScalingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.putServerlessV2ScalingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration">NeptuneClusterServerlessV2ScalingConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.putTimeouts"></a>

```go
func PutTimeouts(value NeptuneClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts">NeptuneClusterTimeouts</a>

---

##### `ResetAllowMajorVersionUpgrade` <a name="ResetAllowMajorVersionUpgrade" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetAllowMajorVersionUpgrade"></a>

```go
func ResetAllowMajorVersionUpgrade()
```

##### `ResetApplyImmediately` <a name="ResetApplyImmediately" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetApplyImmediately"></a>

```go
func ResetApplyImmediately()
```

##### `ResetAvailabilityZones` <a name="ResetAvailabilityZones" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetAvailabilityZones"></a>

```go
func ResetAvailabilityZones()
```

##### `ResetBackupRetentionPeriod` <a name="ResetBackupRetentionPeriod" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetBackupRetentionPeriod"></a>

```go
func ResetBackupRetentionPeriod()
```

##### `ResetClusterIdentifier` <a name="ResetClusterIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetClusterIdentifier"></a>

```go
func ResetClusterIdentifier()
```

##### `ResetClusterIdentifierPrefix` <a name="ResetClusterIdentifierPrefix" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetClusterIdentifierPrefix"></a>

```go
func ResetClusterIdentifierPrefix()
```

##### `ResetCopyTagsToSnapshot` <a name="ResetCopyTagsToSnapshot" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetCopyTagsToSnapshot"></a>

```go
func ResetCopyTagsToSnapshot()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetDeletionProtection"></a>

```go
func ResetDeletionProtection()
```

##### `ResetEnableCloudwatchLogsExports` <a name="ResetEnableCloudwatchLogsExports" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetEnableCloudwatchLogsExports"></a>

```go
func ResetEnableCloudwatchLogsExports()
```

##### `ResetEngine` <a name="ResetEngine" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetEngine"></a>

```go
func ResetEngine()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetEngineVersion"></a>

```go
func ResetEngineVersion()
```

##### `ResetFinalSnapshotIdentifier` <a name="ResetFinalSnapshotIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetFinalSnapshotIdentifier"></a>

```go
func ResetFinalSnapshotIdentifier()
```

##### `ResetGlobalClusterIdentifier` <a name="ResetGlobalClusterIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetGlobalClusterIdentifier"></a>

```go
func ResetGlobalClusterIdentifier()
```

##### `ResetIamDatabaseAuthenticationEnabled` <a name="ResetIamDatabaseAuthenticationEnabled" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetIamDatabaseAuthenticationEnabled"></a>

```go
func ResetIamDatabaseAuthenticationEnabled()
```

##### `ResetIamRoles` <a name="ResetIamRoles" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetIamRoles"></a>

```go
func ResetIamRoles()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetNeptuneClusterParameterGroupName` <a name="ResetNeptuneClusterParameterGroupName" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetNeptuneClusterParameterGroupName"></a>

```go
func ResetNeptuneClusterParameterGroupName()
```

##### `ResetNeptuneInstanceParameterGroupName` <a name="ResetNeptuneInstanceParameterGroupName" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetNeptuneInstanceParameterGroupName"></a>

```go
func ResetNeptuneInstanceParameterGroupName()
```

##### `ResetNeptuneSubnetGroupName` <a name="ResetNeptuneSubnetGroupName" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetNeptuneSubnetGroupName"></a>

```go
func ResetNeptuneSubnetGroupName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPreferredBackupWindow` <a name="ResetPreferredBackupWindow" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetPreferredBackupWindow"></a>

```go
func ResetPreferredBackupWindow()
```

##### `ResetPreferredMaintenanceWindow` <a name="ResetPreferredMaintenanceWindow" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetPreferredMaintenanceWindow"></a>

```go
func ResetPreferredMaintenanceWindow()
```

##### `ResetReplicationSourceIdentifier` <a name="ResetReplicationSourceIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetReplicationSourceIdentifier"></a>

```go
func ResetReplicationSourceIdentifier()
```

##### `ResetServerlessV2ScalingConfiguration` <a name="ResetServerlessV2ScalingConfiguration" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetServerlessV2ScalingConfiguration"></a>

```go
func ResetServerlessV2ScalingConfiguration()
```

##### `ResetSkipFinalSnapshot` <a name="ResetSkipFinalSnapshot" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetSkipFinalSnapshot"></a>

```go
func ResetSkipFinalSnapshot()
```

##### `ResetSnapshotIdentifier` <a name="ResetSnapshotIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetSnapshotIdentifier"></a>

```go
func ResetSnapshotIdentifier()
```

##### `ResetStorageEncrypted` <a name="ResetStorageEncrypted" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetStorageEncrypted"></a>

```go
func ResetStorageEncrypted()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.resetVpcSecurityGroupIds"></a>

```go
func ResetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/neptunecluster"

neptunecluster.NeptuneCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/neptunecluster"

neptunecluster.NeptuneCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/neptunecluster"

neptunecluster.NeptuneCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterMembers">ClusterMembers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterResourceId">ClusterResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.hostedZoneId">HostedZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.readerEndpoint">ReaderEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.serverlessV2ScalingConfiguration">ServerlessV2ScalingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference">NeptuneClusterServerlessV2ScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference">NeptuneClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.allowMajorVersionUpgradeInput">AllowMajorVersionUpgradeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.applyImmediatelyInput">ApplyImmediatelyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.availabilityZonesInput">AvailabilityZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.backupRetentionPeriodInput">BackupRetentionPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterIdentifierInput">ClusterIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterIdentifierPrefixInput">ClusterIdentifierPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.copyTagsToSnapshotInput">CopyTagsToSnapshotInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.enableCloudwatchLogsExportsInput">EnableCloudwatchLogsExportsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.engineInput">EngineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.engineVersionInput">EngineVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.finalSnapshotIdentifierInput">FinalSnapshotIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.globalClusterIdentifierInput">GlobalClusterIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.iamDatabaseAuthenticationEnabledInput">IamDatabaseAuthenticationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.iamRolesInput">IamRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneClusterParameterGroupNameInput">NeptuneClusterParameterGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneInstanceParameterGroupNameInput">NeptuneInstanceParameterGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneSubnetGroupNameInput">NeptuneSubnetGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.preferredBackupWindowInput">PreferredBackupWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.preferredMaintenanceWindowInput">PreferredMaintenanceWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.replicationSourceIdentifierInput">ReplicationSourceIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.serverlessV2ScalingConfigurationInput">ServerlessV2ScalingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration">NeptuneClusterServerlessV2ScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.skipFinalSnapshotInput">SkipFinalSnapshotInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.snapshotIdentifierInput">SnapshotIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.storageEncryptedInput">StorageEncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.allowMajorVersionUpgrade">AllowMajorVersionUpgrade</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.applyImmediately">ApplyImmediately</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.backupRetentionPeriod">BackupRetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterIdentifierPrefix">ClusterIdentifierPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.copyTagsToSnapshot">CopyTagsToSnapshot</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.enableCloudwatchLogsExports">EnableCloudwatchLogsExports</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.finalSnapshotIdentifier">FinalSnapshotIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.globalClusterIdentifier">GlobalClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.iamDatabaseAuthenticationEnabled">IamDatabaseAuthenticationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.iamRoles">IamRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneClusterParameterGroupName">NeptuneClusterParameterGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneInstanceParameterGroupName">NeptuneInstanceParameterGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneSubnetGroupName">NeptuneSubnetGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.preferredBackupWindow">PreferredBackupWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.replicationSourceIdentifier">ReplicationSourceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.skipFinalSnapshot">SkipFinalSnapshot</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.snapshotIdentifier">SnapshotIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.storageEncrypted">StorageEncrypted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ClusterMembers`<sup>Required</sup> <a name="ClusterMembers" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterMembers"></a>

```go
func ClusterMembers() *[]*string
```

- *Type:* *[]*string

---

##### `ClusterResourceId`<sup>Required</sup> <a name="ClusterResourceId" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterResourceId"></a>

```go
func ClusterResourceId() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.hostedZoneId"></a>

```go
func HostedZoneId() *string
```

- *Type:* *string

---

##### `ReaderEndpoint`<sup>Required</sup> <a name="ReaderEndpoint" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.readerEndpoint"></a>

```go
func ReaderEndpoint() *string
```

- *Type:* *string

---

##### `ServerlessV2ScalingConfiguration`<sup>Required</sup> <a name="ServerlessV2ScalingConfiguration" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.serverlessV2ScalingConfiguration"></a>

```go
func ServerlessV2ScalingConfiguration() NeptuneClusterServerlessV2ScalingConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference">NeptuneClusterServerlessV2ScalingConfigurationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.timeouts"></a>

```go
func Timeouts() NeptuneClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference">NeptuneClusterTimeoutsOutputReference</a>

---

##### `AllowMajorVersionUpgradeInput`<sup>Optional</sup> <a name="AllowMajorVersionUpgradeInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.allowMajorVersionUpgradeInput"></a>

```go
func AllowMajorVersionUpgradeInput() interface{}
```

- *Type:* interface{}

---

##### `ApplyImmediatelyInput`<sup>Optional</sup> <a name="ApplyImmediatelyInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.applyImmediatelyInput"></a>

```go
func ApplyImmediatelyInput() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZonesInput`<sup>Optional</sup> <a name="AvailabilityZonesInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.availabilityZonesInput"></a>

```go
func AvailabilityZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BackupRetentionPeriodInput`<sup>Optional</sup> <a name="BackupRetentionPeriodInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.backupRetentionPeriodInput"></a>

```go
func BackupRetentionPeriodInput() *f64
```

- *Type:* *f64

---

##### `ClusterIdentifierInput`<sup>Optional</sup> <a name="ClusterIdentifierInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterIdentifierInput"></a>

```go
func ClusterIdentifierInput() *string
```

- *Type:* *string

---

##### `ClusterIdentifierPrefixInput`<sup>Optional</sup> <a name="ClusterIdentifierPrefixInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterIdentifierPrefixInput"></a>

```go
func ClusterIdentifierPrefixInput() *string
```

- *Type:* *string

---

##### `CopyTagsToSnapshotInput`<sup>Optional</sup> <a name="CopyTagsToSnapshotInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.copyTagsToSnapshotInput"></a>

```go
func CopyTagsToSnapshotInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.deletionProtectionInput"></a>

```go
func DeletionProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `EnableCloudwatchLogsExportsInput`<sup>Optional</sup> <a name="EnableCloudwatchLogsExportsInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.enableCloudwatchLogsExportsInput"></a>

```go
func EnableCloudwatchLogsExportsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.engineInput"></a>

```go
func EngineInput() *string
```

- *Type:* *string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.engineVersionInput"></a>

```go
func EngineVersionInput() *string
```

- *Type:* *string

---

##### `FinalSnapshotIdentifierInput`<sup>Optional</sup> <a name="FinalSnapshotIdentifierInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.finalSnapshotIdentifierInput"></a>

```go
func FinalSnapshotIdentifierInput() *string
```

- *Type:* *string

---

##### `GlobalClusterIdentifierInput`<sup>Optional</sup> <a name="GlobalClusterIdentifierInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.globalClusterIdentifierInput"></a>

```go
func GlobalClusterIdentifierInput() *string
```

- *Type:* *string

---

##### `IamDatabaseAuthenticationEnabledInput`<sup>Optional</sup> <a name="IamDatabaseAuthenticationEnabledInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.iamDatabaseAuthenticationEnabledInput"></a>

```go
func IamDatabaseAuthenticationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IamRolesInput`<sup>Optional</sup> <a name="IamRolesInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.iamRolesInput"></a>

```go
func IamRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `NeptuneClusterParameterGroupNameInput`<sup>Optional</sup> <a name="NeptuneClusterParameterGroupNameInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneClusterParameterGroupNameInput"></a>

```go
func NeptuneClusterParameterGroupNameInput() *string
```

- *Type:* *string

---

##### `NeptuneInstanceParameterGroupNameInput`<sup>Optional</sup> <a name="NeptuneInstanceParameterGroupNameInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneInstanceParameterGroupNameInput"></a>

```go
func NeptuneInstanceParameterGroupNameInput() *string
```

- *Type:* *string

---

##### `NeptuneSubnetGroupNameInput`<sup>Optional</sup> <a name="NeptuneSubnetGroupNameInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneSubnetGroupNameInput"></a>

```go
func NeptuneSubnetGroupNameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PreferredBackupWindowInput`<sup>Optional</sup> <a name="PreferredBackupWindowInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.preferredBackupWindowInput"></a>

```go
func PreferredBackupWindowInput() *string
```

- *Type:* *string

---

##### `PreferredMaintenanceWindowInput`<sup>Optional</sup> <a name="PreferredMaintenanceWindowInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.preferredMaintenanceWindowInput"></a>

```go
func PreferredMaintenanceWindowInput() *string
```

- *Type:* *string

---

##### `ReplicationSourceIdentifierInput`<sup>Optional</sup> <a name="ReplicationSourceIdentifierInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.replicationSourceIdentifierInput"></a>

```go
func ReplicationSourceIdentifierInput() *string
```

- *Type:* *string

---

##### `ServerlessV2ScalingConfigurationInput`<sup>Optional</sup> <a name="ServerlessV2ScalingConfigurationInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.serverlessV2ScalingConfigurationInput"></a>

```go
func ServerlessV2ScalingConfigurationInput() NeptuneClusterServerlessV2ScalingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration">NeptuneClusterServerlessV2ScalingConfiguration</a>

---

##### `SkipFinalSnapshotInput`<sup>Optional</sup> <a name="SkipFinalSnapshotInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.skipFinalSnapshotInput"></a>

```go
func SkipFinalSnapshotInput() interface{}
```

- *Type:* interface{}

---

##### `SnapshotIdentifierInput`<sup>Optional</sup> <a name="SnapshotIdentifierInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.snapshotIdentifierInput"></a>

```go
func SnapshotIdentifierInput() *string
```

- *Type:* *string

---

##### `StorageEncryptedInput`<sup>Optional</sup> <a name="StorageEncryptedInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.storageEncryptedInput"></a>

```go
func StorageEncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.vpcSecurityGroupIdsInput"></a>

```go
func VpcSecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowMajorVersionUpgrade`<sup>Required</sup> <a name="AllowMajorVersionUpgrade" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.allowMajorVersionUpgrade"></a>

```go
func AllowMajorVersionUpgrade() interface{}
```

- *Type:* interface{}

---

##### `ApplyImmediately`<sup>Required</sup> <a name="ApplyImmediately" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.applyImmediately"></a>

```go
func ApplyImmediately() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.availabilityZones"></a>

```go
func AvailabilityZones() *[]*string
```

- *Type:* *[]*string

---

##### `BackupRetentionPeriod`<sup>Required</sup> <a name="BackupRetentionPeriod" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.backupRetentionPeriod"></a>

```go
func BackupRetentionPeriod() *f64
```

- *Type:* *f64

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterIdentifier"></a>

```go
func ClusterIdentifier() *string
```

- *Type:* *string

---

##### `ClusterIdentifierPrefix`<sup>Required</sup> <a name="ClusterIdentifierPrefix" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.clusterIdentifierPrefix"></a>

```go
func ClusterIdentifierPrefix() *string
```

- *Type:* *string

---

##### `CopyTagsToSnapshot`<sup>Required</sup> <a name="CopyTagsToSnapshot" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.copyTagsToSnapshot"></a>

```go
func CopyTagsToSnapshot() interface{}
```

- *Type:* interface{}

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.deletionProtection"></a>

```go
func DeletionProtection() interface{}
```

- *Type:* interface{}

---

##### `EnableCloudwatchLogsExports`<sup>Required</sup> <a name="EnableCloudwatchLogsExports" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.enableCloudwatchLogsExports"></a>

```go
func EnableCloudwatchLogsExports() *[]*string
```

- *Type:* *[]*string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `FinalSnapshotIdentifier`<sup>Required</sup> <a name="FinalSnapshotIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.finalSnapshotIdentifier"></a>

```go
func FinalSnapshotIdentifier() *string
```

- *Type:* *string

---

##### `GlobalClusterIdentifier`<sup>Required</sup> <a name="GlobalClusterIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.globalClusterIdentifier"></a>

```go
func GlobalClusterIdentifier() *string
```

- *Type:* *string

---

##### `IamDatabaseAuthenticationEnabled`<sup>Required</sup> <a name="IamDatabaseAuthenticationEnabled" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.iamDatabaseAuthenticationEnabled"></a>

```go
func IamDatabaseAuthenticationEnabled() interface{}
```

- *Type:* interface{}

---

##### `IamRoles`<sup>Required</sup> <a name="IamRoles" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.iamRoles"></a>

```go
func IamRoles() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `NeptuneClusterParameterGroupName`<sup>Required</sup> <a name="NeptuneClusterParameterGroupName" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneClusterParameterGroupName"></a>

```go
func NeptuneClusterParameterGroupName() *string
```

- *Type:* *string

---

##### `NeptuneInstanceParameterGroupName`<sup>Required</sup> <a name="NeptuneInstanceParameterGroupName" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneInstanceParameterGroupName"></a>

```go
func NeptuneInstanceParameterGroupName() *string
```

- *Type:* *string

---

##### `NeptuneSubnetGroupName`<sup>Required</sup> <a name="NeptuneSubnetGroupName" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.neptuneSubnetGroupName"></a>

```go
func NeptuneSubnetGroupName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PreferredBackupWindow`<sup>Required</sup> <a name="PreferredBackupWindow" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.preferredBackupWindow"></a>

```go
func PreferredBackupWindow() *string
```

- *Type:* *string

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.preferredMaintenanceWindow"></a>

```go
func PreferredMaintenanceWindow() *string
```

- *Type:* *string

---

##### `ReplicationSourceIdentifier`<sup>Required</sup> <a name="ReplicationSourceIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.replicationSourceIdentifier"></a>

```go
func ReplicationSourceIdentifier() *string
```

- *Type:* *string

---

##### `SkipFinalSnapshot`<sup>Required</sup> <a name="SkipFinalSnapshot" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.skipFinalSnapshot"></a>

```go
func SkipFinalSnapshot() interface{}
```

- *Type:* interface{}

---

##### `SnapshotIdentifier`<sup>Required</sup> <a name="SnapshotIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.snapshotIdentifier"></a>

```go
func SnapshotIdentifier() *string
```

- *Type:* *string

---

##### `StorageEncrypted`<sup>Required</sup> <a name="StorageEncrypted" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.storageEncrypted"></a>

```go
func StorageEncrypted() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.vpcSecurityGroupIds"></a>

```go
func VpcSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.neptuneCluster.NeptuneCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NeptuneClusterConfig <a name="NeptuneClusterConfig" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/neptunecluster"

&neptunecluster.NeptuneClusterConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AllowMajorVersionUpgrade: interface{},
	ApplyImmediately: interface{},
	AvailabilityZones: *[]*string,
	BackupRetentionPeriod: *f64,
	ClusterIdentifier: *string,
	ClusterIdentifierPrefix: *string,
	CopyTagsToSnapshot: interface{},
	DeletionProtection: interface{},
	EnableCloudwatchLogsExports: *[]*string,
	Engine: *string,
	EngineVersion: *string,
	FinalSnapshotIdentifier: *string,
	GlobalClusterIdentifier: *string,
	IamDatabaseAuthenticationEnabled: interface{},
	IamRoles: *[]*string,
	Id: *string,
	KmsKeyArn: *string,
	NeptuneClusterParameterGroupName: *string,
	NeptuneInstanceParameterGroupName: *string,
	NeptuneSubnetGroupName: *string,
	Port: *f64,
	PreferredBackupWindow: *string,
	PreferredMaintenanceWindow: *string,
	ReplicationSourceIdentifier: *string,
	ServerlessV2ScalingConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration,
	SkipFinalSnapshot: interface{},
	SnapshotIdentifier: *string,
	StorageEncrypted: interface{},
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.neptuneCluster.NeptuneClusterTimeouts,
	VpcSecurityGroupIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.allowMajorVersionUpgrade">AllowMajorVersionUpgrade</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#allow_major_version_upgrade NeptuneCluster#allow_major_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.applyImmediately">ApplyImmediately</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#apply_immediately NeptuneCluster#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#availability_zones NeptuneCluster#availability_zones}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.backupRetentionPeriod">BackupRetentionPeriod</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#backup_retention_period NeptuneCluster#backup_retention_period}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#cluster_identifier NeptuneCluster#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.clusterIdentifierPrefix">ClusterIdentifierPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#cluster_identifier_prefix NeptuneCluster#cluster_identifier_prefix}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.copyTagsToSnapshot">CopyTagsToSnapshot</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#copy_tags_to_snapshot NeptuneCluster#copy_tags_to_snapshot}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#deletion_protection NeptuneCluster#deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.enableCloudwatchLogsExports">EnableCloudwatchLogsExports</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#enable_cloudwatch_logs_exports NeptuneCluster#enable_cloudwatch_logs_exports}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.engine">Engine</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#engine NeptuneCluster#engine}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#engine_version NeptuneCluster#engine_version}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.finalSnapshotIdentifier">FinalSnapshotIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#final_snapshot_identifier NeptuneCluster#final_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.globalClusterIdentifier">GlobalClusterIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#global_cluster_identifier NeptuneCluster#global_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.iamDatabaseAuthenticationEnabled">IamDatabaseAuthenticationEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#iam_database_authentication_enabled NeptuneCluster#iam_database_authentication_enabled}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.iamRoles">IamRoles</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#iam_roles NeptuneCluster#iam_roles}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#id NeptuneCluster#id}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#kms_key_arn NeptuneCluster#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.neptuneClusterParameterGroupName">NeptuneClusterParameterGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#neptune_cluster_parameter_group_name NeptuneCluster#neptune_cluster_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.neptuneInstanceParameterGroupName">NeptuneInstanceParameterGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#neptune_instance_parameter_group_name NeptuneCluster#neptune_instance_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.neptuneSubnetGroupName">NeptuneSubnetGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#neptune_subnet_group_name NeptuneCluster#neptune_subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#port NeptuneCluster#port}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.preferredBackupWindow">PreferredBackupWindow</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#preferred_backup_window NeptuneCluster#preferred_backup_window}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#preferred_maintenance_window NeptuneCluster#preferred_maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.replicationSourceIdentifier">ReplicationSourceIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#replication_source_identifier NeptuneCluster#replication_source_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.serverlessV2ScalingConfiguration">ServerlessV2ScalingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration">NeptuneClusterServerlessV2ScalingConfiguration</a></code> | serverless_v2_scaling_configuration block. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.skipFinalSnapshot">SkipFinalSnapshot</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#skip_final_snapshot NeptuneCluster#skip_final_snapshot}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.snapshotIdentifier">SnapshotIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#snapshot_identifier NeptuneCluster#snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.storageEncrypted">StorageEncrypted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#storage_encrypted NeptuneCluster#storage_encrypted}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#tags NeptuneCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#tags_all NeptuneCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts">NeptuneClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#vpc_security_group_ids NeptuneCluster#vpc_security_group_ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowMajorVersionUpgrade`<sup>Optional</sup> <a name="AllowMajorVersionUpgrade" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.allowMajorVersionUpgrade"></a>

```go
AllowMajorVersionUpgrade interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#allow_major_version_upgrade NeptuneCluster#allow_major_version_upgrade}.

---

##### `ApplyImmediately`<sup>Optional</sup> <a name="ApplyImmediately" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.applyImmediately"></a>

```go
ApplyImmediately interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#apply_immediately NeptuneCluster#apply_immediately}.

---

##### `AvailabilityZones`<sup>Optional</sup> <a name="AvailabilityZones" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.availabilityZones"></a>

```go
AvailabilityZones *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#availability_zones NeptuneCluster#availability_zones}.

---

##### `BackupRetentionPeriod`<sup>Optional</sup> <a name="BackupRetentionPeriod" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.backupRetentionPeriod"></a>

```go
BackupRetentionPeriod *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#backup_retention_period NeptuneCluster#backup_retention_period}.

---

##### `ClusterIdentifier`<sup>Optional</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.clusterIdentifier"></a>

```go
ClusterIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#cluster_identifier NeptuneCluster#cluster_identifier}.

---

##### `ClusterIdentifierPrefix`<sup>Optional</sup> <a name="ClusterIdentifierPrefix" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.clusterIdentifierPrefix"></a>

```go
ClusterIdentifierPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#cluster_identifier_prefix NeptuneCluster#cluster_identifier_prefix}.

---

##### `CopyTagsToSnapshot`<sup>Optional</sup> <a name="CopyTagsToSnapshot" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.copyTagsToSnapshot"></a>

```go
CopyTagsToSnapshot interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#copy_tags_to_snapshot NeptuneCluster#copy_tags_to_snapshot}.

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.deletionProtection"></a>

```go
DeletionProtection interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#deletion_protection NeptuneCluster#deletion_protection}.

---

##### `EnableCloudwatchLogsExports`<sup>Optional</sup> <a name="EnableCloudwatchLogsExports" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.enableCloudwatchLogsExports"></a>

```go
EnableCloudwatchLogsExports *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#enable_cloudwatch_logs_exports NeptuneCluster#enable_cloudwatch_logs_exports}.

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.engine"></a>

```go
Engine *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#engine NeptuneCluster#engine}.

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.engineVersion"></a>

```go
EngineVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#engine_version NeptuneCluster#engine_version}.

---

##### `FinalSnapshotIdentifier`<sup>Optional</sup> <a name="FinalSnapshotIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.finalSnapshotIdentifier"></a>

```go
FinalSnapshotIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#final_snapshot_identifier NeptuneCluster#final_snapshot_identifier}.

---

##### `GlobalClusterIdentifier`<sup>Optional</sup> <a name="GlobalClusterIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.globalClusterIdentifier"></a>

```go
GlobalClusterIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#global_cluster_identifier NeptuneCluster#global_cluster_identifier}.

---

##### `IamDatabaseAuthenticationEnabled`<sup>Optional</sup> <a name="IamDatabaseAuthenticationEnabled" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.iamDatabaseAuthenticationEnabled"></a>

```go
IamDatabaseAuthenticationEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#iam_database_authentication_enabled NeptuneCluster#iam_database_authentication_enabled}.

---

##### `IamRoles`<sup>Optional</sup> <a name="IamRoles" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.iamRoles"></a>

```go
IamRoles *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#iam_roles NeptuneCluster#iam_roles}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#id NeptuneCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#kms_key_arn NeptuneCluster#kms_key_arn}.

---

##### `NeptuneClusterParameterGroupName`<sup>Optional</sup> <a name="NeptuneClusterParameterGroupName" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.neptuneClusterParameterGroupName"></a>

```go
NeptuneClusterParameterGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#neptune_cluster_parameter_group_name NeptuneCluster#neptune_cluster_parameter_group_name}.

---

##### `NeptuneInstanceParameterGroupName`<sup>Optional</sup> <a name="NeptuneInstanceParameterGroupName" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.neptuneInstanceParameterGroupName"></a>

```go
NeptuneInstanceParameterGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#neptune_instance_parameter_group_name NeptuneCluster#neptune_instance_parameter_group_name}.

---

##### `NeptuneSubnetGroupName`<sup>Optional</sup> <a name="NeptuneSubnetGroupName" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.neptuneSubnetGroupName"></a>

```go
NeptuneSubnetGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#neptune_subnet_group_name NeptuneCluster#neptune_subnet_group_name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#port NeptuneCluster#port}.

---

##### `PreferredBackupWindow`<sup>Optional</sup> <a name="PreferredBackupWindow" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.preferredBackupWindow"></a>

```go
PreferredBackupWindow *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#preferred_backup_window NeptuneCluster#preferred_backup_window}.

---

##### `PreferredMaintenanceWindow`<sup>Optional</sup> <a name="PreferredMaintenanceWindow" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.preferredMaintenanceWindow"></a>

```go
PreferredMaintenanceWindow *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#preferred_maintenance_window NeptuneCluster#preferred_maintenance_window}.

---

##### `ReplicationSourceIdentifier`<sup>Optional</sup> <a name="ReplicationSourceIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.replicationSourceIdentifier"></a>

```go
ReplicationSourceIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#replication_source_identifier NeptuneCluster#replication_source_identifier}.

---

##### `ServerlessV2ScalingConfiguration`<sup>Optional</sup> <a name="ServerlessV2ScalingConfiguration" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.serverlessV2ScalingConfiguration"></a>

```go
ServerlessV2ScalingConfiguration NeptuneClusterServerlessV2ScalingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration">NeptuneClusterServerlessV2ScalingConfiguration</a>

serverless_v2_scaling_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#serverless_v2_scaling_configuration NeptuneCluster#serverless_v2_scaling_configuration}

---

##### `SkipFinalSnapshot`<sup>Optional</sup> <a name="SkipFinalSnapshot" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.skipFinalSnapshot"></a>

```go
SkipFinalSnapshot interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#skip_final_snapshot NeptuneCluster#skip_final_snapshot}.

---

##### `SnapshotIdentifier`<sup>Optional</sup> <a name="SnapshotIdentifier" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.snapshotIdentifier"></a>

```go
SnapshotIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#snapshot_identifier NeptuneCluster#snapshot_identifier}.

---

##### `StorageEncrypted`<sup>Optional</sup> <a name="StorageEncrypted" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.storageEncrypted"></a>

```go
StorageEncrypted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#storage_encrypted NeptuneCluster#storage_encrypted}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#tags NeptuneCluster#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#tags_all NeptuneCluster#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.timeouts"></a>

```go
Timeouts NeptuneClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts">NeptuneClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#timeouts NeptuneCluster#timeouts}

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterConfig.property.vpcSecurityGroupIds"></a>

```go
VpcSecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#vpc_security_group_ids NeptuneCluster#vpc_security_group_ids}.

---

### NeptuneClusterServerlessV2ScalingConfiguration <a name="NeptuneClusterServerlessV2ScalingConfiguration" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/neptunecluster"

&neptunecluster.NeptuneClusterServerlessV2ScalingConfiguration {
	MaxCapacity: *f64,
	MinCapacity: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#max_capacity NeptuneCluster#max_capacity}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration.property.minCapacity">MinCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#min_capacity NeptuneCluster#min_capacity}. |

---

##### `MaxCapacity`<sup>Optional</sup> <a name="MaxCapacity" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration.property.maxCapacity"></a>

```go
MaxCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#max_capacity NeptuneCluster#max_capacity}.

---

##### `MinCapacity`<sup>Optional</sup> <a name="MinCapacity" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration.property.minCapacity"></a>

```go
MinCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#min_capacity NeptuneCluster#min_capacity}.

---

### NeptuneClusterTimeouts <a name="NeptuneClusterTimeouts" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/neptunecluster"

&neptunecluster.NeptuneClusterTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#create NeptuneCluster#create}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#delete NeptuneCluster#delete}. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#update NeptuneCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#create NeptuneCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#delete NeptuneCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster#update NeptuneCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NeptuneClusterServerlessV2ScalingConfigurationOutputReference <a name="NeptuneClusterServerlessV2ScalingConfigurationOutputReference" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/neptunecluster"

neptunecluster.NewNeptuneClusterServerlessV2ScalingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NeptuneClusterServerlessV2ScalingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.resetMaxCapacity">ResetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.resetMinCapacity">ResetMinCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxCapacity` <a name="ResetMaxCapacity" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.resetMaxCapacity"></a>

```go
func ResetMaxCapacity()
```

##### `ResetMinCapacity` <a name="ResetMinCapacity" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.resetMinCapacity"></a>

```go
func ResetMinCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacityInput">MinCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacity">MinCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration">NeptuneClusterServerlessV2ScalingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacityInput"></a>

```go
func MaxCapacityInput() *f64
```

- *Type:* *f64

---

##### `MinCapacityInput`<sup>Optional</sup> <a name="MinCapacityInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacityInput"></a>

```go
func MinCapacityInput() *f64
```

- *Type:* *f64

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacity"></a>

```go
func MaxCapacity() *f64
```

- *Type:* *f64

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacity"></a>

```go
func MinCapacity() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() NeptuneClusterServerlessV2ScalingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterServerlessV2ScalingConfiguration">NeptuneClusterServerlessV2ScalingConfiguration</a>

---


### NeptuneClusterTimeoutsOutputReference <a name="NeptuneClusterTimeoutsOutputReference" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/neptunecluster"

neptunecluster.NewNeptuneClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NeptuneClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.neptuneCluster.NeptuneClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



