# `redshiftCluster` Submodule <a name="`redshiftCluster` Submodule" id="@cdktf/provider-aws.redshiftCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftCluster <a name="RedshiftCluster" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster aws_redshift_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftcluster"

redshiftcluster.NewRedshiftCluster(scope Construct, id *string, config RedshiftClusterConfig) RedshiftCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig">RedshiftClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig">RedshiftClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putLogging">PutLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putSnapshotCopy">PutSnapshotCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAllowVersionUpgrade">ResetAllowVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetApplyImmediately">ResetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAquaConfigurationStatus">ResetAquaConfigurationStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAutomatedSnapshotRetentionPeriod">ResetAutomatedSnapshotRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAvailabilityZoneRelocationEnabled">ResetAvailabilityZoneRelocationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterParameterGroupName">ResetClusterParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterPublicKey">ResetClusterPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterRevisionNumber">ResetClusterRevisionNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterSecurityGroups">ResetClusterSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterSubnetGroupName">ResetClusterSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterType">ResetClusterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterVersion">ResetClusterVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetDefaultIamRoleArn">ResetDefaultIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetElasticIp">ResetElasticIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetEnhancedVpcRouting">ResetEnhancedVpcRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetFinalSnapshotIdentifier">ResetFinalSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetIamRoles">ResetIamRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetLogging">ResetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetMaintenanceTrackName">ResetMaintenanceTrackName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetManualSnapshotRetentionPeriod">ResetManualSnapshotRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetMasterPassword">ResetMasterPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetMasterUsername">ResetMasterUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetNumberOfNodes">ResetNumberOfNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetOwnerAccount">ResetOwnerAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetPreferredMaintenanceWindow">ResetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetPubliclyAccessible">ResetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetSkipFinalSnapshot">ResetSkipFinalSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetSnapshotClusterIdentifier">ResetSnapshotClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetSnapshotCopy">ResetSnapshotCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetSnapshotIdentifier">ResetSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetVpcSecurityGroupIds">ResetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutLogging` <a name="PutLogging" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putLogging"></a>

