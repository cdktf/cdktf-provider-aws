# `dataAwsElasticacheCluster` Submodule <a name="`dataAwsElasticacheCluster` Submodule" id="@cdktf/provider-aws.dataAwsElasticacheCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsElasticacheCluster <a name="DataAwsElasticacheCluster" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/elasticache_cluster aws_elasticache_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawselasticachecluster"

dataawselasticachecluster.NewDataAwsElasticacheCluster(scope Construct, id *string, config DataAwsElasticacheClusterConfig) DataAwsElasticacheCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterConfig">DataAwsElasticacheClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterConfig">DataAwsElasticacheClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawselasticachecluster"

dataawselasticachecluster.DataAwsElasticacheCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawselasticachecluster"

dataawselasticachecluster.DataAwsElasticacheCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawselasticachecluster"

dataawselasticachecluster.DataAwsElasticacheCluster_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.cacheNodes">CacheNodes</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesList">DataAwsElasticacheClusterCacheNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.clusterAddress">ClusterAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.configurationEndpoint">ConfigurationEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.ipDiscovery">IpDiscovery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.logDeliveryConfiguration">LogDeliveryConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationList">DataAwsElasticacheClusterLogDeliveryConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.maintenanceWindow">MaintenanceWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.networkType">NetworkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.nodeType">NodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.notificationTopicArn">NotificationTopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.numCacheNodes">NumCacheNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.parameterGroupName">ParameterGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.preferredOutpostArn">PreferredOutpostArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.replicationGroupId">ReplicationGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.securityGroupNames">SecurityGroupNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.snapshotRetentionLimit">SnapshotRetentionLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.snapshotWindow">SnapshotWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.subnetGroupName">SubnetGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `CacheNodes`<sup>Required</sup> <a name="CacheNodes" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.cacheNodes"></a>

```go
func CacheNodes() DataAwsElasticacheClusterCacheNodesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesList">DataAwsElasticacheClusterCacheNodesList</a>

---

##### `ClusterAddress`<sup>Required</sup> <a name="ClusterAddress" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.clusterAddress"></a>

```go
func ClusterAddress() *string
```

- *Type:* *string

---

##### `ConfigurationEndpoint`<sup>Required</sup> <a name="ConfigurationEndpoint" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.configurationEndpoint"></a>

```go
func ConfigurationEndpoint() *string
```

- *Type:* *string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `IpDiscovery`<sup>Required</sup> <a name="IpDiscovery" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.ipDiscovery"></a>

```go
func IpDiscovery() *string
```

- *Type:* *string

---

##### `LogDeliveryConfiguration`<sup>Required</sup> <a name="LogDeliveryConfiguration" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.logDeliveryConfiguration"></a>

```go
func LogDeliveryConfiguration() DataAwsElasticacheClusterLogDeliveryConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationList">DataAwsElasticacheClusterLogDeliveryConfigurationList</a>

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.maintenanceWindow"></a>

```go
func MaintenanceWindow() *string
```

- *Type:* *string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.networkType"></a>

```go
func NetworkType() *string
```

- *Type:* *string

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.nodeType"></a>

```go
func NodeType() *string
```

- *Type:* *string

---

##### `NotificationTopicArn`<sup>Required</sup> <a name="NotificationTopicArn" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.notificationTopicArn"></a>

```go
func NotificationTopicArn() *string
```

- *Type:* *string

---

##### `NumCacheNodes`<sup>Required</sup> <a name="NumCacheNodes" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.numCacheNodes"></a>

```go
func NumCacheNodes() *f64
```

- *Type:* *f64

---

##### `ParameterGroupName`<sup>Required</sup> <a name="ParameterGroupName" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.parameterGroupName"></a>

```go
func ParameterGroupName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PreferredOutpostArn`<sup>Required</sup> <a name="PreferredOutpostArn" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.preferredOutpostArn"></a>

```go
func PreferredOutpostArn() *string
```

- *Type:* *string

---

##### `ReplicationGroupId`<sup>Required</sup> <a name="ReplicationGroupId" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.replicationGroupId"></a>

