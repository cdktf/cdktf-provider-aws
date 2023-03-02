# `elasticacheCluster` Submodule <a name="`elasticacheCluster` Submodule" id="@cdktf/provider-aws.elasticacheCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheCluster <a name="ElasticacheCluster" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster aws_elasticache_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticachecluster"

elasticachecluster.NewElasticacheCluster(scope Construct, id *string, config ElasticacheClusterConfig) ElasticacheCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig">ElasticacheClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig">ElasticacheClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.putLogDeliveryConfiguration">PutLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetApplyImmediately">ResetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetAutoMinorVersionUpgrade">ResetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetAzMode">ResetAzMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetEngine">ResetEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetFinalSnapshotIdentifier">ResetFinalSnapshotIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetIpDiscovery">ResetIpDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetLogDeliveryConfiguration">ResetLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetNetworkType">ResetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetNodeType">ResetNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetNotificationTopicArn">ResetNotificationTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetNumCacheNodes">ResetNumCacheNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetOutpostMode">ResetOutpostMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetParameterGroupName">ResetParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetPreferredAvailabilityZones">ResetPreferredAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetPreferredOutpostArn">ResetPreferredOutpostArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetReplicationGroupId">ResetReplicationGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSecurityGroupNames">ResetSecurityGroupNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSnapshotArns">ResetSnapshotArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSnapshotName">ResetSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSnapshotRetentionLimit">ResetSnapshotRetentionLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSnapshotWindow">ResetSnapshotWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSubnetGroupName">ResetSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutLogDeliveryConfiguration` <a name="PutLogDeliveryConfiguration" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.putLogDeliveryConfiguration"></a>

```go
func PutLogDeliveryConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.putLogDeliveryConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetApplyImmediately` <a name="ResetApplyImmediately" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetApplyImmediately"></a>

```go
func ResetApplyImmediately()
```

##### `ResetAutoMinorVersionUpgrade` <a name="ResetAutoMinorVersionUpgrade" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetAutoMinorVersionUpgrade"></a>

```go
func ResetAutoMinorVersionUpgrade()
```

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetAzMode` <a name="ResetAzMode" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetAzMode"></a>

```go
func ResetAzMode()
```

##### `ResetEngine` <a name="ResetEngine" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetEngine"></a>

```go
func ResetEngine()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetEngineVersion"></a>

```go
func ResetEngineVersion()
```

##### `ResetFinalSnapshotIdentifier` <a name="ResetFinalSnapshotIdentifier" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetFinalSnapshotIdentifier"></a>

```go
func ResetFinalSnapshotIdentifier()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetIpDiscovery` <a name="ResetIpDiscovery" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetIpDiscovery"></a>

```go
func ResetIpDiscovery()
```

##### `ResetLogDeliveryConfiguration` <a name="ResetLogDeliveryConfiguration" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetLogDeliveryConfiguration"></a>

```go
func ResetLogDeliveryConfiguration()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetMaintenanceWindow"></a>

```go
func ResetMaintenanceWindow()
```

##### `ResetNetworkType` <a name="ResetNetworkType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetNetworkType"></a>

```go
func ResetNetworkType()
```

##### `ResetNodeType` <a name="ResetNodeType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetNodeType"></a>

```go
func ResetNodeType()
```

##### `ResetNotificationTopicArn` <a name="ResetNotificationTopicArn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetNotificationTopicArn"></a>

```go
func ResetNotificationTopicArn()
```

##### `ResetNumCacheNodes` <a name="ResetNumCacheNodes" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetNumCacheNodes"></a>

```go
func ResetNumCacheNodes()
```

##### `ResetOutpostMode` <a name="ResetOutpostMode" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetOutpostMode"></a>

```go
func ResetOutpostMode()
```

##### `ResetParameterGroupName` <a name="ResetParameterGroupName" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetParameterGroupName"></a>

```go
func ResetParameterGroupName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPreferredAvailabilityZones` <a name="ResetPreferredAvailabilityZones" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetPreferredAvailabilityZones"></a>

```go
func ResetPreferredAvailabilityZones()
```

##### `ResetPreferredOutpostArn` <a name="ResetPreferredOutpostArn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetPreferredOutpostArn"></a>

```go
func ResetPreferredOutpostArn()
```

##### `ResetReplicationGroupId` <a name="ResetReplicationGroupId" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetReplicationGroupId"></a>

```go
func ResetReplicationGroupId()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSecurityGroupNames` <a name="ResetSecurityGroupNames" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSecurityGroupNames"></a>

```go
func ResetSecurityGroupNames()
```

##### `ResetSnapshotArns` <a name="ResetSnapshotArns" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSnapshotArns"></a>

```go
func ResetSnapshotArns()
```

##### `ResetSnapshotName` <a name="ResetSnapshotName" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSnapshotName"></a>

```go
func ResetSnapshotName()
```

##### `ResetSnapshotRetentionLimit` <a name="ResetSnapshotRetentionLimit" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSnapshotRetentionLimit"></a>

```go
func ResetSnapshotRetentionLimit()
```

##### `ResetSnapshotWindow` <a name="ResetSnapshotWindow" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSnapshotWindow"></a>

```go
func ResetSnapshotWindow()
```

##### `ResetSubnetGroupName` <a name="ResetSubnetGroupName" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetSubnetGroupName"></a>

```go
func ResetSubnetGroupName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticachecluster"

