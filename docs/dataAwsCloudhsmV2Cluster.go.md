# `dataAwsCloudhsmV2Cluster` Submodule <a name="`dataAwsCloudhsmV2Cluster` Submodule" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCloudhsmV2Cluster <a name="DataAwsCloudhsmV2Cluster" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster aws_cloudhsm_v2_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudhsmv2cluster"

dataawscloudhsmv2cluster.NewDataAwsCloudhsmV2Cluster(scope Construct, id *string, config DataAwsCloudhsmV2ClusterConfig) DataAwsCloudhsmV2Cluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig">DataAwsCloudhsmV2ClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig">DataAwsCloudhsmV2ClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.resetClusterState">ResetClusterState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetClusterState` <a name="ResetClusterState" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.resetClusterState"></a>

```go
func ResetClusterState()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudhsmv2cluster"

dataawscloudhsmv2cluster.DataAwsCloudhsmV2Cluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudhsmv2cluster"

dataawscloudhsmv2cluster.DataAwsCloudhsmV2Cluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudhsmv2cluster"

dataawscloudhsmv2cluster.DataAwsCloudhsmV2Cluster_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterCertificates">ClusterCertificates</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList">DataAwsCloudhsmV2ClusterClusterCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.securityGroupId">SecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterStateInput">ClusterStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterState">ClusterState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ClusterCertificates`<sup>Required</sup> <a name="ClusterCertificates" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterCertificates"></a>

```go
func ClusterCertificates() DataAwsCloudhsmV2ClusterClusterCertificatesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList">DataAwsCloudhsmV2ClusterClusterCertificatesList</a>

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.securityGroupId"></a>

```go
func SecurityGroupId() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `ClusterStateInput`<sup>Optional</sup> <a name="ClusterStateInput" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterStateInput"></a>

```go
func ClusterStateInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `ClusterState`<sup>Required</sup> <a name="ClusterState" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterState"></a>

```go
func ClusterState() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCloudhsmV2ClusterClusterCertificates <a name="DataAwsCloudhsmV2ClusterClusterCertificates" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificates.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudhsmv2cluster"

&dataawscloudhsmv2cluster.DataAwsCloudhsmV2ClusterClusterCertificates {

}
```


### DataAwsCloudhsmV2ClusterConfig <a name="DataAwsCloudhsmV2ClusterConfig" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudhsmv2cluster"

&dataawscloudhsmv2cluster.DataAwsCloudhsmV2ClusterConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterId: *string,
	ClusterState: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#cluster_id DataAwsCloudhsmV2Cluster#cluster_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.clusterState">ClusterState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#cluster_state DataAwsCloudhsmV2Cluster#cluster_state}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#id DataAwsCloudhsmV2Cluster#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#cluster_id DataAwsCloudhsmV2Cluster#cluster_id}.

---

##### `ClusterState`<sup>Optional</sup> <a name="ClusterState" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.clusterState"></a>

```go
ClusterState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#cluster_state DataAwsCloudhsmV2Cluster#cluster_state}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#id DataAwsCloudhsmV2Cluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsCloudhsmV2ClusterClusterCertificatesList <a name="DataAwsCloudhsmV2ClusterClusterCertificatesList" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudhsmv2cluster"

dataawscloudhsmv2cluster.NewDataAwsCloudhsmV2ClusterClusterCertificatesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsCloudhsmV2ClusterClusterCertificatesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.get"></a>

```go
func Get(index *f64) DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference <a name="DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawscloudhsmv2cluster"

dataawscloudhsmv2cluster.NewDataAwsCloudhsmV2ClusterClusterCertificatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.awsHardwareCertificate">AwsHardwareCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.clusterCertificate">ClusterCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.clusterCsr">ClusterCsr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.hsmCertificate">HsmCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.manufacturerHardwareCertificate">ManufacturerHardwareCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificates">DataAwsCloudhsmV2ClusterClusterCertificates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsHardwareCertificate`<sup>Required</sup> <a name="AwsHardwareCertificate" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.awsHardwareCertificate"></a>

```go
func AwsHardwareCertificate() *string
```

- *Type:* *string

---

##### `ClusterCertificate`<sup>Required</sup> <a name="ClusterCertificate" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.clusterCertificate"></a>

```go
func ClusterCertificate() *string
```

- *Type:* *string

---

##### `ClusterCsr`<sup>Required</sup> <a name="ClusterCsr" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.clusterCsr"></a>

```go
func ClusterCsr() *string
```

- *Type:* *string

---

##### `HsmCertificate`<sup>Required</sup> <a name="HsmCertificate" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.hsmCertificate"></a>

```go
func HsmCertificate() *string
```

- *Type:* *string

---

##### `ManufacturerHardwareCertificate`<sup>Required</sup> <a name="ManufacturerHardwareCertificate" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.manufacturerHardwareCertificate"></a>

```go
func ManufacturerHardwareCertificate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsCloudhsmV2ClusterClusterCertificates
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificates">DataAwsCloudhsmV2ClusterClusterCertificates</a>

---



