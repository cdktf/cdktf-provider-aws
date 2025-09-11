# `docdbCluster` Submodule <a name="`docdbCluster` Submodule" id="@cdktf/provider-aws.docdbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DocdbCluster <a name="DocdbCluster" id="@cdktf/provider-aws.docdbCluster.DocdbCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster aws_docdb_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/docdbcluster"

docdbcluster.NewDocdbCluster(scope Construct, id *string, config DocdbClusterConfig) DocdbCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig">DocdbClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.Initializer.parameter.config"></a>

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
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.putServerlessV2ScalingConfiguration">PutServerlessV2ScalingConfiguration</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.resetServerlessV2ScalingConfiguration">ResetServerlessV2ScalingConfiguration</a></code> | *No description.* |
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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRestoreToPointInTime` <a name="PutRestoreToPointInTime" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.putRestoreToPointInTime"></a>

```go
func PutRestoreToPointInTime(value DocdbClusterRestoreToPointInTime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.putRestoreToPointInTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime">DocdbClusterRestoreToPointInTime</a>

---

##### `PutServerlessV2ScalingConfiguration` <a name="PutServerlessV2ScalingConfiguration" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.putServerlessV2ScalingConfiguration"></a>

```go
func PutServerlessV2ScalingConfiguration(value DocdbClusterServerlessV2ScalingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.putServerlessV2ScalingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfiguration">DocdbClusterServerlessV2ScalingConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.putTimeouts"></a>

```go
func PutTimeouts(value DocdbClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts">DocdbClusterTimeouts</a>

---

##### `ResetAllowMajorVersionUpgrade` <a name="ResetAllowMajorVersionUpgrade" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetAllowMajorVersionUpgrade"></a>

```go
func ResetAllowMajorVersionUpgrade()
```

##### `ResetApplyImmediately` <a name="ResetApplyImmediately" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetApplyImmediately"></a>

```go
func ResetApplyImmediately()
```

##### `ResetAvailabilityZones` <a name="ResetAvailabilityZones" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetAvailabilityZones"></a>

```go
func ResetAvailabilityZones()
```

##### `ResetBackupRetentionPeriod` <a name="ResetBackupRetentionPeriod" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetBackupRetentionPeriod"></a>

```go
func ResetBackupRetentionPeriod()
```

##### `ResetClusterIdentifier` <a name="ResetClusterIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetClusterIdentifier"></a>

```go
func ResetClusterIdentifier()
```

##### `ResetClusterIdentifierPrefix` <a name="ResetClusterIdentifierPrefix" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetClusterIdentifierPrefix"></a>

```go
func ResetClusterIdentifierPrefix()
```

##### `ResetClusterMembers` <a name="ResetClusterMembers" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetClusterMembers"></a>

```go
func ResetClusterMembers()
```

##### `ResetDbClusterParameterGroupName` <a name="ResetDbClusterParameterGroupName" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetDbClusterParameterGroupName"></a>

```go
func ResetDbClusterParameterGroupName()
```

##### `ResetDbSubnetGroupName` <a name="ResetDbSubnetGroupName" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetDbSubnetGroupName"></a>

```go
func ResetDbSubnetGroupName()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetDeletionProtection"></a>

```go
func ResetDeletionProtection()
```

##### `ResetEnabledCloudwatchLogsExports` <a name="ResetEnabledCloudwatchLogsExports" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetEnabledCloudwatchLogsExports"></a>

```go
func ResetEnabledCloudwatchLogsExports()
```

##### `ResetEngine` <a name="ResetEngine" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetEngine"></a>

```go
func ResetEngine()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetEngineVersion"></a>

```go
func ResetEngineVersion()
```

##### `ResetFinalSnapshotIdentifier` <a name="ResetFinalSnapshotIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetFinalSnapshotIdentifier"></a>

```go
func ResetFinalSnapshotIdentifier()
```

##### `ResetGlobalClusterIdentifier` <a name="ResetGlobalClusterIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetGlobalClusterIdentifier"></a>

```go
func ResetGlobalClusterIdentifier()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetManageMasterUserPassword` <a name="ResetManageMasterUserPassword" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetManageMasterUserPassword"></a>

```go
func ResetManageMasterUserPassword()
```

##### `ResetMasterPassword` <a name="ResetMasterPassword" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetMasterPassword"></a>

```go
func ResetMasterPassword()
```

##### `ResetMasterPasswordWo` <a name="ResetMasterPasswordWo" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetMasterPasswordWo"></a>

```go
func ResetMasterPasswordWo()
```

##### `ResetMasterPasswordWoVersion` <a name="ResetMasterPasswordWoVersion" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetMasterPasswordWoVersion"></a>

```go
func ResetMasterPasswordWoVersion()
```

##### `ResetMasterUsername` <a name="ResetMasterUsername" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetMasterUsername"></a>

```go
func ResetMasterUsername()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPreferredBackupWindow` <a name="ResetPreferredBackupWindow" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetPreferredBackupWindow"></a>

```go
func ResetPreferredBackupWindow()
```

##### `ResetPreferredMaintenanceWindow` <a name="ResetPreferredMaintenanceWindow" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetPreferredMaintenanceWindow"></a>

```go
func ResetPreferredMaintenanceWindow()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRestoreToPointInTime` <a name="ResetRestoreToPointInTime" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetRestoreToPointInTime"></a>

```go
func ResetRestoreToPointInTime()
```

##### `ResetServerlessV2ScalingConfiguration` <a name="ResetServerlessV2ScalingConfiguration" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetServerlessV2ScalingConfiguration"></a>

```go
func ResetServerlessV2ScalingConfiguration()
```

##### `ResetSkipFinalSnapshot` <a name="ResetSkipFinalSnapshot" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetSkipFinalSnapshot"></a>

```go
func ResetSkipFinalSnapshot()
```

##### `ResetSnapshotIdentifier` <a name="ResetSnapshotIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetSnapshotIdentifier"></a>

```go
func ResetSnapshotIdentifier()
```

##### `ResetStorageEncrypted` <a name="ResetStorageEncrypted" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetStorageEncrypted"></a>

```go
func ResetStorageEncrypted()
```

##### `ResetStorageType` <a name="ResetStorageType" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetStorageType"></a>

```go
func ResetStorageType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.resetVpcSecurityGroupIds"></a>

```go
func ResetVpcSecurityGroupIds()
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

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/docdbcluster"

docdbcluster.DocdbCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/docdbcluster"

docdbcluster.DocdbCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/docdbcluster"

docdbcluster.DocdbCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/docdbcluster"

docdbcluster.DocdbCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DocdbCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DocdbCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DocdbCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DocdbCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterResourceId">ClusterResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.hostedZoneId">HostedZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterUserSecret">MasterUserSecret</a></code> | <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList">DocdbClusterMasterUserSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.readerEndpoint">ReaderEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.restoreToPointInTime">RestoreToPointInTime</a></code> | <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference">DocdbClusterRestoreToPointInTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.serverlessV2ScalingConfiguration">ServerlessV2ScalingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference">DocdbClusterServerlessV2ScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference">DocdbClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.allowMajorVersionUpgradeInput">AllowMajorVersionUpgradeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.applyImmediatelyInput">ApplyImmediatelyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.availabilityZonesInput">AvailabilityZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.backupRetentionPeriodInput">BackupRetentionPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterIdentifierInput">ClusterIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterIdentifierPrefixInput">ClusterIdentifierPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterMembersInput">ClusterMembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.dbClusterParameterGroupNameInput">DbClusterParameterGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.dbSubnetGroupNameInput">DbSubnetGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.enabledCloudwatchLogsExportsInput">EnabledCloudwatchLogsExportsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.engineInput">EngineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.engineVersionInput">EngineVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.finalSnapshotIdentifierInput">FinalSnapshotIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.globalClusterIdentifierInput">GlobalClusterIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.manageMasterUserPasswordInput">ManageMasterUserPasswordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPasswordInput">MasterPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPasswordWoInput">MasterPasswordWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPasswordWoVersionInput">MasterPasswordWoVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterUsernameInput">MasterUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.preferredBackupWindowInput">PreferredBackupWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.preferredMaintenanceWindowInput">PreferredMaintenanceWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.restoreToPointInTimeInput">RestoreToPointInTimeInput</a></code> | <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime">DocdbClusterRestoreToPointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.serverlessV2ScalingConfigurationInput">ServerlessV2ScalingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfiguration">DocdbClusterServerlessV2ScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.skipFinalSnapshotInput">SkipFinalSnapshotInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.snapshotIdentifierInput">SnapshotIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.storageEncryptedInput">StorageEncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.storageTypeInput">StorageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.allowMajorVersionUpgrade">AllowMajorVersionUpgrade</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.applyImmediately">ApplyImmediately</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.backupRetentionPeriod">BackupRetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterIdentifierPrefix">ClusterIdentifierPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterMembers">ClusterMembers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.dbClusterParameterGroupName">DbClusterParameterGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.dbSubnetGroupName">DbSubnetGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.enabledCloudwatchLogsExports">EnabledCloudwatchLogsExports</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.finalSnapshotIdentifier">FinalSnapshotIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.globalClusterIdentifier">GlobalClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.manageMasterUserPassword">ManageMasterUserPassword</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPassword">MasterPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPasswordWo">MasterPasswordWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPasswordWoVersion">MasterPasswordWoVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterUsername">MasterUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.preferredBackupWindow">PreferredBackupWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.skipFinalSnapshot">SkipFinalSnapshot</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.snapshotIdentifier">SnapshotIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.storageEncrypted">StorageEncrypted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.storageType">StorageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ClusterResourceId`<sup>Required</sup> <a name="ClusterResourceId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterResourceId"></a>

```go
func ClusterResourceId() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.hostedZoneId"></a>

```go
func HostedZoneId() *string
```

- *Type:* *string

---

##### `MasterUserSecret`<sup>Required</sup> <a name="MasterUserSecret" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterUserSecret"></a>

```go
func MasterUserSecret() DocdbClusterMasterUserSecretList
```

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList">DocdbClusterMasterUserSecretList</a>

---

##### `ReaderEndpoint`<sup>Required</sup> <a name="ReaderEndpoint" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.readerEndpoint"></a>

```go
func ReaderEndpoint() *string
```

- *Type:* *string

---

##### `RestoreToPointInTime`<sup>Required</sup> <a name="RestoreToPointInTime" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.restoreToPointInTime"></a>

```go
func RestoreToPointInTime() DocdbClusterRestoreToPointInTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference">DocdbClusterRestoreToPointInTimeOutputReference</a>

---

##### `ServerlessV2ScalingConfiguration`<sup>Required</sup> <a name="ServerlessV2ScalingConfiguration" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.serverlessV2ScalingConfiguration"></a>

```go
func ServerlessV2ScalingConfiguration() DocdbClusterServerlessV2ScalingConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference">DocdbClusterServerlessV2ScalingConfigurationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.timeouts"></a>

```go
func Timeouts() DocdbClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference">DocdbClusterTimeoutsOutputReference</a>

---

##### `AllowMajorVersionUpgradeInput`<sup>Optional</sup> <a name="AllowMajorVersionUpgradeInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.allowMajorVersionUpgradeInput"></a>

```go
func AllowMajorVersionUpgradeInput() interface{}
```

- *Type:* interface{}

---

##### `ApplyImmediatelyInput`<sup>Optional</sup> <a name="ApplyImmediatelyInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.applyImmediatelyInput"></a>

```go
func ApplyImmediatelyInput() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZonesInput`<sup>Optional</sup> <a name="AvailabilityZonesInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.availabilityZonesInput"></a>

```go
func AvailabilityZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BackupRetentionPeriodInput`<sup>Optional</sup> <a name="BackupRetentionPeriodInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.backupRetentionPeriodInput"></a>

```go
func BackupRetentionPeriodInput() *f64
```

- *Type:* *f64

---

##### `ClusterIdentifierInput`<sup>Optional</sup> <a name="ClusterIdentifierInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterIdentifierInput"></a>

```go
func ClusterIdentifierInput() *string
```

- *Type:* *string

---

##### `ClusterIdentifierPrefixInput`<sup>Optional</sup> <a name="ClusterIdentifierPrefixInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterIdentifierPrefixInput"></a>

```go
func ClusterIdentifierPrefixInput() *string
```

- *Type:* *string

---

##### `ClusterMembersInput`<sup>Optional</sup> <a name="ClusterMembersInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterMembersInput"></a>

```go
func ClusterMembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `DbClusterParameterGroupNameInput`<sup>Optional</sup> <a name="DbClusterParameterGroupNameInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.dbClusterParameterGroupNameInput"></a>

```go
func DbClusterParameterGroupNameInput() *string
```

- *Type:* *string

---

##### `DbSubnetGroupNameInput`<sup>Optional</sup> <a name="DbSubnetGroupNameInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.dbSubnetGroupNameInput"></a>

```go
func DbSubnetGroupNameInput() *string
```

- *Type:* *string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.deletionProtectionInput"></a>

```go
func DeletionProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledCloudwatchLogsExportsInput`<sup>Optional</sup> <a name="EnabledCloudwatchLogsExportsInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.enabledCloudwatchLogsExportsInput"></a>

```go
func EnabledCloudwatchLogsExportsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.engineInput"></a>

```go
func EngineInput() *string
```

- *Type:* *string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.engineVersionInput"></a>

```go
func EngineVersionInput() *string
```

- *Type:* *string

---

##### `FinalSnapshotIdentifierInput`<sup>Optional</sup> <a name="FinalSnapshotIdentifierInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.finalSnapshotIdentifierInput"></a>

```go
func FinalSnapshotIdentifierInput() *string
```

- *Type:* *string

---

##### `GlobalClusterIdentifierInput`<sup>Optional</sup> <a name="GlobalClusterIdentifierInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.globalClusterIdentifierInput"></a>

```go
func GlobalClusterIdentifierInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `ManageMasterUserPasswordInput`<sup>Optional</sup> <a name="ManageMasterUserPasswordInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.manageMasterUserPasswordInput"></a>

```go
func ManageMasterUserPasswordInput() interface{}
```

- *Type:* interface{}

---

##### `MasterPasswordInput`<sup>Optional</sup> <a name="MasterPasswordInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPasswordInput"></a>

```go
func MasterPasswordInput() *string
```

- *Type:* *string

---

##### `MasterPasswordWoInput`<sup>Optional</sup> <a name="MasterPasswordWoInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPasswordWoInput"></a>

```go
func MasterPasswordWoInput() *string
```

- *Type:* *string

---

##### `MasterPasswordWoVersionInput`<sup>Optional</sup> <a name="MasterPasswordWoVersionInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPasswordWoVersionInput"></a>

```go
func MasterPasswordWoVersionInput() *f64
```

- *Type:* *f64

---

##### `MasterUsernameInput`<sup>Optional</sup> <a name="MasterUsernameInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterUsernameInput"></a>

```go
func MasterUsernameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PreferredBackupWindowInput`<sup>Optional</sup> <a name="PreferredBackupWindowInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.preferredBackupWindowInput"></a>

```go
func PreferredBackupWindowInput() *string
```

- *Type:* *string

---

##### `PreferredMaintenanceWindowInput`<sup>Optional</sup> <a name="PreferredMaintenanceWindowInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.preferredMaintenanceWindowInput"></a>

```go
func PreferredMaintenanceWindowInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RestoreToPointInTimeInput`<sup>Optional</sup> <a name="RestoreToPointInTimeInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.restoreToPointInTimeInput"></a>

```go
func RestoreToPointInTimeInput() DocdbClusterRestoreToPointInTime
```

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime">DocdbClusterRestoreToPointInTime</a>

---

##### `ServerlessV2ScalingConfigurationInput`<sup>Optional</sup> <a name="ServerlessV2ScalingConfigurationInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.serverlessV2ScalingConfigurationInput"></a>

```go
func ServerlessV2ScalingConfigurationInput() DocdbClusterServerlessV2ScalingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfiguration">DocdbClusterServerlessV2ScalingConfiguration</a>

---

##### `SkipFinalSnapshotInput`<sup>Optional</sup> <a name="SkipFinalSnapshotInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.skipFinalSnapshotInput"></a>

```go
func SkipFinalSnapshotInput() interface{}
```

- *Type:* interface{}

---

##### `SnapshotIdentifierInput`<sup>Optional</sup> <a name="SnapshotIdentifierInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.snapshotIdentifierInput"></a>

```go
func SnapshotIdentifierInput() *string
```

- *Type:* *string

---

##### `StorageEncryptedInput`<sup>Optional</sup> <a name="StorageEncryptedInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.storageEncryptedInput"></a>

```go
func StorageEncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.storageTypeInput"></a>

```go
func StorageTypeInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.vpcSecurityGroupIdsInput"></a>

```go
func VpcSecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowMajorVersionUpgrade`<sup>Required</sup> <a name="AllowMajorVersionUpgrade" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.allowMajorVersionUpgrade"></a>

```go
func AllowMajorVersionUpgrade() interface{}
```

- *Type:* interface{}

---

##### `ApplyImmediately`<sup>Required</sup> <a name="ApplyImmediately" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.applyImmediately"></a>

```go
func ApplyImmediately() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.availabilityZones"></a>

```go
func AvailabilityZones() *[]*string
```

- *Type:* *[]*string

---

##### `BackupRetentionPeriod`<sup>Required</sup> <a name="BackupRetentionPeriod" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.backupRetentionPeriod"></a>

```go
func BackupRetentionPeriod() *f64
```

- *Type:* *f64

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterIdentifier"></a>

```go
func ClusterIdentifier() *string
```

- *Type:* *string

---

##### `ClusterIdentifierPrefix`<sup>Required</sup> <a name="ClusterIdentifierPrefix" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterIdentifierPrefix"></a>

```go
func ClusterIdentifierPrefix() *string
```

- *Type:* *string

---

##### `ClusterMembers`<sup>Required</sup> <a name="ClusterMembers" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.clusterMembers"></a>

```go
func ClusterMembers() *[]*string
```

- *Type:* *[]*string

---

##### `DbClusterParameterGroupName`<sup>Required</sup> <a name="DbClusterParameterGroupName" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.dbClusterParameterGroupName"></a>

```go
func DbClusterParameterGroupName() *string
```

- *Type:* *string

---

##### `DbSubnetGroupName`<sup>Required</sup> <a name="DbSubnetGroupName" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.dbSubnetGroupName"></a>

```go
func DbSubnetGroupName() *string
```

- *Type:* *string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.deletionProtection"></a>

```go
func DeletionProtection() interface{}
```

- *Type:* interface{}

---

##### `EnabledCloudwatchLogsExports`<sup>Required</sup> <a name="EnabledCloudwatchLogsExports" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.enabledCloudwatchLogsExports"></a>

```go
func EnabledCloudwatchLogsExports() *[]*string
```

- *Type:* *[]*string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `FinalSnapshotIdentifier`<sup>Required</sup> <a name="FinalSnapshotIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.finalSnapshotIdentifier"></a>

```go
func FinalSnapshotIdentifier() *string
```

- *Type:* *string

---

##### `GlobalClusterIdentifier`<sup>Required</sup> <a name="GlobalClusterIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.globalClusterIdentifier"></a>

```go
func GlobalClusterIdentifier() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `ManageMasterUserPassword`<sup>Required</sup> <a name="ManageMasterUserPassword" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.manageMasterUserPassword"></a>

```go
func ManageMasterUserPassword() interface{}
```

- *Type:* interface{}

---

##### `MasterPassword`<sup>Required</sup> <a name="MasterPassword" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPassword"></a>

```go
func MasterPassword() *string
```

- *Type:* *string

---

##### `MasterPasswordWo`<sup>Required</sup> <a name="MasterPasswordWo" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPasswordWo"></a>

```go
func MasterPasswordWo() *string
```

- *Type:* *string

---

##### `MasterPasswordWoVersion`<sup>Required</sup> <a name="MasterPasswordWoVersion" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterPasswordWoVersion"></a>

```go
func MasterPasswordWoVersion() *f64
```

- *Type:* *f64

---

##### `MasterUsername`<sup>Required</sup> <a name="MasterUsername" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.masterUsername"></a>

```go
func MasterUsername() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PreferredBackupWindow`<sup>Required</sup> <a name="PreferredBackupWindow" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.preferredBackupWindow"></a>

```go
func PreferredBackupWindow() *string
```

- *Type:* *string

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.preferredMaintenanceWindow"></a>

```go
func PreferredMaintenanceWindow() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SkipFinalSnapshot`<sup>Required</sup> <a name="SkipFinalSnapshot" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.skipFinalSnapshot"></a>

```go
func SkipFinalSnapshot() interface{}
```

- *Type:* interface{}

---

##### `SnapshotIdentifier`<sup>Required</sup> <a name="SnapshotIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.snapshotIdentifier"></a>

```go
func SnapshotIdentifier() *string
```

- *Type:* *string

---

##### `StorageEncrypted`<sup>Required</sup> <a name="StorageEncrypted" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.storageEncrypted"></a>

```go
func StorageEncrypted() interface{}
```

- *Type:* interface{}

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.storageType"></a>

```go
func StorageType() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.vpcSecurityGroupIds"></a>

```go
func VpcSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.docdbCluster.DocdbCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DocdbClusterConfig <a name="DocdbClusterConfig" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/docdbcluster"

&docdbcluster.DocdbClusterConfig {
	Connection: interface{},
	Count: interface{},
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
	ClusterMembers: *[]*string,
	DbClusterParameterGroupName: *string,
	DbSubnetGroupName: *string,
	DeletionProtection: interface{},
	EnabledCloudwatchLogsExports: *[]*string,
	Engine: *string,
	EngineVersion: *string,
	FinalSnapshotIdentifier: *string,
	GlobalClusterIdentifier: *string,
	Id: *string,
	KmsKeyId: *string,
	ManageMasterUserPassword: interface{},
	MasterPassword: *string,
	MasterPasswordWo: *string,
	MasterPasswordWoVersion: *f64,
	MasterUsername: *string,
	Port: *f64,
	PreferredBackupWindow: *string,
	PreferredMaintenanceWindow: *string,
	Region: *string,
	RestoreToPointInTime: github.com/cdktf/cdktf-provider-aws-go/aws/v21.docdbCluster.DocdbClusterRestoreToPointInTime,
	ServerlessV2ScalingConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws/v21.docdbCluster.DocdbClusterServerlessV2ScalingConfiguration,
	SkipFinalSnapshot: interface{},
	SnapshotIdentifier: *string,
	StorageEncrypted: interface{},
	StorageType: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v21.docdbCluster.DocdbClusterTimeouts,
	VpcSecurityGroupIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.allowMajorVersionUpgrade">AllowMajorVersionUpgrade</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#allow_major_version_upgrade DocdbCluster#allow_major_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.applyImmediately">ApplyImmediately</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#apply_immediately DocdbCluster#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#availability_zones DocdbCluster#availability_zones}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.backupRetentionPeriod">BackupRetentionPeriod</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#backup_retention_period DocdbCluster#backup_retention_period}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#cluster_identifier DocdbCluster#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.clusterIdentifierPrefix">ClusterIdentifierPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#cluster_identifier_prefix DocdbCluster#cluster_identifier_prefix}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.clusterMembers">ClusterMembers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#cluster_members DocdbCluster#cluster_members}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.dbClusterParameterGroupName">DbClusterParameterGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#db_cluster_parameter_group_name DocdbCluster#db_cluster_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.dbSubnetGroupName">DbSubnetGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#db_subnet_group_name DocdbCluster#db_subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#deletion_protection DocdbCluster#deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.enabledCloudwatchLogsExports">EnabledCloudwatchLogsExports</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#enabled_cloudwatch_logs_exports DocdbCluster#enabled_cloudwatch_logs_exports}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.engine">Engine</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#engine DocdbCluster#engine}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#engine_version DocdbCluster#engine_version}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.finalSnapshotIdentifier">FinalSnapshotIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#final_snapshot_identifier DocdbCluster#final_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.globalClusterIdentifier">GlobalClusterIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#global_cluster_identifier DocdbCluster#global_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#id DocdbCluster#id}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#kms_key_id DocdbCluster#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.manageMasterUserPassword">ManageMasterUserPassword</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#manage_master_user_password DocdbCluster#manage_master_user_password}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.masterPassword">MasterPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#master_password DocdbCluster#master_password}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.masterPasswordWo">MasterPasswordWo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#master_password_wo DocdbCluster#master_password_wo}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.masterPasswordWoVersion">MasterPasswordWoVersion</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#master_password_wo_version DocdbCluster#master_password_wo_version}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.masterUsername">MasterUsername</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#master_username DocdbCluster#master_username}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#port DocdbCluster#port}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.preferredBackupWindow">PreferredBackupWindow</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#preferred_backup_window DocdbCluster#preferred_backup_window}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#preferred_maintenance_window DocdbCluster#preferred_maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.restoreToPointInTime">RestoreToPointInTime</a></code> | <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime">DocdbClusterRestoreToPointInTime</a></code> | restore_to_point_in_time block. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.serverlessV2ScalingConfiguration">ServerlessV2ScalingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfiguration">DocdbClusterServerlessV2ScalingConfiguration</a></code> | serverless_v2_scaling_configuration block. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.skipFinalSnapshot">SkipFinalSnapshot</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#skip_final_snapshot DocdbCluster#skip_final_snapshot}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.snapshotIdentifier">SnapshotIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#snapshot_identifier DocdbCluster#snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.storageEncrypted">StorageEncrypted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#storage_encrypted DocdbCluster#storage_encrypted}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.storageType">StorageType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#storage_type DocdbCluster#storage_type}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#tags DocdbCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#tags_all DocdbCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts">DocdbClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#vpc_security_group_ids DocdbCluster#vpc_security_group_ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowMajorVersionUpgrade`<sup>Optional</sup> <a name="AllowMajorVersionUpgrade" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.allowMajorVersionUpgrade"></a>

```go
AllowMajorVersionUpgrade interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#allow_major_version_upgrade DocdbCluster#allow_major_version_upgrade}.

---

##### `ApplyImmediately`<sup>Optional</sup> <a name="ApplyImmediately" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.applyImmediately"></a>

```go
ApplyImmediately interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#apply_immediately DocdbCluster#apply_immediately}.

---

##### `AvailabilityZones`<sup>Optional</sup> <a name="AvailabilityZones" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.availabilityZones"></a>

```go
AvailabilityZones *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#availability_zones DocdbCluster#availability_zones}.

---

##### `BackupRetentionPeriod`<sup>Optional</sup> <a name="BackupRetentionPeriod" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.backupRetentionPeriod"></a>

```go
BackupRetentionPeriod *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#backup_retention_period DocdbCluster#backup_retention_period}.

---

##### `ClusterIdentifier`<sup>Optional</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.clusterIdentifier"></a>

```go
ClusterIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#cluster_identifier DocdbCluster#cluster_identifier}.

---

##### `ClusterIdentifierPrefix`<sup>Optional</sup> <a name="ClusterIdentifierPrefix" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.clusterIdentifierPrefix"></a>

```go
ClusterIdentifierPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#cluster_identifier_prefix DocdbCluster#cluster_identifier_prefix}.

---

##### `ClusterMembers`<sup>Optional</sup> <a name="ClusterMembers" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.clusterMembers"></a>

```go
ClusterMembers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#cluster_members DocdbCluster#cluster_members}.

---

##### `DbClusterParameterGroupName`<sup>Optional</sup> <a name="DbClusterParameterGroupName" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.dbClusterParameterGroupName"></a>

```go
DbClusterParameterGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#db_cluster_parameter_group_name DocdbCluster#db_cluster_parameter_group_name}.

---

##### `DbSubnetGroupName`<sup>Optional</sup> <a name="DbSubnetGroupName" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.dbSubnetGroupName"></a>

```go
DbSubnetGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#db_subnet_group_name DocdbCluster#db_subnet_group_name}.

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.deletionProtection"></a>

```go
DeletionProtection interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#deletion_protection DocdbCluster#deletion_protection}.

---

##### `EnabledCloudwatchLogsExports`<sup>Optional</sup> <a name="EnabledCloudwatchLogsExports" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.enabledCloudwatchLogsExports"></a>

```go
EnabledCloudwatchLogsExports *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#enabled_cloudwatch_logs_exports DocdbCluster#enabled_cloudwatch_logs_exports}.

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.engine"></a>

```go
Engine *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#engine DocdbCluster#engine}.

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.engineVersion"></a>

```go
EngineVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#engine_version DocdbCluster#engine_version}.

---

##### `FinalSnapshotIdentifier`<sup>Optional</sup> <a name="FinalSnapshotIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.finalSnapshotIdentifier"></a>

```go
FinalSnapshotIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#final_snapshot_identifier DocdbCluster#final_snapshot_identifier}.

---

##### `GlobalClusterIdentifier`<sup>Optional</sup> <a name="GlobalClusterIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.globalClusterIdentifier"></a>

```go
GlobalClusterIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#global_cluster_identifier DocdbCluster#global_cluster_identifier}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#id DocdbCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#kms_key_id DocdbCluster#kms_key_id}.

---

##### `ManageMasterUserPassword`<sup>Optional</sup> <a name="ManageMasterUserPassword" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.manageMasterUserPassword"></a>

```go
ManageMasterUserPassword interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#manage_master_user_password DocdbCluster#manage_master_user_password}.

---

##### `MasterPassword`<sup>Optional</sup> <a name="MasterPassword" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.masterPassword"></a>

```go
MasterPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#master_password DocdbCluster#master_password}.

---

##### `MasterPasswordWo`<sup>Optional</sup> <a name="MasterPasswordWo" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.masterPasswordWo"></a>

```go
MasterPasswordWo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#master_password_wo DocdbCluster#master_password_wo}.

---

##### `MasterPasswordWoVersion`<sup>Optional</sup> <a name="MasterPasswordWoVersion" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.masterPasswordWoVersion"></a>

```go
MasterPasswordWoVersion *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#master_password_wo_version DocdbCluster#master_password_wo_version}.

---

##### `MasterUsername`<sup>Optional</sup> <a name="MasterUsername" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.masterUsername"></a>

```go
MasterUsername *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#master_username DocdbCluster#master_username}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#port DocdbCluster#port}.

---

##### `PreferredBackupWindow`<sup>Optional</sup> <a name="PreferredBackupWindow" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.preferredBackupWindow"></a>

```go
PreferredBackupWindow *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#preferred_backup_window DocdbCluster#preferred_backup_window}.

---

##### `PreferredMaintenanceWindow`<sup>Optional</sup> <a name="PreferredMaintenanceWindow" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.preferredMaintenanceWindow"></a>

```go
PreferredMaintenanceWindow *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#preferred_maintenance_window DocdbCluster#preferred_maintenance_window}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#region DocdbCluster#region}

---

##### `RestoreToPointInTime`<sup>Optional</sup> <a name="RestoreToPointInTime" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.restoreToPointInTime"></a>

```go
RestoreToPointInTime DocdbClusterRestoreToPointInTime
```

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime">DocdbClusterRestoreToPointInTime</a>

restore_to_point_in_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#restore_to_point_in_time DocdbCluster#restore_to_point_in_time}

---

##### `ServerlessV2ScalingConfiguration`<sup>Optional</sup> <a name="ServerlessV2ScalingConfiguration" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.serverlessV2ScalingConfiguration"></a>

```go
ServerlessV2ScalingConfiguration DocdbClusterServerlessV2ScalingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfiguration">DocdbClusterServerlessV2ScalingConfiguration</a>

serverless_v2_scaling_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#serverless_v2_scaling_configuration DocdbCluster#serverless_v2_scaling_configuration}

---

##### `SkipFinalSnapshot`<sup>Optional</sup> <a name="SkipFinalSnapshot" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.skipFinalSnapshot"></a>

```go
SkipFinalSnapshot interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#skip_final_snapshot DocdbCluster#skip_final_snapshot}.

---

##### `SnapshotIdentifier`<sup>Optional</sup> <a name="SnapshotIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.snapshotIdentifier"></a>

```go
SnapshotIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#snapshot_identifier DocdbCluster#snapshot_identifier}.

---

##### `StorageEncrypted`<sup>Optional</sup> <a name="StorageEncrypted" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.storageEncrypted"></a>

```go
StorageEncrypted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#storage_encrypted DocdbCluster#storage_encrypted}.

---

##### `StorageType`<sup>Optional</sup> <a name="StorageType" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.storageType"></a>

```go
StorageType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#storage_type DocdbCluster#storage_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#tags DocdbCluster#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#tags_all DocdbCluster#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.timeouts"></a>

```go
Timeouts DocdbClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts">DocdbClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#timeouts DocdbCluster#timeouts}

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.docdbCluster.DocdbClusterConfig.property.vpcSecurityGroupIds"></a>

```go
VpcSecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#vpc_security_group_ids DocdbCluster#vpc_security_group_ids}.

---

### DocdbClusterMasterUserSecret <a name="DocdbClusterMasterUserSecret" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecret.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/docdbcluster"

&docdbcluster.DocdbClusterMasterUserSecret {

}
```


### DocdbClusterRestoreToPointInTime <a name="DocdbClusterRestoreToPointInTime" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/docdbcluster"

&docdbcluster.DocdbClusterRestoreToPointInTime {
	SourceClusterIdentifier: *string,
	RestoreToTime: *string,
	RestoreType: *string,
	UseLatestRestorableTime: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime.property.sourceClusterIdentifier">SourceClusterIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#source_cluster_identifier DocdbCluster#source_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime.property.restoreToTime">RestoreToTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#restore_to_time DocdbCluster#restore_to_time}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime.property.restoreType">RestoreType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#restore_type DocdbCluster#restore_type}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime.property.useLatestRestorableTime">UseLatestRestorableTime</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#use_latest_restorable_time DocdbCluster#use_latest_restorable_time}. |

---

##### `SourceClusterIdentifier`<sup>Required</sup> <a name="SourceClusterIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime.property.sourceClusterIdentifier"></a>

```go
SourceClusterIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#source_cluster_identifier DocdbCluster#source_cluster_identifier}.

---

##### `RestoreToTime`<sup>Optional</sup> <a name="RestoreToTime" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime.property.restoreToTime"></a>

```go
RestoreToTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#restore_to_time DocdbCluster#restore_to_time}.

---

##### `RestoreType`<sup>Optional</sup> <a name="RestoreType" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime.property.restoreType"></a>

```go
RestoreType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#restore_type DocdbCluster#restore_type}.

---

##### `UseLatestRestorableTime`<sup>Optional</sup> <a name="UseLatestRestorableTime" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime.property.useLatestRestorableTime"></a>

```go
UseLatestRestorableTime interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#use_latest_restorable_time DocdbCluster#use_latest_restorable_time}.

---

### DocdbClusterServerlessV2ScalingConfiguration <a name="DocdbClusterServerlessV2ScalingConfiguration" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/docdbcluster"

&docdbcluster.DocdbClusterServerlessV2ScalingConfiguration {
	MaxCapacity: *f64,
	MinCapacity: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfiguration.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#max_capacity DocdbCluster#max_capacity}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfiguration.property.minCapacity">MinCapacity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#min_capacity DocdbCluster#min_capacity}. |

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfiguration.property.maxCapacity"></a>

```go
MaxCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#max_capacity DocdbCluster#max_capacity}.

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfiguration.property.minCapacity"></a>

```go
MinCapacity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#min_capacity DocdbCluster#min_capacity}.

---

### DocdbClusterTimeouts <a name="DocdbClusterTimeouts" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/docdbcluster"

&docdbcluster.DocdbClusterTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#create DocdbCluster#create}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#delete DocdbCluster#delete}. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#update DocdbCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#create DocdbCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#delete DocdbCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/docdb_cluster#update DocdbCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DocdbClusterMasterUserSecretList <a name="DocdbClusterMasterUserSecretList" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/docdbcluster"

docdbcluster.NewDocdbClusterMasterUserSecretList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DocdbClusterMasterUserSecretList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.get"></a>

```go
func Get(index *f64) DocdbClusterMasterUserSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DocdbClusterMasterUserSecretOutputReference <a name="DocdbClusterMasterUserSecretOutputReference" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/docdbcluster"

docdbcluster.NewDocdbClusterMasterUserSecretOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DocdbClusterMasterUserSecretOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.secretStatus">SecretStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecret">DocdbClusterMasterUserSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `SecretStatus`<sup>Required</sup> <a name="SecretStatus" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.secretStatus"></a>

```go
func SecretStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecretOutputReference.property.internalValue"></a>

```go
func InternalValue() DocdbClusterMasterUserSecret
```

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterMasterUserSecret">DocdbClusterMasterUserSecret</a>

---


### DocdbClusterRestoreToPointInTimeOutputReference <a name="DocdbClusterRestoreToPointInTimeOutputReference" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/docdbcluster"

docdbcluster.NewDocdbClusterRestoreToPointInTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DocdbClusterRestoreToPointInTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRestoreToTime` <a name="ResetRestoreToTime" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.resetRestoreToTime"></a>

```go
func ResetRestoreToTime()
```

##### `ResetRestoreType` <a name="ResetRestoreType" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.resetRestoreType"></a>

```go
func ResetRestoreType()
```

##### `ResetUseLatestRestorableTime` <a name="ResetUseLatestRestorableTime" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.resetUseLatestRestorableTime"></a>

```go
func ResetUseLatestRestorableTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.restoreToTimeInput">RestoreToTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.restoreTypeInput">RestoreTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.sourceClusterIdentifierInput">SourceClusterIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.useLatestRestorableTimeInput">UseLatestRestorableTimeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.restoreToTime">RestoreToTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.restoreType">RestoreType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.sourceClusterIdentifier">SourceClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.useLatestRestorableTime">UseLatestRestorableTime</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime">DocdbClusterRestoreToPointInTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RestoreToTimeInput`<sup>Optional</sup> <a name="RestoreToTimeInput" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.restoreToTimeInput"></a>

```go
func RestoreToTimeInput() *string
```

- *Type:* *string

---

##### `RestoreTypeInput`<sup>Optional</sup> <a name="RestoreTypeInput" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.restoreTypeInput"></a>

```go
func RestoreTypeInput() *string
```

- *Type:* *string

---

##### `SourceClusterIdentifierInput`<sup>Optional</sup> <a name="SourceClusterIdentifierInput" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.sourceClusterIdentifierInput"></a>

```go
func SourceClusterIdentifierInput() *string
```

- *Type:* *string

---

##### `UseLatestRestorableTimeInput`<sup>Optional</sup> <a name="UseLatestRestorableTimeInput" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.useLatestRestorableTimeInput"></a>

```go
func UseLatestRestorableTimeInput() interface{}
```

- *Type:* interface{}

---

##### `RestoreToTime`<sup>Required</sup> <a name="RestoreToTime" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.restoreToTime"></a>

```go
func RestoreToTime() *string
```

- *Type:* *string

---

##### `RestoreType`<sup>Required</sup> <a name="RestoreType" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.restoreType"></a>

```go
func RestoreType() *string
```

- *Type:* *string

---

##### `SourceClusterIdentifier`<sup>Required</sup> <a name="SourceClusterIdentifier" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.sourceClusterIdentifier"></a>

```go
func SourceClusterIdentifier() *string
```

- *Type:* *string

---

##### `UseLatestRestorableTime`<sup>Required</sup> <a name="UseLatestRestorableTime" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.useLatestRestorableTime"></a>

```go
func UseLatestRestorableTime() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() DocdbClusterRestoreToPointInTime
```

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterRestoreToPointInTime">DocdbClusterRestoreToPointInTime</a>

---


### DocdbClusterServerlessV2ScalingConfigurationOutputReference <a name="DocdbClusterServerlessV2ScalingConfigurationOutputReference" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/docdbcluster"

docdbcluster.NewDocdbClusterServerlessV2ScalingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DocdbClusterServerlessV2ScalingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacityInput">MinCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacity">MinCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfiguration">DocdbClusterServerlessV2ScalingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacityInput"></a>

```go
func MaxCapacityInput() *f64
```

- *Type:* *f64

---

##### `MinCapacityInput`<sup>Optional</sup> <a name="MinCapacityInput" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacityInput"></a>

```go
func MinCapacityInput() *f64
```

- *Type:* *f64

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.property.maxCapacity"></a>

```go
func MaxCapacity() *f64
```

- *Type:* *f64

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.property.minCapacity"></a>

```go
func MinCapacity() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DocdbClusterServerlessV2ScalingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterServerlessV2ScalingConfiguration">DocdbClusterServerlessV2ScalingConfiguration</a>

---


### DocdbClusterTimeoutsOutputReference <a name="DocdbClusterTimeoutsOutputReference" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/docdbcluster"

docdbcluster.NewDocdbClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DocdbClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.docdbCluster.DocdbClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