```go
func ReplicationGroupId() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupNames`<sup>Required</sup> <a name="SecurityGroupNames" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.securityGroupNames"></a>

```go
func SecurityGroupNames() *[]*string
```

- *Type:* *[]*string

---

##### `SnapshotRetentionLimit`<sup>Required</sup> <a name="SnapshotRetentionLimit" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.snapshotRetentionLimit"></a>

```go
func SnapshotRetentionLimit() *f64
```

- *Type:* *f64

---

##### `SnapshotWindow`<sup>Required</sup> <a name="SnapshotWindow" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.snapshotWindow"></a>

```go
func SnapshotWindow() *string
```

- *Type:* *string

---

##### `SubnetGroupName`<sup>Required</sup> <a name="SubnetGroupName" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.subnetGroupName"></a>

```go
func SubnetGroupName() *string
```

- *Type:* *string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsElasticacheClusterCacheNodes <a name="DataAwsElasticacheClusterCacheNodes" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawselasticachecluster"

&dataawselasticachecluster.DataAwsElasticacheClusterCacheNodes {

}
```


### DataAwsElasticacheClusterConfig <a name="DataAwsElasticacheClusterConfig" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawselasticachecluster"

&dataawselasticachecluster.DataAwsElasticacheClusterConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterId: *string,
	Id: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_cluster#cluster_id DataAwsElasticacheCluster#cluster_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_cluster#id DataAwsElasticacheCluster#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_cluster#tags DataAwsElasticacheCluster#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_cluster#cluster_id DataAwsElasticacheCluster#cluster_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_cluster#id DataAwsElasticacheCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_cluster#tags DataAwsElasticacheCluster#tags}.

---

### DataAwsElasticacheClusterLogDeliveryConfiguration <a name="DataAwsElasticacheClusterLogDeliveryConfiguration" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawselasticachecluster"

&dataawselasticachecluster.DataAwsElasticacheClusterLogDeliveryConfiguration {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsElasticacheClusterCacheNodesList <a name="DataAwsElasticacheClusterCacheNodesList" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawselasticachecluster"

dataawselasticachecluster.NewDataAwsElasticacheClusterCacheNodesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsElasticacheClusterCacheNodesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesList.get"></a>

```go
func Get(index *f64) DataAwsElasticacheClusterCacheNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsElasticacheClusterCacheNodesOutputReference <a name="DataAwsElasticacheClusterCacheNodesOutputReference" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawselasticachecluster"

dataawselasticachecluster.NewDataAwsElasticacheClusterCacheNodesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsElasticacheClusterCacheNodesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.property.outpostArn">OutpostArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodes">DataAwsElasticacheClusterCacheNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OutpostArn`<sup>Required</sup> <a name="OutpostArn" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.property.outpostArn"></a>

```go
func OutpostArn() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsElasticacheClusterCacheNodes
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterCacheNodes">DataAwsElasticacheClusterCacheNodes</a>

---


### DataAwsElasticacheClusterLogDeliveryConfigurationList <a name="DataAwsElasticacheClusterLogDeliveryConfigurationList" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawselasticachecluster"

dataawselasticachecluster.NewDataAwsElasticacheClusterLogDeliveryConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsElasticacheClusterLogDeliveryConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationList.get"></a>

```go
func Get(index *f64) DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference <a name="DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawselasticachecluster"

dataawselasticachecluster.NewDataAwsElasticacheClusterLogDeliveryConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.property.destinationType">DestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.property.logFormat">LogFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.property.logType">LogType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfiguration">DataAwsElasticacheClusterLogDeliveryConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.property.destinationType"></a>

```go
func DestinationType() *string
```

- *Type:* *string

---

##### `LogFormat`<sup>Required</sup> <a name="LogFormat" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.property.logFormat"></a>

```go
func LogFormat() *string
```

- *Type:* *string

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.property.logType"></a>

```go
func LogType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsElasticacheClusterLogDeliveryConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticacheCluster.DataAwsElasticacheClusterLogDeliveryConfiguration">DataAwsElasticacheClusterLogDeliveryConfiguration</a>

---



