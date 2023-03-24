# `elasticacheReplicationGroup` Submodule <a name="`elasticacheReplicationGroup` Submodule" id="@cdktf/provider-aws.elasticacheReplicationGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheReplicationGroup <a name="ElasticacheReplicationGroup" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group aws_elasticache_replication_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticachereplicationgroup"

elasticachereplicationgroup.NewElasticacheReplicationGroup(scope Construct, id *string, config ElasticacheReplicationGroupConfig) ElasticacheReplicationGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig">ElasticacheReplicationGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig">ElasticacheReplicationGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.putClusterMode">PutClusterMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.putLogDeliveryConfiguration">PutLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetApplyImmediately">ResetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAtRestEncryptionEnabled">ResetAtRestEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAuthToken">ResetAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAutomaticFailoverEnabled">ResetAutomaticFailoverEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAutoMinorVersionUpgrade">ResetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAvailabilityZones">ResetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetClusterMode">ResetClusterMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetDataTieringEnabled">ResetDataTieringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetEngine">ResetEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetFinalSnapshotIdentifier">ResetFinalSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetGlobalReplicationGroupId">ResetGlobalReplicationGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetLogDeliveryConfiguration">ResetLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetMultiAzEnabled">ResetMultiAzEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNodeType">ResetNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNotificationTopicArn">ResetNotificationTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNumberCacheClusters">ResetNumberCacheClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNumCacheClusters">ResetNumCacheClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNumNodeGroups">ResetNumNodeGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetParameterGroupName">ResetParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPreferredCacheClusterAzs">ResetPreferredCacheClusterAzs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetReplicasPerNodeGroup">ResetReplicasPerNodeGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetReplicationGroupDescription">ResetReplicationGroupDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSecurityGroupNames">ResetSecurityGroupNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotArns">ResetSnapshotArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotName">ResetSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotRetentionLimit">ResetSnapshotRetentionLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotWindow">ResetSnapshotWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSubnetGroupName">ResetSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTransitEncryptionEnabled">ResetTransitEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetUserGroupIds">ResetUserGroupIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutClusterMode` <a name="PutClusterMode" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.putClusterMode"></a>

```go
func PutClusterMode(value ElasticacheReplicationGroupClusterMode)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.putClusterMode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode">ElasticacheReplicationGroupClusterMode</a>

---

##### `PutLogDeliveryConfiguration` <a name="PutLogDeliveryConfiguration" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.putLogDeliveryConfiguration"></a>

