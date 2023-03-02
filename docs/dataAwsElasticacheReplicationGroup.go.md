# `dataAwsElasticacheReplicationGroup` Submodule <a name="`dataAwsElasticacheReplicationGroup` Submodule" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsElasticacheReplicationGroup <a name="DataAwsElasticacheReplicationGroup" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/elasticache_replication_group aws_elasticache_replication_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawselasticachereplicationgroup"

dataawselasticachereplicationgroup.NewDataAwsElasticacheReplicationGroup(scope Construct, id *string, config DataAwsElasticacheReplicationGroupConfig) DataAwsElasticacheReplicationGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig">DataAwsElasticacheReplicationGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig">DataAwsElasticacheReplicationGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawselasticachereplicationgroup"

dataawselasticachereplicationgroup.DataAwsElasticacheReplicationGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawselasticachereplicationgroup"

dataawselasticachereplicationgroup.DataAwsElasticacheReplicationGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawselasticachereplicationgroup"

dataawselasticachereplicationgroup.DataAwsElasticacheReplicationGroup_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.authTokenEnabled">AuthTokenEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.automaticFailoverEnabled">AutomaticFailoverEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.configurationEndpointAddress">ConfigurationEndpointAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.logDeliveryConfiguration">LogDeliveryConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList">DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.memberClusters">MemberClusters</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.multiAzEnabled">MultiAzEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.nodeType">NodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.numberCacheClusters">NumberCacheClusters</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.numCacheClusters">NumCacheClusters</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.numNodeGroups">NumNodeGroups</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.primaryEndpointAddress">PrimaryEndpointAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.readerEndpointAddress">ReaderEndpointAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.replicasPerNodeGroup">ReplicasPerNodeGroup</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.replicationGroupDescription">ReplicationGroupDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.snapshotRetentionLimit">SnapshotRetentionLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.snapshotWindow">SnapshotWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.replicationGroupIdInput">ReplicationGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.replicationGroupId">ReplicationGroupId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AuthTokenEnabled`<sup>Required</sup> <a name="AuthTokenEnabled" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.authTokenEnabled"></a>

```go
func AuthTokenEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AutomaticFailoverEnabled`<sup>Required</sup> <a name="AutomaticFailoverEnabled" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.automaticFailoverEnabled"></a>

```go
func AutomaticFailoverEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ConfigurationEndpointAddress`<sup>Required</sup> <a name="ConfigurationEndpointAddress" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.configurationEndpointAddress"></a>

```go
func ConfigurationEndpointAddress() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `LogDeliveryConfiguration`<sup>Required</sup> <a name="LogDeliveryConfiguration" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.logDeliveryConfiguration"></a>

```go
func LogDeliveryConfiguration() DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList">DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList</a>

---

##### `MemberClusters`<sup>Required</sup> <a name="MemberClusters" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.memberClusters"></a>

```go
func MemberClusters() *[]*string
```

- *Type:* *[]*string

---

##### `MultiAzEnabled`<sup>Required</sup> <a name="MultiAzEnabled" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.multiAzEnabled"></a>

```go
func MultiAzEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.nodeType"></a>

```go
func NodeType() *string
```

- *Type:* *string

---

##### `NumberCacheClusters`<sup>Required</sup> <a name="NumberCacheClusters" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.numberCacheClusters"></a>

```go
func NumberCacheClusters() *f64
```

- *Type:* *f64

---

##### `NumCacheClusters`<sup>Required</sup> <a name="NumCacheClusters" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.numCacheClusters"></a>

```go
func NumCacheClusters() *f64
```

- *Type:* *f64

---

##### `NumNodeGroups`<sup>Required</sup> <a name="NumNodeGroups" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.numNodeGroups"></a>

```go
func NumNodeGroups() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PrimaryEndpointAddress`<sup>Required</sup> <a name="PrimaryEndpointAddress" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.primaryEndpointAddress"></a>

```go
func PrimaryEndpointAddress() *string
```

- *Type:* *string

---

##### `ReaderEndpointAddress`<sup>Required</sup> <a name="ReaderEndpointAddress" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.readerEndpointAddress"></a>

```go
func ReaderEndpointAddress() *string
```

- *Type:* *string

---

##### `ReplicasPerNodeGroup`<sup>Required</sup> <a name="ReplicasPerNodeGroup" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.replicasPerNodeGroup"></a>

```go
func ReplicasPerNodeGroup() *f64
```

- *Type:* *f64

---

##### `ReplicationGroupDescription`<sup>Required</sup> <a name="ReplicationGroupDescription" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.replicationGroupDescription"></a>

```go
func ReplicationGroupDescription() *string
```

- *Type:* *string

---

##### `SnapshotRetentionLimit`<sup>Required</sup> <a name="SnapshotRetentionLimit" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.snapshotRetentionLimit"></a>

```go
func SnapshotRetentionLimit() *f64
```

- *Type:* *f64

---

##### `SnapshotWindow`<sup>Required</sup> <a name="SnapshotWindow" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.snapshotWindow"></a>

```go
func SnapshotWindow() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ReplicationGroupIdInput`<sup>Optional</sup> <a name="ReplicationGroupIdInput" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.replicationGroupIdInput"></a>

```go
func ReplicationGroupIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ReplicationGroupId`<sup>Required</sup> <a name="ReplicationGroupId" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.replicationGroupId"></a>

```go
func ReplicationGroupId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsElasticacheReplicationGroupConfig <a name="DataAwsElasticacheReplicationGroupConfig" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawselasticachereplicationgroup"

&dataawselasticachereplicationgroup.DataAwsElasticacheReplicationGroupConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ReplicationGroupId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.replicationGroupId">ReplicationGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_replication_group#replication_group_id DataAwsElasticacheReplicationGroup#replication_group_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_replication_group#id DataAwsElasticacheReplicationGroup#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ReplicationGroupId`<sup>Required</sup> <a name="ReplicationGroupId" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.replicationGroupId"></a>

```go
ReplicationGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_replication_group#replication_group_id DataAwsElasticacheReplicationGroup#replication_group_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticache_replication_group#id DataAwsElasticacheReplicationGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsElasticacheReplicationGroupLogDeliveryConfiguration <a name="DataAwsElasticacheReplicationGroupLogDeliveryConfiguration" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawselasticachereplicationgroup"

&dataawselasticachereplicationgroup.DataAwsElasticacheReplicationGroupLogDeliveryConfiguration {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList <a name="DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawselasticachereplicationgroup"

dataawselasticachereplicationgroup.NewDataAwsElasticacheReplicationGroupLogDeliveryConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.get"></a>

```go
func Get(index *f64) DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference <a name="DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawselasticachereplicationgroup"

dataawselasticachereplicationgroup.NewDataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destinationType">DestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logFormat">LogFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logType">LogType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfiguration">DataAwsElasticacheReplicationGroupLogDeliveryConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.destinationType"></a>

```go
func DestinationType() *string
```

- *Type:* *string

---

##### `LogFormat`<sup>Required</sup> <a name="LogFormat" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logFormat"></a>

```go
func LogFormat() *string
```

- *Type:* *string

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.logType"></a>

```go
func LogType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsElasticacheReplicationGroupLogDeliveryConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsElasticacheReplicationGroup.DataAwsElasticacheReplicationGroupLogDeliveryConfiguration">DataAwsElasticacheReplicationGroupLogDeliveryConfiguration</a>

---