elasticachecluster.ElasticacheCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticachecluster"

elasticachecluster.ElasticacheCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticachecluster"

elasticachecluster.ElasticacheCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.cacheNodes">CacheNodes</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList">ElasticacheClusterCacheNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.clusterAddress">ClusterAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.configurationEndpoint">ConfigurationEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.engineVersionActual">EngineVersionActual</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.logDeliveryConfiguration">LogDeliveryConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList">ElasticacheClusterLogDeliveryConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.applyImmediatelyInput">ApplyImmediatelyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.autoMinorVersionUpgradeInput">AutoMinorVersionUpgradeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.azModeInput">AzModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.engineInput">EngineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.engineVersionInput">EngineVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.finalSnapshotIdentifierInput">FinalSnapshotIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.ipDiscoveryInput">IpDiscoveryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.logDeliveryConfigurationInput">LogDeliveryConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.networkTypeInput">NetworkTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.nodeTypeInput">NodeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.notificationTopicArnInput">NotificationTopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.numCacheNodesInput">NumCacheNodesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.outpostModeInput">OutpostModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.parameterGroupNameInput">ParameterGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.preferredAvailabilityZonesInput">PreferredAvailabilityZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.preferredOutpostArnInput">PreferredOutpostArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.replicationGroupIdInput">ReplicationGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.securityGroupNamesInput">SecurityGroupNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotArnsInput">SnapshotArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotNameInput">SnapshotNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotRetentionLimitInput">SnapshotRetentionLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotWindowInput">SnapshotWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.subnetGroupNameInput">SubnetGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.applyImmediately">ApplyImmediately</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.azMode">AzMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.finalSnapshotIdentifier">FinalSnapshotIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.ipDiscovery">IpDiscovery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.maintenanceWindow">MaintenanceWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.networkType">NetworkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.nodeType">NodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.notificationTopicArn">NotificationTopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.numCacheNodes">NumCacheNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.outpostMode">OutpostMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.parameterGroupName">ParameterGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.preferredAvailabilityZones">PreferredAvailabilityZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.preferredOutpostArn">PreferredOutpostArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.replicationGroupId">ReplicationGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.securityGroupNames">SecurityGroupNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotArns">SnapshotArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotName">SnapshotName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotRetentionLimit">SnapshotRetentionLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotWindow">SnapshotWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.subnetGroupName">SubnetGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CacheNodes`<sup>Required</sup> <a name="CacheNodes" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.cacheNodes"></a>

```go
func CacheNodes() ElasticacheClusterCacheNodesList
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList">ElasticacheClusterCacheNodesList</a>

---

##### `ClusterAddress`<sup>Required</sup> <a name="ClusterAddress" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.clusterAddress"></a>

```go
func ClusterAddress() *string
```

- *Type:* *string

---

##### `ConfigurationEndpoint`<sup>Required</sup> <a name="ConfigurationEndpoint" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.configurationEndpoint"></a>

```go
func ConfigurationEndpoint() *string
```

- *Type:* *string

---

##### `EngineVersionActual`<sup>Required</sup> <a name="EngineVersionActual" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.engineVersionActual"></a>

```go
func EngineVersionActual() *string
```

- *Type:* *string

---

##### `LogDeliveryConfiguration`<sup>Required</sup> <a name="LogDeliveryConfiguration" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.logDeliveryConfiguration"></a>