```go
func PutLogDeliveryConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.putLogDeliveryConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.putTimeouts"></a>

```go
func PutTimeouts(value ElasticacheReplicationGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts">ElasticacheReplicationGroupTimeouts</a>

---

##### `ResetApplyImmediately` <a name="ResetApplyImmediately" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetApplyImmediately"></a>

```go
func ResetApplyImmediately()
```

##### `ResetAtRestEncryptionEnabled` <a name="ResetAtRestEncryptionEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAtRestEncryptionEnabled"></a>

```go
func ResetAtRestEncryptionEnabled()
```

##### `ResetAuthToken` <a name="ResetAuthToken" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAuthToken"></a>

```go
func ResetAuthToken()
```

##### `ResetAutomaticFailoverEnabled` <a name="ResetAutomaticFailoverEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAutomaticFailoverEnabled"></a>

```go
func ResetAutomaticFailoverEnabled()
```

##### `ResetAutoMinorVersionUpgrade` <a name="ResetAutoMinorVersionUpgrade" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAutoMinorVersionUpgrade"></a>

```go
func ResetAutoMinorVersionUpgrade()
```

##### `ResetAvailabilityZones` <a name="ResetAvailabilityZones" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetAvailabilityZones"></a>

```go
func ResetAvailabilityZones()
```

##### `ResetClusterMode` <a name="ResetClusterMode" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetClusterMode"></a>

```go
func ResetClusterMode()
```

##### `ResetDataTieringEnabled` <a name="ResetDataTieringEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetDataTieringEnabled"></a>

```go
func ResetDataTieringEnabled()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEngine` <a name="ResetEngine" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetEngine"></a>

```go
func ResetEngine()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetEngineVersion"></a>

```go
func ResetEngineVersion()
```

##### `ResetFinalSnapshotIdentifier` <a name="ResetFinalSnapshotIdentifier" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetFinalSnapshotIdentifier"></a>

```go
func ResetFinalSnapshotIdentifier()
```

##### `ResetGlobalReplicationGroupId` <a name="ResetGlobalReplicationGroupId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetGlobalReplicationGroupId"></a>

```go
func ResetGlobalReplicationGroupId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetLogDeliveryConfiguration` <a name="ResetLogDeliveryConfiguration" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetLogDeliveryConfiguration"></a>

```go
func ResetLogDeliveryConfiguration()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetMaintenanceWindow"></a>

```go
func ResetMaintenanceWindow()
```

##### `ResetMultiAzEnabled` <a name="ResetMultiAzEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetMultiAzEnabled"></a>

```go
func ResetMultiAzEnabled()
```

##### `ResetNodeType` <a name="ResetNodeType" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNodeType"></a>

```go
func ResetNodeType()
```

##### `ResetNotificationTopicArn` <a name="ResetNotificationTopicArn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNotificationTopicArn"></a>

```go
func ResetNotificationTopicArn()
```

##### `ResetNumberCacheClusters` <a name="ResetNumberCacheClusters" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNumberCacheClusters"></a>

```go
func ResetNumberCacheClusters()
```

##### `ResetNumCacheClusters` <a name="ResetNumCacheClusters" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNumCacheClusters"></a>

```go
func ResetNumCacheClusters()
```

##### `ResetNumNodeGroups` <a name="ResetNumNodeGroups" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetNumNodeGroups"></a>

```go
func ResetNumNodeGroups()
```

##### `ResetParameterGroupName` <a name="ResetParameterGroupName" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetParameterGroupName"></a>

```go
func ResetParameterGroupName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPreferredCacheClusterAzs` <a name="ResetPreferredCacheClusterAzs" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetPreferredCacheClusterAzs"></a>

```go
func ResetPreferredCacheClusterAzs()
```

##### `ResetReplicasPerNodeGroup` <a name="ResetReplicasPerNodeGroup" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetReplicasPerNodeGroup"></a>

```go
func ResetReplicasPerNodeGroup()
```

##### `ResetReplicationGroupDescription` <a name="ResetReplicationGroupDescription" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetReplicationGroupDescription"></a>

```go
func ResetReplicationGroupDescription()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSecurityGroupNames` <a name="ResetSecurityGroupNames" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSecurityGroupNames"></a>

```go
func ResetSecurityGroupNames()
```

##### `ResetSnapshotArns` <a name="ResetSnapshotArns" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotArns"></a>

```go
func ResetSnapshotArns()
```

##### `ResetSnapshotName` <a name="ResetSnapshotName" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotName"></a>

```go
func ResetSnapshotName()
```

##### `ResetSnapshotRetentionLimit` <a name="ResetSnapshotRetentionLimit" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotRetentionLimit"></a>

```go
func ResetSnapshotRetentionLimit()
```

##### `ResetSnapshotWindow` <a name="ResetSnapshotWindow" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSnapshotWindow"></a>

```go
func ResetSnapshotWindow()
```

##### `ResetSubnetGroupName` <a name="ResetSubnetGroupName" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetSubnetGroupName"></a>

```go
func ResetSubnetGroupName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTransitEncryptionEnabled` <a name="ResetTransitEncryptionEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetTransitEncryptionEnabled"></a>

```go
func ResetTransitEncryptionEnabled()
```

##### `ResetUserGroupIds` <a name="ResetUserGroupIds" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.resetUserGroupIds"></a>

```go
func ResetUserGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticachereplicationgroup"

elasticachereplicationgroup.ElasticacheReplicationGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticachereplicationgroup"

elasticachereplicationgroup.ElasticacheReplicationGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticachereplicationgroup"

elasticachereplicationgroup.ElasticacheReplicationGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.clusterEnabled">ClusterEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.clusterMode">ClusterMode</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference">ElasticacheReplicationGroupClusterModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.configurationEndpointAddress">ConfigurationEndpointAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineVersionActual">EngineVersionActual</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.logDeliveryConfiguration">LogDeliveryConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList">ElasticacheReplicationGroupLogDeliveryConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.memberClusters">MemberClusters</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.primaryEndpointAddress">PrimaryEndpointAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.readerEndpointAddress">ReaderEndpointAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference">ElasticacheReplicationGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.applyImmediatelyInput">ApplyImmediatelyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.atRestEncryptionEnabledInput">AtRestEncryptionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.authTokenInput">AuthTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.automaticFailoverEnabledInput">AutomaticFailoverEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.autoMinorVersionUpgradeInput">AutoMinorVersionUpgradeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.availabilityZonesInput">AvailabilityZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.clusterModeInput">ClusterModeInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode">ElasticacheReplicationGroupClusterMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dataTieringEnabledInput">DataTieringEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineInput">EngineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineVersionInput">EngineVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.finalSnapshotIdentifierInput">FinalSnapshotIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.globalReplicationGroupIdInput">GlobalReplicationGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.logDeliveryConfigurationInput">LogDeliveryConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.multiAzEnabledInput">MultiAzEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.nodeTypeInput">NodeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.notificationTopicArnInput">NotificationTopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numberCacheClustersInput">NumberCacheClustersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numCacheClustersInput">NumCacheClustersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numNodeGroupsInput">NumNodeGroupsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.parameterGroupNameInput">ParameterGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredCacheClusterAzsInput">PreferredCacheClusterAzsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicasPerNodeGroupInput">ReplicasPerNodeGroupInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupDescriptionInput">ReplicationGroupDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupIdInput">ReplicationGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupNamesInput">SecurityGroupNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotArnsInput">SnapshotArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotNameInput">SnapshotNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotRetentionLimitInput">SnapshotRetentionLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotWindowInput">SnapshotWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.subnetGroupNameInput">SubnetGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionEnabledInput">TransitEncryptionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.userGroupIdsInput">UserGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.applyImmediately">ApplyImmediately</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.atRestEncryptionEnabled">AtRestEncryptionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.authToken">AuthToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.automaticFailoverEnabled">AutomaticFailoverEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dataTieringEnabled">DataTieringEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.finalSnapshotIdentifier">FinalSnapshotIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.globalReplicationGroupId">GlobalReplicationGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.maintenanceWindow">MaintenanceWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.multiAzEnabled">MultiAzEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.nodeType">NodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.notificationTopicArn">NotificationTopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numberCacheClusters">NumberCacheClusters</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numCacheClusters">NumCacheClusters</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numNodeGroups">NumNodeGroups</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.parameterGroupName">ParameterGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredCacheClusterAzs">PreferredCacheClusterAzs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicasPerNodeGroup">ReplicasPerNodeGroup</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupDescription">ReplicationGroupDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupId">ReplicationGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupNames">SecurityGroupNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotArns">SnapshotArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotName">SnapshotName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotRetentionLimit">SnapshotRetentionLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotWindow">SnapshotWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.subnetGroupName">SubnetGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionEnabled">TransitEncryptionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.userGroupIds">UserGroupIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ClusterEnabled`<sup>Required</sup> <a name="ClusterEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.clusterEnabled"></a>

```go
func ClusterEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ClusterMode`<sup>Required</sup> <a name="ClusterMode" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.clusterMode"></a>

```go
func ClusterMode() ElasticacheReplicationGroupClusterModeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference">ElasticacheReplicationGroupClusterModeOutputReference</a>

---

##### `ConfigurationEndpointAddress`<sup>Required</sup> <a name="ConfigurationEndpointAddress" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.configurationEndpointAddress"></a>

```go
func ConfigurationEndpointAddress() *string
```

- *Type:* *string

---

##### `EngineVersionActual`<sup>Required</sup> <a name="EngineVersionActual" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineVersionActual"></a>

```go
func EngineVersionActual() *string
```

- *Type:* *string

---

##### `LogDeliveryConfiguration`<sup>Required</sup> <a name="LogDeliveryConfiguration" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.logDeliveryConfiguration"></a>

```go
func LogDeliveryConfiguration() ElasticacheReplicationGroupLogDeliveryConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList">ElasticacheReplicationGroupLogDeliveryConfigurationList</a>

---

##### `MemberClusters`<sup>Required</sup> <a name="MemberClusters" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.memberClusters"></a>

```go
func MemberClusters() *[]*string
```

- *Type:* *[]*string

---

##### `PrimaryEndpointAddress`<sup>Required</sup> <a name="PrimaryEndpointAddress" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.primaryEndpointAddress"></a>

```go
func PrimaryEndpointAddress() *string
```

- *Type:* *string

---

##### `ReaderEndpointAddress`<sup>Required</sup> <a name="ReaderEndpointAddress" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.readerEndpointAddress"></a>

```go
func ReaderEndpointAddress() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.timeouts"></a>

```go
func Timeouts() ElasticacheReplicationGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference">ElasticacheReplicationGroupTimeoutsOutputReference</a>

---

##### `ApplyImmediatelyInput`<sup>Optional</sup> <a name="ApplyImmediatelyInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.applyImmediatelyInput"></a>

```go
func ApplyImmediatelyInput() interface{}
```

- *Type:* interface{}

---

##### `AtRestEncryptionEnabledInput`<sup>Optional</sup> <a name="AtRestEncryptionEnabledInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.atRestEncryptionEnabledInput"></a>

```go
func AtRestEncryptionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AuthTokenInput`<sup>Optional</sup> <a name="AuthTokenInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.authTokenInput"></a>

```go
func AuthTokenInput() *string
```

- *Type:* *string

---

##### `AutomaticFailoverEnabledInput`<sup>Optional</sup> <a name="AutomaticFailoverEnabledInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.automaticFailoverEnabledInput"></a>

```go
func AutomaticFailoverEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AutoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="AutoMinorVersionUpgradeInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.autoMinorVersionUpgradeInput"></a>

```go
func AutoMinorVersionUpgradeInput() *string
```

- *Type:* *string

---

##### `AvailabilityZonesInput`<sup>Optional</sup> <a name="AvailabilityZonesInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.availabilityZonesInput"></a>

```go
func AvailabilityZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClusterModeInput`<sup>Optional</sup> <a name="ClusterModeInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.clusterModeInput"></a>

```go
func ClusterModeInput() ElasticacheReplicationGroupClusterMode
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode">ElasticacheReplicationGroupClusterMode</a>

---

##### `DataTieringEnabledInput`<sup>Optional</sup> <a name="DataTieringEnabledInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dataTieringEnabledInput"></a>

```go
func DataTieringEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineInput"></a>

```go
func EngineInput() *string
```

- *Type:* *string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineVersionInput"></a>

```go
func EngineVersionInput() *string
```

- *Type:* *string

---

##### `FinalSnapshotIdentifierInput`<sup>Optional</sup> <a name="FinalSnapshotIdentifierInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.finalSnapshotIdentifierInput"></a>

```go
func FinalSnapshotIdentifierInput() *string
```

- *Type:* *string

---

##### `GlobalReplicationGroupIdInput`<sup>Optional</sup> <a name="GlobalReplicationGroupIdInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.globalReplicationGroupIdInput"></a>

```go
func GlobalReplicationGroupIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `LogDeliveryConfigurationInput`<sup>Optional</sup> <a name="LogDeliveryConfigurationInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.logDeliveryConfigurationInput"></a>

```go
func LogDeliveryConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.maintenanceWindowInput"></a>

```go
func MaintenanceWindowInput() *string
```

- *Type:* *string

---

##### `MultiAzEnabledInput`<sup>Optional</sup> <a name="MultiAzEnabledInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.multiAzEnabledInput"></a>

```go
func MultiAzEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NodeTypeInput`<sup>Optional</sup> <a name="NodeTypeInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.nodeTypeInput"></a>

```go
func NodeTypeInput() *string
```

- *Type:* *string

---

##### `NotificationTopicArnInput`<sup>Optional</sup> <a name="NotificationTopicArnInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.notificationTopicArnInput"></a>

```go
func NotificationTopicArnInput() *string
```

- *Type:* *string

---

##### `NumberCacheClustersInput`<sup>Optional</sup> <a name="NumberCacheClustersInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numberCacheClustersInput"></a>

```go
func NumberCacheClustersInput() *f64
```

- *Type:* *f64

---

##### `NumCacheClustersInput`<sup>Optional</sup> <a name="NumCacheClustersInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numCacheClustersInput"></a>

```go
func NumCacheClustersInput() *f64
```

- *Type:* *f64

---

##### `NumNodeGroupsInput`<sup>Optional</sup> <a name="NumNodeGroupsInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numNodeGroupsInput"></a>

```go
func NumNodeGroupsInput() *f64
```

- *Type:* *f64

---

##### `ParameterGroupNameInput`<sup>Optional</sup> <a name="ParameterGroupNameInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.parameterGroupNameInput"></a>

```go
func ParameterGroupNameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PreferredCacheClusterAzsInput`<sup>Optional</sup> <a name="PreferredCacheClusterAzsInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredCacheClusterAzsInput"></a>

```go
func PreferredCacheClusterAzsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ReplicasPerNodeGroupInput`<sup>Optional</sup> <a name="ReplicasPerNodeGroupInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicasPerNodeGroupInput"></a>

```go
func ReplicasPerNodeGroupInput() *f64
```

- *Type:* *f64

---

##### `ReplicationGroupDescriptionInput`<sup>Optional</sup> <a name="ReplicationGroupDescriptionInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupDescriptionInput"></a>

```go
func ReplicationGroupDescriptionInput() *string
```

- *Type:* *string

---

##### `ReplicationGroupIdInput`<sup>Optional</sup> <a name="ReplicationGroupIdInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupIdInput"></a>

```go
func ReplicationGroupIdInput() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupNamesInput`<sup>Optional</sup> <a name="SecurityGroupNamesInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupNamesInput"></a>

```go
func SecurityGroupNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SnapshotArnsInput`<sup>Optional</sup> <a name="SnapshotArnsInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotArnsInput"></a>

```go
func SnapshotArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SnapshotNameInput`<sup>Optional</sup> <a name="SnapshotNameInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotNameInput"></a>

```go
func SnapshotNameInput() *string
```

- *Type:* *string

---

##### `SnapshotRetentionLimitInput`<sup>Optional</sup> <a name="SnapshotRetentionLimitInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotRetentionLimitInput"></a>

```go
func SnapshotRetentionLimitInput() *f64
```

- *Type:* *f64

---

##### `SnapshotWindowInput`<sup>Optional</sup> <a name="SnapshotWindowInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotWindowInput"></a>

```go
func SnapshotWindowInput() *string
```

- *Type:* *string

---

##### `SubnetGroupNameInput`<sup>Optional</sup> <a name="SubnetGroupNameInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.subnetGroupNameInput"></a>

```go
func SubnetGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TransitEncryptionEnabledInput`<sup>Optional</sup> <a name="TransitEncryptionEnabledInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionEnabledInput"></a>

```go
func TransitEncryptionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `UserGroupIdsInput`<sup>Optional</sup> <a name="UserGroupIdsInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.userGroupIdsInput"></a>

```go
func UserGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ApplyImmediately`<sup>Required</sup> <a name="ApplyImmediately" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.applyImmediately"></a>

```go
func ApplyImmediately() interface{}
```

- *Type:* interface{}

---

##### `AtRestEncryptionEnabled`<sup>Required</sup> <a name="AtRestEncryptionEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.atRestEncryptionEnabled"></a>

```go
func AtRestEncryptionEnabled() interface{}
```

- *Type:* interface{}

---

##### `AuthToken`<sup>Required</sup> <a name="AuthToken" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.authToken"></a>

```go
func AuthToken() *string
```

- *Type:* *string

---

##### `AutomaticFailoverEnabled`<sup>Required</sup> <a name="AutomaticFailoverEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.automaticFailoverEnabled"></a>

```go
func AutomaticFailoverEnabled() interface{}
```

- *Type:* interface{}

---

##### `AutoMinorVersionUpgrade`<sup>Required</sup> <a name="AutoMinorVersionUpgrade" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.autoMinorVersionUpgrade"></a>

```go
func AutoMinorVersionUpgrade() *string
```

- *Type:* *string

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.availabilityZones"></a>

```go
func AvailabilityZones() *[]*string
```

- *Type:* *[]*string

---

##### `DataTieringEnabled`<sup>Required</sup> <a name="DataTieringEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.dataTieringEnabled"></a>

```go
func DataTieringEnabled() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `FinalSnapshotIdentifier`<sup>Required</sup> <a name="FinalSnapshotIdentifier" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.finalSnapshotIdentifier"></a>

```go
func FinalSnapshotIdentifier() *string
```

- *Type:* *string

---

##### `GlobalReplicationGroupId`<sup>Required</sup> <a name="GlobalReplicationGroupId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.globalReplicationGroupId"></a>

```go
func GlobalReplicationGroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.maintenanceWindow"></a>

```go
func MaintenanceWindow() *string
```

- *Type:* *string

---

##### `MultiAzEnabled`<sup>Required</sup> <a name="MultiAzEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.multiAzEnabled"></a>

```go
func MultiAzEnabled() interface{}
```

- *Type:* interface{}

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.nodeType"></a>

```go
func NodeType() *string
```

- *Type:* *string

---

##### `NotificationTopicArn`<sup>Required</sup> <a name="NotificationTopicArn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.notificationTopicArn"></a>

```go
func NotificationTopicArn() *string
```

- *Type:* *string

---

##### `NumberCacheClusters`<sup>Required</sup> <a name="NumberCacheClusters" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numberCacheClusters"></a>

```go
func NumberCacheClusters() *f64
```

- *Type:* *f64

---

##### `NumCacheClusters`<sup>Required</sup> <a name="NumCacheClusters" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numCacheClusters"></a>

```go
func NumCacheClusters() *f64
```

- *Type:* *f64

---

##### `NumNodeGroups`<sup>Required</sup> <a name="NumNodeGroups" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.numNodeGroups"></a>

```go
func NumNodeGroups() *f64
```

- *Type:* *f64

---

##### `ParameterGroupName`<sup>Required</sup> <a name="ParameterGroupName" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.parameterGroupName"></a>

```go
func ParameterGroupName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PreferredCacheClusterAzs`<sup>Required</sup> <a name="PreferredCacheClusterAzs" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.preferredCacheClusterAzs"></a>

```go
func PreferredCacheClusterAzs() *[]*string
```

- *Type:* *[]*string

---

##### `ReplicasPerNodeGroup`<sup>Required</sup> <a name="ReplicasPerNodeGroup" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicasPerNodeGroup"></a>

```go
func ReplicasPerNodeGroup() *f64
```

- *Type:* *f64

---

##### `ReplicationGroupDescription`<sup>Required</sup> <a name="ReplicationGroupDescription" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupDescription"></a>

```go
func ReplicationGroupDescription() *string
```

- *Type:* *string

---

##### `ReplicationGroupId`<sup>Required</sup> <a name="ReplicationGroupId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.replicationGroupId"></a>

```go
func ReplicationGroupId() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupNames`<sup>Required</sup> <a name="SecurityGroupNames" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.securityGroupNames"></a>

```go
func SecurityGroupNames() *[]*string
```

- *Type:* *[]*string

---

##### `SnapshotArns`<sup>Required</sup> <a name="SnapshotArns" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotArns"></a>

```go
func SnapshotArns() *[]*string
```

- *Type:* *[]*string

---

##### `SnapshotName`<sup>Required</sup> <a name="SnapshotName" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotName"></a>

```go
func SnapshotName() *string
```

- *Type:* *string

---

##### `SnapshotRetentionLimit`<sup>Required</sup> <a name="SnapshotRetentionLimit" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotRetentionLimit"></a>

```go
func SnapshotRetentionLimit() *f64
```

- *Type:* *f64

---

##### `SnapshotWindow`<sup>Required</sup> <a name="SnapshotWindow" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.snapshotWindow"></a>

```go
func SnapshotWindow() *string
```

- *Type:* *string

---

##### `SubnetGroupName`<sup>Required</sup> <a name="SubnetGroupName" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.subnetGroupName"></a>

```go
func SubnetGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TransitEncryptionEnabled`<sup>Required</sup> <a name="TransitEncryptionEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.transitEncryptionEnabled"></a>

```go
func TransitEncryptionEnabled() interface{}
```

- *Type:* interface{}

---

##### `UserGroupIds`<sup>Required</sup> <a name="UserGroupIds" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.userGroupIds"></a>

```go
func UserGroupIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheReplicationGroupClusterMode <a name="ElasticacheReplicationGroupClusterMode" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticachereplicationgroup"

&elasticachereplicationgroup.ElasticacheReplicationGroupClusterMode {
	NumNodeGroups: *f64,
	ReplicasPerNodeGroup: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode.property.numNodeGroups">NumNodeGroups</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#num_node_groups ElasticacheReplicationGroup#num_node_groups}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode.property.replicasPerNodeGroup">ReplicasPerNodeGroup</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#replicas_per_node_group ElasticacheReplicationGroup#replicas_per_node_group}. |

---

##### `NumNodeGroups`<sup>Optional</sup> <a name="NumNodeGroups" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode.property.numNodeGroups"></a>

```go
NumNodeGroups *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#num_node_groups ElasticacheReplicationGroup#num_node_groups}.

---

##### `ReplicasPerNodeGroup`<sup>Optional</sup> <a name="ReplicasPerNodeGroup" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode.property.replicasPerNodeGroup"></a>

```go
ReplicasPerNodeGroup *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#replicas_per_node_group ElasticacheReplicationGroup#replicas_per_node_group}.

---

### ElasticacheReplicationGroupConfig <a name="ElasticacheReplicationGroupConfig" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticachereplicationgroup"

&elasticachereplicationgroup.ElasticacheReplicationGroupConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ReplicationGroupId: *string,
	ApplyImmediately: interface{},
	AtRestEncryptionEnabled: interface{},
	AuthToken: *string,
	AutomaticFailoverEnabled: interface{},
	AutoMinorVersionUpgrade: *string,
	AvailabilityZones: *[]*string,
	ClusterMode: github.com/cdktf/cdktf-provider-aws-go/aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode,
	DataTieringEnabled: interface{},
	Description: *string,
	Engine: *string,
	EngineVersion: *string,
	FinalSnapshotIdentifier: *string,
	GlobalReplicationGroupId: *string,
	Id: *string,
	KmsKeyId: *string,
	LogDeliveryConfiguration: interface{},
	MaintenanceWindow: *string,
	MultiAzEnabled: interface{},
	NodeType: *string,
	NotificationTopicArn: *string,
	NumberCacheClusters: *f64,
	NumCacheClusters: *f64,
	NumNodeGroups: *f64,
	ParameterGroupName: *string,
	Port: *f64,
	PreferredCacheClusterAzs: *[]*string,
	ReplicasPerNodeGroup: *f64,
	ReplicationGroupDescription: *string,
	SecurityGroupIds: *[]*string,
	SecurityGroupNames: *[]*string,
	SnapshotArns: *[]*string,
	SnapshotName: *string,
	SnapshotRetentionLimit: *f64,
	SnapshotWindow: *string,
	SubnetGroupName: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts,
	TransitEncryptionEnabled: interface{},
	UserGroupIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicationGroupId">ReplicationGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#replication_group_id ElasticacheReplicationGroup#replication_group_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.applyImmediately">ApplyImmediately</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#apply_immediately ElasticacheReplicationGroup#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.atRestEncryptionEnabled">AtRestEncryptionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#at_rest_encryption_enabled ElasticacheReplicationGroup#at_rest_encryption_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.authToken">AuthToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#auth_token ElasticacheReplicationGroup#auth_token}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.automaticFailoverEnabled">AutomaticFailoverEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#automatic_failover_enabled ElasticacheReplicationGroup#automatic_failover_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#auto_minor_version_upgrade ElasticacheReplicationGroup#auto_minor_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#availability_zones ElasticacheReplicationGroup#availability_zones}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.clusterMode">ClusterMode</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode">ElasticacheReplicationGroupClusterMode</a></code> | cluster_mode block. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.dataTieringEnabled">DataTieringEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#data_tiering_enabled ElasticacheReplicationGroup#data_tiering_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#description ElasticacheReplicationGroup#description}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.engine">Engine</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#engine ElasticacheReplicationGroup#engine}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#engine_version ElasticacheReplicationGroup#engine_version}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.finalSnapshotIdentifier">FinalSnapshotIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#final_snapshot_identifier ElasticacheReplicationGroup#final_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.globalReplicationGroupId">GlobalReplicationGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#global_replication_group_id ElasticacheReplicationGroup#global_replication_group_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#id ElasticacheReplicationGroup#id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#kms_key_id ElasticacheReplicationGroup#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.logDeliveryConfiguration">LogDeliveryConfiguration</a></code> | <code>interface{}</code> | log_delivery_configuration block. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.maintenanceWindow">MaintenanceWindow</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#maintenance_window ElasticacheReplicationGroup#maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.multiAzEnabled">MultiAzEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#multi_az_enabled ElasticacheReplicationGroup#multi_az_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.nodeType">NodeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#node_type ElasticacheReplicationGroup#node_type}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.notificationTopicArn">NotificationTopicArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#notification_topic_arn ElasticacheReplicationGroup#notification_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.numberCacheClusters">NumberCacheClusters</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#number_cache_clusters ElasticacheReplicationGroup#number_cache_clusters}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.numCacheClusters">NumCacheClusters</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#num_cache_clusters ElasticacheReplicationGroup#num_cache_clusters}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.numNodeGroups">NumNodeGroups</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#num_node_groups ElasticacheReplicationGroup#num_node_groups}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.parameterGroupName">ParameterGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#parameter_group_name ElasticacheReplicationGroup#parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#port ElasticacheReplicationGroup#port}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.preferredCacheClusterAzs">PreferredCacheClusterAzs</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#preferred_cache_cluster_azs ElasticacheReplicationGroup#preferred_cache_cluster_azs}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicasPerNodeGroup">ReplicasPerNodeGroup</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#replicas_per_node_group ElasticacheReplicationGroup#replicas_per_node_group}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicationGroupDescription">ReplicationGroupDescription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#replication_group_description ElasticacheReplicationGroup#replication_group_description}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#security_group_ids ElasticacheReplicationGroup#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.securityGroupNames">SecurityGroupNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#security_group_names ElasticacheReplicationGroup#security_group_names}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotArns">SnapshotArns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#snapshot_arns ElasticacheReplicationGroup#snapshot_arns}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotName">SnapshotName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#snapshot_name ElasticacheReplicationGroup#snapshot_name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotRetentionLimit">SnapshotRetentionLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#snapshot_retention_limit ElasticacheReplicationGroup#snapshot_retention_limit}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotWindow">SnapshotWindow</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#snapshot_window ElasticacheReplicationGroup#snapshot_window}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.subnetGroupName">SubnetGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#subnet_group_name ElasticacheReplicationGroup#subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#tags ElasticacheReplicationGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#tags_all ElasticacheReplicationGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts">ElasticacheReplicationGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.transitEncryptionEnabled">TransitEncryptionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#transit_encryption_enabled ElasticacheReplicationGroup#transit_encryption_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.userGroupIds">UserGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#user_group_ids ElasticacheReplicationGroup#user_group_ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ReplicationGroupId`<sup>Required</sup> <a name="ReplicationGroupId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicationGroupId"></a>

```go
ReplicationGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#replication_group_id ElasticacheReplicationGroup#replication_group_id}.

---

##### `ApplyImmediately`<sup>Optional</sup> <a name="ApplyImmediately" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.applyImmediately"></a>

```go
ApplyImmediately interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#apply_immediately ElasticacheReplicationGroup#apply_immediately}.

---

##### `AtRestEncryptionEnabled`<sup>Optional</sup> <a name="AtRestEncryptionEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.atRestEncryptionEnabled"></a>

```go
AtRestEncryptionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#at_rest_encryption_enabled ElasticacheReplicationGroup#at_rest_encryption_enabled}.

---

##### `AuthToken`<sup>Optional</sup> <a name="AuthToken" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.authToken"></a>

```go
AuthToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#auth_token ElasticacheReplicationGroup#auth_token}.

---

##### `AutomaticFailoverEnabled`<sup>Optional</sup> <a name="AutomaticFailoverEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.automaticFailoverEnabled"></a>

```go
AutomaticFailoverEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#automatic_failover_enabled ElasticacheReplicationGroup#automatic_failover_enabled}.

---

##### `AutoMinorVersionUpgrade`<sup>Optional</sup> <a name="AutoMinorVersionUpgrade" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.autoMinorVersionUpgrade"></a>

```go
AutoMinorVersionUpgrade *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#auto_minor_version_upgrade ElasticacheReplicationGroup#auto_minor_version_upgrade}.

---

##### `AvailabilityZones`<sup>Optional</sup> <a name="AvailabilityZones" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.availabilityZones"></a>

```go
AvailabilityZones *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#availability_zones ElasticacheReplicationGroup#availability_zones}.

---

##### `ClusterMode`<sup>Optional</sup> <a name="ClusterMode" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.clusterMode"></a>

```go
ClusterMode ElasticacheReplicationGroupClusterMode
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode">ElasticacheReplicationGroupClusterMode</a>

cluster_mode block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#cluster_mode ElasticacheReplicationGroup#cluster_mode}

---

##### `DataTieringEnabled`<sup>Optional</sup> <a name="DataTieringEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.dataTieringEnabled"></a>

```go
DataTieringEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#data_tiering_enabled ElasticacheReplicationGroup#data_tiering_enabled}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#description ElasticacheReplicationGroup#description}.

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.engine"></a>

```go
Engine *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#engine ElasticacheReplicationGroup#engine}.

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.engineVersion"></a>

```go
EngineVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#engine_version ElasticacheReplicationGroup#engine_version}.

---

##### `FinalSnapshotIdentifier`<sup>Optional</sup> <a name="FinalSnapshotIdentifier" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.finalSnapshotIdentifier"></a>

```go
FinalSnapshotIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#final_snapshot_identifier ElasticacheReplicationGroup#final_snapshot_identifier}.

---

##### `GlobalReplicationGroupId`<sup>Optional</sup> <a name="GlobalReplicationGroupId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.globalReplicationGroupId"></a>

```go
GlobalReplicationGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#global_replication_group_id ElasticacheReplicationGroup#global_replication_group_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#id ElasticacheReplicationGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#kms_key_id ElasticacheReplicationGroup#kms_key_id}.

---

##### `LogDeliveryConfiguration`<sup>Optional</sup> <a name="LogDeliveryConfiguration" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.logDeliveryConfiguration"></a>

```go
LogDeliveryConfiguration interface{}
```

- *Type:* interface{}

log_delivery_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#log_delivery_configuration ElasticacheReplicationGroup#log_delivery_configuration}

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.maintenanceWindow"></a>

```go
MaintenanceWindow *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#maintenance_window ElasticacheReplicationGroup#maintenance_window}.

---

##### `MultiAzEnabled`<sup>Optional</sup> <a name="MultiAzEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.multiAzEnabled"></a>

```go
MultiAzEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#multi_az_enabled ElasticacheReplicationGroup#multi_az_enabled}.

---

##### `NodeType`<sup>Optional</sup> <a name="NodeType" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.nodeType"></a>

```go
NodeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#node_type ElasticacheReplicationGroup#node_type}.

---

##### `NotificationTopicArn`<sup>Optional</sup> <a name="NotificationTopicArn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.notificationTopicArn"></a>

```go
NotificationTopicArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#notification_topic_arn ElasticacheReplicationGroup#notification_topic_arn}.

---

##### `NumberCacheClusters`<sup>Optional</sup> <a name="NumberCacheClusters" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.numberCacheClusters"></a>

```go
NumberCacheClusters *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#number_cache_clusters ElasticacheReplicationGroup#number_cache_clusters}.

---

##### `NumCacheClusters`<sup>Optional</sup> <a name="NumCacheClusters" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.numCacheClusters"></a>

```go
NumCacheClusters *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#num_cache_clusters ElasticacheReplicationGroup#num_cache_clusters}.

---

##### `NumNodeGroups`<sup>Optional</sup> <a name="NumNodeGroups" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.numNodeGroups"></a>

```go
NumNodeGroups *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#num_node_groups ElasticacheReplicationGroup#num_node_groups}.

---

##### `ParameterGroupName`<sup>Optional</sup> <a name="ParameterGroupName" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.parameterGroupName"></a>

```go
ParameterGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#parameter_group_name ElasticacheReplicationGroup#parameter_group_name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#port ElasticacheReplicationGroup#port}.

---

##### `PreferredCacheClusterAzs`<sup>Optional</sup> <a name="PreferredCacheClusterAzs" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.preferredCacheClusterAzs"></a>

```go
PreferredCacheClusterAzs *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#preferred_cache_cluster_azs ElasticacheReplicationGroup#preferred_cache_cluster_azs}.

---

##### `ReplicasPerNodeGroup`<sup>Optional</sup> <a name="ReplicasPerNodeGroup" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicasPerNodeGroup"></a>

```go
ReplicasPerNodeGroup *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#replicas_per_node_group ElasticacheReplicationGroup#replicas_per_node_group}.

---

##### `ReplicationGroupDescription`<sup>Optional</sup> <a name="ReplicationGroupDescription" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.replicationGroupDescription"></a>

```go
ReplicationGroupDescription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#replication_group_description ElasticacheReplicationGroup#replication_group_description}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#security_group_ids ElasticacheReplicationGroup#security_group_ids}.

---

##### `SecurityGroupNames`<sup>Optional</sup> <a name="SecurityGroupNames" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.securityGroupNames"></a>

```go
SecurityGroupNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#security_group_names ElasticacheReplicationGroup#security_group_names}.

---

##### `SnapshotArns`<sup>Optional</sup> <a name="SnapshotArns" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotArns"></a>

```go
SnapshotArns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#snapshot_arns ElasticacheReplicationGroup#snapshot_arns}.

---

##### `SnapshotName`<sup>Optional</sup> <a name="SnapshotName" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotName"></a>

```go
SnapshotName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#snapshot_name ElasticacheReplicationGroup#snapshot_name}.

---

##### `SnapshotRetentionLimit`<sup>Optional</sup> <a name="SnapshotRetentionLimit" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotRetentionLimit"></a>

```go
SnapshotRetentionLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#snapshot_retention_limit ElasticacheReplicationGroup#snapshot_retention_limit}.

---

##### `SnapshotWindow`<sup>Optional</sup> <a name="SnapshotWindow" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.snapshotWindow"></a>

```go
SnapshotWindow *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#snapshot_window ElasticacheReplicationGroup#snapshot_window}.

---

##### `SubnetGroupName`<sup>Optional</sup> <a name="SubnetGroupName" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.subnetGroupName"></a>

```go
SubnetGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#subnet_group_name ElasticacheReplicationGroup#subnet_group_name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#tags ElasticacheReplicationGroup#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#tags_all ElasticacheReplicationGroup#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.timeouts"></a>

```go
Timeouts ElasticacheReplicationGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts">ElasticacheReplicationGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#timeouts ElasticacheReplicationGroup#timeouts}

---

##### `TransitEncryptionEnabled`<sup>Optional</sup> <a name="TransitEncryptionEnabled" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.transitEncryptionEnabled"></a>

```go
TransitEncryptionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#transit_encryption_enabled ElasticacheReplicationGroup#transit_encryption_enabled}.

---

##### `UserGroupIds`<sup>Optional</sup> <a name="UserGroupIds" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupConfig.property.userGroupIds"></a>

```go
UserGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#user_group_ids ElasticacheReplicationGroup#user_group_ids}.

---

### ElasticacheReplicationGroupLogDeliveryConfiguration <a name="ElasticacheReplicationGroupLogDeliveryConfiguration" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticachereplicationgroup"

&elasticachereplicationgroup.ElasticacheReplicationGroupLogDeliveryConfiguration {
	Destination: *string,
	DestinationType: *string,
	LogFormat: *string,
	LogType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#destination ElasticacheReplicationGroup#destination}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration.property.destinationType">DestinationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#destination_type ElasticacheReplicationGroup#destination_type}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration.property.logFormat">LogFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#log_format ElasticacheReplicationGroup#log_format}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration.property.logType">LogType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#log_type ElasticacheReplicationGroup#log_type}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#destination ElasticacheReplicationGroup#destination}.

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration.property.destinationType"></a>

```go
DestinationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#destination_type ElasticacheReplicationGroup#destination_type}.

---

##### `LogFormat`<sup>Required</sup> <a name="LogFormat" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration.property.logFormat"></a>

```go
LogFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#log_format ElasticacheReplicationGroup#log_format}.

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfiguration.property.logType"></a>

```go
LogType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#log_type ElasticacheReplicationGroup#log_type}.

---

### ElasticacheReplicationGroupTimeouts <a name="ElasticacheReplicationGroupTimeouts" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticachereplicationgroup"

&elasticachereplicationgroup.ElasticacheReplicationGroupTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#create ElasticacheReplicationGroup#create}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#delete ElasticacheReplicationGroup#delete}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#update ElasticacheReplicationGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#create ElasticacheReplicationGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#delete ElasticacheReplicationGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group#update ElasticacheReplicationGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheReplicationGroupClusterModeOutputReference <a name="ElasticacheReplicationGroupClusterModeOutputReference" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticachereplicationgroup"

elasticachereplicationgroup.NewElasticacheReplicationGroupClusterModeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ElasticacheReplicationGroupClusterModeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.resetNumNodeGroups">ResetNumNodeGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.resetReplicasPerNodeGroup">ResetReplicasPerNodeGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNumNodeGroups` <a name="ResetNumNodeGroups" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.resetNumNodeGroups"></a>

```go
func ResetNumNodeGroups()
```

##### `ResetReplicasPerNodeGroup` <a name="ResetReplicasPerNodeGroup" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.resetReplicasPerNodeGroup"></a>

```go
func ResetReplicasPerNodeGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.numNodeGroupsInput">NumNodeGroupsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.replicasPerNodeGroupInput">ReplicasPerNodeGroupInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.numNodeGroups">NumNodeGroups</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.replicasPerNodeGroup">ReplicasPerNodeGroup</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode">ElasticacheReplicationGroupClusterMode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NumNodeGroupsInput`<sup>Optional</sup> <a name="NumNodeGroupsInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.numNodeGroupsInput"></a>

```go
func NumNodeGroupsInput() *f64
```

- *Type:* *f64

---

##### `ReplicasPerNodeGroupInput`<sup>Optional</sup> <a name="ReplicasPerNodeGroupInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.replicasPerNodeGroupInput"></a>

```go
func ReplicasPerNodeGroupInput() *f64
```

- *Type:* *f64

---

##### `NumNodeGroups`<sup>Required</sup> <a name="NumNodeGroups" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.numNodeGroups"></a>

```go
func NumNodeGroups() *f64
```

- *Type:* *f64

---

##### `ReplicasPerNodeGroup`<sup>Required</sup> <a name="ReplicasPerNodeGroup" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.replicasPerNodeGroup"></a>

```go
func ReplicasPerNodeGroup() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterModeOutputReference.property.internalValue"></a>

```go
func InternalValue() ElasticacheReplicationGroupClusterMode
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupClusterMode">ElasticacheReplicationGroupClusterMode</a>

---


### ElasticacheReplicationGroupLogDeliveryConfigurationList <a name="ElasticacheReplicationGroupLogDeliveryConfigurationList" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticachereplicationgroup"

elasticachereplicationgroup.NewElasticacheReplicationGroupLogDeliveryConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ElasticacheReplicationGroupLogDeliveryConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.get"></a>

```go
func Get(index *f64) ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference <a name="ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticachereplicationgroup"

elasticachereplicationgroup.NewElasticacheReplicationGroupLogDeliveryConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destinationTypeInput">DestinationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logFormatInput">LogFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logTypeInput">LogTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destinationType">DestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logFormat">LogFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logType">LogType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `DestinationTypeInput`<sup>Optional</sup> <a name="DestinationTypeInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destinationTypeInput"></a>

```go
func DestinationTypeInput() *string
```

- *Type:* *string

---

##### `LogFormatInput`<sup>Optional</sup> <a name="LogFormatInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logFormatInput"></a>

```go
func LogFormatInput() *string
```

- *Type:* *string

---

##### `LogTypeInput`<sup>Optional</sup> <a name="LogTypeInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logTypeInput"></a>

```go
func LogTypeInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destinationType"></a>

```go
func DestinationType() *string
```

- *Type:* *string

---

##### `LogFormat`<sup>Required</sup> <a name="LogFormat" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logFormat"></a>

```go
func LogFormat() *string
```

- *Type:* *string

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logType"></a>

```go
func LogType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElasticacheReplicationGroupTimeoutsOutputReference <a name="ElasticacheReplicationGroupTimeoutsOutputReference" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticachereplicationgroup"

elasticachereplicationgroup.NewElasticacheReplicationGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ElasticacheReplicationGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticacheReplicationGroup.ElasticacheReplicationGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