```go
func PutLogging(value RedshiftClusterLogging)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging">RedshiftClusterLogging</a>

---

##### `PutSnapshotCopy` <a name="PutSnapshotCopy" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putSnapshotCopy"></a>

```go
func PutSnapshotCopy(value RedshiftClusterSnapshotCopy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putSnapshotCopy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy">RedshiftClusterSnapshotCopy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putTimeouts"></a>

```go
func PutTimeouts(value RedshiftClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts">RedshiftClusterTimeouts</a>

---

##### `ResetAllowVersionUpgrade` <a name="ResetAllowVersionUpgrade" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAllowVersionUpgrade"></a>

```go
func ResetAllowVersionUpgrade()
```

##### `ResetApplyImmediately` <a name="ResetApplyImmediately" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetApplyImmediately"></a>

```go
func ResetApplyImmediately()
```

##### `ResetAquaConfigurationStatus` <a name="ResetAquaConfigurationStatus" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAquaConfigurationStatus"></a>

```go
func ResetAquaConfigurationStatus()
```

##### `ResetAutomatedSnapshotRetentionPeriod` <a name="ResetAutomatedSnapshotRetentionPeriod" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAutomatedSnapshotRetentionPeriod"></a>

```go
func ResetAutomatedSnapshotRetentionPeriod()
```

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetAvailabilityZoneRelocationEnabled` <a name="ResetAvailabilityZoneRelocationEnabled" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetAvailabilityZoneRelocationEnabled"></a>

```go
func ResetAvailabilityZoneRelocationEnabled()
```

##### `ResetClusterParameterGroupName` <a name="ResetClusterParameterGroupName" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterParameterGroupName"></a>

```go
func ResetClusterParameterGroupName()
```

##### `ResetClusterPublicKey` <a name="ResetClusterPublicKey" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterPublicKey"></a>

```go
func ResetClusterPublicKey()
```

##### `ResetClusterRevisionNumber` <a name="ResetClusterRevisionNumber" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterRevisionNumber"></a>

```go
func ResetClusterRevisionNumber()
```

##### `ResetClusterSecurityGroups` <a name="ResetClusterSecurityGroups" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterSecurityGroups"></a>

```go
func ResetClusterSecurityGroups()
```

##### `ResetClusterSubnetGroupName` <a name="ResetClusterSubnetGroupName" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterSubnetGroupName"></a>

```go
func ResetClusterSubnetGroupName()
```

##### `ResetClusterType` <a name="ResetClusterType" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterType"></a>

```go
func ResetClusterType()
```

##### `ResetClusterVersion` <a name="ResetClusterVersion" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetClusterVersion"></a>

```go
func ResetClusterVersion()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetDefaultIamRoleArn` <a name="ResetDefaultIamRoleArn" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetDefaultIamRoleArn"></a>

```go
func ResetDefaultIamRoleArn()
```

##### `ResetElasticIp` <a name="ResetElasticIp" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetElasticIp"></a>

```go
func ResetElasticIp()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetEncrypted"></a>

```go
func ResetEncrypted()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetEnhancedVpcRouting` <a name="ResetEnhancedVpcRouting" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetEnhancedVpcRouting"></a>

```go
func ResetEnhancedVpcRouting()
```

##### `ResetFinalSnapshotIdentifier` <a name="ResetFinalSnapshotIdentifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetFinalSnapshotIdentifier"></a>

```go
func ResetFinalSnapshotIdentifier()
```

##### `ResetIamRoles` <a name="ResetIamRoles" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetIamRoles"></a>

```go
func ResetIamRoles()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetLogging` <a name="ResetLogging" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetLogging"></a>

```go
func ResetLogging()
```

##### `ResetMaintenanceTrackName` <a name="ResetMaintenanceTrackName" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetMaintenanceTrackName"></a>

```go
func ResetMaintenanceTrackName()
```

##### `ResetManualSnapshotRetentionPeriod` <a name="ResetManualSnapshotRetentionPeriod" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetManualSnapshotRetentionPeriod"></a>

```go
func ResetManualSnapshotRetentionPeriod()
```

##### `ResetMasterPassword` <a name="ResetMasterPassword" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetMasterPassword"></a>

```go
func ResetMasterPassword()
```

##### `ResetMasterUsername` <a name="ResetMasterUsername" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetMasterUsername"></a>

```go
func ResetMasterUsername()
```

##### `ResetNumberOfNodes` <a name="ResetNumberOfNodes" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetNumberOfNodes"></a>

```go
func ResetNumberOfNodes()
```

##### `ResetOwnerAccount` <a name="ResetOwnerAccount" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetOwnerAccount"></a>

```go
func ResetOwnerAccount()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPreferredMaintenanceWindow` <a name="ResetPreferredMaintenanceWindow" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetPreferredMaintenanceWindow"></a>

```go
func ResetPreferredMaintenanceWindow()
```

##### `ResetPubliclyAccessible` <a name="ResetPubliclyAccessible" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetPubliclyAccessible"></a>

```go
func ResetPubliclyAccessible()
```

##### `ResetSkipFinalSnapshot` <a name="ResetSkipFinalSnapshot" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetSkipFinalSnapshot"></a>

```go
func ResetSkipFinalSnapshot()
```

##### `ResetSnapshotClusterIdentifier` <a name="ResetSnapshotClusterIdentifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetSnapshotClusterIdentifier"></a>

```go
func ResetSnapshotClusterIdentifier()
```

##### `ResetSnapshotCopy` <a name="ResetSnapshotCopy" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetSnapshotCopy"></a>

```go
func ResetSnapshotCopy()
```

##### `ResetSnapshotIdentifier` <a name="ResetSnapshotIdentifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetSnapshotIdentifier"></a>

```go
func ResetSnapshotIdentifier()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.resetVpcSecurityGroupIds"></a>

```go
func ResetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftcluster"

redshiftcluster.RedshiftCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftcluster"

redshiftcluster.RedshiftCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftcluster"

redshiftcluster.RedshiftCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterNodes">ClusterNodes</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList">RedshiftClusterClusterNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference">RedshiftClusterLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotCopy">SnapshotCopy</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference">RedshiftClusterSnapshotCopyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference">RedshiftClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.allowVersionUpgradeInput">AllowVersionUpgradeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.applyImmediatelyInput">ApplyImmediatelyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.aquaConfigurationStatusInput">AquaConfigurationStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.automatedSnapshotRetentionPeriodInput">AutomatedSnapshotRetentionPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationEnabledInput">AvailabilityZoneRelocationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterIdentifierInput">ClusterIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterParameterGroupNameInput">ClusterParameterGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterPublicKeyInput">ClusterPublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterRevisionNumberInput">ClusterRevisionNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterSecurityGroupsInput">ClusterSecurityGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterSubnetGroupNameInput">ClusterSubnetGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterTypeInput">ClusterTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterVersionInput">ClusterVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.defaultIamRoleArnInput">DefaultIamRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.elasticIpInput">ElasticIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.encryptedInput">EncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.enhancedVpcRoutingInput">EnhancedVpcRoutingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.finalSnapshotIdentifierInput">FinalSnapshotIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.iamRolesInput">IamRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.loggingInput">LoggingInput</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging">RedshiftClusterLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.maintenanceTrackNameInput">MaintenanceTrackNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.manualSnapshotRetentionPeriodInput">ManualSnapshotRetentionPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterPasswordInput">MasterPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterUsernameInput">MasterUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.nodeTypeInput">NodeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.numberOfNodesInput">NumberOfNodesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.ownerAccountInput">OwnerAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.preferredMaintenanceWindowInput">PreferredMaintenanceWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.publiclyAccessibleInput">PubliclyAccessibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.skipFinalSnapshotInput">SkipFinalSnapshotInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotClusterIdentifierInput">SnapshotClusterIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotCopyInput">SnapshotCopyInput</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy">RedshiftClusterSnapshotCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotIdentifierInput">SnapshotIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.allowVersionUpgrade">AllowVersionUpgrade</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.applyImmediately">ApplyImmediately</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.aquaConfigurationStatus">AquaConfigurationStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.automatedSnapshotRetentionPeriod">AutomatedSnapshotRetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationEnabled">AvailabilityZoneRelocationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterParameterGroupName">ClusterParameterGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterPublicKey">ClusterPublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterRevisionNumber">ClusterRevisionNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterSecurityGroups">ClusterSecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterSubnetGroupName">ClusterSubnetGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterType">ClusterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterVersion">ClusterVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.defaultIamRoleArn">DefaultIamRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.elasticIp">ElasticIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.enhancedVpcRouting">EnhancedVpcRouting</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.finalSnapshotIdentifier">FinalSnapshotIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.iamRoles">IamRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.maintenanceTrackName">MaintenanceTrackName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.manualSnapshotRetentionPeriod">ManualSnapshotRetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterPassword">MasterPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterUsername">MasterUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.nodeType">NodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.numberOfNodes">NumberOfNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.ownerAccount">OwnerAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.skipFinalSnapshot">SkipFinalSnapshot</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotClusterIdentifier">SnapshotClusterIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotIdentifier">SnapshotIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ClusterNodes`<sup>Required</sup> <a name="ClusterNodes" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterNodes"></a>

```go
func ClusterNodes() RedshiftClusterClusterNodesList
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList">RedshiftClusterClusterNodesList</a>

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.logging"></a>

```go
func Logging() RedshiftClusterLoggingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference">RedshiftClusterLoggingOutputReference</a>

---

##### `SnapshotCopy`<sup>Required</sup> <a name="SnapshotCopy" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotCopy"></a>

```go
func SnapshotCopy() RedshiftClusterSnapshotCopyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference">RedshiftClusterSnapshotCopyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.timeouts"></a>

```go
func Timeouts() RedshiftClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference">RedshiftClusterTimeoutsOutputReference</a>

---

##### `AllowVersionUpgradeInput`<sup>Optional</sup> <a name="AllowVersionUpgradeInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.allowVersionUpgradeInput"></a>

```go
func AllowVersionUpgradeInput() interface{}
```

- *Type:* interface{}

---

##### `ApplyImmediatelyInput`<sup>Optional</sup> <a name="ApplyImmediatelyInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.applyImmediatelyInput"></a>

```go
func ApplyImmediatelyInput() interface{}
```

- *Type:* interface{}

---

##### `AquaConfigurationStatusInput`<sup>Optional</sup> <a name="AquaConfigurationStatusInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.aquaConfigurationStatusInput"></a>

```go
func AquaConfigurationStatusInput() *string
```

- *Type:* *string

---

##### `AutomatedSnapshotRetentionPeriodInput`<sup>Optional</sup> <a name="AutomatedSnapshotRetentionPeriodInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.automatedSnapshotRetentionPeriodInput"></a>

```go
func AutomatedSnapshotRetentionPeriodInput() *f64
```

- *Type:* *f64

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `AvailabilityZoneRelocationEnabledInput`<sup>Optional</sup> <a name="AvailabilityZoneRelocationEnabledInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationEnabledInput"></a>

```go
func AvailabilityZoneRelocationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterIdentifierInput`<sup>Optional</sup> <a name="ClusterIdentifierInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterIdentifierInput"></a>

```go
func ClusterIdentifierInput() *string
```

- *Type:* *string

---

##### `ClusterParameterGroupNameInput`<sup>Optional</sup> <a name="ClusterParameterGroupNameInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterParameterGroupNameInput"></a>

```go
func ClusterParameterGroupNameInput() *string
```

- *Type:* *string

---

##### `ClusterPublicKeyInput`<sup>Optional</sup> <a name="ClusterPublicKeyInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterPublicKeyInput"></a>

```go
func ClusterPublicKeyInput() *string
```

- *Type:* *string

---

##### `ClusterRevisionNumberInput`<sup>Optional</sup> <a name="ClusterRevisionNumberInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterRevisionNumberInput"></a>

```go
func ClusterRevisionNumberInput() *string
```

- *Type:* *string

---

##### `ClusterSecurityGroupsInput`<sup>Optional</sup> <a name="ClusterSecurityGroupsInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterSecurityGroupsInput"></a>

```go
func ClusterSecurityGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClusterSubnetGroupNameInput`<sup>Optional</sup> <a name="ClusterSubnetGroupNameInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterSubnetGroupNameInput"></a>

```go
func ClusterSubnetGroupNameInput() *string
```

- *Type:* *string

---

##### `ClusterTypeInput`<sup>Optional</sup> <a name="ClusterTypeInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterTypeInput"></a>

```go
func ClusterTypeInput() *string
```

- *Type:* *string

---

##### `ClusterVersionInput`<sup>Optional</sup> <a name="ClusterVersionInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterVersionInput"></a>

```go
func ClusterVersionInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `DefaultIamRoleArnInput`<sup>Optional</sup> <a name="DefaultIamRoleArnInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.defaultIamRoleArnInput"></a>

```go
func DefaultIamRoleArnInput() *string
```

- *Type:* *string

---

##### `ElasticIpInput`<sup>Optional</sup> <a name="ElasticIpInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.elasticIpInput"></a>

```go
func ElasticIpInput() *string
```

- *Type:* *string

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.encryptedInput"></a>

```go
func EncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `EnhancedVpcRoutingInput`<sup>Optional</sup> <a name="EnhancedVpcRoutingInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.enhancedVpcRoutingInput"></a>

```go
func EnhancedVpcRoutingInput() interface{}
```

- *Type:* interface{}

---

##### `FinalSnapshotIdentifierInput`<sup>Optional</sup> <a name="FinalSnapshotIdentifierInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.finalSnapshotIdentifierInput"></a>

```go
func FinalSnapshotIdentifierInput() *string
```

- *Type:* *string

---

##### `IamRolesInput`<sup>Optional</sup> <a name="IamRolesInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.iamRolesInput"></a>

```go
func IamRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.loggingInput"></a>

```go
func LoggingInput() RedshiftClusterLogging
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging">RedshiftClusterLogging</a>

---

##### `MaintenanceTrackNameInput`<sup>Optional</sup> <a name="MaintenanceTrackNameInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.maintenanceTrackNameInput"></a>

```go
func MaintenanceTrackNameInput() *string
```

- *Type:* *string

---

##### `ManualSnapshotRetentionPeriodInput`<sup>Optional</sup> <a name="ManualSnapshotRetentionPeriodInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.manualSnapshotRetentionPeriodInput"></a>

```go
func ManualSnapshotRetentionPeriodInput() *f64
```

- *Type:* *f64

---

##### `MasterPasswordInput`<sup>Optional</sup> <a name="MasterPasswordInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterPasswordInput"></a>

```go
func MasterPasswordInput() *string
```

- *Type:* *string

---

##### `MasterUsernameInput`<sup>Optional</sup> <a name="MasterUsernameInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterUsernameInput"></a>

```go
func MasterUsernameInput() *string
```

- *Type:* *string

---

##### `NodeTypeInput`<sup>Optional</sup> <a name="NodeTypeInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.nodeTypeInput"></a>

```go
func NodeTypeInput() *string
```

- *Type:* *string

---

##### `NumberOfNodesInput`<sup>Optional</sup> <a name="NumberOfNodesInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.numberOfNodesInput"></a>

```go
func NumberOfNodesInput() *f64
```

- *Type:* *f64

---

##### `OwnerAccountInput`<sup>Optional</sup> <a name="OwnerAccountInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.ownerAccountInput"></a>

```go
func OwnerAccountInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PreferredMaintenanceWindowInput`<sup>Optional</sup> <a name="PreferredMaintenanceWindowInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.preferredMaintenanceWindowInput"></a>

```go
func PreferredMaintenanceWindowInput() *string
```

- *Type:* *string

---

##### `PubliclyAccessibleInput`<sup>Optional</sup> <a name="PubliclyAccessibleInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.publiclyAccessibleInput"></a>

```go
func PubliclyAccessibleInput() interface{}
```

- *Type:* interface{}

---

##### `SkipFinalSnapshotInput`<sup>Optional</sup> <a name="SkipFinalSnapshotInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.skipFinalSnapshotInput"></a>

```go
func SkipFinalSnapshotInput() interface{}
```

- *Type:* interface{}

---

##### `SnapshotClusterIdentifierInput`<sup>Optional</sup> <a name="SnapshotClusterIdentifierInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotClusterIdentifierInput"></a>

```go
func SnapshotClusterIdentifierInput() *string
```

- *Type:* *string

---

##### `SnapshotCopyInput`<sup>Optional</sup> <a name="SnapshotCopyInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotCopyInput"></a>

```go
func SnapshotCopyInput() RedshiftClusterSnapshotCopy
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy">RedshiftClusterSnapshotCopy</a>

---

##### `SnapshotIdentifierInput`<sup>Optional</sup> <a name="SnapshotIdentifierInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotIdentifierInput"></a>

```go
func SnapshotIdentifierInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.vpcSecurityGroupIdsInput"></a>

```go
func VpcSecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowVersionUpgrade`<sup>Required</sup> <a name="AllowVersionUpgrade" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.allowVersionUpgrade"></a>

```go
func AllowVersionUpgrade() interface{}
```

- *Type:* interface{}

---

##### `ApplyImmediately`<sup>Required</sup> <a name="ApplyImmediately" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.applyImmediately"></a>

```go
func ApplyImmediately() interface{}
```

- *Type:* interface{}

---

##### `AquaConfigurationStatus`<sup>Required</sup> <a name="AquaConfigurationStatus" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.aquaConfigurationStatus"></a>

```go
func AquaConfigurationStatus() *string
```

- *Type:* *string

---

##### `AutomatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="AutomatedSnapshotRetentionPeriod" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.automatedSnapshotRetentionPeriod"></a>

```go
func AutomatedSnapshotRetentionPeriod() *f64
```

- *Type:* *f64

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `AvailabilityZoneRelocationEnabled`<sup>Required</sup> <a name="AvailabilityZoneRelocationEnabled" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.availabilityZoneRelocationEnabled"></a>

```go
func AvailabilityZoneRelocationEnabled() interface{}
```

- *Type:* interface{}

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterIdentifier"></a>

```go
func ClusterIdentifier() *string
```

- *Type:* *string

---

##### `ClusterParameterGroupName`<sup>Required</sup> <a name="ClusterParameterGroupName" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterParameterGroupName"></a>

```go
func ClusterParameterGroupName() *string
```

- *Type:* *string

---

##### `ClusterPublicKey`<sup>Required</sup> <a name="ClusterPublicKey" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterPublicKey"></a>

```go
func ClusterPublicKey() *string
```

- *Type:* *string

---

##### `ClusterRevisionNumber`<sup>Required</sup> <a name="ClusterRevisionNumber" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterRevisionNumber"></a>

```go
func ClusterRevisionNumber() *string
```

- *Type:* *string

---

##### `ClusterSecurityGroups`<sup>Required</sup> <a name="ClusterSecurityGroups" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterSecurityGroups"></a>

```go
func ClusterSecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `ClusterSubnetGroupName`<sup>Required</sup> <a name="ClusterSubnetGroupName" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterSubnetGroupName"></a>

```go
func ClusterSubnetGroupName() *string
```

- *Type:* *string

---

##### `ClusterType`<sup>Required</sup> <a name="ClusterType" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterType"></a>

```go
func ClusterType() *string
```

- *Type:* *string

---

##### `ClusterVersion`<sup>Required</sup> <a name="ClusterVersion" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.clusterVersion"></a>

```go
func ClusterVersion() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `DefaultIamRoleArn`<sup>Required</sup> <a name="DefaultIamRoleArn" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.defaultIamRoleArn"></a>

```go
func DefaultIamRoleArn() *string
```

- *Type:* *string

---

##### `ElasticIp`<sup>Required</sup> <a name="ElasticIp" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.elasticIp"></a>

```go
func ElasticIp() *string
```

- *Type:* *string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.encrypted"></a>

```go
func Encrypted() interface{}
```

- *Type:* interface{}

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `EnhancedVpcRouting`<sup>Required</sup> <a name="EnhancedVpcRouting" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.enhancedVpcRouting"></a>

```go
func EnhancedVpcRouting() interface{}
```

- *Type:* interface{}

---

##### `FinalSnapshotIdentifier`<sup>Required</sup> <a name="FinalSnapshotIdentifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.finalSnapshotIdentifier"></a>

```go
func FinalSnapshotIdentifier() *string
```

- *Type:* *string

---

##### `IamRoles`<sup>Required</sup> <a name="IamRoles" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.iamRoles"></a>

```go
func IamRoles() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `MaintenanceTrackName`<sup>Required</sup> <a name="MaintenanceTrackName" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.maintenanceTrackName"></a>

```go
func MaintenanceTrackName() *string
```

- *Type:* *string

---

##### `ManualSnapshotRetentionPeriod`<sup>Required</sup> <a name="ManualSnapshotRetentionPeriod" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.manualSnapshotRetentionPeriod"></a>

```go
func ManualSnapshotRetentionPeriod() *f64
```

- *Type:* *f64

---

##### `MasterPassword`<sup>Required</sup> <a name="MasterPassword" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterPassword"></a>

```go
func MasterPassword() *string
```

- *Type:* *string

---

##### `MasterUsername`<sup>Required</sup> <a name="MasterUsername" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.masterUsername"></a>

```go
func MasterUsername() *string
```

- *Type:* *string

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.nodeType"></a>

```go
func NodeType() *string
```

- *Type:* *string

---

##### `NumberOfNodes`<sup>Required</sup> <a name="NumberOfNodes" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.numberOfNodes"></a>

```go
func NumberOfNodes() *f64
```

- *Type:* *f64

---

##### `OwnerAccount`<sup>Required</sup> <a name="OwnerAccount" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.ownerAccount"></a>

```go
func OwnerAccount() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.preferredMaintenanceWindow"></a>

```go
func PreferredMaintenanceWindow() *string
```

- *Type:* *string

---

##### `PubliclyAccessible`<sup>Required</sup> <a name="PubliclyAccessible" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.publiclyAccessible"></a>

```go
func PubliclyAccessible() interface{}
```

- *Type:* interface{}

---

##### `SkipFinalSnapshot`<sup>Required</sup> <a name="SkipFinalSnapshot" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.skipFinalSnapshot"></a>

```go
func SkipFinalSnapshot() interface{}
```

- *Type:* interface{}

---

##### `SnapshotClusterIdentifier`<sup>Required</sup> <a name="SnapshotClusterIdentifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotClusterIdentifier"></a>

```go
func SnapshotClusterIdentifier() *string
```

- *Type:* *string

---

##### `SnapshotIdentifier`<sup>Required</sup> <a name="SnapshotIdentifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.snapshotIdentifier"></a>

```go
func SnapshotIdentifier() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.vpcSecurityGroupIds"></a>

```go
func VpcSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.redshiftCluster.RedshiftCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftClusterClusterNodes <a name="RedshiftClusterClusterNodes" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftcluster"

&redshiftcluster.RedshiftClusterClusterNodes {

}
```


### RedshiftClusterConfig <a name="RedshiftClusterConfig" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftcluster"

&redshiftcluster.RedshiftClusterConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterIdentifier: *string,
	NodeType: *string,
	AllowVersionUpgrade: interface{},
	ApplyImmediately: interface{},
	AquaConfigurationStatus: *string,
	AutomatedSnapshotRetentionPeriod: *f64,
	AvailabilityZone: *string,
	AvailabilityZoneRelocationEnabled: interface{},
	ClusterParameterGroupName: *string,
	ClusterPublicKey: *string,
	ClusterRevisionNumber: *string,
	ClusterSecurityGroups: *[]*string,
	ClusterSubnetGroupName: *string,
	ClusterType: *string,
	ClusterVersion: *string,
	DatabaseName: *string,
	DefaultIamRoleArn: *string,
	ElasticIp: *string,
	Encrypted: interface{},
	Endpoint: *string,
	EnhancedVpcRouting: interface{},
	FinalSnapshotIdentifier: *string,
	IamRoles: *[]*string,
	Id: *string,
	KmsKeyId: *string,
	Logging: github.com/cdktf/cdktf-provider-aws-go/aws.redshiftCluster.RedshiftClusterLogging,
	MaintenanceTrackName: *string,
	ManualSnapshotRetentionPeriod: *f64,
	MasterPassword: *string,
	MasterUsername: *string,
	NumberOfNodes: *f64,
	OwnerAccount: *string,
	Port: *f64,
	PreferredMaintenanceWindow: *string,
	PubliclyAccessible: interface{},
	SkipFinalSnapshot: interface{},
	SnapshotClusterIdentifier: *string,
	SnapshotCopy: github.com/cdktf/cdktf-provider-aws-go/aws.redshiftCluster.RedshiftClusterSnapshotCopy,
	SnapshotIdentifier: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.redshiftCluster.RedshiftClusterTimeouts,
	VpcSecurityGroupIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_identifier RedshiftCluster#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.nodeType">NodeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#node_type RedshiftCluster#node_type}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.allowVersionUpgrade">AllowVersionUpgrade</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#allow_version_upgrade RedshiftCluster#allow_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.applyImmediately">ApplyImmediately</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#apply_immediately RedshiftCluster#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.aquaConfigurationStatus">AquaConfigurationStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#aqua_configuration_status RedshiftCluster#aqua_configuration_status}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.automatedSnapshotRetentionPeriod">AutomatedSnapshotRetentionPeriod</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#automated_snapshot_retention_period RedshiftCluster#automated_snapshot_retention_period}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#availability_zone RedshiftCluster#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.availabilityZoneRelocationEnabled">AvailabilityZoneRelocationEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#availability_zone_relocation_enabled RedshiftCluster#availability_zone_relocation_enabled}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterParameterGroupName">ClusterParameterGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_parameter_group_name RedshiftCluster#cluster_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterPublicKey">ClusterPublicKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_public_key RedshiftCluster#cluster_public_key}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterRevisionNumber">ClusterRevisionNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_revision_number RedshiftCluster#cluster_revision_number}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterSecurityGroups">ClusterSecurityGroups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_security_groups RedshiftCluster#cluster_security_groups}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterSubnetGroupName">ClusterSubnetGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_subnet_group_name RedshiftCluster#cluster_subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterType">ClusterType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_type RedshiftCluster#cluster_type}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterVersion">ClusterVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_version RedshiftCluster#cluster_version}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#database_name RedshiftCluster#database_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.defaultIamRoleArn">DefaultIamRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#default_iam_role_arn RedshiftCluster#default_iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.elasticIp">ElasticIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#elastic_ip RedshiftCluster#elastic_ip}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.encrypted">Encrypted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#encrypted RedshiftCluster#encrypted}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.endpoint">Endpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#endpoint RedshiftCluster#endpoint}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.enhancedVpcRouting">EnhancedVpcRouting</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#enhanced_vpc_routing RedshiftCluster#enhanced_vpc_routing}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.finalSnapshotIdentifier">FinalSnapshotIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#final_snapshot_identifier RedshiftCluster#final_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.iamRoles">IamRoles</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#iam_roles RedshiftCluster#iam_roles}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#id RedshiftCluster#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#kms_key_id RedshiftCluster#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging">RedshiftClusterLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.maintenanceTrackName">MaintenanceTrackName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#maintenance_track_name RedshiftCluster#maintenance_track_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.manualSnapshotRetentionPeriod">ManualSnapshotRetentionPeriod</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#manual_snapshot_retention_period RedshiftCluster#manual_snapshot_retention_period}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.masterPassword">MasterPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#master_password RedshiftCluster#master_password}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.masterUsername">MasterUsername</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#master_username RedshiftCluster#master_username}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.numberOfNodes">NumberOfNodes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#number_of_nodes RedshiftCluster#number_of_nodes}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.ownerAccount">OwnerAccount</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#owner_account RedshiftCluster#owner_account}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#port RedshiftCluster#port}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#preferred_maintenance_window RedshiftCluster#preferred_maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#publicly_accessible RedshiftCluster#publicly_accessible}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.skipFinalSnapshot">SkipFinalSnapshot</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#skip_final_snapshot RedshiftCluster#skip_final_snapshot}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.snapshotClusterIdentifier">SnapshotClusterIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#snapshot_cluster_identifier RedshiftCluster#snapshot_cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.snapshotCopy">SnapshotCopy</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy">RedshiftClusterSnapshotCopy</a></code> | snapshot_copy block. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.snapshotIdentifier">SnapshotIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#snapshot_identifier RedshiftCluster#snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#tags RedshiftCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#tags_all RedshiftCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts">RedshiftClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#vpc_security_group_ids RedshiftCluster#vpc_security_group_ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterIdentifier"></a>

```go
ClusterIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_identifier RedshiftCluster#cluster_identifier}.

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.nodeType"></a>

```go
NodeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#node_type RedshiftCluster#node_type}.

---

##### `AllowVersionUpgrade`<sup>Optional</sup> <a name="AllowVersionUpgrade" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.allowVersionUpgrade"></a>

```go
AllowVersionUpgrade interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#allow_version_upgrade RedshiftCluster#allow_version_upgrade}.

---

##### `ApplyImmediately`<sup>Optional</sup> <a name="ApplyImmediately" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.applyImmediately"></a>

```go
ApplyImmediately interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#apply_immediately RedshiftCluster#apply_immediately}.

---

##### `AquaConfigurationStatus`<sup>Optional</sup> <a name="AquaConfigurationStatus" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.aquaConfigurationStatus"></a>

```go
AquaConfigurationStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#aqua_configuration_status RedshiftCluster#aqua_configuration_status}.

---

##### `AutomatedSnapshotRetentionPeriod`<sup>Optional</sup> <a name="AutomatedSnapshotRetentionPeriod" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.automatedSnapshotRetentionPeriod"></a>

```go
AutomatedSnapshotRetentionPeriod *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#automated_snapshot_retention_period RedshiftCluster#automated_snapshot_retention_period}.

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#availability_zone RedshiftCluster#availability_zone}.

---

##### `AvailabilityZoneRelocationEnabled`<sup>Optional</sup> <a name="AvailabilityZoneRelocationEnabled" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.availabilityZoneRelocationEnabled"></a>

```go
AvailabilityZoneRelocationEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#availability_zone_relocation_enabled RedshiftCluster#availability_zone_relocation_enabled}.

---

##### `ClusterParameterGroupName`<sup>Optional</sup> <a name="ClusterParameterGroupName" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterParameterGroupName"></a>

```go
ClusterParameterGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_parameter_group_name RedshiftCluster#cluster_parameter_group_name}.

---

##### `ClusterPublicKey`<sup>Optional</sup> <a name="ClusterPublicKey" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterPublicKey"></a>

```go
ClusterPublicKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_public_key RedshiftCluster#cluster_public_key}.

---

##### `ClusterRevisionNumber`<sup>Optional</sup> <a name="ClusterRevisionNumber" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterRevisionNumber"></a>

```go
ClusterRevisionNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_revision_number RedshiftCluster#cluster_revision_number}.

---

##### `ClusterSecurityGroups`<sup>Optional</sup> <a name="ClusterSecurityGroups" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterSecurityGroups"></a>

```go
ClusterSecurityGroups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_security_groups RedshiftCluster#cluster_security_groups}.

---

##### `ClusterSubnetGroupName`<sup>Optional</sup> <a name="ClusterSubnetGroupName" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterSubnetGroupName"></a>

```go
ClusterSubnetGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_subnet_group_name RedshiftCluster#cluster_subnet_group_name}.

---

##### `ClusterType`<sup>Optional</sup> <a name="ClusterType" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterType"></a>

```go
ClusterType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_type RedshiftCluster#cluster_type}.

---

##### `ClusterVersion`<sup>Optional</sup> <a name="ClusterVersion" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.clusterVersion"></a>

```go
ClusterVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#cluster_version RedshiftCluster#cluster_version}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#database_name RedshiftCluster#database_name}.

---

##### `DefaultIamRoleArn`<sup>Optional</sup> <a name="DefaultIamRoleArn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.defaultIamRoleArn"></a>

```go
DefaultIamRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#default_iam_role_arn RedshiftCluster#default_iam_role_arn}.

---

##### `ElasticIp`<sup>Optional</sup> <a name="ElasticIp" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.elasticIp"></a>

```go
ElasticIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#elastic_ip RedshiftCluster#elastic_ip}.

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.encrypted"></a>

```go
Encrypted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#encrypted RedshiftCluster#encrypted}.

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#endpoint RedshiftCluster#endpoint}.

---

##### `EnhancedVpcRouting`<sup>Optional</sup> <a name="EnhancedVpcRouting" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.enhancedVpcRouting"></a>

```go
EnhancedVpcRouting interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#enhanced_vpc_routing RedshiftCluster#enhanced_vpc_routing}.

---

##### `FinalSnapshotIdentifier`<sup>Optional</sup> <a name="FinalSnapshotIdentifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.finalSnapshotIdentifier"></a>

```go
FinalSnapshotIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#final_snapshot_identifier RedshiftCluster#final_snapshot_identifier}.

---

##### `IamRoles`<sup>Optional</sup> <a name="IamRoles" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.iamRoles"></a>

```go
IamRoles *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#iam_roles RedshiftCluster#iam_roles}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#id RedshiftCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#kms_key_id RedshiftCluster#kms_key_id}.

---

##### `Logging`<sup>Optional</sup> <a name="Logging" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.logging"></a>

```go
Logging RedshiftClusterLogging
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging">RedshiftClusterLogging</a>

logging block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#logging RedshiftCluster#logging}

---

##### `MaintenanceTrackName`<sup>Optional</sup> <a name="MaintenanceTrackName" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.maintenanceTrackName"></a>

```go
MaintenanceTrackName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#maintenance_track_name RedshiftCluster#maintenance_track_name}.

---

##### `ManualSnapshotRetentionPeriod`<sup>Optional</sup> <a name="ManualSnapshotRetentionPeriod" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.manualSnapshotRetentionPeriod"></a>

```go
ManualSnapshotRetentionPeriod *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#manual_snapshot_retention_period RedshiftCluster#manual_snapshot_retention_period}.

---

##### `MasterPassword`<sup>Optional</sup> <a name="MasterPassword" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.masterPassword"></a>

```go
MasterPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#master_password RedshiftCluster#master_password}.

---

##### `MasterUsername`<sup>Optional</sup> <a name="MasterUsername" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.masterUsername"></a>

```go
MasterUsername *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#master_username RedshiftCluster#master_username}.

---

##### `NumberOfNodes`<sup>Optional</sup> <a name="NumberOfNodes" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.numberOfNodes"></a>

```go
NumberOfNodes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#number_of_nodes RedshiftCluster#number_of_nodes}.

---

##### `OwnerAccount`<sup>Optional</sup> <a name="OwnerAccount" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.ownerAccount"></a>

```go
OwnerAccount *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#owner_account RedshiftCluster#owner_account}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#port RedshiftCluster#port}.

---

##### `PreferredMaintenanceWindow`<sup>Optional</sup> <a name="PreferredMaintenanceWindow" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.preferredMaintenanceWindow"></a>

```go
PreferredMaintenanceWindow *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#preferred_maintenance_window RedshiftCluster#preferred_maintenance_window}.

---

##### `PubliclyAccessible`<sup>Optional</sup> <a name="PubliclyAccessible" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.publiclyAccessible"></a>

```go
PubliclyAccessible interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#publicly_accessible RedshiftCluster#publicly_accessible}.

---

##### `SkipFinalSnapshot`<sup>Optional</sup> <a name="SkipFinalSnapshot" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.skipFinalSnapshot"></a>

```go
SkipFinalSnapshot interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#skip_final_snapshot RedshiftCluster#skip_final_snapshot}.

---

##### `SnapshotClusterIdentifier`<sup>Optional</sup> <a name="SnapshotClusterIdentifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.snapshotClusterIdentifier"></a>

```go
SnapshotClusterIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#snapshot_cluster_identifier RedshiftCluster#snapshot_cluster_identifier}.

---

##### `SnapshotCopy`<sup>Optional</sup> <a name="SnapshotCopy" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.snapshotCopy"></a>

```go
SnapshotCopy RedshiftClusterSnapshotCopy
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy">RedshiftClusterSnapshotCopy</a>

snapshot_copy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#snapshot_copy RedshiftCluster#snapshot_copy}

---

##### `SnapshotIdentifier`<sup>Optional</sup> <a name="SnapshotIdentifier" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.snapshotIdentifier"></a>

```go
SnapshotIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#snapshot_identifier RedshiftCluster#snapshot_identifier}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#tags RedshiftCluster#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#tags_all RedshiftCluster#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.timeouts"></a>

```go
Timeouts RedshiftClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts">RedshiftClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#timeouts RedshiftCluster#timeouts}

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterConfig.property.vpcSecurityGroupIds"></a>

```go
VpcSecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#vpc_security_group_ids RedshiftCluster#vpc_security_group_ids}.

---

### RedshiftClusterLogging <a name="RedshiftClusterLogging" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftcluster"

&redshiftcluster.RedshiftClusterLogging {
	Enable: interface{},
	BucketName: *string,
	LogDestinationType: *string,
	LogExports: *[]*string,
	S3KeyPrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging.property.enable">Enable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#enable RedshiftCluster#enable}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging.property.bucketName">BucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#bucket_name RedshiftCluster#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging.property.logDestinationType">LogDestinationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#log_destination_type RedshiftCluster#log_destination_type}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging.property.logExports">LogExports</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#log_exports RedshiftCluster#log_exports}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#s3_key_prefix RedshiftCluster#s3_key_prefix}. |

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging.property.enable"></a>

```go
Enable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#enable RedshiftCluster#enable}.

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#bucket_name RedshiftCluster#bucket_name}.

---

##### `LogDestinationType`<sup>Optional</sup> <a name="LogDestinationType" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging.property.logDestinationType"></a>

```go
LogDestinationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#log_destination_type RedshiftCluster#log_destination_type}.

---

##### `LogExports`<sup>Optional</sup> <a name="LogExports" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging.property.logExports"></a>

```go
LogExports *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#log_exports RedshiftCluster#log_exports}.

---

##### `S3KeyPrefix`<sup>Optional</sup> <a name="S3KeyPrefix" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging.property.s3KeyPrefix"></a>

```go
S3KeyPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#s3_key_prefix RedshiftCluster#s3_key_prefix}.

---

### RedshiftClusterSnapshotCopy <a name="RedshiftClusterSnapshotCopy" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftcluster"

&redshiftcluster.RedshiftClusterSnapshotCopy {
	DestinationRegion: *string,
	GrantName: *string,
	RetentionPeriod: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy.property.destinationRegion">DestinationRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#destination_region RedshiftCluster#destination_region}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy.property.grantName">GrantName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#grant_name RedshiftCluster#grant_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy.property.retentionPeriod">RetentionPeriod</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#retention_period RedshiftCluster#retention_period}. |

---

##### `DestinationRegion`<sup>Required</sup> <a name="DestinationRegion" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy.property.destinationRegion"></a>

```go
DestinationRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#destination_region RedshiftCluster#destination_region}.

---

##### `GrantName`<sup>Optional</sup> <a name="GrantName" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy.property.grantName"></a>

```go
GrantName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#grant_name RedshiftCluster#grant_name}.

---

##### `RetentionPeriod`<sup>Optional</sup> <a name="RetentionPeriod" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy.property.retentionPeriod"></a>

```go
RetentionPeriod *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#retention_period RedshiftCluster#retention_period}.

---

### RedshiftClusterTimeouts <a name="RedshiftClusterTimeouts" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftcluster"

&redshiftcluster.RedshiftClusterTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#create RedshiftCluster#create}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#delete RedshiftCluster#delete}. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#update RedshiftCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#create RedshiftCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#delete RedshiftCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_cluster#update RedshiftCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftClusterClusterNodesList <a name="RedshiftClusterClusterNodesList" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftcluster"

redshiftcluster.NewRedshiftClusterClusterNodesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedshiftClusterClusterNodesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.get"></a>

```go
func Get(index *f64) RedshiftClusterClusterNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### RedshiftClusterClusterNodesOutputReference <a name="RedshiftClusterClusterNodesOutputReference" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftcluster"

redshiftcluster.NewRedshiftClusterClusterNodesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedshiftClusterClusterNodesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.nodeRole">NodeRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.privateIpAddress">PrivateIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.publicIpAddress">PublicIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodes">RedshiftClusterClusterNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NodeRole`<sup>Required</sup> <a name="NodeRole" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.nodeRole"></a>

```go
func NodeRole() *string
```

- *Type:* *string

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.privateIpAddress"></a>

```go
func PrivateIpAddress() *string
```

- *Type:* *string

---

##### `PublicIpAddress`<sup>Required</sup> <a name="PublicIpAddress" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.publicIpAddress"></a>

```go
func PublicIpAddress() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodesOutputReference.property.internalValue"></a>

```go
func InternalValue() RedshiftClusterClusterNodes
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterClusterNodes">RedshiftClusterClusterNodes</a>

---


### RedshiftClusterLoggingOutputReference <a name="RedshiftClusterLoggingOutputReference" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftcluster"

redshiftcluster.NewRedshiftClusterLoggingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedshiftClusterLoggingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.resetLogDestinationType">ResetLogDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.resetLogExports">ResetLogExports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.resetS3KeyPrefix">ResetS3KeyPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.resetBucketName"></a>

```go
func ResetBucketName()
```

##### `ResetLogDestinationType` <a name="ResetLogDestinationType" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.resetLogDestinationType"></a>

```go
func ResetLogDestinationType()
```

##### `ResetLogExports` <a name="ResetLogExports" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.resetLogExports"></a>

```go
func ResetLogExports()
```

##### `ResetS3KeyPrefix` <a name="ResetS3KeyPrefix" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.resetS3KeyPrefix"></a>

```go
func ResetS3KeyPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.enableInput">EnableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.logDestinationTypeInput">LogDestinationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.logExportsInput">LogExportsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.s3KeyPrefixInput">S3KeyPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.enable">Enable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.logDestinationType">LogDestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.logExports">LogExports</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging">RedshiftClusterLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.enableInput"></a>

```go
func EnableInput() interface{}
```

- *Type:* interface{}

---

##### `LogDestinationTypeInput`<sup>Optional</sup> <a name="LogDestinationTypeInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.logDestinationTypeInput"></a>

```go
func LogDestinationTypeInput() *string
```

- *Type:* *string

---

##### `LogExportsInput`<sup>Optional</sup> <a name="LogExportsInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.logExportsInput"></a>

```go
func LogExportsInput() *[]*string
```

- *Type:* *[]*string

---

##### `S3KeyPrefixInput`<sup>Optional</sup> <a name="S3KeyPrefixInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.s3KeyPrefixInput"></a>

```go
func S3KeyPrefixInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.enable"></a>

```go
func Enable() interface{}
```

- *Type:* interface{}

---

##### `LogDestinationType`<sup>Required</sup> <a name="LogDestinationType" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.logDestinationType"></a>

```go
func LogDestinationType() *string
```

- *Type:* *string

---

##### `LogExports`<sup>Required</sup> <a name="LogExports" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.logExports"></a>

```go
func LogExports() *[]*string
```

- *Type:* *[]*string

---

##### `S3KeyPrefix`<sup>Required</sup> <a name="S3KeyPrefix" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.s3KeyPrefix"></a>

```go
func S3KeyPrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterLoggingOutputReference.property.internalValue"></a>

```go
func InternalValue() RedshiftClusterLogging
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterLogging">RedshiftClusterLogging</a>

---


### RedshiftClusterSnapshotCopyOutputReference <a name="RedshiftClusterSnapshotCopyOutputReference" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftcluster"

redshiftcluster.NewRedshiftClusterSnapshotCopyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedshiftClusterSnapshotCopyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.resetGrantName">ResetGrantName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.resetRetentionPeriod">ResetRetentionPeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGrantName` <a name="ResetGrantName" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.resetGrantName"></a>

```go
func ResetGrantName()
```

##### `ResetRetentionPeriod` <a name="ResetRetentionPeriod" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.resetRetentionPeriod"></a>

```go
func ResetRetentionPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.destinationRegionInput">DestinationRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.grantNameInput">GrantNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.retentionPeriodInput">RetentionPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.destinationRegion">DestinationRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.grantName">GrantName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.retentionPeriod">RetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy">RedshiftClusterSnapshotCopy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationRegionInput`<sup>Optional</sup> <a name="DestinationRegionInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.destinationRegionInput"></a>

```go
func DestinationRegionInput() *string
```

- *Type:* *string

---

##### `GrantNameInput`<sup>Optional</sup> <a name="GrantNameInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.grantNameInput"></a>

```go
func GrantNameInput() *string
```

- *Type:* *string

---

##### `RetentionPeriodInput`<sup>Optional</sup> <a name="RetentionPeriodInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.retentionPeriodInput"></a>

```go
func RetentionPeriodInput() *f64
```

- *Type:* *f64

---

##### `DestinationRegion`<sup>Required</sup> <a name="DestinationRegion" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.destinationRegion"></a>

```go
func DestinationRegion() *string
```

- *Type:* *string

---

##### `GrantName`<sup>Required</sup> <a name="GrantName" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.grantName"></a>

```go
func GrantName() *string
```

- *Type:* *string

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.retentionPeriod"></a>

```go
func RetentionPeriod() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopyOutputReference.property.internalValue"></a>

```go
func InternalValue() RedshiftClusterSnapshotCopy
```

- *Type:* <a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterSnapshotCopy">RedshiftClusterSnapshotCopy</a>

---


### RedshiftClusterTimeoutsOutputReference <a name="RedshiftClusterTimeoutsOutputReference" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/redshiftcluster"

redshiftcluster.NewRedshiftClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RedshiftClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.redshiftCluster.RedshiftClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