```go
func LogDeliveryConfiguration() ElasticacheClusterLogDeliveryConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList">ElasticacheClusterLogDeliveryConfigurationList</a>

---

##### `ApplyImmediatelyInput`<sup>Optional</sup> <a name="ApplyImmediatelyInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.applyImmediatelyInput"></a>

```go
func ApplyImmediatelyInput() interface{}
```

- *Type:* interface{}

---

##### `AutoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="AutoMinorVersionUpgradeInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.autoMinorVersionUpgradeInput"></a>

```go
func AutoMinorVersionUpgradeInput() *string
```

- *Type:* *string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `AzModeInput`<sup>Optional</sup> <a name="AzModeInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.azModeInput"></a>

```go
func AzModeInput() *string
```

- *Type:* *string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.engineInput"></a>

```go
func EngineInput() *string
```

- *Type:* *string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.engineVersionInput"></a>

```go
func EngineVersionInput() *string
```

- *Type:* *string

---

##### `FinalSnapshotIdentifierInput`<sup>Optional</sup> <a name="FinalSnapshotIdentifierInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.finalSnapshotIdentifierInput"></a>

```go
func FinalSnapshotIdentifierInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpDiscoveryInput`<sup>Optional</sup> <a name="IpDiscoveryInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.ipDiscoveryInput"></a>

```go
func IpDiscoveryInput() *string
```

- *Type:* *string

---

##### `LogDeliveryConfigurationInput`<sup>Optional</sup> <a name="LogDeliveryConfigurationInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.logDeliveryConfigurationInput"></a>

```go
func LogDeliveryConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.maintenanceWindowInput"></a>

```go
func MaintenanceWindowInput() *string
```

- *Type:* *string

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.networkTypeInput"></a>

```go
func NetworkTypeInput() *string
```

- *Type:* *string

---

##### `NodeTypeInput`<sup>Optional</sup> <a name="NodeTypeInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.nodeTypeInput"></a>

```go
func NodeTypeInput() *string
```

- *Type:* *string

---

##### `NotificationTopicArnInput`<sup>Optional</sup> <a name="NotificationTopicArnInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.notificationTopicArnInput"></a>

```go
func NotificationTopicArnInput() *string
```

- *Type:* *string

---

##### `NumCacheNodesInput`<sup>Optional</sup> <a name="NumCacheNodesInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.numCacheNodesInput"></a>

```go
func NumCacheNodesInput() *f64
```

- *Type:* *f64

---

##### `OutpostModeInput`<sup>Optional</sup> <a name="OutpostModeInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.outpostModeInput"></a>

```go
func OutpostModeInput() *string
```

- *Type:* *string

---

##### `ParameterGroupNameInput`<sup>Optional</sup> <a name="ParameterGroupNameInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.parameterGroupNameInput"></a>

```go
func ParameterGroupNameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PreferredAvailabilityZonesInput`<sup>Optional</sup> <a name="PreferredAvailabilityZonesInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.preferredAvailabilityZonesInput"></a>

```go
func PreferredAvailabilityZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PreferredOutpostArnInput`<sup>Optional</sup> <a name="PreferredOutpostArnInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.preferredOutpostArnInput"></a>

```go
func PreferredOutpostArnInput() *string
```

- *Type:* *string

---

##### `ReplicationGroupIdInput`<sup>Optional</sup> <a name="ReplicationGroupIdInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.replicationGroupIdInput"></a>

```go
func ReplicationGroupIdInput() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupNamesInput`<sup>Optional</sup> <a name="SecurityGroupNamesInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.securityGroupNamesInput"></a>

```go
func SecurityGroupNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SnapshotArnsInput`<sup>Optional</sup> <a name="SnapshotArnsInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotArnsInput"></a>

```go
func SnapshotArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SnapshotNameInput`<sup>Optional</sup> <a name="SnapshotNameInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotNameInput"></a>

```go
func SnapshotNameInput() *string
```

- *Type:* *string

---

##### `SnapshotRetentionLimitInput`<sup>Optional</sup> <a name="SnapshotRetentionLimitInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotRetentionLimitInput"></a>

```go
func SnapshotRetentionLimitInput() *f64
```

- *Type:* *f64

---

##### `SnapshotWindowInput`<sup>Optional</sup> <a name="SnapshotWindowInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotWindowInput"></a>

```go
func SnapshotWindowInput() *string
```

- *Type:* *string

---

##### `SubnetGroupNameInput`<sup>Optional</sup> <a name="SubnetGroupNameInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.subnetGroupNameInput"></a>

```go
func SubnetGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ApplyImmediately`<sup>Required</sup> <a name="ApplyImmediately" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.applyImmediately"></a>

```go
func ApplyImmediately() interface{}
```

- *Type:* interface{}

---

##### `AutoMinorVersionUpgrade`<sup>Required</sup> <a name="AutoMinorVersionUpgrade" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.autoMinorVersionUpgrade"></a>

```go
func AutoMinorVersionUpgrade() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `AzMode`<sup>Required</sup> <a name="AzMode" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.azMode"></a>

```go
func AzMode() *string
```

- *Type:* *string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `FinalSnapshotIdentifier`<sup>Required</sup> <a name="FinalSnapshotIdentifier" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.finalSnapshotIdentifier"></a>

```go
func FinalSnapshotIdentifier() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpDiscovery`<sup>Required</sup> <a name="IpDiscovery" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.ipDiscovery"></a>

```go
func IpDiscovery() *string
```

- *Type:* *string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.maintenanceWindow"></a>

```go
func MaintenanceWindow() *string
```

- *Type:* *string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.networkType"></a>

```go
func NetworkType() *string
```

- *Type:* *string

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.nodeType"></a>

```go
func NodeType() *string
```

- *Type:* *string

---

##### `NotificationTopicArn`<sup>Required</sup> <a name="NotificationTopicArn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.notificationTopicArn"></a>

```go
func NotificationTopicArn() *string
```

- *Type:* *string

---

##### `NumCacheNodes`<sup>Required</sup> <a name="NumCacheNodes" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.numCacheNodes"></a>

```go
func NumCacheNodes() *f64
```

- *Type:* *f64

---

##### `OutpostMode`<sup>Required</sup> <a name="OutpostMode" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.outpostMode"></a>

```go
func OutpostMode() *string
```

- *Type:* *string

---

##### `ParameterGroupName`<sup>Required</sup> <a name="ParameterGroupName" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.parameterGroupName"></a>

```go
func ParameterGroupName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PreferredAvailabilityZones`<sup>Required</sup> <a name="PreferredAvailabilityZones" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.preferredAvailabilityZones"></a>

```go
func PreferredAvailabilityZones() *[]*string
```

- *Type:* *[]*string

---

##### `PreferredOutpostArn`<sup>Required</sup> <a name="PreferredOutpostArn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.preferredOutpostArn"></a>

```go
func PreferredOutpostArn() *string
```

- *Type:* *string

---

##### `ReplicationGroupId`<sup>Required</sup> <a name="ReplicationGroupId" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.replicationGroupId"></a>

```go
func ReplicationGroupId() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupNames`<sup>Required</sup> <a name="SecurityGroupNames" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.securityGroupNames"></a>

```go
func SecurityGroupNames() *[]*string
```

- *Type:* *[]*string

---

##### `SnapshotArns`<sup>Required</sup> <a name="SnapshotArns" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotArns"></a>

```go
func SnapshotArns() *[]*string
```

- *Type:* *[]*string

---

##### `SnapshotName`<sup>Required</sup> <a name="SnapshotName" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotName"></a>

```go
func SnapshotName() *string
```

- *Type:* *string

---

##### `SnapshotRetentionLimit`<sup>Required</sup> <a name="SnapshotRetentionLimit" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotRetentionLimit"></a>

```go
func SnapshotRetentionLimit() *f64
```

- *Type:* *f64

---

##### `SnapshotWindow`<sup>Required</sup> <a name="SnapshotWindow" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.snapshotWindow"></a>

```go
func SnapshotWindow() *string
```

- *Type:* *string

---

##### `SubnetGroupName`<sup>Required</sup> <a name="SubnetGroupName" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.subnetGroupName"></a>

```go
func SubnetGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheClusterCacheNodes <a name="ElasticacheClusterCacheNodes" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticachecluster"

&elasticachecluster.ElasticacheClusterCacheNodes {

}
```


### ElasticacheClusterConfig <a name="ElasticacheClusterConfig" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticachecluster"

&elasticachecluster.ElasticacheClusterConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterId: *string,
	ApplyImmediately: interface{},
	AutoMinorVersionUpgrade: *string,
	AvailabilityZone: *string,
	AzMode: *string,
	Engine: *string,
	EngineVersion: *string,
	FinalSnapshotIdentifier: *string,
	Id: *string,
	IpDiscovery: *string,
	LogDeliveryConfiguration: interface{},
	MaintenanceWindow: *string,
	NetworkType: *string,
	NodeType: *string,
	NotificationTopicArn: *string,
	NumCacheNodes: *f64,
	OutpostMode: *string,
	ParameterGroupName: *string,
	Port: *f64,
	PreferredAvailabilityZones: *[]*string,
	PreferredOutpostArn: *string,
	ReplicationGroupId: *string,
	SecurityGroupIds: *[]*string,
	SecurityGroupNames: *[]*string,
	SnapshotArns: *[]*string,
	SnapshotName: *string,
	SnapshotRetentionLimit: *f64,
	SnapshotWindow: *string,
	SubnetGroupName: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#cluster_id ElasticacheCluster#cluster_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.applyImmediately">ApplyImmediately</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#apply_immediately ElasticacheCluster#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#auto_minor_version_upgrade ElasticacheCluster#auto_minor_version_upgrade}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#availability_zone ElasticacheCluster#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.azMode">AzMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#az_mode ElasticacheCluster#az_mode}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.engine">Engine</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#engine ElasticacheCluster#engine}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#engine_version ElasticacheCluster#engine_version}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.finalSnapshotIdentifier">FinalSnapshotIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#final_snapshot_identifier ElasticacheCluster#final_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#id ElasticacheCluster#id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.ipDiscovery">IpDiscovery</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#ip_discovery ElasticacheCluster#ip_discovery}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.logDeliveryConfiguration">LogDeliveryConfiguration</a></code> | <code>interface{}</code> | log_delivery_configuration block. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.maintenanceWindow">MaintenanceWindow</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#maintenance_window ElasticacheCluster#maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.networkType">NetworkType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#network_type ElasticacheCluster#network_type}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.nodeType">NodeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#node_type ElasticacheCluster#node_type}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.notificationTopicArn">NotificationTopicArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#notification_topic_arn ElasticacheCluster#notification_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.numCacheNodes">NumCacheNodes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#num_cache_nodes ElasticacheCluster#num_cache_nodes}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.outpostMode">OutpostMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#outpost_mode ElasticacheCluster#outpost_mode}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.parameterGroupName">ParameterGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#parameter_group_name ElasticacheCluster#parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#port ElasticacheCluster#port}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.preferredAvailabilityZones">PreferredAvailabilityZones</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#preferred_availability_zones ElasticacheCluster#preferred_availability_zones}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.preferredOutpostArn">PreferredOutpostArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#preferred_outpost_arn ElasticacheCluster#preferred_outpost_arn}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.replicationGroupId">ReplicationGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#replication_group_id ElasticacheCluster#replication_group_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#security_group_ids ElasticacheCluster#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.securityGroupNames">SecurityGroupNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#security_group_names ElasticacheCluster#security_group_names}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.snapshotArns">SnapshotArns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#snapshot_arns ElasticacheCluster#snapshot_arns}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.snapshotName">SnapshotName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#snapshot_name ElasticacheCluster#snapshot_name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.snapshotRetentionLimit">SnapshotRetentionLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#snapshot_retention_limit ElasticacheCluster#snapshot_retention_limit}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.snapshotWindow">SnapshotWindow</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#snapshot_window ElasticacheCluster#snapshot_window}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.subnetGroupName">SubnetGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#subnet_group_name ElasticacheCluster#subnet_group_name}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#tags ElasticacheCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#tags_all ElasticacheCluster#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#cluster_id ElasticacheCluster#cluster_id}.

---

##### `ApplyImmediately`<sup>Optional</sup> <a name="ApplyImmediately" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.applyImmediately"></a>

```go
ApplyImmediately interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#apply_immediately ElasticacheCluster#apply_immediately}.

---

##### `AutoMinorVersionUpgrade`<sup>Optional</sup> <a name="AutoMinorVersionUpgrade" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.autoMinorVersionUpgrade"></a>

```go
AutoMinorVersionUpgrade *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#auto_minor_version_upgrade ElasticacheCluster#auto_minor_version_upgrade}.

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#availability_zone ElasticacheCluster#availability_zone}.

---

##### `AzMode`<sup>Optional</sup> <a name="AzMode" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.azMode"></a>

```go
AzMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#az_mode ElasticacheCluster#az_mode}.

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.engine"></a>

```go
Engine *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#engine ElasticacheCluster#engine}.

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.engineVersion"></a>

```go
EngineVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#engine_version ElasticacheCluster#engine_version}.

---

##### `FinalSnapshotIdentifier`<sup>Optional</sup> <a name="FinalSnapshotIdentifier" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.finalSnapshotIdentifier"></a>

```go
FinalSnapshotIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#final_snapshot_identifier ElasticacheCluster#final_snapshot_identifier}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#id ElasticacheCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpDiscovery`<sup>Optional</sup> <a name="IpDiscovery" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.ipDiscovery"></a>

```go
IpDiscovery *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#ip_discovery ElasticacheCluster#ip_discovery}.

---

##### `LogDeliveryConfiguration`<sup>Optional</sup> <a name="LogDeliveryConfiguration" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.logDeliveryConfiguration"></a>

```go
LogDeliveryConfiguration interface{}
```

- *Type:* interface{}

log_delivery_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#log_delivery_configuration ElasticacheCluster#log_delivery_configuration}

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.maintenanceWindow"></a>

```go
MaintenanceWindow *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#maintenance_window ElasticacheCluster#maintenance_window}.

---

##### `NetworkType`<sup>Optional</sup> <a name="NetworkType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.networkType"></a>

```go
NetworkType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#network_type ElasticacheCluster#network_type}.

---

##### `NodeType`<sup>Optional</sup> <a name="NodeType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.nodeType"></a>

```go
NodeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#node_type ElasticacheCluster#node_type}.

---

##### `NotificationTopicArn`<sup>Optional</sup> <a name="NotificationTopicArn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.notificationTopicArn"></a>

```go
NotificationTopicArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#notification_topic_arn ElasticacheCluster#notification_topic_arn}.

---

##### `NumCacheNodes`<sup>Optional</sup> <a name="NumCacheNodes" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.numCacheNodes"></a>

```go
NumCacheNodes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#num_cache_nodes ElasticacheCluster#num_cache_nodes}.

---

##### `OutpostMode`<sup>Optional</sup> <a name="OutpostMode" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.outpostMode"></a>

```go
OutpostMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#outpost_mode ElasticacheCluster#outpost_mode}.

---

##### `ParameterGroupName`<sup>Optional</sup> <a name="ParameterGroupName" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.parameterGroupName"></a>

```go
ParameterGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#parameter_group_name ElasticacheCluster#parameter_group_name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#port ElasticacheCluster#port}.

---

##### `PreferredAvailabilityZones`<sup>Optional</sup> <a name="PreferredAvailabilityZones" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.preferredAvailabilityZones"></a>

```go
PreferredAvailabilityZones *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#preferred_availability_zones ElasticacheCluster#preferred_availability_zones}.

---

##### `PreferredOutpostArn`<sup>Optional</sup> <a name="PreferredOutpostArn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.preferredOutpostArn"></a>

```go
PreferredOutpostArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#preferred_outpost_arn ElasticacheCluster#preferred_outpost_arn}.

---

##### `ReplicationGroupId`<sup>Optional</sup> <a name="ReplicationGroupId" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.replicationGroupId"></a>

```go
ReplicationGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#replication_group_id ElasticacheCluster#replication_group_id}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#security_group_ids ElasticacheCluster#security_group_ids}.

---

##### `SecurityGroupNames`<sup>Optional</sup> <a name="SecurityGroupNames" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.securityGroupNames"></a>

```go
SecurityGroupNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#security_group_names ElasticacheCluster#security_group_names}.

---

##### `SnapshotArns`<sup>Optional</sup> <a name="SnapshotArns" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.snapshotArns"></a>

```go
SnapshotArns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#snapshot_arns ElasticacheCluster#snapshot_arns}.

---

##### `SnapshotName`<sup>Optional</sup> <a name="SnapshotName" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.snapshotName"></a>

```go
SnapshotName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#snapshot_name ElasticacheCluster#snapshot_name}.

---

##### `SnapshotRetentionLimit`<sup>Optional</sup> <a name="SnapshotRetentionLimit" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.snapshotRetentionLimit"></a>

```go
SnapshotRetentionLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#snapshot_retention_limit ElasticacheCluster#snapshot_retention_limit}.

---

##### `SnapshotWindow`<sup>Optional</sup> <a name="SnapshotWindow" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.snapshotWindow"></a>

```go
SnapshotWindow *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#snapshot_window ElasticacheCluster#snapshot_window}.

---

##### `SubnetGroupName`<sup>Optional</sup> <a name="SubnetGroupName" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.subnetGroupName"></a>

```go
SubnetGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#subnet_group_name ElasticacheCluster#subnet_group_name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#tags ElasticacheCluster#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#tags_all ElasticacheCluster#tags_all}.

---

### ElasticacheClusterLogDeliveryConfiguration <a name="ElasticacheClusterLogDeliveryConfiguration" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticachecluster"

&elasticachecluster.ElasticacheClusterLogDeliveryConfiguration {
	Destination: *string,
	DestinationType: *string,
	LogFormat: *string,
	LogType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#destination ElasticacheCluster#destination}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration.property.destinationType">DestinationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#destination_type ElasticacheCluster#destination_type}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration.property.logFormat">LogFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#log_format ElasticacheCluster#log_format}. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration.property.logType">LogType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#log_type ElasticacheCluster#log_type}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#destination ElasticacheCluster#destination}.

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration.property.destinationType"></a>

```go
DestinationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#destination_type ElasticacheCluster#destination_type}.

---

##### `LogFormat`<sup>Required</sup> <a name="LogFormat" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration.property.logFormat"></a>

```go
LogFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#log_format ElasticacheCluster#log_format}.

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfiguration.property.logType"></a>

```go
LogType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster#log_type ElasticacheCluster#log_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheClusterCacheNodesList <a name="ElasticacheClusterCacheNodesList" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticachecluster"

elasticachecluster.NewElasticacheClusterCacheNodesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ElasticacheClusterCacheNodesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.get"></a>

```go
func Get(index *f64) ElasticacheClusterCacheNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ElasticacheClusterCacheNodesOutputReference <a name="ElasticacheClusterCacheNodesOutputReference" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticachecluster"

elasticachecluster.NewElasticacheClusterCacheNodesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ElasticacheClusterCacheNodesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.outpostArn">OutpostArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodes">ElasticacheClusterCacheNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OutpostArn`<sup>Required</sup> <a name="OutpostArn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.outpostArn"></a>

```go
func OutpostArn() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodesOutputReference.property.internalValue"></a>

```go
func InternalValue() ElasticacheClusterCacheNodes
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterCacheNodes">ElasticacheClusterCacheNodes</a>

---


### ElasticacheClusterLogDeliveryConfigurationList <a name="ElasticacheClusterLogDeliveryConfigurationList" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticachecluster"

elasticachecluster.NewElasticacheClusterLogDeliveryConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ElasticacheClusterLogDeliveryConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.get"></a>

```go
func Get(index *f64) ElasticacheClusterLogDeliveryConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElasticacheClusterLogDeliveryConfigurationOutputReference <a name="ElasticacheClusterLogDeliveryConfigurationOutputReference" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticachecluster"

elasticachecluster.NewElasticacheClusterLogDeliveryConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ElasticacheClusterLogDeliveryConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.destinationTypeInput">DestinationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.logFormatInput">LogFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.logTypeInput">LogTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.destinationType">DestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.logFormat">LogFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.logType">LogType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `DestinationTypeInput`<sup>Optional</sup> <a name="DestinationTypeInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.destinationTypeInput"></a>

```go
func DestinationTypeInput() *string
```

- *Type:* *string

---

##### `LogFormatInput`<sup>Optional</sup> <a name="LogFormatInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.logFormatInput"></a>

```go
func LogFormatInput() *string
```

- *Type:* *string

---

##### `LogTypeInput`<sup>Optional</sup> <a name="LogTypeInput" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.logTypeInput"></a>

```go
func LogTypeInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.destinationType"></a>

```go
func DestinationType() *string
```

- *Type:* *string

---

##### `LogFormat`<sup>Required</sup> <a name="LogFormat" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.logFormat"></a>

```go
func LogFormat() *string
```

- *Type:* *string

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.logType"></a>

```go
func LogType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticacheCluster.ElasticacheClusterLogDeliveryConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



